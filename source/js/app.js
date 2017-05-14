'use strict';

$(document).ready(function() {

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
	$(".my-cards__slider").slick({
	    dots: false,
	    arrows: true,
	    vertical: true,
	    slidesToShow: 2,
	    slidesToScroll: 2,
	    verticalSwiping: true

	   
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

	/*автобусные места*/

	$('.bus__plase').on('click', function() {
		var that = $(this);
		if(that.hasClass('bus__plase_free')) {
			that.addClass('bus__plase_chosen');
			that.removeClass('bus__plase_free');
		} else if(that.hasClass('bus__plase_chosen')){
			that.removeClass('bus__plase_chosen');
			that.addClass('bus__plase_free');			
		}

	});


	/*выбор пола*/

	$('.input__btn-block__sex').on('click', function() {
		var that = $(this),
			thatVal = that.data('sex'),
			thatParent = that.closest('.input__wrap'),
			thatInput = thatParent.find('.input__elem');
			thatInput.val(thatVal);
			thatParent.addClass('active');

			$('.input__btn-block__sex').removeClass('active');
			that.addClass('active');
	});


	/*ticet-search*/

	$('.search-filter__elem').on('click', function() {
		$(this).parent().toggleClass('active');
	});

	// $('.search-filter__link').on('click', function() {
	// 	$(this).toggleClass('active');
	// });


	// Табы Пасажиров
	$(document).ready(function(){ 
	  $("#passTab a").click(function(e){
	    e.preventDefault();
	    $(this).tab('show'); 
	  });
	});

	/*открытие/закрытие попапа*/

	$('.popup_open').on('click', function() {
		var that = $(this),
			thatPopup = that.data('popup');

			$('#'+thatPopup).addClass('active');
	});

	$('.popup_close').on('click', function(e) {
		e.stopPropagation();
		$('.popup').removeClass('active');
	});

	$('.popup__wrap').on('click', function(e) {
		e.stopPropagation();
	});

	$('.popup__title').on('click', function(e) {
		e.stopPropagation();
	});


	/*выбор документа*/

	$('.document-list__item').on('click', function() {
		var that = $(this),
			thatPopup = that.text();

			$('#document').val(thatPopup);
			$('#document').closest('.input__wrap').addClass('active');	
	});

	/*переключатель пассажиров*/

	$('.passenger-block__elem').on('click', function() {
		$('.passenger-block__elem').removeClass('active');
		$(this).addClass('active');
	});

	/*маски для инпутов*/ 
	/*http://digitalbush.com/projects/masked-input-plugin/*/
	$("#phone_number").mask("+7 999 999 99 99");
	$("#series_number").mask("99 99 999999");
	$("#birthday").mask("99/99/9999",{placeholder:"дд.мм.гггг"});

	$("#phone_number_2").mask("+7 999 999 99 99");
	$("#series_number_2").mask("99 99 999999");
	$("#birthday_2").mask("99/99/9999",{placeholder:"дд.мм.гггг"});

	$("#phone_number_3").mask("+7 999 999 99 99");
	$("#series_number_3").mask("99 99 999999");
	$("#birthday_3").mask("99/99/9999",{placeholder:"дд.мм.гггг"});

	$("#phone_number_4").mask("+7 999 999 99 99");
	$("#series_number_4").mask("99 99 999999");
	$("#birthday_4").mask("99/99/9999",{placeholder:"дд.мм.гггг"});

	$("#phone_number_5").mask("+7 999 999 99 99");
	$("#series_number_5").mask("99 99 999999");
	$("#birthday_5").mask("99/99/9999",{placeholder:"дд.мм.гггг"});


	$("#phone_number_new").mask("(999) 999 99 99");


	/*свитчер на buy-28*/

	$('.city-intercity__btn').on('click' , function() {
		$('.city-intercity__btn').removeClass('active');
		$(this).addClass('active');
	})
});




