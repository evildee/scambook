$(document).ready(function() {

    $( ".datepicker" ).datepicker({ maxDate: +0 });

    $('#company_r').change(function() {
		$sb.ajax._remove_validation();
		show_form('#company_info_form',this);
		// alter to correct name attributes
		reset_field_names('company');
    });

    $('#person_r').change(function() {
		$sb.ajax._remove_validation();
		show_form('#person_info_form',this);
		reset_field_names('person');
    });

    $('#phone_r').change(function() {
		$sb.ajax._remove_validation();
		show_form('#phone_info_form',this);
		reset_field_names('phone');
    });

	// sometimes forms are auto selected
	var selid = $('input[name=type]:checked', '#report_form').attr('id');
	if(selid != 'undefined')
		$('#'+selid).trigger('change');

	// don't allow form submit on enter key
    $(".submit-container").find("input:text").bind("keypress", function(e) {
        if (e.which == 13) {
            return false;
        }
    });

	function reset_field_names(type)
	{
		$('#damage_company').attr('name','damage-dnr');
		$('#occurred_company').attr('name','occurred-dnr');
		$('#damage_person').attr('name','damage-dnr');
		$('#occurred_person').attr('name','occurred-dnr');
		$('#damage_phone').attr('name','damage-dnr');
		$('#occurred_phone').attr('name','occurred-dnr');
		$('#damage_'+type).attr('name','damage');
		$('#occurred_'+type).attr('name','occurred');
	}	

	function show_form(name,that)
	{
		// cache selector
		var info_form_ele = $('#info_form');
		// hide form
       	info_form_ele.hide();
       	hide_inputs();
		// show form
		$(name).show();
		info_form_ele.fadeIn();
		$('#who_type_id').val(that.value)
		$(name + ":input[attr='dnr']").val(that.value)
	}

    function hide_inputs(){
        $('#company_info_form').hide();
        $('#phone_info_form').hide();
        $('#person_info_form').hide();
    }

	function binds(){
		$('#go_back_step2').unbind('submit');
		$('#go_back_step2').click( function() {
	   		$('#step2').hide();
			$('#step1').show();
		});

		//$('#submit_step2').unbind('submit');
		$('#submit_step1').unbind('click');
		//$('#submit_step2').click( function() {
		$('#submit_step1').click( function(e) {
			e.preventDefault();

			var steptwo = $sb.ajax;
			steptwo.before = function() { $('#submit_step1').attr('disabled','disabled'); }
			steptwo.error = function() { $('#submit_step1').removeAttr('disabled'); }

			steptwo.post('/report/submit?id=v3', $("[name='report-form']").serialize(), function(json)
			{
				$('#submit_step1').removeAttr('disabled');
				if(json.success)
				{
					if(!json.next_page)
					{
						steptwo._validation(json.validation);
						$sb.log(' we have errros next page:' + json.next_page);
						return false;
					}

					$('<iframe src="/report/tracking?id=v2"></iframe>').appendTo(document.body);
					$sb.log('loading tracking iframe -- submit complete ');	
					$sb.log('next page:' + json.next_page);

					if(json.next_page == 'dashboard')
					{
						if(json.next_page_url.length > 0)
							document.location = json.next_page_url;
						else
							document.location = '/dashboard';
					}
					else if(json.next_page == 'premium')
					{
						$('#step1').hide();
						$('#step4').show();
					}
					else if(json.next_page == 'signup')
					{
						$('#step1').hide();
						$('#step3').show();
					}
				}
				return false;
			});
		});
/*
			$.ajax('/report/submit?id=v1',
        	{
				async: false,
				cache: false,
				data: $("[name='report-form']").serialize(),
				beforeSend: function()
				{
					$('#submit_step2').hide();
				},
				error: function(data) {
					$('#submit_step2').show();
				},
				success: function(data) {
				},
				type: "POST"
			});	
*/

		// premium form bind
		$('#premium-form').unbind('submit');
    	$('#premium-form').bind('submit', function(event) {
			$('#premium_submit').attr('disabled', 'disabled');

			$('.qtip').each(function(){
  				$(this).data('qtip').destroy();
			})

			$sb.log('clicked submit - disabled button');
			event.preventDefault();
			premium_submit();
		});

	}

	$(document).ajaxStart(function() {
		$sb.ajax._remove_validation();
	});

	$(document).ajaxStop(function() {
  		binds();
		$('#premium_submit').removeAttr('disabled');
	});	


function premium_submit()
{
	if( valid_input() )
	{
		Stripe.createToken({
			number: $('.card-number').val(),
			cvc: $('.card-cvc').val(),
			exp_month: $('.card-expiry-month').val(),
			exp_year: $('.card-expiry-year').val()
		}, stripe_handler);
	}
	else
	{
		$('#premium_submit').removeAttr('disabled');
	}
	return false;
}


function stripe_handler(status, response) {
	var form = $('#premium-form');
    if (response.error) {
		$sb.ajax._set_validation_tooltip(response.error.message, $('input[name="card-number"]'));
		$('#premium_submit').removeAttr('disabled');
    } 
	else 
	{
        var token = response.id;
        form.append($('<input type="hidden" name="stripeToken" />').val(token));

		var premiumreq = $sb.ajax;
		premiumreq.after = function() { $('#premium_submit').removeAttr('disabled'); }
		premiumreq.error = function() { $('#premium_submit').removeAttr('disabled'); }

		premiumreq.post('/premium?id=v3', form.serialize(), function(json)
		{
			//$sb.log(json);
		});
    }
}

function valid_input() {

	$sb.ajax._remove_validation();

    var error = false;
    if (! (($('input[name="card-fullname"]').val()).length > 1))
	{
		$sb.ajax._set_validation_tooltip('Invalid cardholder name', $('input[name="card-fullname"]'));
		error=true;
	}
    if (! (($('input[name="card-number"]').val()).length > 6))
	{
		$sb.ajax._set_validation_tooltip('Invalid credit card number', $('input[name="card-number"]'));
		error=true;
	}
/*
    if (! (($('input[name="phone_number"]').val()).length > 9))
	{
		$sb.ajax._set_validation_tooltip('Phone number requried', $('input[name="phone_number"]'));
		error=true;
	}
*/

	if (! (($('input[name="card-cvc"]').val()).length > 1))
	{
		$sb.ajax._set_validation_tooltip('Invalid CVC', $('input[name="card-cvc"]'));
		error=true;
	}


    if(error)
	{
        return false;
	}

    return true;
}

	// call binds after page load
	binds();

});

