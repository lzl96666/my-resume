var moment = require("moment");
const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  var Message = sequelize.define(
    "Message",
    {

      message: DataTypes.STRING,
      userid: DataTypes.STRING,
      createdAt: {
        type: Sequelize.DATE,
        get () {
          return moment(this.getDataValue("createdAt")).format(
            "YYYY-MM-DD HH:mm:ss"
          );
        }
      },
      updatedAt: {
        type: Sequelize.DATE,
        get () {
          return moment(this.getDataValue("updatedAt")).format(
            "YYYY-MM-DD HH:mm:ss"
          );
        }
      }
    },
    {
      // underscored: true
    }
  );
  return Message;
};
