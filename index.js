const popup = document.getElementById('navMenu');
const navMenu = document.getElementById('navMenu');
const menudissapear = document.getElementById('nav-btn');

function openMenu() {
  popup.classList.add('dropdown-menuShow');
  navMenu.classList.add('navMenu');
  menudissapear.classList.add('navMenu');
}
openMenu();
function closeMenu() {
  popup.classList.remove('dropdown-menuShow');
  navMenu.classList.remove('navMenu');
  menudissapear.classList.remove('navMenu');
}
closeMenu();
// Project data array
const projects = [
  {
    index: 0,
    name: 'Olay Company',
    description: 'This company is based in Vietnam and offers online jobs to its clients, I created it using PHP frameworks, The Company has an inbuilt e-commerce store. Using Software as a service, (SAS) olay company allows its clients to earn a stable wage daily and also a good money market Fund for all your goals and achievments. Olay also has an online customer support system intergrated with TAWK.io. Check it out and experience what olay has to offer',
    technologies: ['PHP Frameworks'],
    image: 'img/Olay .png',
    liveLink: 'https://www.olaycompany.com',
    sourceLink: 'Not Sourced on Github',
  },
  {
    index: 1,
    name: 'Multi Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    image: 'img/projects.png',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    liveLink: 'https://example.com/project2',
    sourceLink: 'https://github.com/user/project2',
  },
  {
    index: 2,
    name: 'Multi Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    image: 'img/projects.png',
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
  },
  {
    index: 3,
    name: 'Multi Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    image: 'img/projects.png',
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
  },
  {
    index: 4,
    name: 'Multi Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technoloBootstraps: ['HTML', 'Bootstrap', 'Ruby on rails'],
    image: 'img/projects.png',
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
  },
  {
    index: 5,
    name: 'Multi Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    image: 'img/projects.png',
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
  },
  // Add more project objects as needed
];

const projectsSection = document.getElementById('projectsSection');
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const modalTechnologies = document.getElementById('modalTechnologies');
const modalLiveLink = document.getElementById('modalLiveLink');
const modalSourceLink = document.getElementById('modalSourceLink');
const closeModalBtn = document.getElementById('closeModalBtn');
const form = document.querySelector('.contact-form');
const email = document.getElementById('email');
const errMsg = document.querySelector('.err-msg');
const msgText = 'Please write your email in lowercase';

function openModal(project) {
  modalTitle.textContent = project.name;
  modalImage.src = project.image;
  modalDescription.textContent = project.description;
  // Create a <ul> element to hold the technologies
  const technologiesList = document.createElement('ul');
  technologiesList.classList.add('technologies-list');

  // Loop through each technology and create a <li> element
  project.technologies.forEach((technology) => {
    const technologyItem = document.createElement('li');
    technologyItem.textContent = technology;
    technologiesList.appendChild(technologyItem);
  });

  // Clear the existing content of modalTechnologies before appending the list
  modalTechnologies.innerHTML = '';
  modalTechnologies.appendChild(technologiesList);
  modalLiveLink.href = project.liveLink;
  modalSourceLink.href = project.sourceLink;

  modalOverlay.style.display = 'block';
}

function createProjectCard(project, index) {
  const card = document.createElement('div');
  card.classList.add('project-card');

  const cardContent = `
  <div class="card-works">
  <h2 class="card-title">Projects</h2>
  <p class="card-description">A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.</p>
  <ul class="card-techskills">
    <li class="card-skillset">HTML</li>
    <li class="card-skillset">Bootstrap</li>
    <li class="card-skillset">Ruby</li>
  </ul>
  <button class="card-btn" data-index="${index}">See Project</button>
 </div> 
     
    `;
  card.innerHTML = cardContent;
  projectsSection.appendChild(card);

  const cardbtn = card.querySelector('.card-btn');
  cardbtn.addEventListener('click', function open() {
    const projectIndex = parseInt(this.getAttribute('data-index'), 10);
    openModal(projects[projectIndex]);
  });
}
const recentProject = document.querySelector('.project-view');
recentProject.addEventListener('click', () => {
  openModal(projects[0]);
});

function closeModal() {
  modalOverlay.style.display = 'none';
}

closeModalBtn.addEventListener('click', () => {
  closeModal();
});

projects.forEach((project, index) => {
  createProjectCard(project, index);
});
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
