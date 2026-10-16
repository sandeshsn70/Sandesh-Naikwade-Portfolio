```javascript
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll("#navLinks a").forEach(a =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

// Scroll reveal animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Certificate lightbox
const certModal = document.getElementById("certModal");
const certModalImage = document.getElementById("certModalImage");
const certModalTitle = document.getElementById("certModalTitle");
const certCards = document.querySelectorAll("[data-cert]");

const closeCert = () => {
  certModal.classList.remove("open");
  certModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  certModalImage.src = "";
};

certCards.forEach(card => card.addEventListener("click", () => {
  certModalImage.src = card.dataset.cert;
  certModalImage.alt = card.dataset.title + " certificate";
  certModalTitle.textContent = card.dataset.title;

  certModal.classList.add("open");
  certModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}));

document.querySelectorAll("[data-close-cert]").forEach(el =>
  el.addEventListener("click", closeCert)
);

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && certModal.classList.contains("open")) {
    closeCert();
  }
});
```
