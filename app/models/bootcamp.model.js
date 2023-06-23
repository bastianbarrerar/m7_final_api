const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db.config.js");
const { User } = require("./user.model.js");

const Bootcamp = sequelize.define(
  "bootcamps",
  {
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    cue: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 5, max: 10 },
    },

    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

User.belongsToMany(Bootcamp, { through: "User_bootcamp", foreignKey: "user_id" });
Bootcamp.belongsToMany(User, { through: "User_bootcamp", foreignKey: "bootcamp_id" });


module.exports = { Bootcamp };
