$(window).scroll(function() {

	var sPos = $(this).scrollTop();
	// console.log(sPos); на сколько проскролил от верха

	$(".jet").css({
		'right': sPos/8 + '%'
	});

});