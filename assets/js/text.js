$(function() {
	// スタート表示
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！

	// アコーディオンメニュー

	$('.s-date').click(function () {
		if ($(".text_box:first").is(":hidden")) {
		  $(".text_box").slideDown("fast");
		} else {
		  $(".text_box").slideUp();
		}
	  });

	//   ふわっと表示
	  window.onload = function() {
		scroll_effect();
	  
		$(window).scroll(function(){
		 scroll_effect();
		});
	  
		function scroll_effect(){
		 $('.effect-fade').each(function(){
		  var elemPos = $(this).offset().top;
		  var scroll = $(window).scrollTop();
		  var windowHeight = $(window).height();
		  if (scroll > elemPos - windowHeight){
		   $(this).addClass('effect-scroll');
		  }
		 });
		}
	  };
	//   　$(window).scroll(function (){
	// 	$('.effect-fade').each(function(){
	// 		var elemPos = $(this).offset().top;
	// 		var scroll = $(window).scrollTop();
	// 		var windowHeight = $(window).height();
	// 		if (scroll > elemPos - windowHeight){
	// 			$(this).addClass('effect-scroll');
	// 		}
	// 	});
	// 　});

	
});