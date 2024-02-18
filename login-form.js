const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const phoneNumberInput = document.getElementById("phone-number");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const inputs = document.querySelectorAll("input");
const progressCircle = document.querySelector("circle");

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.checkValidity()) {
      input.classList.remove("invalid");
      input.classList.add("valid");
    } else {
      input.classList.remove("valid");
      input.classList.add("invalid");
    }
  });
});


function updateProgress(percent) {
  const offset = 1570 - (percent / 100) * 1570;
  progressCircle.style.strokeDashoffset = offset;
  progressCircle.style.strokeWidth = 20;
}
