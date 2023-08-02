const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/task")
  .then(() => console.log("Database is Connected"))
  .catch((err) => console.error(err));

const User = require("./routers/user");
const Task = require("./routers/task");

app.use(User);
app.use(Task);

const port = process.env.PORT || 4040;
app.listen(port, () => console.log(`Server is runing at port ${port}`));

/*
  /task POST
  /task GET
  /task/:id GET
  /task/:id PATCH
  /task/:id DELETE

  /user POST
  /user GET
  /user/:id GET
  /user/:id PATCH
  /user/:id DELETE
*/
