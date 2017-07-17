/**
 * Created by goinau_q on 20/06/17.
 */

$(document).ready(() => {
	$('.progress').progress();

	$('.dropdown').dropdown({
		action: 'hide'
	});

	$('#lang-dd').dropdown();

	var theme = "night";

	$('#theme-toggle').on("click", function () {
		if (theme === "light") {
			document.getElementById('theme-toggle').innerHTML = 'Lights off';
			document.getElementById("theme").href             = "theme/dark.css";
			theme                                             = "dark";
		}
		else {
			document.getElementById('theme-toggle').innerHTML = "Lights on";
			document.getElementById("theme").href             = "";
			theme                                             = "light";
		}
		return false;
	});

	$(".open-modal").on("click", function (el) {
		var target = el.target;
		var modal  = $(target).data("modal");

		console.log(modal);

		$(".weuk.modal").modal('show');
	});

	//AOS.init();

	let currentLang = localStorage.getItem("i18nextLng");
	if (currentLang === "fr")
		$('#lang-dd').dropdown('set selected', 1);
	else if (currentLang === "en")
		$('#lang-dd').dropdown('set selected', 0);
	$('#lang-dd').dropdown('refresh');

	/**
	 * i18next
	 */
	i18next
		.use(i18nextXHRBackend)
		.use(i18nextBrowserLanguageDetector)
		.init({
			fallbackLng: 'en',
			debug      : false,
			backend    : {
				loadPath   : 'assets/i18n/{{lng}}/{{ns}}.json',
				crossDomain: true
			}
		}, function (err, t) {
			updateContent();
		});

	// just set some content and react to language changes
	// could be optimized using vue-i18next, jquery-i18next, react-i18next, ...
	function updateContent () {
		for (let i = 0; i < document.querySelectorAll('[data-i18n]').length; i++) {
			document.querySelectorAll('[data-i18n]')[i].innerHTML = i18next.t(document.querySelectorAll('[data-i18n]')[i].getAttribute("data-i18n"));
		}
	}

	function changeLng (lng) {
		i18next.changeLanguage(lng);
	}

	i18next.on('languageChanged', () => {
		updateContent();
	});

	$("#language").on("change", () => {

		let lang = $('#lang-dd').dropdown('get value');
		
		if (parseInt(lang) === 0) {
			i18next.changeLanguage('en');
		} else {
			i18next.changeLanguage('fr');
		}

	});

	/**
	 * //i18next
	 */

	if ("serviceWorker" in navigator) {
		navigator.serviceWorker.register('./sw.js').then((registration) => {
			console.log("Service worker registered");
		}, () => {
			console.log("Service worker failed to register");
		})
	}

});
