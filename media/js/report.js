function report(){};

report.prototype = 
{	
	//class variables
	//global report ID
	id: 0,
	
	who_type_status_message: null,
	
	//class methods	
	init: function()
	{
		//setup the report id class variable
		this.id = $('#report_id').val();
		
		//style any ui stuff
		this.ui();
		//call the binds
		this.binds();
	},
	
	//this is where any UI functions should be called
	ui: function()
	{
		this.hover_unfollow_button();
	},
	
	binds: function()
	{
		//create a temp local instance to prevent conflicts with the jquery 'this'
		var inst = this;
		
		//bind the follow & unfollow button
		$('ul.follow-counter').find('.follow_unfollow').unbind();
		$('ul.follow-counter').find('.follow_unfollow').bind('click', function()
		{
			inst.follow_unfollow($(this));
		});
		
		$('#who_type').live('change', function(e) {
			var who_type_id = e.target.value;
			
			inst.saveWhoType(who_type_id);
		});
		
		inst.who_type_status_message = $('#who_type_status_message');
		
		//restyle!
		inst.ui();
	},
	
	follow_unfollow: function(jqInst)
	{
		var type = $(jqInst).attr('id');
		var inst = this; 
		if(type == 'follow_complaint_no_login')
		{
			window.location = '/login';
			return false;
		}
		
		$.ajax({
			url: '/report/' + type + '/' + inst.id,
			dataType: 'json',
			mode: 'get',
			success: function(data)
			{
				if(typeof(data.success) != 'undefined')
				{
					inst.set_follow_button(type);
				}
				if(typeof(data.count_text) != 'undefined')
				{
					inst.set_followers_count(data.count_text);
				}				
			},
			global: false,
			beforeSend: function()
			{
				$('.follow_unfollow').css('background', '#ED5598');		
				$('.follow_unfollow').attr("disabled", "disabled");				
			},
			complete: function()
			{
				$('.follow_unfollow').removeAttr("style");
				$('.follow_unfollow').removeAttr("disabled");				
			}
		});		
	},
	
	open_company_update: function(update_id)
	{
		//ensure the the dialog div exists, create it if it doesnt
		if(!$sb.exists($(this.company_update_dialog_selector)) || !$sb.is_dialog($(this.company_update_dialog_selector)))
			this._create_company_update_dialog();
			
		//get the company id
		var company_id = this._get_company_id();

		//reset the update id if this is a new one
		if($sb.empty(update_id))
			update_id = '';

		//get the html for the dialog
		var inst = this;
		this.get_dialog = $sb.ajax;
		this.get_dialog.get('/admin/company_update/' + company_id + '/' + update_id, '', function(json)
		{
			if(typeof(json.view) != 'undefined')
			{
				//empty the dialog
				$(inst.company_update_dialog_selector).empty();
				//append the html
				$(inst.company_update_dialog_selector).append(json.view);			
				//open up the dialog
				$(inst.company_update_dialog_selector).dialog('open');
				//setup the redactor editor
				inst.reactor_inst = $('textarea.redactor_editor').redactor({
					autoresize: false,
					buttons: ['formatting', '|', 'bold', 'italic', 'list', '|', 'unorderedlist', 'orderedlist', 'outdent', 'indent', '|', 'table', 'link']
				});
				if(!$sb.empty(json.update))
					$('textarea.redactor_editor').setCode(json.update);				
			}
		});	
			
	},
	
	save_company_update: function()
	{
		//get the company id
		var company_id = this._get_company_id();
		var update_id = $('textarea.redactor_editor').attr('data-company_update_id');	
	
		//get the data
		var data = new Object;
		data.update = this.reactor_inst.getCode();
		
		//post the data
		this.save = $sb.ajax;
		this.save.post('/admin/company_update/' + company_id + '/' + update_id, data , function(json)
		{
			window.location = location.pathname;
		});
	},	
	
	set_follow_button: function(type)
	{
		var follow_button = '<a class="button1 follow_unfollow button-small" href="#" onclick="return false;" id="follow"> Follow this Complaint</a>';
		var unfollow_button = '<a class="button1 follow_unfollow button-small" href="#" onclick="return false;" id="unfollow"> Following</a>';
		switch(type)
		{
			case 'follow':
				$('.follow_unfollow').replaceWith(unfollow_button);
				break;
			case 'unfollow':
				$('.follow_unfollow').replaceWith(follow_button);
				break;	
		}
		this.binds();
		this.hover_unfollow_button();		
	},
	
	hover_unfollow_button: function()
	{
		$('#unfollow').mouseenter(function()
		{
			$(this).text('Unfollow');	
		}).mouseleave(function()
		{
			$(this).text('Following');	
		});		
	},
	
	set_followers_count: function(count_text)
	{
		$('#followers_count').replaceWith(count_text);
	},
	
	saveWhoType: function(new_who_type_id) {
		var inst = this;
		
		inst.who_type_status_message.html('Saving...');
		
		var request = $sb.ajax;
		request.async = false;
		
		request.post('/report/save_who_type', { 'report_id': inst.id, 'new_who_type_id': new_who_type_id }, function(json)
		{
			inst.who_type_status_message.html('');
		});
	}
}

//stuff this in a doc ready to fire after jquery
$(document).ready(function()
{
	//init the contact class
	$sb.report = new report();
	$sb.report.init();
});