$(document).ready(function () {
	// $(".numscroller").onLoad(function formatNumber(num) {
	// 	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, “$1, “)
	// });


	$("button").on("click", function (e) {
		e.preventDefault();
		console.log("button clicked");
		// var clicked = $(this);
		// var chosenfilter = clicked.data("filter");
		//


		// $(".item.active").removeClass("active");

		if (filter === "reset") {
			console.log("Hello, William.");
			$("div").removeClass("active");
			$("button").removeClass("active");
			$("button").removeClass("active");

		} else {

			var this_filter = $(this);
			var filter = this_filter.data("filter");
			$("div").removeClass("active");
			$("button").removeClass("active");
			this_filter.toggleClass("active");
			$("." + filter).toggleClass("active");
		}
	});



	$(".item").on("click", function (e) {

		console.log("photo clicked");
		var item = $(this);
		if (item.hasClass("turn")) {
			item.removeClass("turn");
		} else {
			item.addClass("turn");
		}
	});
});
