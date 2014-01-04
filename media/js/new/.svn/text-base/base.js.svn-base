var email_friend_report_id = 0;

$(document).ready(function() {
	// ---------- Show logo when scrolling down ----------
	// Calculate the height of element
	var header_height = $('.site-header__row-2').outerHeight();

	// When scrolling
	$(window).scroll(function(){
		// Only trigger when search box on top for small device is not visible
		if (!$('.m-search-big').is(':visible'))
		{
			if ($(window).scrollTop() > header_height) // If scrolled down more than the header's height
				$('.site-header__logo-slide-container').fadeIn();
			else // When scroll up or less than aboveHeight
				$('.site-header__logo-slide-container').fadeOut('fast');
		}

	});

	// ---------- Open/close search box on top for small device ----------
	$('.c-search-small-device, .m-search-big__x').bind('click', function(e) {
		$('.m-search-big').slideToggle('fast');

		// Toggle logo if scrolled down more than the header's height
		if ($(window).scrollTop() < header_height)
			$('.site-header__logo-slide-container').slideToggle('fast');
	});

	$('.m-trigger').click(function()
	{
		var boxdrop = $(this).attr('id');
		var report_id = $(this).attr('data-report_id');

		var callback = function() { };

		if (boxdrop.substring(0, 18) === '#follow_container_') // Follow Up
		{
			callback = function() { $('#follow_up_text_' + report_id).focus() };

			if ($('#upload_container_' + report_id).is(':visible'))
				$('#upload_container_' + report_id).slideUp('slow');
		}
		else if (boxdrop.substring(0, 18) === '#upload_container_') // Upload
		{
			if ($('#follow_container_' + report_id).is(':visible'))
				$('#follow_container_' + report_id).slideUp('slow');
		}

		$(boxdrop).slideToggle('slow', callback);
	});

	$('.toggle-premium-panel').click(function()
	{
		var $this = $(this);
		var id = $this.attr('data-report_id');

		var $container = $('#premium_area_' + id);

		if (!$container.is(':visible')) // Show
		{
			$container.slideDown();
			$this.html('Less Details &#x25B4;');
		}
		else // Hide
		{
			$container.slideUp();
			$this.html('More Details &#x25BE;');
		}
	});

	$('.m-share-mini__fb').click(function() {
		var report_id = $(this).attr('data-report_id');

		Scambook.Facebook.publish(
			$(this).attr('fb_title'),
			$(this).attr('fb_caption'),
			$(this).attr('fb_desc'),
			$(this).attr('fb_src'),
			$(this).attr('fb_href'),
			$(this).attr('fb_type'),
			function(response)
			{
				// Save shared attribute if "Share" button was clicked
				if (response && response.post_id)
					$.post('/dashboard/save_share', { report_id: report_id, what: 'Facebook' }, function() {});
			}
		);
	});

	$('.m-share-mini__twit').click(function()
	{
		/*url = $(this).attr('data-url');

		var width  = 550,
			height = 370,
			left   = ($(window).width()  - width)  / 2,
			top    = ($(window).height() - height) / 2,
			opts   = 'status=1' +
				',width='  + width  +
				',height=' + height +
				',top='    + top    +
				',left='   + left;

		window.open(url, 'twitter', opts);*/
	});

	$('.m-share-mini__email').click(function()
	{
		email_friend_report_id = $(this).attr('data-report_id');

		$('#share_friend_emails').val('');

		$('#share-email').foundation('reveal',
		{
			opened: function()
			{
				$('#share_friend_emails').focus();
			}
		});

		$(document).foundation(); // Needed for foundation callback to work :S

		$('#share-email').foundation('reveal', 'open');
	});

	$('#friend_share_form').submit(function()
	{
		$sb.ajax.post('/dashboard/share_friend', { report_id: email_friend_report_id, emails: $('#share_friend_emails').val() }, function(result)
		{
			if (typeof result.errors === 'undefined')
			{
				$('#share_friend_emails').val('');
			}

			$('#share_friend_emails').focus();
		});

		return false;
	});

	$('.c-d-upload__addtional').click(function()
	{
		var report_id = $(this).attr('data-report_id');

		$(this).hide();
		$('#additional_docs_' + report_id).show();
	});
});

twttr.ready(function(twttr)
{
	twttr.events.bind('tweet', function(event)
	{
		var report_id = event.target.getAttribute('data-report_id');

		$.post('/dashboard/save_share', { report_id: report_id, what: 'Twitter' }, function() {});
	});
});