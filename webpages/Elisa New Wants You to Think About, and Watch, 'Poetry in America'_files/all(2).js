
// components/ajax-ads.html

	function loadAd(e) {
		this.element = e;
		this.loaded = false;
		this.id = $(this.element).attr('id');
		this.scales = $(this.element).data('scales');
		this.enabled = false;
		this.slotDefined = false;
		this.didInterstitial = getCookie('mobileRateLimit');

		var self = this;

		var slots = {
			'div-gpt-ad-Mobile': {
				hashtag: '<div class="htlad-mobile_banner" data-prebid="0x0:320x50|675x0:" data-sizes="0x0:320x50|675x0:" data-eager></div>'
			},
			'div-gpt-ad-enlarged': {
				'defaultImg': '/images/default-ads/square.gif',
				'defaultUrl': 'https://booklife.com/services',
				hashtag: '<div class="htlad-enlarged'+slot_suffix+'"></div>'
			},
			'div-gpt-ad-enlarged-inline': {
				'defaultImg': '/images/default-ads/square.gif',
				'defaultUrl': 'https://booklife.com/services',
				hashtag: '<div class="htlad-enlarged'+slot_suffix+'"></div>'
			},
			'div-gpt-ad-Leaderboard': {
				'defaultImg': '/images/default-ads/leader.jpg',
				'defaultUrl': 'https://booklife.com/about-us/pw-select.html',
				hashtag: '<div class="htlad-Leaderboard'+slot_suffix+'"></div>'
			},
			'div-gpt-ad-skyscraper': {
				'defaultImg': '/images/default-ads/banner.jpg',
				'defaultUrl': 'http://publishersweekly.com/pub101',
				hashtag: '<div class="htlad-skyscraper'+slot_suffix+'"></div>'
			},
			'div-gpt-ad-new_bottom_leaderboard': {
				hashtag: '<div class="htlad-new_bottom_leaderboard"></div>'
			},
			'div-gpt-ad-mobile_box': {
				hashtag: '<div class="htlad-mobile_box"></div>'
			},
			'div-gpt-ad-slider-main': {
				hashtag: '<div class="htlad-slider-main"></div>'
			},
			'div-gpt-ad-slider-kids': {
				hashtag: '<div class="htlad-slider-kids"></div>'
			}
		};

		this.didOptOut = function() {
			if(this.id == 'div-gpt-ad-Mobile') {
				return mobileAdOptOut;
			}
			if(this.id == 'div-gpt-ad-mobile_box') {
				if(this.didInterstitial) {
					return true;
				}
				this.didInterstitial = true;
				return false;
			}
			return false;
		};

		this.start = function(mode) {
			var noAds = false;
			var path = document.location.pathname;
			if(path === '/pw/email-demographics/index.html' || path === '/pw/email-subscriptions/index.html' || path === '/pw/manage-subscriptions-thanks/index.html' || path === '/pw/manage-subscriptions-new/index.html') {
				noAds = true;
				var tag = slots[this.id];
				if(tag && tag.defaultImg) {
					$(this.element).html('<a href="'+tag.defaultUrl+'" target="_blank"><img src="'+tag.defaultImg+'"></a>');
				}
			}

			if(!noAds && !this.loaded && this.enabled && !this.didOptOut()) {
				if(!self.slotDefined) {
					self.slotDefined = true;
					var tag = slots[self.id];
					if(tag.hashtag){
						$(self.element).html(tag.hashtag);
					}
					else {
						$(self.element).html('ad missing');
					}
				}
				this.loaded = true;
			}
		};

		this.watchScale = function(scale) {
			var want = false;
			if(this.scales) {
				var s = this.scales.split(',');
				for(var i = 0; i < s.length; i++) {
					if(s[i] === responsive.scale) {
						want = true;
					}
				}
			}
			else {
				want = true;
			}

			if(want) {
				if(!this.enabled) {
					this.enabled = true;
					$(this.element).show();
					this.start();
				}
			}
			else {
				if(this.enabled) {
					this.enabled = false;
					$(this.element).hide();
				}
			}
		};
	}

	function mobileEnlarged(elem) {
		this.element = $(elem);
		this.elabled = false;
		this.id = $(this.element).attr('id');
		this.scales = $(this.element).data('scales');

		var self = this;

		this.start = function() {
			this.element.find('.dismiss').click(function(e) {
				self.element.hide();
			});
		};

		this.stop = function() {
		};

		this.watchScale = function(scale) {
			if(getCookie('mobileRateLimit')) {
			}
			else {
				var want = false;
				if(this.scales) {
					var s = this.scales.split(',');
					for(var i = 0; i < s.length; i++) {
						if(s[i] === responsive.scale) {
							want = true;
						}
					}
				}
				else {
					want = true;
				}

				if(want) {
					if(!this.enabled) {
						setCookie('mobileRateLimit','on');
						this.enabled = true;
						window.setTimeout(function(){
							$(self.element).slideDown('fast');
						},1500);
					}
				}
				else {
					if(this.enabled) {
						this.enabled = false;
						$(this.element).hide();
					}
				}
			}
		};
	};

// components/also_on_pw.html

	function alsoOnPw(e) {
		this.element = e;

		this.want = function() {
			return true;
		};

		this.ajaxArgs = {
			'input': {
				'linkset': $(this.element).data('linkset')
			}
		};
	}

// components/also_on_pw_no_ad.html

	function alsoOnPw(e) {
		this.element = e;

		this.want = function() {
			return true;
		};

		this.ajaxArgs = {
			'input': {
				'linkset': $(this.element).data('linkset')
			}
		};
	}

// components/article-lede-photo.html

	function articleLedePhoto(e) {
		this.element = e;

		this.want = function () {
			return true;
		}

		this.ajaxArgs = {
			'input': {
				'article': $(this.element).data('article'),
				'slideshow': $(this.element).data('slideshow')
			}
		};


		this.start = function(mode){
			this.currentIndex = 0;

			this.slides = $(this.element).find('.article-lede-photo-slide');


			for(var i = 0; i < this.slides.length; i++) {
				$(this.element).find('.article-lede-photo-dots').append('<div class="article-lede-photo-dots-dot" data-index="' + i + '"></div>');
			}

			$(this.element).find('.article-lede-photo-dots-dot').click(
				function (instance) {
					return function () {
						instance.showIndex($(this).data('index'));
					};
				}(this)
			);

			this.watchResize();
			this.showIndex(0);
		};

		this.watchResize = function(){

			var w;

			w = $(this.element).parent().width();

			var canvaswidth = (w + 20) * this.slides.length;
			$(this.element).find('.article-lede-photo-canvas').width(canvaswidth);

			for(var i=0;i < this.slides.length;i++){
				$(this.slides[i]).width(w);
			}

			$(this.element).find('.article-lede-photo-canvas').css(
				{"margin-left": this.currentIndex * w * -1}
			);

			var dotsWidth = this.slides.length * 11;
			var dotsLeft = (w - dotsWidth) / 2;

			$(this.element).find('.article-lede-photo-dots').css( {
				'width': dotsWidth + 'px',
				'left': dotsLeft + 'px'
			});
		}

		this.showIndex = function(i){
			if(i < 0){
				i = this.slides.length - 1;
			}

			if(i > this.slides.length - 1){
				i = 0;
			}

			var w = $(this.element).width();

			$(this.element).find('.article-lede-photo-canvas').animate(
				{"margin-left": i * w * -1},1000
			);

			this.currentIndex = i;

			var slides = $(this.element).find('.article-lede-photo-slide');

			$(slides[i]).find('.image-wrapper').iowaInstance('lazy',true);

			var pagination = $(this.element).find('.article-lede-photo-dots-dot');
			$(this.element).find('.article-lede-photo-dots-dot-on').removeClass('article-lede-photo-dots-dot-on');
			$(pagination[i]).addClass('article-lede-photo-dots-dot-on');

		};


	}

// components/article-photo.html

	function articlePhoto(e) {
		this.element = e;
		this.ajaxArgs = jQuery.parseJSON($(this.element).html());

		this.ajaxArgs = {
			"input" : {
				"table" : $(this.element).data('table'),
				"row" : $(this.element).data('row'),
				"photo" : $(this.element).data('photo'),
				"width" : $(this.element).data('width')
			}
		};

		this.want = function () {
			return responsive.mobile == false && responsive.scale != 'tiny';
		}
	}

// components/article-poll.html

	function articlePoll(e) {
		this.element = e;

		this.ajaxArgs = jQuery.parseJSON($(this.element).html());

		this.want = function () {	
			return responsive.mobile == false && responsive.scale == 'large';
		}
		
		this.ready = function (response) {
			var xmldoc = jQuery.parseXML(response.result);
			
			var status = this.getXmlFirstChildData('status',xmldoc);
			if(status == 'ok') {
				var vote = this.getXmlFirstChildData('vote',xmldoc);
				if(vote) { // if we voted, show results
					var html 		= '';
					var id 			= this.getXmlFirstChildData('id', xmldoc);
					var question 	= this.getXmlFirstChildData('question', xmldoc);
					var total_votes = this.getXmlFirstChildData('total_votes', xmldoc);
					var options 	= xmldoc.getElementsByTagName('record');
					
					html = question;
					
					for(var i = 0; i < options.length; i++) {
						var row			= this.getXmlFirstChildData('row',options[i]);
						var sequence	= this.getXmlFirstChildData('sequence',options[i]);
						var option		= this.getXmlFirstChildData('option',options[i]);
						var vote_count	= this.getXmlFirstChildData('vote_count',options[i]);
						
						var percentage;
						
						if(total_votes) {
							percentage = sprintf('%02d', vote_count / total_votes * 100);
						}
						
						html += '<div style="margin-top:4px;"> ' + option + '<div class="article_poll_chart article_poll_chart_' + i + '" style="width:' + percentage + '%;">' + percentage + '%' + '</div></div>';
					}
					
					$(this.element).html(html).show();
				}
				else { // show the form
					var html 		= '';
					var id 			= this.getXmlFirstChildData('id', xmldoc);
					var question 	= this.getXmlFirstChildData('question', xmldoc);
					var total_votes = this.getXmlFirstChildData('total_votes', xmldoc);
					var options 	= xmldoc.getElementsByTagName('record');
					
					html = question;
					
					for(var i = 0; i < options.length; i++) {
						var row			= this.getXmlFirstChildData('row',options[i]);
						var sequence	= this.getXmlFirstChildData('sequence',options[i]);
						var option		= this.getXmlFirstChildData('option',options[i]);
						var vote_count	= this.getXmlFirstChildData('vote_count',options[i]);
						
						html += '<br><input type=radio value="' + row + '"> ' + option;
					}
					
					$(this.element).html(html).show();
					
					var instance=this;
					$(instance.element).find('input').change(function () {
						instance.vote(this.value);
					});
				}
			}
			else {
				alert('could embed poll ' + status);
			}
		}

		this.vote = function(option) {
			this.ajaxArgs.input.option = option;

			var ajaxComponents = [];
			ajaxComponents.push( {
				'id': this.element.id,
				'src': $(this.element).data('ajaxsrc'),
				'args': this.ajaxArgs.input
			});

			ajaxRequest(ajaxComponents);
		}
	
		this.getXmlFirstChildData = function(tag,xmldoc) {
		
			var node = xmldoc.getElementsByTagName(tag).item(0);
		
			if(node && node.firstChild) { 
				return unescape(node.firstChild.data);
			}
			else {
				return "";
			}
		}
	}
	
	/**
	*
	*  Javascript sprintf
	*  http://www.webtoolkit.info/
	*
	*
	**/
	
	sprintfWrapper = {
	
		init : function () {
	
			if (typeof arguments == "undefined") { return null; }
			if (arguments.length < 1) { return null; }
			if (typeof arguments[0] != "string") { return null; }
			if (typeof RegExp == "undefined") { return null; }
	
			var string = arguments[0];
			var exp = new RegExp(/(%([%]|(\-)?(\+|\x20)?(0)?(\d+)?(\.(\d)?)?([bcdfosxX])))/g);
			var matches = new Array();
			var strings = new Array();
			var convCount = 0;
			var stringPosStart = 0;
			var stringPosEnd = 0;
			var matchPosEnd = 0;
			var newString = '';
			var match = null;
	
			while (match = exp.exec(string)) {
				if (match[9]) { convCount += 1; }
	
				stringPosStart = matchPosEnd;
				stringPosEnd = exp.lastIndex - match[0].length;
				strings[strings.length] = string.substring(stringPosStart, stringPosEnd);
	
				matchPosEnd = exp.lastIndex;
				matches[matches.length] = {
					match: match[0],
					left: match[3] ? true : false,
					sign: match[4] || '',
					pad: match[5] || ' ',
					min: match[6] || 0,
					precision: match[8],
					code: match[9] || '%',
					negative: parseInt(arguments[convCount]) < 0 ? true : false,
					argument: String(arguments[convCount])
				};
			}
			strings[strings.length] = string.substring(matchPosEnd);
	
			if (matches.length == 0) { return string; }
			if ((arguments.length - 1) < convCount) { return null; }
	
			var code = null;
			var match = null;
			var i = null;
	
			for (i=0; i<matches.length; i++) {
	
				if (matches[i].code == '%') { substitution = '%' }
				else if (matches[i].code == 'b') {
					matches[i].argument = String(Math.abs(parseInt(matches[i].argument)).toString(2));
					substitution = sprintfWrapper.convert(matches[i], true);
				}
				else if (matches[i].code == 'c') {
					matches[i].argument = String(String.fromCharCode(parseInt(Math.abs(parseInt(matches[i].argument)))));
					substitution = sprintfWrapper.convert(matches[i], true);
				}
				else if (matches[i].code == 'd') {
					matches[i].argument = String(Math.abs(parseInt(matches[i].argument)));
					substitution = sprintfWrapper.convert(matches[i]);
				}
				else if (matches[i].code == 'f') {
					matches[i].argument = String(Math.abs(parseFloat(matches[i].argument)).toFixed(matches[i].precision ? matches[i].precision : 6));
					substitution = sprintfWrapper.convert(matches[i]);
				}
				else if (matches[i].code == 'o') {
					matches[i].argument = String(Math.abs(parseInt(matches[i].argument)).toString(8));
					substitution = sprintfWrapper.convert(matches[i]);
				}
				else if (matches[i].code == 's') {
					matches[i].argument = matches[i].argument.substring(0, matches[i].precision ? matches[i].precision : matches[i].argument.length)
					substitution = sprintfWrapper.convert(matches[i], true);
				}
				else if (matches[i].code == 'x') {
					matches[i].argument = String(Math.abs(parseInt(matches[i].argument)).toString(16));
					substitution = sprintfWrapper.convert(matches[i]);
				}
				else if (matches[i].code == 'X') {
					matches[i].argument = String(Math.abs(parseInt(matches[i].argument)).toString(16));
					substitution = sprintfWrapper.convert(matches[i]).toUpperCase();
				}
				else {
					substitution = matches[i].match;
				}
	
				newString += strings[i];
				newString += substitution;
	
			}
			newString += strings[i];
	
			return newString;
	
		},
	
		convert : function(match, nosign){
			if (nosign) {
				match.sign = '';
			} else {
				match.sign = match.negative ? '-' : match.sign;
			}
			var l = match.min - match.argument.length + 1 - match.sign.length;
			var pad = new Array(l < 0 ? 0 : l).join(match.pad);
			if (!match.left) {
				if (match.pad == "0" || nosign) {
					return match.sign + pad + match.argument;
				} else {
					return pad + match.sign + match.argument;
				}
			} else {
				if (match.pad == "0" || nosign) {
					return match.sign + match.argument + pad.replace(/0/g, ' ');
				} else {
					return match.sign + match.argument + pad;
				}
			}
		}
	}
	
	sprintf = sprintfWrapper.init;	

// components/article-related.html


	function subscribeFromArticleRelated (e) {
		this.element = $(e);

		var self = this;

		this.start = function(mode) {
			this.element.submit( function(e) {
				e.preventDefault();

				var endpoint = '/pw/email-subscriptions/index.html';
				endpoint += '?email=' + encodeURIComponent(self.element.find('input[name="email"]').val());

				var listIds = [];
				var lists = self.element.find('input[type=checkbox]:checked');
				for(var i = 0; i < lists.length; i++) {
					listIds.push($(lists[i]).val());
					endpoint += '&list-' + $(lists[i]).val() + '=1'
				}

				document.location.href= endpoint;
			});
		}
	}

	function articleRelated(elem) {
		this.element = elem;

		this.ajaxArgs = {
			"input" : {
				"article" : $(this.element).data('article'),
				"try-photo" : $(this.element).data('try-photo')
			}
		};

		this.want = function() {
			return true;
		};

		this.start = function(mode) {
			if(mode == 'ajaxLoad') {
				$(this.element).show();
			}
		};
	}

