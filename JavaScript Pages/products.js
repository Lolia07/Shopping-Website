const filterButtons = document.querySelectorAll(".filter-spec-button");
const allProducts = document.querySelectorAll(".item");
const select = document.getElementById("categorySelect");
const option = document.querySelector(".option");


// ONE UNIVERSAL FILTER FUNCTION

function applyFilter(category) {

  allProducts.forEach((product) => {

    const productCategory =
      product.dataset.category.toLowerCase();

    if (category === "all" || productCategory === category) {
      product.style.display = "flex";
    } else {
      product.style.display = "none";
    }

  });

}

// FILTER BUTTONS (LEFT SIDE)

filterButtons.forEach((button) => {

  button.addEventListener("click", function () {

    const category = button.innerText
      .replace(">", "")
      .trim()
      .toLowerCase();

    applyFilter(category);

  });

});

// DROPDOWN FILTER (TOP NAV)

select.addEventListener("change", function () {

  const category = this.value
    .trim()
    .toLowerCase();

  applyFilter(category);

});

// LOAD FILTER FROM URL (optional but important)

window.addEventListener("DOMContentLoaded", function () {

  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");

  if (category) {
    applyFilter(category);
  }

});

const closeBtn = document.querySelector(".close-button");
const headerLine = document.querySelector(".top-line");
const pageContent = document.querySelector(".star-shopping-line");
const secondLine = document.querySelector(".star-shopping-line");
const mainPage = document.querySelector(".main");

// 1. Close top line + adjust spacing
closeBtn.addEventListener("click", function () {
  headerLine.style.display = "none";
  pageContent.style.paddingTop = "15px";
  secondLine.style.position = "fixed";
  mainPage.style.paddingTop = "80px";
  secondLine.style.backgroundColor = "white";
  secondLine.style.paddingBottom = "20px";
});

// 2. Make second line fixed on scroll
const triggerPoint = secondLine.offsetTop;

window.addEventListener("scroll", function () {

  if (window.scrollY > triggerPoint) {
    secondLine.classList.add("fixed");
  } else {
    secondLine.classList.remove("fixed");
  }

});

const hamButton = document.querySelector(".hamburger");
const thatLine = document.querySelector(".star-shopping-line");

hamButton.addEventListener("click", function () {

  if (thatLine.style.display === "none" || thatLine.style.display === "") {
    thatLine.style.display = "flex";
    hamButton.style.paddingTop = "300px"
    hamButton.style.display = "flex"
    mainPage.style.paddingTop = "20px"
  } else {
    thatLine.style.display = "none";
    hamButton.style.paddingTop = "0px"
    mainPage.style.paddingTop = "0px"
  }

});

const cartButtons = document.querySelectorAll(".add-to-cart-img");

let cart = [];

cartButtons.forEach((button) => {
    button.addEventListener("click", () => {

        const item = button.closest(".item");

        const productImg = item.querySelector(".img").src;

        const productName =
            item.querySelector(".item-detail-text").textContent;

        const productPrice = Number(item.querySelector(".price").textContent.replace("$", ""));

        const product = {
            name: productName,
            price: productPrice,
            img: productImg,
            quantity: 1
        };


        console.log(product);

        cart.push(product);

        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Item successfully added to cart");
    });
});