'use strict';

$(document).ready(function() {
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
			var cellContents = {10: '999 999', 13: '1 200', 15: '500',16: '600', 17: '550', 19: '700', 28: '450 000', 33: '450 000'};

			$('.ui-datepicker td').each(function (idx, elem) {

				var value = cellContents[idx + 1] || 0;

				var className = 'datepicker-content-' + CryptoJS.MD5(value).toString();
				if(value == 0 && !$(this).hasClass('ui-state-disabled')) {
						//addCSSRule('.ui-datepicker td.' + className + ':after {content: "\\a0";}'); //&nbsp;
						$(this).addClass('ui-state-not-active');
					}
				else
					{
						// addCSSRule('.ui-datepicker td.' + className + ':after {content: "' + value + '";}');
						$(this).append('<div class="datepicker__price"><span>' + value + '</span> <span><i class="ico icon-rb-5"></i></span></div>');
					}

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

});






