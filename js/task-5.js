const btnEl = document.querySelector(`.change-color`);
btnEl.addEventListener(`click`, function () {
  const newColor = getRandomHexColor();
  document.querySelector(`.widget`).style.backgroundColor = newColor;
  document.querySelector(`.color`).style.textContent = newColor;
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
