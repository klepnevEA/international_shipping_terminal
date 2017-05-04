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
		$(this).parent().addClass('index');

	})

	$('.input__elem').on('blur', function() {
		if($(this).val() == '') {
			$(this).parent().removeClass('active');
		}
		$(this).parent().children('.input__hint').removeClass('active');
		$(this).parent().removeClass('index');
	});

	$('.table-condensed thead').append('<div class="table-condensed_back"></div>');



	/*рабочее меню*/ 
	
	var menuAct;
	$('.menu-nav').mouseover( function(){
		$('.menu-nav').addClass('active');
	});

	$('.menu-nav').mouseleave( function(){
		$('.menu-nav').removeClass('active');
	});

	/*сладжер*/
	$(".slider__wrap").slick({
	    dots: false,
	    arrows: true
	});

	/*с пересадкой / без пересадки*/

	$('#checkbox').on('click', function () {
		$('.slider__block_transfer').toggleClass('active');
	});


	/*счетчик*/

	$('.counter__box button').on('click', function() {
		var that = $(this),
			count = that.data('counter'),
			input = that.parent().find('.counter__input'),
			input_val = input.val();

		if(count == 'plus') {

			input_val = input_val*1 + 1;
		} else if(count == 'min') {
			input_val = input_val*1 - 1;
			if(input_val <= 0) {
				input_val = 0;
			}
		}
		input.val(input_val);

	})

});



