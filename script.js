const unionButton = document.querySelector('.union-button');
const crossButton = document.querySelector('.cross-button');
const hamBar = document.querySelector('.ham-bar');
const scrollToLinks = document.querySelectorAll('.scroll');
let projects = [
  {
      projectNmae: "Tonic",
      flag: "desktop",
      projectDescription: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
      projectImg: "./Properties/snippet-desktop-one.png",
      projectFirstList: ["CANOPY", "Back End Dev", "2015"],
      projectTechnologoies: ["html", "css", "javascript"],
      projectLink: "#"
  },
  {
    projectNmae: "Multi-Post Stories",
    flag: "desktop",
    projectDescription:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    projectImg: "./Properties/snippet2.png",
    projectFirstList: ["FACEBOOK", "Full Stack Dev", "2015"],
    projectTechnologoies: ["html", "Ruby on rails", "css", "javascript"],
    projectLink: "#"
  },
  {
      projectNmae: "Facebook 360",
      flag: "desktop",
      projectDescription:
          "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
      projectImg: "./Properties/snippet1.png",
      projectTechnologoies: ["html", "Ruby on rails", "css", "javascript"],
      projectFirstList: ["FACEBOOK", "Full Stack Dev", "2015"],
      projectLink: "#"
  },
  {
      projectNmae: "Uber Navigation",
      flag: "desktop",
      projectDescription:
          "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
      projectImg: "./Properties/snippet-four-desktop.png",
      projectTechnologoies: ["html", "Ruby on rails", "css", "javascript"],
      projectFirstList: ["Uber", "Lead Developer", "2018"],
      projectLink: "#"
  },
  {
    projectNmae: "TONIC",
    flag: "mobile",
    projectDescription:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    projectImg: "./Properties/snippet1.png",
    projectTechnologoies: ["HTML", "CSS", "JAVASCRIPT"],
    projectFirstList: ["CANOPY", "Back End Dev", "2015"],
    projectLink: "#"
  },
  {
    projectNmae: "Multi-Post Stories",
    flag: "mobile",
    projectDescription:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    projectImg: "./Properties/snippets4.png",
    projectTechnologoies: ["HTML", "CSS", "JAVASCRIPT"],
    projectFirstList: ["CANOPY", "Back End Dev", "2015"],
    projectLink: "#"
  },
  {
    projectNmae: "Tonic",
    flag: "mobile",
    projectDescription:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    projectImg: "./Properties/snippets3.png",
    projectTechnologoies: ["HTML", "CSS", "JAVASCRIPT"],
    projectFirstList: ["CANOPY", "Back End Dev", "2015"],
    projectLink: "#"
  },
  {
    projectNmae: "Multi-Post Stories",
    flag: "mobile",
    projectDescription:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    projectImg: "./Properties/snippet2.png",
    projectTechnologoies: ["HTML", "CSS", "JAVASCRIPT"],
    projectFirstList: ["CANOPY", "Back End Dev", "2015"],
    projectLink: "#"
  }
];

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

