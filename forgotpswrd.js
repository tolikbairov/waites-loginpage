import { validateEmail } from "./validateMethods.js";
const resetBtn = document.querySelector(".reset-btn");
const email_field = document.querySelector("#exampleInputEmail1");
const emailInvalidFeedback = document.querySelector(".email_invalid-feedback");
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
resetBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let validEmail = checkEmail(email_field.value);
  console.log(validEmail);
  if (validEmail) {
    alert("password reseted");
  }
});
