$(document).ready(function() {

	// Expand Panel
	$("#open").live('click', function(e){
	    e.preventDefault();
		$("div#panel").slideDown("fast");
	});

	// Collapse Panel
	$("#close").live('click', function(e) {
	    e.preventDefault();
		$("div#panel").slideUp("fast");
	});

	// Switch buttons from "Log In | Register" to "Close Panel" on click
	$("#toggle a").live('click', function() {
		$("#toggle a").toggle();
	});

    // Company name autocomplete.
    $(".autocomplete_co").autocomplete({
        source: base_url + 'companies/ajax' + $(this).val()
    });

    // Group name autocomplete.
    $(".autocomplete_grp").autocomplete({
        source: base_url + 'groups/ajax' + $(this).val()
    });

    // Product name autocomplete.
    $(".autocomplete_pr").autocomplete({
    	source: base_url + 'products/ajax' + $(this).val()
    });

    $("#all-convo").click(function () {
    	$("#loading-bar").html('<img src="' + base_url + 'media/images/ajax-loader.gif" /> ');
			$("#convo-box").load(base_url + 'comments/ajax/' + $("#all-convo").attr('report_id') + '?type=' + $("#all-convo").attr('type'), function() {
        	$("#loading-bar").html('');
        	$("#all-convo").attr('style', 'display:none;');
		});
	});


	 // opens the media image box
	  $("#media-open1").click(function() {
		$("#media-upload1").show("fast");
		$("#media-open1").hide("fast");
	  });

	 // opens the media video box
	  $("#media-open2").click(function() {
		$("#media-upload2").show("fast");
		$("#media-open2").hide("fast");
	  });

	 // opens the invite email box
	  $("#open-invite-box1").click(function() {
		$("#invite-box1").slideDown("fast");
		$("#invite-box2").slideUp("fast");
	  });

	 // opens the invite facebook box
	  $("#open-invite-box2").click(function() {
		$("#invite-box2").slideDown("fast");
		$("#invite-box1").slideUp("fast");
	  });

    // clear input on focus
    $('.clearMeFocus').focus(function()
    {
        if($(this).val()==$(this).attr('title'))
        {
            $(this).val('');
        }
    });

    // if field is empty afterward, add text again
    $('.clearMeFocus').blur(function()
    {
        if($(this).val()=='')
        {
            $(this).val($(this).attr('title'));
        }
    });

/* NOT USED ANYWHERE
    $("#publicfilelist").click(function(e) {
        if ($(e.target).is("#attach"))
        {
            e.preventDefault();
            var filecount = $("[id^='publicfilediv']").length;
            if (filecount > 2)
                return;

            var idx = 1;
            if (filecount > 0)
            {
                idx = parseInt($("[id^='publicfilediv']:last").attr('id').match(/^publicfilediv(\d+)$/)[1]) + 1;
            }

            if (filecount == 2)
                $("#attach").hide();
            $(e.target).text('Add another image');
            $(this).append('<div id="publicfilediv' + idx + '"><input name="publicfile' + idx + '" type="file" /><a href="#" id="removepublic' + idx + '">Remove</a></div>');
        }
        else if ($(e.target).is("[id^='removepublic']"))
        {
            e.preventDefault();
            var idx = $(e.target).attr('id').match(/^removepublic(\d+)$/)[1];
            $("#publicfilediv" + idx).remove();
            var filecount = $("[id^='publicfilediv']:last").length;
            if (filecount == 0)
                $("#attach").text('Attach an image');
            else if (filecount < 3)
                $("#attach").show();
        }
    });
 */

    $("[name='deselectfile']").click(function() {
        $("input:file").val('');
    });

    $( ".dialog" ).dialog({
    	autoOpen: false,
    	show: "fade",
    	hide: "fade",
    	minWidth: 635,
    	maxWidth: 635,
    	zIndex: 89,
    	resizable: false,
    	modal: true,
    	stack: true,
    	draggable: false,
    	buttons: [
    		{
    		text: 'Close',
    		click: function() {$(this).dialog('close');}
    		}
    	]
    });

    $('.note-button').click(function() {
    	$('.note.dialog').dialog('open');
    	return false;
    });
    
    // fancybox for video sam on homepage
    $("#video-sam").click(function() {
    	$.fancybox({
    			'padding'		: 0,
    			'autoScale'		: false,
    			'transitionIn'	: 'fade',
    			'speedIn'		: '300',
    			'transitionOut'	: 'none',
    			'title'			: this.title,
    			'width'			: 700,
    			'height'		: 420,
    			'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
    			'type'			: 'swf',
    			'swf'			: {
    			   	 'wmode'		: 'transparent',
    				'allowfullscreen'	: 'true'
    			}
    		});
    
    	return false;
    });
}); //close jquery



