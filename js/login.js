const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginName");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASS = "hidden";
const USER_NAME = "username";
const onLogin = (event) => {
  event.preventDefault();
  const name = loginInput.value;
  localStorage.setItem(USER_NAME, name);
  loginInput.classList.toggle(HIDDEN_CLASS);
  printingName(name);
};

const printingName = (name) => {
  greeting.innerHTML = `Hello ${name} !!!`;
};

const getName = localStorage.getItem(USER_NAME);

if (getName === null) {
  loginForm.addEventListener("submit", onLogin);
} else {
  loginInput.classList.toggle(HIDDEN_CLASS);
  printingName(getName);
}
