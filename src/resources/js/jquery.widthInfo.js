/**
 * Created by jan.rembold on 07.07.15.
 */

(function ($) {
	'use strict';

	var getWidth = function () {
		return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	};

	$(document).ready(function () {

		var $info = $('<div/>').css({
			'background-color': '#003f74',
			'box-shadow': '2px 2px 6px rgba(0, 0, 0, 0.3)',
			'color': '#fff',
			'font-size': '11px',
			'font-weight': 'bold',
			'margin-right': '-20px',
			'margin-top': '22px',
			'padding': '2px',
			'text-align': 'center',
			'transform': 'rotate(-40deg)',
			'width': '120px'
		}).text(getWidth() + ' px');

		$('<div/>').css({
			'height': '90px',
			'line-height': '100%',
			'opacity': '0.75',
			'overflow': 'hidden',
			'pointer-events': 'none',
			'position': 'fixed',
			'right': '-18px',
			'bottom': '-35px',
			'z-index': '9999'
		}).html($info).prependTo('body');

		$(window).on('resize', function () {
			$info.text(getWidth() + ' px');
		});

	});

})(jQuery);
