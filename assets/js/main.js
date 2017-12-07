$(document).ready(function() {
	$(".navicon").hover(addMenuOpen, removeMenuOpen);
	$(".menu-list").hover(addNaviconOpen, removeNaviconOpen);
	$(".navicon").on("focusin", addMenuOpen);
	$(".navicon").on("focusout", removeMenuOpen);
	$(".menu-list").on("focusin", addNaviconOpen);
	$(".menu-list").on("focusout", removeNaviconOpen);

	function addMenuOpen() {
		$(".menu-list").addClass("menu-list-open");
		addNaviconOpen();
	}
	function removeMenuOpen() {
		$(".menu-list").removeClass("menu-list-open");
		removeNaviconOpen();
	}
	function addNaviconOpen() {
		$(".navicon").addClass("navicon-open");
	}
	function removeNaviconOpen() {
		$(".navicon").removeClass("navicon-open");
	}
});
