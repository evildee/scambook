$(document).ready(function() {

    $( ".datepicker" ).datepicker({ maxDate: +0 });

	$('#submit_step1').unbind('click');
	$('#submit_step1').click(function(e) {
		$('#submit_step1').attr('disabled','disabled'); 
		e.preventDefault();

		var steptwo = $sb.ajax;
		//steptwo.before = function() {   $('#submit_step2').attr('disabled','disabled'); }
		steptwo.error = function() { $('#submit_step1').removeAttr('disabled'); }

		steptwo.post('/report/submit?id=v1', $("[name='report-form']").serialize(), function(json)
		{

			if(json.success)
			{
				if(!json.next_page)
				{
					$('#submit_step1').removeAttr('disabled');
					steptwo._validation(json.validation);
					$sb.log(' we have errros next page:' + json.next_page);
					return false;
				}

				$('<iframe src="/report/tracking?id=v1"></iframe>').appendTo(document.body);
				$sb.log('loading tracking iframe -- submit complete ');
				$sb.log('next page:' + json.next_page);

				//$('#submit_step2').show();
				if(json.next_page == 'dashboard')
				{
					if(json.next_page_url.length > 0)
						document.location = json.next_page_url;
					else
						document.location = '/dashboard';
				}
				else if(json.next_page == 'premium')
				{
					$('#step1').fadeOut(function(){
						$('#step4').fadeIn();
					});
				}
				//else if(json.next_page == 'success')
				else if(json.next_page == 'signup')
				{
					$('#step1').fadeOut(function(){
						$('#step3').fadeIn();
					});
				}
			}

			return false;
		});
	});

    $('#company_r').change(function() {
		$sb.ajax._remove_validation();
        // hide form
        $('#info_form').hide();
        // hide all fields
        hide_inputs();

        // show fields monetary, date, location
        $('#c_monetary').show();
        $('#c_date').show();
        $('#c_address').show();

        // show form
        $('#info_form').fadeIn();
        $('#who_type_id').val(this.value)
    });

    $('#person_r').change(function() {
		$sb.ajax._remove_validation();
        $('#info_form').hide();
        hide_inputs();
        // show fields username, email, location, monetary, date
        $('#c_username').show();
        $('#c_email').show();
        $('#c_address').show();
        $('#c_monetary').show();
        $('#c_date').show();

        // show form
        $('#info_form').fadeIn();

        $('#who_type_id').val(this.value)
    });

    $('#phone_r').change(function() {
		$sb.ajax._remove_validation();
        $('#info_form').hide();
        hide_inputs();

        // show fields carrier, monetary, date
        $('#c_phone_co').show();
        $('#c_monetary').show();
        $('#c_date').show();

        // show form
        $('#info_form').fadeIn();

        $('#who_type_id').val(this.value)
    });

    $(".submit-container").find("input:text").bind("keypress", function(e) {
        if (e.which == 13) {
            return false;
        }
    });


    function hide_inputs(){
        $('#c_phone_co').hide();
        $('#c_username').hide();
        $('#c_email').hide();
        $('#c_address').hide();
        //$('#c_monetary').();
        //$('#c_date').show();
        $('#c_address').hide();
    }

	function binds(){
		$('#go_back_step2').unbind('submit');
		$('#go_back_step2').click( function() {
	    	$('#step2').hide('slide', {direction: 'right'}, 200, function(){
            	$('#step1').show('slide', {direction: 'left'}, 200);
            });		
		});

		/*$('#submit_step2').unbind('submit');
		$('#submit_step2').click( function() {
            var steptwo = $sb.ajax;
            steptwo.before = function() { $('#submit_step2').attr('disabled','disabled'); }
            steptwo.error = function() { $('#submit_step2').attr('disabled',''); }

            steptwo.post('/report/submit?id=v1', $("[name='report-form']").serialize(), function(json)
            {
                if(json.success)
                {
                    $('<iframe src="/report/tracking?id=v1"></iframe>').appendTo(document.body);
                    $sb.log('loading tracking iframe -- submit complete ');
                    $sb.log('next page:' + json.next_page);

                    $('#submit_step2').show();
                    if(json.next_page == 'dashboard')
                    {
                        document.location = '/dashboard';
                    }
                    else if(json.next_page == 'premium')
                    {
                        $('#step2').fadeOut(function(){
                            $('#step4').fadeIn();
                        });
                    }
                    //else if(json.next_page == 'success')
                    else if(json.next_page == 'signup')
                    {
                        $('#step2').fadeOut(function(){
                            $('#step3').fadeIn();
                        });
                    }
                    else
                    {
                        $('#step2').fadeOut(function(){
                            $('#step1').fadeIn();
                        });
                    }
                }
            });
		});*/

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
					$('<iframe src="/report/tracking?id=v1"></iframe>').appendTo(document.body);
					$sb.log('loading tracking iframe -- submit complete ');	

					$('#submit_step2').show();
					if(data == 'dashboard')
					{
						document.location = '/dashboard';
					}
					else if(data == 'premium')
					{
						$('#step2').hide('slide', {direction: 'left'}, 200, function(){
							$('#step4').show('slide', {direction: 'right'}, 200);
						});
					}
					else if(data == 'success')
					{
						$('#step2').hide('slide', {direction: 'left'}, 200, function(){
							$('#step3').show('slide', {direction: 'right'}, 200);
						});
					}
					else
					{
						$('#step2').hide('slide', {direction: 'right'}, 200, function(){
							$('#step1').show('slide', {direction: 'left'}, 200);
						});
					}

				},
				type: "POST"
			});	
*/

		// premium form bind
		$('#premium-form').unbind('submit');
    	$('#premium-form').bind('submit', function(event) {
			$sb.ajax._remove_validation();
			$sb.log('clicked submit');
			event.preventDefault();
			premium_submit();
		});

	}

	$(document).ajaxStart(function() {
		$sb.ajax._remove_validation();
	});

	$(document).ajaxStop(function() {
  		binds();
	});	

function premium_submit()
{
	$sb.log('removing tooltips');
	$sb.ajax._remove_validation();
	$('.premium-submit').prop('disabled', true);
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
		$('.premium-submit').prop('disabled', false);
	}
	return false;
}


function stripe_handler(status, response) {
	var form = $('#premium-form');
    if (response.error) {
		$sb.ajax._set_validation_tooltip(response.error.message, $('input[name="card-number"]'));
        $('.premium-submit').prop('disabled', false);
    } 
	else 
	{
        var token = response.id;
        form.append($('<input type="hidden" name="stripeToken" />').val(token));
/*
         $sb.ajax.post('/ajax_update_user_account', { id: id, action: 'approve' }, function()
            {
                inst.refresh_table(inst.$current_paging_button);
            });
*/
		//$sb.log(form.serialize());
		$sb.ajax.post('/premium?id=v1', form.serialize(), function(json)
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

	if (! (($('input[name="card-cvc"]').val()).length > 1))
	{
		$sb.ajax._set_validation_tooltip('Invalid CVC', $('input[name="card-cvc"]'));
		error=true;
	}

	if ( !($('#premium_agree').is(':checked')) )
	{
		$sb.ajax._set_validation_tooltip('You must agree with the Terms &amp; Conditions', $('#premium_agree'));

		error = true;
	}

    if(error)
        return false;

    return true;
}

});

