
$(function() {

	var header = $("#header"),
		 introH = $("#intro").innerHeight(),
		 scrollOffset = $(window).scrollTop();


		 /*header fixed*/
		 checkScroll(scrollOffset)

	$(window).on("scroll", function() {

		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);

		
	});

	function checkScroll(scrollOffset){
		if(scrollOffset >= introH) {
			header.addClass('fixed');
		} else{
			header.removeClass('fixed');
		}
	}

	/*smooth scroll плавный скрол к элементам*/
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		var $this = $(this),	
			 blockId = $this.data('scroll'),
			 blockOffset = $(blockId).offset().top;

		$("#nav a").removeClass("active");
		$this.addClass("active");


/*плавно проскролить страницу*/

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500/*время скрола*/);

		});

	/*MENU NAV TOGGLE*/

	$("#nav-toggle").on("click", function(event){
			event.preventDefault();

			$(this).toggleClass("active");
			$("#nav").toggleClass("active");
	});




	/*COLLAPSE*/

	$("[data-collapse]").on("click", function(event){
		event.preventDefault();

		var $this = $(this),	
			 blockId = $this.data('collapse');

			 $this.toggleClass('active');
			

	})


	/*SLIDER*/

	$("[data-slider]").slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});





});