
// click on the main menu
$('#showGlobalSideMainMenu').on('click', function(event) {
  $('#gloabl-side-menu-wrapper').css({ 'display': 'block' });
  $('#gloabl-side-menu-wrapper').css({ 'right': '0' });
  //$('#s4-workspace').css({ 'left': '-320px' });
  $('.eah-menu-overlay').css({ 'opacity': '1' });
  $('.eah-menu-overlay').css({ 'visibility': 'visible' });
  $('.eah-menu-overlay').css({ 'left': '-320px' });
  $('.eah-menu-overlay').css({ 'height': '100%' });
});
// close menu
$('#closeGlobalSideMainMenu').on('click', function(event) {
  $('#gloabl-side-menu-wrapper').css({ 'display': 'none' });
  $('#gloabl-side-menu-wrapper').css({ 'right': '-320px' });
  $('.eah-menu-overlay').css({ 'opacity': '0' });
  $('.eah-menu-overlay').css({ 'visibility': 'hidden' });
  $('.eah-menu-overlay').css({ 'left': '0' });
  $('.eah-menu-overlay').css({ 'height': '0' });
});
// click on the overlay
$('.eah-menu-overlay').on('click', function(event) {
  $('#gloabl-side-menu-wrapper').css({ 'display': 'none' });
  $('#gloabl-side-menu-wrapper').css({ 'right': '-320px' });
  $('.eah-menu-overlay').css({ 'opacity': '0' });
  $('.eah-menu-overlay').css({ 'visibility': 'hidden' });
  $('.eah-menu-overlay').css({ 'left': '0' });
  $('.eah-menu-overlay').css({ 'height': '0' });
});

// kachel
$(document).on('click', '.eahTile', function(e){
  var $this = $(this);
	if(!$this.find('.eahTile-triangel').hasClass('hidden')) {
    $this.find('.eahTile-triangel').addClass('hidden');
    $this.find('.eahTile-list').removeClass('hidden');
	} else {
    $this.find('.eahTile-list').addClass('hidden');
    $this.find('.eahTile-triangel').removeClass('hidden');
	}
});

// collapse element
$(document).on('click', '.panel-heading', function(e){
  var $this = $(this);
	if(!$this.hasClass('panel-collapsed')) {
		$this.parents('.panel').find('.panel-body').slideUp();
		$this.addClass('panel-collapsed');
		$this.find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
	} else {
		$this.parents('.panel').find('.panel-body').slideDown();
		$this.removeClass('panel-collapsed');
		$this.find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
	}
});

$(document).on('click', '#showhideSearchbar', function(e){
  var $this = $('#eahSearchbarWrapper');
	if(!$this.hasClass('collapsed')) {
		$this.slideUp();
		$this.addClass('collapsed');
	} else {
		$this.slideDown();
		$this.removeClass('collapsed');
	}
});
