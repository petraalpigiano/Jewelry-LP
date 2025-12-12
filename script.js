const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// evento onClick per hamburgerrr
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
