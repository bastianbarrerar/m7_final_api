const { User } = require("./app/models/user.model");
const { Bootcamp } = require("./app/models/bootcamp.model");
const userBulk = [
  {
    firstName: "Mateo",
    lastName: "Diaz",
    email: "mateo.diaz@correo.com",
    password: "mateo123456",
  },
  {
    firstName: "Santiago",
    lastName: "Mejias",
    email: "santiago.mejias@correo.com",
    password: "santiago123456",
  },
  {
    firstName: "Lucas",
    lastName: "Rojas",
    email: "lucas.rojas@correo.com",
    password: "lucas123456",
  },
  {
    firstName: "Facundo",
    lastName: "Fernandez",
    email: "facundo.fernandez@correo.com",
    password: "facundo123456",
  },
];
const bootcampBulk = [
  {
    title: "Introduciendo El Bootcamp De React.",
    cue: "10",
    description:
      "React es la librería más usada en JavaScript para el desarrollo de interfaces.",
  },
  {
    title: "Bootcamp Desarrollo Web Full Stack.",
    cue: "8",
    description:
      "Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares como: JavaScript, nodeJS, Angular, MongoDB, ExpressJS.",
  },
  {
    title: "Bootcamp Big Data, Inteligencia Artificial & Machine Learning.",
    cue: 5,
    description:
      "Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning.",
  },
];

const manyBulk = async (user_id, bootcamp_id) => {
  try {
    const user = await User.findOne({ where: { id: user_id } });
    const bootcamp = await Bootcamp.findOne({
      where: { id: bootcamp_id },
    });
    await user.addBootcamp(bootcamp);
    console.log(`user id ${user_id} added to bootcamp id ${bootcamp_id}`);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = { userBulk, bootcampBulk, manyBulk };
