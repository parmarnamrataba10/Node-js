

import express from "express";

const app = express();

app.use(express.urlencoded());

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


app.post("/", (req, res) => {
  const { name } = req.body;

  const newStudent = {
    id: studentList.length + 1,
    name,
  };

  studentList.push(newStudent);
  res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
  const { id } = req.params;

  const student = studentList.find((s) => s.id === Number(id));

  console.log("id", id);

  res.render("edit", { student });
});

app.post("/edit/:id", (req, res) => {
  const { id } = req.params;

  const index = studentList.findIndex((s) => s.id === Number(id));

  const { name } = req.body;

  studentList[index] = { name };

  res.redirect("/");
});


const port = 5000;

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`server is running on ${port}`);
});