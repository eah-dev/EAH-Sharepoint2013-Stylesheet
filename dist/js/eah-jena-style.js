
// click on the main menu
jQuery('#showGlobalSideMainMenu').on('click', function (event) {
  $('#gloabl-side-menu-wrapper').css({ 'display': 'block' });
  $('#gloabl-side-menu-wrapper').css({ 'right': '0' });
  //$('#s4-workspace').css({ 'left': '-320px' });
  $('.eah-menu-overlay').css({ 'opacity': '1' });
  $('.eah-menu-overlay').css({ 'visibility': 'visible' });
  $('.eah-menu-overlay').css({ 'left': '-320px' });
  $('.eah-menu-overlay').css({ 'height': '100%' });
});
// close menu
jQuery('#closeGlobalSideMainMenu').on('click', function (event) {
  $('#gloabl-side-menu-wrapper').css({ 'display': 'none' });
  $('#gloabl-side-menu-wrapper').css({ 'right': '-320px' });
  $('.eah-menu-overlay').css({ 'opacity': '0' });
  $('.eah-menu-overlay').css({ 'visibility': 'hidden' });
  $('.eah-menu-overlay').css({ 'left': '0' });
  $('.eah-menu-overlay').css({ 'height': '0' });
});
// click on the overlay
jQuery('.eah-menu-overlay').on('click', function (event) {
  $('#gloabl-side-menu-wrapper').css({ 'display': 'none' });
  $('#gloabl-side-menu-wrapper').css({ 'right': '-320px' });
  $('.eah-menu-overlay').css({ 'opacity': '0' });
  $('.eah-menu-overlay').css({ 'visibility': 'hidden' });
  $('.eah-menu-overlay').css({ 'left': '0' });
  $('.eah-menu-overlay').css({ 'height': '0' });
});

// kachel
jQuery(document).on('click', '.eahTile', function (e) {
  var $this = jQuery(this);
  if (!$this.find('.eahTile-triangel').hasClass('hidden')) {
    $this.find('.eahTile-triangel').addClass('hidden');
    $this.find('.eahTile-list').removeClass('hidden');
  } else {
    $this.find('.eahTile-list').addClass('hidden');
    $this.find('.eahTile-triangel').removeClass('hidden');
  }
});

// collapse element
jQuery(document).on('click', '.panel-heading', function (e) {
  var $this = jQuery(this);
  if (!$this.hasClass('panel-collapsed')) {
    $this.parents('.panel').find('.panel-body').slideUp();
    $this.addClass('panel-collapsed');
    $this.find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
  } else {
    $this.parents('.panel').find('.panel-body').slideDown();
    $this.removeClass('panel-collapsed');
    $this.find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
  }
});

jQuery(document).on('click', '#showhideSearchbar', function (e) {
  var $this = jQuery('#eahSearchbarWrapper');
  if (!$this.hasClass('collapsed')) {
    $this.slideUp();
    $this.addClass('collapsed');
  } else {
    $this.slideDown();
    $this.removeClass('collapsed');
  }
});

// slide Out Navi
/* no conflict */
jQuery(document).ready(function ($) {

  //stick in the fixed 100% height behind the navbar but don't wrap it
  $('#slide-nav.navbar-inverse').after($('<div class="inverse" id="navbar-height-col"></div>'));

  $('#slide-nav.navbar-default').after($('<div id="navbar-height-col"></div>'));

  // Enter your ids or classes
  var toggler = '.navbar-toggle';
  var pagewrapper = '#page-content';
  var navigationwrapper = '.navbar-header';
  var menuwidth = '100%'; // the menu inside the slide menu itself
  var slidewidth = '80%';
  var menuneg = '-100%';
  var slideneg = '-80%';


  $("#slide-nav").on("click", toggler, function (e) {

    var selected = $(this).hasClass('slide-active');

    $('#slidemenu').stop().animate({
      left: selected ? menuneg : '0'
    });

    $('#navbar-height-col').stop().animate({
      left: selected ? slideneg : '0'
    });

    $(pagewrapper).stop().animate({
      left: selected ? '0' : slidewidth
    });

    $(navigationwrapper).stop().animate({
      left: selected ? '0' : slidewidth
    });

    $(this).toggleClass('slide-active', !selected);
    $('#slidemenu').toggleClass('slide-active');
    $('#page-content, .navbar, body, .navbar-header').toggleClass('slide-active');
  });
  var selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';
  $(window).on("resize", function () {
    if ($(window).width() > 767 && $('.navbar-toggle').is(':hidden')) {
      $(selected).removeClass('slide-active');
    }
  });
});
