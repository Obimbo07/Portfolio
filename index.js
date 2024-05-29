// const popup = document.getElementById('navMenu');
// const navMenu = document.getElementById('navMenu');

// const menudissapear = document.getElementById('nav-btn');
const slides = document.querySelectorAll('.imgslider-cards');

let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 3000);

window.addEventListener('DOMContentLoaded', () => {
  // Simulate an API request or any async operation
  // Replace with your actual data loading logic and time=
  setTimeout(() => {
    // eslint-disable-next-line no-use-before-define
    hideLoader();
    // eslint-disable-next-line no-use-before-define
    showContent();
  }, 2500);

  function hideLoader() {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
  }

  function showContent() {
    const content = document.getElementById('content');
    content.style.display = 'block';
  }
});

// function openMenu() {
//   popup.classList.add('dropdown-menuShow');
//   navMenu.classList.add('navMenu');
//   menudissapear.classList.add('navMenu');
// }
// openMenu();
// function closeMenu() {
//   popup.classList.remove('dropdown-menuShow');
//   navMenu.classList.remove('navMenu');
//   menudissapear.classList.remove('navMenu');
// }
// closeMenu();
// Project data array

const form = document.querySelector('.contact-form');
const email = document.getElementById('email');
const errMsg = document.querySelector('.err-msg');
const msgText = 'Please write your email in lowercase';
/* ---- validation form ----- */
form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    errMsg.textContent = msgText;
    errMsg.classList.add('errMsgAdd');
    e.preventDefault();
  } else {
    errMsg.classList.add('errMsgRmv');
  }
});

const fullName = document.getElementById('Full-name');
const message = document.getElementById('mess');
form.addEventListener('click', () => {
  const contactData = {
    fullName: fullName.value,
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('contactData', JSON.stringify(contactData));
});
window.addEventListener('load', () => {
  const data = JSON.parse(localStorage.getItem('contactData'));
  if (data) {
    fullName.value = data.fullName;
    email.value = data.email;
    message.value = data.message;
  }
});

function runCounter(targetId, start, end, duration) {
  const range = end - start;
  let current = start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  const timer = setInterval(() => {
    current += increment;
    document.getElementById(targetId).innerText = current;
    if (current === end) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Function to start the counters when the section is reached
function startCounters(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      runCounter('projectsCounter', 0, 20, 2000);
      runCounter('clientsCounter', 0, 30, 2000);
      runCounter('experienceCounter', 0, 8, 2000);
      runCounter('customersCounter', 0, 8, 2000);
      observer.unobserve(entry.target);
    }
  });
}

// Create an intersection observer instance
const observer = new IntersectionObserver(startCounters, { threshold: 0.5 });

// Target the section with class cosection
const section = document.querySelector('.cosection');

// Observe the section
observer.observe(section);
