// TODO: hamburger menu for screens with max-width: 639px

const hamburgerButton = document.getElementById("hamburger");
const nav = document.querySelector(".nav");

const switchMenuState = () => {
  nav.classList.toggle("nav--active");
  console.log(nav);
};

hamburgerButton.addEventListener("click", switchMenuState);

console.log("TEST");