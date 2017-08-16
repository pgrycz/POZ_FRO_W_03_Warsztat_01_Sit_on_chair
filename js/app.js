document.addEventListener('DOMContentLoaded', function() {

  let menu = document.getElementsByClassName('header__nav'),
      menuLink = menu[0].getElementsByTagName('li'),
      subMenu = document.getElementsByClassName('header__submenu');

  menuLink[0].addEventListener('click', function() {
    if (subMenu[0].style.display === 'none') {
      subMenu[0].style.display = 'block';
    } else {
      subMenu[0].style.display = 'none';
    }
  });

});
