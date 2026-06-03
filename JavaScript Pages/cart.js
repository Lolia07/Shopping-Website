const subtotalElement = document.querySelector(".actual-subtotal");
const totalElement = document.querySelector(".actual-total");
const discount = document.querySelector(".actual-discount");
const deliveryFee = document.querySelector(".actual-delivery-fee");

const cartContainer = document.querySelector(".left-page");



// GET CART DATA (LOCALSTORAGE ONLY)

function getCartData() {

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  let subtotal = 0;

  cart.forEach(function(item) {

    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;

    subtotal += price * quantity;

  });

  return { items: cart, subtotal };
}

// SAVE CART TO LOCALSTORAGE

function saveCartToStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}



// UPDATE TOTALS DISPLAY

function updateCartTotals() {

  const cartData = getCartData();
  const subtotal = cartData.subtotal;

  const discountPercent = Number(
    document.querySelector(".actual-discount").textContent.replace("%", "")
  ) || 0;

  const discountValue = subtotal * (discountPercent / 100);

  const deliveryValue = Number(
    document.querySelector(".actual-delivery-fee").textContent.replace("$", "")
  ) || 0;

  const total = (subtotal - discountValue) + deliveryValue;

  subtotalElement.textContent = subtotal.toFixed(2);
  totalElement.textContent = total.toFixed(2);

  // SAVE TOTAL HERE
  localStorage.setItem("cartTotal", JSON.stringify(total));
}


// RENDER CART UI

function loadCart() {

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = `<p>Your cart is empty</p>`;
    updateCartTotals();
    return;
  }

  cart.forEach((product, index) => {

    cartContainer.innerHTML += `
      <div class="item" data-index="${index}">

      <img class="img" src="${product.img}" alt="${product.name}">

        <div class= "right-side-item"> 
        <h3 class = "text-and-delete"> 
          <span class="name">${product.name}</span>
          <button class="delete-button"><img src="../Images/delete.svg" alt="delete-button" class="delete"></button>
        </h3>

        <div>
          <div class="size-div">
            <label for="size">Size:</label>
            <select id="Sizes">
              <option name="" id="XXS">Extra extra Small (XXS)</option>
              <option name="" id="XS">Extra Small (XS)</option>
              <option name="" id="S">Small (S)</option>
              <option name="" id="M">Medium (M)</option>
              <option name="" id="L">Large (L)</option>
              <option name="" id="XL">Extra Large (XL)</option>
              <option name="" id="XXL">Extra Extra Large (XXL)</option>
            </select>
          </div>
          <div class="color-div">
            <label for="size">Color:</label>
            <select id="Sizes">
            <option name="" id="Red">Red</option>
            <option name="" id="Blue">Blue</option>
            <option name="" id="Orange">Orange</option>
            <option name="" id="Black">Black</option>
            <option name="" id="White">White</option>
            <option name="" id="Pink">Pink</option>
            <option name="" id="Green">Green</option>
            <option name="" id="Yellow">Yellow</option>
            <option name="" id="Burgundy">Burgundy</option>
            <option name="" id="Teal">Teal</option>
            <option name="" id="Maroon">Maroon</option>
            <option name="" id="Yellow">Yellow</option>
            </select>
          </div>
          <h4 class="price-div">
              <span class="price"> $${product.price}</span>
                <span class="quantity-div">
                  <button class="negative" type="button">-</button>
                  <span class="number">${product.quantity}</span>
                  <button class="positive" type="button">+</button>
                </span>
            </h4>
          </div>

        </div>

    `;

  });

}


// ATTACH BUTTON EVENTS

function attachEvents() {

  document.querySelectorAll(".item").forEach(function(item) {

    const index = item.dataset.index;

    const minusBtn = item.querySelector(".negative");
    const plusBtn = item.querySelector(".positive");
    const deleteBtn = item.querySelector(".delete-button");
    const numberEl = item.querySelector(".number");


    // MINUS
    minusBtn.addEventListener("click", function() {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const cartItem = cart[index];

  // If quantity is 1 → ask before deleting
  if (cartItem.quantity === 1) {

    const remove = confirm("Do you want to remove item from cart?");

    if (remove) {
      cart.splice(index, 1);
    }

  } 
  else {
    // only reduce if user is NOT deleting
    cartItem.quantity--;
  }

  saveCartToStorage(cart);

  loadCart();
  attachEvents();
  updateCartTotals();

});


    // PLUS
    plusBtn.addEventListener("click", function() {

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart[index].quantity++;

      saveCartToStorage(cart);

      loadCart();
      attachEvents();
      updateCartTotals();

    });


    // DELETE
    deleteBtn.addEventListener("click", function() {

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      const remove = confirm("Remove this item from cart?");

      if (remove) {

        cart.splice(index, 1);

        saveCartToStorage(cart);

        loadCart();
        attachEvents();
        updateCartTotals();

      }

    });

  });

}

// CHECKOUT BUTTON

const checkoutBtn = document.querySelector(".checkout-link");

checkoutBtn.addEventListener("click", function() {

  const checkout = confirm("Are you sure you want to proceed with checkout?");

  if (checkout) {
    window.location.href = "checkout.html";
  }

  const OrderDetails = {
  total: total.value.trim(),
  
}

});

let total = JSON.parse(localStorage.getItem("total")) || [];

// INITIAL LOAD

loadCart();
attachEvents();
updateCartTotals();