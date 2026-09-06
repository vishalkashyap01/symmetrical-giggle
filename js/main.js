// ================================================================
// EASY UPDATES:
// 1. Personal details/social URLs are in index.html.
// 2. Visual theme variables are in css/styles.css.
// 3. Experience, skills, projects and education are normal HTML sections.
// 4. Connect the contact form to your preferred email/backend provider.
// ================================================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Smooth reveal on scroll.
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Current year.
document.getElementById("year").textContent = new Date().getFullYear();

// Demo contact form.
// Replace this with Formspree, EmailJS, your Spring Boot API, etc.
document.getElementById("contactForm")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  const recipient = "vishalkashyap4511@gmail.com";
  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});
