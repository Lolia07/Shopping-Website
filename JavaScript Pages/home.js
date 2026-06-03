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

const select = document.getElementById("categorySelect");

select.addEventListener("change", function () {
  const value = this.value;

  if (value === "tops") {
    window.location.href = "products.html";
  }

  if (value === "shoes") {
    window.location.href = "products.html";
  }

  if (value === "dresses") {
    window.location.href = "products.html";
  }

  if (value === "jeans") {
    window.location.href = "products.html";
  }

  if (value === "jewelry") {
    window.location.href = "products.html";
  }

  if (value === "beach wear") {
    window.location.href = "products.html";
  }

  if (value === "skirts") {
    window.location.href = "products.html";
  }

  if (value === "perfumes") {
    window.location.href = "products.html";
  }

  if (value === "shirts") {
    window.location.href = "products.html";
  }
});

const hamButton = document.querySelector(".hamburger");
//const thatLine = document.querySelector(".star-shopping-line");

hamButton.addEventListener("click", function () {

  if (secondLine.style.display === "none" || secondLine.style.display === "") {
    secondLine.style.display = "flex";
    hamButton.style.paddingTop = "300px"
    hamButton.style.display = "flex"
    mainPage.style.paddingTop = "20px"
  } else {
    secondLine.style.display = "none";
    hamButton.style.paddingTop = "0px"
    mainPage.style.paddingTop = "0px"
  }

});