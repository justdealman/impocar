function lineSize() {
	$('.wrapper .line').css({
		'height': $('.wrapper').height()+'px'
	});
}
function processBg() {
	$('.processbg').css({
		'top': $('.process').offset().top+'px',
		'height': $('.process').outerHeight()+'px'
	});
	$('.processbg span').css({
		'margin-right': -790+($('.process').offset().top*0.531)+'px'
	});
}
function processUl() {
	var max = 0;
	$('.process > ul > li').each(function() {
	    var h = $(this).outerHeight(); 
	    max = h > max ? h : max;
	});
	$('.process > ul > li').outerHeight(max);
}
function processLi() {
	var prLi = $('.process > div > ul > li');
	if ( $(window).width() >= 1000 ) {
		prLi.css({
			'margin-left': (($('.process > div').width())-prLi.width()*5)/4+'px'
		});
	}
}
function calcHeight() {
	/*var mc = 0;
	$('.introduction .calculator > li').each(function() {
	    var h = $(this).outerHeight(); 
	    mc = h > mc ? h : mc;
	});
	if ( $('.wrapper').width() < 1260 ) {
		$('.introduction .calculator > li').height(mc);
	}
	else {
		$('.introduction .calculator > li').css({
			'height': 'auto'
		});
	}
	console.log(mc);*/
}
function sliderHeight() {
	if ( $('.introduction').width() > 1242 && $('.desktop').length > 0 ) {
		$('.introduction .slider').css({
			'height': $('.introduction').outerHeight()+'px'
		})
	}
	else {
		$('.introduction .slider').css({
			'height': '471px'
		})
	}
	if ( $('.introduction').width() > 1000 && $('.desktop').length > 0 ) {

	}
}
$(document).ready(function() {
	$(window).bind('scroll', function() {
		$('.animate').each(function() {
			if ( $(this).offset().top < $(document).scrollTop()+$(window).height() ) {
				$(this).addClass('complete')
			}
		})
	});
	if ( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $(window).width() > 1000 ) {
		$('.wrapper').append('<div class="line"></div>');
		lineSize()
	}
	/*if ( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('body').addClass('desktop')
	}
	else {
		$('body').addClass('mobile');
		if ( $(window).width() > 999 ) {
			var viewport = document.querySelector("meta[name=viewport]");
			viewport.setAttribute('content', 'width=1000, user-scalable=0');
		}
	}*/
	if ( $('.clients').length > 0 ) {
		var max = 0;
		$('.clients > div > div > *').each(function() {
		    var h = $(this).outerHeight(); 
		    max = h > max ? h : max;
		});
		$('.clients > div > div > *').each(function() {
		    $(this).css({
		    	'margin-top': (max-$(this).outerHeight())/2+'px'
		    })
		})
	}
	if ( $('.process').length > 0 ) {
		$('.wrapper').append('<div class="processbg"><span></span></div>');
		processBg()
	}
	if ( $('.process').length > 0 ) {
		processUl();
		$('.process .more ul li').each(function() {
			$(this).append('<span>'+eval($(this).index()+1)+'</span>');
		})
	}
	if ( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $('.process').length > 0 ) {
		processLi();
	}
	if ( $('.introduction').length ) {
		$('.introduction .calculator li div h6').each(function() {
			$(this).css({
				'margin-top': -$(this).outerHeight()/2-1+'px'
			})
		})
		$('.introduction .calculator li ul > li').bind('click', function() {
			$(this).addClass('active').siblings().removeClass('active');
		})
		$('.introduction .calculator li ul > li:nth-child(1)').trigger('click');
		$('input[type="checkbox"]').uniform();
		calcHeight();
		sliderHeight();
	}
});
$(window).resize(function() {
	if ( $('.wrapper .line').length > 0 ) {
		lineSize()
	}
	if ( $('.process').length > 0 ) {
		processBg()
	}
	if ( $('.process').length > 0 ) {
		processUl()
	}
	if ( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $('.process').length > 0 ) {
		processLi();
	}
	if ( $('.introduction').length ) {
		calcHeight();
		sliderHeight();
	}
});
$(window).load(function() {
	if ( $('.process').length > 0 ) {
		processBg()
	}
});