var Scambook = (function () {

	return {

		/* default initializer */
		init : function() {

		},

		/*!
		 * Cookie-handling routines
		 *
		 * Props to ppk: http://www.quirksmode.org/js/cookies.html
		 */
		Cookie : {

			/*!
			 *
			 * @param n (string) name
			 * @param v (string) value
			 * @param d (int, optional) days
			 */
			create : function (n,v,d) {

				var date, expires = null;

				if (arguments.length === 2) {  d = 100; }

				if (d) {
					date = new Date();
					date.setTime(date.getTime()+(d*24*60*60*1000));
					expires = '; expires=' + date.toGMTString();
				}
				else { expires = ''; }
				document.cookie = n + '=' + v + expires + '; path=/';
			},

			/*!
			 * Returns the value of a cookie, or null if no such cookie exists
			 *
			 * @param n (string) - the name of the cookie to be read
			 */
			read : function(n) {
				var nameEQ = n + '=', ca = document.cookie.split(';'), i = 0, c = null;
				for(i = 0;i < ca.length; i++) {
					c = ca[i];
					while (c.charAt(0 ) === ' ') { c = c.substring(1,c.length); }
					if (c.indexOf(nameEQ) === 0) { return c.substring(nameEQ.length,c.length); }
				}
				return null;
			},

			/*!
			 * Wipes out the value of a cookie and marks it for deletion next time the browser is quit
			 *
			 * @param n (string) - the name of the cookie to be deleted
			 */
			erase : function(n) { this.create(n,'',-1); }
		},

		Facebook : {

			login : function() {
				var cookie = Scambook.Cookie.read('fbsr_' + facebook_app_id);
				if (cookie !== null) {
					window.location = base_url + 'account/login_facebook';
				}
			},
			fblogin : function() {
				FB.login(function(response) {
					if (response.authResponse) {
						// user is logged in and granted some permissions.
						// scope is a comma separated list of granted permissions
						Scambook.Facebook.login();
					} else {
						// user cancelled login or did not fully authorize
					}
				}, {scope : 'email, publish_stream'});
			},
			send : function(username, to_id) {
				FB.ui({
					method: 'send',
					to: to_id,
					link: 'http://www.scambook.com',
					name: username + ' has invited you to check out Scambook.com!',
					description: username + ' has invited you to check out Scambook.com and use the power of your existing social network to fight back against unjust companies!'
				});
			},
			invite : function(fb_uid) {
				var friends = FB.Data.query("SELECT name, uid FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1={0}) ORDER BY name", parseInt(fb_uid));
				return friends;
			},
			/*!
			 *
			 * @param msg (string) -
			 * @param name (string) - the name of the object in question
			 * @param caption (string) -
			 * @param desc (string) -
			 * @param src (string) -
			 * @param href (string) - the URL of the object being liked
			 * @param actionText (string) -
			 * @param actionHref (string) -
			 * @param prompt (string) -
			 *
			 */
			publish : function(name, caption, desc, src, href, type, callback) {

				var actionHref = 'http://' + document.location.hostname;

			 	FB.ui({
						method: 'feed',
						name: name,
						link: href,
						picture: src,
						caption: caption,
						description: desc
					},
					function(response) {
						if (typeof callback === 'function')
						{
							callback(response);
						}

						if (response && response.post_id) {
							_gaq.push(['_trackEvent', type, 'Share via Facebook', href]);
							//alert('Post was published.');
						} else {
							//alert('Post was not published.');
						}
					}
				);
			},
			share_scambook : function()
			{
				FB.ui({
					method: 'stream.share',
					u: 'http://www.scambook.com'
				},
				function(response) {
					if(typeof(response) != 'undefined')
					{
						//analytics
 						_gaq.push(['_trackEvent', 'header_social_v2_button', 'Share via Facebook', document.location.href]);
						//fire the ajax callback to update the amount of facebook shares
					}
				});
			}
		},

		Google : {

			login : function(url) {
				if (window.opener && !window.opener.closed) {
					window.close();
					window.opener.location = url;
				}
			}
		}
	};
}());


