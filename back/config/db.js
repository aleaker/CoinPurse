const S = require("sequelize");
const db = new S("postgres://localhost:5432/coinpurse", { logging: false });
module.exports = db;
