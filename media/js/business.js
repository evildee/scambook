function business(){};

business.prototype = 
{	
	//class variables
	//global report ID
	id: 0,
	page: null,
	page_id: null,
	
	ui_loaded: false,
	
	//profile edit, and setting's reqion switcher
	region_switcher: Object,
	
	//activity feed
	activity_feed_open: false,
	loaded_activities: 0,
	available_activities: 0,
	is_more_activities: false,
	
	_stripe_publishable_key: null,
	_stripe_token: null,
	
	//class methods	
	init: function()
	{
		//setup any class properties
		this.page = this._get_page();
		this.page_id = this._get_page_id();
		if(this._is_business_controller())
		{
			//style any ui stuff
			this.ui();
			//call the binds
			this.binds();	
		}
		//set the available activities
		this.available_activities = parseInt($('#available_activities').val());
		//set the loaded activities
		this.loaded_activities = parseInt($('#loaded_activities').val());		
	},
	
	//this is where any UI functions should be called
	ui: function()
	{
		//jUI selectmenu
		$('.selectmenu').selectmenu();	
	
		//this is for running page/method specific ui stuff
		switch(this.page)
		{
			case 'profile_edit':
				//setup region_switcher
				this.setup_region_switcher('form#profile_edit_form', '#profile_edit_country');
				break;
			case 'settings':
				this.setup_region_switcher('form#account_settings_form', '#company_billing_country_code');
				break;		
			default:
				break;
		}
		
		this.ui_loaded = true;
	},
	
	binds: function()
	{
		//create a temp local instance to prevent conflicts with the jquery 'this'
		var inst = this;

		//this is for running page/method specific binds
		switch($sb.method)
		{
			case 'profile_edit':
				var country_select = $('#profile_edit_country');
				country_select.die();
				country_select.bind('change', function()
				{
						inst.change_country('form#profile_edit_form', '#profile_edit_country');
				});					
				break;
			case 'history':
				//bind the months select
				$('#months').unbind();
				$('#months').bind('change', function()
				{
					inst.change_month($(this).val());
				});
				break;
			case 'overview':
			case 'resolutions':
				//bind the complaint statuses select
				$('#complaint-statuses').unbind();
				$('#complaint-statuses').bind('change', function()
				{
					inst.change_complaint_statuses($(this).attr('company_id'), $(this).val());
				});
				
				//bind the complaint sort select
				$('#complaint-sort').unbind();
				$('#complaint-sort').bind('change', function()
				{
					inst.change_complaint_sort($(this).attr('company_id'), $(this).attr('status'), $(this).val());
				});
				
				//view activity history
				$('.box-container-round .history').unbind('click');
				$('.box-container-round .history').bind('click', function() 
				{
					inst.view_activity_history($(this));
				});
				break;
			case 'settings':
				//bind the country selection for the region switcher
				var country_select = $('#company_billing_country_code');
				country_select.die();
				country_select.bind('change', function()
				{
					inst.change_country('form#account_settings_form', '#company_billing_country_code');
				});
				
				//prevent the submit form from going
				$('#submit_billing_changes').unbind('click');
				$('#submit_billing_changes').bind('click', function()
				{
					inst.process_billing_changes();
				});		
				break;
			case 'activity_feed':
				//bind the more activitiy button
				$('#morebutton2').unbind('click');
				$('#morebutton2').bind('click', function(event)
				{
					inst.load_more_activities();
					event.preventDefault();
				});						
			default:
				break;
		}
		
		//Global UI Binds
		//bind the company dropdown
		$('#company-options').unbind();
		$('#company-options').bind('change', function()
		{
			inst.change_company($(this).val());
		});
		
		//bind the activity feed
		$('#activity_title').unbind('click');
		$('#activity_title').bind('click', function(event)
		{
			//mark the loaded set as read
			if(!inst.activity_feed_open && inst.loaded_activities <= 10)
				inst.mark_loaded_as_read();
			//open up the activity feed
			this.activity_feed_open = inst.toggle_activity_feed(); 
			event.preventDefault(); 
		});
		
		//bind the more activitiy button
		$('#morebutton').unbind('click');
		$('#morebutton').bind('click', function(event)
		{
			inst.load_more_activities();
			event.preventDefault();
		});
		
		//get the deposit funds dialog
		$('#get_deposit_link').unbind('click');
		$('#get_deposit_link').bind('click', function()
		{
			inst.get_deposit_dialog();
		}); 

		//get the deposit funds dialog
		$('.get_purchase_credits_link').unbind('click');
		$('.get_purchase_credits_link').bind('click', function()
		{
			inst.get_purchase_credits_dialog();
		}); 		
		
		$('.get_initiate_resolution_link').unbind('click');
		$('.get_initiate_resolution_link').bind('click', function()
		{
			inst.get_initiate_resolution_dialog($(this).attr('data-report_id'));
		});
		
		$('.get_subscribe_link').unbind('click');
		$('.get_subscribe_link').bind('click', function()
		{
			inst.get_subscribe_dialog($(this).attr('data-report_id'));
		});
		
		$('.get_send_message_link').unbind('click');
		$('.get_send_message_link').bind('click', function()
		{
			inst.get_send_message_dialog($(this).attr('data-report_id'));
		});
		
		$('.get_offer_settlement_link').unbind('click');
		$('.get_offer_settlement_link').bind('click', function()
		{
			inst.get_offer_settlement_dialog($(this).attr('data-report_id'));
		});
		
		$('.get_resolved_offline_link').unbind('click');
		$('.get_resolved_offline_link').bind('click', function()
		{
			inst.get_resolved_offline_dialog($(this).attr('data-report_id'));
		});
		
		$('.get_scambook_assistance_link').unbind('click');
		$('.get_scambook_assistance_link').bind('click', function()
		{
			inst.get_scambook_assistance_dialog($(this).attr('data-report_id'));
		});
		
		$('.get_dispute_link').unbind('click');
		$('.get_dispute_link').bind('click', function()
		{
			inst.get_dispute_dialog($(this).attr('data-report_id'));
		});
		
		$('.get_trial_opt_out_link').unbind('click');
		$('.get_trial_opt_out_link').bind('click', function()
		{
			inst.get_trial_opt_out_dialog();
		});

	},
	
	change_company: function(id)
	{
		window.location = '/business/overview/' + id;
	},
	
	change_complaint_statuses: function(company_id, id)
	{
		var location = '/business/resolutions/' + company_id;
		if(id)
			location += '/status/' + id;
		window.location = location;
	},
	
	change_complaint_sort: function(company_id, status, id)
	{
		var location = '/business/resolutions/' + company_id;
		if(status)
			location += '/status/' + status;
		if(id)
			location += '/sort/' + id;
		window.location = location;
	},
	
	change_country: function(form_id_selector, country_id_selector)
	{
	    var form = $(form_id_selector);
	    var country_selector = form.find(country_id_selector);	
	    this.region_switcher.start(form, country_selector);
	},	
	
	change_month: function(id)
	{
		window.location = '/business/history?month=' + id;
	},
	
	get_dispute_dialog: function(report_id)
	{
		var inst = this;
		var dialog = $('#dispute_dialog');
		//if the dialog exists, open it
		if(!$sb.is_dialog(dialog))
		{
			//setup the dialog
			$(dialog).dialog({
				modal: true,
				autoOpen: false,
				width: 560
			})
		}

		//build out the url for the request
		var url = '/business/action/' + report_id;
		var url_data = new Object;
		url_data.type = 'dispute';		
		//get the html for the dialog
		inst.get_dialog = $sb.ajax;
		inst.get_dialog.get(url	, url_data, function(json)
		{
			if(typeof(json.html) != 'undefined')
			{
				//empty the dialog
				$(dialog).empty();
				//append the html
				$(dialog).append(json.html);			
				//open up the dialog
				$(dialog).dialog('open');				
			}
		});		
	},
	
	get_deposit_dialog: function()
	{
		var inst = this;
		var dialog = $('#deposit_dialog');
		//if the dialog exists, open it
		if(!$sb.is_dialog(dialog))
		{
			//setup the dialog
			$(dialog).dialog({
				modal: true,
				autoOpen: false,
				width: 480
			})		
		}

		//get the html for the dialog
		inst.get_dialog = $sb.ajax;
		inst.get_dialog.get('/business/deposit_funds', '', function(json)
		{
			if(typeof(json.html) != 'undefined')
			{
				//empty the dialog
				$(dialog).empty();
				//append the html
				$(dialog).append(json.html);			
				//open up the dialog
				$(dialog).dialog('open');				
			}
		});	
	},
	
	get_purchase_credits_dialog: function()
	{
		var inst = this;
		var dialog = $('#purchase_credits');
		//if the dialog exists, open it
		if(!$sb.is_dialog(dialog))
		{
			//setup the dialog
			$(dialog).dialog({
				modal: true,
				autoOpen: false,
				width: 480
			})
		}

		//get the html for the dialog
		inst.get_dialog = $sb.ajax;
		inst.get_dialog.get('/business/purchase_credits', '', function(json)
		{
			if(typeof(json.html) != 'undefined')
			{
				//empty the dialog
				$(dialog).empty();
				//append the html
				$(dialog).append(json.html);			
				//open up the dialog
				$(dialog).dialog('open');				
			}
		});	
	},


	get_initiate_resolution_dialog: function(report_id)
	{
		var inst = this;
		var dialog = $('#initiate_resolution_dialog');
		//if the dialog exists, open it
		if(!$sb.is_dialog(dialog))
		{
			//setup the dialog
			$(dialog).dialog({
				modal: true,
				autoOpen: false,
				width: 560
			})		
		}

		//build out the url for the request
		var url = '/business/action/' + report_id;
		var url_data = new Object;
		url_data.type = 'initiate';		
		//get the html for the dialog
		inst.get_dialog = $sb.ajax;
		inst.get_dialog.get(url	, url_data, function(json)
		{
			if(typeof(json.html) != 'undefined')
			{
				//empty the dialog
				$(dialog).empty();
				//append the html
				$(dialog).append(json.html);			
				//open up the dialog
				$(dialog).dialog('open');				
			}
		});	
	},
	
	get_offer_settlement_dialog: function(report_id)
	{
		var inst = this;
		var dialog = $('#offer_settlement_dialog');
		//if the dialog exists, open it
		if(!$sb.is_dialog(dialog))
		{
			//setup the dialog
			$(dialog).dialog({
				modal: true,
				autoOpen: false,
				width: 560
			})		
		}

		//build out the url for the request
		var url = '/business/action/' + report_id;
		var url_data = new Object;
		url_data.type = 'offer';		
		//get the html for the dialog
		inst.get_dialog = $sb.ajax;
		inst.get_dialog.get(url	, url_data, function(json)
		{
			if(typeof(json.html) != 'undefined')
			{
				//empty the dialog
				$(dialog).empty();
				//append the html
				$(dialog).append(json.html);			
				//open up the dialog
				$(dialog).dialog('open');				
			}
		});				
	},
	
	get_resolved_offline_dialog: function(report_id)
	{
		var inst = this;
		var dialog = $('#resolved_offline_dialog');
		//if the dialog exists, open it
		if(!$sb.is_dialog(dialog))
		{
			//setup the dialog
			$(dialog).dialog({
				modal: true,
				autoOpen: false,
				width: 560
			})		
		}

		//build out the url for the request
		var url = '/business/action/' + report_id;
		var url_data = new Object;
		url_data.type = 'notification';		
		//get the html for the dialog
		inst.get_dialog = $sb.ajax;
		inst.get_dialog.get(url	, url_data, function(json)
		{
			if(typeof(json.html) != 'undefined')
			{
				//empty the dialog
				$(dialog).empty();
				//append the html
				$(dialog).append(json.html);			
				//open up the dialog
				$(dialog).dialog('open');				
			}
		});			
	},
	
	get_scambook_assistance_dialog: function(report_id)
	{
		var inst = this;
		var dialog = $('#scambook_assistance_dialog');
		//if the dialog exists, open it
		if(!$sb.is_dialog(dialog))
		{
			//setup the dialog
			$(dialog).dialog({
				modal: true,
				autoOpen: false,
				width: 560
			})	
		}

		//build out the url for the request
		var url = '/business/action/' + report_id;
		var url_data = new Object;
		url_data.type = 'assistance';		
		//get the html for the dialog
		inst.get_dialog = $sb.ajax;
		inst.get_dialog.get(url	, url_data, function(json)
		{
			if(typeof(json.html) != 'undefined')
			{
				//empty the dialog
				$(dialog).empty();
				//append the html
				$(dialog).append(json.html);			
				//open up the dialog
				$(dialog).dialog('open');				
			}
		});			
	},

	get_send_message_dialog: function(report_id)
	{
		var inst = this;
		var dialog = $('#send_message_dialog');
		//if the dialog exists, open it
		if(!$sb.is_dialog(dialog))
		{
			//setup the dialog
			$(dialog).dialog({
				modal: true,
				autoOpen: false,
				width: 560
			})	
		}

		//build out the url for the request
		var url = '/business/action/' + report_id;
		var url_data = new Object;
		url_data.type = 'message';		
		//get the html for the dialog
		inst.get_dialog = $sb.ajax;
		inst.get_dialog.get(url	, url_data, function(json)
		{
			if(typeof(json.html) != 'undefined')
			{
				//empty the dialog
				$(dialog).empty();
				//append the html
				$(dialog).append(json.html);			
				//open up the dialog
				$(dialog).dialog('open');				
			}
		});	
	},

	get_subscribe_dialog: function()
	{
		var inst = this;
		var dialog = $('#initiate_resolution_dialog');
		//if the dialog exists, open it
		if(!$sb.is_dialog(dialog))
		{
			//setup the dialog
			$(dialog).dialog({
				modal: true,
				autoOpen: false,
				width: 480
			})		
		}

		//get the html for the dialog
		inst.get_dialog = $sb.ajax;
		inst.get_dialog.get('/business/subscribe', '', function(json)
		{
			if(typeof(json.html) != 'undefined')
			{
				//empty the dialog
				$(dialog).empty();
				//append the html
				$(dialog).append(json.html);			
				//open up the dialog
				$(dialog).dialog('open');				
			}
		});			
	},
	
	get_trial_opt_out_dialog: function()
	{
		var inst = this;
		var dialog = $('#trial_opt_out');
		//if the dialog exists, open it
		if(!$sb.is_dialog(dialog))
		{
			//setup the dialog
			$(dialog).dialog({
				modal: true,
				autoOpen: false,
				width: 480
			})	
		}

		//get the html for the dialog
		inst.get_dialog = $sb.ajax;
		inst.get_dialog.get('/business/trial_opt_out', '', function(json)
		{
			if(typeof(json.html) != 'undefined')
			{
				//empty the dialog
				$(dialog).empty();
				//append the html
				$(dialog).append(json.html);			
				//open up the dialog
				$(dialog).dialog('open');				
			}
		});			
	},
	
	load_more_activities: function()
	{
		if(this.loaded_activities < this.available_activities)
		{
			var offset = this.loaded_activities;
			var inst = this;
			$.ajax({
				url: '/business/activity_feed/' + inst.page_id + '/' + offset,
				dataType: 'json',
				mode: 'get',
				global: false,
				beforeSend: function()
				{
					$('#morebutton').hide();
				},
				success: function(json)
				{
					//prepend the activities above the load more button				
					if(typeof(json.feed) != 'undefined')
						$('#load_more_target').before(json.feed);
					if(typeof(json.offset) != 'undefined')
						inst.loaded_activities = (10 + parseInt(json.offset));
					if(typeof(json.count) != 'undefined')
						inst.available_activities = parseInt(json.count);
					if(typeof(json.unread_count) != 'undefined')
						$('#unread_count').text(json.unread_count);
					if(inst.page == 'activity_feed')
						$('#morebutton2').before(json.feed);	
				},
				complete: function()
				{
					//enable the button
					$('#morebutton').show();
					//if there isn't any more to load, remove the view more button
					if(inst.loaded_activities >= inst.available_activities) 
					{
						$('#morebutton').hide();
						$('#morebutton2').hide();
					}
				}
			});
		}	
	},
	
	mark_loaded_as_read: function()
	{
		$.ajax({
			url: '/business/mark_loaded_as_read/' + this.page_id,
			dataType: 'json',
			mode: 'get'
		});			
	},
	
	process_billing_changes: function()
	{
		inst = this;
		//get and set the stripe key
		inst._stripe_publishable_key = $('#stripe_publishable_key').val();	
		Stripe.setPublishableKey(inst._stripe_publishable_key);
		Stripe.createToken({
			number: $('[name="card_number"]').val(),
            cvc: $('[name="card_cvc"]').val(),
            exp_month: $('[name="card_month"]').val(),
            exp_year: $('[name="card_year"]').val(),
            name: $('[name="card_name"]').val(),
            address_line1: $('[name="company_billing_address_1"]').val(),
            address_line2: $('[name="company_billing_address_2"]').val(),
            address_zip: $('[name="company_billing_zipcode"]').val(),
            address_state: $('[name="company_billing_region"]').val(),
            address_country: $('[name="company_billing_country_code"]').val()
        }, function(status, response)
        {
	        if (response.error) {
	            //show error
	            inst.show_error(response.error.message);
	            return 'error';
	        } else {
	            this._stripe_token = response['id'];
	            $('#stripe_token').val(this._stripe_token);
	            $('form#account_settings_form').removeAttr('onsubmit');
	            $('form#account_settings_form').submit();
	        }        
        });
	},
	
	show_error: function(message)
	{
		$.jGrowl('&middot; ' + message , { theme: 'error', sticky: true });	
	},
	
	setup_region_switcher: function(form_id_selector, country_id_selector)
	{
	    var form = $(form_id_selector);
	    var country_selector = form.find(country_id_selector);

	    this.region_switcher = new RegionSwitcher();
	    this.region_switcher.jquery_selectmenu_class = 'jqselectmenu';
	    this.region_switcher.use_jquery_selectmenu = true;	    	
	    this.region_switcher.region_field_class = 'region-field';		
	    this.region_switcher.us_states_element = 'us_states';
	    this.region_switcher.ca_provinces_element = 'ca_provinces';
	    this.region_switcher.other_region_element = 'other_region';
	    this.region_switcher.region_label = 'state_region_label';	    
		if(this.page == 'profile_edit')
		    this.region_switcher.region_field_name = 'region';
		else if(this.page == 'settings')
		    this.region_switcher.region_field_name = 'company_billing_region';
	    this.region_switcher.disabled_region_field_name = 'disabled_region';		
	    this.region_switcher.us_states_label_text = "Billing State";
	    this.region_switcher.ca_provinces_label_text = "Billing Province";
	    this.region_switcher.other_region_label_text = "Billing Region";
	    this.region_switcher.start(form, country_selector);				
	},	
	
	toggle_activity_feed: function(jqInst)
	{
		//open the activity feed
		if(!this.activity_feed_open)
		{	
			//open the feed
			$("div#act-content").slideDown("fast");			
			//change the open id to closed
			$('.activity_link').attr('id', 'open');
			$('.activity_link').first('span').html('&#9660; Activity Feed');
			//mark the feed as opened
			this.activity_feed_open = true;		
		}
		else //close the activity feed
		{
			//open the feed
			$("div#act-content").slideUp("fast");			
			//change the open id to closed
			$('.activity_link').attr('id', 'closed');
			$('.activity_link').first('span').html('&#9650; Activity Feed');					
			//mark the feed as opened
			this.activity_feed_open = false;		
		}		
	},
	
	view_activity_history: function(jqInst)
	{
		var report_id = $(jqInst).attr('report_id');
		var activity_history = '#activity-history-' + report_id;
		if($(activity_history).is(":hidden"))
		{
			if($(activity_history).html() == '')
			{
				$.ajax({
					url: '/business/ajax_report_history/' + report_id,
					success: function(data) {
					$(activity_history).html(data);
					$(activity_history).slideDown(100);
				  }
				});
			}
			else
			{
				$(activity_history).slideDown(100);
			}
		}
		else
		{
			$(activity_history).hide();
		}
		return false;		
	},
	
	_get_page: function()
	{
		//parse the url and get the page
		var url_parts = this._parse_url();
		if(typeof(url_parts[1] != 'undefined'))
		{
			return url_parts[1];	
		}
		else
		{
			return null;
		}
	},
	
	_get_page_id: function()
	{
		//parse the url and get the page
		var url_parts = this._parse_url();
		if(typeof(url_parts[2] != 'undefined'))
		{
			return url_parts[2];	
		}
		else
		{
			return null;
		}		
	},
	
	_parse_url: function()
	{
		var url = location.pathname;
		//url.substr(1);
		var url_parts = url.substr(1).split('/');
		return url_parts;
	},
	
	_is_business_controller: function()
	{
		var url_parts = this._parse_url();
		if(typeof(url_parts[0]) != 'undefined' && url_parts[0] == 'business')
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}

//stuff this in a doc ready to fire after jquery
$(document).ready(function()
{
	//init the contact class
	$sb.business = new business();
	$sb.business.init();
});
