const unionButton = document.querySelector('.union-button');
const crossButton = document.querySelector('.cross-button');
const hamBar = document.querySelector('.ham-bar');
const scrollToLinks = document.querySelectorAll('.scroll');

function showMobileMenu() {
  hamBar.style.display = 'block';
}

function hideMobileMenu() {
  hamBar.style.display = 'none';
}
for(let link of scrollToLinks) {
  link.addEventListener('click', function(event){
    event.preventDefault();
    const sectionId = link.getAttribute('href');
    scrollSection(sectionId);
    hideMobileMenu();
  });
}

unionButton.addEventListener('click', showMobileMenu);

crossButton.addEventListener('click', hideMobileMenu);
