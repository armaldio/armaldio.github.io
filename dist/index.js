'use strict';

/**
 * Created by goinau_q on 20/06/17.
 */

$(document).ready(function () {

	$('.dropdown').dropdown({
		action: 'hide'
	});

	$('#lang-dd').dropdown();

	var theme = 'night';

	$('#theme-toggle').on('click', function () {
		if (theme === 'light') {
			document.getElementById('theme-toggle').innerHTML = 'Lights off';
			document.getElementById('theme').href = 'theme/dark.css';
			theme = 'dark';
		} else {
			document.getElementById('theme-toggle').innerHTML = 'Lights on';
			document.getElementById('theme').href = '';
			theme = 'light';
		}
		return false;
	});

	$('.open-modal').on('click', function (el) {
		var target = el.target;
		var modal = $(target).data('modal');

		console.log(modal);

		$('.weuk.modal').modal('show');
	});
});
//# sourceMappingURL=index.js.map