// components/blogindex.html


	function blogIndex(e) {
		this.element = e;
		this.row = $(this.element).data('row');
		this.count = $(this.element).data('count');
		this.headlinesOnly = $(this.element).data('headlines-only');
		this.nobullets = $(this.element).data('nobullets');
		this.json = null;
		
		this.getAjaxArgs = function () {
			var args = { 
				input: {
					row: this.row,
					count: this.count 
				}
			}
			return args;			
		};		
		
		this.ready = function (response) {
			var json = jQuery.parseJSON(response.result);
			this.json = jQuery.parseJSON(json.feed);
		};
				
		this.start = function(mode) {
			if(mode === 'ajaxLoad') {
				if(this.json && this.json.posts) {
					var markup = '';
					if(!this.nobullets) {
						markup += '<ul class="subtopic-recent-headlines-home-list">';
					}
					for(i = 0; i < this.json.posts.length && i < this.count; i++) {
						if(!this.nobullets) {
							markup += '<li>';
						}
						markup += '<div class="right-column-blogs-post">';
						if(!this.headlinesOnly) {
							markup += this.json.posts[i].author.name + '<br>';
						}
						markup += '<a href="'+this.json.posts[i].url+'">'+this.json.posts[i].title + '</a>';
						if(!this.headlinesOnly) {
							markup += '<br>' + this.json.posts[i].excerpt;
						}
						markup += '</div>';
						if(!this.nobullets) {
							markup += '</li>';
						}

					}
					if(!this.nobullets) {
						markup += '</ul>';
					}
					$(this.element).html(markup);
				}
				else {
					$(this.element).html('Visit blog to see recent posts.');
				}
			}
		};
	}


// components/bookshelf-popin.html

	function bookshelfSubscribe() {
		var email = $('#bookshelf_email').val();
		if(email != 'Email address') {
			document.location.href='/pw/email-subscriptions/index.html?list-3=1&address=' + encodeURIComponent(email)
		}
		else {
			alert('please enter your email address');
		}
	}
	
	function bookShelf(e) {
		this.element = e;
		
		this.start = function(mode) {
			params = getQueryStringParams();

			var rateLimit = getCookie('booshelfpopin');
			var inchildrens = ($(this.element).data('topic') == 4);
			var newsletter = params['utm_source'] == 'Publishers+Weekly';

			if(inchildrens && !rateLimit && !newsletter) {
				setCookie('booshelfpopin','1');
				$('.bookshelf-close').click(
					function(instance) { 
						return function(e) {
							$(instance.element).hide("slide", { direction: "right" }, 1000)
						}
					}(this)
				);
				$(this.element).show("slide", { direction: "right" }, 1000)
			}
		};
		
		this.stop = function() {
		};
	}

// components/buy_box.html

	var pendingdismiss = null;

	function dismissUnlessEnter(target, triggerer) {
		$(target).mouseenter(function(e) {
			if(pendingdismiss) {
				window.clearTimeout(pendingdismiss);
				pendingdismiss = null;
				$(target).unbind('mouseenter');
				$(triggerer).unbind('mouseleave');
			}
		});

		pendingdismiss = window.setTimeout(function() {
			$(target).fadeOut(500);
			pendingdismiss = null;
		},500);

	}

// components/chldrns-slidein.html

	function childrnsSlidein(e) {
		this.element = e;

		this.start = function(mode) {
			var params = getQueryStringParams();

			var rateLimit = getCookie('chldrns-slidein');
			var inchildrens = ($(this.element).data('topic') == 4);
			var newsletter = params['utm_source'] == 'Publishers+Weekly';
			var force = params['utm_source'] == 'childrens';
			var want = (responsive.scale !== 'small');

			if(force || (!rateLimit && inchildrens && want)) {
				setCookie('chldrns-slidein','1');
				$('.childrns-slidein-close').click(
					function(instance) {
						return function(e) {
							//$(instance.element).hide("slide", { direction: "right" }, 250)
							$(instance.element).hide();
						}
					}(this)
				);
				$(this.element).show();
			}
		};

		this.stop = function() {
		};
	}

// components/editing.html


	function inPlaceEdit(e) {
		this.element = e;

		this.ajaxArgs = {
			'input': {
				'path': $(this.element).data('path')
			}
		};

		this.want = function () {
			if(getCookie('credentials-admin') && responsive.mobile == false && responsive.scale == 'large') {
				return true;
			}
			else {
				return false;
			}
		}

		this.start = function (mode) {
			$(this.element).fadeIn();
		}

		if(responsive.mobile == false) {
			$( "#preview_date" ).datepicker();
		}
	}

	function showEdit() {
		$('#edit-on').hide();
		$('#edit-off').show();

		$('.featured-post-list-item').css({'min-height':'300px','min-width':'300px'});

		$('.editing-placeholder').show();
		$('.editing').show();

		$('.editing').each(function() {
			//$(this).parent().addClass('editing-border');
			//var pp = $(this).parent().offset();
			//var w = $(this).parent().width();
			//var h = $(this).parent().height();

			//$(this).parent().append('<div class="editing-border" style="top:' + 0 + 'px;left:' + 0 + 'px;width:' + (w - 8) + 'px;height:' + (h - 8) + 'px;"></div>');

			//$(this).offset({ top: pp.top, left: pp.left});
		});
	}

	function hideEdit() {
		$('.editing-border').remove();
		//$('.editing').parent().removeClass('editing-border');
		$('#edit-off').hide();
		$('#edit-on').show();
		$('.editing-placeholder').hide();
		$('.editing').hide();
	}

	function closeEdit() {
		$('.preview').hide();
	}

	// link sets

	function editLinkSetData(link_set,format,anchor) {
		var container_class = $(anchor).parent().attr('class');

		setCookie('link-set-edit',format);
		setCookie('link-set-edit-container-class',container_class);

		var url = '/iowa-edit/edit-link-set.html?link_set=' + link_set + '&format=' + format;
		$('#edit-dialog').dialog( { title:'Editing ' + link_set, width: 900, height: 650, close: function(event, ui) { document.location.href=document.location.href } } );
		$('#edit-dialog-iframe').attr('src','');
		$('#edit-dialog-iframe').attr('src',url);
	}

	// edit row

	function editRow(table, row) {
		var url = '/iowa-edit/' + table + '/record.html?record=' + row;

		$('#edit-dialog').dialog( { title:'Edit Link Set', width: 900, height: 700 } );
		$('#edit-dialog-iframe').attr('src',url);
	}

	function getLinkSetFormat(id) {
		var format = $('#' + id + ' .link-set-item-format').html();
		format = format.replace(/^<!--/,'');
		format = format.replace(/-->$/,'');
		return format;
	}

// components/email-childrens-podcast.html

	function submitChildrensPodcastBullshit() {
		var email = $('#childrenspodcastemail').val();
		if(email && email != 'Email address') {
			var params = 'proc=mailchimp_signup&email=' + email + '&list=85652eeac3';
			
			$.ajax({
				type: "POST",
				url: '/pw/ajax.xml',
				data: params,
				dataType: "xml",
				success: function(xml) {
					var status = getXmlFirstChildData('status',xml);
					if(status == 'ok') {
						$('#childrenspodcastcontainer').html($('#childrenspodcastcontainer').data('done'));
					}
					else {
						$('#childrenspodcasterror').html(status);
					}
				},
				error: function() {
					alert('signup could not contact server');
				}
			});
		}
		else {
			$('#childrenspodcasterror').html('Please supply an email address');
		}
		
		return false;
	}

// components/exit-interstitial.html


	function pageExitInterstitial(elem) {
		this.element = $(elem);

		var self = this;

		this.didit = false;
		this.lastY = 0;

		this.start = function () {
			/*
			$('#exit-action').click(function (e) {
				e.stopPropagation();
				e.preventDefault();
				self.subscribe();
			});
			*/

			$('body').mousemove( function (e) {
				if (e.pageY < 20) {
					if (e.pageY && e.pageY < self.lastY) {
						if (!self.didit && !$.cookie('exit-action')) {

							$.cookie('exit-action','1',{
								path: '/',
								expires: 1
							});

							++self.didit;
							$('.exit-closer').click(function (e) {
								$('#exit-backdrop').hide();
							});

							$('#exit-backdrop').show();
							$('#exit-backdrop').click(function (e) {
								if (e.target === this) {
									$(this).hide();
								}
							});
						}
					}
					self.lastY = e.pageY;
				}
				else {
					self.lastY = 0;
				}
			});
		};

		this.stop = function () {

		};

		this.subscribe = function() {
			$.cookie('exit-action','1',{
						path: '/',
						expires: 365
					});
			$('#exit-backdrop').hide()
		};
	}

// components/header.html

	function header(e) {
		this.element = e;

		this.start = function(mode) {
			if(!paperCopy) {
				$(window).bind('resize',
					function (instance) {
						return function (e) {
							instance.handleResize()
						}
					}(this)
				);

				this.handleResize();
			}
		};

		this.handleResize = function() {
			var container = $(this.element).parent().width();
			if(container < 860) {
				$(this.element).find('.search').hide();
				$('.search-button').hide();
				$('.icon-searchsmall').show();
			}
			else {
				$(this.element).find('.search').show();
				$('.search-button').show();
				$('.icon-searchsmall').hide();
			}

			if(container < 650) {
				$(this.element).find('.gotomenu').hide();
			}
			else {
				$(this.element).find('.gotomenu').show();
			}

		};
	}

	function clearDefault(elem) {
		if(elem.value == 'Search Publishers Weekly') {
			elem.value='';
		}
		if(elem.value == 'Email address') {
			elem.value='';
		}
		if(elem.value == 'Enter email address') {
			elem.value='';
		}
	}

// components/home-boom-box.html

	function homeBoomBox(e) {
		this.element = e;
				
		this.position = $(this.element).data('position');
		this.topic = $(this.element).data('topic');
		this.subtopic = $(this.element).data('subtopic');
		this.reviewCategory = $(this.element).data('reviewCategory');
		this.bestsellerCategory = $(this.element).data('bestsellerCategory');
		this.page = $(this.element).data('page');
		
		this.initialized = false;

		this.ajaxArgs = {
			"input" : { 
				"position": this.position,
				"topic": this.topic,
				"subtopic": this.subtopic,
				"reviewCategory": this.reviewCategory,
				"bestsellerCategory": this.bestsellerCategory,
				"page": this.page
			}
		};
		
		this.want = function() {
			return(responsive.scale !== 'small');
		};
		
		this.watchScale = function(scale) {
			if(scale === 'small') {
				$(this.element).hide();
			}
			else {
				$(this.element).show();
			}
		};
	}

// components/home-featured.html

	function watchContentHeight(e) {
		this.element = e;

		this.start = function(mode) {
			this.stop();
			$(window).bind('resize.' + this.element.id,
				function (instance) {
					return function (e) {
						instance.handleResize();
					}
				}(this)
			);
			this.handleResize();

		};

		this.stop = function() {
			$(window).unbind('resize.' + this.element.id);
		};

		this.handleResize = function() {
			var max = 0;

			//console.log('left: ' + $('#home-featured-left').outerHeight());
			//console.log('right: ' + $('#home-featured-right').outerHeight());

			if(responsive.scale != 'small') {
				if($('#home-featured-left').outerHeight() > $('#home-featured-right').outerHeight()) {
					$(this.element).innerHeight($('#home-featured-left').outerHeight());
				}
				else {
					$(this.element).innerHeight($('#home-featured-right').outerHeight());
				}
			}
			else {
				$(this.element).innerHeight($('#home-featured-left').outerHeight() + $('#home-featured-right').outerHeight());
			}
		};

	}

// components/huffpo-popin.html

	function tipsheetSubscribe() {
		var email = $('#huffpo_email').val();
		if(email != 'Email address') {
			document.location.href='/pw/email-subscriptions/index.html?list-6=1&address=' + encodeURIComponent(email)
		}
		else {
			alert('please enter your email address');
		}
	}
	
	function huffPo(e) {
		this.element = e;
		
		this.start = function(mode) {
			params = getQueryStringParams();
			
			if(params['utm_source'] == 'huffpo') {
				$('.huffpo-close').click(
					function(instance) { 
						return function(e) {
							$(instance.element).hide("slide", { direction: "right" }, 1000)
						}
					}(this)
				);
				$(this.element).show("slide", { direction: "right" }, 1000)
			}
		};
		
		this.stop = function() {
		};
	}

// components/index-archive-browse.html

	function archiveGo() {
		var year = $("#archiveYears option:selected").text();
		var month = $("#archiveMonths option:selected").text();
		if(year && month) {
			var path;
			if(responsive.hijax) {
				path = responsive.currentLocationHash.split('?')[0];
				var pathArray = path.split('/'); 
				if(pathArray[0] == '#path') {
					pathArray.splice(0,1);
				}
				path = '/' + pathArray.join('/');
			}
			else {
				var uri = parseUri(document.location.href.toLowerCase());

				path = document.location.href.split('?')[0];
				path = path.split('#')[0];
			}
			
			loadPage(path + '?year=' + year + '&month=' + month);
		}
	}
	
	function resetMonths(menu) {
		var year = $("#archiveYears option:selected").text();
		$('#archiveBrowse').iowaInstance('resetMonths',year)
		var month = $("#archiveMonths option:selected").text();
		if(year && month) {
			archiveGo();
		}
	}
	
	function archiveBrowse(e) {
		this.element = e;
		this.year = $(this.element).data('year');
		this.month = $(this.element).data('month');
		
		this.resetMonths = function(year) {
			var months = null;
			for(var i = 0; i < this.dates.length; i++) {
				if(year == this.dates[i].year) {
					months = this.dates[i].months;
				}
			}
			$('#archiveMonths').hide().empty();
			$('#archiveMonths').append('<option value="" selected>select month</option>');
			if(months) {
				for(var i = 0; i < months.length; i++) {
					var markup = '<option value="' + months[i] + '"';
					if(this.month == months[i]) {
						markup += ' selected';
					}
					markup += '>'+months[i]+'</option>';
					$('#archiveMonths').append(markup);
					$('#archiveMonths').show();
				}
			}
		};
		
		this.start = function(mode) {
			if($('#archiveBrowseJSON').html()) {
				$('#archiveYears').append('<option value="">select year</option>');
				this.dates = jQuery.parseJSON($('#archiveBrowseJSON').html());
				var months = null;
				for(var i = 0; i < this.dates.length; i++) {
					var markup = '<option value="' + this.dates[i].year + '"';
					if(this.year == this.dates[i].year) {
						markup += ' selected';
					}
					markup += '>'+this.dates[i].year+'</option>';
					$('#archiveYears').append(markup);
				}
				
				this.resetMonths(this.year);	
			}
		}
	}

// components/index-featured.html

	function featuredArticles(e) {
		this.element = e;

		this.singleColumn = false;

		this.start = function(mode) {

			var left = $('#featured-articles-left').find('div');
			var right = $('#featured-articles-right').find('div');

			if(!left.length && right.length) {
				$(this.element).hide();
			}

			if(!left.length) {$('#featured-articles-left').hide();}
			if(!right.length) {$('#featured-articles-right').hide();}

			$(window).bind('resize',
				function (instance) {
					return function (e) {
						instance.handleResize()
					}
				}(this)
			);

			this.handleResize();
		};

		this.handleResize = function() {
			var container = $(this.element).parent().width();
			if(container < 550) {
				if(!this.singleColumn) {
					this.singleColumn = true;
					$('#featured-articles').hide();
					$('#featured-articles-single-column').append($('#featured-articles-left'));
					$('#featured-articles-left').removeClass('featured-articles-left');
					$('#featured-articles-left').addClass('featured-articles-left-inline');
					$('#featured-articles-single-column').append('<div class="featured-row-separator"></div>');
					$('#featured-articles-single-column').append($('#featured-articles-right'));
					$('#featured-articles-right').removeClass('featured-articles-right');
					$('#featured-articles-right').addClass('featured-articles-right-inline');
					$('#featured-articles-single-column').append($('#featured-articles-upsell'));
					$('#featured-articles-upsell').removeClass('featured-articles-upsell');
					$('#featured-articles-upsell').addClass('featured-articles-upsell-inline');
				}
			}
			else {
				if(this.singleColumn) {
					this.singleColumn = false;
					$('#featured-articles').append($('#featured-articles-right'));
					$('#featured-articles-left').removeClass('featured-articles-left-inline');
					$('#featured-articles-left').addClass('featured-articles-left');
					$('#featured-articles-left').append($('#featured-articles-upsell'));
					$('#featured-articles-upsell').removeClass('featured-articles-upsell-inline');
					$('#featured-articles-upsell').addClass('featured-articles-upsell');
					$('#featured-articles').append($('#featured-articles-left'));
					$('#featured-articles-right').removeClass('featured-articles-right-inline');
					$('#featured-articles-right').addClass('featured-articles-right');
					$('#featured-articles-single-column').empty();
					$('#featured-articles').show();
				}
			}
		};
	}

// components/jobzone-slider-rss.html

	function jobzoneSlider(e) {
		this.element = e;
		this.slides = [];
		this.running = false;
		this.currentIndex = -1;

		this.want = function() {
			return responsive.scale != 'small';
		};

		this.ready = function(response) {
			$(this.element).empty().append(response.result);
			this.slides = $(this.element).find('div');
			$(this.element).find('.nextlink').click(
				function(instance) {
					return function(e) {
						e.preventDefault();
						instance.nextSlide();
					}
				}(this)
			);
		};

		this.start = function(mode) {
			if(this.slides.length) {
				this.running = true;
				this.nextSlide();
			}
		};

		this.stop = function() {
			if(this.running) {
				window.clearTimeout(this.running);
				this.running = undefined;
			}
		};

		this.nextSlide = function() {
			if(this.currentIndex < this.slides.length -1) {
				if(this.currentIndex > -1) {
					$(this.slides[this.currentIndex]).hide('slide',{direction:'left'},1000);
				}
				++this.currentIndex;
				$(this.slides[this.currentIndex]).show('slide',{direction:'right'},1000);

				/*
				this.running = window.setTimeout(
					function(instance) {
						return function() {
							instance.nextSlide();
						}
					}(this),5000
				);
				*/
			}
			else {
				this.running = undefined;
				loadPage('http://jobzone.publishersweekly.com');
			}
		};
	}

