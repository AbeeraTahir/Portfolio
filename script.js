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
      technologies: ['HTML', 'BootStrap', 'Ruby'],
      image: 'images/mask_group.png',
      liveLink: '#',
      source: 'https://github.com/AbeeraTahir/Portfolio.git',
    },
    {
      id: 2,
      name: 'Data Dashboard Healthcare',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      popUpDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      technologies: ['HTML', 'BootStrap', 'Ruby'],
      image: 'images/data.png',
      liveLink: '#',
      source: 'https://github.com/AbeeraTahir/Portfolio.git',
    },
    {
      id: 3,
      name: 'Website Protfolio',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      popUpDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      technologies: ['HTML', 'BootStrap', 'Ruby'],
      image: 'images/wp.png',
      liveLink: '#',
      source: 'https://github.com/AbeeraTahir/Portfolio.git',
    },
    {
      id: 4,
      name: 'Profesional Art Printing Data More',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      popUpDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      technologies: ['HTML', 'BootStrap', 'Ruby'],
      image: 'images/mask_group.png',
      liveLink: '#',
      source: 'https://github.com/AbeeraTahir/Portfolio.git',
    },
    {
      id: 5,
      name: 'Data Dashboard Healthcare',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      popUpDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      technologies: ['HTML', 'BootStrap', 'Ruby'],
      image: 'images/data.png',
      liveLink: '#',
      source: 'https://github.com/AbeeraTahir/Portfolio.git',
    },
    {
      id: 6,
      name: 'Website Protfolio ',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      popUpDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      technologies: ['HTML', 'BootStrap', 'Ruby'],
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
      <button class="orange_bg white">See project</button>
    </div>
  </div>`;
let cardsSection = '<div class="works_card_container">';
projects.workCards.forEach((card) => {
  cardsSection += `<div class="card">
      <div class="mask_group" style="background-image: url(${card.image}); background-repeat: no-repeat; background-size: cover; background-position: center">
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
      <button class="orange_bg">See project</button>
  </div>`;
});
cardsSection += '</div>';
workSection = `${workSection + multiPostSection + cardsSection}</div>`;
document.getElementById('work').innerHTML = workSection;