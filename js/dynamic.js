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
function helloBg() {
	$('.hellobg').css({
		'top': $('.hello').offset().top+'px',
		'height': $('.hello').outerHeight()+'px'
	});
	$('.hellobg span').css({
		'margin-right': -790+($('.hello').offset().top*0.531)+'px'
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
	}*/
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
}
function mobile() {
	var dropMenu = false;
	if ( $(window).width() < 1000 ) {
		$('.menu').addClass('dropped');
		$('.header .drop').bind('click', function() {
			if ( $('.menu').is(':hidden') ) {
				$('.modal').hide();
				$('.menu, .fade').show();
				$('.fade').css({
					'top': '137px',
					'height': $('.wrapper').height()-137+'px'
				});
				dropMenu = true;
			}
			else {
				$('.menu, .fade').hide();
				dropMenu = false;
			}
			return false;
		});
		$('.process .about h3, .latest h2').bind('click', function() {
			$(this).parent().toggleClass('active');
			return false;
		});
		$('html, body').click(function() {
			$('.menu.dropped, .fade').hide();
			dropMenu = false;
		});
		$('.menu.dropped').click(function(e) {
			e.stopPropagation();
		});
	}
	$(window).resize(function() {
		if ( $(window).width() >= 983 ) {
			$('.menu').removeClass('dropped');
		}
		else {
			$('.menu').addClass('dropped');
		}
		if ( $(window).width() >= 983 || dropMenu == false ) {
			dropMenu = false;
			$('.menu').show();
			$('.fade, .menu.dropped').hide();
		}
	});
	$('.mobile .header .icons li.icon1 a, .mobile .header .icons li.icon2 a, .mobile .header .icons li.icon4 a, .header .call p').bind('click', function() {
		if ( $(this).parent().attr('class') == 'icon1' ) {
			var target = 'request';
		}
		if ( $(this).parent().attr('class') == 'icon2' ) {
			var target = 'count';
		}
		if ( $(this).parent().attr('class') == 'icon4' || $(this).parent().attr('class') == 'call' ) {
			var target = 'call';
		}
		$('.modal').hide();
		$('.modal.'+target).css({
			'top': $('.header').height()+'px'
		}).show();
		$('.modal.'+target+' div h6').each(function() {
			$(this).css({
				'margin-top': -$(this).outerHeight()/2-1+'px'
			})
		});
		$('.fade').css({
			'top': $('.header').height()+'px',
			'height': $('.wrapper').height()-$('.header').height()+'px'
		}).show();
		return false;
	});
	$('.header .city h5').bind('click', function () {
		$('.modal.citysel h5 strong span').empty().text($(this).find('span').text());
		$('.modal').hide();
		$('.modal.citysel').css({
			'top': $('.header').height()+'px'
		}).show();
		$('.fade').css({
			'top': $('.header').height()+'px',
			'height': $('.wrapper').height()-$('.header').height()+'px'
		}).show();
		return false;
	});
	$('.modal .close').bind('click', function() {
		$(this).parent().hide();
		$('.fade').hide();
		return false;
	});
	$('.modal.citysel button.submit').bind('click', function() {
		$('.fade, .modal').hide();
		return false;
	});
	$('.modal.citysel ul li span').bind('click', function() {
		$('.header .city h5 span').empty().text($(this).text());
		$('.fade, .modal').hide();
		return false;
	});
	$('html, body').bind('click', function() {
		$('.modal').hide();
	});
	$('.modal').bind('click', function(e) {
		e.stopPropagation();
	});
}
function desktop() {
	$('.desktop .modal').append('<span class="close"></span>');
	var bh = 0;
	$('.desktop .header .call p').bind('click', function() {
		$('.modal.call, .fade').stop(true,true).fadeIn(250);
		$('.modal.call').css({
			'margin-top': -$('.modal.call').outerHeight()/2+'px'
		})
		$('.modal.call div h6').each(function() {
			$(this).css({
				'margin-top': -$(this).outerHeight()/2-1+'px'
			})
		});
		bh = $(document).scrollTop();
		$('body').css({'position': 'fixed', 'top': -bh+'px', 'overflow-y': 'scroll'});
		return false;
	});
	$('.header .request h5 a').bind('click', function() {
		$('.modal.request, .fade').stop(true,true).fadeIn(250);
		$('.modal.request').css({
			'margin-top': -$('.modal.request').outerHeight()/2+'px'
		})
		$('.modal.request div h6').each(function() {
			$(this).css({
				'margin-top': -$(this).outerHeight()/2-1+'px'
			})
		});
		bh = $(document).scrollTop();
		$('body').css({'position': 'fixed', 'top': -bh+'px', 'overflow-y': 'scroll'});
		return false;
	});
	$('.header .city h5').bind('click', function () {
		$('.modal.citysel h5 strong span').empty().text($(this).find('span').text());
		$('.modal.citysel, .fade').stop(true,true).fadeIn(250);
		$('.modal.citysel').css({
			'margin-top': -$('.modal.citysel').outerHeight()/2+'px'
		});
		bh = $(document).scrollTop();
		$('body').css({'position': 'fixed', 'top': -bh+'px', 'overflow-y': 'scroll'});
		return false;
	});
	$('.fade, .modal span.close, .modal.citysel button.submit').bind('click', function() {
		$('.modal, .fade').stop(true,true).fadeOut(250);
		$('body').css({'position': 'static', 'top': '0', 'overflow-y': 'auto'});
		$(document).scrollTop(bh);
		return false;
	});
	$('.modal.citysel ul li span').bind('click', function() {
		$('.header .city h5 span').empty().text($(this).text());
		$('.modal, .fade').stop(true,true).fadeOut(250);
		$('body').css({'position': 'static', 'top': '0', 'overflow-y': 'auto'});
		$(document).scrollTop(bh);
		return false;
	});
}
function mobileViewport() {
	/*if ( window.innerWidth() > 999 ) {
		var viewport = document.querySelector("meta[name=viewport]");
		viewport.setAttribute('content', 'width=1000, user-scalable=yes');
	}
	else {
		var viewport = document.querySelector("meta[name=viewport]");
		viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, user-scalable=yes');
	}*/
}
function contactsWidth() {
	if ( $(window).width() >= 1400 ) {
		$('.inner .contacts li').css({
			'margin-right': Math.floor(($('.inner .contacts').width()-424*3)/2)-3+'px',
			'margin-left': '0'
		});
		$('.inner .contacts li:nth-child(3n)').css({
			'margin-right': '-3px'
		});
	}
	if ( $(window).width() < 1400 ) {
		$('.inner .contacts li').css({
			'margin-right': Math.floor(($('.inner .contacts').width()-424*2)/4)-3+'px',
			'margin-left': Math.floor(($('.inner .contacts').width()-424*2)/4)-3+'px'
		});
	}
}
window.addEventListener('orientationchange', function() {
	mobileViewport();
}, false);
$(document).ready(function() {
	$(window).bind('scroll', function() {
		$('.animate').each(function() {
			if ( $(this).offset().top < $(document).scrollTop()+$(window).height() ) {
				$(this).addClass('complete')
			}
		})
	});
	$('.wrapper').append('<div class="line"></div>');
	lineSize();
	if ( $('.inner').length > 0 ) {
		$('div.line').css({
			'opacity': '0.15'
		})
	}
	/*if ( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('body').addClass('desktop');
	}
	else {
		$('body').addClass('mobile');
		mobileViewport();
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
		processBg();
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
	$('.modal.count ul li').bind('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
	})
	$('.modal.count ul li:nth-child(1)').trigger('click');
	if ( $('.mobile').length > 0 ) {
		$('.modal').append('<button class="close">Закрыть</button>');
		mobile();
	}
	if ( $('.desktop').length > 0 ) {
		desktop();
	}
	if ( $('.inner .hello').length > 0 ) {
		$('.wrapper').append('<div class="hellobg"><span></span></div>');
		helloBg();
	}
	if ( $('.inner .benefits').length > 0 ) {
		$('.inner .benefits ul li').each(function() {
			$(this).find('p').css({
				'margin-left': $(this).find('h5').width()+10+'px'
			});
		});
	}
	if ( $('.gallery').length > 0 ) {
		$('.inner .gallery > ul li a').bind('click', function() {
			$(this).parent().addClass('active').siblings().removeClass('active');
			return false;
		}).filter(':first').click();
	}
	if ( $('.inner .contacts').length > 0 && $('.desktop').length > 0 ) {
		contactsWidth();
	}
	if ( $('.faq').length > 0 ) {
		$('.faq').css({
			'min-height': $('.faq').children('ul').outerHeight()+24+'px'
		})
	}
});
$(window).resize(function() {
	if ( $('.wrapper .line').length > 0 ) {
		lineSize();
	}
	if ( $('.process').length > 0 ) {
		processBg();
	}
	if ( $('.process').length > 0 ) {
		processUl();
	}
	if ( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $('.process').length > 0 ) {
		processLi();
	}
	if ( $('.introduction').length ) {
		calcHeight();
		sliderHeight();
	}
	if ( $('.modal').is(':visible') && $('.mobile').length > 0 ) {
		$('.modal').css({
			'top': $('.header').height()+'px'
		});
		$('.fade').css({
			'top': $('.header').height()+'px',
			'height': $('.wrapper').height()-$('.header').height()+'px'
		});
	}
	if ( $('.inner .hello').length > 0 ) {
		helloBg();
	}
	if ( $('.inner .contacts').length > 0 && $('.desktop').length > 0 ) {
		contactsWidth();
	}
});
$(window).load(function() {
	if ( $('.process').length > 0 ) {
		processBg();
	}
	if ( $('.inner .hello').length > 0 ) {
		helloBg();
	}
	lineSize();
});