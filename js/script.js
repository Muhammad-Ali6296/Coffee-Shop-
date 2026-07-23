// Sticky navbar
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('sticky-active');
  } else {
    navbar.classList.remove('sticky-active');
  }
});

// Back to top button
window.addEventListener('scroll', function() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  }
});

document.getElementById('back-to-top')?.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Mobile menu toggle
document.getElementById('menu-toggle')?.addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Active navigation highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function() {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active-link');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active-link');
    }
  });
});

// Menu filtering
// Menu filtering (auto-generated buttons)
const menuSection = document.querySelector('.menu .container');
const menuCards = document.querySelectorAll('.menu-card');

if (menuSection && menuCards.length > 0) {
  const filterBar = document.createElement('div');
  filterBar.innerHTML = `
    <button class="filter-btn" data-filter="all">All</button>
    <button class="filter-btn" data-filter="hot">Hot</button>
    <button class="filter-btn" data-filter="cold">Cold</button>
  `;
  menuSection.insertBefore(filterBar, document.querySelector('.menu-items'));

  const coldKeywords = ['iced', 'cold', 'frappe'];
  menuCards.forEach(card => {
    const name = card.querySelector('h3').textContent.toLowerCase();
    const isCold = coldKeywords.some(word => name.includes(word));
    card.setAttribute('data-category', isCold ? 'cold' : 'hot');
  });

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      menuCards.forEach(card => {
        card.style.display = (filter === 'all' || card.getAttribute('data-category') === filter) ? 'block' : 'none';
      });
    });
  });
}

// Dark mode toggle
document.getElementById('dark-mode-toggle')?.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

// Testimonial slider
// Testimonial slider (auto-rotate)
const testimonialCards = document.querySelectorAll('.testimonial-card');
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonialCards.forEach(card => card.style.display = 'none');
  if (testimonialCards[index]) testimonialCards[index].style.display = 'block';
}

if (testimonialCards.length > 0) {
  showTestimonial(currentTestimonial);
  setInterval(function() {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    showTestimonial(currentTestimonial);
  }, 3000);
}


// Loading animation
window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  if (loader) loader.style.display = 'none';
});