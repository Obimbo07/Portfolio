const popup = document.getElementById('navMenu');
const navMenu = document.getElementById('navMenu');
const menudissapear = document.getElementById("nav-btn");

function openMenu() {
  popup.classList.add('dropdown-menuShow');
  navMenu.classList.add('navMenu');
  menudissapear.classList.add('navMenu')
}
openMenu();
function closeMenu() {
  popup.classList.remove('dropdown-menuShow');
  navMenu.classList.remove('navMenu');
  menudissapear.classList.remove('navMenu')
}
closeMenu(); 

// function menudissapear() {
//   menudissapear.classList.add('menu-dissapear')
// }