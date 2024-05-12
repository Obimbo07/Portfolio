const certificates = [
  {
    id: 0,
    name: 'Data operations at Infosys',
    issuerer: 'Udacity',
    logo: '/img/udacity.png',
    link: 'https://confirm.udacity.com/HNFAD5LL',
    date: 'Issued Aug 2022',
    description: 'Understood Database Managment Systems and tools.I prepared and modelled data with powerBi. I learned how to create data visualizations and make data-driven decisions to improve company output',
  },
  {
    id: 1,
    name: 'Web Development Foundations',
    issuerer: 'Udacity',
    logo: '/img/udacity.png',
    link: 'https://confirm.udacity.com/SEAJNLCZ',
    date: 'Issued Aug 2023',
    description: 'Built foundation knowledge on how web application are built. I was also able to develop 10 websites using HTML/CSS and VanillaJs.',
  },
  {
    id: 2,
    name: 'Javascript Programming Foundations',
    issuerer: 'Udacity',
    logo: '/img/udacity.png',
    link: 'https://confirm.udacity.com/D9NNCG36SEAJNLCZ',
    date: 'Issued Aug 2023',
    description: 'Spent 1000+ hours understanding data structures and algorithms in javascript. Built client applications using frameworks i.e React, Nodejs, and Gatsby',
  },
  {
    id: 3,
    name: 'Microverse React & Redux module',
    issuerer: 'Microverse',
    logo: '/img/microverse-logo.png',
    link: 'https://www.credential.net/8b6823db-32f2-421d-95e5-748708d35c85',
    date: 'Issued Nov 2023',
    description: 'Developed 10+ client applications using the framework.I have proven understanding of the component-based architecture for effective UI development.I gained proficiency in Redux for centralized state managment in applications',
  },
  {
    id: 4,
    name: 'Microverse Ruby/Databases',
    issuerer: 'Microverse',
    logo: '/img/microverse-logo.png',
    link: 'https://www.credential.net/e98d43b5-70ba-4858-8fbc-2d0472587b4d',
    date: 'Issued Jan 2024',
    description: 'Spent 700+ hours with teams understanding algorithms and structures. Created databases and handled data using ruby programming',
  },
  {
    id: 5,
    name: 'Blockchain Basics',
    issuerer: 'University at Buffalo and the State University of New York | Cousera',
    logo: '/img/coursera-logo.png',
    link: 'https://www.coursera.org/account/accomplishments/records/EZ79U4YGEUPV',
    date: 'Issued Jan 2024',
    description: 'The program explored Bitcoin and Ethereum protocols, empowering application development. I can create nodes, manage accounts, mine, transact, transfer Ethers, and check balances. Understanding decentralized networks, distributed ledgers, and blockchain trust models, I grasp fundamental components (transaction, block, header, and chain), operations (verification, validation, and consensus models), underlying algorithms, and trust concepts like hard and soft forks.',
  },
  {
    id: 6,
    name: 'Ruby on rails',
    issuerer: 'Microverse',
    logo: '/img/microverse-logo.png',
    link: 'https://www.credential.net/b95f80f9-cd39-45b6-b906-56d0af6c5663',
    date: 'Issued Mar 2024',
    description: 'I demonstrating mastery of Ruby on Rails by building multiple real-world Rails applications alongside software developers from all over the world.',
  },
  {
    id: 7,
    name: 'Microverse Software Development',
    issuerer: 'Microverse',
    logo: '/img/microverse-logo.png',
    link: 'https://www.credential.net/0d6be080-7275-404a-acfd-ba40b20f7bf7',
    date: 'Issued Mar 2024',
    description: 'Earned after working through 1500+ hours of remote pair programming, learning to code with teams from around the world.',
  },
];

function renderCertificates() {
  const certificateSection = document.getElementById('certificates');
  certificates.forEach((certificate) => {
    const certCard = document.createElement('div');
    certCard.classList.add('cert-card');

    const certContent = `
        <div class="issueLogo">
          <img src="${certificate.logo}" alt="company logo">
        </div>
        <a href="${certificate.link}>
        <div class="certlist">
          <h2>${certificate.name}</h2>
          <h6>${certificate.issuerer}</h6>
          <span>${certificate.date}</span>
          <p>${certificate.description}</p>
        </div>
        </a>
      `;
    certCard.innerHTML = certContent;
    certificateSection.insertBefore(certCard, certificateSection.firstChild);
  });
}

renderCertificates();