document.addEventListener('DOMContentLoaded', function() {

  let menu = document.getElementsByTagName('nav'),
      menuLinks = menu[0].children,
      triangle = document.createElement('div'),
      subMenu = document.createElement('div'),
      subLink1 = document.createElement('a'),
      subLink2 = document.createElement('a'),
      subLink3 = document.createElement('a');
  subMenu.classList.add('submenu');
  triangle.classList.add('triangle');
  subMenu.style.display = 'none';
  subLink1.innerText = 'Aktualności';
  subLink2.innerText = 'Nasz team';
  subLink3.innerText = 'Historia';
  subLink1.setAttribute('href', '#');
  subLink2.setAttribute('href', '#');
  subLink3.setAttribute('href', '#');
  subMenu.appendChild(triangle);
  subMenu.appendChild(subLink1);
  subMenu.appendChild(subLink2);
  subMenu.appendChild(subLink3);
  menuLinks[0].appendChild(subMenu);


  function showSubMenu() {
    subMenu.style.display = 'block';
  };

  function hideSubMenu() {
    subMenu.style.display = 'block';
    setTimeout(function() {
      subMenu.style.display = 'none';
    }, 500);
  };

  menuLinks[0].addEventListener('mouseover', showSubMenu);
  menuLinks[0].addEventListener('mouseout', hideSubMenu);

});
