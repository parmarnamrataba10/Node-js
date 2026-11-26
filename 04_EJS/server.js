
   
import express from "express";

const app = express();

const studentList = [
  {
    id: 1,
    name: "Peter",
  },
  {
    id: 2,
    name: "Michelle",
  },
  {
    id: 3,
    name: "Harry",
  },
];

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", { studentList });
});

app.get("/add", (req, res) => {
  res.render("add");
});

const port = 5000;

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`server is running on ${port}`);
});