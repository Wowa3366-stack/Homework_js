const formEl = document.querySelector(".form_color");

formEl.addEventListener("change", (event) => {
  document.body.style.backgroundColor = event.target.value;
});

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  const value = event.target.value;
  nameOutput.textContent = value === "" ? "незнайомець" : value;
});

const input = document.querySelector("#validation-input");

input.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;

  const requiredLength = Number(event.currentTarget.dataset.length);
  const actualLength = event.currentTarget.value.length;

  input.classList.remove("valid", "invalid");

  if (actualLength === requiredLength) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
});

const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

range.addEventListener("input", (event) => {
  text.style.fontSize = event.currentTarget.value + "px";
});