$(function() {

  // on hover menu header
  function showSubMenu() {
    $(this).children().fadeIn(300);
  }
  function hideSubMenu() {
    $(this).fadeOut(300);
  }
 
  $('.header__nav').children().on('mouseenter', showSubMenu);
  $('.header__bridge').on('mouseleave', hideSubMenu);

  // slider on click
  let slideCount = $('.slider__imgwrap ul li').length;
  let slideWidth = $('.slider__imgwrap ul li').width();
  let slideHeight = $('.slider__imgwrap ul li').height();
  let slideUlWidth = slideCount * slideWidth;

  $('slider__imgwrap').css({width: slideWidth, height: slideHeight});
  $('.slider__imgwrap ul').css({width: slideUlWidth, marginLeft: - slideWidth});
  $('.slider__imgwrap ul li:last-child').prependTo('.slider__imgwrap ul');

  function prevSlide() {
    $('.slider__imgwrap ul').animate({
      left: slideWidth
    }, 600, function () {
      $('.slider__imgwrap ul li:last-child').prependTo('.slider__imgwrap ul');
      $('.slider__imgwrap ul').css({left: ''});
    });
  }
  function nextSlide() {
    $('.slider__imgwrap ul').animate({
      right: slideWidth
    }, 600, function () {
      $('.slider__imgwrap ul li:first-child').appendTo('.slider__imgwrap ul');
      $('.slider__imgwrap ul').css({right: ''});
    });
  }

  $('.slider__prev').on('click', prevSlide);
  $('.slider__next').on('click', nextSlide);

  // description fade elements on hover
  function fadeOut() {
    $(this).children().eq(1).delay(100).fadeOut(200);
    $(this).children().eq(2).delay(100).fadeOut(200);
  }
  function fadeIn() {
    $(this).children().eq(1).delay(100).fadeIn(200);
    $(this).children().eq(2).delay(100).fadeIn(200);
  }

  $('.description__img').on('mouseenter', fadeOut);
  $('.description__img').on('mouseleave', fadeIn);

  // order calculate item price
  let rows = $('.order__calculate').children().children().children();
  let value = 0;
  let sum = 0;

  function typeChange() {
    $('#chairType').each(function() {
      value = Number($('#chairType option:selected').attr('data-price'));
      if (Number($('#chairType option:selected').attr('data-price')) === 200) {
        $('.order__img img:nth-of-type(1)').css({display: 'block'});
        $('.order__img img:nth-of-type(2)').css({display: 'none'});
        $('.order__img img:nth-of-type(3)').css({display: 'none'});
      } else if (Number($('#chairType option:selected').attr('data-price')) === 300) {
        $('.order__img img:nth-of-type(1)').css({display: 'none'});
        $('.order__img img:nth-of-type(2)').css({display: 'block'});
        $('.order__img img:nth-of-type(3)').css({display: 'none'});
      } else if (Number($('#chairType option:selected').attr('data-price')) === 250) {
        $('.order__img img:nth-of-type(1)').css({display: 'none'});
        $('.order__img img:nth-of-type(2)').css({display: 'none'});
        $('.order__img img:nth-of-type(3)').css({display: 'block'});
      } else {
        $('.order__img img').css({display: 'none'});
      }
      rows.children().eq(1).text(value);
      price();
    });
  }
  function colorChange() {
    $('#chairColor').each(function() {
      value = Number($('#chairColor option:selected').attr('data-price'));
      rows.children().eq(3).text(value);
      price();
    });
  }
  function materialChange() {
    $('#chairMaterial').each(function() {
      value = Number($('#chairMaterial option:selected').attr('data-price'));
      rows.children().eq(5).text(value);
      price();
    });
  }
  function transportPick() {
    value = 100;
    if ($('#transport').is(':checked')) {
      rows.children().eq(7).text(value);
      sum += value;
    } else {
      rows.children().eq(7).text(0);
      sum -= value;
    }
    price();
  }
  function price() {
    sum =  Number(rows.children().eq(1).text()) 
         + Number(rows.children().eq(3).text()) 
         + Number(rows.children().eq(5).text())
         + Number(rows.children().eq(7).text());
    rows.children().eq(9).text(sum);
  }

  $('#chairType').on('change', typeChange);
  $('#chairColor').on('change', colorChange);
  $('#chairMaterial').on('change', materialChange);
  $('#transport').on('click', transportPick);

});