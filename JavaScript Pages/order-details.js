const order = JSON.parse(localStorage.getItem("order"));

// BASIC INFO
const nameElement = document.querySelector(".name");
const addressElement = document.querySelector(".address");

// CARD INFO (FIXED SELECTORS)
const cardNumberElement = document.querySelector(".card-number");
const cardDateElement = document.querySelector(".card-date");
const cardCodeElement = document.querySelector(".card-code");

const total = JSON.parse(localStorage.getItem("cartTotal")) || 0;
// ITEMS + TOTAL
const itemsContainer = document.querySelector(".items");
const totalElement = document.querySelector(".total");

console.log("Total:", total);

if (order) {

  // CUSTOMER INFO
  if (nameElement) {
    nameElement.textContent = "Full name: " + order.fullName;
  }

  if (addressElement) {
    addressElement.textContent =
      "Full Address: " +
      order.street + ", " +
      order.city + ", " +
      order.state + ", " +
      order.zip;
  }

  // CARD INFO
  if (cardNumberElement) {
    cardNumberElement.textContent =
      "Card ending in " + order.cardNumber.slice(-4);
  }

  if (cardDateElement) {
    cardDateElement.textContent =
      "Card Expiry Date: " + order.cardDate;
  }

  if (cardCodeElement) {
    cardCodeElement.textContent =
      "CVV: ***";
  }

  // ITEMS
  if (itemsContainer && order.items) {

    order.items.forEach(function(item) {

      const div = document.createElement("div");
      div.classList.add("order-item");

      div.textContent =
        `${item.name} - ${item.quantity} x $${item.price}`;

      itemsContainer.appendChild(div);
    });
  }

  // TOTAL (THIS IS THE ONLY CORRECT WAY)
  if (totalElement) {
    totalElement.textContent = "Total: $" + total;
  }
}

console.log("Total:", total);