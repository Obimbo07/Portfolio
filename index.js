const hambergerbtn = document.querySelector('.hamberger-btn');
const dropdown = document.querySelector('.drop-down');
hambergerbtn.addEventListener('click', () => {
  dropdown.style.display = (dropdown.style.display === 'none') ? 'block' : 'none';
});