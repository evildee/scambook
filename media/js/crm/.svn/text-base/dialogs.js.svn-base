$(function () {
	$('a.dialog-open-btn').live('click', function() {
		
		var self = $(this);
		var tabs_id = $(this).attr('data-id');
		var data = self.data();
		// var dialog_id = get_dialog_id(self);
		var placeholder_dialog = $("#dialog_placeholder");
		
		if (data.request !== undefined || data.request !== "") {
			
			if (data.request.length > 0) {

				var list = $("<ul>");
				var tabs_container = $("<div>", {'id': 'tabs'});
				var tabs = data.request;

				for (var i = 0; i < tabs.length; i++) {
					var tab = tabs[i];
					// assemble tabs
					list.append($("<li>").append(
						$("<a>", {
							'href': tab.request
						}).html(tab.title)
					));
				}

				placeholder_dialog.append(tabs_container.append(list));
				placeholder_dialog.dialog({
					modal: true,
					close: function (event, ui) {
						placeholder_dialog.html('');
					}
				});

				if (self.attr('data-width') !== undefined)
				{
					placeholder_dialog.dialog('option', 'width', self.attr('data-width'));
				}

				if (self.attr('data-height') !== undefined)
				{
					placeholder_dialog.dialog('option', 'height', self.attr('data-height'));
				}

				placeholder_dialog.dialog('open');

				var tabs_func = null,
					tabsshow_func = function (event, ui) { $('#' + ui.panel.getAttribute('id')).html('Loading...') }, // Before AJAX call
					tabsload_func = null; // After AJAX call

				if ( tabs_id === 'business_accounts' )
				{
					tabsload_func = function(event, ui)
					{
						if (ui.index === 2)
						{
							$('#associate_company').autocomplete(
							{
								source: '/ajax_get_companies_autocomplete',
								select: function(event, ui)
								{
									if ($sb.empty(ui.item.value))
										return;

									$('#associate').removeAttr('disabled').addClass('btn-primary');
								}
							});

							$('#associate_company').keyup(function(e)
							{
								if ($sb.empty(e.target.value))
								{
									$('#associate').attr('disabled', true).removeClass('btn-primary');
								}
								else
								{
									$('#associate').removeAttr('disabled').addClass('btn-primary');
								}
							});
						}
						else if (ui.index === 3)
						{
							$('#account_balance_form').submit(function()
							{
								var account_id = $('#account_id').val(),
									new_balance = $('#balance').val(),
									action_type = $('#action_type').val();

								if ( !new_balance || !action_type )
									return false;

								var $change_button = $('#change_button');
								$change_button.attr('disabled', true).val('Changing...');

								$sb.ajax.post('/business_account_change_balance', { id: account_id, new_balance: new_balance, action_type: action_type }, function(result)
								{
									$('#action_type').val('');

									$change_button.removeAttr('disabled').val('Change');

									// Go to Activity tab
									$('#tabs').tabs('select', 0);

									// Refresh table
									$sb.crm.Business_Accounts.refresh_table($sb.crm.Business_Accounts.$current_paging_button);
								});

								return false;
							});
						}
						else if (ui.index === 4)
						{
							tabs_func = {
								ajaxOptions: {
									cache: false
								}
							};
						}

						$('.refund').click(function()
						{
							var account_id = $(this).attr('data-account_id');
							var stripe_id = $(this).attr('data-stripe_id');

							$.alert({
								type: 'confirm',
								title: 'Refund?',
								text: '<p>Are you sure you want to refund "' + stripe_id + '"?</p>',
								callback: function()
								{
									$('#ui-tabs-4').html('');

									$sb.ajax.post('/business_account_refund', { account_id: account_id, stripe_id: stripe_id }, function(result)
									{
										$('#tabs').tabs('load', 3);
									});
								}
							});
						});
					};
				}

				$('#tabs').tabs(tabs_func);

				if ( tabsshow_func !== null )
					$('#tabs').bind('tabsshow', tabsshow_func);

				if ( tabsload_func !== null )
					$('#tabs').bind('tabsload', tabsload_func);
			}
		}
		return false;
	});
});