// components/leaderboard.html

	function leaderboard(e) {
		this.element = e;
				
		this.position = $(this.element).data('position');
		this.topic = $(this.element).data('topic');
		this.subtopic = $(this.element).data('subtopic');
		this.reviewCategory = $(this.element).data('reviewCategory');
		this.bestsellerCategory = $(this.element).data('bestsellerCategory');
		this.page = $(this.element).data('page');
		
		this.initialized = false;

		this.ajaxArgs = {
			"input" : { 
				"position": this.position,
				"topic": this.topic,
				"subtopic": this.subtopic,
				"reviewCategory": this.reviewCategory,
				"bestsellerCategory": this.bestsellerCategory,
				"page": this.page
			}
		};
		
		this.want = function() {
			return(responsive.scale === 'large');
		};
	}

// components/login-dialog.html

	/*
	if(getCookie('credentials')) {
		_gaq.push(['_setCustomVar', 1, 'subscriber', 'yes', 1]);
	}
	else {
		_gaq.push(['_setCustomVar', 1, 'subscriber', 'no', 1]);
	}

	_gaq.push(['_trackPageview']);
	*/


	function ajaxValidateLogin(cb) {
		var params = 'proc=validate_credentials';
		$.ajax({
			type: "POST",
			url: '/pw/ajax.xml',
			data: params,
			dataType: "xml",
			success: function(xml) {
				var status = getXmlFirstChildData('status',xml);
				var subaccountcode = getXmlFirstChildData('subaccountcode',xml);
				var encryptedCustomerId = getXmlFirstChildData('encryptedcustomerid',xml);

				if(status == 'ok') {
					setCookie('validated',1);
					setCookie('shadow_login',1);
					if(subaccountcode === 'A' || subaccountcode === 'C') {
						setCookie('archive-access-ok','1',7);
					}
					else{
						deleteCookie('archive-access-ok');
					}
					
					if(cb) {
						cb(encryptedCustomerId);
					}
				}
				else {
					setCookie('validated',2);

					if(cb) {
						cb(encryptedCustomerId);
					}
				}

				logInChanged(true);
			},
			error: function() {
				alert('Login validation could not contact server');
			}
		});
	}

	function ajaxInstitutionalLogin(cb) {
		var params = 'proc=validate_institution';
		$.ajax({
			type: "POST",
			url: '/pw/ajax.xml',
			data: params,
			dataType: "xml",
			success: function(xml) {
				var status = getXmlFirstChildData('status',xml);

				if(status == 'ok') {
					setCookie('validated',1);
					var credentials = getXmlFirstChildData('credentials',xml);
					var email = getXmlFirstChildData('account_email',xml);
					var group = getXmlFirstChildData('group',xml);
					var subaccountcode = getXmlFirstChildData('subaccountcode',xml);
					var encryptedCustomerId = getXmlFirstChildData('encryptedcustomerid',xml);
					setCookie('credentials',credentials,7);
					if(subaccountcode === 'A' || subaccountcode === 'C') {
						setCookie('archive-access-ok','1',1);
					}
					logInChanged();
					_gaq.push(['_setCustomVar', 2, 'institution', email, 1]);
					if(group) {
							_gaq.push(['_setCustomVar', 3, 'group', group, 1]);
					}
					if(cb) {
						cb(encryptedCustomerId);
					}
				}
				else {
					cb();
				}
			},
			error: function() {
				alert('Login validation could not contact server');
			}
		});
	}

	function logout() {
		deleteCookie('credentials');
		logInChanged();
	}

	function openLoginDialog() {
		$('#loginDialog').dialog({'width':'80%','modal': true,'title':'Please Log In'});
	}

	function ajaxLogin(form) {
		document.getElementById('login_dialog_errors').innerHTML = 'logging in.';

		var params = $('#' + form).serialize();

		$.ajax({
			type: "POST",
			url: '/pw/ajax.xml',
			data: params,
			dataType: "xml",
			success: function(xml) {
				var status = getXmlFirstChildData('status',xml);
				if(status == 'ok') {
					var credentials = getXmlFirstChildData('credentials',xml);
					var subaccountcode = getXmlFirstChildData('subaccountcode',xml);
					var encryptedCustomerId = getXmlFirstChildData('encryptedcustomerid',xml);

					setCookie('credentials',credentials, 7);
					if(subaccountcode === 'A' || subaccountcode === 'C') {
						setCookie('archive-access-ok','1',1);
					}
					setCookie('validated',1);
					$('#loginDialog').dialog('close');
					logInChanged();
					olytics.confirm(encryptedCustomerId); 
				}
				else {
					if(document.getElementById('login_dialog_text') && document.getElementById('login_dialog_error_text')) {
						document.getElementById('login_dialog_errors').innerHTML = '';
						document.getElementById('login_dialog_text').style.display = 'none';
						document.getElementById('login_dialog_error_text').style.display = '';
					}
					else {
						alert('Login error ' + status);
					}
				}
			},
			error: function() {
				alert('Login could not contact server');
			}
		});
	}

	/*
	function ajaxValidateLogin() {
		var params = 'proc=validate_credentials';
		$.ajax({
			type: "POST",
			url: '/pw/ajax.xml',
			data: params,
			dataType: "xml",
			success: function(xml) {
				var status = getXmlFirstChildData('status',xml);
				var subaccountcode = getXmlFirstChildData('subaccountcode',xml);
				if(status == 'ok') {
					setCookie('validated',1);
					if(subaccountcode === 'A' || subaccountcode === 'C') {
						setCookie('archive-access-ok','1',1);
					}
				}
				else {
					deleteCookie('credentials');
				}

				logInChanged();
			},
			error: function() {
				alert('Login validation could not contact server');
			}
		});
	}
	*/


// components/mark-popular.html

	function markPopular(container) {
		this.element = container;
		this.done = false;
		
		this.ready = function (result) {
		};
		
		this.start = function (mode) {
			if(!this.done) {
				this.done = true;
				$.ajax({
					url: '/pw/json/mark-popular.json?table='+$(this.element).data('table')+'&row='+$(this.element).data('row'),
					dataType: 'json',
					success: function(json){
					},
				});
			}
		}
	}

// components/navigation-json.html

	function navigation(e) {
		this.element = e;
		this.json = undefined;
		this.mode = undefined;
		this.section = undefined;
		this.subsection = undefined;

		this.want = function() {
			return true;
		};

		this.ready = function(response) {
			this.json = jQuery.parseJSON(response.result);
		};

		this.start = function(mode) {
			if(mode === 'ajaxLoad') {
				$(window).bind('resize.navigation',
					function (instance) {
						return function (e) {
							instance.handleResize()
						}
					}(this)
				);
				var loc = parseUri(document.location.href);
				this.setState(loc.path);
				this.handleResize();
			}
		};

		this.stop = function() {
			$(window).unbind('resize.navigation');
		};

		this.watchLocationHash = function(location) {
			if(this.json) {
				this.setState(location);
			}
		};

		this.setState = function(location) {
			if(location == '/') {
				location = '/pw/home/index.html';
			}

			this.section = undefined;
			this.subsection = undefined;
			$('.navigation-tab-on').removeClass('navigation-tab-on');
			$('.navigation-subnav-item-on').removeClass('navigation-subnav-item-on');
			for(var i = 0; i < this.json.sections.length; i++) {
				var p = this.json.sections[i].url;
				p = p.replace('index.html','');
				var re = new RegExp('^' + p);
				if(re.test(location)) {
					this.section = this.json.sections[i];
					if(this.json.sections[i].subsections) {
						for(var j = 0; j < this.json.sections[i].subsections.length; j++) {
							var pp = this.json.sections[i].subsections[j].url;
							pp = pp.replace('index.html','');
							re = new RegExp('^' + pp);
							if(re.test(location)) {
								this.subsection = this.json.sections[i].subsections[j];
							}
						}
					}
				}
			}

			if(this.mode === 'standard') {
				this.standard();
				if(this.section) {
					$('#' + this.section.id).addClass('navigation-tab-on');
					this.showSubsections(this.section.subsections);
				}
				if(this.subsection) {
					$('#' + this.subsection.id).addClass('navigation-subnav-item-on');
				}
			}
			else {
				this.pulldown();
			}

		};

		this.standard = function() {
			if(this.json) {

				this.mode = 'standard';
				var subsections = [];

				var html = '<div id="navigation-tabs" role="navigation" aria-label="Main">';
				for(var i = 0; i < this.json.sections.length; i++) {
					html += '<div id="'+this.json.sections[i].id+'" class="navigation-tab" data-href="'+this.json.sections[i].url+'">'+this.json.sections[i].name+'</div>';
					if(i < this.json.sections.length - 1) {
						html += '<div class="navigation-separator" aria-hidden="true"><img src="/images/nav-separator.png" width="1" height="31" border="0"></div>';
					}

					//if(this.json.sections[i].url === $(this.element).data('path')) {
					//	subsections = this.json.sections[i].subsections;
					//}
				}
				html += '<div class="navigation-filler"></div>'
				html += '</div>';

				$(this.element).html(html);

				if(this.section) {
					$('#' + this.section.id).addClass('navigation-tab-on');
					this.showSubsections(this.section.subsections);
					if(this.section.subnav_text) {
						$(this.element).find('#navigation-subnav-container').remove();
						$(this.element).append('<div class="subnav-text">' + this.section.subnav_text + '</div>');
						$(this.element).append('<div class="subnav-text-medium">' + this.section.subnav_text_medium + '</div>');
					}
				}
				if(this.subsection) {
					$('#' + this.subsection.id).addClass('navigation-subnav-item-on');
				}

				$(this.element).find('.navigation-tab').click(
					function(instance) {
						return function(e) {
							loadPage($(this).data('href'));
						}
					}(this)
				);
			}
		};

		this.pulldown = function() {
			if(this.json) {

				this.mode = 'pulldown';
				//output the heading, back, output topics if not data('the-topic') otherwise output subtopics

				var html = '';

				html = '<div id="navigation-pulldown-container">';
				html += '<div id="navigation-pulldown-buttons">';
				html += '<div id="navigation-pulldown-show" class="nav-button"><img src="/images/mobile-showtopics.png" width=94 height=23 border=0></div>';
				html += '<div id="navigation-pulldown-full-site" class="nav-button"><img src="/images/mobile-fullsite.png" width=58 height=23 border=0></div>';
				html += '</div>';
				html += '</div>';
				html += '<div id="navigation-pulldown">';
				if(!this.section || this.section.id === 'home' || !this.section.subsections) {
					for(var i = 1; i < this.json.sections.length; i++) {
						html += '<div id="'+this.json.sections[i].id+'" class="navigation-pulldown-item" data-href="'+this.json.sections[i].url+'">' + this.json.sections[i].name + '</div>';
					}
				}
				else {
					if(this.subsection) {
						html += '<div id="'+this.section.id+'" class="navigation-pulldown-item" data-href="'+this.section.url+'">back to ' + this.section.name + '</div>';
					}
					else {
						html += '<div id="'+this.json.sections[0].id+'" class="navigation-pulldown-item" data-href="'+this.json.sections[0].url+'">' + this.json.sections[0].name + '</div>';
					}
					if(this.section.subsections) {
						for(var i = 0; i < this.section.subsections.length; i++) {
							html += '<div id="'+this.section.subsections[i].id+'" class="navigation-pulldown-item" data-href="'+this.section.subsections[i].url+'">' + this.section.subsections[i].name + '</div>';
						}
					}
				}
				html += '</div>';

				$(this.element).html(html);

				$('#navigation-pulldown-show').click(
					function(e) {
						$('#navigation-pulldown').toggle();
					}
				);

				$('#navigation-pulldown-full-site').click(
					function(e) {
						disableResponsive('large');
					}
				);

				$(this.element).find('.navigation-pulldown-item').click(
					function(instance) {
						return function(e) {
							loadPage($(this).data('href'));
						}
					}(this)
				);
			}
		};

		this.showSubsections = function(subsections) {
			var html = '';
			if(subsections) {
				html += '<div id="navigation-subnav-container" aria-hidden="true">';
				for(var i = 0; i < subsections.length; i++) {
					html += '<div id="'+subsections[i].id+'" class="navigation-subnav-item" data-href="'+subsections[i].url+'">'+subsections[i].name+'</div>';

					if(i < subsections.length - 1) {
						html += '<div class="navigation-subnav-item-divider">|</div>';
					}
				}
				html += '</div>';
			}
			$(this.element).find('#navigation-subnav-container').remove();
			$(this.element).append(html);

			$(this.element).find('.navigation-subnav-item').click(
				function(instance) {
					return function(e) {
						loadPage($(this).data('href'));
					}
				}(this)
			);

		};

		this.handleResize = function() {
			if(this.json) {
				var container = $(this.element).parent().width();

				if(container < 1020) {
					var slop = 1020 - container;
					pad = 20 - (slop / 10 / 2);
					if(pad > 4) {
						$(this.element).find('.navigation-tab').css( { 'padding-left': pad + 'px', 'padding-right': pad + 'px' } );
						if(this.mode != 'standard') {
							this.standard();
						}
					}
					else {
						if(this.mode != 'pulldown') {
							this.pulldown();
						}
					}
				}
				else {
					$(this.element).find('.navigation-tab').css( { 'padding-left': 21 + 'px', 'padding-right': 20 + 'px' } );
					if(this.mode != 'standard') {
						this.standard();
					}
				}
			}
		};
	}

// components/nielsen-submenu.html

	function selectNielsenCategory(nickname) {
		loadPage('/pw/nielsen/'+nickname+'.html');
	}

// components/nielsen_stat_details.html

	function showNielsenDetails(rec){
		$('#nielsen_stat_details_' + rec).dialog();
	}


// components/nielsen_stats.html

	function toggleNielsenStats(id) {
		$('#' + id).toggle();
	}

// components/podcast_player.html

	function podcastPlayer(e) {
		this.element = e;
		this.init = false;
		this.media = $(this.element).data('media');
		
		this.start = function(mode) {
			if(!this.init) {
				this.init = true;
				$("#jquery_jplayer_1").jPlayer({
					ready: function(instance) { 
						return function () {
							$(this).jPlayer("setMedia", {
								mp3: instance.media
							});
						}
					}(this),
					swfPath: "/JavaScriptShared/jplayer",
					supplied: "mp3",
					errorAlerts: false,
					warningAlerts: false
				});

			}
		};
	}

// components/popin-bestbooksstar.html

	function BBStarPopin(e) {
		this.element = e;

		this.start = function(mode) {
			var params = getQueryStringParams();

			var loggedIn = getCookie('credentials');
			var rateLimit = getCookie('bbstar');
			var force = params['utm_source'] == 'bbstar';
			var want = (responsive.scale !== 'small');

			if(force || (want && !loggedIn && !rateLimit)) {
				setCookie('bbstar','1');
				$('.bbstar-close').click(
					function(instance) {
						return function(e) {
							//$(instance.element).hide("slide", { direction: "right" }, 1000)
							$(instance.element).hide()
						}
					}(this)
				);
				$(this.element).show();
			}
		};

		this.stop = function() {
		};
	}

// components/print_issue_nav.html

	function issueNav(url) {
		if(url) {
			loadPage(url);
		}
	}

// components/related-books-slider.html

	function relatedBooksSliderVert(e) {
		this.element = $(e);
		var self = this;

		this.width = 140;

		this.getAjaxArgs = function () {
			var args = {
				input: {
					code: this.element.data('code')
				}
			}
			return args;
		};

		this.ready = function (response) {
			this.json = jQuery.parseJSON(response.result);
		};

		this.start = function(mode) {
			this.element.empty();
			if(mode === 'ajaxLoad') {
				if(this.json && this.json.related) {
					this.element.append('<div class="thumb-scroller-left"><img src="/images/arrow-large-white-up.png" width=46 height=25 border=0></div>');
					this.viewport = $('<div class="cover-flow-viewport">');
					this.canvas = $('<div class="cover-flow-canvas">');
					this.viewport.append(this.canvas);
					this.element.append(this.viewport);
					this.element.append('<div class="thumb-scroller-right"><img src="/images/arrow-large-white-down.png" width=46 height=25 border=0></div>');

					for(var i = 0; i < this.json.related.length; i++) {
						var review = this.json.related[i];
						var img = '<img src="https://www.publishersweekly.com/cover/'+review.code+'?w=204">';
						var cover = '<div class="cover-flow-item"><a href="'+review.code+'?permamore">'+img+'</a>'+review.title+'</div>';
						this.canvas.append(cover);
					}

					this.left = this.element.find('.thumb-scroller-left');
					this.right = this.element.find('.thumb-scroller-right');

					this.count = this.element.find('.cover-flow-item').length;
					if(this.element.data('orientation') !== 'vertical') {
						this.canvas.width(this.width * this.count);
					}
					this.element.css({opacity:1});

					self.doButtons();

					this.left.click(function(e) {
						self.move(1);
						self.doButtons();
					});

					this.right.click(function(e) {
						self.move(-1);
						self.doButtons();
					});

				}
			}
		};

		this.stop = function() {
			//this.left.off('click');
			//this.right.off('click');
		};

		this.doButtons = function() {
			setTimeout(function() {
				if(self.element.data('orientation') === 'vertical') {
					var currentTop = parseInt(self.canvas.css('margin-top'));
					var canvasHeight = parseInt(self.canvas.height());
					if(currentTop >= 0 ) {
						self.left.addClass('disabled');
					}
					else {
						self.left.removeClass('disabled');
					}

					if(canvasHeight <= (currentTop * -1) + 250) {
						self.right.addClass('disabled');
					}
					else {
						self.right.removeClass('disabled');
					}
				}
			},300);
		};

		this.move = function(direction) {

			if(this.element.data('orientation') === 'vertical') {
				var viewportHeight = this.viewport.height();
				var canvasHeight = this.canvas.height();
				var currentTop = parseInt(this.canvas.css('margin-top'));

				var p = 475;
				var nextPos = currentTop + (p * direction);
				if((nextPos * -1) < canvasHeight) {
					if(nextPos > 0) {
						nextPos = 0;
					}
					this.canvas.animate(
						{"margin-top": nextPos}, 250, function() {
							//self.element.find('img').trigger('DigitopiaLazy');
						}
					);
				}
			}
			else {
				var viewportWidth = this.viewport.width();
				var canvasWidth = this.canvas.width();
				var currentLeft = parseInt(this.canvas.css('margin-left'));

				var p = Math.floor(viewportWidth / 210) * 210;
				var nextPos = currentLeft + (p * direction);
				if((nextPos * -1) < canvasWidth) {
					if(nextPos > 0) {
						nextPos = 0;
					}
					this.canvas.animate(
						{"margin-left": nextPos}, 250,function() {
							//self.element.find('img').trigger('DigitopiaLazy');
						}
					);
				}
			}
		};

	}

