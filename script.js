const unionButton = document.querySelector('.union-button');
const crossButton = document.querySelector('.cross-button');
const hamBar = document.querySelector('.ham-bar');
const scrollToLinks = document.querySelectorAll('.scroll');
const cardSection = document.getElementById('portfolio');

const projects = [
  {
    id: 'Project1',
    title: 'To Do List',
    title1: 'To Do List',
    company: 'Microverse',
    company1: 'Microverse',
    icon: './Properties/Counter.svg',
    specialization: 'Front End Dev',
    specialization1: 'Front End Dev',
    year: '2023',
    description:
      'The goal of this project was to gain familiarity with webpack and enhance JavaScript skills by creating a simple to-do list application',
    description1:
      "The project implemented essential features of a to-do list, including adding tasks, removing tasks, editing tasks, and clearing completed tasks. By working on this task, the aim was to improve understanding of webpack bundling and deepen knowledge of JavaScript programming.",
    technologies: {
      tech1: 'html',
      techE: 'webpack',
      tech2: 'css',
      tech3: 'javaScript',
    },
    imageMobile: './Properties/to_do_list.png',
    imageDesktop: './Properties/to_do_list.png',
    live: 'https://zuhebahmed88091.github.io/Portfolio_site/',
    source: 'https://github.com/zuhebahmed88091/Portfolio_site',
  },
  {
    id: 'Project2',
    title: 'Spend Smartly',
    title1: 'Spend Smartly',
    company: 'Microverse',
    company1: 'Microverse',
    icon: './Properties/Counter.svg',
    specialization: 'Full Stack Dev',
    specialization1: 'Full Stack Dev',
    year: '2023',
    description:
      'This is a mobile application designed for expense management. It allows users to keep track of their spending by categorizing transactions, providing insights into their expenditures and where the money went.',
    description1:
      "This is a mobile application designed for expense management. It allows users to keep track of their spending by categorizing transactions, providing insights into their expenditures and where the money went.",
    technologies: {
      tech1: 'Ruby on Rails',
      techE: 'Bootstrap',
      tech2: 'Css',
      tech3: 'OOP',
    },
    imageMobile: './Properties/spendsmartly 1.png',
    imageDesktop: './Properties/spensmartly2.png',
    live: 'https://budget-app-i188.onrender.com',
    source: 'https://github.com/zuhebahmed88091/Budget_App',
  },
  {
    id: 'Project3',
    title: 'Tonic',
    title1: 'Facebook 360',
    company: 'CANOPY',
    company1: 'FACEBOOK 360',
    icon: './Properties/Counter.svg',
    specialization: 'Back End Dev',
    specialization1: 'Full Stack Dev',
    year: '2015',
    description:
      'Exploring the future of media in Facebooks first Virtual Realityapp; a place to discover and enjoy 360 photos and videos on Gear VR.',
    description1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    technologies: {
      tech1: 'html',
      techE: 'webpack',
      tech2: 'css',
      tech3: 'javaScript',
    },
    imageMobile: './Properties/Work 3.svg',
    imageDesktop: './Properties/Work 1.svg',
    live: '#',
    source: '#',
  },
  {
    id: 'Project4',
    title: 'Multi-Post<br>Stories',
    title1: 'Uber Navigation',
    company: 'CANOPY',
    company1: 'Uber',
    icon: './Properties/Counter.svg',
    specialization: 'Back End Dev',
    specialization1: 'Lead Developer',
    year: '2018',
    description:
      'A daily selection of privately <br class="must-ignor">personalized reads;no accounts or <br class="must-ignor">sign-ups required.',
    description1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    technologies: {
      tech1: 'html',
      techE: 'webpack',
      tech2: 'css',
      tech3: 'javaScript',
    },
    imageMobile: './Properties/Work 4.svg',
    imageDesktop: './Properties/Work 2.svg',
    live: '#',
    source: '#',
  },
];

let count = 1;
projects.forEach((project) => {
  const newDiv = document.createElement('div');
  newDiv.innerHTML = `
    <div class="card_${count}">
    <div class="card-image">
    <img class="work" src="${project.imageMobile}" alt="image">
    <img class="pic card-image"src="${project.imageDesktop}" alt="image">
    </div>
    <div class="Card_text flex-column">
    <h3 class="tonic-1 ignore-mbl">${project.title}</h3>
    <h3 class="tonic-1 ignore-desk">${project.title1}</h3>
    <ul class="page flex-row">
      <li class="title_1 ignore-mbl">${project.company}</li>
      <li class="title_1 ignore-desk">${project.company1}</li>
      <li><img src="${project.icon}" alt="Dot icon" ></li>
      <li class="ignore-mbl">${project.specialization}</li>
      <li class="ignore-desk">${project.specialization1}</li>
      <li><img src="${project.icon}" alt="Dot icon" ></li>
      <li>${project.year}</li>
    </ul>
    <p class="Text">
    ${project.description}
    </p>
    <ul class="other-tags flex-row primarytext33">
        <li class="box"><span>${project.technologies.tech1}</span></li>
        <li class="box_desk "><span>${project.technologies.techE}</span></li>
        <li class="box"><span>${project.technologies.tech2}</span></li>
        <li class="box"><span>${project.technologies.tech3}</span></li>
    </ul>
    <button type="button" id="${project.id}" class="flex-row see">See Project</button>
    </div>
    
    </div>`;
  if (count === 2) {
    count -= 1;
  } else {
    count += 1;
  }
  cardSection.append(newDiv);
});

