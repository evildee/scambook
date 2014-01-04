function company(){};

company.prototype = 
{	
	//class variables
	//global company ID
	id: 0,
	
	//class methods	
	init: function()
	{
		//setup the company id class variable
		this.id = $('#company_id').val();
		
		//style any ui stuff
		this.ui();
		//call the binds
		this.binds();
	},
	
	//this is where any UI functions should be called
	ui: function()
	{
		this.hover_unfollow_button();
		//create the whats this dialog
		this.rating_explanation_dialog();
	},
	
	binds: function()
	{
		//create a temp local instance to prevent conflicts with the jquery 'this'
		var inst = this;
		
		//bind the follow & unfollow button
		$('ul.follow-counter').find('.follow_unfollow').unbind('click');
		$('ul.follow-counter').find('.follow_unfollow').bind('click', function()
		{
			inst.follow_unfollow($(this));
		});
		
		$('div.company-stat-container').find('#rating_explanation_link').unbind('click');
		$('div.company-stat-container').find('#rating_explanation_link').bind('click', function()
		{
			$('#company_rating_explanation').dialog('open');
		});
		
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
			url: '/company/' + type + '/' + inst.id,
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
	
	set_follow_button: function(type)
	{
		var follow_button = '<a class="button1 follow_unfollow button-small" href="#" onclick="return false;" id="follow"> Follow this Company</a>';
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
	
	rating_explanation_dialog: function()
	{
		$('#company_rating_explanation').dialog({
			modal: true,
			draggable: false,
			autoOpen: false,
			hide: "fade",
			width: 420,
			height: 390,
			resizable: "false",			
		});
	}	
}

//stuff this in a doc ready to fire after jquery
$(document).ready(function()
{
	//init the contact class
	$company = new company();
	$company.init();
});