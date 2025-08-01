import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import confetti from "canvas-confetti";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // NEW: filter state

  const addTask = (taskText) => {
    if (!taskText.trim()) return;
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          // If marking as completed, trigger confetti
          if (!task.completed) {
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 },
            });
          }
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    });
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // NEW: filter tasks based on filter state
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 p-6 text-center">
      <h1 className="text-4xl font-bold text-orange-800 mb-6">🧠 Desi To-Do App</h1>
      <TodoInput onAdd={addTask} />
      {/* NEW: Filter Buttons */}
      <div className="flex justify-center gap-2 mt-4 mb-2">
        <button
          className={`px-3 py-1 rounded-full border-2 text-sm font-semibold transition-colors duration-150 ${filter === "all" ? "bg-orange-500 text-white border-orange-500" : "bg-white text-orange-500 border-orange-300 hover:bg-orange-100"}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`px-3 py-1 rounded-full border-2 text-sm font-semibold transition-colors duration-150 ${filter === "active" ? "bg-orange-500 text-white border-orange-500" : "bg-white text-orange-500 border-orange-300 hover:bg-orange-100"}`}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={`px-3 py-1 rounded-full border-2 text-sm font-semibold transition-colors duration-150 ${filter === "completed" ? "bg-orange-500 text-white border-orange-500" : "bg-white text-orange-500 border-orange-300 hover:bg-orange-100"}`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
      <div className="mt-6 space-y-3">
        {filteredTasks.length === 0 ? (
          <p className="text-gray-600">No tasks yet. Add some masala! 🌶️</p>
        ) : (
          filteredTasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              onToggle={() => toggleTask(task.id)}
              onDelete={() => deleteTask(task.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
