const express = require("express");
const app = express();
// const history = require('connect-history-api-fallback')
// app.use(history())

//ip&port
var hostName = "0.0.0.0";
var port = 8082;

//静态资源
app.use(express.static("dist"));

var rootRouter = require("./routes/mock");
app.use("/", rootRouter);

//启动服务
app.listen(port, hostName, function() {
  console.log(`服务器运行在http://${hostName}:${port}`);
});
