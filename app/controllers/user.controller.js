const { User } = require("../models/user.model");
const { Bootcamp } = require("../models/bootcamp.model");

const createUser = async (req, res) => {
  try {
    let user = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    };
    const info = await User.create(user);
    res.status(201).json({ info: "user created" });
  } catch (err) {
    console.error(err.message);
    res.status(400).json(err);
  }
};

const findAll = async (req, res) => {
  try {
    const info = await User.findAll({});
    res.status(200).json(info);
  } catch (err) {
    console.error(err.message);
    res.status(404).json(err);
  }
};

const findUserById = async (req, res) => {
  try {
    const id = req.params.id;
    let info = await User.findOne({ where: { id: id }, include: Bootcamp });
    res.status(200).json(info);
  } catch (err) {
    console.error(err.message);
    res.status(404).json(err);
  }
};

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const info = await User.update(req.body, { where: { id: id } });
    res.status(200).json({ info: `user id ${id} updated successfully` });
  } catch (err) {
    console.error(err.message);
    res.status(400).json(err);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const info = await User.destroy({ where: { id: id } });
    res.status(200).json({ info: `user id ${id} deleted successfully` });
  } catch (err) {
    console.error(err.message);
    res.status(400).json(err);
  }
};

const getUserBootcamps = async (req, res) => {
  try {
    const info = await User.findAll({ include: Bootcamp });
    res.status(200).json(info);
  } catch (err) {
    console.error(err.message);
  }
};



module.exports = {
  createUser,
  findAll,
  findUserById,
  updateUserById,
  deleteUserById,
  getUserBootcamps
};