// components/review-categories.html

	function reviewCategories(e) {
		this.element = e;
			
		this.start = function() {
			var path = document.location.href;
			path = document.location.href.split('?')[0];
			path = path.split('#')[0];
			$(this.element).find('a').each(
				function() {
					if($(this).attr('href') === path) {
						$(this).parent().addClass('submenu-on');
					}
				}
			);
		}
	}
	

// components/review_family.html

	function otherFormats(e) {
		this.element = e;
		
		var content = $('#review-single-other-format-block').html();
		if(content.match(/[a-z]/) == null) {
			$(this.element).hide();
		}
	}

// components/reviews_submenu.html

	function reviewSubmenu(e) {
		this.element = e;

		this.start = function() {
			var uri, path;
			if(responsive.hijax) {
				path = responsive.currentLocationHash.substring(5);
			}
			else {
				uri = parseUri(document.location.href);
				path = uri.path;
			}
			$(this.element).find('a').each(
				function() {
					if($(this).attr('href') === path) {
						$(this).addClass('on');
					}
				}
			);
		};
	}

// components/right-column-bestsellers.html

	function selectNielsenType(type) {
		$('#right-column-bestsellers').data('type',type);
		ajaxReload('#right-column-bestsellers');
	}
	
	function rightColumnBestsellers(e) {
		this.element = e;
		
		this.getAjaxArgs = function() { 
			return {
				'input': {
					'path': $(this.element).data('path'),
					'type': $(this.element).data('type')

				}
			}
		};
			
		this.want = function() {
			return true;
		};
		
	}

// components/right-column-blogs.html

	function rightColumnBlogs(e) {
		this.element = e;
		
		this.want = function() {
			return (responsive.scale === 'large');
		};
		
		this.start = function(mode) {
			if(mode === 'ajaxLoad') {
				ajaxLayer();
			}
		};
	}

// components/right-column-boom-box.html

	function rightColumnBoomBox(e) {
		this.element = e;
				
		this.position = $(this.element).data('position');
		this.topic = $(this.element).data('topic');
		this.subtopic = $(this.element).data('subtopic');
		this.reviewCategory = $(this.element).data('reviewCategory');
		this.bestsellerCategory = $(this.element).data('bestsellerCategory');
		this.page = $(this.element).data('page');
		this.wantScale = $(this.element).data('wantscale');
		
		this.initialized = false;

		this.ajaxArgs = {
			"input" : { 
				"position": this.position,
				"topic": this.topic,
				"subtopic": this.subtopic,
				"reviewCategory": this.reviewCategory,
				"bestsellerCategory": this.bestsellerCategory,
				"page": this.page
			}
		};
		
		this.want = function() {
			return(responsive.scale === this.wantScale);
		};
		
		this.watchScale = function(scale) {
			if(scale !== this.wantScale) {
				$(this.element).hide();
			}
			else {
				$(this.element).show();
			}
		};
	}

// components/right-column-childrens-sls.html

	function rightColumnChildrensSLS(e) {
		this.element = e;
		
		this.want = function() {
			return (responsive.scale === 'large');
		};
		
		this.start = function(mode) {
			if(mode === 'ajaxLoad') {
				ajaxLayer();
			}
		};
	}

// components/right-column-covid-19.html

	function rightColumnCovid19(e) {
		this.element = e;
		this.open = false;

		this.want = function() {
			return(responsive.scale === 'large');
		};

		this.start = function(mode) {
			if(mode === 'ajaxLoad') {
				$(this.element).find('h1').click(
					function(instance) {
						return function(e) {
							if(this.open) {
								$(instance.element).removeClass('open').find('ul').slideUp('fast');
								this.open = false;
							}
							else {
								$(instance.element).addClass('open').find('ul').slideDown('fast');
								this.open = true;
							}
						}
					}(this)
				);
			}
		}
	}

// components/right-column-featured-reviews.html

	function rightColumnFeaturedReviews(e) {
		this.element = e;

		this.current_starred_index = -1;
		this.starred_slideshow = null;

		this.want = function() {
			return true;
		};

		this.start = function(mode) {
			//console.log('rightColumnFeaturedReviews.start ' + mode);
			if(mode === 'ajaxLoad') {
				this.nextStarred(1,false);

				$('#right-column-featured-reviews-next').click(
					function (instance) {
						return function () {
							instance.starredPause();
							instance.nextStarred(1,true);
						};
					}(this)
				);

				$('#right-column-featured-reviews-previous').click(
					function (instance) {
						return function () {
							instance.starredPause();
							instance.nextStarred(-1,true);
						};
					}(this)
				);
			}
		};

		this.stop = function() {
			this.starredPause();
		};

		this.nextStarred = function(increment,manual) {
			starred = $('.right-column-reviews-slide');

			if(this.current_starred_index > -1) {
				var id = $(starred[this.current_starred_index]).attr('id');
				var div = document.getElementById(id);
				if(div) {
					div.style.display = 'none';
				}
			}

			this.current_starred_index += increment;

			if(this.current_starred_index < 0) {
				this.current_starred_index = starred.length - 1;
			}

			if(this.current_starred_index >= starred.length) {
				this.current_starred_index = 0;
			}

			var id = $(starred[this.current_starred_index]).attr('id');
			var div = document.getElementById(id);
			if(div) {
				div.style.display = '';
			}

			if(!manual) {
				this.starred_slideshow = window.setTimeout(
					function (instance) {
						return function () {
							instance.nextStarred(1,false)
						};
					}(this),
					3000
				);
			}
		}

		this.starredPause = function() {
			if(this.starred_slideshow) {
				this.starred_slideshow = window.clearTimeout(this.starred_slideshow);
			}
		}
	}

// components/right-column-popular.html

	function rightColumnPopular(e) {
		this.element = e;

		this.want = function() {
			return true;
		};
	}

// components/right-column-quick-links.html

	function rightColumnQuickLinks(e) {
		this.element = e;
		this.open = false;

		this.want = function() {
			return(responsive.scale === 'large');
		};

		this.start = function(mode) {
			if(mode === 'ajaxLoad') {
				$(this.element).find('h1').click(
					function(instance) {
						return function(e) {
							if(this.open) {
								$(instance.element).removeClass('open').find('ul').slideUp('fast');
								this.open = false;
							}
							else {
								$(instance.element).addClass('open').find('ul').slideDown('fast');
								this.open = true;
							}
						}
					}(this)
				);
			}
		}
	}

// components/right-column-roundup.html

	function rightColumnRoundup(e) {
		this.element = e;
		
		this.want = function () {
			return(responsive.scale === 'large');
		};
		
		this.ajaxArgs = {
			"input" : {
				"topic" : $(this.element).data('topic'),
				"subtopic" : $(this.element).data('subtopic'),
				"edition" : $(this.element).data('edition')
			}
		};
	}

// components/right-column-skyscraper.html

	function rightColumnSkyscraper(e) {
		this.element = e;
				
		this.position = $(this.element).data('position');
		this.topic = $(this.element).data('topic');
		this.subtopic = $(this.element).data('subtopic');
		this.reviewCategory = $(this.element).data('reviewCategory');
		this.bestsellerCategory = $(this.element).data('bestsellerCategory');
		this.page = $(this.element).data('page');
		
		this.initialized = false;

		this.ajaxArgs = {
			"input" : { 
				"position": this.position,
				"topic": this.topic,
				"subtopic": this.subtopic,
				"reviewCategory": this.reviewCategory,
				"bestsellerCategory": this.bestsellerCategory,
				"page": this.page
			}
		};
		
		this.want = function() {
			return(responsive.scale === 'large');
		};
	}

// components/right-column-twitter.html

	function rightColumnTwitter(e) {
		this.element = e;
		
		this.want = function () {
			return(responsive.scale === 'large');
		};
		
		this.ajaxArgs = {
			"input" : {
				"path" : $(this.element).data('path')
			}
		};
	}

// components/share.html

	function share(e) {
		this.element = e;


		this.getAjaxArgs = function() {
 			var args = {
				input: {
					article: $(this.element).data('article'),
					path: $(this.element).data('path'),
					url: $(this.element).data('url'),
					comments: $(this.element).data('comments'),
					inline: $(this.element).data('inline'),
					topic: $(this.element).data('topic'),
					consumer: $(this.element).data('consumer')
				}
			}

			return args;
 		};

		this.start = function(mode) {
			if(mode == 'ajaxLoad') {
				if(typeof FB !== 'undefined') {
					try{
						FB.XFBML.parse(document.getElementById('#share'));
					}
					catch(err) {

					}
				}
			}
		};
	}

// components/sidebar1.html

	function sidebar1(elem) {
		this.element = elem;
		
		this.ajaxArgs = {
			"input": {
				"topic": $(this.element).data('topic')
			}
		}
		
		this.want = function() {
			return responsive.mobile === false;
		};
	}

// components/slidein-bb2013.html
	
	function bb2013Slidein(e) {
		this.element = e;
		
		this.start = function(mode) {
			var params = getQueryStringParams();
			
			var rateLimit = getCookie('bb2013-slidein');
			var newsletter = params['utm_source'] == 'Publishers+Weekly';
			
			if(!rateLimit) {
				setCookie('bb2013-slidein','1');
				$('.bb2013-slidein-close').click(
					function(instance) { 
						return function(e) {
							$(instance.element).hide("slide", { direction: "right" }, 1000)
						}
					}(this)
				);
				$(this.element).show("slide", { direction: "right" }, 1000)
			}
		};
		
		this.stop = function() {
		};
	}

// components/subscribe-popin.html
	
	function subscribePopin(e) {
		this.element = e;
		
		this.start = function(mode) {
			var params = getQueryStringParams();
			
			var loggedIn = getCookie('credentials');
			var rateLimit = getCookie('subscribepopin');
			var force = params['utm_source'] == 'subscribepopin';
			var huffpo = params['utm_source'] == 'huffpo';
			var want = (responsive.scale !== 'small');
			
			if(force || (want && !loggedIn && !rateLimit && !huffpo)) {
				setCookie('subscribepopin','1');
				$('.subscribepopin-close').click(
					function(instance) { 
						return function(e) {
							$(instance.element).hide("slide", { direction: "right" }, 1000)
						}
					}(this)
				);
				$(this.element).show("slide", { direction: "right" }, 1000)
			}
		};
		
		this.stop = function() {
		};
	}

// pages/bea-signup.html

	function beaInit(elem) {
		this.element = elem;
				
		this.config = {
			widths: [0,675,1020,100000],
			classes: ['small','medium','large'],
			cookieDomain: '.publishersweekly.com',
			noMobileDomain: 'www.publishersweekly.com',
			ajaxUrl: '/pw/deliver-ajax.json',
			hijax: false,
			ajaxRequestMethod: 'GET',
			// forceHijax:true
		}
	}

// pages/best-books.html
(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) {return;}
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=190910504285954";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
// pages/edit-link-set.html

	function linkSetEdit(container) {
		this.element = container;

		this.config = {
			cookieDomain: '.sciencefriday.com',
			mobileDomain: 'beta-mobile.sciencefriday.com',
			noMobileDomain: 'beta.sciencefriday.com',
			ajaxUrl: '/iowa/deliver-ajax.json',
			lazyLoad: true,
			widths: [0,480,960,1200,100000],
			classes: ['tiny','small','medium','large']
		};
	}

	function linkSetPreview(container) {
		this.element = container;

		this.start = function(mode) {
			$('.box-slide').show();
			$('.image-wrapper').iowaInstance('lazy',true);
		};
	}

