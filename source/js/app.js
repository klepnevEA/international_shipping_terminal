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


	/*выбок документа*/

	$('.document-list__item').on('click', function() {
		var that = $(this),
			thatPopup = that.text();

			$('#document').val(thatPopup);
			$('#document').closest('.input__wrap').addClass('active');	
	})

	/*новый календарь*/

		$('#datepicker').datepicker({
		  	changeMonth: false,
		    changeYear: false,
		    firstDay: 1,
		    minDate: 0,

		    onSelect: function (date, dp) {
		        updateDatePickerCells();
		    },
		    onChangeMonthYear: function(month, year, dp) {
		        updateDatePickerCells();
		    },
		    beforeShow: function(elem, dp) { 
		        updateDatePickerCells();
		    }
		});
		updateDatePickerCells();
		function updateDatePickerCells(dp) {

		    setTimeout(function () {

		        var cellContents = {1: '20', 15: '60', 28: '$99.99'};


		        $('.ui-datepicker td > *').each(function (idx, elem) {
		            var value = cellContents[idx + 1] || 0;


		            //var className = 'datepicker-content-' + CryptoJS.MD5(value).toString();

		            // if(value == 0)
		            //     addCSSRule('.ui-datepicker td a.' + className + ':after {content: "\\a0";}'); //&nbsp;
		            // else
		            //     addCSSRule('.ui-datepicker td a.' + className + ':after {content: "' + value + '";}');

		            // $(this).addClass(className);
		        });
		    }, 0);
		}
		var dynamicCSSRules = [];
		function addCSSRule(rule) {
		    if ($.inArray(rule, dynamicCSSRules) == -1) {
		        $('head').append('<style>' + rule + '</style>');
		        dynamicCSSRules.push(rule);
		    }
		}

	/*маски для инпутов*/ 
	/*http://digitalbush.com/projects/masked-input-plugin/*/
	$("#phone_number").mask("+7 (999) 999-9999");
	$("#series_number").mask("99 99 999999");
	$("#birthday").mask("99/99/9999",{placeholder:"дд/мм/гггг"});

});




