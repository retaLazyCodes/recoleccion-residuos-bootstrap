(function ($) {

	"use strict";

	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
	});

	$('[data-toggle="offcanvas"]').on('click', function () {
		$('.offcanvas-collapse').toggleClass('open')
	})

	$('.navbar-nav>li>.nav-link').on('click', function () {
		$('.offcanvas-collapse').toggleClass('open')
	})

})(jQuery);
