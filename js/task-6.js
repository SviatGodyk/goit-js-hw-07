function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector(".js-controls");
const inputEl = document.querySelector(".js-input");
const createBtn = document.querySelector(".js-createbtn");
const destroyBtn = document.querySelector(".js-destroybtn");
const containerForBoxes = document.querySelector(".js-boxes");

function createBoxes(amount) {
  destroyBoxes();

  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.margin = `5px`;
    box.style.backgroundColor = getRandomHexColor();
    size += 10;
    boxes.push(box);
  }
  containerForBoxes.append(...boxes);
}

function destroyBoxes() {
  containerForBoxes.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const amount = parseInt(inputEl.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputEl.value = "";
  } else {
    alert("Please, enter a number between 1 and 100");
  }
});

destroyBtn.addEventListener("click", destroyBoxes);
