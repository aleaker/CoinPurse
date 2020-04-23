const S = require("sequelize");
const db = require("../config/db");

class Storage extends S.Model {}

Storage.init(
  {
    amount: {
      type: S.FLOAT,
      allowNull: false,
    },
    storageName: {
      type: S.STRING,
      allowNull: false,
    },
    pk: {
      type: S.INTEGER,
    },
    date: {
      type: S.DATE,
    },
    coinId: {
      type: S.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelname: "storage" }
);

module.exports = Storage;
