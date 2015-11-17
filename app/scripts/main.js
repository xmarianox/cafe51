/* jshint smarttabs:true, undef:true */
/* global $, aload */
$(document).ready(function() {
	'use strict';
	// init aload
	aload();

	$('.lines-button').click(function(event) {
		event.preventDefault();
		$(this).toggleClass('close');
		$('nav').toggle();
	});


});
