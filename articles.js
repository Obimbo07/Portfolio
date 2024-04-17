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
  const articleSection = document.getElementById('article-section');
  const card = document.createElement('div');
  card.classList.add('article-card');

  const cardContent = `
    <article>
    <h2>${article.name}</h2>
    <p>Article ID: ${article.id}</p>
    </article>
  `;
  card.innerHTML = cardContent;
  articleSection.appendChild(card);
}

articles.forEach((article) => {
  articleCards(article);
});
