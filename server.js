const { sequelize } = require('./app/config/db.config')
require("dotenv").config();
const { User } = require('./app/models/user.model')
const { Bootcamp } = require("./app/models/bootcamp.model");
const { userBulk, bootcampBulk, manyBulk } = require('./seed')
const { app } = require('./app')


const main = async () => {
    try {
      await sequelize.authenticate();
      await sequelize.sync({ force: true, alter: true})
      await User.bulkCreate(userBulk)
      await Bootcamp.bulkCreate(bootcampBulk);
      await manyBulk(1,1);
      await manyBulk(2, 1);
      await manyBulk(1, 2);
      await manyBulk(1, 3);
      await manyBulk(2, 3);
      await manyBulk(3, 3);
      app.listen(process.env.PORT, () => {
        console.log(`server listening to port ${process.env.PORT}`);
      });
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
}
main();

