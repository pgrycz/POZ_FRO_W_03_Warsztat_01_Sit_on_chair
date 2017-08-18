document.addEventListener('DOMContentLoaded', function() {

  let menu = document.getElementsByClassName('header__nav'),
      menuLink = menu[0].getElementsByTagName('li'),
      subMenu = document.getElementsByClassName('header__submenu');

  function showSubMenu() {
    if (subMenu[0].style.display === 'none') {
      subMenu[0].style.display = 'block';
    }
  };

  function hideSubMenu() {
      subMenu[0].style.display = 'none';
  };

  menuLink[0].addEventListener('click', showSubMenu);
  menuLink[0].addEventListener('mouseleave', hideSubMenu);

});
