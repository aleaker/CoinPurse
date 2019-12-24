const crypto = require("crypto");
const S = require("sequelize");
const db = require("../config/db");

class User extends S.Model {}

User.init(
  {
    username: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
       unique:{
         args:true,
         msg:"Username already in use"
       }
    },
    password: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: S.STRING,
      allowNull: true,
    },
    salt: {
      type: S.TEXT
    },
    isAdmin: {
      type: S.BOOLEAN,
      defaultValue: false
    }
  },
  { sequelize: db, modelname: "user" }
);

User.prototype.hashPassword = function(password) {
  return crypto
    .createHmac("sha1", this.salt)
    .update(password)
    .digest("hex");
};
User.prototype.randomSalt = function() {
  return crypto.randomBytes(20).toString("hex");
};
User.prototype.validatePassword = function(password) {
  let newPassword = this.hashPassword(password);
  return newPassword === this.password;
};

User.beforeCreate(user => {
  user.salt = user.randomSalt();
  user.password = user.hashPassword(user.password);
});

module.exports = User;
