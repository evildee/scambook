function admin(){};

admin.prototype = 
{
	company_update_dialog_selector: '#company_update_dialog',
	company_id_selector: '#company_id',
	reactor_inst: Object,
	
	init: function()
	{
		if($sb.controller == 'admin')
		{
			
		}
		
		this.binds();
		this.ui();
	},
	
	binds: function()
	{
		var inst = this;
		switch($sb.controller)
		{
			case 'company':
				//company_update link
				$('.company_update_link').die();
				$('.company_update_link').bind('click', function(event)
				{
					var update_id = $(this).attr('data-company_update_id');
					event.preventDefault();
					inst.open_company_update(update_id);
				});
				$('.delete_company_update_link').die();
				$('.delete_company_update_link').bind('click', function(event)
				{
					var update_id = $(this).attr('data-company_update_id');
					event.preventDefault();
					//inst.delete_company_update(update_id);
				});				
				break;
			default:
				break;			
		}
	},
	
	ui: function()
	{
		switch($sb.method)
		{
			case 'cash_deposits':
				$('.datepicker').datepicker();
				break;
			default: 
				$('.datepicker').datepicker();
				break;	
		}
	},
	
	delete_company_update: function(update_id)
	{
		var request = $sb.ajax;
		var post_data = new Object();
		post_data['delete'] = true;
		request.post('/admin/company_update/' + $sb.id + '/' + update_id, post_data, function(json)
		{
			if(!$sb.empty(json.success))
				window.location = location.pathname;
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
					buttons: ['formatting', '|', 'bold', 'italic', 'list', '|', 'unorderedlist', 'orderedlist', 'outdent', 'indent', '|', 'table', 'link', '|', 'html']
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
	
	_create_company_update_dialog: function()
	{
		var inst = this;
		//remove any existing div
		$(this.company_update_dialog_selector).remove();
		$(this.company_update_dialog_selector).dialog('destroy');
		
		//write the html
		var dialog_html = '<div id="company_update_dialog" style="display:none;"></div>'; 
		$('body').append(dialog_html);
		
		//setup the dialog
		$(this.company_update_dialog_selector).dialog({
			autoOpen: false,
			width: 600,
			height: 400,
			buttons: { 
				"Cancel": function() { $(this).dialog("close"); }, 
				"Save": function() 
					{ 
						inst.save_company_update();
						$(this).dialog("close"); 
					}
				}
		});
	},
	
	_get_company_id: function()
	{
		//get the company id
		if(!$sb.empty($sb.id))
		{
			var company_id = $sb.id;
		}
		else if(!$sb.empty($(this.company_id_selector)))
		{
			var company_id = $(this.company_id_selector).val();
		}
		else
		{
			var company_id = null;
			$sb.log("we could not find the company_id");
		}
		
		return company_id;	
	}
}

$(document).ready(function() {
	$sb.admin = new admin();
	$sb.admin.init();

    // Need to parse the name or other attributes to get url components.
    $(".instacheck").change(function(e) {
        e.preventDefault();
        $.ajax({
            type: "GET",
            url: "/admin/" + type + "_set/" + id + "/" + field + "/" + value
        });
    });

    $("#groupimages").click(function(e) {
        if ($(e.target).is("#attachgroupimage"))
        {
            e.preventDefault();
            var filecount = $("[id^='groupimagediv']").length;
            var idx = 1;
            if (filecount > 0)
            {
                idx = parseInt($("[id^='groupimagediv']:last").attr('id').match(/^groupimagediv(\d+)$/)[1]) + 1;
            }
            $(e.target).text('Add another image');
            $(this).append('<div id="groupimagediv' + idx + '"><input name="groupimage' + idx + '" type="file" /><label>Title Image:<input name="make_main" type="radio" value="imagechoice' + idx + '" /></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" id="removegroupimage' + idx + '">Remove</a></div>');
        }
        else if ($(e.target).is("[id^='removegroupimage']"))
        {
            e.preventDefault();
            var idx = $(e.target).attr('id').match(/^removegroupimage(\d+)$/)[1];
            $("#groupimagediv" + idx).remove();
            var filecount = $("[id^='groupimagediv']:last").length;
            if (filecount == 0)
                $("#attachgroupimage").text('Attach an image');
        }
    });

    $("#newgroup").find("input:text").bind("keypress", function(e) {
        if (e.which == 13) {
            return false;
        }
    });

    // Company name autocomplete.
    $(".autocomplete_company").autocomplete({
        source: base_url + 'companies/ajax' + $(this).val()
    });

    // Consolidate company name autocomplete.
    $(".autocomplete_consolidate_company").autocomplete({
        source: base_url + 'companies/ajax_consolidate/' + $('#company_id').val() + $(this).val()
    });

	// Business account autocomplete 
    $(".autocomplete_business_accounts").autocomplete({
        source: '/admin/ajax_business_accounts/',
		focus: function( event, ui ) {
			$(this).val( ui.item.label );
			$("span#account_id").html("Account ID: " + ui.item.value);
			return false;
		},
		select: function(event, ui) {
			$(this).val(ui.item.label);
			$("input[name='account_id']").val(ui.item.value);
			return false;
	 	}	
    });
	
    // Group company name autocomplete.
    $(".autocomplete_group_company").autocomplete({
        source: base_url + 'companies/ajax_group' + $(this).val()
    });

    // Account company name autocomplete.
    $(".autocomplete_account_company").autocomplete({
        source: base_url + 'companies/ajax_account' + $(this).val()
    });

    // User name autocomplete for report edit.
    $(".autocomplete_user").autocomplete({
        source: base_url + 'account/ajax_users' + $(this).val()
    });

    // Nav CSS
	$("ul.subnav").parent().append("<span></span>"); //Only shows drop down trigger when js is enabled (Adds empty span tag after ul.subnav*)

	$("ul.topnav li span").click(function() { //When trigger is clicked...

		//Following events are applied to the subnav itself (moving subnav up and down)
		$(this).parent().find("ul.subnav").slideDown('fast').show(); //Drop down the subnav on click

		$(this).parent().hover(function() {
		}, function(){
			$(this).parent().find("ul.subnav").slideUp('slow'); //When the mouse hovers out of the subnav, move it back up
		});

		//Following events are applied to the trigger (Hover events for the trigger)
		}).hover(function() {
			$(this).addClass("subhover"); //On hover over, add class "subhover"
		}, function(){	//On Hover Out
			$(this).removeClass("subhover"); //On hover out, remove class "subhover"
	});
});
