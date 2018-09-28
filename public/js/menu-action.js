var isMenuOpening = false;

$(document).ready(function () {
  $('#menu-button').click(function () {
    $(this).toggleClass('update-ui');
    if (isMenuOpening) {
      closeMenu();
      isMenuOpening = false;
    } else {
      openMenu();
      isMenuOpening = true;
    }
    updateLayoutContent();
  });
});

$(window).on('resize', function () {
  updateLayoutMenu();
  updateLayoutContent();
});

function updateLayoutMenu() {
  if (isMenuOpening) {
    $('.sidebar').css({ 'margin-left': '0px' });
    $('#menu-button').css({ 'margin-left': $('.sidebar').outerWidth() + 'px' });
  } else {
    if (window.matchMedia('(min-width: 48em)').matches || window.matchMedia('(min-width: 64em)').matches) {
      $('.sidebar').css({ 'margin-left': '-' + $('.sidebar').outerWidth() + 'px' });
    } else {
      $('.sidebar').css({ 'margin-left': '0px' });
    }
  }
}

function updateLayoutContent() {
  if (isMenuOpening) {
    if (window.matchMedia('(min-width: 48em)').matches) {
      $('#content-id').css({
        'margin-left': '20rem',
        'margin-right': '2rem'
      });
      return;
    } else if (window.matchMedia('(min-width: 64em)').matches) {
      $('#content-id').css({
        'margin-left': '22rem',
        'margin-right': '4rem'
      });
      return;
    }
  }
  $('#content-id').css({
    'margin-left': 'auto',
    'margin-right': 'auto'
  })
}

function closeMenu() {
  $('.sidebar').animate({
    'marginLeft': "-=" + $('.sidebar').outerWidth() + "px"
  });
  $('#menu-button').animate({
    'marginLeft': "-=" + $('.sidebar').outerWidth() + "px"
  });
}

function openMenu() {
  $('.sidebar').animate({
    'marginLeft': "+=" + $('.sidebar').outerWidth() + "px"
  });
  $('#menu-button').animate({
    'marginLeft': "+=" + $('.sidebar').outerWidth() + "px"
  });
}
