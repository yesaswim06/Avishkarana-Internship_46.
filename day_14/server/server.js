const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let tasks = [
  {
    id: 1,
    title: "React Assignment",
    completed: false
  },
  {
    id: 2,
    title: "Node.js Practice",
    completed: true
  }
];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const task = {
    id: Date.now(),
    title: req.body.title,
    completed: false
  };

  tasks.push(task);
  res.json(task);
});

app.put("/tasks/:id", (req, res) => {
  tasks = tasks.map(task =>
    task.id == req.params.id
      ? { ...task, completed: !task.completed }
      : task
  );

  res.json(tasks);
});

app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter(task => task.id != req.params.id);
  res.json(tasks);
});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});
