$(function() {
	//We're home
	if (base_url === ".")
	{
		$('.bs-sidebar, .col-md-3').css('display', 'none');

		var main = $('[role=main]');
		main.removeClass("col-md-9");
		main.addClass("col-md-12");
		main.css('text-align', 'center');

		$("ul").css("text-align", "left");
	}
});