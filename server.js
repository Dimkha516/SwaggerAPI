const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./Connection/connect");
const usersRoutes = require("./Routes/user.routes");

const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;

// CONNEXION TO CLUSTER:
connectDB();

// MIDDLEWARES:
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//
app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log("running on port: " + port);
});