// pages/jobmoves_form.html

	function jobmoves(e) {
		this.element = e;
		this.started = false;
		this.start = function() {
			if(!this.started) {
				this.started = true;

				$('#myform').submit(function(event) {
					var invalid = false;

					var mode = $( "select[name='JOB_MOVE_type__option'] option:selected").text();

					var required = ['move_first','move_last','move_email'];

					switch(mode) {
						case 'has joined':
							required.push('move_new_title', 'move_new_company');
							break;
						case 'will retire from':
							required.push('move_old_company', 'move_retire_date');
							break;
						case 'is leaving':
							required.push('move_old_company', 'move_leave_date');
							break;
						case 'has left':
							required.push('move_old_company', 'move_leave_date');
							break;
						case 'is being promoted to':
							required.push('move_new_title');
							break;
						case 'has been promoted to':
							required.push('move_new_title');
							break;
						case 'has named':
							required.push('move_new_title');
							break;
					}

					for(var i = 0; i < required.length; i++) {
						var value = $('#' + required[i]).val();
						if(required[i] == 'move_retire_date'){
							value = 1;
							if(!$("select[name='JOB_MOVE_retire_date__day']").val() || !$("select[name='JOB_MOVE_retire_date__month']").val() || !$("select[name='JOB_MOVE_retire_date__year']").val()){
								$('#star_' + required[i]).html('<font color=red>*</font>');
								++invalid;
							}
						}
						if(required[i] == 'move_leave_date'){
							value = 1;
							if(!$("select[name='JOB_MOVE_leave_date__day']").val() || !$("select[name='JOB_MOVE_leave_date__month']").val() || !$("select[name='JOB_MOVE_leave_date__year']").val()){
								$('#star_' + required[i]).html('<font color=red>*</font>');
								++invalid;
							}
						}

						if(!value) {
							++invalid;
							$('#star_' + required[i]).html('<font color=red>*</font>');
						}
					}

					if(invalid) {
						event.preventDefault();
						$('#myform-errors').html('<font color=red>Please enter above mandatory fields</font>');
					}
				});

				$( "select[name='JOB_MOVE_type__option']" ).change(function(e) {
					$("#move_submit").show();

					var mode = $( "select[name='JOB_MOVE_type__option'] option:selected").text();

					var required = ['move_first','move_last','move_email'];

					switch(mode) {
						case 'has joined':
							required.push('move_new_title', 'move_new_company');
							break;
						case 'is joining':
							required.push('move_new_title', 'move_new_company');
							break;
						case 'will retire from':
							required.push('move_old_company', 'move_retire_date');
							break;
						case 'is leaving':
							required.push('move_old_company', 'move_leave_date');
							break;
						case 'has left':
							required.push('move_old_company', 'move_leave_date');
							break;
						case 'is being promoted to':
							required.push('move_new_title');
							break;
						case 'has been promoted to':
							required.push('move_new_title');
							break;
						case 'has named':
							required.push('move_new_title');
							break;

					}


					var option = $( "select[name='JOB_MOVE_type__option'] option:selected" ).text();
					// alert( "Handler for .change() called: " + option);
					if(option == 'has joined'){
						$("#move_old_title").parent().parent().show();
						$("#move_old_company").parent().parent().show();
						$("#move_new_title").parent().parent().show();
						$("#move_new_company").parent().parent().show();
						$("#company_title").html('New Company<span id="star_move_new_company"></span>');

						$("#move_url").parent().parent().hide();
						$("select[name='JOB_MOVE_retire_date__month']").parent().parent().hide();
						$("select[name='JOB_MOVE_leave_date__month']").parent().parent().hide();
						$("#move_launch_company").parent().parent().hide();
						$("#JOB_MOVE_launch_company_description").parent().parent().hide();
						$("#move_url").parent().parent().hide();
					}
					else if(option == 'is joining'){
						$("#move_old_title").parent().parent().show();
						$("#move_old_company").parent().parent().show();
						$("#move_new_title").parent().parent().show();
						$("#move_new_company").parent().parent().show();
						$("#company_title").html('New Company<span id="star_move_new_company"></span>');

						$("#move_url").parent().parent().hide();
						$("select[name='JOB_MOVE_retire_date__month']").parent().parent().hide();
						$("select[name='JOB_MOVE_leave_date__month']").parent().parent().hide();
						$("#move_launch_company").parent().parent().hide();
						$("#JOB_MOVE_launch_company_description").parent().parent().hide();
						$("#move_url").parent().parent().hide();
					}
					else if(option == 'is launching'){
						$("#move_launch_company").parent().parent().show();
						$("#JOB_MOVE_launch_company_description").parent().parent().show();
						$("#move_url").parent().parent().show();

						$("#move_old_title").parent().parent().hide();
						$("#move_old_company").parent().parent().hide();
						$("#move_new_title").parent().parent().hide();
						$("#move_new_company").parent().parent().hide();
						$("select[name='JOB_MOVE_retire_date__month']").parent().parent().hide();
						$("select[name='JOB_MOVE_leave_date__month']").parent().parent().hide();
					}
					else if(option == 'will retire from'){
						$("#move_old_title").parent().parent().show();
						$("#move_old_company").parent().parent().show();
						$("select[name='JOB_MOVE_retire_date__month']").parent().parent().show();


						$("#move_launch_company").parent().parent().hide();
						$("#JOB_MOVE_launch_company_description").parent().parent().hide();
						$("#move_url").parent().parent().hide();
						$("#move_new_title").parent().parent().hide();
						$("#move_new_company").parent().parent().hide();
						$("select[name='JOB_MOVE_leave_date__month']").parent().parent().hide();
					}
					else if(option == 'is leaving'){
						$("#move_old_title").parent().parent().show();
						$("#move_old_company").parent().parent().show();
						$("select[name='JOB_MOVE_leave_date__month']").parent().parent().show();


						$("#move_launch_company").parent().parent().hide();
						$("#JOB_MOVE_launch_company_description").parent().parent().hide();
						$("#move_url").parent().parent().hide();
						$("#move_new_title").parent().parent().hide();
						$("#move_new_company").parent().parent().hide();
						$("select[name='JOB_MOVE_retire_date__month']").parent().parent().hide();
					}
					else if(option == 'has left'){
						$("#move_old_title").parent().parent().show();
						$("#move_old_company").parent().parent().show();
						$("select[name='JOB_MOVE_leave_date__month']").parent().parent().show();


						$("#move_launch_company").parent().parent().hide();
						$("#JOB_MOVE_launch_company_description").parent().parent().hide();
						$("#move_url").parent().parent().hide();
						$("#move_new_title").parent().parent().hide();
						$("#move_new_company").parent().parent().hide();
						$("select[name='JOB_MOVE_retire_date__month']").parent().parent().hide();
					}
					else if(option == 'is being promoted to'){
						$("#move_new_title").parent().parent().show();
						$("#move_new_company").parent().parent().show();
						$("#company_title").html('Company');

						$("select[name='JOB_MOVE_retire_date__month']").parent().parent().hide();
						$("select[name='JOB_MOVE_leave_date__month']").parent().parent().hide();
						$("#move_launch_company").parent().parent().hide();
						$("#JOB_MOVE_launch_company_description").parent().parent().hide();
						$("#move_url").parent().parent().hide();
						$("#move_old_title").parent().parent().hide();
						$("#move_old_company").parent().parent().hide();
					}
					else if(option == 'has been promoted to'){
						$("#move_new_title").parent().parent().show();
						$("#move_new_company").parent().parent().show();
						$("#company_title").html('Company');

						$("select[name='JOB_MOVE_retire_date__month']").parent().parent().hide();
						$("select[name='JOB_MOVE_leave_date__month']").parent().parent().hide();
						$("#move_launch_company").parent().parent().hide();
						$("#JOB_MOVE_launch_company_description").parent().parent().hide();
						$("#move_url").parent().parent().hide();
						$("#move_old_title").parent().parent().hide();
						$("#move_old_company").parent().parent().hide();
					}
					else if(option == 'has named'){
						$("#move_new_company").parent().parent().show();
						$("#company_title").html('Company');
						$("#move_old_title").parent().parent().show();
						$("#move_new_title").parent().parent().show();

						$("select[name='JOB_MOVE_retire_date__month']").parent().parent().hide();
						$("select[name='JOB_MOVE_leave_date__month']").parent().parent().hide();
						$("#move_launch_company").parent().parent().hide();
						$("#JOB_MOVE_launch_company_description").parent().parent().hide();
						$("#move_url").parent().parent().hide();
						$("#move_old_company").parent().parent().hide();
					}
					else if(option == 'can now be reached at'){
						$("#move_old_company").parent().parent().show();

						$("#move_new_title").parent().parent().hide();
						$("#move_new_company").parent().parent().hide();
						$("select[name='JOB_MOVE_retire_date__month']").parent().parent().hide();
						$("select[name='JOB_MOVE_leave_date__month']").parent().parent().hide();
						$("#move_launch_company").parent().parent().hide();
						$("#JOB_MOVE_launch_company_description").parent().parent().hide();
						$("#move_url").parent().parent().hide();
						$("#move_old_title").parent().parent().hide();
					}
					else if(option == 'Select One'){
						$("#move_old_title").parent().parent().hide();
						$("#move_old_company").parent().parent().hide();
						$("#move_new_title").parent().parent().hide();
						$("select[name='JOB_MOVE_retire_date__month']").parent().parent().hide();
						$("select[name='JOB_MOVE_leave_date__month']").parent().parent().hide();
						$("#move_launch_company").parent().parent().hide();
						$("#JOB_MOVE_launch_company_description").parent().parent().hide();
						$("#move_url").parent().parent().hide();
						$("#move_new_company").parent().parent().hide();
						$("#move_submit").hide();
					}

					$('[id^="star_"]').html('');
					for(var i = 0; i < required.length; i++) {
						$('#star_' + required[i]).html('*');
					}

				});

				var selected = $(this.element).data('selected');
				if(selected) {
					$("select[name='JOB_MOVE_type__option']").val(selected).trigger('change');
				}

			}
		}

		this.stop = function() {
		};
	}

// pages/newsletter-template-booklifereport.html

	function responsiveInitNewsletter(elem) {
		this.element = elem;

		this.config = {
			widths: [0,675,1020,100000],
			classes: ['small','medium','large'],
			cookieDomain: '.publishersweekly.com',
			noMobileDomain: 'www.publishersweekly.com',
			ajaxUrl: '/pw/deliver-ajax.json',
			hijax: true,
			ajaxRequestMethod: 'GET',
			// forceHijax:true
		}

		showEdit();
	}

// pages/newsletter-template-comics.html

	function responsiveInitNewsletter(elem) {
		this.element = elem;

		this.config = {
			widths: [0,675,1020,100000],
			classes: ['small','medium','large'],
			cookieDomain: '.publishersweekly.com',
			noMobileDomain: 'www.publishersweekly.com',
			ajaxUrl: '/pw/deliver-ajax.json',
			hijax: true,
			ajaxRequestMethod: 'GET',
			// forceHijax:true
		}

		showEdit();
	}

// pages/newsletter-template-daily.html

	function responsiveInitNewsletter(elem) {
		this.element = elem;

		this.config = {
			widths: [0,675,1020,100000],
			classes: ['small','medium','large'],
			cookieDomain: '.publishersweekly.com',
			noMobileDomain: 'www.publishersweekly.com',
			ajaxUrl: '/pw/deliver-ajax.json',
			hijax: true,
			ajaxRequestMethod: 'GET',
			// forceHijax:true
		}

		showEdit();
	}

// pages/newsletter-template-daily2.html

	function responsiveInitNewsletter(elem) {
		this.element = elem;

		this.config = {
			widths: [0,675,1020,100000],
			classes: ['small','medium','large'],
			cookieDomain: '.publishersweekly.com',
			noMobileDomain: 'www.publishersweekly.com',
			ajaxUrl: '/pw/deliver-ajax.json',
			hijax: true,
			ajaxRequestMethod: 'GET',
			// forceHijax:true
		}

		showEdit();
	}

// pages/newsletter-template-imprint.html

	function responsiveInitNewsletter(elem) {
		this.element = elem;

		this.config = {
			widths: [0,675,1020,100000],
			classes: ['small','medium','large'],
			cookieDomain: '.publishersweekly.com',
			noMobileDomain: 'www.publishersweekly.com',
			ajaxUrl: '/pw/deliver-ajax.json',
			hijax: true,
			ajaxRequestMethod: 'GET',
			// forceHijax:true
		}

		showEdit();
	}

// pages/newsletter-template-library.html

	function responsiveInitNewsletter(elem) {
		this.element = elem;

		this.config = {
			widths: [0,675,1020,100000],
			classes: ['small','medium','large'],
			cookieDomain: '.publishersweekly.com',
			noMobileDomain: 'www.publishersweekly.com',
			ajaxUrl: '/pw/deliver-ajax.json',
			hijax: true,
			ajaxRequestMethod: 'GET',
			// forceHijax:true
		}

		showEdit();
	}

// pages/newsletter-template-millions.html

	function responsiveInitNewsletter(elem) {
		this.element = elem;

		this.config = {
			widths: [0,675,1020,100000],
			classes: ['small','medium','large'],
			cookieDomain: '.publishersweekly.com',
			noMobileDomain: 'www.publishersweekly.com',
			ajaxUrl: '/pw/deliver-ajax.json',
			hijax: true,
			ajaxRequestMethod: 'GET',
			// forceHijax:true
		}

		showEdit();
	}

// pages/newsletter-template-pwselect.html

	function responsiveInitNewsletter(elem) {
		this.element = elem;

		this.config = {
			widths: [0,675,1020,100000],
			classes: ['small','medium','large'],
			cookieDomain: '.publishersweekly.com',
			noMobileDomain: 'www.publishersweekly.com',
			ajaxUrl: '/pw/deliver-ajax.json',
			hijax: true,
			ajaxRequestMethod: 'GET',
			// forceHijax:true
		}

		showEdit();
	}

// pages/newsletter-template-religion.html

	function responsiveInitNewsletter(elem) {
		this.element = elem;

		this.config = {
			widths: [0,675,1020,100000],
			classes: ['small','medium','large'],
			cookieDomain: '.publishersweekly.com',
			noMobileDomain: 'www.publishersweekly.com',
			ajaxUrl: '/pw/deliver-ajax.json',
			hijax: true,
			ajaxRequestMethod: 'GET',
			// forceHijax:true
		}

		showEdit();
	}

// pages/newsletter-template-sls.html

	function responsiveInitNewsletter(elem) {
		this.element = elem;

		this.config = {
			widths: [0,675,1020,100000],
			classes: ['small','medium','large'],
			cookieDomain: '.publishersweekly.com',
			noMobileDomain: 'www.publishersweekly.com',
			ajaxUrl: '/pw/deliver-ajax.json',
			hijax: true,
			ajaxRequestMethod: 'GET',
			// forceHijax:true
		}

		showEdit();
	}

// pages/newsletter-template-sponsor.html

	function responsiveInitNewsletter(elem) {
		this.element = elem;

		this.config = {
			widths: [0,675,1020,100000],
			classes: ['small','medium','large'],
			cookieDomain: '.publishersweekly.com',
			noMobileDomain: 'www.publishersweekly.com',
			ajaxUrl: '/pw/deliver-ajax.json',
			hijax: true,
			ajaxRequestMethod: 'GET',
			// forceHijax:true
		}

		showEdit();
	}

// pages/newsletter-template-sponsor_a.html

	function responsiveInitNewsletter(elem) {
		this.element = elem;

		this.config = {
			widths: [0,675,1020,100000],
			classes: ['small','medium','large'],
			cookieDomain: '.publishersweekly.com',
			noMobileDomain: 'www.publishersweekly.com',
			ajaxUrl: '/pw/deliver-ajax.json',
			hijax: true,
			ajaxRequestMethod: 'GET',
			// forceHijax:true
		}

		showEdit();
	}

// pages/newsletter-template-sponsor_b.html

	function responsiveInitNewsletter(elem) {
		this.element = elem;

		this.config = {
			widths: [0,675,1020,100000],
			classes: ['small','medium','large'],
			cookieDomain: '.publishersweekly.com',
			noMobileDomain: 'www.publishersweekly.com',
			ajaxUrl: '/pw/deliver-ajax.json',
			hijax: true,
			ajaxRequestMethod: 'GET',
			// forceHijax:true
		}

		showEdit();
	}

// pages/newsletter-template-sponsor_c.html

	function responsiveInitNewsletter(elem) {
		this.element = elem;

		this.config = {
			widths: [0,675,1020,100000],
			classes: ['small','medium','large'],
			cookieDomain: '.publishersweekly.com',
			noMobileDomain: 'www.publishersweekly.com',
			ajaxUrl: '/pw/deliver-ajax.json',
			hijax: true,
			ajaxRequestMethod: 'GET',
			// forceHijax:true
		}

		showEdit();
	}

// pages/newsletter-template-sponsor_d.html

	function responsiveInitNewsletter(elem) {
		this.element = elem;

		this.config = {
			widths: [0,675,1020,100000],
			classes: ['small','medium','large'],
			cookieDomain: '.publishersweekly.com',
			noMobileDomain: 'www.publishersweekly.com',
			ajaxUrl: '/pw/deliver-ajax.json',
			hijax: true,
			ajaxRequestMethod: 'GET',
			// forceHijax:true
		}

		showEdit();
	}

// pages/newsletter-template-sunday.html

	function responsiveInitNewsletter(elem) {
		this.element = elem;

		this.config = {
			widths: [0,675,1020,100000],
			classes: ['small','medium','large'],
			cookieDomain: '.publishersweekly.com',
			noMobileDomain: 'www.publishersweekly.com',
			ajaxUrl: '/pw/deliver-ajax.json',
			hijax: true,
			ajaxRequestMethod: 'GET',
			// forceHijax:true
		}

		showEdit();
	}

// pages/newsletter-template-tipsheet2.html

	function responsiveInitNewsletter(elem) {
		this.element = elem;

		this.config = {
			widths: [0,675,1020,100000],
			classes: ['small','medium','large'],
			cookieDomain: '.publishersweekly.com',
			noMobileDomain: 'www.publishersweekly.com',
			ajaxUrl: '/pw/deliver-ajax.json',
			hijax: true,
			ajaxRequestMethod: 'GET',
			// forceHijax:true
		}

		showEdit();
	}

// pages/newsletter-template-tipsheet2save.html

	function responsiveInitNewsletter(elem) {
		this.element = elem;

		this.config = {
			widths: [0,675,1020,100000],
			classes: ['small','medium','large'],
			cookieDomain: '.publishersweekly.com',
			noMobileDomain: 'www.publishersweekly.com',
			ajaxUrl: '/pw/deliver-ajax.json',
			hijax: true,
			ajaxRequestMethod: 'GET',
			// forceHijax:true
		}

		showEdit();
	}

// pages/newsletter-template-xpo1.html

	function responsiveInitNewsletter(elem) {
		this.element = elem;

		this.config = {
			widths: [0,675,1020,100000],
			classes: ['small','medium','large'],
			cookieDomain: '.publishersweekly.com',
			noMobileDomain: 'www.publishersweekly.com',
			ajaxUrl: '/pw/deliver-ajax.json',
			hijax: true,
			ajaxRequestMethod: 'GET',
			// forceHijax:true
		}

		showEdit();
	}

// pages/newsletter-template-xpo2.html

	function responsiveInitNewsletter(elem) {
		this.element = elem;

		this.config = {
			widths: [0,675,1020,100000],
			classes: ['small','medium','large'],
			cookieDomain: '.publishersweekly.com',
			noMobileDomain: 'www.publishersweekly.com',
			ajaxUrl: '/pw/deliver-ajax.json',
			hijax: true,
			ajaxRequestMethod: 'GET',
			// forceHijax:true
		}

		showEdit();
	}

// pages/newsletter-template-xpo3.html

	function responsiveInitNewsletter(elem) {
		this.element = elem;

		this.config = {
			widths: [0,675,1020,100000],
			classes: ['small','medium','large'],
			cookieDomain: '.publishersweekly.com',
			noMobileDomain: 'www.publishersweekly.com',
			ajaxUrl: '/pw/deliver-ajax.json',
			hijax: true,
			ajaxRequestMethod: 'GET',
			// forceHijax:true
		}

		showEdit();
	}

// pages/newsletter-template-xpo4.html

	function responsiveInitNewsletter(elem) {
		this.element = elem;

		this.config = {
			widths: [0,675,1020,100000],
			classes: ['small','medium','large'],
			cookieDomain: '.publishersweekly.com',
			noMobileDomain: 'www.publishersweekly.com',
			ajaxUrl: '/pw/deliver-ajax.json',
			hijax: true,
			ajaxRequestMethod: 'GET',
			// forceHijax:true
		}

		showEdit();
	}

// pages/newsletter-template-xpo5.html

	function responsiveInitNewsletter(elem) {
		this.element = elem;

		this.config = {
			widths: [0,675,1020,100000],
			classes: ['small','medium','large'],
			cookieDomain: '.publishersweekly.com',
			noMobileDomain: 'www.publishersweekly.com',
			ajaxUrl: '/pw/deliver-ajax.json',
			hijax: true,
			ajaxRequestMethod: 'GET',
			// forceHijax:true
		}

		showEdit();
	}

// pages/newsletter-templates-booklife_new.html

	function responsiveInitNewsletter(elem) {
		this.element = elem;

		this.config = {
			widths: [0,675,1020,100000],
			classes: ['small','medium','large'],
			cookieDomain: '.publishersweekly.com',
			noMobileDomain: 'www.publishersweekly.com',
			ajaxUrl: '/pw/deliver-ajax.json',
			hijax: true,
			ajaxRequestMethod: 'GET',
			// forceHijax:true
		}

		showEdit();
	}

// pages/open.html


	function sweepsEntry(e) {
		this.element = $(e);
		var self = this;
		this.init = false;
		
		this.start = function() {
			if(!this.init) {
				this.init = 1;
				this.element.find('#sweeps-submitter').click(function(e) {
					e.preventDefault();
					self.save();
				});
			}
		};
		
		this.stop = function() {
		};
		
		this.save = function() {
			var val = $('#sweeps-email').val();
			if(val.match(/\@/)) {
				$('#sweeps-error').empty();
				$.post('/pw/sweeps-submit.json',{'source': 'SSPW', 'email': val},function(data) {
					if(data.status === 'ok') {
						self.element.empty().append('Entry saved. Thanks!');
					}
					else {
						$('#sweeps-error').empty().append(data.status);
					}
				});
			}
		};
	}

