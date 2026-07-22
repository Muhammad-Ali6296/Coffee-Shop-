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
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const filter = this.getAttribute('data-filter');
    document.querySelectorAll('.menu-item').forEach(item => {
      item.style.display = (filter === 'all' || item.getAttribute('data-category') === filter) ? 'block' : 'none';
    });
  });
});

// Contact form validation
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  alert('Form submitted successfully!');
  this.reset();
});

// Dark mode toggle
document.getElementById('dark-mode-toggle')?.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

// Testimonial slider
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
function showSlide(index) {
  slides.forEach(slide => slide.style.display = 'none');
  if (slides[index]) slides[index].style.display = 'block';
}
document.getElementById('next-slide')?.addEventListener('click', function() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});
document.getElementById('prev-slide')?.addEventListener('click', function() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});
showSlide(currentSlide);

// Loading animation
window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  if (loader) loader.style.display = 'none';
});



