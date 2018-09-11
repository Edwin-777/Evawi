$(document).ready(function(){
	$(".toggleNav").click(function(){
		$("#primaryHeader").toggleClass("activeMenu")
		$("#primaryMenu").toggleClass("activeMenu")
	})
	$("#hiddenMenu").click(function(){
		$("#primaryHeader").toggleClass("activeMenu")
		$("#primaryMenu").toggleClass("activeMenu")
	})

	$('#primarySlide').slick({
		slidesToShow: 1,
		fade: true,
		dots: false,
		arrows: false,
		autoplay: false
	});

	$('#primarySlide').slickAnimation();


	$('.resourcesPost .mod_3').slick({
		slidesToShow: 1,
		dots: true,
		arrows: false,
		autoplay: true
	});

	function removeActive(){
		$(".modulesWrapp").each(function(){
			$(this).fadeOut("slow")
		})

		$("#filterModules a").each(function(){
			$(this).removeClass("active")
		})
	}

	$("#filterModules a").each(function(){
		$(this).click(function(e){
			e.preventDefault()
			var panel = $(this).data("panel")
			removeActive()
			$(".module-"+panel).fadeIn("slow")
			$(this).addClass("active")
		})
	})


		// $('.slickSlide').slick({
		// 	slidesToShow: 5,
		// 	dots: false,
		// 	arrows: true,
		// 	autoplay: true,
		// 	responsive: [
		// 	{
		// 		breakpoint: 768,
		// 		settings: {
		// 			slidesToShow: 2,
		// 		}
		// 	},
		// 	]
		// });

		//$('.slide-1').slickAnimation();

})