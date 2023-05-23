const popup = document.getElementById('navMenu');
const navMenu = document.getElementById('navMenu');

function openMenu() {
  popup.classList.add('dropdown-menuShow');
  navMenu.classList.add('navMenu');
}
openMenu();
function closeMenu() {
  popup.classList.remove('dropdown-menuShow');
  navMenu.classList.remove('navMenu');
}
closeMenu();