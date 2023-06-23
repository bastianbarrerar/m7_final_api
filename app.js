const express = require("express");
const cors = require("cors");
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//routes
app.use("/api/v1/users", require("./app/routes/users.routes"));
app.use("/api/v1/bootcamps", require("./app/routes/bootcamps.routes"))


//root
app.get("/", (req, res) => {
  res.status(200).json({ message: "connected to server" });
});


module.exports = { app }