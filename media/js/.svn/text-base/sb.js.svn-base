function sb(){};

sb.prototype = 
{
	_page: null,
	_url: null,
	
	live: true,

/*	Might remove these
	live_host: 'http://www.scambook.com',
	live_ssl_host: 'https://www.scambook.com',
*/
	
	controller: null,
	method: null,
	id: null,
	query: null,
	
	broswer: null,
	browser_version: null,

	//initalizes global variables	
	_init: function()
	{
		this._url = this._parse_url();
		this.controller = this._get_controller();
		this.method = this._get_method();
		this.id = this._get_page_id();
		this.query = this._get_query();
		this.live = this._is_live();
		this.binds();
		this._ui();

		// Update login controls
		if ($('#login_container').length === 1)
		{
			var request = $sb.ajax;
			request.get('/ajax/is_logged_in', { is_new_header: $('body').hasClass('new-header') ? 1 : 0, is_dashboard: $('body').hasClass('is-dashboard') ? 1 : 0 }, function(result) {
				if (result.jgrowl_success !== '')
					$.jGrowl(result.jgrowl_success, { theme: 'success', sticky: true });

				if (result.jgrowl_error !== '')
					$.jGrowl(result.jgrowl_error, { theme: 'error', sticky: true });

				if (typeof $sb.admin === 'object')
					$sb.admin.binds();
			});

		};
	},
	
	//Global Binds 
	//This is reloaded after any sb.ajax request is completed. Be sure to use unbind!
	binds: function()
	{
		$('.close_dialog').unbind('click');
		$('.close_dialog').bind('click', function()
		{
			var dialog_selector = $(this).closest('.ui-dialog-content').attr('id');
			var dialog = $('#' + dialog_selector);
			$(dialog).dialog('close');
		});
		
		// AJAX auto form submission
		$('form.sb_auto_submit').unbind('submit').bind('submit', function(e) {
			e.preventDefault();
			
			$sb.ajax.auto_submit($(this));
		});

		$('#fake_live_toggle').unbind('click');
		$('#fake_live_toggle').click(function()
		{
			var opened = ($('#fake_live_chat_container').attr('data-opened') === 'true');

			$('#fake_live_chat_container').css('bottom', !opened ? '0px' : '-207px');

			opened = !opened;

			$('#fake_live_chat_container').attr('data-opened', opened ? 'true' : 'false');
		});
	},
	
	//works like php empty
	empty: function(mixed)
	{
		var empty = true;
		var is = typeof(mixed);
		switch(is)
		{
			case 'object':
				if((mixed != null) && (mixed != 'null') && (mixed != ''))
					empty = false;
				break;
			case 'string':
				if((mixed != 'null' ) && (mixed != 'undefined') && (mixed != 'false') && (mixed != '0') && (mixed != ''))
					empty = mixed.length < 0;
				break;	
			case 'number':
				if(mixed > 0)
					empty = mixed;
				break;	
			case 'boolean':
				if(mixed != false)
					empty = false;
				break;											
			default:
				empty = true;			
		}
		
		return empty;	
	},	
	
	//return true or false on the existance of an object. 
	//Works for jquery selectors
	exists: function(object)
	{
		return object.length > 0;
	},
	
	is_dialog: function(jquery_object)
	{
		return jquery_object.is(':data(dialog)');
	},
	
	//load's an external SB JS Class
	load: function(file_path, class_name)
	{
		
	},
	
	log: function(message)
	{
		log(message);
	},
	
	show_error: function(message)
	{
		if(typeof($.jGrowl) != 'undefined') 
		{
			$.jGrowl('&middot; ' + message , { theme: 'error', sticky: true });
		}
		else
			alert(message);	
	},
	
	show_success: function(message)
	{
		if(typeof($.jGrowl) != 'undefined')
		{
			$.jGrowl('&middot; ' + message , { theme: 'success', sticky: true });			
		}
		else
			alert(message);
	},
	
	_ui: function()
	{
		//setup any global toolips
		try
		{
			if ( typeof $.fn.qtip !== 'undefined' )
			{
				$('.sb-tooltip').qtip('destroy');
				$('.sb-tooltip').qtip({
					content: {
						text: function(api) {
								return $(this).find('.sb-tooltip-content').text();
							}
						},
					position: {
						my: 'top left',
						target: 'mouse',
						viewport: $(window), // Keep it on-screen at all times if possible
						adjust: {
							x: 10,  y: 10
						}
					},
					hide: {
						fixed: true // Helps to prevent the tooltip from hiding ocassionally when tracking!
					},
					style: 'ui-tooltip-shadow'
				});
			}
		}
		catch(error) 
		{
			$sb.log(error);
		}
		
		//setup default datepicker
		$('.sb_datepicker').each(function()
		{
			if(!$sb.empty($(this).val()))
				var date = new Date($(this).val());
			else
				var date = new Date();
			
			date = $(this).val();
			$(this).datepicker({
				defaultDate: date
			});
		});
		
		try 
		{
			if ( typeof $.fn.selectmenu !== 'undefined' ) {
				$('select.sb_selectmenu').selectmenu('destroy');
				$('select.sb_selectmenu').selectmenu();
			}
		}
		catch(error) 
		{
			//$sb.log(error);	
		}		
		

	},
	
	_is_live: function()
	{
		var host = location.host;
		var url = host.substr(-3);
		if(url != 'com')
			return false;
		else
			return true;
	},
	
	_get_js: function()
	{
		
	},
	
	_get_controller: function()
	{
		if(typeof(this._url[0]) != 'undefined')
			return this._url[0];	
		else
			return null;
	},
	
	_get_method: function()
	{
		if(typeof(this._url[1]) != 'undefined')
			return this._url[1];	
		else
			return null;		
	},
	
	_get_page_id: function()
	{
		if(typeof(this._url[2]) != 'undefined')
			return this._url[2];	
		else
			return null;	
	},
	
	_get_query: function()
	{
		if(typeof(location.search) != 'undefined')
			return location.search;
		else
			return null;		
	},
	
	_parse_url: function()
	{
		var url = location.pathname;
		var url = url.substr(1).split('/');
		return url;
	}
}

$sb = new sb();
$(document).ready(function()
{
	$sb._init();
});

window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());	
