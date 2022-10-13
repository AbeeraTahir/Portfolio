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
  multiPost: {
    name: 'Multi-Post Stories',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    popUpDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    image: 'images/multi_post.png',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveLink: '#',
    source: 'https://github.com/AbeeraTahir/Portfolio.git',
  },
  workCards: [
    {
      id: 1,
      name: 'Profesional Art Printing Data More',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      popUpDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      technologies: ['HTML', 'Bootstrap', 'Ruby'],
      image: 'images/mask_group.png',
      liveLink: '#',
      source: 'https://github.com/AbeeraTahir/Portfolio.git',
    },
    {
      id: 2,
      name: 'Data Dashboard Healthcare',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      popUpDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      technologies: ['HTML', 'Bootstrap', 'Ruby'],
      image: 'images/data.png',
      liveLink: '#',
      source: 'https://github.com/AbeeraTahir/Portfolio.git',
    },
    {
      id: 3,
      name: 'Website Protfolio',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      popUpDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      technologies: ['HTML', 'Bootstrap', 'Ruby'],
      image: 'images/wp.png',
      liveLink: '#',
      source: 'https://github.com/AbeeraTahir/Portfolio.git',
    },
    {
      id: 4,
      name: 'Profesional Art Printing Data More',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      popUpDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      technologies: ['HTML', 'Bootstrap', 'Ruby'],
      image: 'images/mask_group.png',
      liveLink: '#',
      source: 'https://github.com/AbeeraTahir/Portfolio.git',
    },
    {
      id: 5,
      name: 'Data Dashboard Healthcare',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      popUpDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      technologies: ['HTML', 'Bootstrap', 'Ruby'],
      image: 'images/data.png',
      liveLink: '#',
      source: 'https://github.com/AbeeraTahir/Portfolio.git',
    },
    {
      id: 6,
      name: 'Website Protfolio ',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      popUpDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      technologies: ['HTML', 'Bootstrap', 'Ruby'],
      image: 'images/wp.png',
      liveLink: '#',
      source: 'https://github.com/AbeeraTahir/Portfolio.git',
    },
  ],
};
let workSection = `<div class="works_title">
<h2>My Recent Works</h2>
<div class="works_line"></div>
</div>
<div class="works_container">`;
let multiPostSection = `<div class="multi_post_container">
<img class="multi_post_img" src="${projects.multiPost.image}" alt="poster">
<div class="multi_post_stories">
    <h3 class="title_post">${projects.multiPost.name}</h3>
    <p class="multi_post_para">
    ${projects.multiPost.description}</p>
    <div class="tags">
      <ul>`;
projects.multiPost.technologies.forEach((item) => {
  multiPostSection += `<li>${item}</li>`;
});
multiPostSection += `</ul>
      </div>
      <button class="orange_bg white btn_multi">See project</button>
    </div>
  </div>`;
let cardsSection = '<div class="works_card_container">';
projects.workCards.forEach((card) => {
  cardsSection += `<div class="card">
      <div class="mask_group" style="background-image: url(${card.image})">
          <div class="card_content_container">
              <h3 class="white">${card.name}</h3>
                <p class="white">${card.description}</p>
                  <div class="tags card_tags">
                      <ul>`;
  card.technologies.forEach((item) => {
    cardsSection += `<li>${item}</li>`;
  });
  cardsSection += `</ul>
                  </div>
          </div>
        </div>
      <button class="orange_bg white btn_see_project">See project</button>
  </div>`;
});
cardsSection += '</div>';
workSection = `${workSection + multiPostSection + cardsSection}</div>`;
document.getElementById('work').innerHTML = workSection;

const btnSeeProject = document.getElementsByClassName('btn_see_project');
const btnSeeProjectArray = Array.from(btnSeeProject);

function getProjects(index) {
  let project = `<div class="popup">
      <div class="popup_head">
      <div class="popup_title_container">
      <h2>${index.name}</h2>
      <div class="cross"><img class="popup_cross" src="icons/cross_icon.svg" alt="cross icon"></div>
    </div>
    <div class="popup_tags">
        <ul>`;
  index.technologies.forEach((skill) => {
    project += `<li>${skill}</li>`;
  });
  project += `</ul>
    </div>
      </div>
      <div class="popup_content_container">
        <img src="${index.image}" alt="poster">
        <div class="popup_content">
          <p>${index.popUpDescription}</p>
          <div class="popup_buttons">
            <button class="orange_bg white btn_see_live"><a href="${index.liveLink}" target="_blank">See Live</a><img src="icons/see_live.svg" alt="live"></button>
            <button class="orange_bg white btn_see_source"><a href="${index.source}" target="_blank">See Source</a></Source><img src="icons/github.png" alt="GitHub"></button>
          </div>
        </div>
      </div>
    </div>`;
  return project;
}

function loadMultiPostPopUp() {
  const multiPostPopUp = getProjects(projects.multiPost);
  return multiPostPopUp;
}

function loadProjectPopUp(p) {
  const projectsPopUp = getProjects(projects.workCards[p]);
  return projectsPopUp;
}

const popUpSection = document.querySelector('.popup_section');

const btnMultiPost = document.querySelector('.btn_multi');
btnMultiPost.addEventListener('click', () => {
  popUpSection.innerHTML = loadMultiPostPopUp();
  popUpSection.classList.toggle('hide');
  document.querySelector('.popup_cross').addEventListener('click', () => {
    popUpSection.classList.toggle('hide');
  });
});

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
