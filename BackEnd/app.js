const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Online_Exam", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Sucessfully Connected");
  }
});
app.use(cors());

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get("/", (req, res) => {
  console.log("Welcome");
  res.send("hello");
});
app.post("/teacher/questions", (req, res) => {});
app.post("/teacher", (req, res) => {
  console.log(req.body);
  res.send().status();
});
app.listen(5000, () => {
  console.log("Running on Server 5000");
});
