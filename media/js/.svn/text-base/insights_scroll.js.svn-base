/*
 * jQuery doTimeout: Like setTimeout, but better! - v1.0 - 3/3/2010
 * http://benalman.com/projects/jquery-dotimeout-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($){var a={},c="doTimeout",d=Array.prototype.slice;$[c]=function(){return b.apply(window,[0].concat(d.call(arguments)))};$.fn[c]=function(){var f=d.call(arguments),e=b.apply(this,[c+f[0]].concat(f));return typeof f[0]==="number"||typeof f[1]==="number"?this:e};function b(l){var m=this,h,k={},g=l?$.fn:$,n=arguments,i=4,f=n[1],j=n[2],p=n[3];if(typeof f!=="string"){i--;f=l=0;j=n[1];p=n[2]}if(l){h=m.eq(0);h.data(l,k=h.data(l)||{})}else{if(f){k=a[f]||(a[f]={})}}k.id&&clearTimeout(k.id);delete k.id;function e(){if(l){h.removeData(l)}else{if(f){delete a[f]}}}function o(){k.id=setTimeout(function(){k.fn()},j)}if(p){k.fn=function(q){if(typeof p==="string"){p=g[p]}p.apply(m,d.call(n,i))===true&&!q?o():e()};o()}else{if(k.fn){j===undefined?e():k.fn(j===false);return true}else{e()}}}})(jQuery);

/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2013 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.8.4
 *
 */
(function(a,b,c,d){var e=a(b);a.fn.lazyload=function(c){function i(){var b=0;f.each(function(){var c=a(this);if(h.skip_invisible&&!c.is(":visible"))return;if(!a.abovethetop(this,h)&&!a.leftofbegin(this,h))if(!a.belowthefold(this,h)&&!a.rightoffold(this,h))c.trigger("appear"),b=0;else if(++b>h.failure_limit)return!1})}var f=this,g,h={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null};return c&&(d!==c.failurelimit&&(c.failure_limit=c.failurelimit,delete c.failurelimit),d!==c.effectspeed&&(c.effect_speed=c.effectspeed,delete c.effectspeed),a.extend(h,c)),g=h.container===d||h.container===b?e:a(h.container),0===h.event.indexOf("scroll")&&g.bind(h.event,function(a){return i()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,c.one("appear",function(){if(!this.loaded){if(h.appear){var d=f.length;h.appear.call(b,d,h)}a("<img />").bind("load",function(){c.hide().attr("src",c.data(h.data_attribute))[h.effect](h.effect_speed),b.loaded=!0;var d=a.grep(f,function(a){return!a.loaded});f=a(d);if(h.load){var e=f.length;h.load.call(b,e,h)}}).attr("src",c.data(h.data_attribute))}}),0!==h.event.indexOf("scroll")&&c.bind(h.event,function(a){b.loaded||c.trigger("appear")})}),e.bind("resize",function(a){i()}),/iphone|ipod|ipad.*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent.persisted&&f.each(function(){a(this).trigger("appear")})}),a(b).load(function(){i()}),this},a.belowthefold=function(c,f){var g;return f.container===d||f.container===b?g=e.height()+e.scrollTop():g=a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return f.container===d||f.container===b?g=e.width()+e.scrollLeft():g=a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return f.container===d||f.container===b?g=e.scrollTop():g=a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return f.container===d||f.container===b?g=e.scrollLeft():g=a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!a.rightoffold(b,c)&&!a.leftofbegin(b,c)&&!a.belowthefold(b,c)&&!a.abovethetop(b,c)},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})})(jQuery,window,document)


function load_scroll() {}

