const btnHamburger = document.getElementById("btnHamburger");
const headerNav = document.getElementById("headerNav");

btnHamburger.addEventListener("click", () => {
  console.log("awesome!");
  headerNav.classList.toggle("active");
});
