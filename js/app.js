// document.addEventListener('DOMContentLoaded', function() {

//   // on hover menu header
//   let menu = document.getElementsByClassName('header__nav');
//   let menuLinks = menu[0].children;
//   let menuBridge = document.getElementsByClassName('header__bridge');

//   function showSubMenu() {
//     this.children[0].nextElementSibling.style.display = 'block';
//   }
//   function hideSubMenu() {
//     this.style.display = 'none';
//   }

//   for (let i = 0; i < menuLinks.length; i ++) {
//     menuLinks[i].addEventListener('mouseover', showSubMenu);
//   }
//   for (let i = 0; i < menuBridge.length; i ++) {
//     menuBridge[i].addEventListener('mouseout', hideSubMenu);
//   }

// });

$(function() {

  // on hover menu header
  let menu = $(document).find('.header__nav');
  let menuLinks = menu.children();
  let menuBridge = $(document).find('.header__bridge');
  
  function showSubMenu() {
    $(this).children().fadeIn(300);
    $(this).children().css('display', 'block');
  }
  function hideSubMenu() {
    $(this).fadeOut(300);
    $(this).css('display', 'none');
  }
 
  menuLinks.on('mouseenter', showSubMenu);
  menuBridge.on('mouseleave', hideSubMenu);

  // description fade elements on hover
  let descriptionBox = $(document).find('.description__img');

  function fadeOut() {
    $(this).children().eq(1).fadeOut(200);
    $(this).children().eq(2).fadeOut(200);
  }
  function fadeIn() {
    $(this).children().eq(1).fadeIn(200);
    $(this).children().eq(2).fadeIn(200);
  }

  descriptionBox.on('mouseenter', fadeOut);
  descriptionBox.on('mouseleave', fadeIn);

});