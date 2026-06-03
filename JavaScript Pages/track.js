function showTrackingResult() {
    const orderID = document.getElementById("orderID").value.trim();
    const resultBox = document.getElementById("trackingResult");
    const displayID = document.getElementById("displayID");

    // Show the result section
    resultBox.style.display = "block";
    displayID.textContent = orderID;

    // Hide all results first
    const allResults = document.querySelectorAll(".tracking-steps div");
    allResults.forEach(div => div.style.display = "none");

    // Map IDs to result classes
    const resultMap = {
        "482913": "result1",
        "193847": "result2",
        "760214": "result3",
        "558921": "result4",
        "904362": "result5",
        "671508": "result6"
    };

    if (resultMap[orderID]) {
        document.querySelector("." + resultMap[orderID]).style.display = "block";
    } else {
        // If invalid ID
        let error = document.getElementById("errorMessage");

        if (!error) {
            error = document.createElement("div");
            error.id = "errorMessage";
            document.querySelector(".tracking-steps").appendChild(error);
        }

        error.textContent = "No tracking info found for this Order ID.";
        error.style.display = "block";
    }
}

const closeBtn = document.querySelector(".close-button");
const headerLine = document.querySelector(".top-line");
const pageContent = document.querySelector(".star-shopping-line");
const secondLine = document.querySelector(".star-shopping-line");
const mainPage = document.querySelector(".main");

// 1. Close top line + adjust spacing
closeBtn.addEventListener("click", function () {
  headerLine.style.display = "none";
  pageContent.style.paddingTop = "10px";
  /* pageContent.style.paddingTop = "15px";
    secondLine.style.position = "fixed";
    mainPage.style.paddingTop = "80px";
    secondLine.style.backgroundColor = "white";
    secondLine.style.paddingBottom = "20px";
    */
});

// 2. Make second line fixed on scroll
const triggerPoint = secondLine.offsetTop;

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