// pages/pubreview-review.html

	function validateReviewPublish(e) {
		this.element = $(e);
		var self = this;

		this.start = function() {
			$('#publish').click(function() {
    			$("#publish-form").toggle(this.checked);
    			self.validate()
    			self.calc();
			});

			this.element.find('form').submit( function(e) {
				self.validate(e);
			});

			function handler (e) {
				self.validate(e);
				self.calc();
			}
			this.element.find('.validate-required').each(function() {
				$(this).change(handler)
			})

			var submitter = this.element.find('#submitter');
			$(submitter[0]).click(function(e) {
				if($(this).data('paid')) {
					e.preventDefault();
					var handler = StripeCheckout.configure({
						//key: 'pk_test_g24KvTajv4F4RWbrRsA16Phx',
						key: 'pk_live_Qzz7ETJsmKn9bQW5qBmDJIr7',
						token: function(token, args) {
							$('#stripe_token').val(token.id)
							$('#pubsuppreview').submit();
						}
					});

					handler.open({
					  email: $('#pubreview_email').val(),
					  name: $('#pubreview_name').val(),
					  description: 'BookLife Review',
					  amount: parseInt($('#stripe_amount').val())
					});

					return false;
				}
			})

			self.validate()
    		self.calc();
		};

		this.stop = function() {
		};

		this.calc = function() {
			var qty = this.element.find('[name="supplement_copies"]').val();
			var country = this.element.find('[name="country"]').val();
			var amount = $('#publish')[0].checked ? 100 : 0;

			if(country){
				if(country == 256) {
					amount += qty * 3.50
				}
				else {
					amount += qty * 10.00
				}
			}

			this.element.find('#stripe_amount').val(amount * 100);

			if(amount) {
				this.element.find('#submitter').data('paid',amount * 100).val('Publish $' + parseFloat(amount).toFixed(2))
			}
			else {
				this.element.find('#submitter').data('paid',amount * 100).val('Save')

			}

		}

		this.validate = function(e) {
			var errors = 0;
			var supplement_copies = this.element.find('[name="supplement_copies"]').val();

			if($('#publish')[0].checked) {
				this.element.find('.validate-required').each(function() {
					$(this).removeClass('pubreview-validate-error');
					if(!$(this).val()) {
						$(this).addClass('pubreview-validate-error');
						++errors;
					}
				});

				var first_name = this.element.find('[name="first_name"]').val();
				if(!first_name) {
					++errors;
					this.element.find('[name="first_name"]').parent().addClass('pubreview-validate-error');
				}
				else {
					this.element.find('[name="first_name"]').parent().removeClass('pubreview-validate-error');
				}

				var last_name = this.element.find('[name="last_name"]').val();
				if(!last_name) {
					++errors;
					this.element.find('[name="last_name"]').parent().addClass('pubreview-validate-error');
				}
				else {
					this.element.find('[name="last_name"]').parent().removeClass('pubreview-validate-error');
				}

				var address = this.element.find('[name="address"]').val();
				if(!address) {
					++errors;
					this.element.find('[name="address"]').parent().addClass('pubreview-validate-error');
				}
				else {
					this.element.find('[name="address"]').parent().removeClass('pubreview-validate-error');
				}

				var city = this.element.find('[name="city"]').val();
				if(!city) {
					++errors;
					this.element.find('[name="city"]').parent().addClass('pubreview-validate-error');
				}
				else {
					this.element.find('[name="city"]').parent().removeClass('pubreview-validate-error');
				}

				var state = this.element.find('[name="state"]').val();
				if(!state) {
					++errors;
					this.element.find('[name="state"]').parent().addClass('pubreview-validate-error');
				}
				else {
					this.element.find('[name="state"]').parent().removeClass('pubreview-validate-error');
				}

				var country = this.element.find('[name="state"]').val();
				if(!country) {
					++errors;
					this.element.find('[name="country"]').parent().addClass('pubreview-validate-error');
				}
				else {
					this.element.find('[name="country"]').parent().removeClass('pubreview-validate-error');
				}

				if(supplement_copies) {
					if(isNaN(supplement_copies)){
						++errors;
						this.element.find('[name="supplement_copies"]').parent().addClass('pubreview-validate-error');
					}
				}
				else {
					this.element.find('[name="supplement_copies"]').parent().removeClass('pubreview-validate-error');
				}
			}

			var submitter = this.element.find('#submitter');

			if(errors) {
				$(submitter[0]).attr('disabled',true);
			}
			else{
				$(submitter[0]).attr('disabled',false);
			}
		};
	}

