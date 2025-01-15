function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector(".js-input");
const createBtn = document.querySelector(".js-createbtn");
const destroyBtn = document.querySelector(".js-destroybtn");

const startNum = 30;
const startMargin = "10px";

createBtn.addEventListener(`click`, (event) => {
  event.preventDefault();

  const inputValue = inputEl.value;
  let inputNumber;
  if (!isNaN(inputValue) && inputValue.trim().length !== 0) {
    inputNumber = parseInt(inputValue);
  } else {
    alert("Incorrect input");
  }
  for (let i = 1; i <= inputNumber; i++) {
    const div = document.createElement("div");
    const size = startNum + (i - 1) * 10;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.margin = startMargin;
    document.body.appendChild(div);
  }
});

destroyBtn.addEventListener("click", () => {
  const divDelete = document.querySelector("div-container");
  const divEl = document.createElement("div-el");
  divEl.classList.add("div-container");
  if (divDelete) {
    return divDelete.remove();
  }
});
