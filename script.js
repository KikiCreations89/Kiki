// script.js for My Projects

// Scroll reveal animation
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));

// Optional: Card click highlight feedback (tiny interaction)
const cards = document.querySelectorAll('.project-card');
cards.forEach(card => {
  card.addEventListener('mousedown', () => {
    card.style.transform = 'translateY(-4px) scale(0.98)';
  });
  card.addEventListener('mouseup', () => {
    card.style.transform = 'translateY(-8px) scale(1.02)';
  });
});


