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

function updateProgress() {
  let validInputs = 0;

  inputs.forEach((input) => {
    if (input.checkValidity()) {
      validInputs++;
    }
  });
  const percent = (validInputs / inputs.length) * 100;
  const offset = 1570 - (percent / 100) * 1570;
  progressCircle.style.strokeDashoffset = offset;
  progressCircle.style.strokeWidth = 20;
}

function validatePassword() {
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  if (passwordInput.value === confirmPasswordInput.value) {
    updateProgress();
  } else {
    confirmPasswordInput.classList.remove("valid");
    confirmPasswordInput.classList.add("invalid");
  }
}
