   jQuery.keyboard.language.ru={language:"Русский (Russian)",display:{a:"✔:Сохранить2 (Shift+Enter)",accept:"Далее:Далее",alt:"РУС:Русская клавиатура",b:"←:Удалить символ слева",bksp:"⇦:Удалить символ слева",c:"✖:Отменить (Esc)",cancel:"Отменить:Отменить (Esc)",clear:"C:Очистить",combo:"ö:Toggle Combo Keys",dec:",:Decimal",e:"↵:Ввод",enter:"Ввод:Перевод строки",lock:"⇪ Lock:Caps Lock",s:"⇧:Верхний регистр",shift:"⇧:Верхний регистр",sign:"±:Сменить знак",space:"Пробел:",t:"⇥:Tab",tab:"⇥ Tab:Tab"},wheelMessage:"Use mousewheel to see other keys"};
    jQuery.keyboard.layouts["ms-Russian"]={name:"ms-Russian",lang:["ru"],normal:["ё 1 2 3 4 5 6 7 8 9 0 - = {bksp}","{tab} й ц у к е н г ш щ з х ъ"," ф ы в а п р о л д ж э {enter}","{shift} \\ я ч с м и т ь б ю / {shift}","{accept} {space} {cancel}"],shift:['Ё ! " № ; % : ? * ( ) _ + {bksp}',"{tab} Й Ц У К Е Н Г Ш Щ З Х Ъ","Ф Ы В А П Р О Л Д Ж Э {enter}","{shift} / Я Ч С М И Т Ь Б Ю / {shift}","{accept} {space} {cancel}"]},jQuery.keyboard.layouts["ms-Russian (Typewriter)"]={name:"ms-Russian (Typewriter)",lang:["ru"],normal:['| № - / " : , . _ ? % ! ; {bksp}',"{tab} й ц у к е н г ш щ з х ъ )","ф ы в а п р о л д ж э {enter}","{shift} ) я ч с м и т ь б ю / {shift}","{accept} {space} {cancel}"],shift:["+ 1 2 3 4 5 6 7 8 9 0 = \\ {bksp}","{tab} Й Ц У К Е Н Г Ш Щ З Х Ъ (","Ф Ы В А П Р О Л Д Ж Э {enter}","{shift} ( Я Ч С М И Т Ь Б Ю / {shift}","{accept} {space} {cancel}"]};
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