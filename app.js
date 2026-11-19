document.documentElement.classList.add("js");

// Colour scheme toggle (classic / deep pink), remembered between visits.
const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");

function applyTheme(pink) {
  if (pink) {
    root.dataset.theme = "pink";
  } else {
    delete root.dataset.theme;
  }
  themeToggle.textContent = pink ? "Dark" : "Pink";
}

let savedTheme = null;
try {
  savedTheme = localStorage.getItem("theme");
} catch (e) {}
applyTheme(savedTheme === "pink");

themeToggle.addEventListener("click", () => {
  const pink = root.dataset.theme !== "pink";
  applyTheme(pink);
  try {
    localStorage.setItem("theme", pink ? "pink" : "classic");
  } catch (e) {}
});

// Footer year.
document.getElementById("year").textContent = new Date().getFullYear();

// Add a bottom border to the top bar once the page is scrolled.
const topbar = document.querySelector(".topbar");
window.addEventListener("scroll", () => {
  topbar.classList.toggle("scrolled", window.scrollY > 10);
});

// Fade sections in as they enter the viewport.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
