export function validateEmail(inputText) {
  var mailformat =
    /^(?=[a-z0-9.]{3,20}$)[a-z0-9]+\.?[a-z0-9]+$|^.*@\w+\.[\w.]+$/i;
  let errormsg = "";
  if (!inputText.trim()) {
    errormsg = "please enter a email or username";
  } else if (!inputText.match(mailformat)) {
    errormsg = "please enter a valid email or username";
  }
  return errormsg;
}
export function validatePassword(inputText) {
  var passwordFormat = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;
  let errormsg = "";
  if (!inputText.trim()) {
    errormsg = "please enter a password";
  } else if (!inputText.match(passwordFormat)) {
    errormsg = "password should contain 1 number, 1 upper and 1 lowercase";
  }
  return errormsg;
}
