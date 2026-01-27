// ==============================
// Mobile menu toggle
// ==============================
function toggleMenu() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("show");
}

// ==============================
// Cart functionality
// ==============================
let cartCount = 0;

function updateCartCount() {
  document.getElementById("cart-count").textContent = cartCount;
}

document.addEventListener("DOMContentLoaded", () => {
  // Select all add-to-cart buttons
  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      cartCount++;
      updateCartCount();
      button.textContent = "Added ✓";
      button.disabled = true;
    });
  });

  // Optional: Fade-in on scroll for product cards
  const faders = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  faders.forEach(el => observer.observe(el));
});
