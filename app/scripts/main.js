/* jshint smarttabs:true, undef:true */
/* global $, aload */

// Process del envio.
function enviado() {
	'use strict';
	$('#contact_form').hide();
	$('#success_message').show();
}
// Contacto.
function contacto() {
	'use strict';
	// Data.
	var urlDestination = 'sendmail.php',
	name = $('#name').val().trim().replace('Nombre', ''),
	email = $('#email').val().trim().replace('E-Mail', ''),
	motive = $('#motive').val().trim().replace('Motivo', ''),
	message = $('#message').val().trim();
	// ragexs
	var regexpChars = /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\- ]+$/;
	var regexpMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	// validate inputs
	if ((email === '') || (!regexpMail.test(email))) {
		$('#email').addClass('error');
		$('#email').val('Email inválido');
		return false;
	} else if ((name === '') || (!regexpChars.test(name))) {
		$('#name').addClass('error');
		$('#name').val('Nombre inválido');
		return false;
	} else if (message === '') {
		$('#message').addClass('error');
		return false;
	} else {
		// Envio del AJAX
		$.ajax({
			type: 'POST',
			url: urlDestination,
			data: {
				'form': 'contacto',
				'nombre': name,
				'mail': email,
				'motivo': motive,
				'consulta': message
			},
			success: function(data) {
				enviado();
				console.log('Envio de datos OK!' + data);
			}
		});
		return false;
	}
}

$(document).ready(function() {
	'use strict';
	// init aload
	aload();

	$('.lines-button').click(function(event) {
		event.preventDefault();
		$(this).toggleClass('close');
		$('nav').toggle();
	});

	$('.main-slider').slick({
		autoplay: true,
		arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		responsive: true
	});

	// contacto.
	$('#email').on('focus', function(event) {
		event.preventDefault();
		if ($(this).hasClass('error')) {
			$(this).removeClass('error');
			$(this).val('');
		}
	});
	$('#name').on('focus', function(event) {
		event.preventDefault();
		if ($(this).hasClass('error')) {
			$(this).removeClass('error');
			$(this).val('');
		}
	});
	$('#message').on('focus', function(event) {
		event.preventDefault();
		if ($(this).hasClass('error')) {
			$(this).removeClass('error');
			$(this).val('');
		}
	});
	$('#submitContact').click(function(event) {
		event.preventDefault();
		contacto();
	});

});
