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

	/*переключатель пассажиров*/

	$('.passenger-block__elem').on('click', function() {
		$('.passenger-block__elem').removeClass('active');
		$(this).addClass('active');
	})

	/*новый календарь*/

		$('#datepicker').datepicker({
		<!--   changeMonth: true, -->
		<!-- changeYear: true, -->
		firstDay: 1,
		minDate: 0,
		//The calendar is recreated OnSelect for inline calendar
		onSelect: function (date, dp) {
			updateDatePickerCells();
		},
		onChangeMonthYear: function(month, year, dp) {
			updateDatePickerCells();
		},
		beforeShow: function(elem, dp) { //This is for non-inline datepicker
			updateDatePickerCells();
		}
	});
	updateDatePickerCells();
	function updateDatePickerCells(dp) {
		setTimeout(function () {
			var cellContents = {10: '999 999', 13: '1 200', 15: '500', 17: '550', 19: '700', 28: '450'};

			$('.ui-datepicker td > *').each(function (idx, elem) {
				var value = cellContents[idx + 1] || 0;

				var className = 'datepicker-content-' + CryptoJS.MD5(value).toString();

				if(value == 0)
					addCSSRule('.ui-datepicker td a.' + className + ':after {content: "\\a0";}'); //&nbsp;
				else
					addCSSRule('.ui-datepicker td a.' + className + ':after {content: "' + value + '";}');

				$(this).addClass(className);
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
	$("#phone_number").mask("(999) 999 99 99");
	$("#series_number").mask("99 99 999999");
	$("#birthday").mask("99/99/9999",{placeholder:"дд/мм/гггг"});

	/*клавиатура*/
   jQuery.keyboard.language.ru={language:"Русский (Russian)",display:{a:"✔:Сохранить2 (Shift+Enter)",accept:"Далее:Далее",alt:"РУС:Русская клавиатура",b:"←:Удалить символ слева",bksp:"⇦:Удалить символ слева",c:"✖:Отменить (Esc)",cancel:"Отменить:Отменить (Esc)",clear:"C:Очистить",combo:"ö:Toggle Combo Keys",dec:",:Decimal",e:"↵:Ввод",enter:"Ввод:Перевод строки",lock:"⇪ Lock:Caps Lock",s:"⇧:Верхний регистр",shift:"⇧:Верхний регистр",sign:"±:Сменить знак",space:"Пробел:",t:"⇥:Tab",tab:"⇥ Tab:Tab"},wheelMessage:"Use mousewheel to see other keys"};
    jQuery.keyboard.layouts["ms-Russian"]={name:"ms-Russian",lang:["ru"],normal:["ё 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} й ц у к е н г ш щ з х ъ \\","ф ы в а п р о л д ж э {enter}","{shift} \\ я ч с м и т ь б ю / {shift}","{accept} {space} {cancel}"],shift:['Ё ! " № ; % : ? * ( ) _ + {bksp}',"{tab} Й Ц У К Е Н Г Ш Щ З Х Ъ /","Ф Ы В А П Р О Л Д Ж Э {enter}","{shift} / Я Ч С М И Т Ь Б Ю / {shift}","{accept} {space} {cancel}"]},jQuery.keyboard.layouts["ms-Russian (Typewriter)"]={name:"ms-Russian (Typewriter)",lang:["ru"],normal:['| № - / " : , . _ ? % ! ; {bksp}',"{tab} й ц у к е н г ш щ з х ъ )","ф ы в а п р о л д ж э {enter}","{shift} ) я ч с м и т ь б ю / {shift}","{accept} {space} {cancel}"],shift:["+ 1 2 3 4 5 6 7 8 9 0 = \\ {bksp}","{tab} Й Ц У К Е Н Г Ш Щ З Х Ъ (","Ф Ы В А П Р О Л Д Ж Э {enter}","{shift} ( Я Ч С М И Т Ь Б Ю / {shift}","{accept} {space} {cancel}"]};
    $.keyboard.language.love = $.extend($.keyboard.language.ru);
    $('#from_element')
            .keyboard({
//                layout   : 'qwerty',
                layout: 'ms-Russian',
                        change: function(event, keyboard, el) {
                            console.log('changes canceled, value restored to ' + el.value);
                            if(
                                    el.value == 'М'
                                    || el.value == 'м'
                                    || el.value == 'Мо'
                                    || el.value == 'мо'
                                    || el.value == 'Мос'
                                    || el.value == 'мос'
                                    || el.value == 'Моск'
                                    || el.value == 'моск'
                                    || el.value == 'Москв'
                                    || el.value == 'москв'
                                    || el.value == 'Москва'
                                    || el.value == 'москва'
                                    || el.value == 'МОСКВА'
                                    || el.value == 'москва'
                            ) {
                                $('#input__wrap').addClass('index');
                                $('#input__hint_Moscow').addClass('active');
                            }
                            //Владимир
                            if(
                                    el.value == 'В'
                                    || el.value == 'в'
                                    || el.value == 'Вл'
                                    || el.value == 'вл'
                                    || el.value == 'Вла'
                                    || el.value == 'вла'
                                    || el.value == 'Влад'
                                    || el.value == 'влад'
                                    || el.value == 'Влади'
                                    || el.value == 'влади'
                                    || el.value == 'Владим'
                                    || el.value == 'владим'
                                    || el.value == 'Владими'
                                    || el.value == 'владими'
                                    || el.value == 'Владимир'
                                    || el.value == 'владимир'
                            ) {
                                $('#input__wrap').addClass('index');
                                $('#input__hint_Vladimir').addClass('active');
                            }
                            //Ярославль
                            if(
                                    el.value == 'Я'
                                    || el.value == 'я'
                                    || el.value == 'Яр'
                                    || el.value == 'яр'
                                    || el.value == 'Яро'
                                    || el.value == 'яро'
                                    || el.value == 'Ярос'
                                    || el.value == 'ярос'
                                    || el.value == 'Яросл'
                                    || el.value == 'яросл'
                                    || el.value == 'Яросла'
                                    || el.value == 'яросла'
                                    || el.value == 'Ярослав'
                                    || el.value == 'ярослав'
                                    || el.value == 'Ярославл'
                                    || el.value == 'ярославл'
                                    || el.value == 'Ярославль'
                                    || el.value == 'ярославль'
                            ) {
                                $('#input__wrap').addClass('index');
                                $('#input__hint_Yaroslavl').addClass('active');
                            }
                            //Суздаль
                            if(
                                    el.value == 'С'
                                    || el.value == 'с'
                                    || el.value == 'Су'
                                    || el.value == 'су'
                                    || el.value == 'Суз'
                                    || el.value == 'суз'
                                    || el.value == 'Сузд'
                                    || el.value == 'сузд'
                                    || el.value == 'Сузда'
                                    || el.value == 'сузда'
                                    || el.value == 'Суздал'
                                    || el.value == 'суздал'
                                    || el.value == 'Суздаль'
                                    || el.value == 'суздаль'
                            ) {
                                $('#input__wrap').addClass('index');
                                $('#input__hint_Suzdal').addClass('active');
                            }
                        },
                usePreview: false,
                language: ['love'],
                        accepted: function(e, keyboard, el) {$('#to_element').focus()},
                        bksp: function(e, keyboard, el) {$('#to_element').focus()},
                        cancel: function(e, keyboard, el) {$('#to_element').focus()},
                position : {
//                    of : $('.hiddenInput2')
//                    my : 'center top',
//                    at : 'center top',
//                    usePreview: false
//                    of : $('.hiddenInput'),
//                    my: 'center top',
//                    at: 'center top',
//                    // used when "usePreview" is false
//                    at2: 'center bottom',
//                    usePreview: false
                },
                    reposition: true,
                        // true: preview added above keyboard;
                        // false: original input/textarea used
//                        usePreview: true,

                        // if true, the keyboard will always be visible
                        alwaysOpen: false,

                        // give the preview initial focus when the keyboard
                        // becomes visible
                        initialFocus: true,
                        // Avoid focusing the input the keyboard is attached to
                        noFocus: false,

                        // if true, keyboard will remain open even if
                        // the input loses focus.
                        stayOpen: false,

                        // Prevents the keyboard from closing when the user clicks or
                        // presses outside the keyboard. The `autoAccept` option must
                        // also be set to true when this option is true or changes are lost
                        userClosed: false,

                        // if true, keyboard will not close if you press escape.
                        ignoreEsc: false
            }
            )
            .addTyping({
                        // show typing while using physical keyboard
                        showTyping: true,
                        // prevent physical keyboard from working while
                        // simulating typing is active
                        lockTypeIn: false,
                        // time between characters being typed
                        delay: 250,
                        // key highlight time; when `delay` < `hoverDelay`, the lower
                        // of the two values is used
                        hoverDelay: 250
                    }

            );

    $('#to_element')
    .keyboard({
                          layout: 'ms-Russian',
                        usePreview: false,
                change: function(event, keyboard, el) {
                    console.log('changes canceled, value restored to ' + el.value);
                    if(
                            el.value == 'М'
                            || el.value == 'м'
                            || el.value == 'Мо'
                            || el.value == 'мо'
                            || el.value == 'Мос'
                            || el.value == 'мос'
                            || el.value == 'Моск'
                            || el.value == 'моск'
                            || el.value == 'Москв'
                            || el.value == 'москв'
                            || el.value == 'Москва'
                            || el.value == 'москва'
                            || el.value == 'МОСКВА'
                            || el.value == 'москва'
                    ) {
                        $('#input__wrap_to').addClass('index');
                        $('#input__hint_Moscow_to').addClass('active');
                    }
                    //Владимир
                    if(
                            el.value == 'В'
                            || el.value == 'в'
                            || el.value == 'Вл'
                            || el.value == 'вл'
                            || el.value == 'Вла'
                            || el.value == 'вла'
                            || el.value == 'Влад'
                            || el.value == 'влад'
                            || el.value == 'Влади'
                            || el.value == 'влади'
                            || el.value == 'Владим'
                            || el.value == 'владим'
                            || el.value == 'Владими'
                            || el.value == 'владими'
                            || el.value == 'Владимир'
                            || el.value == 'владимир'
                    ) {
                        $('#input__wrap_to').addClass('index');
                        $('#input__hint_Vladimir_to').addClass('active');
                    }
                    //Ярославль
                    if(
                            el.value == 'Я'
                            || el.value == 'я'
                            || el.value == 'Яр'
                            || el.value == 'яр'
                            || el.value == 'Яро'
                            || el.value == 'яро'
                            || el.value == 'Ярос'
                            || el.value == 'ярос'
                            || el.value == 'Яросл'
                            || el.value == 'яросл'
                            || el.value == 'Яросла'
                            || el.value == 'яросла'
                            || el.value == 'Ярослав'
                            || el.value == 'ярослав'
                            || el.value == 'Ярославл'
                            || el.value == 'ярославл'
                            || el.value == 'Ярославль'
                            || el.value == 'ярославль'
                    ) {
                        $('#input__wrap_to').addClass('index');
                        $('#input__hint_Yaroslavl_to').addClass('active');
                    }
                    //Суздаль
                    if(
                            el.value == 'С'
                            || el.value == 'с'
                            || el.value == 'Су'
                            || el.value == 'су'
                            || el.value == 'Суз'
                            || el.value == 'суз'
                            || el.value == 'Сузд'
                            || el.value == 'сузд'
                            || el.value == 'Сузда'
                            || el.value == 'сузда'
                            || el.value == 'Суздал'
                            || el.value == 'суздал'
                            || el.value == 'Суздаль'
                            || el.value == 'суздаль'
                    ) {
                        $('#input__wrap_to').addClass('index');
                        $('#input__hint_Suzdal_to').addClass('active');
                    }
                },
                position : {
//                    of : $('.hiddenInput2')
//                    my : 'center top',
//                    at : 'center top',
//                    usePreview: false
//                    of : $('.hiddenInput'),
//                    my: 'center top',
//                    at: 'center top',
//                    // used when "usePreview" is false
//                    at2: 'center bottom',
//                    usePreview: false
                },
                        reposition: true,
                        // true: preview added above keyboard;
                        // false: original input/textarea used
//                        usePreview: true,

                        // if true, the keyboard will always be visible
                        alwaysOpen: false,

                        // give the preview initial focus when the keyboard
                        // becomes visible
                        initialFocus: true,
                        // Avoid focusing the input the keyboard is attached to
                        noFocus: false,

                        // if true, keyboard will remain open even if
                        // the input loses focus.
                        stayOpen: false,

                        // Prevents the keyboard from closing when the user clicks or
                        // presses outside the keyboard. The `autoAccept` option must
                        // also be set to true when this option is true or changes are lost
                        userClosed: false,

                        // if true, keyboard will not close if you press escape.
                        ignoreEsc: false
                    }
            )
            .addTyping({
                        // show typing while using physical keyboard
                        showTyping: true,
                        // prevent physical keyboard from working while
                        // simulating typing is active
                        lockTypeIn: false,
                        // time between characters being typed
                        delay: 250,
                        // key highlight time; when `delay` < `hoverDelay`, the lower
                        // of the two values is used
                        hoverDelay: 250
                    }

            );
});




