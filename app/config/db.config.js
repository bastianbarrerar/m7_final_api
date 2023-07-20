const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE || db_jwtbootcamp,
  process.env.DB_USER || postgres,
  process.env.DB_PASSWORD || postgres,
  {
    host: process.env.DB_HOST || localhost,
    dialect: "postgres",
  }
);

module.exports = { sequelize }
