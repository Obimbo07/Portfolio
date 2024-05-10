const articles = [
  {
    id: 0,
    name: 'Impact of AI on Programmers: Navigating Standard Shifts',
    description: 'As a human being, one has been endowed with just enough intelligence to be able to see clearly',
    image: '/img/technology.jpg',
    link: 'https://medium.com/@obimboausts/impact-of-ai-on-programmers-navigating-standard-shifts-0e61830570cd',
  },
  {
    id: 1,
    name: 'Guiding the Next Generation: A Mentor’s Thoughts!!',
    description: 'Mentoring juniors and non-techies into the world of software development is a journey fraught with challenges and rewards.',
    image: '/img/gas.png',
    link: 'full_article.html',
  },
];

function renderArticles() {
  const articleSection = document.getElementById('article-section');

  articles.forEach((article) => {
    const card = document.createElement('article');
    card.classList.add('article-card');

    const articleContent = `
      <div class="article-image">
        <img src="${article.image}" class="img-fluid" alt="Article Image">
      </div>
      <div class="article-content">
        <h3>${article.name}</h3>
        <p>${article.description}</p>
        <a href="${article.link}" class="read-more">Read More</a>
      </div>
    `;

    card.innerHTML = articleContent;
    articleSection.insertBefore(card, articleSection.firstChild);
  });
}

renderArticles();