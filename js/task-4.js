const formEl = document.querySelector(`.login-form`);

formEl.addEventListener(`input`, () => {
  const fieldValue = formEl.value;
  if (fieldValue === ``) {
    alert("All form fields must be filled in");
    return;
  }
});

formEl.addEventListener(`submit`, (event) => {
  event.preventDefault();

  const formDataBase = {
    [formEl.elements.email.name]: formEl.elements.email.value,
    [formEl.elements.password.name]: formEl.elements.password.value,
  };
  formEl.reset();
  console.log(formDataBase);
});
