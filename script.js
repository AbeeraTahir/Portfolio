const bars = document.querySelector('.bars');
const crossIcon = document.querySelector('.cross_icon');
const navLinks = document.querySelectorAll('.nav_links');
const mobileMenu = document.querySelector('.mobile_menu');
bars.addEventListener('click', () => {
  mobileMenu.classList.toggle('hide');
});
crossIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('hide');
});
navLinks.forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.classList.add('hide');
  });
});
const projects = {
  workCards: [
    {
      id: 1,
      name: 'Book My Ride',
      description: 'A car rental application that allows users to browse through all available cars, reserve a car for a designated time frame, and view all reservations made by them.',
      popUpDescription: 'Book my Ride App is a car rental application, built with RoR, React, and Redux, that provides users with the ability to create an account, log in, and reserve acar for a designated time frame. It also allows users to browse through all available vehicles and view specific cars. Additionally, users can check their own booking history and view all reservations made by them.',
      technologies: ['React', 'RoR', 'PostgreSQL'],
      image: './images/car-rent.png',
      liveLink: 'https://car-rent-12xc.onrender.com/',
      source: 'https://github.com/AbeeraTahir/book-my-ride-backend.git',
    },
    {
      id: 2,
      name: "Space Travelers' Hub",
      description: 'A web application, built with React and Redux, that works with real live data from the SpaceX API to allow users to book rockets and join selected space missions.',
      popUpDescription: "The Space Traveler's hub built with React and Redux is web application that works with real live data from the SpaceX API. The app is meant to serve company's that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions.",
      technologies: ['HTML', 'CSS', 'React', 'Redux'],
      image: './images/sth.png',
      liveLink: 'https://superb-cucurucho-982ab9.netlify.app/',
      source: 'https://github.com/AbeeraTahir/Space-Travelers-Hub.git',
    },
    {
      id: 3,
      name: 'Bookstore',
      description: 'A web application, built with React and Redux, hat allows users to see the list of books, add a book to the list, and remove a book from the list.',
      popUpDescription: 'Bookstore is a website built with React, Redux and external API, that allows users to see the list of books, add a book to the list, and remove a book from the list.',
      technologies: ['HTML', 'CSS', 'React', 'Redux'],
      image: './images/bookstore.png',
      liveLink: 'https://friendly-manatee-6f4f18.netlify.app/',
      source: 'https://github.com/AbeeraTahir/Bookstore.git',
    },
    {
      id: 4,
      name: 'Math Magicians',
      description: 'A Single Page Application (SPA), built with React, that allows users to make simple calculations and read a math-related quote.',
      popUpDescription: 'Math Magicians is a Single Page Application (SPA), built with React, that allows users to make simple calculations and read a math-related quote.',
      technologies: ['HTML', 'CSS', 'React', 'Redux'],
      image: './images/mm.png',
      liveLink: 'https://stately-mochi-0d3ec2.netlify.app/',
      source: 'https://github.com/AbeeraTahir/Math-Magicians.git',
    },
  ],
};
let workSection = `<div class="works_title flex-align-center">
<h2 class="font-crete-round fw-4">My Recent Works</h2>
<div class="works_line"></div>
</div>
<div class="works_container d-flex">`;
<div class="works_container d-flex">`;
let multiPostSection = `<div class="multi_post_container d-flex">
<img class="multi_post_img" src="${projects.multiPost.image}" alt="poster">
<div class="multi_post_stories d-flex text-dark">
    <h3 class="title_post font-crete-round fw-4">${projects.multiPost.name}</h3>
    <p class="multi_post_para font-inter fw-4">
    ${projects.multiPost.description}</p>
    <div class="tags">
      <ul>`;
projects.multiPost.technologies.forEach((item) => {
  multiPostSection += `<li>${item}</li>`;
});
multiPostSection += `</ul>
      </div>
      <button class="btn-primary btn-multi">See project</button>
    </div>
  </div>`;
let cardsSection = '<div class="works_card_container">';
projects.workCards.forEach((card) => {
  cardsSection += `<div class="card">
    <div class="project_image">
      <img src="${card.image}">
    </div>
      <div class="mask_group">
          <div class="card_content_container">
              <h3>${card.name}</h3>
                <p>${card.description}</p>
                  <div class="tags card_tags">
                      <ul>`;
  card.technologies.forEach((item) => {
    cardsSection += `<li>${item}</li>`;
  });
  cardsSection += `</ul>
                  </div>
          </div>
        </div>
      <button class="btn-primary btn_see_project">See project</button>
  </div>`;
});
cardsSection += '</div>';
workSection = `${workSection + cardsSection}</div>`;
document.getElementById('work').innerHTML = workSection;

const btnSeeProject = document.getElementsByClassName('btn_see_project');
const btnSeeProjectArray = Array.from(btnSeeProject);

function getProjects(index) {
  let project = `<div class="popup flex-align-center">
      <div class="popup_head d-flex">
      <div class="popup_title_container d-flex">
      <h2 class="font-roboto text-secondary-dark">${index.name}</h2>
      <div class="cross"><img class="popup_cross" src="icons/cross_icon.svg" alt="cross icon"></div>
    </div>
    <div class="popup_tags">
        <ul class="d-flex">`;
  index.technologies.forEach((skill) => {
    project += `<li class="font-poppins">${skill}</li>`;
  });
  project += `</ul>
    </div>
      </div>
      <div class="popup_content_container d-flex">
        <img src="${index.image}" alt="poster">
        <div class="popup_content d-flex">
          <p class="font-inter fw-4">${index.popUpDescription}</p>
          <div class="popup_buttons d-flex">
            <button class="btn-primary btn_see_live flex-align-center"><a href="${index.liveLink}" target="_blank">See Live</a><img src="icons/see_live.svg" alt="live"></button>
            <button class="btn-primary white btn_see_source flex-align-center"><a href="${index.source}" target="_blank">See Source</a></Source><img src="icons/github.png" alt="GitHub"></button>
          </div>
        </div>
      </div>
    </div>`;
  return project;
}

function loadProjectPopUp(p) {
  const projectsPopUp = getProjects(projects.workCards[p]);
  return projectsPopUp;
}

const popUpSection = document.querySelector('.popup_section');

btnSeeProjectArray.forEach((project, i) => {
  project.addEventListener('click', () => {
    popUpSection.innerHTML = loadProjectPopUp(i);
    popUpSection.classList.toggle('hide');
    document.querySelector('.popup_cross').addEventListener('click', () => {
      popUpSection.classList.toggle('hide');
    });
  });
});
const form = document.getElementById('contact_form');
form.addEventListener('submit', (e) => {
  const email = document.getElementById('email').value;
  const errorMsgElement = document.querySelector('.error_msg');
  const errorMsg = 'Email should be in lower case.';
  const lowerCaseEmail = document.getElementById('email').value.toLowerCase();
  if (email !== lowerCaseEmail) {
    errorMsgElement.innerHTML = errorMsg;
    e.preventDefault();
  }
});

const userName = document.getElementById('full-name');
const userEmail = document.getElementById('email');
const userMessage = document.getElementById('message');

let formData = {
  userName: '',
  userEmail: '',
  userMessage: '',
};

userName.addEventListener('input', () => {
  formData.userName = userName.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});
userEmail.addEventListener('input', () => {
  formData.userEmail = userEmail.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});
userMessage.addEventListener('input', () => {
  formData.userMessage = userMessage.value;
  localStorage.setItem('formData', JSON.stringify(formData));
});

window.addEventListener('DOMContentLoaded', () => {
  formData = JSON.parse(localStorage.getItem('formData') || '{}');
  if (formData.userName) {
    userName.value = formData.userName;
  }
  if (formData.userEmail) {
    userEmail.value = formData.userEmail;
  }
  if (formData.userMessage) {
    userMessage.value = formData.userMessage;
  }
});
