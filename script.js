console.log("Contact section loaded.");

const slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

setInterval(nextSlide, 6000); // change every 6 seconds

document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.flip-inner').forEach(inner => {
      if (inner !== card.querySelector('.flip-inner')) {
        inner.classList.remove('flipped');
      }
    });
    card.querySelector('.flip-inner').classList.toggle('flipped');
  });
});
const items = document.querySelectorAll(".accordion-item");

items.forEach(item => {
  const header = item.querySelector(".accordion-header");
  header.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-item.active");
    if (openItem && openItem !== item) {
      openItem.classList.remove("active");
    }
    item.classList.toggle("active");
  });
});

  const progressRing = document.querySelector('.ring-fill');
  const progressPercent = document.querySelector('.progress-percent');
  const radius = 26;
  const circumference = 2 * Math.PI * radius;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollTop / height;
    const offset = circumference - progress * circumference;

    // Update the circular progress
    progressRing.style.strokeDashoffset = offset;

    // Update the percentage text
    const percentage = Math.round(progress * 100);
    progressPercent.textContent = `${percentage}%`;
  });

  window.addEventListener("DOMContentLoaded", () => {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        const yOffset = -80; // adjust for sticky navbar if needed
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  });

  const hamburger = document.getElementById('hamburger');
  const overlayMenu = document.getElementById('overlayMenu');
  const body = document.body;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    overlayMenu.classList.toggle('active');
    body.classList.toggle('menu-open');
  });
