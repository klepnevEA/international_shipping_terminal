'use strict';

$(document).ready(function() {

	$('#datepicker').datepicker({
    	orientation: "auto center",
    	language: "ru",

    	maxViewMode: 0
	});

	/*удаляем из календатря старые стрелки*/
	$('.table-condensed .prev').html('');
	$('.table-condensed .next').html('');

	/*манипуляции с инпутом*/
	$('.input__elem').on('focus', function() {
		$(this).parent().addClass('active');
	});

	$('.input__elem').on('input', function() {
		$(this).parent().children('.input__hint').addClass('active');
	})

	$('.input__elem').on('blur', function() {
		if($(this).val() == '') {
			$(this).parent().removeClass('active');
		}
		$(this).parent().children('.input__hint').removeClass('active');

	});

	$('.table-condensed thead').append('<div class="table-condensed_back"></div>');
});



