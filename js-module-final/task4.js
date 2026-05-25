class Task {
  constructor(id, text) {
    this.id = id;
    this.text = text;
    this.done = false;
  }

  toggle() {
    this.done = !this.done;
  }
}

class TodoList {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  add(text) {
    const task = new Task(this.nextId, text);
    this.tasks.push(task);
    this.nextId++;
  }

  remove(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  getActive() {
    return this.tasks.filter(task => task.done === false);
  }
}

const todoList = new TodoList();

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function renderTasks() {
  taskList.innerHTML = "";

  todoList.tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.done ? `${task.text} — виконано` : task.text;
    li.dataset.id = task.id;

    if (task.done) {
      li.style.textDecoration = "line-through";
    }

    taskList.appendChild(li);
  });

  console.log("Усі завдання:", todoList.tasks);
  console.log("Активні завдання:", todoList.getActive());
}

addBtn.addEventListener("click", function () {
  const text = taskInput.value.trim();

  if (text === "") {
    alert("Введіть текст завдання");
    return;
  }

  todoList.add(text);
  taskInput.value = "";
  renderTasks();
});

taskList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    const id = Number(event.target.dataset.id);
    const task = todoList.tasks.find(task => task.id === id);

    if (task) {
      task.toggle();
      renderTasks();
    }
  }
});

todoList.add("Вивчити JavaScript");
todoList.add("Виконати модульну роботу");
renderTasks();