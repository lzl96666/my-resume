var express = require("express");
var router = express.Router();
var fs = require("fs");
const marked = require("marked");
const jwt = require("jsonwebtoken");
const secret = "it's a secret";

// 寻找文件夹内的md比较
const pathName = "./markdown";
let filesArr = [];
const getNotes = () => {
  fs.readdir(pathName, (err, files) => {
    filesArr = files;
  });
};

router.get("/files", (req, res) => {
  getNotes();
  res.json({
    list: filesArr
  });
});

router.get("/files/:filesName", (req, res) => {
  const filesName = decodeURI(req.params.filesName);
  console.log(filesName);
  fs.readFile(`./markdown/${filesName}`, (err, data) => {
    if (err) {
      res.send("找不到该md");
    } else {
      res.header("Content-Type", "text/html;charset=utf-8");
      res.send(marked(data.toString()));
    }
  });
});

// 数据库相关
var db = require("../models");
db.sequelize.sync().then(function () {

  //一对一
  db.Message.belongsTo(db.User, { foreignKey: 'userid', targetKey: 'id' });

  router.get("/api/messages", function (req, res) {
    db.Message.findAll({
      order: [["updatedAt", "DESC"]]
    }).then(function (dbMessage) {

      var arry = dbMessage;
      let arr = []
      Promise.all(arry.map(function (elem) {
        return new Promise(function (resolve, reject) {
          elem.getUser().then(res => {
            arr.push({
              id: elem.id,
              message: elem.message,
              user: res,
              updatedAt: elem.updatedAt,
              createdAt: elem.createdAt
            })
            resolve();
          })

        })
      })).then(function (data) {
        res.json(arr)
      })


    });
  });
  // 留言
  router.post("/api/messages", function (req, res) {
    const { userid, name, username, message, head, token } = req.query;

    jwt.verify(token, secret, function (err, decode) {
      if (err) {
        console.log(err.message)
        res.json({
          success: false,
          message: "登录过期，请重新登录"
        })
      } else {
        if (decode.data == username) { //token验证通过
          // 修改用户信息
          db.User.findOne({ where: { name: username } }).then(dbMessage => {
            dbMessage.nickname = name;
            dbMessage.head = head;
            dbMessage.save()
          })

          //创建留言
          db.Message.create({ message: message, userid: userid }).then(
            dbMessage => {
              res.json({
                success: true,
                message: "添加成功"
              });
            }
          );
        } else {
          res.json({
            success: false,
            message: "登录过期，请重新登录"
          })
        }
      }
    })


  });
  //登录
  router.post("/api/login", function (req, res) {
    const { username, password } = req.query
    db.User.findOne({ where: { name: username } }).then(dbMessage => {
      if (dbMessage) {
        //找到该登录用户
        //验证密码
        if (dbMessage.password === password) {
          res.json({
            success: true,
            message: "登录成功",
            user: {
              username: dbMessage.name,
              nickname: dbMessage.nickname,
              head: dbMessage.head,
              userid: dbMessage.id,
              token: jwt.sign(
                {
                  data: username,
                  // 设置 token 过期时间，一小时后，秒为单位
                  exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30
                },
                secret
              )
            }
          });
        } else {
          res.json({
            success: false,
            message: "密码错误"
          });
        }
      } else {
        //账号或密码不存在
        res.json({
          success: false,
          message: "账号不存在"
        });
      }
    })
  })
  //注册
  router.post("/api/register", function (req, res) {
    const { username, password, nickname } = req.query
    // 判断该name是否已被注册
    db.User.findOne({ where: { name: username } }).then(dbMessags => {
      if (dbMessags) {
        res.json({
          success: false,
          message: "该账号已被注册"
        });
      } else {
        db.User.create({ name: username, password: password, nickname: nickname }).then(dbMessage => {
          res.json({
            success: true,
            message: "注册成功"
          });
        })
      }
    })

  })
  //获得用户信息
  router.get("/api/user/:username", function (req, res) {
    const { token } = req.query
    const { username } = req.params
    //  验证token
    jwt.verify(token, secret, function (err, decode) {
      if (err) {
        console.log(err.message)
        res.json({
          success: false,
          message: "登录过期，请重新登录"
        })
      } else {
        if (decode.data == username) {
          db.User.findOne({ where: { name: username } }).then(dbMessage => {
            res.json({
              success: true,
              message: "获取成功",
              user: {
                head: dbMessage.head,
                userid: dbMessage.id,
                nickname: dbMessage.nickname
              }
            })
          })
        } else {
          res.json({
            success: false,
            message: "登录过期，请重新登录"
          })
        }
      }
    })

  })

});

module.exports = router;
