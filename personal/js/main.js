$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});

	// Fancybox
	$('.work-box').fancybox();

	// Flexslider
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
	});

	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');
	var ch=$(window).height()
	var spans=$('nav a');
	// console.log(spans)
	var sorl=$('.sorl');
	var Arr=[]
	for(var i=0;i<sorl.length;i++){
		Arr.push(sorl[i].offsetTop)
	}
	 // nav.find('a').eq(0).prev().toggleClass('hot');
	$(window).on('scroll', function () {
	  		var cur_pos = $(this).scrollTop();
			sorl.each(function(i){
				if(cur_pos+ch>=Arr[i]+100){
					$(this).addClass('act')
					// if($this.has())
	 				// nav.find('a').eq(i).prev().addClass('hot');
				}else{
					$(this).removeClass('act')
	 				
					
				}
			})
	  	sections.each(function() {

	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	      		if(nav.find('a').has('active')){
	      			console.log(1)
	      			$('active').prev().addClass('hot')
	      		}
		
	    	}
	   //  	var hti=$(id).offset().top
				// console.log(hti)
	  	});
	  	
	});

	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
		// $(id).toggleClass('act')
		
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
		
	});
		
	spans.on('click',function() {
		var sql=$(this).prev();
		spans.prev().removeClass('hot');
		// alert(1)
		sql.addClass('hot');
	});
	
});
