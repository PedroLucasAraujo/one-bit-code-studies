function register(ev) {
  console.log(ev);
  const sectionElement = ev.currentTraget.parentNode;
  const username = sectionElement.children.username;
  const password = sectionElement.children.password;
  const passwordConfirmation = sectionElement.children.passwordConfirmation;

  if (password === passwordConfirmation) {
    alert("Usuário " + username + " registrado!");
  } else {
    alert("As senhas não correspondem");
  }
}

const button = document.getElementById("register-button");

button.addEventListener("click", register);

function removeListener() {
  button.removeListener("click", register);
  alert("Evento Removido!");
}

button.addEventListener("mouseover", function (ev) {
  console.log(ev.currentTarget);
});
