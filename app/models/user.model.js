const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db.config.js");

const User = sequelize.define(
  "users",
  {
    firstName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    lastName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        is: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      },
    },
  },
  {
    timestamps: true,
  }
);


module.exports = { User }