// pages/pubreview-submit.html

	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

	function validatePubReview(e) {
		this.element = $(e);
		var self = this;

		this.paid = this.element.data('paid');
		this.rpf_free = this.element.data('rpf_free');
		this.rpf_balance = this.element.data('rpf_balance');
		this.price = 399;
		this.expidited = false;
		this.promo = null;
		this.discount = 0;
		this.rpf_amount_due = 0;

		this.start = function() {

			var expedited = this.element.find('[name="BOOKLIFE_REVIEW_expedited"]');

			if(expedited) {
				self.expedited = expedited.value > 0;

				expedited.change(function(e) {
					self.expedited = this.value > 0;
					self.calcPrice();
				})
			}

			var wc = this.element.find('[name="BOOKLIFE_REVIEW_word_count"]');

			if(wc) {
				self.wordcount = wc.value;

				wc.change(function(e) {
					self.wordcount = parseInt(this.value.replace(/\D/g,''));
					self.calcPrice();
				})
			}

			if(self.paid) {
				self.calcPrice();
			}

			this.element.find('form').submit( function(e) {
				self.validate(e);
			});

			var promo = this.element.find('[name="BOOKLIFE_REVIEW_promo"]');
			if(promo) {
				promo.change(function(e) {
					if(this.value) {
						self.lookupPromoCode(this.value);
					}
					else {
						self.promo = null;
						self.calcPrice()
					}
				})
				promo.change();
			}

			var inputs = this.element.find('input,select,textarea,file')
			for(var i = 0; i < inputs.length; i++) {
				$(inputs[i]).change(function(e) {
					self.validate(e);
				})
			}
			//$('[name="BOOKLIFE_REVIEW_format__option"]').change(function(e){
			//self.validate(e)
			//});

			var submitter = this.element.find('#submitter');
			$(submitter[0]).click(function(e) {

				/*
				if(!self.paid && self.rpf_price) {
					try {
						var handler = StripeCheckout.configure({
							//key: 'pk_test_aekhbkd6IQCHlq7ckwJTBFEz',
							key: 'pk_live_z9kBdXhOf1xV6XIMop7aWkfi',
							token: (token, args) => {
								$('#stripe_token').val(token.id)
								$('#pubreview').submit();
							}
						});

						handler.open({
						  email: $('#pubreview_email').val(),
						  name: $('#pubreview_name').val(),
						  description: 'PW Review Submission Fee',
						  amount: parseInt(self.rpf_price) * 100
						});
					}
					catch(e) {
						console.log(e)
					}

					return false;
				}
				*/

				if($(this).data('paid')) {
					var handler = StripeCheckout.configure({
						//key: 'pk_test_g24KvTajv4F4RWbrRsA16Phx',
						key: 'pk_live_Qzz7ETJsmKn9bQW5qBmDJIr7',
						token: function(token, args) {
							$('#stripe_token').val(token.id)
							$('#pubreview').submit();
						}
					});

					handler.open({
					  email: $('#pubreview_email').val(),
					  name: $('#pubreview_name').val(),
					  description: 'BookLife Review',
					  amount: parseInt($('#stripe_amount').val())
					});

					return false;
				}
			})

			this.element.find('[name="BOOKLIFE_REVIEW_ai_used"]').change(function() {
				if($(this).val() == '1') {
					$('#ai-was-used').show();
				}
				else {
					$('#ai-was-used').hide();
				}
			});


			if(!self.paid) {
				this.inputs = Array.from(this.element[0].querySelectorAll('[data-endpoint]'))

				this.changeHandler = debounce((e) => {
					if (e && e.srcElement && e.srcElement !== window) {
						this.handleChange(e)
						this.calcSubmitPrice()
					}
				}, 500)

				for (let i = 0; i < this.inputs.length; i++) {
					this.inputs[i].addEventListener('keyup', this.changeHandler, true)
				}

				this.choices = Array.from(this.element[0].querySelectorAll('.choices'))

				this.selectHandler = (e) => {
					if (e && e.srcElement && e.srcElement !== window) {
						this.handleSelect(e);
						this.calcSubmitPrice()
					}
				}

				for (let i = 0; i < this.choices.length; i++) {
					this.choices[i].addEventListener('change', this.selectHandler, true)
				}

				this.peers = Array.from(this.element[0].querySelectorAll('[name=peer]'))
				this.selectPeerHandler = (e) => {
					if (e && e.srcElement && e.srcElement !== window) {
						this.calcSubmitPrice()
					}
				}

				for (let i = 0; i < this.peers.length; i++) {
					this.peers[i].addEventListener('change', this.selectPeerHandler, true)
				}

				this.calcSubmitPrice();
			}
		};

		this.stop = function() {
		};

		this.calcSubmitPrice = async () => {

			//document.getElementById('open-balance').classList.remove('hide-populate');

			var hideIt = false;

			document.getElementById('rpf_price_priority').value= '';

			const selectedPeer =  document.querySelector('input[name=peer]:checked') ? document.querySelector('input[name=peer]:checked').value : null;

			if(self.rpf_free || self.rpf_balance || selectedPeer) {
				document.getElementById('rpf-price-prompt').innerHTML = `0`;
				document.getElementById('rpf_price').value = 0;
				self.rpf_price = 0;
				if(self.rpf_free) {
					document.getElementById('rpf_price_priority').value= 'user_rpf_free';
					hideIt = true;
				}
				if(self.rpf_balance) {
					document.getElementById('rpf_price_priority').value= 'user_rpf_balance';
				}
				if(selectedPeer) {
					document.getElementById('rpf_price_priority').value= 'rpf_peer_balance';
				}
				//document.getElementById('open-balance').classList.add('hide-populate');
				return;
			}

			const params = {
				publisher: $('[name=BOOKLIFE_REVIEW_rpf_publisher]').val() || ''
			}

			const url = '/pw/API/rpf-calc-price.json' + '?' + new URLSearchParams(params).toString();

			const options = {
				method: 'GET',
				dataType: 'json'
			}

			try {
				const response = await fetch(url, options)

				if (response.status !== 200) {
					const e = new Error(response.statusText)
					e.errorCode = response.status
					throw (e)
				}

				const data = await response.json()

				//document.getElementById('debug').innerHTML = JSON.stringify(data,'',2)
				
				let amount = 25;
				if(data.publisher_rpf_free || data.publisher_rpf_site_license) {
					hideIt = true;
					amount = 0
					if(data.publisher_rpf_free) {
						document.getElementById('rpf_price_priority').value= 'publisher_rpf_free';
					}
					if(data.publisher_rpf_site_license) {
						document.getElementById('rpf_price_priority').value= 'publisher_rpf_site_license';
					}
				}

				if(hideIt) {
					document.getElementById('open-balance').classList.add('hide-populate');
				}
				else {
					document.getElementById('open-balance').classList.remove('hide-populate');
				}

				document.getElementById('rpf-price-prompt').innerHTML = `${amount}`;

				document.getElementById('rpf_price').value = amount;

				self.rpf_price = amount;

				return {
					status: 'ok',
					data: data,
					price: amount
				}
					
			} catch (err) {
				return {
					status: err.message || 'error',
					err: err
				}
			}
		}

		this.handleChange = async (e) => {
			const elem = e.srcElement
			const endpoint = elem.getAttribute('data-endpoint')
			const value = elem.value
			const table = elem.getAttribute('data-find-table')
			const result = await this.lookupRelated(endpoint, value, table)

			if(result.status !== 'ok') {
				return;
			}

			const data = result.data.matches;


			if(elem.getAttribute('data-populate')) { 
				const submenu = document.querySelector(elem.getAttribute('data-populate'));
				for (let k = submenu.options.length - 1; k >= 0; k--) {
					submenu.remove(k);
				}
			}


			const pulldown = elem.closest('.input-group').querySelector(elem.getAttribute('data-pulldown'))

			for (let j = pulldown.options.length - 1; j >= 0; j--) {
				pulldown.remove(j);
			}

			if(data?.length) {
				if(elem.closest('.input-group').querySelector('.enter-other')) {
					elem.closest('.input-group').querySelector('.enter-other').classList.remove('enter-other-show');
					if(elem.getAttribute('data-populate')) {
						const pulldown = document.querySelector(elem.getAttribute('data-populate')).closest('.input-group');
						pulldown.classList.remove('hide-populate');
					}
				}
				pulldown.classList.add('choices-show')
				if(data.length > 1) {
					var option = document.createElement("option");
					option.text = '-- Select One --';
					pulldown.add(option);
				}

				for(let i = 0; i < data.length; i++) {
					var option = document.createElement("option");
					option.text = data[i].description;
					option.value= data[i].record;
					option.submenuItems = data[i].children;
					pulldown.add(option);
				}
			}
			else {
				pulldown.classList.remove('choices-show');
				if(elem.closest('.input-group').querySelector('.enter-other')) {
					elem.closest('.input-group').querySelector('.enter-other').classList.add('enter-other-show');
					if(elem.getAttribute('data-populate')) {
						const pulldown = document.querySelector(elem.getAttribute('data-populate')).closest('.input-group');
						pulldown.classList.add('hide-populate');
					}
				}
			}
		}

		this.handleSelect = (e) => {
			const elem = e.srcElement;
			const selected = elem.querySelector('option:checked');

			if(elem.getAttribute('data-populate')) {
				const submenuItems = selected.submenuItems;

				const pulldown = document.querySelector(elem.getAttribute('data-populate'))

				for (let j = pulldown.options.length - 1; j >= 0; j--) {
					pulldown.remove(j);
				}

				if(submenuItems.length > 1) {
					var option = document.createElement("option");
					option.text = '--select--';
					pulldown.add(option);
				}

				for(let i = 0; i < submenuItems.length; i++) {
					var option = document.createElement("option");
					option.text = submenuItems[i].description;
					option.value= submenuItems[i].record;
					pulldown.add(option);
				}
			}
		}
		

		this.lookupRelated = async (endpoint, val, table) => {
			const params = {
				table: table,
				q: val
			}

			endpoint += '?' + new URLSearchParams(params).toString();

			const options = {
				method: 'GET',
				dataType: 'json'
			}

			try {
				const response = await fetch(endpoint, options)

				if (response.status !== 200) {
					const e = new Error(response.statusText)
					e.errorCode = response.status
					throw (e)
				}

				const data = await response.json()
				
				return {
					status: 'ok',
					data: data
				}
					
			} catch (err) {
				return {
					status: err.message || 'error',
					err: err
				}
			}
		}

		this.lookupPromoCode = function(code) {
			$.getJSON( "/pw/API/review-promo-codes.json?code=" + encodeURIComponent(code))
				.done(function(data) {
					if(data.status === 'ok') {
						self.promo = data;
					}
					else {
						self.promo = null;
						alert(data.status);
					}
					self.calcPrice();
				})
				.fail(function( jqxhr, textStatus, error ) {
					alert('unable to lookup promo code');
				})
		}

		this.calcPrice = function() {

			this.price = 399;
			if (this.expedited) {
				this.price += 150;
			}

			if (this.wordcount > 100000) {
				this.price += 100;
			}

			this.discount = this.promo ? this.promo.discount : 0;

			$('#stripe_amount').val((this.price - this.discount) * 100);
			$('.current-price').html('Price: $'+(this.price - this.discount));

			$('#amount').val(this.price)
			$('#discount').val(this.discount)
		}

		this.validate = function(e) {
			var errors = 0;
			this.element.find('.validate-required').each(function() {
				$(this).removeClass('pubreview-validate-error');
				$(this).removeClass('green-border');
				if(!$(this).val()) {
					$(this).addClass('pubreview-validate-error');
					++errors;
				}
			});

			var paid = this.element.find('[name="paid"]').val();

			var code = this.element.find('[name="BOOKLIFE_REVIEW_EAN"]').val();

			if(code && code !== this.lastLookup){
				this.lastLookup  = code;
				this.dupe = false;
				var url = "/pw/ingram.json?querytype=lookup&check_isbn=1&isbn=" + encodeURIComponent(code);
				if(this.paid) {
					url += '&paid=1';
				}
				$.getJSON( url)
					.done(function(data) {
						if(data.status === 'ok') {
							if(data.results.Book || data.results.FoundInDatabase) {
								var debug = ' (source:' + data.results.FoundInDatabase + ', paid:' + data.results.FoundInDatabasePaid + ', form mode:' + self.paid + ')';

								if(data.results.FoundInDatabase === 'PW' && !self.paid){
									self.dupe = true;
									$('#isbn-error').html("A book with this ISBN has already been reviewed by PW");
								}
								else if(data.results.FoundInDatabase === 'PW-submitted' && !self.paid){
									self.dupe = true;
									$('#isbn-error').html("A book with this ISBN has already been submitted to PW for review");
								}
								else if(data.results.FoundInDatabase === 'BL' && !data.results.FoundInDatabasePaid && !self.paid){
									self.dupe = true;
									$('#isbn-error').html("A book with this ISBN has been submitted to PW for review");
								}
								else if(data.results.FoundInDatabase === 'BL' && data.results.FoundInDatabasePaid && self.paid){
									self.dupe = true;
									$('#isbn-error').html("A book with this ISBN has been submitted to BookLife for review");
								}
								else{
									$('#isbn-error').empty();
								}

								if(self.dupe) {
									const button = document.querySelector('#submitter')
									button.disabled = true
									button.style.opacity = 0.5;
								}
							}
						}
						else{
							$('#isbn-error').html('<font color=red>' + data.errors.join(', ') + '</font>');
						}
					})
					.fail(function( jqxhr, textStatus, error ) {
						var err = textStatus + ", " + error;
						$('#isbn-error').empty().append(err);
					});
			}

			var genre = this.element.find('[name="BOOKLIFE_REVIEW_genre"]:checked').val();
			if(!genre) {
				++errors;
				this.element.find('[name="BOOKLIFE_REVIEW_genre"]').parent().addClass('pubreview-validate-error');
			}
			else {
				this.element.find('[name="BOOKLIFE_REVIEW_genre"]').parent().removeClass('pubreview-validate-error');
			}

			var format = this.element.find('[name="BOOKLIFE_REVIEW_format"]').val();
			if(!format) {
				++errors;
				this.element.find('[name="BOOKLIFE_REVIEW_format"]').parent().addClass('pubreview-validate-error');
			}
			else {
				this.element.find('[name="BOOKLIFE_REVIEW_format"]').parent().removeClass('pubreview-validate-error');
			}

			this.element.find('[name="BOOKLIFE_REVIEW_ebook_data"]').parent().removeClass('pubreview-validate-error');
			this.element.find('[name="BOOKLIFE_REVIEW_download_url"]').parent().removeClass('pubreview-validate-error');
			this.element.find('[name="BOOKLIFE_REVIEW_cover_image__pending_upload"]').parent().removeClass('pubreview-validate-error');


			if(this.paid) {
				if(!$('[name="BOOKLIFE_REVIEW_cover_image__pending_upload"]').val()) {
					++errors;
					this.element.find('[name="BOOKLIFE_REVIEW_cover_image__pending_upload"]').parent().addClass('pubreview-validate-error');
				}
			}

			if(!$('[name="wild"]').val() && !$('[name="BOOKLIFE_REVIEW_ebook_data"]').val() && !$('[name="BOOKLIFE_REVIEW_download_url"]').val()) {
				++errors;
				this.element.find('[name="BOOKLIFE_REVIEW_ebook_data"]').parent().addClass('pubreview-validate-error');
				this.element.find('[name="BOOKLIFE_REVIEW_download_url"]').parent().addClass('pubreview-validate-error');
			}

			var jacket_copy = this.element.find('[name="BOOKLIFE_REVIEW_jacket_copy"]').val();

			if(paid){
				if(!jacket_copy){
					++errors;
					this.element.find('[name="BOOKLIFE_REVIEW_jacket_copy"]').addClass('pubreview-validate-error');
				}
				else{
					this.element.find('[name="BOOKLIFE_REVIEW_jacket_copy"]').removeClass('pubreview-validate-error');
				}
			}

			var pubyear = this.element.find('[name="BOOKLIFE_REVIEW_pub_date_year"]').val();
			if(pubyear.length != 4 || pubyear.match(/[^0-9]/)){
				++errors;
				this.element.find('[name="BOOKLIFE_REVIEW_pub_date_year"]').parent().addClass('pubreview-validate-error');
			}
			else {
				this.element.find('[name="BOOKLIFE_REVIEW_pub_date_year"]').parent().removeClass('pubreview-validate-error');
			}

			var pubmonth = this.element.find('[name="BOOKLIFE_REVIEW_pub_date_month"]').val();
			if(pubmonth.length == 0 || pubmonth.length > 2 || pubmonth.match(/[^0-9]/) || pubmonth < 1 || pubmonth > 12){
				++errors;
				this.element.find('[name="BOOKLIFE_REVIEW_pub_date_month"]').parent().addClass('pubreview-validate-error');
			}
			else {
				this.element.find('[name="BOOKLIFE_REVIEW_pub_date_month"]').parent().removeClass('pubreview-validate-error');
			}

			if(this.element.find('[name="BOOKLIFE_REVIEW_word_count"]').length) {
				var wordcount = this.element.find('[name="BOOKLIFE_REVIEW_word_count"]').val();
				wordcount = wordcount.replace(/\D/g,'');
				if(!wordcount) {
					++errors;
					this.element.find('[name="BOOKLIFE_REVIEW_word_count"]').parent().addClass('pubreview-validate-error');
				}
				else if (parseInt(wordcount) != wordcount) {
					++errors;
					this.element.find('[name="BOOKLIFE_REVIEW_word_count"]').parent().addClass('pubreview-validate-error');
				}
				else if (parseInt(wordcount) > 150000) {
					++errors;
					this.element.find('[name="BOOKLIFE_REVIEW_word_count"]').parent().addClass('pubreview-validate-error');
				}
				else {
					this.element.find('[name="BOOKLIFE_REVIEW_word_count"]').parent().removeClass('pubreview-validate-error');
				}
			}

			this.element.find('ai-was-used').removeClass('pubreview-validate-error');

			if(this.element.find('[name="BOOKLIFE_REVIEW_ai_used"]:checked')) {
				if(!this.element.find('[name="BOOKLIFE_REVIEW_ai_assisted"]:checked') && !this.element.find('[name="BOOKLIFE_REVIEW_ai_created"]:checked')) {
					++errors;
					this.element.find('ai-was-used').addClass('pubreview-validate-error');
				}
			}

			if(!this.paid) {

				// if editor not selected in choices the 'other' fields are required
				this.element.find('[id="publisher-choices"]').closest('.input-group').removeClass('pubreview-validate-error');
				if(!this.element.find('[id="publisher-choices"]').val()) {
					if(!this.element.find('[name="BOOKLIFE_REVIEW_publisher_imprint"]').val() || !this.element.find('[name="BOOKLIFE_REVIEW_imprint_other"]').val()) {
						++errors;
						this.element.find('[id="publisher-choices"]').closest('.input-group').addClass('pubreview-validate-error');
					}
				}
			}

			/*
			// if editor not selected in choices the 'other' fields are required
			this.element.find('[id="editor-choices"]').closest('.input-group').removeClass('pubreview-validate-error');
			if(!this.element.find('[id="editor-choices"]').val()) {
				if(!this.element.find('[name="BOOKLIFE_REVIEW_editor"]').val()) {
					++errors;
					this.element.find('[id="editor-choices"]').closest('.input-group').addClass('pubreview-validate-error');
				}
			}
			
			// if agent not selected in choices the 'other' fields are required
			this.element.find('[id="agent-choices"]').closest('.input-group').removeClass('pubreview-validate-error');
			if(!this.element.find('[id="agent-choices"]').val()) {
				if(!this.element.find('[name="BOOKLIFE_REVIEW_agent"]').val()) {
					++errors;
					this.element.find('[id="agent-choices"]').closest('.input-group').addClass('pubreview-validate-error');
				}
			}

			// if publicist not selected in choices the 'other' fields are required
			this.element.find('[id="publicist-choices"]').closest('.input-group').removeClass('pubreview-validate-error');
			if(!this.element.find('[id="publicist-choices"]').val()) {
				if(!this.element.find('[name="BOOKLIFE_REVIEW_pr_contact_name"]').val()) {
					++errors;
					this.element.find('[id="publicist-choices"]').closest('.input-group').addClass('pubreview-validate-error');
				}
			}
			*/

			if(errors || self.dupe) {
				//alert('Please fill out all required fields correctly');
				e.preventDefault();
				const button = document.querySelector('#submitter')
				button.disabled = true
				button.style.opacity = 0.5;
			}
			else {
				const button = document.querySelector('#submitter')
				button.disabled = false
				button.style.opacity = 1;
			}
		};
	}

	function pbGetISBN(e) {
		this.element = $(e);

		var self = this;
		this.paid = $(this).data('paid')

		this.start = function() {
			var input = $("<input id=\"lookupecosystem\">");
			var button = $('<button>');

			button.click(function(e) {
				e.preventDefault();
				var val = input.val();
				self.lookup(val);
			});

			this.element.append('Look Up ISBN or ASIN  ', input, button);
    };

		this.lookupAmazon = function(code) {
			$.getJSON( "https://www.publishersweekly.com/pw/amazon-api.json?isbn=" + code)
				.done(function(data) {
					if(!data.err) {
						var basic;

						if(_.get(data, 'results.SearchResult.Items')){
							for(i=0; i < data.results.SearchResult.Items.length; i++){
								if(data.results.SearchResult.Items[i].ASIN == code){
									basic = data.results.SearchResult.Items[i];
									break;
								}
								else if(_.get(data,"results.SearchResult.Items[i].ItemInfo.ExternalIds.EANs[0].DisplayValues[0]") == code){
									basic = data.results.SearchResult.Items[i];
									break;
								}
								else if(_.get(data,"results.SearchResult.Items[i].ItemInfo.ExternalIds.ISBNs[0].DisplayValues[0]") == code){
									basic = data.results.SearchResult.Items[i];
									break;
								}
							}


							var authors = '';
							var illustrators = '';

							if(_.get(basic, 'ItemInfo.ByLineInfo.Contributors')){
								for(i=0;i < basic.ItemInfo.ByLineInfo.Contributors.length; i++){
									var contributor =  basic.ItemInfo.ByLineInfo.Contributors[i];

									if(contributor.Role == 'Author'){
										if(authors){
											authors += ' / ';
										}
										authors = authors + contributor.Name;
									}

									if(contributor.Role == 'Illustrator'){
										if(illustrators){
											illustrators += ' / ';
										}
										illustrators = illustrators + contributor.Name;
									}
								}
							}

							if(authors){
								$('#author').val(authors).addClass('green-border');
							}

							if(illustrators){
								$('#illustrator').val(illustrators).addClass('green-border');
							}

							if(_.get(basic, 'ItemInfo.Title.DisplayValue')){
								$("#title").val(_.get(basic, 'ItemInfo.Title.DisplayValue')).addClass('green-border')
							}
							if(_.get(basic, 'ItemInfo.ContentInfo.PagesCount.DisplayValue')){
								$("#pages").val(_.get(basic, 'ItemInfo.ContentInfo.PagesCount.DisplayValue')).addClass('green-border')
							}

							if(_.get(basic, 'ItemInfo.ContentInfo.ExternalIds.EANs.DisplayValue')){
								$("#EAN").val(_.get(basic, 'ItemInfo.ContentInfo.ExternalIds.EANs.DisplayValue')).addClass('green-border')
							}
							else if(_.get(basic, 'ASIN')){
								$("#EAN").val(_.get(basic, 'ASIN')).addClass('green-border')
							}

							if(_.get(basic, 'ItemInfo.ByLineInfo.Manufacturer.DisplayValue')){
								$("#publisher").val(_.get(basic, 'ItemInfo.ByLineInfo.Manufacturer.DisplayValue')).addClass('green-border')
							}
							if(_.get(basic, 'Offers.Listings[0].Price.Amount')){
								$("#price").val(_.get(basic, 'Offers.Listings[0].Price.Amount')).addClass('green-border')
							}

							if (_.get(basic, 'ItemInfo.ContentInfo.PublicationDate.DisplayValue')) {
								$('#pub_date_month').val(_.get(basic, 'ItemInfo.ContentInfo.PublicationDate.DisplayValue').substr(5,2)).addClass('green-border');
								$('#pub_date_year').val(_.get(basic, 'ItemInfo.ContentInfo.PublicationDate.DisplayValue').substr(0,4)).addClass('green-border');
							}

							if(basic.Binding == 'Kindle Edition'){
								$("select[name='BOOKLIFE_REVIEW_format__option']").val('Ebook');
							}
							$('#discover-status').empty();
						}
						else if(_.get(data, 'results.Errors')){
							$('#discover-status').empty().append(data.results.Errors[0].Message);
						}
						else{
							$('#discover-status').empty();
						}
					}
					else {
						if(data.err === 'Too many temporary Amazon errors'){
							$('#discover-status').empty().append('ERROR: The ISBN/ASIN you entered was not found.');
						}
						else{
							$('#discover-status').empty().append('ERROR: ' + data.err.join(','));
						}
					}
				})
				.fail(function( jqxhr, textStatus, error ) {
					var err = textStatus + ", " + error;
					$('#discover-status').empty().append(err);
				});
		}

		this.lookup = function(code) {

			$('#discover-status').empty().append('Looking up product');

			if(isValidISBN(code)) {
				$.getJSON( "/pw/ingram.json?querytype=lookup&isbn=" + code)
					.done(function(data) {
						if(data.status === 'ok') {
							if(!data.results.Book) {
								self.lookupAmazon(code)
								//$('#discover-status').empty().append('Not found');
							}
							else {
								var basic = data.results.Book.Basic;

								var fulltitle = '';

								if(basic.TitleLeadingArticle !== undefined){
									fulltitle = basic.TitleLeadingArticle + ' ';
								}

								fulltitle += basic.Title;

								$("#title").val(fulltitle).addClass('green-border').removeClass('pubreview-validate-error');
								$("#publisher").val(basic.Publisher).addClass('green-border').removeClass('pubreview-validate-error');
								$("#price").val(basic.PubListPrice).addClass('green-border').removeClass('pubreview-validate-error');
								$("#pages").val(basic.Pages).addClass('green-border').removeClass('pubreview-validate-error');
								$("#EAN").val(code).addClass('green-border').removeClass('pubreview-validate-error').change();

								$('#pub_date_month').val(basic.PubDate.substr(0,2)).addClass('green-border').removeClass('pubreview-validate-error');
								$('#pub_date_year').val(basic.PubDate.substr(2,4)).addClass('green-border').removeClass('pubreview-validate-error');

/*								var cover_url = 'http://viento.digitopia.net:3000/covers/' + basic.EAN;
								var img = $('<img>');
								img.attr('src', cover_url);
								$("#cover_url").val(cover_url);
								$("#coverimage").empty().append(img);
*/
								var authors = '';
								var illustrators = '';

								if(basic.Contributor.length){
									for(i=0;i < basic.Contributor.length; i++){
										if(basic.Contributor[i].Role == 'Author'){
											if(authors){
												authors += ' / ';
											}
											authors = authors + basic.Contributor[i].Name + '(' + basic.Contributor[i].Role + ')';
										}
										else if(basic.Contributor[i].Role == 'illustrator'){
											if(illustrators){
												illustrators += ' / ';
											}
											illustrators = illustrators + basic.Contributor[i].Name + '(' + basic.Contributor[i].Role + ')';
										}
									}
								}
								else{
									authors = basic.Contributor.Name;
								}

								if(authors){
									$('#author').val(authors).addClass('green-border');;
								}
								if(illustrators){
									$('#illustrator').val(illustrators).addClass('green-border');;
								}

								$('#discover-status').empty();
							}
						}
						else {
							$('#discover-status').empty().append('ERROR: ' + data.errors.join(','));
						}
					})
					.fail(function( jqxhr, textStatus, error ) {
						var err = textStatus + ", " + error;
						$('#discover-status').empty().append(err);
					});
			}
			else{
				this.lookupAmazon(code)
			}
		};

		var isValidISBN = function (isbn) {
			isbn = isbn.replace(/[^\dX]/gi, '');
			if(isbn.length == 10) {
				var chars = isbn.split('');
				if(chars[9].toUpperCase() == 'X') {
					chars[9] = 10;
				}
				var sum = 0;
				for(var i = 0; i < chars.length; i++) {
					sum += ((10-i) * parseInt(chars[i]));
				}
				return (sum % 11 == 0);
			} else if(isbn.length == 13) {
				var chars = isbn.split('');
				var sum = 0;
				for (var i = 0; i < chars.length; i++) {
					if(i % 2 == 0) {
						sum += parseInt(chars[i]);
					} else {
						sum += parseInt(chars[i]) * 3;
					}
				}
				return (sum % 10 == 0);
			} else if(/^(B[\dA-Z]{9}|\d{9}(X|\d))$/.test(isbn)){ // Test ASIN
				return true;
			}	else {
				return false;
			}
		};
	}




// pages/reviews-single-consumer.html

	function showOtherFormats(obj) {
		if($(obj).html() === 'Show other formats') {
			$(obj).html('Hide other formats');
		}
		else {
			$(obj).html('Show other formats');}
		$('#review-single-other-format-block').toggle();
	}

	function toggleInfo(id) {
		$('#' + id).toggle();
	}


