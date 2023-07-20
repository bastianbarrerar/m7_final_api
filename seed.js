const { User } = require("./app/models/user.model");
const { Bootcamp } = require("./app/models/bootcamp.model");
const userBulk = [
  {
    firstName: "Mateo",
    lastName: "Diaz",
    email: "mateo.diaz@correo.com",
    password: "$2b$10$pN6uJ2It3K8YgSl6puDYZ.aBgMp2LL9PLGI0mYdNm1fSj0wn4nnKW",
  },
  {
    firstName: "Santiago",
    lastName: "Mejias",
    email: "santiago.mejias@correo.com",
    password: "$2b$10$0r8bGWOCZr.h.KeofXGwiuIyLWFNYgOUi/3r442thbJEtoAzKn8ze",
  },
  {
    firstName: "Lucas",
    lastName: "Rojas",
    email: "lucas.rojas@correo.com",
    password: "$2b$10$b7hq.kl5miurRr2Uf3hw2.DZ1zEmFziWVdEyo888idRrA7phHZ7aC",
  },
  {
    firstName: "Facundo",
    lastName: "Fernandez",
    email: "facundo.fernandez@correo.com",
    password: "$2b$10$SwfJWr60ufCsD3AHaJVwBua9s5l1Zf5ht9lljwejTLT/YatGtsU/e",
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
