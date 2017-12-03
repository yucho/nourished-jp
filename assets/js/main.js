$(document).ready(function() {
	$(".navicon").hover(function () {
		$(".menu-list").addClass("menu-list-open");
	}, function () {
		$(".menu-list").removeClass("menu-list-open");
	});
});
