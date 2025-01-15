const inputEl = document.getElementById(`name-input`);
const outputEl = document.getElementById(`name-output`);
inputEl.addEventListener(`input`, () => {
  const fieldValue = inputEl.value;
  if (fieldValue.trim() !== "") {
    outputEl.textContent = fieldValue.trim();
  } else {
    outputEl.textContent = "Anonymous";
  }
});
