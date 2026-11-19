document.documentElement.classList.add("js");

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
