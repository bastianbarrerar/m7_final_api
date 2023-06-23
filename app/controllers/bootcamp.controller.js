const { Bootcamp } = require("../models/bootcamp.model");
const { User } = require("../models/user.model");

const createBootcamp = async (req, res) => {
  try {
    let bootcamp = {
      title: req.body.title,
      cue: req.body.cue,
      description: req.body.description,
    };
    const info = await Bootcamp.create(bootcamp);
    res.status(201).json({ info: "bootcamp created" });
  } catch (err) {
    console.error(err.message);
    res.status(400).json(err);
  }
};

const findAll = async (req, res) => {
  try {
    const info = await Bootcamp.findAll({});
    res.status(200).json(info);
  } catch (err) {
    console.error(err.message);
    res.status(404).json(err);
  }
};

const findById = async (req, res) => {
  try {
    const id = req.params.id;
    let info = await Bootcamp.findOne({ where: { id: id } });
    res.status(200).json(info);
  } catch (err) {
    console.error(err.message);
    res.status(404).json(err);
  }
};

const addUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.user_id } });
    const bootcamp = await Bootcamp.findOne({
      where: { id: req.params.bootcamp_id },
    });
    await user.addBootcamp(bootcamp);
    res
      .status(201)
      .json({
        info: `user id ${req.params.user_id} added to bootcamp id ${req.params.bootcamp_id}`,
      });
  } catch (err) {
    console.error(err.message);
    res.status(400).json(err);
  }
};

const getBootcampUsers = async (req, res) =>{
  try {
    const info = await Bootcamp.findAll({include: User})
    res.status(200).json(info);
  } catch (err) {
    console.error(err.message)
  }
}

const getBootcampUsersById = async (req, res) => {
  try {
    const id = req.params.id;
    let info = await Bootcamp.findOne({ where: { id: id }, include: User });
    res.status(200).json(info);
  } catch (err) {
    console.error(err.message)
  }
}

module.exports = {
  createBootcamp,
  findAll,
  findById,
  addUser,
  getBootcampUsers,
  getBootcampUsersById,
};