load_scroll.prototype = {
	checking: false,
	loading: false,
	current_page: 1,
	content_selector: false,
	loader_ele: false,
	lazyoptions: { effectspeed: 900, effect: 'fadeIn', threshold: 0, data_attr: "original" },
	mobile : false,
	poll_dom_ms : 150,

	_init: function()
	{
		var inst = this;

		var isMobile = {
			Android: function() {
				return navigator.userAgent.match(/Android/i);
			},
			BlackBerry: function() {
				return navigator.userAgent.match(/BlackBerry/i);
			},
			iOS: function() {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
			Opera: function() {
				return navigator.userAgent.match(/Opera Mini/i);
			},
			Windows: function() {
				return navigator.userAgent.match(/IEMobile/i);
			},
			any: function() {
				return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
			}
		};

		inst.mobile = ( isMobile.any() );
		
		// auto load		
		$(window).scroll(function(){
			inst.check();
		});

		// bind manual load just incase
		$('.insights-more-p').click(function () {
			if( !inst.loading )
				inst.load_more();			
		});

		inst.content_selector = $('#displays_content');

		inst.loader_ele = $('#more-p-loader');

		if(inst.mobile){
			//console.log('mobile condition');
			//inst.lazyoptions.data_attr = "mobile";
			inst.lazyoptions.effect = undefined;
			inst.lazyoptions.effectspeed = undefined;
			inst.poll_dom_ms = 500;
		}

		inst.load_lazy(inst.lazyoptions.effectspeed,inst.lazyoptions.threshold);
		// load remaining differently
		if(inst.mobile){
			inst.lazyoptions.threshold = 600;
		}else{
			inst.lazyoptions.threshold = 400;
		}
	},

	check: function()
	{

		var inst = this;		

		if( inst.checking )
			return false;

		inst.checking = true;

		if( inst.page_bottom() && !inst.loading )
		{
			inst.load_more();
		}
		else
		{
			//console.log('dont need to load more');
			inst.checking = false;
		}
	},

	load_more: function()
	{
		var inst = this;
		inst.loading = true;
		inst.loader_ele.show();

		//console.log('need to load more content');

		//load more content
		inst.current_page = inst.current_page + 1;

		$.get('/insights/ajax_get_images', { 'p': inst.current_page }, function(data) {
			inst.content_selector.append(data);
			inst.load_lazy(inst.lazyoptions.effectspeed,inst.lazyoptions.threshold);
			// Poll every poll_dom_ms ms until some_condition is true
			$.doTimeout( inst.poll_dom_ms, function(){
				//console.log('checking if content loaded');
				if ( inst.content_loaded() ) {
					//console.log('content is now loaded, resume');
					// do something finally
					inst.loader_ele.hide();
					inst.loading = false;
					inst.checking = false;
					// lastly check again if even more content is needed
					inst.check();

					return false;
				}
				else
				{
					//console.log('not done loading');
				}
				return true; // repeat in 250 ms
			});
		});
	},

	page_bottom: function() 
	{
		var scroll_top = $(window).scrollTop();
		var window_height = $(window).height();
		var document_height = $(document).height();

		//console.log("scrolltop:" + scroll_top + "  document.height: " + document_height + "  window.height:" + window_height);
		var cond1 =  document_height - scroll_top;
		var cond2 =  document_height - (window_height + scroll_top);
		//console.log("cond1:" + cond1 + "  < 500 OR " + cond2 + "  < " + window_height);

		if ( document_height - scroll_top < 500 || document_height - (window_height + scroll_top) < window_height ){
			return true;
		}
		return false;
	},

	content_loaded: function()
	{
		if( $('#img_p' + this.current_page).length != 0 )
			return true;
		else
			return false;
	},

	load_lazy: function(speed,thresh)
	{
		var inst = this;
		thresk = typeof thresh !== 'undefined' ? thresh : 0;

		$("img.lazy").lazyload({
			//placeholder : "/media/images/insights/grey.gif",
     		effect      : inst.lazyoptions.effect,
     		threshold      : thresh,
     		data_attribute : inst.lazyoptions.data_attr,
			effectspeed : speed
		}).removeClass("lazy");
	}
	
}

/* 

$(window).bind("load", function() { 
    var timeout = setTimeout(function() {$("img.lazy").trigger("sporty")}, 5000);
}); */

load_scroll = new load_scroll();
$(document).ready(function()
{
	load_scroll._init();
});
