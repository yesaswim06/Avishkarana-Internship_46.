import { useEffect, useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!title.trim()) return;

    await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    fetchTasks();
  };

  const toggleTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
    });

    fetchTasks();
  };

  return (
    <div className="page">
      <h1>Student Task Manager</h1>

      <input
        type="text"
        placeholder="Enter Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      <div>
        {tasks.map((task) => (
          <div className="task-card" key={task.id}>
            <h3
              style={{
                textDecoration: task.completed
                  ? "line-through"
                  : "none",
              }}
            >
              {task.title}
            </h3>

            <button onClick={() => toggleTask(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>

            <button
              onClick={() => deleteTask(task.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;