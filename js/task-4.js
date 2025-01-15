const formEl = document.querySelector(`.login-form`);

formEl.addEventListener(`submit`, (event) => {
  event.preventDefault();

  const formDataBase = {
    email: formEl.elements.email.value,
    password: formEl.elements.password.value,
  };
  if (
    formDataBase.email.trim().length === 0 ||
    formDataBase.password.trim().length === 0
  ) {
    alert("All form fields must be filled in");
    return;
  }
  formEl.reset();
  console.log(formDataBase);
});
