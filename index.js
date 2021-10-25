import { validateEmail, validatePassword } from "./validateMethods.js";

const login_btn = document.querySelector(".login-btn");
const email_field = document.querySelector("#exampleInputEmail1");
const password_field = document.querySelector("#exampleInputPassword1");
const emailInvalidFeedback = document.querySelector(".email_invalid-feedback");

const passwordInvalidFeedback = document.querySelector(
  ".password_invalid-feedback"
);
function checkPassword(password) {
  let errormsg = validatePassword(password);
  if (!errormsg) {
    if (password_field.classList.contains("is-invalid")) {
      password_field.classList.remove("is-invalid");
    }
    return true;
  } else {
    password_field.classList.add("is-invalid");
    passwordInvalidFeedback.textContent = errormsg;
    return false;
  }
}
function checkEmail(email) {
  let errormsg = validateEmail(email);
  if (!errormsg) {
    if (email_field.classList.contains("is-invalid")) {
      email_field.classList.remove("is-invalid");
    }
    return true;
  } else {
    email_field.classList.add("is-invalid");
    emailInvalidFeedback.textContent = errormsg;
    return false;
  }
}

// email_field.addEventListener("input", (e) => {
//   checkEmail(e.target.value);
// });
email_field.addEventListener("blur", (e) => {
  checkEmail(e.target.value);
});
// password_field.addEventListener("input", (e) => {
//   checkPassword(e.target.value);
// });
password_field.addEventListener("blur", (e) => {
  checkPassword(e.target.value);
});

login_btn.addEventListener("click", (e) => {
  e.preventDefault();
  let validPswrd = checkPassword(password_field.value);
  let validEmail = checkEmail(email_field.value);
  if (validPswrd && validEmail) {
    alert("successfully login");
  }
});