const seeproject = document.querySelectorAll('.see');
const overlay = document.getElementById('overlay1');
const popup = document.querySelector('.popup');
const over = document.querySelector('.over');
seeproject.forEach((p) => p.addEventListener('click', (p) => {
  const { id } = p.target;
  const pop = projects.find((p) => p.id === id);
  popup.innerHTML = `
  <div class="titles">
    <div class="flex-row" style="justify-content:space-between;">
      <h2 class="tonic-1 ignore-mbl" style="padding-left:6%">${pop.title}</h2>
      <h2 class="tonic-1 tonic-12  ignore-desk">${pop.title1}</h2>
      <button class="close close12" style="border-color:white;">&times;</button>
    </div>
    <div class="Card_text flex-column">
    <ul class="page page12 flex-row" style="padding-left:7%">
      <li class="title_1 ignore-mbl">${pop.company}</li>
      <li class="title_1  ignore-desk">${pop.company1}</li>
      <li><img src="${pop.icon}" alt="Dot icon" ></li>
      <li class="ignore-mbl">${pop.specialization}</li>
      <li class="ignore-desk">${pop.specialization1}</li>
      <li><img src="${pop.icon}" alt="Dot icon" ></li>
      <li>${pop.year}</li>
    </ul>
    </div>
    <img src="${pop.imageMobile}" alt="live" class="work" style="padding-left:6%; margin-top:0%">
    <img src="${pop.imageDesktop}" alt="live" class="pic"  style="width:75%;">
    <div class="explain">
      <p class="tonic-text2">
        ${pop.description}
        <br class="ignore-desk">
        <br class="ignore-desk">
        <span class="ignore-desk">${pop.description1}</span>
      </p>
      <div class="smart">
          <ul class="other-tag flex-row" style="padding-left:6%">
            <li class="box">${pop.technologies.tech1}</li>
            <li class="box_desk ignore-mbl">${pop.technologies.techE}</li>
            <li class="box">${pop.technologies.tech2}</li>
            <li class="box">${pop.technologies.tech3}</li>
          </ul>
          <ul class="other-tag flex-row" style="padding-left:6%">
            <li class="box ignore-desk">Webpack</li>
            <li class="box ignore-desk">Bootstrap</li>
          </ul>
          <div class="btns">
            <button type="button" id="live" class="but">See live &nbsp;
              <img src="./Properties/source.svg" alt="live" class = "live">
            </button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
            <button type="button" id="source" class="but">See source &nbsp;
              <img src="./Properties/Github.png" alt="source">
            </button>
          </div>
      </div>
  </div>  `;

  const live = document.getElementById('live');
  const source = document.getElementById('source');

  live.addEventListener('click', () => {
    document.location.href = pop.live;
  });

  source.addEventListener('click', () => {
    document.location.href = pop.source;
  });

  overlay.classList.toggle('active');
  popup.classList.toggle('active');
  over.classList.toggle('active');

  const close = document.querySelector('.close');

  close.addEventListener('click', () => {
    popup.classList.remove('active');
    over.classList.remove('active');
    overlay.classList.remove('active');
  });
}));

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

  function isLowerCase(str) {
    return str === str.toLowerCase();
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
    } else if (!isLowerCase(emailValue)) {
      setError(email, 'Email must be in lowercase');
    } else {
      // Validation is OK, submit the form
      form.submit();
    }
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateFormInputs();
  });
});

const nameField = document.querySelector('input[name="username"]');
const emailField = document.querySelector('input[name="email"]');
const messageField = document.querySelector('textarea[name="user-message"]');

function saveDataToLocalStorage() {
  const data = {
    name: nameField.value,
    email: emailField.value,
    message: messageField.value,
  };

  localStorage.setItem('formData', JSON.stringify(data));
}
window.addEventListener('load', () => {
  const savedData = localStorage.getItem('formData');
  if (savedData) {
    const data = JSON.parse(savedData);
    nameField.value = data.name;
    emailField.value = data.email;
    messageField.value = data.message;
  }
});
nameField.addEventListener('input', saveDataToLocalStorage);
emailField.addEventListener('input', saveDataToLocalStorage);
messageField.addEventListener('input', saveDataToLocalStorage);
