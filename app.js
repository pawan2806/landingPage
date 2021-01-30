var toggleBtn = document.querySelector("#toggleBtn");
var toggleDisplay = document.querySelector("#toggleDisplay");
var card1 = document.querySelector("#card1");
var card2 = document.querySelector("#card2");
var card3 = document.querySelector("#card3");
var toggleStatus;

toggleBtn.addEventListener("click", function () {
  toggleStatus = toggleDisplay.getAttribute("class");
  if (toggleStatus === "toggle toggleFalse") {
    document.body.setAttribute("class", "dark-mode");
    document.getElementById("card1").setAttribute("class", "card cardTrue");
    document.getElementById("card2").setAttribute("class", "card cardTrue");
    document.getElementById("card3").setAttribute("class", "card cardTrue");
    toggleDisplay.setAttribute("class", "toggle toggleTrue");

  } else {
    toggleDisplay.setAttribute("class", "toggle toggleFalse");
    document.getElementById("card1").setAttribute("class", "card cardFalse");
    document.getElementById("card2").setAttribute("class", "card cardFalse");
    document.getElementById("card3").setAttribute("class", "card cardFalse");
    document.body.setAttribute("class", "light-mode");
  }
});