$(document).ready(function(){
/*
	This stuff is for the v2 header. Please leave in place

	//v2_social bindings
	FB.Event.subscribe('edge.create',
	    function(response) {
	        update_social_stats('facebook');
	    }
	);

	$.ajaxSetup({
	   cache: false,
	   global: true,
	 });



	var update_on_these = $('#social-header-container').find('.social-v2-button');
	$(update_on_these).unbind('click');
	$(update_on_these).bind('click', function()
	{
		var network = $(this).attr('data-network');
	});
*/

	// jQuery code for Facebook sharing
	$('.btn-facebook').click(function() {
		Scambook.Facebook.publish(
			$(this).attr('fb_title'),
			$(this).attr('fb_caption'),
			$(this).attr('fb_desc'),
			$(this).attr('fb_src'),
			$(this).attr('fb_href'),
			$(this).attr('fb_type')
		);
	});

	$('.btn-socialmedia-facebook').click(function() {
		Scambook.Facebook.publish(
			$(this).attr('fb_title'),
			$(this).attr('fb_caption'),
			$(this).attr('fb_desc'),
			$(this).attr('fb_src'),
			$(this).attr('fb_href'),
			$(this).attr('fb_type')
		);
	});

	$('.btn-share-facebook-group').click(function() {
		Scambook.Facebook.publish(
			$(this).attr('fb_title'),
			$(this).attr('fb_caption'),
			$(this).attr('fb_desc'),
			$(this).attr('fb_src'),
			$(this).attr('fb_href'),
			$(this).attr('fb_type')
		);
	});

	// jQuery code for Twitter sharing
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

	$('.btn-socialmedia-twitter').click(function(event) {
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

	$('.btn-share-twitter-group').click(function(event) {
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

	$('.signin-facebook,.signin-facebook-nohover').click(function() {
		Scambook.Facebook.fblogin();
		return false;
	});

	// jQuery code for Google signin
	$('.signin-google,.signin-google-nohover').click(function(event) {
		var width  = 450,
			height = 500,
			left   = ($(window).width()  - width)  / 2,
			top    = ($(window).height() - height) / 2,
			url    = $(this).attr('url'),
			opts   = 'status=1' +
	            ',width='  + width  +
	            ',height=' + height +
	            ',top='    + top    +
	            ',left='   + left;
		window.open(url, 'google', opts);
		return false;
	});

	$('.facebook_invite').live('click', function() {
		Scambook.Facebook.send(
			$(this).attr('username'),
			$(this).attr('to_id')
		);
	});

	$('#fb_paging_link').live('click', function() {
		$('#fb_paging').html('<img src="' + base_url + 'media/css/css-img/modal/ajaxLoader.gif" alt="" />');
		$.ajax({
			  url: base_url + $(this).attr('url'),
			  cache: false,
			  success: function(html){
				$('#fb_paging').remove();
			    $("#fb_friends").append(html);
			  }
		});
	});

	var xhr;
	$('#fb_search').live('keyup', function() {
        if(xhr && xhr.readystate != 4){
            xhr.abort();
        }
		$('#fb_paging').remove();
		$("#fb_friends").html('<div id="fb_paging"><img src="' + base_url + 'media/css/css-img/modal/ajaxLoader.gif" alt="" /></div>');
		xhr = $.ajax({
			  url: base_url + 'account/invite_fb_friends_search?val=' + encodeURI($(this).val()),
			  cache: false,
			  success: function(html){
				//$('#fb_paging').remove();
			    $("#fb_friends").html(html);
			  }
		});
		//xhr = $("#fb_friends").load(base_url + 'account/invite_fb_friends_search?val=' + encodeURI($(this).val()));
	});
});

$(document).ready(function() {

    // Vote on or flag reports.
    $("ul.poster-rep-controls").find("a").click(function(e) {
        rid = document.location.href.match(/.*\/report\/view\/(\d+).*/)[1];
        if (!rid) return false;

        if ($(this).parent().hasClass("thumbs-up2"))
        {
            e.preventDefault();
            $.ajax(base_url + 'reports/vote?report_id=' + rid + '&vote=up',
                   { success:
                        function(data)
                        {
                            var adjustment = parseInt(data);
                            if (!(isNaN(adjustment) || adjustment == 0))
                            {
                                var count = parseInt($("ul.poster-rep-controls").find("span.subdue").text());
                                if (isNaN(count)) count = 0;
                                count += adjustment;
                                $("ul.poster-rep-controls")
                                    .find("span.subdue").text(count.toString());
                            }
                        }
                   });
            $(this).parent().removeClass("thumbs-up2");
            $(this).parent().addClass("thumbs-up2-x");
            $(this).parent().parent()
                    .find("li.thumbs-down2-x").addClass('thumbs-down2');
            $(this).parent().parent()
                    .find("li.thumbs-down2-x").removeClass('thumbs-down2-x');
        }
        else if ($(this).parent().hasClass("thumbs-down2"))
        {
            e.preventDefault();
            $.ajax(base_url + 'reports/vote?report_id=' + rid + '&vote=down',
                   { success:
                        function(data)
                        {
                            var adjustment = parseInt(data);
                            if (!(isNaN(adjustment) || adjustment == 0))
                            {
                                var count = parseInt($("ul.poster-rep-controls").find("span.subdue").text());
                                if (isNaN(count)) count = 0;
                                count += adjustment;
                                $("ul.poster-rep-controls")
                                    .find("span.subdue").text(count.toString());
                            }
                        }
                   });
            $(this).parent().removeClass("thumbs-down2");
            $(this).parent().addClass("thumbs-down2-x");
            $(this).parent().parent()
                    .find("li.thumbs-up2-x").addClass('thumbs-up2');
            $(this).parent().parent()
                    .find("li.thumbs-up2-x").removeClass('thumbs-up2-x');
        }
        else if ($(this).parent().hasClass("flagabuse"))
        {
            e.preventDefault();
            $(this).parent().parent()
                    .find(".flagabuse-wrapper-div").slideDown("fast");
        }
    });

    // Vote on or flag comments in report view.
    $("li.rep-controls").find("a:not([class$='login'])").click(function(e)
    {
    	if ($(this).hasClass('unfollow') ||
    	        $(this).hasClass('result-adjustment-undo'))
    	{
	    	return true;
    	}
        cid = $(this).parent().parent().prop("id").match(/^comment-(\d+)$/)[1];
        if (!cid) return false;

		var $parent = $(this).parent().parent().parent();
		var user_vote = $parent.attr('data-user_voted_before');
		var user_voted_before = user_vote != '0' ? true : false;

        if ($(this).parent().hasClass("thumbs-up2"))
        {
            e.preventDefault();
            var url = base_url + "comments/vote?comment_id=" + cid + "&vote=up";
            if ($(this).prop("title") == "group")
                url += "&group=1";

            var successfully_voted = false;

            $.ajax(
			{
				url: url,
				type: 'GET',
				dataType: 'json',
				async: false,
				success: function(result)
				{
					successfully_voted = (result !== 0);
				}
			});

			if (!successfully_voted)
			{
				$sb.show_error('You can\'t vote on your own comment.');
				return;
			}

            $(this).parent().removeClass("thumbs-up2");
            $(this).parent().addClass("thumbs-up2-x");
            $(this).parent().parent().find("li.thumbs-down2-x")
                    .addClass("thumbs-down2")
                    .removeClass("thumbs-down2-x");

            var current_votes = parseInt($('#positive_thumb_count_' + cid).attr('data-num_votes'));
			$('#positive_thumb_count_' + cid).html(current_votes + 1).attr('data-num_votes', current_votes + 1);

			if (user_voted_before)
			{
				// Deduct from positive number
				var current_votes = parseInt($('#negative_thumb_count_' + cid).attr('data-num_votes'));
				$('#negative_thumb_count_' + cid).html(current_votes - 1).attr('data-num_votes', current_votes - 1);
			}
			/*else
			{
				$parent.attr('data-user_voted_before', '1');
			}*/

			$parent.attr('data-user_voted_before', '1');
        }
        else if ($(this).parent().hasClass("thumbs-down2"))
        {
            e.preventDefault();
            var url = base_url + "comments/vote?comment_id=" + cid + "&vote=down";
            if ($(this).prop("title") == "group")
                url += "&group=1";

			var successfully_voted = false;

			$.ajax(
			{
				url: url,
				type: 'GET',
				dataType: 'json',
				async: false,
				success: function(result)
				{
					successfully_voted = (result !== 0);
				}
			});

			if (!successfully_voted)
			{
				$sb.show_error('You can\'t vote on your own comment.');
				return;
			}

            $(this).parent().removeClass("thumbs-down2");
            $(this).parent().addClass("thumbs-down2-x");
            $(this).parent().parent().find("li.thumbs-up2-x")
                    .addClass("thumbs-up2")
                    .removeClass("thumbs-up2-x");

			var current_votes = parseInt($('#negative_thumb_count_' + cid).attr('data-num_votes'));
			$('#negative_thumb_count_' + cid).html(current_votes + 1).attr('data-num_votes', current_votes + 1);

			if (user_voted_before)
			{
				// Deduct from positive number
				var current_votes = parseInt($('#positive_thumb_count_' + cid).attr('data-num_votes'));
				$('#positive_thumb_count_' + cid).html(current_votes - 1).attr('data-num_votes', current_votes - 1);
			}
			/*else
			{
				$parent.attr('data-user_voted_before', '-1');
			}*/

			$parent.attr('data-user_voted_before', '-1');
        }
        else if ($(this).parent().hasClass("flagabuse"))
        {
            e.preventDefault();
            $(this).parent().parent()
                    .find(".flagabuse-wrapper-div").slideDown("fast");
        }
    });

    // Vote on comments in group pages.
    $("[id^='comment-']").find("a[class|='thumbs-up']").click(function(e) {
        if (!($(this).hasClass('thumbs-up-login')||
                $(this).hasClass('thumbs-down-login')))
            e.preventDefault();
        if ($(this).hasClass('thumbs-up'))
        {
            var vote = 'up';
            if (cid = $(this).parent().parent().parent().parent().parent().prop('id').match(/^comment-(\d+)$/)[1])
            {
                var url = base_url + 'comments/vote?comment_id=' + cid + '&vote=' + vote;
                if ($(this).prop('type') == 'group')
                    url += '&group=1';
                $.ajax(url);
                $(this).removeClass('thumbs-up');
                $(this).addClass('thumbs-up-x');
                $(this).parent().find("a.thumbs-down-x").addClass('thumbs-down');
                $(this).parent().find("a.thumbs-down-x").removeClass('thumbs-down-x');
                $(this).parent().parent().find('div.r-voted').text('You Have Voted');
            }
        }
    });
    $("[id^='comment-']").find("a[class|='thumbs-down']").click(function(e) {
        if (!$(this).hasClass('thumbs-down-login'))
            e.preventDefault();
        if ($(this).hasClass('thumbs-down'))
        {
            var vote = 'down';
            if (cid = $(this).parent().parent().parent().parent().parent().prop('id').match(/^comment-(\d+)$/)[1])
            {
                var url = base_url + 'comments/vote?comment_id=' + cid + '&vote=' + vote;
                if ($(this).prop('type') == 'group')
                    url += '&group=1';
                $.ajax(url);
                $(this).removeClass('thumbs-down');
                $(this).addClass('thumbs-down-x');
                $(this).parent().find("a.thumbs-up-x").addClass('thumbs-up');
                $(this).parent().find("a.thumbs-up-x").removeClass('thumbs-up-x');

                    $(this).parent().parent().find('div.r-voted').text('You Have Voted');
            }
        }
    });

    // Flag abuse on comments or reports...

    // hover...
    $("[class^='flagabuse-wrapper-']").find("a").mouseenter(function() {
        if (!$(this).hasClass("flagged"))
            $(this).parent().find(".hovertext").show();
    });

    $("[class^='flagabuse-wrapper-']").find("a").mouseleave(function() {
        $(this).parent().find(".hovertext").hide();
    });

    /*
    $("[class^='flagabuse-wrapper-']").find(".flagabuse").click(function(e) {
	    e.preventDefault();
	    if($(this).attr('class') == 'flagabuse')
	    	$(this).parent().parent().children(".flagabuse-wrapper-div").slideDown("fast");
    });
    */

    $("[class^='flagabuse-wrapper-']").find(".flagabuse-close").click(function(e) {
	    e.preventDefault();
		$(this).parent().slideUp("fast");
	});

    // Message form.
    $("[name='message-form']").submit(function() {
        $(".jGrowl-notification").trigger("jGrowl.close");
        var message = '';
        if (!$(this).find("[name='subject']").val())
            message += '- You must provide a subject line.<br />';
        if (!$(this).find("[name='body']").val())
            message += '- You must provide a message body.<br />';
        if (message.length > 0)
        {
            $.jGrowl(message, { theme:  'error', sticky: true });
            return false;
        }
    });

	$('form.flag-form').submit(function(e){
		e.preventDefault();
		error_msg = '';

		var $this = $(this);
		var what = $this.attr('data-what');

		$.ajax({
			async: false,
			type: 'post',
			url: base_url + $(this).children('#flag-check-url').val(),
			data: $(this).serialize(),
			success: function(data) {
				if(data)
				{
					error_msg = data + error_msg;
				}
				else
				{
					if (what === 'report')
					{
						//$('#open_report_flagabuse').unbind('click');
						$('#report_flag_container').attr('class', 'flag-x');
					}
					else if (what === 'comment')
					{
						var comment_id = $this.attr('data-comment_id');

						$('#flag_' + comment_id).addClass('flagged')
					}
				}
			}
		});

		if(!error_msg)
		{
			$.ajax({
				async: false,
				type: 'post',
				url: base_url + $(this).children('#flag-action-url').val(),
				data: $(this).serialize()
			});
			$.jGrowl('&middot; You have successfully flagged this item.', { theme: 'success', sticky: true });
			$(this).parent().slideUp("fast", function()
			{
				if (what === 'report')
				{
					$('#report_flag_message').val('');
				}
			});
			$(this).parent().parent().children("[class^='flagabuse-wrapper-']").children('.flagabuse').addClass('flagged');
			$(this).parent().parent().children("[class^='flagabuse-wrapper-']").children('.flagged').removeClass('flagabuse');
		}
		else
		{
			$.jGrowl(error_msg, { theme: 'error', sticky: true });
		}

		return false;
	});

    // Picture and video forms.
    $("#picture_form").submit(function() {
        $(this).find(":submit").attr("disabled", "disabled").addClass('c-btn-loader');
    });
    $("#video_form").submit(function() {
        $(this).find(":submit").attr("disabled", "disabled");
    });

    if (document.all ||
        window.sidebar ||
        (window.opera && window.print) ||
        window.chrome ||
        navigator.userAgent.match(/.*Safari.*/))
    {
        $(".add_bookmark_holder").html('<a class="bookmark_this_page" href="#">Bookmark This</a>');
    }
    $(".bookmark_this_page").click(function(e) {
        e.preventDefault();
        if(document.all) // MSIE
        {
            window.external.AddFavorite(location.href, document.title);
        }
        else if (window.sidebar) // Firefox
        {
            window.sidebar.addPanel(document.title, location.href, '');
        }
        else if (window.opera && window.print) // Opera
        {
            var bma = document.createElement('a');
            bma.setAttribute('href', location.href);
            bma.setAttribute('title', document.title);
            bma.setAttribute('rel', 'sidebar');
            bma.click();
        }
        else
        {
            alert('Press ctrl+D to bookmark (Command+D for Macs) after you click OK');
        }
    });

    // Handling feedback stars.
    // On mouseover
    $("[name^='star_']").live('mouseover', function() {
        var star_idx = parseInt($(this).attr('name').match(/^star_(\d+)$/)[1]);
        for (i = 1; i <= 5; i++)
        {
            if (i <= star_idx)
                $("[name='star_" + i + "']").addClass('star_filled');
            else
                $("[name='star_" + i + "']").removeClass('star_filled');
        }
    });
    // On mouseout
    $(".rate_widget").live('mouseleave', function() {
        var vote_val = $("[name='vote']").val();
        if (vote_val == '')
            vote_val = 0;
        else
            vote_val = parseInt(vote_val);
        for (i = 1; i <= 5; i++)
        {
            if (i <= vote_val)
                $("[name='star_" + i + "']").addClass('star_filled');
            else
                $("[name='star_" + i + "']").removeClass('star_filled');
        }
    });
    // On click
    $("[name^='star_']").live('click', function() {
        var star_idx = parseInt($(this).attr('name').match(/^star_(\d+)$/)[1]);
        $("[name='vote']").val(star_idx);
        for (i = 1; i <= 5; i++)
        {
            if (i <= star_idx)
                $("[name='star_" + i + "']").addClass('star_filled');
            else
                $("[name='star_" + i + "']").removeClass('star_filled');
        }
    });
});
$(function() {
    $("[id^='btn-cat']").click(function(e) {
        e.preventDefault();
        $(this).parent().parent().children('li').removeClass('active');
        $(this).parent().addClass('active');
    });
});

function clean_input(str)
{
    return $('<div />').text(str).html();
}

/*
function update_social_stats(network)
{
	//this is not meant to update the badge, just a trigger to update our database
	$.ajax({'/common/update_' + network});
}
*/
/*
$(document).ready(function() {
	  $('#proof_add').uploadify({
	    'uploader'  : base_url + 'media/assets/uploadify/uploadify.swf',
	    'script'    : base_url + 'media/assets/uploadify/uploadify.php',
	    'cancelImg' : base_url + 'media/assets/uploadify/cancel.png',
	    'folder'    : base_url + 'media/assets/uploads',
	    'auto'      : false,
	    'multi'		: true
	  });
	});
*/
