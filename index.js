const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

inputs.forEach((e) => {
  e.addEventListener("input", checkInput);
});

function checkInput(key) {
  if (key.target.name === "mail" || "country" || "zip_code") {
    checkInfo(key.target.name);
  } else {
    checkPassword(key.target.name);
  }
}

function checkInfo(inputName) {
  let input = findInput(inputs, inputName);
  let errorMessage = input.nextElementSibling;

  if (input.validity.valid) {
    errorMessage.classList.remove("active");
    input.classList.remove("red");
    errorMessage.textContent = "";
  } else {
    showError(input);
    if (input.value.length < 1) {
      errorMessage.classList.remove("active");
      input.classList.remove("red");
      errorMessage.textContent = "";
    }
  }
}

function checkPassword(inputName) {
  if (inputName === "pass") {
    let pass = findInput(inputs, inputName);
    let errorMessage = pass.nextElementSibling;
    if (pass.validity.valid) {
      errorMessage.classList.remove("active");
      pass.classList.remove("red");
      errorMessage.textContent = "";
    } else {
      showError(pass);
      if (pass.value.length < 1) {
        errorMessage.classList.remove("active");
        pass.classList.remove("red");
        errorMessage.textContent = "";
      }
    }
  } else {
    let password = document.getElementById("pass");
    let passwordConfirmation = document.getElementById("pass_confirm");
    let isPassValid = password === passwordConfirmation;
    console.log(isPassValid);
    let errorMessage = passwordConfirmation.nextElementSibling;
    if (isPassValid === true) {
      errorMessage.classList.remove("active");
      passwordConfirmation.classList.remove("red");
      errorMessage.textContent = "";
    } else {
      showError(passwordConfirmation);
    }
  }
}

function findInput(array, query) {
  let el;
  array.forEach((input) => {
    if (input.name === query) {
      el = input;
    }
  });
  return el;
}

function showError(inputType) {
  let errorMessage = inputType.nextElementSibling;

  switch (inputType.name) {
    case "email":
      errorMessage.classList.add("active");
      inputType.classList.add("red");
      errorMessage.textContent = "Wrong Email adress";
      break;
    case "country":
      errorMessage.classList.add("active");
      inputType.classList.add("red");
      errorMessage.textContent =
        "Should not include digits and exceed 20 length";
      break;
    case "zip_code":
      errorMessage.classList.add("active");
      inputType.classList.add("red");
      errorMessage.textContent =
        "Zip code includes only digits, no more than six";
      break;
    case "pass":
      errorMessage.classList.add("active");
      inputType.classList.add("red");
      errorMessage.textContent = "Should not include . # ) etc";
      break;
    case "pass_confirm":
      let passwordField = document.getElementById("pass");
      errorMessage.classList.add("active");
      inputType.classList.add("red");
      passwordField.classList.add("red");
      errorMessage.textContent = "Passwords don't match";
      break;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("sa");
  checkPassword();
  return false;
});
