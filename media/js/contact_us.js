function contact(){};

contact.prototype = 
{	
	binds: function()
	{
		//create a temp local instance to prevent conflicts with the jquery 'this'
		var inst = this;
		//setup a shortcut the select selector	
		var form_type_selector = $('form#contact_us_form').find('select#select_contact_reason');
		$(form_type_selector).unbind('change');
		$(form_type_selector).bind('change', function()
		{
			inst.show_form($(this).val());
		});
		
		//bind all submit buttons
		$('input[type="submit"]').unbind('click');
		$('input[type="submit"]').bind('click', function(e)
		{
			e.preventDefault();
			inst.submit_form();
		});
		
		//bind the email validation
		$('input[name="contact_email"], input[name="contact_email_confirm"]').unbind('change');
		$('input[name="contact_email"], input[name="contact_email_confirm"]').bind('change', function()
		{
			//run the validation on email
			inst.validate($(this).attr('name'), $(this).val());
		});
		
		
	},
	
	show_form: function(form_id)
	{	
		var has_open_form = false;
		var inst = this;
		has_open_form = jQuery.isEmptyObject($('form#contact_us_form').find('div.contact-pane1').not(':hidden'));
		if(!has_open_form)
		{
			$('div.contact-pane1').not(':hidden').fadeOut(190);
			setTimeout(function()
			{
				$('div#' + form_id).fadeIn(190);
			}, 190);
		}
		else
		{
			$('div#' + form_id).slideDown(190);
		}
	},
	
	submit_form: function()
	{
		//disable the submit buttons
		$('input[type="submit"]').attr('disabled', true);
		
		//perform the ajax request
		$.ajax({
			url: '/contact',
			type: 'POST',
			data: $('form#contact_us_form').serialize(),
			dataType: 'json',
			success: function(data)
			{
				if(typeof(data.error) != 'undefined')
				{
					$.jGrowl(data.error, { theme:  'error', sticky: true });
					$('input[type="submit"]').attr('disabled', false);
				}
				
				if(typeof(data.success) != 'undefined' && typeof(data.html) != 'undefined')
				{
					//remove the form
					$('form#contact_us_form').fadeOut(300);
					$('.success_hide').fadeOut(300	);
					//replace it with the success message
					$('#success_target').prepend(data.html).css('display', 'none');
					$('#success_target').fadeIn(300);
				}
			},
			error: function(data)
			{
				//enable the submit button again
				$.jGrowl('Sorry we could not process your request at this time!', { theme:  'error', sticky: true });
				$('input[type="submit"]').attr('disabled', false);
			}
		});
	},
	//validates the emails for a quick user expeirence
	validate: function(input_name, value) 
	{ 
	    switch(input_name)
	    {
		    case 'contact_email':
				    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				    //run the validation
				    valid = re.test(value);
				    if(valid)
				    {
					    //remove any css or class for the validation error
					    $('input[name="' + input_name + '"]').removeAttr('style');
				    }
				    else
				    {
					    //remove and show any validation error
					    $('input[name="' + input_name + '"]').css('background-color', '#ff5451');
				    }
		    	break;
		    case 'contact_email_confirm':
			    	//get the OG email
			    	email = $('input[name="contact_email"]').val();
			    	//ensure it matches the second email
			    	if(email == value)
				    {
					    //remove any css or class for the validation error
					    $('input[name="' + input_name + '"]').removeAttr('style');					    
				    }
				    else
				    {
					    //remove and show any validation error
					    $('input[name="' + input_name + '"]').css('background-color', '#ff5451');					    
				    }
		    	break;	
	    }
	} 	
}

$(document).ready(function()
{
	//init the contact class
	var contact_us = new contact();
	contact_us.binds();
});