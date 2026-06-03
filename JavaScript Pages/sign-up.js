const form = document.getElementById("signup-form");

const firstName = document.querySelector(".first-name-input");
const lastName = document.querySelector(".last-name-input");
const email = document.querySelector(".email-input");
const number = document.querySelector(".number-input");

const street = document.querySelector(".street-input");
const city = document.querySelector(".city-input");
const state = document.querySelector(".state-input");
const country = document.querySelector(".country-input");
const zip = document.querySelector(".zip-input");

const error = document.querySelector(".error");

const submitBtn = document.querySelector(".submit");

submitBtn.addEventListener("click", function (e) {

  e.preventDefault();

  let missing = [];

  // First name
  if (firstName.value.trim() === "") {
    missing.push("First Name");
  }

  // Last name
  if (lastName.value.trim() === "") {
    missing.push("Last Name");
  }

  // Email
  if (email.value.trim() === "") {
    missing.push("Email");
  }

  // Number
  if (number.value.trim() === "") {
    missing.push("Number");
  }

  if (street.value.trim() === "") {
    missing.push("Address Line 1");
  }

  if (city.value.trim() === "") {
    missing.push("City");
  }

  if (state.value.trim() === "") {
    missing.push("State");
  }

  if (country.value.trim() === "") {
    missing.push("Country");
  }

  if (zip.value.trim() === "") {
    missing.push("Zip Code");
  }

  if (missing.length > 0) {
    error.style.display = "block";

    error.textContent =
      "Please fill in: " + missing.join(", ") + ". They are required fields.";

    error.style.color = "red";

  } else {

    window.location.href = "submit.html";

  }

});