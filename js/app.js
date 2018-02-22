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

$(function($) {

  // on hover menu header
  let menu = $(document).find('.header__nav');
  let menuLinks = menu.children();
  let menuBridge = $(document).find('.header__bridge');
  
  function showSubMenu() {
    $(this).children().fadeIn(300);
  }
  function hideSubMenu() {
    $(this).fadeOut(300);
  }
 
  menuLinks.on('mouseenter', showSubMenu);
  menuBridge.on('mouseleave', hideSubMenu);

  // slider on click
  let slideCount = $('.slider__imgwrap ul li').length;
  let slideWidth = $('.slider__imgwrap ul li img').width();
  let slideHeight = $('.slider__imgwrap ul li img').height();
  let slideUlWidth = slideCount * slideWidth;

  $('slider__imgwrap').css({width: slideWidth, height: slideHeight});
  $('.slider__imgwrap ul').css({width: slideUlWidth, marginLeft: - slideWidth});
  $('.slider__imgwrap ul li:last-child').prependTo('.slider__imgwrap ul');

  function prevSlide() {
    $('.slider__imgwrap ul').animate({
      'left': + slideWidth
    }, 600, function () {
      $('.slider__imgwrap ul li:last-child').prependTo('.slider__imgwrap ul');
      $('.slider__imgwrap ul').css('left', '');
    });
  }
  function nextSlide() {
    $('.slider__imgwrap ul').animate({
      'left': - slideWidth
    }, 600, function () {
      $('.slider__imgwrap ul li:first-child').appendTo('.slider__imgwrap ul');
      $('.slider__imgwrap ul').css('left', '');
    });
  }

  $('.slider__prev').on('click', prevSlide);
  $('.slider__next').on('click', nextSlide);

  // description fade elements on hover
  let descriptionBox = $(document).find('.description__img');

  function fadeOut() {
    $(this).children().eq(1).delay(100).fadeOut(200);
    $(this).children().eq(2).delay(100).fadeOut(200);
  }
  function fadeIn() {
    $(this).children().eq(1).delay(100).fadeIn(200);
    $(this).children().eq(2).delay(100).fadeIn(200);
  }

  descriptionBox.on('mouseenter', fadeOut);
  descriptionBox.on('mouseleave', fadeIn);

});