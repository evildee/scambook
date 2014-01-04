function open_dialog(id)
{
	if($('#step-1-' + id).val() == 1)
	{
		$('#modal-step-circle-1').addClass('done');
	}
	else
	{
		$('#modal-step-circle-1').removeClass('done');
	}
	if($('#step-2-' + id).val() == 1)
	{
		$('#modal-step-circle-2').addClass('done');
		$('#modal-upload-images').html('<p>You currently have proof uploaded.</p><p><a id="modal-upload-images-link" href="/report/additional/' + id + '">Click here to upload additional proof</a></p>');
		bind_modal_upload_images_link();
	}
	else
	{
		$('#modal-step-circle-2').removeClass('done');
		$('#modal-upload-images').html('<p>You do not currently have proof uploaded.</p><p><a id="modal-upload-images-link" href="/report/additional/' + id + '">Click here to upload proof</a></p>');
		bind_modal_upload_images_link();
	}
	if($('#step-3-' + id).val() == 1)
	{
		$('#modal-step-circle-3').addClass('done');
		$('#modal-email-company-span').html('Email previously sent to company.');
		$('#modal-email-company-span').attr('style', 'font-weight:bold;')
	}
	else
	{
		$('#modal-step-circle-3').removeClass('done');
		$('#modal-email-company-span').html('');
	}
	if($('#step-4-' + id).val() == 1)
	{
		$('#modal-step-circle-4').addClass('done');
		$('#modal-ag-email-completeness').html('Complete');
	}
	else
	{
		$('#modal-step-circle-4').removeClass('done');
		$('#modal-ag-email-completeness').html('Incomplete<button class="button1 button-small" id="modal-ag-email-completeness-button">Mark As Complete</button>');
		$('#modal-ag-email-completeness-button').bind('click', function () {

			var email_completeness = $sb.ajax;
			email_completeness.get('/report/report_attr_complete/' + id, 'step=attorney_general', function(){
				
				$('#modal-ag-email-completeness').html('Complete');
				$('#modal-step-circle-4').addClass('done');
				$('#icon-attorney-general-' + id).addClass('done');
				$('#icon-attorney-general-' + id).prepend('<span class="icon"></span>');
				$('#step-4-' + id).val(1);
				
				var Old_Complete=parseInt($("ul.progress-graph").find("li.counter#"+id).html());
			
				Complete=Old_Complete+20;
				
				$("ul.progress-graph").find("li.counter#"+id).html(Complete+"%");
				
				$("ul.progress-graph").find("li.bar-graph#"+id).removeClass("bar"+Old_Complete).addClass("bar"+Complete);		
				
			});
			
			
			return false;
		});
	}	
	
	if($('#step-5-' + id).val() == 1)
	{
		$('#modal-step-circle-5').addClass('done');
	}
	else
	{
		$('#modal-step-circle-5').removeClass('done');
	}
	
	
	//$('#dialog-steps').attr('title', $('#title-' + id).val());
	

	$('#modal-title').html($('#title-' + id).val());
	
	$('#modal-by').html($('#by-' + id).val());
	$('.modal-submitted').html($('#submitted-' + id).val());
	$('#modal-details').html($('#details-' + id).val());
	
	$('#modal-email-company').text($('#company-' + id).val());
	$('#modal-email-link').text($('#title-' + id).val());
	$('#modal-email-link').attr('href', $('#url-' + id).val());
	$('#modal-email-first-name').text($('#first-name-' + id).val());
	
	if($('#company-email-' + id).val())
	{
		$('#no-company-email').attr('style', 'display:none');
		$('#has-company-email').attr('style', 'display:block');
	}
	else
	{
		$('#has-company-email').attr('style', 'display:none');
		$('#no-company-email').attr('style', 'display:block');
		$('#no-company-email-link').attr('href', 'company/suggestions/' + $('#company-id-' + id).val());
	}

	$('#modal-email-company-button').unbind('click');
	
	$('#modal-email-company-button').bind('click', function () {
	
		var email_company = $sb.ajax;
		email_company.get('/report/report_email_company/' + id, '', function(){
		
			$('#modal-email-company-span').attr('style', 'font-weight:bold;color:green');
			$('#modal-email-company-span').html('You have successfully sent the company an email!');
			$('#modal-step-circle-3').addClass('done');
			$('#icon-email-company-' + id).addClass('done');
			$('#icon-email-company-' + id).prepend('<span class="icon"></span>');
			
			var step3=$('#step-3-' + id).val();
			
			if (step3=="0")
			{
				var Old_Complete=parseInt($("ul.progress-graph").find("li.counter#"+id).html());
				
				Complete=Old_Complete+20;
					
				$("ul.progress-graph").find("li.counter#"+id).html(Complete+"%");
					
				$("ul.progress-graph").find("li.bar-graph#"+id).removeClass("bar"+Old_Complete).addClass("bar"+Complete);
			};
			
			$('#step-3-' + id).val(1);
			
			});
		
		return false;
	});
	
	$('#share-email').attr('href', '/report/email/' + id);
	$('#share-facebook').html($('#fb-' + id).val());
	$('.btn-facebook').click(function () {
		Scambook.Facebook.publish(
			$(this).attr('fb_title'),
			$(this).attr('fb_caption'),
			$(this).attr('fb_desc'),
			$(this).attr('fb_src'),
			$(this).attr('fb_href'),
			$(this).attr('fb_type')
		);
	});	
	
	$('#share-twitter').html($('#twitter-' + id).val());
	$('.btn-twitter').click(function(event) {
		var width  = 550,
		height = 370,
		left   = ($(window).width()  - width)  / 2,
		top    = ($(window).height() - height) / 2,
		url    = this.href,
		opts   = 'status=1' +
            ',width='  + width  +
            ',height=' + height +
            ',top='    + top    +
            ',left='   + left;
		window.open(url, 'twitter', opts);
		var type = $(this).attr('tw_type');
		var href = $(this).attr('tw_href');
		_gaq.push(['_trackEvent', type, 'Share via Twitter', href]);
		return false;
	});
	
	if($sb.is_dialog($('#dialog-steps')))
		$('#dialog-steps').dialog('open');
	else
	{
		$('#dialog-steps').dialog({
			modal: true,
			draggable: false,
			autoOpen: true,
			hide: "fade",
			width: 690,
			height: 600,
			resizable: "false"
		});
	}
	
	change_title(id);
}

