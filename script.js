// =========================================================
// SANDEEP YADAV PORTFOLIO
// =========================================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.querySelector("i").className = open
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.querySelector("i").className = "fa-solid fa-bars";
  });
});

// Dark/light mode
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.querySelector("i").className = "fa-solid fa-sun";
}

themeToggle.addEventListener("click", () => {
  const dark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
  themeToggle.querySelector("i").className = dark
    ? "fa-solid fa-sun"
    : "fa-solid fa-moon";
});

// Scroll reveal
const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach(item => revealObserver.observe(item));

// Back to top
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 500);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Static contact form.
// REPLACE this email with your real email.
const contactForm = document.getElementById("contactForm");
const recipientEmail = "your-email@example.com";

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  const body =
    `Name: ${name}\n` +
    `Email: ${email}\n\n` +
    `${message}`;

  window.location.href =
    `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

// Prevent placeholder project links from jumping to the top.
document.querySelectorAll(".disabled-placeholder").forEach(link => {
  link.addEventListener("click", event => event.preventDefault());
});
