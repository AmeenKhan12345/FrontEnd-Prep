const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const task = {
    id: Date.now(),
    text: taskText,
    completed: false
  };

  tasks.push(task);
  renderTasks();
  taskInput.value = "";
});

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";

    li.textContent = task.text;

    li.addEventListener("click", () => {
      task.completed = !task.completed;
      renderTasks();
    });

    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.textContent = "❌";
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent toggle complete
      tasks = tasks.filter(t => t.id !== task.id);
      renderTasks();
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}
// JS logic for To-Do App