function change_title(id)
{
	var title=$('#title-' + id).val();
	$('#dialog-steps').dialog("option", "title", title);
}

function unfollow()
{
	$('li.status-following > a.button1').bind('click', function()
	{
		var jqInst = this;
		var id = $(this).attr('data-id');
		var type = $(this).attr('data-type');
		$.getJSON('/dashboard/unfollow/' + id + '/' + type, function(data)
		{
			if(typeof(data.success) != 'undefined' && data.success == true)
			{
				$(jqInst).closest('.unfollow_target').remove();
				//update the sidebar
				if(typeof(data.sidebar_following_count) != 'undefined')
				{
					$('.sidebar_following_count_target').text(data.sidebar_following_count);
				}
			}
		});
	});
}

function reset_dialog()
{
	// This one is important, many browsers don't reset scroll on refreshes
	// Reset all scrollable panes to (0,0)
	$('.slider').scrollTo( 0 );
	// Reset the screen to (0,0)
	$.scrollTo( 0 );
	
	$('#scroll-1-button').click(function () {
		$('.slider').scrollTo( {top:'0px', left:'650px'}, 200);
		return false;
	});
	$('#scroll-2-button').click(function () {
		$('.slider').scrollTo({top:0, left:'1300px'}, 200);
		return false;
	});

	$('#scroll-3-button').click(function () {
		$('.slider').scrollTo({top:0, left:1950}, 200);
		return false;
	});
	$('#scroll-4-button').click(function () {
		$('.slider').scrollTo({top:0, left:2600}, 200);
		return false;
	});
	$('#scroll-5-button').click(function () {
		$('#dialog-steps').dialog('destroy');
		return false;
	});	
}

