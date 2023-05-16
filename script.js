const unionButton = document.querySelector('.union-button');
const crossButton = document.querySelector('.cross-button');
const hamBar = document.querySelector('.ham-bar');
const scrollToLinks = document.querySelectorAll('.scroll');
const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');

function showMobileMenu() {
  hamBar.style.display = 'block';
}

function hideMobileMenu() {
  hamBar.style.display = 'none';
}
function scrollSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
scrollToLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const sectionId = link.getAttribute('href');
    scrollSection(sectionId);
    hideMobileMenu();
  });
});
unionButton.addEventListener('click', showMobileMenu);

crossButton.addEventListener('click', hideMobileMenu);

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const username = document.getElementById('name');
  const email = document.getElementById('email');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateFormInputs();
  });

  function setError(elm, msg) {
    const inputControl = elm.parentElement;
    const errorDiv = inputControl.querySelector('.error');
    errorDiv.innerText = msg;
    inputControl.classList.add('error');
  }

  function clearError(elm) {
    const inputControl = elm.parentElement;
    const errorDiv = inputControl.querySelector('.error');
    errorDiv.innerText = '';
    inputControl.classList.remove('error');
  }

  function validateFormInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();

    clearError(username);
    clearError(email);

    if (usernameValue === '') {
      setError(username, 'Username is required');
    }
    if (emailValue === '') {
      setError(email, 'Email is required');
    }
  }
});