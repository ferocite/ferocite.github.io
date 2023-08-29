const mobile_nav = document.querySelector("#mobile-nav");
const hamburger_btn = document.querySelector("#hamburger");
// const home_btn = document.querySelector("#homebtn");


hamburger_btn.addEventListener("click", () => {
  mobile_nav.classList.toggle("hidden");
});


mobile_nav.addEventListener("click", () => {
  mobile_nav.classList.toggle("hidden");
});