// JavaScript array to store project information
function generateWorkSection() {
  let portfolioSection = document.getElementById('portfolio-section');

  for (i = 0; i < projects.length; i++) {
      let project = projects[i];

       else {
          if(i % 2 === 1) {
              let cardSection = document.createElement('section');
              cardSection.classList.add('cards-desktop-second');
              let projectHeader = document.createElement('section');
              projectHeader.classList.add('project-details-desktop-second');
              let projectDetailsHeading = document.createElement('section');
              projectDetailsHeading.classList.add('project-details-heading-desktop-second');
              let projectName = document.createElement('h2');
              projectName.textContent = project.projectNmae;
              let projectUnorderedList = document.createElement('ul');
          
              for (let j = 0; j < project.projectFirstList.length; j++) {
                  let listItem = project.projectFirstList[j];
                  if(j === 0) {
                      let projectFirstListItem = document.createElement('li');
                      projectFirstListItem.classList.add('first-list-item-desktop-second');
                      projectFirstListItem.textContent = listItem;
                      projectUnorderedList.appendChild(projectFirstListItem);
                  } else {
                      let listItems = document.createElement('li');
                      listItems.classList.add('list-items-desktop-second');
                      listItems.textContent = listItem;
                      projectUnorderedList.appendChild(listItems);
                  }
              }
              let projectDesc = document.createElement('p');
              projectDesc.textContent = project.projectDescription;
              let projectTech = document.createElement('ul');
              projectTech.classList.add('tools-desktop-second');
                  for(let k = 0; k < project.projectTechnologoies.length; k++) {
                  let tech = project.projectTechnologoies[k];
                  let techList = document.createElement('li');
                  techList.classList.add('tools-items-desktop-second');
                  techList.textContent = tech;
                  projectTech.appendChild(techList);
              }
              let projectButton = document.createElement('button');
              projectButton.classList.add('user-buttons-desktop-second');
              projectButton.textContent = 'See Project';
  
              let projectFooter = document.createElement('footer');
              projectFooter.classList.add('project-snippet-desktop-second');
              let imgWrapperLink = document.createElement('a');
              imgWrapperLink.classList.add('snippet-desktop-second');
              imgWrapperLink.href = project.projectLink;
              let projectImg = document.createElement('img');
              projectImg.src = project.projectImg;
              projectImg.alt = '';
  
              projectDetailsHeading.appendChild(projectName);
              projectDetailsHeading.appendChild(projectUnorderedList);
              projectHeader.appendChild(projectDetailsHeading);
              projectHeader.appendChild(projectDesc);
              projectHeader.appendChild(projectTech);
              projectHeader.appendChild(projectButton);
              cardSection.appendChild(projectHeader);
              imgWrapperLink.appendChild(projectImg);
              projectFooter.appendChild(imgWrapperLink);
              cardSection.appendChild(projectFooter);
              portfolioSection.appendChild(cardSection);
  
              
          }else {
              let cardSection = document.createElement('section');
          cardSection.classList.add('cards-desktop');
  
          let projectHeader = document.createElement('section');
          projectHeader.classList.add('project-snippet-desktop');
          let imgWrapperLink = document.createElement('a');
          imgWrapperLink.classList.add('snippet-desktop');
          imgWrapperLink.href = project.projectLink;
          let projectImg = document.createElement('img');
          projectImg.src = project.projectImg;
          projectImg.alt = '';
  
          let projectFooter = document.createElement('footer');
          projectFooter.classList.add('project-details-desktop');
  
          let projectDetailsHeading = document.createElement('section');
          projectDetailsHeading.classList.add('project-details-heading-desktop');
  
          let projectName = document.createElement('h2');
          projectName.textContent = project.projectNmae;
  
          let projectUnorderedList = document.createElement('ul');
          
          for (let j = 0; j < project.projectFirstList.length; j++) {
              let listItem = project.projectFirstList[j];
              if(j === 0) {
                  let projectFirstListItem = document.createElement('li');
                  projectFirstListItem.classList.add('first-list-item-desktop');
                  projectFirstListItem.textContent = listItem;
                  projectUnorderedList.appendChild(projectFirstListItem);
              } else {
                  let listItems = document.createElement('li');
                  listItems.classList.add('list-items-desktop');
                  listItems.textContent = listItem;
                  projectUnorderedList.appendChild(listItems);
              }
          }
          let projectDesc = document.createElement('p');
          projectDesc.textContent = project.projectDescription;
          let projectTech = document.createElement('ul');
          projectTech.classList.add('tools-desktop');
          for(let k = 0; k < project.projectTechnologoies.length; k++) {
              let tech = project.projectTechnologoies[k];
              let techList = document.createElement('li');
              techList.classList.add('tools-items-desktop');
              techList.textContent = tech;
              projectTech.appendChild(techList);
          }
          let projectButton = document.createElement('button');
          projectButton.classList.add('user-buttons-desktop');
          projectButton.textContent = 'See Project';
  
          imgWrapperLink.appendChild(projectImg);
          projectHeader.appendChild(imgWrapperLink);
          projectDetailsHeading.appendChild(projectName);
          projectDetailsHeading.appendChild(projectUnorderedList);
          projectFooter.appendChild(projectDetailsHeading);
          projectFooter.appendChild(projectHeader);
          projectFooter.appendChild(projectDesc);
          projectFooter.appendChild(projectTech);
          projectFooter.appendChild(projectButton);
          cardSection.appendChild(projectHeader);
          cardSection.appendChild(projectFooter);
          portfolioSection.appendChild(cardSection);
          }
      }
  }

     
}

generateWorkSection();


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