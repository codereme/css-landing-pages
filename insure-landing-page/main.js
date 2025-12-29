const btnHamburger = document.getElementById("btnHamburger");
const headerNav = document.getElementById("headerNav");

btnHamburger.addEventListener("click", () => {
  headerNav.classList.toggle("active");
});