function bind_modal_upload_images_link()
{
	$('#modal-upload-images-link').die();
	$('#modal-upload-images-link').click(function () {
		window.open($(this).attr('href'));
	});	
}

function scroll_dialog(step)
{
	if(step == 'complaint')
		$('.slider').scrollTo( 0 );
	else if(step == 'proof')
		$('.slider').scrollTo( {top:'0px', left:'650px'}, 200);
	else if(step == 'company')
		$('.slider').scrollTo( {top:'0px', left:'1300px'}, 200);
	else if(step == 'press')
		$('.slider').scrollTo( {top:'0px', left:'1950px'}, 200);
	else if(step == 'share')
		$('.slider').scrollTo( {top:'0px', left:'2600px'}, 200);
	
}

$(document).ready(function() {

		unfollow();
	
		$('#dialog-why-important').dialog({
			modal: true,
			draggable: false,
			autoOpen: false,
			hide: "fade",
			width: 600,
			height: 300,
			resizable: "false"
		});
		
		$('#dialog-account-balance-info').dialog({
			autoOpen: false,
			hide: "fade",
			width: 600,
			modal: true,
			resizable: "false"
		});
		
		$('#dialog-contact-us').dialog({
			autoOpen: false,
			hide: "fade",
			width: 690,
			resizable: "false",
			modal: true
		});	
		$('.complaint-button').click(function() {
			open_dialog($(this).attr('id'));
			scroll_dialog('complaint');
			return false;
		});
		$('.proof-button').click(function() {
			open_dialog($(this).attr('id'));
			scroll_dialog('proof');
			return false;
		});
		$('.company-button').click(function() {
			//alert ($(this).attr('id'));
			open_dialog($(this).attr('id'));
			scroll_dialog('company');
			return false;
		});
		$('.press-button').click(function() {
			open_dialog($(this).attr('id'));
			scroll_dialog('press');
			return false;
		});
		$('.share-button').click(function() {
			open_dialog($(this).attr('id'));
			scroll_dialog('share');
			return false;
		});
		$('.complaint-button-modal').click(function() {
			scroll_dialog('complaint');
			return false;
		});
		$('.proof-button-modal').click(function() {
			scroll_dialog('proof');
			return false;
		});
		$('.company-button-modal').click(function() {
			scroll_dialog('company');
			return false;
		});
		$('.press-button-modal').click(function() {
			scroll_dialog('press');
			return false;
		});
		$('.share-button-modal').click(function() {
			scroll_dialog('share');
			return false;
		});
		
		$('.why-important-button').click(function() {
			$('#dialog-why-important').dialog('open');
			return false;
		});
		
		$('#account-balance-info-button').click(function() {
			$('#dialog-account-balance-info').dialog('open');
			return false;
		});
		
		$('.contact-us-button').click(function() {
			$('#dialog-contact-us').dialog('open');
			return false;
		});
	
		reset_dialog();
		
		$('#modal-upload-images-link').click(function () {
			window.open($(this).attr('href'));
		});
		
		$('#no-company-email-link').click(function () {
			window.open($(this).attr('href'));
		});
		
		$('.ag-websites').change(function() {
			  $('#ag-website').html($("select[name='ag_websites'] option:selected").attr('website'));
			  $('#ag-website').attr('href', $("select[name='ag_websites'] option:selected").attr('website'));
			  $('#ag-website2').html($("select[name='ag_websites'] option:selected").attr('website2'));
			  $('#ag-website2').attr('href', $("select[name='ag_websites'] option:selected").attr('website2'));
		});
		$('#ag-website').click(function () {
			window.open($(this).attr('href'));
		});
		$('#ag-website2').click(function () {
			window.open($(this).attr('href'));
		});
		
		$('#share-email').click(function () {
			window.open($(this).attr('href'));
		});
});