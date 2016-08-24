$(document).ready(function() {
	$('.masthead').visibility({
		once: false,
		onBottomPassed: function() {
			$('.fixed.menu').transition('fade in');
		},
		onBottomPassedReverse: function() {
			$('.fixed.menu').transition('fade out');
		}
	});
	
	$('.ui.sidebar').sidebar('attach events', '.toc.item');

	$('.scrolly').click(function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 1300);
	});

	$('.sidebar > .scrolly').click(function(e) {
		e.preventDefault();
		$('.ui.sidebar').sidebar('toggle');
	});

	$('.message').hide();

	$('.message .close').on('click', function() {
		$(this).closest('.message').transition('fade');
	});
});
