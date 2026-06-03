const cardNumber = document.querySelector(".card-num-input");
const cardDate = document.querySelector(".card-date-input");
const cardCode = document.querySelector(".card-code-input");

const fullName = document.querySelector(".fullname-input");
const street = document.querySelector(".street-input");
const city = document.querySelector(".city-input");
const state = document.querySelector(".state-input");
const zip = document.querySelector(".zip-input");

const error = document.querySelector(".error");
const checkoutBtn = document.querySelector(".checkout-final");

const cartItems = document.querySelectorAll(".item");
const totalElement = document.querySelector(".actual-total");


// =========================
// CHECKOUT BUTTON (ONLY PLACE ORDER IS CREATED)
// =========================
checkoutBtn.addEventListener("click", function (e) {

  e.preventDefault();

  let missing = [];

  if (cardNumber.value.trim() === "") missing.push("Card Number");
  if (cardDate.value.trim() === "") missing.push("Card Date");
  if (cardCode.value.trim() === "") missing.push("Card Code");
  if (fullName.value.trim() === "") missing.push("Full Name");
  if (street.value.trim() === "") missing.push("Street");
  if (city.value.trim() === "") missing.push("City");
  if (state.value.trim() === "") missing.push("State");
  if (zip.value.trim() === "") missing.push("Zip Code");

  if (missing.length > 0) {
    error.style.display = "flex";
    error.textContent = "Please fill in: " + missing.join(", ");
    return;
  }

  // =========================
  // GET CART FROM STORAGE (FIXED PART)
  // =========================
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  let items = [];
  let total = 0;

  cart.forEach(function(item) {

    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;

    items.push({
      name: item.name,
      price: price,
      quantity: quantity
    });

    total += price * quantity;
  });

  // =========================
  // BUILD ORDER OBJECT
  // =========================
  const orderData = {
    cardNumber: cardNumber.value.trim(),
    cardDate: cardDate.value.trim(),
    cardCode: cardCode.value.trim(),

    fullName: fullName.value.trim(),
    street: street.value.trim(),
    city: city.value.trim(),
    state: state.value.trim(),
    zip: zip.value.trim(),

    items: items,
    total: total
  };

  // SAVE ORDER
  localStorage.setItem("order", JSON.stringify(orderData));

  console.log("SAVED ORDER:", orderData);

  window.location.href = "order-details.html";
});

const total = JSON.parse(localStorage.getItem("cartTotal")) || 0;
console.log("Total:", total);