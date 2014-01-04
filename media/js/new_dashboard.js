$(function()
{
	$('.follow-up-form').submit(function()
	{
		var $form = $(this);
		var report_id = parseInt($form.attr('data-report_id'), null);
		var $textarea = $('#follow_up_text_' + report_id);
		var message = $textarea.val();

		if (!message)
		{
			$textarea.focus();
			return false;
		}

		var $submit_btn = $('#follow_up_submit_' + report_id);
		$submit_btn.addClass('c-btn-loader').attr('disabled', true);

		var num_follow_ups = $('#follow_ups_' + report_id).children('.follow-up').length;

		$sb.ajax.post('/dashboard/follow_up', { report_id: report_id, message: message, num_follow_ups: num_follow_ups }, function(result)
		{
			$submit_btn.removeClass('c-btn-loader').removeAttr('disabled');

			if (!result.data.error) // All good
			{
				var html = '';

				if (num_follow_ups === 0) // First follow up
				{
					html = '<h5 class="panel__heading-text-2">Follow Up</h5>';
					html += '<div id="follow_ups_' + report_id + '" class="m-message-thread margin-bottom-20">' + result.data.html + '</div>';

					$('#follow_up_container_' + report_id).html(html);
				}
				else
				{
					$('#follow_ups_' + report_id).append(result.data.html);
				}

				/*$('#follow_container_' + report_id).slideToggle('slow', function()
				{
					$textarea.val('');
				});*/

				$textarea.val('');
			}
		});

		return false;
	});

	$('#submit_proof').submit(function()
	{
		$('#submit_proof_button').addClass('c-btn-loader').attr('disabled', true);

		return true;
	});
});