// pages/reviews.html

	function featuredReviews(e){
		this.element = e;
		this.playing = undefined;

		this.start = function(mode){
			this.currentIndex = -1;

			this.slides = $(this.element).find('.featured-reviews-slide');

			$(this.element).find('.featured-reviews-slide').click(
				function(instance){
					return function(e){
						loadPage($(this).data('url'))
					}
				}(this)
			);

			$(this.element).find('.featured-reviews-header-right').click(
				function(instance){
					return function(e){
						loadPage($(this).data('url'))
					}
				}(this)
			);

			$(this.element).find('.featured-reviews-prev').click(
				function(instance){
					return function(e){
						instance.stopAuto();
						instance.showIndex(instance.currentIndex - 1);
					}
				}(this)
			);

			$(this.element).find('.featured-reviews-next').click(
				function(instance){
					return function(e){
						instance.stopAuto();
						instance.showIndex(instance.currentIndex + 1);
					}
				}(this)
			);

			for(var i = 0; i < this.slides.length; i++) {
				$(this.element).find('.featured-reviews-dots').append('<div class="featured-reviews-dots-dot" data-index="' + i + '"></div>');
			}

			$(this.element).find('.featured-reviews-dots-dot').click(
				function (instance) {
					return function () {
						instance.showIndex($(this).data('index'));
					};
				}(this)
			);

			this.watchResize();
			this.showNext();
		};

		this.watchResize = function(){

			var w;
			var maxHeight = 0;

			if(responsive.scale === 'large'){
				$(this.element).css({'width':''});
				w = $(this.element).innerWidth();
			}
			else {
				if(responsive.scale === 'medium'){
					w = $(this.element).parent().innerWidth() - $('.featured-reviews-boxes').outerWidth(true);
				}
				else if(responsive.scale === 'small'){
					w = $(this.element).parent().innerWidth();
				}

				$(this.element).width(w);
			}

			var canvaswidth = (w + 20) * this.slides.length;
			$(this.element).find('.featured-reviews-canvas').width(canvaswidth);

			for(var i=0;i < this.slides.length;i++){
				$(this.slides[i]).width(w);
				var h = $(this.slides[i]).outerHeight();
				if(h > maxHeight) {
					maxHeight = h;
				}
			}

			$(this.element).find('.featured-reviews-canvas').innerHeight(maxHeight);
			$(this.element).find('.featured-reviews-viewport').innerHeight(maxHeight);
			//$(this.element).find('.featured-reviews-image').height(maxHeight);

			$(this.element).find('.featured-reviews-canvas').css(
				{"margin-left": this.currentIndex * w * -1}
			);

			var dotsWidth = this.slides.length * 11;
			var dotsLeft = (w - dotsWidth) / 2;

			$(this.element).find('.featured-reviews-dots').css( {
				'width': dotsWidth + 'px',
				'left': dotsLeft + 'px'
			});
		}

		this.stopAuto = function() {
			if(this.playing) { window.clearTimeout(this.playing); }
			this.playing = null;
		};

		this.showNext = function() {
			this.showIndex(this.currentIndex + 1);
			this.playing = window.setTimeout(
				function(instance) {
					return function() {
						instance.showNext();
					}
				}(this),5000
			);
		};

		this.showIndex = function(i){
			if(i < 0){
				i = this.slides.length - 1;
			}

			if(i > this.slides.length - 1){
				i = 0;
			}

			var w = $(this.element).width();

			$(this.element).find('.featured-reviews-canvas').animate(
				{"margin-left": i * w * -1},1000
			);

			this.currentIndex = i;

			var slides = $(this.element).find('.featured-reviews-slide');
			var category = $(slides[this.currentIndex]).data('category');
			$('.featured-reviews-headline-category').html(category);
			$('.featured-reviews-header-right').data('url','/pw/reviews/' + $(slides[this.currentIndex]).data('category-nickname') + '.html');

			var pagination = $(this.element).find('.featured-reviews-dots-dot');
			$(this.element).find('.featured-reviews-dots-dot-on').removeClass('featured-reviews-dots-dot-on');
			$(pagination[i]).addClass('featured-reviews-dots-dot-on');

		};
	}

	function revealReview(obj) {
		var row = $(obj).data('row');
		if($(obj).html() === '<ml>show more</ml>') {
			$('#review-' + row).css('height','auto');
			$(obj).html('<lm>show less</lm>');
		}
		else {
			$('#review-' + row).css('height','');
			$(obj).html('<ml>show more</ml>');
		}
	}

// pages/roundup.html

	function paginateRoundups(elem) {
		this.element;

		this.itemsPerPage = 30;
		this.page = 0;
		this.pages = 0;
		this.items = $('.roundup-list li');
		
		if(this.items.length) {
			this.pages = (this.items.length / this.itemsPerPage);
        	if(this.pages != Math.floor(this.pages)) { this.pages = Math.floor(this.pages) + 1; }
		}
	
		$(".ui-input-search input").bind("focus", function() {
			$('.roundup-list li').removeClass('roundup-item').removeClass('roundup-item-on');
			$('#roundup-older-button').hide();
			$('#roundup-newer-button').hide();
		});
		
		$('#roundup-older-button').click(function () {
			$('#roundup-list').iowaInstance('showPage',1);
		});

		$('#roundup-newer-button').click(function () {
			$('#roundup-list').iowaInstance('showPage',-1);
		});
		
		this.showPage = function (delta) {
			this.page += delta;
			
			var first = (this.page * this.itemsPerPage) - (this.itemsPerPage );
			var last  = first + this.itemsPerPage - 1;
			if(last > this.items.length) { last = this.items.length; }

			$('.roundup-item-on').removeClass('roundup-item-on');
			for(var i = first; i <= last; ++i) {
				$(this.items[i]).addClass('roundup-item-on');
			}
			
			if(this.page === 1) {
				$('#roundup-newer-button').addClass('ui-disabled');
			}
			else {
				$('#roundup-newer-button').removeClass('ui-disabled');
			}
			
			if(this.page === this.pages) {
				$('#roundup-older-button').addClass('ui-disabled');
			}
			else {
				$('#roundup-older-button').removeClass('ui-disabled');
			}
		};

		this.showPage(1);
	}

// wrapper-consumer.html

	function tipsheetInlineSubscribe() {
		var email = $('#tip-sheet-email').val();
		if(email != 'Email address') {
			document.location.href='/pw/email-subscriptions/index.html?list-6=1&address=' + encodeURIComponent(email)
		}
		else {
			alert('please enter your email address');
		}
	}

// wrapper.html


	var mobileAdOptOut = false;

	var config = {
		widths: [0,675,1020,100000],
		classes: ['small','medium','large'],
		cookieDomain: '.publishersweekly.com',
		noMobileDomain: 'www.publishersweekly.com',
		ajaxUrl: '/pw/deliver-ajax.json',
		hijax: false,
		ajaxRequestMethod: 'GET'
	}

	responsive.config = config;

	function responsiveInit(elem) {
		this.element = elem;

		this.config = config;

		if(paperCopy) {
			$('body').addClass('paper-copy');
			disableResponsive('medium');

			window.print();
		}

		this.watchLocationHash = function(path) {
			var regex = new RegExp('^/pw/home/');
			if(regex.exec(path)) {
				$('#wrapper').addClass('homepage');
			}
			else {
				$('#wrapper').removeClass('homepage');
			}
			_gaq.push(['_trackPageview']);

			if(responsive.scale == 'small') {
				$('#mobile-ad').show();
			}
		};

		// open all gated content
		// setCookie('archive-access-ok','1',1);
		// setCookie('validated',1);

		let cb = function (encryptedCustomerId) {
			if(typeof olytics !== 'undefined') {
				olytics.load({oid:"f52e66aeb0cf4c9fa1b238dd5cd6cb43"});
				if(encryptedCustomerId) {
					olytics.confirm(encryptedCustomerId);
				}
			}
		};

		if(!getCookie('validated') || getCookie('force-revalidate')){
			deleteCookie('force-revalidate');
			setCookie('validated',1);
			if(getCookie('credentials')){
				ajaxValidateLogin(cb);
			}
			else{
				ajaxInstitutionalLogin(cb);
			}
		}
		else {
			logInChanged();
			cb();
		}

		if(getCookie('credentials')) {
			_gaq.push(['_setCustomVar', 1, 'subscriber', 'yes', 1]);
		}
		else {
			_gaq.push(['_setCustomVar', 1, 'subscriber', 'no', 1]);
		}

		_gaq.push(['_trackPageview']);

		$('#mobile-ad-optout').click(function() {
			$(this).parent().hide();
			mobileAdOptOut = true;
		});

		params = getQueryStringParams();
		if(params['openlogin'] == '1') {
			openLoginDialog()
		}
	}

	function mobileChoice(elem) {
		this.element = elem;
		if(responsive.mobile) {
			$(this.element).html('<a href="javascript:mobileOptOut();">non-mobile view</a>');
		}
		else {
			$(this.element).html('<a href="javascript:mobileOptIn();">mobile view</a>');
		}
	}

	function logInChanged(force) {
		// if(1 || getCookie('credentials')) { // open all gated content
		if(force || getCookie('oly_enc_id') || getCookie('shadow_login')) {
			$('.loggedOutOnly').hide();
			$('.loggedInOnly').show();
			if(getCookie('archive-access-ok')) {
				$('.loggedInArchiveOnly').show();
			}
			else {
				$('.loggedInArchiveOnly').hide();
			}
		}
		else {
			$('.loggedInOnly').hide();
			$('.loggedOutOnly').show();
			$('.loggedInArchiveOnly').hide();
		}
	}

	function loggedInOnly(elem) {
		this.element = elem;
		$(this.element).addClass('loggedInOnly');
		// if(1 || getCookie('credentials')) { // open all gated content
		if(getCookie('oly_enc_id') || getCookie('shadow_login')) {
			$(this.element).show();
		}
		else {
			$(this.element).hide();
		}
	}

	function injectComments(elem) {
		this.element = elem;
		// if(1 || getCookie('credentials')) { // open all gated content
		if(getCookie('credentials')) {
			//let url = $(this.element).data('url');
			//$(this.element).html('<fb:comments id="fbcomments" href="'+url+'" num_posts="10" width="610"></fb:comments>');
		}
		else {
			$(this.element).hide();
		}
	}

	function loggedInArchiveOnly(elem) {
		this.element = elem;
		$(this.element).addClass('loggedInArchiveOnly');
		if(getCookie('archive-access-ok')) {
			$(this.element).show();
		}
		else {
			$(this.element).hide();
		}
	}

	function loggedOutOnly(elem) {
		this.element = elem;
		$(this.element).addClass('loggedOutOnly');
		// if(0 && !getCookie('credentials')) { // open all gated content
		if(!getCookie('oly_enc_id') && !getCookie('shadow_login')) {
			$(this.element).show();
		}
		else {
			$(this.element).hide();
		}

		//$(this.element).hide(); // assume logged in for now
	}

	function interstitialAd(elem) {
		this.element = elem;
		// Listen to message from child window
		var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
		var eventer = window[eventMethod];
		var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
		eventer(messageEvent,function(e) {
			if(e.data == 'loadInterstitial') {
				$('#interstitial').html("<iframe src=\"/pw/interstitial.html\" width=566 height=500 frameborder=0 scrolling=no></iframe>");
				$('#interstitial').dialog({width:610,height:560,modal:true});
			}
		},false);
	}


	function getXmlFirstChildData(tag,xmldoc) {

		var node = xmldoc.getElementsByTagName(tag).item(0);

		if(node && node.firstChild) {
			return unescape(node.firstChild.data);
		}
		else {
			return "";
		}
	}

	function setLocationHash(params) {
		if(!params) {
			location.hash = '';
		}
		else {
			location.hash = params;
		}
	}

	function openPopUp(url,width,height) {
		w = window.open(url, 'PopUp', 'scrollbars=yes,toolbar=no,location=no,directories=no,menubar=no,width=' + width + ',height=' + height);
	}

	function linkTracker(e) {
		this.element = $(e);

		var self = this;

		this.loading = false;
		this.links = [];

		this.start = function() {
			if(!this.loading) {
				this.loading = true;
				$.ajax({
					url: "/pw/link-tracker.json",
					dataType: 'json'
				}).done(function(data) {
					self.links = data.links;
					self.processLinks();
				});
			};
		};

		this.stop = function() {
		};

		this.getLink = function(id) {
			for(var i = 0; i < this.links.length; i++) {
				var link = this.links[i];
				if(link.record == id) {
					return link.click;
				}
			}
			return 'link tracker id' + id + ' not defined';
		};

		this.processLinks = function() {
			if(this.links.length) {
				$('.link-tracker').each(function() {
					$(this).removeClass('link-tracker');
					var link = self.getLink($(this).data('id'));
					$(this).empty().html(link);
				});
			}
		};

		this.watchLocationHash = function(path) {
			this.processLinks;
		};
	}

	function paginateList(container) {
		this.element = container;

		this.start = function () {
			if(!location.hash) {
				setLocationHash('page/1');
			}
			$(window).hashchange(
				function(instance) {
					return function () {
						if(location.hash != instance.currentLocationHash) {
							instance.currentLocationHash = location.hash;
							var pathArray = instance.currentLocationHash.split('/');
							if(pathArray[0] == '#page') {
								instance.handlePagination(pathArray[1]);
							}
						}
					}
				}(this)
			);
			$(window).hashchange();
		}

		this.handlePagination = function(page) {
			window.scrollTo(0,0);
			this.showPage(this.element.id, page);
			$('#pagination-' + page).addClass('pagination-current-page');
		}

		this.showPage = function(container,page) {
			var segments = $('#' + container).find('li');
			if(segments.length) {
				$('#' + container).find('li').hide();
				var pagination = this.paginate(page, 10, segments, container);
				if(pagination.pagination_buffer) {
					$('#pagination').html(pagination.pagination_buffer);
				}
				for(var i = 0; i < pagination.items.length; i++) {
					$(pagination.items[i]).show();
				}
			}
		}

		this.paginate = function(page, items_per_page, items, container) {

			if(!page) { page = 1; }
			else { page = page * 1 } // it might be a string

			var item_count = items.length;

			var first_item = (page * items_per_page) - (items_per_page - 1);

			var last_item  = first_item + items_per_page - 1;
			if(last_item > item_count) { last_item = item_count; }

			var items_on_page = new Array();
			for(var i = first_item; i <= last_item; ++i) {
				items_on_page.push(items[i - 1]);
			}

			var page_buffer = '';
			var pagination_buffer = '';

			if(item_count > items_per_page) {

				var pages = (item_count / items_per_page);

				if(pages != Math.floor(pages)) { pages = Math.floor(pages) + 1; }

				var next_page = page + 1;
				if(next_page > pages) { next_page = pages; }

				var prev_page = page - 1;
				if(prev_page < 1)    { prev_page = 1; }

				pagination_buffer += '<div class="pagination-container"><div class="pagination-last">';

				if(page != 1) {
					pagination_buffer += '<a href="#" onClick="setLocationHash(\'page/' + prev_page + '\');return false;">last</a> ';
				}
				else {
					pagination_buffer += '<a href="#" onClick="return false;" class="pagination-disabled"><span class="pagination-chevron">&laquo;</span> last</a> ';
				}

				pagination_buffer += '</div><div class="pagination-pages">';

				if(pages > 7) {
					pagination_buffer += ' <a href="#" onClick="setLocationHash(\'page/1\');return false;" class="pagination-page" id="pagination-1">1</a> ';

					var slice_start = page - 3;
					if(slice_start < 2) {
						slice_start = 2
					}

					var slice_end = slice_start + 6;
					if(slice_end > pages - 1) {
						slice_end = pages - 1
					}

					if(slice_start > 2) {
						pagination_buffer += ' ... ';
					}

					for(var i = slice_start; i <= slice_end ; i++) {
						pagination_buffer += ' <a href="#" onClick="setLocationHash(\'page/' + i + '\');return false;" class="pagination-page" id="pagination-' + i + '">'+ i +'</a> ';
					}

					if(slice_end < pages - 1) {
						pagination_buffer += ' ... ';
					}

					pagination_buffer += '<a href="#" onClick="setLocationHash(\'page/' + pages + '\');return false;" class="pagination-page" id="pagination-' + pages + '">'+ pages +'</a> ';
				}
				else {
					for(var i = 1; i <= pages; i++) {
						pagination_buffer += ' <a href="#" onClick="setLocationHash(\'page/' + i + '\');return false;" class="pagination-page" id="pagination-' + i + '">'+ i +'</a> ';
					}
				}

				pagination_buffer += '</div><div class="pagination-next">';

				if(page != pages) {
					pagination_buffer += ' <a href="#" onClick="setLocationHash(\'page/' + next_page + '\');return false;">next <span class="pagination-chevron">&raquo;</span></a>';
				}
				else {
					pagination_buffer += ' <a href="#" onClick="return false;" class="pagination-disabled">next <span class="pagination-chevron">&raquo;</span></a>';
				}

				pagination_buffer += '</div></div>';

			}

			return { pagination_buffer: pagination_buffer, items: items_on_page };
		}
	}

	function deleteCookie(name) {
		setCookie(name, "", "");
	}

	function surveyFormSubmitter(e) {
		this.element = $(e);
		var self = this;
		this.init = false;

		this.start = function() {
			if(!this.init) {
				this.init = 1;
				this.element.find('.submitter').click(function(e) {
					e.preventDefault();
					self.save();
				});
			}
		};

		this.stop = function() {
		};

		this.save = function() {
			var required = this.element.data('required').split(/,/);

			var errors = 0;
			for(var i = 0; i < required.length; i++) {
				if(!this.element.find('[name="'+required[i]+'"]').val()) {
					++errors;
				}
			}
			if(errors) {
				self.element.find('.survey-error').empty().append('please fill out all required fields');
				return;
			}


			var email = this.element.find('[name="email"]').val();
			var source = this.element.find('[name="source"]').val();
			var entry = JSON.stringify(this.element.serializeArray());
			self.element.find('.survey-error').empty();
			$.post('/pw/survey-submit.json',{'source': source, 'email': email, 'entry': entry},function(data) {
				if(data.status === 'ok') {
					self.element.find('.survey-form').hide();
					self.element.find('.survey-thanks').show();
				}
				else {
					self.element.find('.survey-error').empty().append(data.status);
				}
			});
		};
	}
	function gatedContent(e) {
		this.element = $(e);
		var self = this;
		this.start = function() {
			var input = $('<input class="gated-input" placeholder="Enter password to view this content" style="width:250px;">');
			input.insertBefore(self.element);
			input.keyup(function(e) {
				if($(this).val() === self.element.data('pw')) {
					$(this).hide();
					self.element.show();
				}
			});
		};
	}

