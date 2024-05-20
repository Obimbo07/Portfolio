const projects = [
  {
    index: 0,
    name: 'Book Destination',
    description: 'This Full stack application helps users reserve holiday, meeting and BNB destinations, in various places. Users have can perform CRUD operations on the destinations.',
    technologies: ['Ruby on Rails', 'React/Redux'],
    image: 'img/Olay .png',
    liveLink: 'https://www.olaycompany.com',
    sourceLink: 'Not Sourced on Github',
  },
  {
    index: 1,
    name: 'Budget App',
    description: 'A more generic versioned Budget App, that includes transaction managment features.A User authentication system using JWT authentication.',
    image: 'img/budget-app.jpg',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    liveLink: 'https://example.com/project2',
    sourceLink: 'https://github.com/user/project2',
  },
  {
    index: 2,
    name: 'Recipe Daily',
    description: 'is a User authenticated application that allows them perform CRUD operations on recipe meals. The add food feature enables users create unique recipes and decide which ones to display publicly to all users. ',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    image: 'img/recipe.jpg',
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
  },
  {
    index: 3,
    name: 'Catalogue of My Things',
    description: 'Collaborated on this console app  that helps users manage their category of things. The menu is user friendly and interactive with a list of options. record of different types of things you own: books, music albums, movies, and games.The data will be stored in JSON files but will also prepare a database with tables structure analogical to the programs class structure.',
    technologies: ['Ruby', 'Console Interface'],
    image: 'img/cot.jpg',
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
  },
  {
    index: 4,
    name: 'Space X Travellers Hub',
    description: 'I collaborated remotely with team members in this frontend application to utilise API calls to render a list of Space X dragons and spacce shuttles. Using redux to handle state i was able to save bookings of the dragons.',
    technologies: ['React', 'Bootstrap', 'Redux'],
    image: 'img/spacex.png',
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
  {
    index: 6,
    name: 'Multi Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    image: 'img/projects.png',
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
  },
  {
    index: 7,
    name: 'Multi Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    image: 'img/projects.png',
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
  },
  {
    index: 8,
    name: 'Multi Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    technologies: ['HTML', 'Bootstrap', 'Ruby on rails'],
    image: 'img/projects.png',
    liveLink: 'https://example.com/project1',
    sourceLink: 'https://github.com/user/project1',
  },
  // Add more project objects as needed
];

// Group projects by technology
function groupProjectsByTechnology(projects) {
  const techGroups = {};
  projects.forEach((project) => {
    project.technologies.forEach((tech) => {
      if (!techGroups[tech]) {
        techGroups[tech] = [];
      }
      techGroups[tech].push(project);
    });
  });
  return techGroups;
}

const projectsByTechnology = groupProjectsByTechnology(projects);

// Create navigation links
const navContainer = document.getElementById('techNav');
const projectsSection = document.getElementById('projectsSection');

function createNavLinks(techGroups) {
for (const tech in techGroups) {
const navLink = document.createElement('button');
navLink.textContent = tech;
navLink.classList.add('search-link');
navLink.addEventListener('click', () => displayProjectsByTechnology(techGroups[tech]));
navContainer.appendChild(navLink);
  }
}

function displayProjectsByTechnology(projects) {
  projectsSection.innerHTML = ''; // Clear current projects
  projects.forEach((project, index) => createProjectCard(project, index));
}

createNavLinks(projectsByTechnology);

// Create project cards
function createProjectCard(project, index) {
  const desc = project.description.substring(0, 100);
  const card = document.createElement('div');
  card.classList.add('project-card');

  const cardContent = `
      <div class="card-works" style="background-color: black; background-position: top; background-size: contain; background-repeat: no-repeat;">
      <div class="prjct-banner">
        <h2 class="card-title">${project.name}</h2>
        <img class="prjct-img" src="${project.image}" >
      </div>
    
      <p class="card-description">${desc}...</p>
      <ul class="card-techskills">
        ${project.technologies.map((tech) => `<li class="card-skillset">${tech}</li>`).join('')}
      </ul>
      <button class="card-btn" data-index="${index}">See Project</button>
     </div> 
    `;
  card.innerHTML = cardContent;
  projectsSection.appendChild(card);

  const cardBtn = card.querySelector('.card-btn');
  cardBtn.addEventListener('click', () => openModal(project));
}

// Display all projects initially
projects.forEach((project, index) => createProjectCard(project, index));

// Modal logic
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalTechnologies = document.getElementById('modalTechnologies');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const modalLiveLink = document.getElementById('modalLiveLink');
const modalSourceLink = document.getElementById('modalSourceLink');
const closeModalBtn = document.getElementById('closeModalBtn');

function openModal(project) {
  modalTitle.textContent = project.name;
  modalTechnologies.innerHTML = project.technologies.map((tech) => `<li>${tech}</li>`).join('');
  modalImage.src = project.image;
  modalDescription.textContent = project.description;
  modalLiveLink.href = project.liveLink;
  modalSourceLink.href = project.sourceLink;

  modalOverlay.style.display = 'block';
}

closeModalBtn.addEventListener('click', () => {
  modalOverlay.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.style.display = 'none';
  }
});