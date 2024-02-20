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

    if (countValidInputs() === inputs.length) {
      enableCreateAccountBtn();
    }
  });
});

function updateProgress() {
  const percent = (countValidInputs() / inputs.length) * 100;
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
    updateProgress();
  }
}

function enableCreateAccountBtn() {
  const createAccountBtn = document.querySelector(".create-account-btn");
  createAccountBtn.disabled = false;
}

function countValidInputs() {
  let validInputs = 0;
  inputs.forEach((input) => {
    if (input.checkValidity()) {
      validInputs++;
    }
  });
  return validInputs;
}
