const articles = [
  {
    id: 0,
    name: 'John',
  },
  {
    id: 1,
    name: 'John',
  },
  {
    id: 2,
    name: 'John',
  },
  {
    id: 3,
    name: 'John',
  },
  {
    id: 4,
    name: 'John',
  },
  {
    id: 5,
    name: 'John',
  },
];

function articleCards(article) {
  console.log(article);
  const articleSection = document.getElementById('article-section');
  const card = document.createElement('div');
  card.classList.add('article-card');

  const cardContent = `
  <div class="card-works">
  <h2 class="card-title">Projects</h2>
  <p class="card-description">A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.</p>
  <ul class="card-techskills">
    <li class="card-skillset">HTML</li>
    <li class="card-skillset">Bootstrap</li>
    <li class="card-skillset">Ruby</li>
  </ul>
  `;
  card.appendChild(cardContent);
  articleSection.appendChild(card);
}

articles.forEach((article) => {
  articleCards(article);
});