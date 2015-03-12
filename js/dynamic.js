function slider() {
	$('.slider').removeAttr('id');
	var id = Math.ceil(Math.random()*1000);
	$('.slider').attr('id', id);
	$('.slider .pagination, .slider .prev, .slider .next').remove();
	$('.slider .container').empty();
	$('.slider .container').html($('.slider .temp').html());
	$('.introduction').css({
		'zoom': '1'
	});
	function sliderAnimation() {
		var current = $('.slider#'+id+' .slides_control > div:nth-child('+eval($('.slider .pagination li.current').index()+1)+')');
		if ( current.children('div').attr('class') == 'slide2') {
			current.find('.animation').empty().html(current.find('.hidden').html());
			setTimeout(function() {
				current.find('.animation .core1 .chart').drawDoughnutChart([
					{ value: 350, color:'#c5c6c6' },
					{ value: 10, color:'#ee0b41' }
				]);
				current.find('.animation .core1.grow').addClass('complete');
				setTimeout(function() {
					current.find('.animation .core1 .tip').addClass('complete');
				}, 1000);
			}, 0);
			setTimeout(function() {
				current.find('.animation .core2 .chart').drawDoughnutChart([
					{ value: 318, color:'#c5c6c6' },
					{ value: 42, color:'#ee0b41' }
				]);
				current.find('.animation .core2.grow').addClass('complete');
				setTimeout(function() {
					current.find('.animation .core2 .tip').addClass('complete');
				}, 1000);
			}, 1000);
			setTimeout(function() {
				current.find('.animation .core3 .chart').drawDoughnutChart([
					{ value: 360, color:'#ee0b41' }
				]);
				current.find('.animation .core3.grow').addClass('complete');
				setTimeout(function() {
					current.find('.animation .core3 .tip').addClass('complete');
				}, 1000);
			}, 2000);
		}
		if ( current.children('div').attr('class') == 'slide4') {
			current.find('.animation').empty().html(current.find('.hidden').html());
			setTimeout(function() {
				current.find('.animation .core1 .chart').drawDoughnutChart([
					{ value: 360, color:'#ee0b41' }
				]);
				current.find('.animation .core1.grow').addClass('complete');
				setTimeout(function() {
					current.find('.animation .core1 .tip').addClass('complete');
				}, 1000);
			}, 0);
		}
	}
	$('.slider').slides({
		generatePagination: true,
		generateNextPrev: true,
		container: 'container',
		effect: 'fade',
		fadeSpeed: 500,
		play: 10000,
		pause: 2000,
		slidesLoaded: function() {
			sliderAnimation();
		},
		animationStart: function() {
			var prev = $('.slider .slides_control > div:nth-child('+eval($('.slider .pagination li.current').index()+1)+')');
			prev.find('.animation .grow, .animation .drop').addClass('hide');
		},
		animationComplete: function() {
			sliderAnimation();
		}
	});
	var zoomIntro = 1;
	if ( $('.desktop').length > 0 ) {
		if ( $('.wrapper').width() >= 1001 && $('.wrapper').width() < 1280 ) {
			zoomIntro = $('.wrapper').width()/1280;
		}
		if ( $('.wrapper').width() >= 1281 ) {
			zoomIntro = $('.wrapper').width()/1660;
		}
		if ( zoomIntro > 1 ) {
			zoomIntro = 1;
		}
	}
	if ( $('.mobile').length > 0 ) {
		zoomIntro = $(document).width()/1000;
	}
	$('.introduction').css({
		'-webkit-transform': 'scale('+zoomIntro+')',
		'-webkit-transform-origin': 'left top',
		'-moz-transform': 'scale('+zoomIntro+')',
		'-moz-transform-origin': 'left top',
		'transform': 'scale('+zoomIntro+')',
		'transform-origin': 'left top',
		'margin-bottom': -($('.introduction').height()-($('.introduction').height()*zoomIntro))+'px'
	});
	if ( $('.mobile').length > 0 ) {
		$('.slider').bind('swiperight', function() {
			$('.slider .prev').trigger('click');
		});
		$('.slider').bind('swipeleft', function() {
			$('.slider .next').trigger('click');
		});
	}
}
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
	if ( $('.slider').length > 0 ) {
		var zoomIntro = 1;
		if ( $('.desktop').length > 0 ) {
			if ( $(window).width() >= 1001 && $(window).width() < 1280 ) {
				zoomIntro = $(window).width()/1280;
			}
			if ( $(window).width() >= 1281 ) {
				zoomIntro = $(window).width()/1660;
			}
			if ( zoomIntro > 1 ) {
				zoomIntro = 1;
			}
			if ( $(window).width() <= 1000 ) {
				zoomIntro = 1;
			}
		}
		if ( $('.mobile').length > 0 ) {
			zoomIntro = $(window).width()/1000;
		}
		$('.processbg').css({
			'top': $('.process').offset().top-$('.introduction').height()+$('.introduction').height()*zoomIntro+'px',
			'height': $('.process').outerHeight()+'px'
		});
	}
	$('.processbg span').css({
		'margin-right': -790+(($('.process').offset().top-$('.introduction').height()+$('.introduction').height()*zoomIntro)*0.531)+'px'
	});
}
function helloBg() {
	$('.hellobg').css({
		'top': $('.hello').offset().top+'px',
		'height': $('.hello').outerHeight()+'px'
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
		var modalTop = $(document).scrollTop();
		if ( $('.modal.'+target).outerHeight() < $(window).height() ) {
			modalTop = modalTop+($(window).height()-$('.modal.'+target).outerHeight())/2;
		}
		$('.modal').hide();
		$('.modal.'+target).css({
			'top': modalTop+'px'
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
	$('.desktop .header .call p, .desktop .menu .icon4').bind('click', function() {
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
		$('.fade').css({
			'top': bh+'px'
		});
		if ( bh > $('.header').height() ) {
			$('.menu.fixed, .submenu.fixed').addClass('show');
		}
		return false;
	});
	$('.header .request h5 a, .desktop .menu .icon1').bind('click', function() {
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
		$('.fade').css({
			'top': bh+'px'
		});
		if ( bh > $('.header').height() ) {
			$('.menu.fixed, .submenu.fixed').addClass('show');
		}
		return false;
	});
	$('.desktop .menu .icon2').bind('click', function() {
		$('.modal.count, .fade').stop(true,true).fadeIn(250);
		$('.modal.count').css({
			'margin-top': -$('.modal.count').outerHeight()/2+'px'
		})
		$('.modal.count div h6').each(function() {
			$(this).css({
				'margin-top': -$(this).outerHeight()/2-1+'px'
			})
		});
		bh = $(document).scrollTop();
		$('body').css({'position': 'fixed', 'top': -bh+'px', 'overflow-y': 'scroll'});
		$('.fade').css({
			'top': bh+'px'
		});
		if ( bh > $('.header').height() ) {
			$('.menu.fixed, .submenu.fixed').addClass('show');
		}
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
		$('.fade').css({
			'top': bh+'px'
		});
		return false;
	});
	$('.fade, .modal span.close, .modal.citysel button.submit').bind('click', function() {
		$('.modal, .fade').stop(true,true).fadeOut(250);
		$('body').css({'position': 'static', 'top': '0', 'overflow-y': 'auto'});
		$(document).scrollTop(bh);
		$('.menu.fixed, .submenu.fixed').removeClass('show');
		bh = 0;
		return false;
	});
	$('.modal.citysel ul li span').bind('click', function() {
		$('.header .city h5 span').empty().text($(this).text());
		$('.modal, .fade').stop(true,true).fadeOut(250);
		$('body').css({'position': 'static', 'top': '0', 'overflow-y': 'auto'});
		$(document).scrollTop(bh);
		bh = 0;
		return false;
	});
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
function benefitsNum() {
	$('.inner .benefits ul li').each(function() {
		$(this).find('p').css({
			'margin-left': $(this).find('h5').width()+10+'px'
		});
	});
}
function autoPark() {
	$('.autopark > div .titlebg').height($('.autopark table thead').outerHeight());
	$('.autopark > div > div > div').css({
		'top': $('.autopark table thead').outerHeight()+20+'px'
	});
	$('.autopark > div > div').css({
		'min-height': $('.autopark table thead').outerHeight()-5+$('.autopark > div > div > div').outerHeight()+'px'
	});
}
function faqNav() {
	$(window).bind('scroll', function() {
		var ft = $('.faq > div').offset().top-($('.menu').height()+$('.submenu').height()+20);
		if ( $(document).scrollTop() > ft ) {
			var ch = $(window).height()-($('.menu').height()+$('.submenu').height());
			if ( $('.faq > ul').outerHeight() > ch-30 ) {
				var difference = $('.faq > ul').outerHeight()-ch+50;
				var ps = ($(document).scrollTop()-$('.faq > div').offset().top)/$('.faq > div').outerHeight();
				console.log(ps);
				if ( $(window).scrollTop() > $('.wrapper').height()-$(window).height()-$('.footer').height() ) {
					$('.faq > ul').css({
						'top': 'auto',
						'bottom': '26px'
					});
				}
				else {
					$('.faq > ul').css({
						'top': $(document).scrollTop()-ft+10-(difference*ps)+'px',
						'bottom': 'auto'
					});
				}
			}
			else {
				if ( $(window).scrollTop() > $('.wrapper').height()-($('.faq > div').offset().top+$('.faq > ul').outerHeight()-50) ) {
					$('.faq > ul').css({
						'top': 'auto',
						'bottom': '26px'
					});
				}
				else {
					$('.faq > ul').css({
						'top': $(document).scrollTop()-ft+10+'px',
						'bottom': 'auto'
					});
				}
			}
		}
		else {
			$('.faq > ul').css({
				'top': '10px'
			});
		}
	});
}
$(document).ready(function() {
	if ( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('body').addClass('desktop');
	}
	else {
		$('body').addClass('mobile');
	}
	bh = 0;
	if ( $('.desktop').length > 0 ) {
		$('.menu').clone().appendTo('body');
		$('body > .menu').addClass('fixed');
		$(window).bind('scroll', function() {
			if ( $(document).scrollTop() > $('.header').height() ) {
				$('body > .menu').show();
			}
			else {
				$('body > .menu').hide();
			}
		});
		if ( $('.submenu').length > 0 ) {	
			$('.submenu').clone().appendTo('body');
			$('body > .submenu').addClass('fixed');
			$(window).bind('scroll', function() {
				if ( $(document).scrollTop() > $('.header').height() ) {
					$('body > .submenu').show();
				}
				else {
					$('body > .submenu').hide();
				}
			});
		}
	}
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
	}
	$('.modal.count ul.cartype li').bind('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
	})
	$('.modal.count ul.cartype li:nth-child(1)').trigger('click');
	if ( $('.mobile').length > 0 ) {
		$('.modal').append('<button class="close">Закрыть</button>');
		mobile();
	}
	if ( $('.desktop').length > 0 ) {
		desktop();
	}
	if ( $('.inner .hello').length > 0 ) {
		$('.wrapper').append('<div class="hellobg"></div>');
		helloBg();
	}
	if ( $('.inner .benefits').length > 0 ) {
		benefitsNum();
	}
	if ( $('.gallery').length > 0 ) {
		$('.inner .gallery > ul li a').bind('click', function() {
			$(this).parent().addClass('active').siblings().removeClass('active');
			return false;
		}).filter(':first').click();
	}
	if ( $('.inner .contacts').length > 0 && $(window).width() >= 1000 ) {
		contactsWidth();
	}
	if ( $('.faq').length > 0 ) {
		$('.faq').css({
			'min-height': $('.faq').children('ul').outerHeight()+24+'px'
		});
	}
	if ( $('.faq').length > 0 && $(window).width() < 1000 ) {
		$('.mobile .inner .faq > div h3 span').bind('click', function() {
			$(this).parent().parent().toggleClass('active');
			return false;
		});
	}
	if ( $('.process > div > ul').length > 0 && $(window).width() >= 1000 ) {
		$('.process > div > ul > li').addClass('animated');
		$(window).bind('scroll', function() {
			if ( $(document).scrollTop() > $('.process > div > ul').offset().top-$(window).height()+$('.process > div > ul').height() ) {
				var i = 0, processSteps = $('.process > div > ul > li').size();
				function f() {
				    i++;
					$('.process > div > ul > li:nth-child('+i+')').addClass('flipInX');
				    if( i < processSteps ){
				        setTimeout(f, 500);
				    }
				}
				f();
			}
		});
	}
	if ( $('.desktop').length > 0 ) {
		$('.introduction, body').append('<div class="autosize"></div>');
		$('.introduction .count ul li').hover(
			function() {
				var zoomIntro = 1;
				if ( $('.desktop').length > 0 ) {
					if ( $(window).width() >= 1001 && $(window).width() < 1280 ) {
						zoomIntro = $(window).width()/1280;
					}
					if ( $(window).width() >= 1281 ) {
						zoomIntro = $(window).width()/1660;
					}
					if ( zoomIntro > 1 ) {
						zoomIntro = 1;
					}
					if ( $(window).width() <= 1000 ) {
						zoomIntro = 1;
					}
				}
				var autoSizeLeft = ($(this).offset().left-$(this).parents('.introduction').offset().left)/zoomIntro;
				var autoSizeTop = ($(this).offset().top+bh-$(this).parents('.introduction').offset().top)/zoomIntro;
				/*if ( autoSizeLeft < 126 ) {
					autoSizeLeft = 126;
				}
				if ( autoSizeLeft > $(window).width()-($('.autosize').outerWidth()-126) ) {
					autoSizeLeft = $(window).width()-($('.autosize').outerWidth()-126);
				}*/
				$(this).siblings().stop(true,true).animate({
					'opacity': '0.75'
				}, 0);
				$('.introduction .autosize').empty().html($(this).html()).stop(true,true).show().css({
					'left': autoSizeLeft+'px',
					'top': autoSizeTop+'px'
				});
			},
			function() {
				$(this).siblings().stop(true,true).delay(200).animate({
					'opacity': '1'
				}, 0);
				$('.introduction .autosize').stop(true,true).hide();
			}
		);
		$('.modal.count ul li').hover(
			function() {
				var autoSizeLeft = $(this).offset().left;
				var autoSizeTop = $(this).offset().top+bh;
				if ( autoSizeLeft < 126 ) {
					autoSizeLeft = 126;
				}
				if ( autoSizeLeft > $(window).width()-($('.autosize').outerWidth()-126) ) {
					autoSizeLeft = $(window).width()-($('.autosize').outerWidth()-126);
				}
				$(this).siblings().stop(true,true).animate({
					'opacity': '0.75'
				}, 0);
				$('body > .autosize').empty().html($(this).html()).stop(true,true).show().css({
					'left': autoSizeLeft+'px',
					'top': autoSizeTop+'px'
				});
			},
			function() {
				$(this).siblings().stop(true,true).delay(200).animate({
					'opacity': '1'
				}, 0);
				$('body > .autosize').stop(true,true).hide();
			}
		);
	}
	/*if ( $('.slider').length > 0 ) {
		slider();
	}*/
	if ( $('select').length > 0 ) {
		$('select').selectbox();
	}	
	if ( $('.autopark').length > 0 ) {
		$('.autopark > div').prepend('<span class="titlebg"></span>');
		autoPark();
	}
	$('.desktop .menu ul li').hover(
		function() {
			$(this).next().addClass('next');
		},
		function() {
			$(this).next().removeClass('next');
		}
	);
	if ( $('.faq').length > 0 && $('.desktop').length > 0 ) {
		faqNav();
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
	if ( $('.inner .contacts').length > 0 && $(window).width() >= 1000 ) {
		contactsWidth();
	}
	if ( $('.inner .benefits').length > 0 ) {
		benefitsNum();
	}
	if ( $('.slider').length > 0 ) {
		slider();
	}
	if ( $('.autopark').length > 0 ) {
		autoPark();
	}
	if ( $('.faq').length > 0 && $('.desktop').length > 0 ) {
		faqNav();
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
	if ( $('.slider').length > 0 ) {
		slider();
	}
	if ( $('.autopark').length > 0 ) {
		autoPark();
	}
});