
$( document ).ready(function() {
  // Only enable if the document has a long scroll bar
	// Note the window height + offset
	if ( ($(window).height() ) < $(document).height() ) {
	    $('#top-link-block').removeClass('hidden').affix({
	        // how far to scroll down before link "slides" into view
	        offset: {top:100}
	    });
	}
});

$('body').scrollspy({ target: '#navbar-example' })

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})

$('.collapse').collapse()