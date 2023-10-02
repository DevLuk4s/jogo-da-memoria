const input = document.querySelector(".login_input");
const button = document.querySelector(".login_button");
const form = document.querySelector(".login-form");

const validadoInput = ({ target }) => {
  if (target.value.length > 2) {
    button.removeAttribute("disabled");
  } else {
    button.setAttribute("disabled", "");
  }
};

const enviarNome = (event) => {
  event.preventDefault();

  localStorage.setItem("player", input.value);
  window.location = "pages/games.html";
};

input.addEventListener("input", validadoInput);
form.addEventListener("submit", enviarNome);
