"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Armaldio on 15/06/2017.
 */

var Page = function Page(url, name, category) {
	_classCallCheck(this, Page);

	this.url = url;
	this.name = name;
	this.category = category;
};

var struct = [new Page("offline-first.html", "Offline first !", "Web"), new Page("offline-first.html", "Accelerated mobile pages", "Web"), new Page("offline-first.html", "The tools I use", "Web")];

$(document).ready(function () {

	struct.forEach(function (elem) {
		$("#grid").append("\n\t\t<div class=\"four wide column grow\" onclick=\"document.location.replace('" + elem.url + "')\">\n        \t<div class=\"ui center aligned segment\">\n        \t<div class=\"ui fluid rounded image\">\n      \t\t\t<div class=\"ui green ribbon label\">\n        \t\t\t<i class=\"newspaper icon\"></i> " + elem.name + "\n     \t\t\t </div>\n     \t\t\t <img src=\"" + elem.url.replace('.html', '') + ".png\">\n   \t\t\t </div>\t\t\t\t\n        \t</div>\n        </div>\n\t\t");
		console.log(elem);
	});

	var messaging = firebase.messaging();

	$("#subscribe-button").on("click", function () {
		$('#subscribe-modal').modal('show');
	});
});
//# sourceMappingURL=index.js.map