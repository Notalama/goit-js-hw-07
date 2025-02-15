
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const {  email,  password } = e.target.elements;

  const emailVal = email.value.trim();
  const pasVal = password.value.trim();

  if (!emailVal || !pasVal) {
    alert("All form fields must be filled in");
    return;
  }

  const formValue = {
    email: emailVal,
    password: pasVal,
  };
  console.log(formValue);

  loginForm.reset();
});