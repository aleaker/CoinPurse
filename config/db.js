const S = require("sequelize");
require("dotenv").config();

// const devConfig = {
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   host: process.env.PG_HOST,
//   database: process.env.PG_DATABASE,
//   port: process.env.PG_PORT,
// };

const devConfig = `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

 console.log("aaaaaaaaaaaaaaaaaaaa")
const proConfig = {
  connectionString: process.env.DATABASE_URL //heroku addon
};

const db = new S(
  process.env.NODE_ENV === "production" ? proConfig : devConfig,
  { logging: false }
);

module.exports = db;

//process.env.NODE_ENV === "production" ? proConfig : devConfig
