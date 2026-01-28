/* =======================
   SCROLL REVEAL
======================= */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

/* =======================
   ADD TO CART BUTTONS (MyMerch)
======================= */
document.querySelectorAll(".action-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.textContent = "Added ✓";
    btn.disabled = true;
    btn.style.backgroundColor = "#16a34a"; // green
  });
});

/* =======================
   MOBILE MENU TOGGLE (Blog)
======================= */
const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

if(menuBtn && sidebar){
  menuBtn.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", isOpen);
  });
}

/* =======================
   READING PROGRESS BAR (Blog)
======================= */
const progressBar = document.querySelector(".progress-bar");

if(progressBar){
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${scrollPercent}%`;
  });
}

/* =======================
   OPTIONAL: SMOOTH SCROLL FOR BUTTON LINKS
======================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

