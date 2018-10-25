$(document).ready(function(){
	$(".toggleNav").click(function(){
		$("#primaryHeader").toggleClass("activeMenu")
		$("#primaryMenu").toggleClass("activeMenu")
	})
	$("#hiddenMenu").click(function(){
		$("#primaryHeader").toggleClass("activeMenu")
		$("#primaryMenu").toggleClass("activeMenu")
	})

	function slideSubmenu(){
		$("#primaryMenu ul li ul").each(function(){
			$(this).removeClass("active").slideUp();
		})
	}

	$("#primaryMenu ul li a").each(function(){
		$(this).click(function(){
			if ($(this).siblings("ul").hasClass("active")) {
				return false
			}else{
				slideSubmenu();
				$(this)
				$(this).siblings("ul").addClass("active").slideDown();
			}
		})
	})

	$('#primarySlide .wrappslide').slick({
		slidesToShow: 1,
		fade: true,
		dots: true,
		arrows: false,
		autoplay: false,
		customPaging : function(slider, i) {
		var thumb = $(slider.$slides[i]).data();
		return '<a>0'+(i+1)+'</a>';
		},
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

	$(".wrapper_amount .add").click(function(){
		var num = parseInt($(this).siblings(".amount").val());					
		$(this).siblings(".amount").val(num+10+".00");
	})
		
	$(".wrapper_amount .subtract").on('click', function(){
		var num = parseInt($(this).siblings(".amount").val());					
		$(this).siblings(".amount").val(num-10+".00");
		if (num == 10.00) {
			$(this).siblings(".amount").val(10+".00");
		}
	})
	


	$('.slde_donate').slick({
		slidesToShow: 1,
		centerMode: true,
		dots: false,
		arrows: false,
		//autoplay: true,
		infinite: true,
		centerPadding: '160px',
		asNavFor: '.title_slide_donate',
		responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 1,
				centerPadding: '0px',
			}
		},
		]
	});

	$('.title_slide_donate').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.slde_donate',
	  dots: false,
	  centerMode: true,
	  focusOnSelect: true,
	  responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 3,
				centerPadding: '0px',
			}
		},
		]
	});
	activeCount = true
	function startCounter(){
		if (activeCount) {
			$('.donate_counter h2').each(function () {
			  var $this = $(this);
			  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
			    duration: 3000,
			    easing: 'swing',
			    step: function () {
			      $this.text(Math.ceil(this.Counter));
			    }
			  });
			});
		}
	}

	//$('.slde_donate').slickLightbox();

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


		 $(document).on('scroll', function(e) { 
	   	var desplazamientoActual = $(document).scrollTop();
	    if (desplazamientoActual >= $('.donate_counter').offset().top - 200 ) {
	    	startCounter()
	    	activeCount=false
	    }else{
	    	
	    }
	  })

})