const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoUl = document.querySelector("#todoUl");
let todo = [];

const TODO_LIST = "todos";
const saveTodo = () => {
  localStorage.setItem(TODO_LIST, JSON.stringify(todo));
};

const deleteItem = (event) => {
  const li = event.target.parentElement;
  li.remove();
  todo = todo.filter((item) => item.id !== parseInt(li.id));
  saveTodo();
};

const printToDo = (todoObj) => {
  const li = document.createElement("li");
  li.id = todoObj.id;
  const span = document.createElement("span");
  span.innerHTML = todoObj.text;
  const btn = document.createElement("button");
  btn.innerHTML = "💢";
  btn.addEventListener("click", deleteItem);
  li.appendChild(span);
  li.appendChild(btn);
  todoUl.appendChild(li);
};

const ontodoForm = (event) => {
  event.preventDefault();
  const todoItem = todoInput.value;
  todoInput.value = "";

  const todoObj = {
    text: todoItem,
    id: Date.now(),
  };
  todo.push(todoObj);
  printToDo(todoObj);
  saveTodo();
};

todoForm.addEventListener("submit", ontodoForm);

const saveItems = localStorage.getItem(TODO_LIST);

if (saveItems !== null) {
  const parsedToDos = JSON.parse(saveItems);
  todo = parsedToDos;
  parsedToDos.forEach(printToDo);
}
