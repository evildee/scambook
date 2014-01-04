function Premium_User_Accounts() {}

Premium_User_Accounts.prototype =
{
	// Search & Filter
	search_term: '',
	selected_status: '',
	selected_user_status: '',
	selected_from_date: '',
	selected_to_date: '',
	$clear_filter_field: null,
	search_regular_users_only: false,
	search_called_only: false,
	$status_field: null,
	$user_status_field: null,
	$from_date_field: null,
	$to_date_field: null,
	num_payment_fails: '',

	// Sort
	current_sort_field: 'created',
	current_sort_order: 'desc',

	// Table
	table_ajax_request: null,

	$user_accounts_table: null,
	$tbody: null,

	$users_table: null,
	$tbody_users: null,

	$pagination: null,
	$view_dialog: null,

	$current_paging_button: null,
	$first_paging_button: null,

	// Dialog
	view_user_account_id: 0,
	view_user_id: 0,
	dialog_tab_index_to_select: 0,

	// Stripe User Lookup
	doing_user_stripe_lookup: false,

	// Refund
	is_refunding: false,
	selected_stripe_id: '',

	// Statistics
	$stats_content: null,

	updating_last_called: false,

	update_tracking_code_button: null,

	changes_made: false, // Keep track of changes for dialog

	_init: function()
	{
		this.binds();
	},

	binds: function()
	{
		var inst = this;

		inst.$status_field = $('#status_field');
		inst.$user_status_field = $('#user_status_field');

		inst.$from_date_field = $('#from_date_field');
		inst.$to_date_field = $('#to_date_field');

		// Table
		inst.$current_paging_button = $('.dataTables_paginate a:eq(0)');
		inst.$first_paging_button = inst.$current_paging_button;

		// Search & Filter
		$clear_filter_field = $('#clear_filter_field');

		$('#search_term').keyup(function(e)
		{
			inst.search_term = e.target.value;

			inst.check_clear_button();

			if (inst.search_regular_users_only)
			{
				inst.refresh_users_table(inst.$first_paging_button);
			}
			else
			{
				inst.refresh_user_accounts_table(inst.$first_paging_button, true);
			}
		});

		$('#status').live('change', function(e)
		{
			inst.selected_status = e.target.value;

			inst.check_clear_button();

			inst.refresh_user_accounts_table(inst.$first_paging_button);
		});

		$('#user_status').live('change', function(e)
		{
			inst.selected_user_status = e.target.value;

			inst.check_clear_button();

			inst.refresh_users_table(inst.$first_paging_button);
		});

		$('#from_date, #to_date').live('change', function(e)
		{
			if (e.target.id === 'from_date')
			{
				inst.selected_from_date = e.target.value;
			}
			else if (e.target.id === 'to_date')
			{
				inst.selected_to_date = e.target.value;
			}

			inst.check_clear_button();

			if (inst.search_regular_users_only)
			{
				inst.refresh_users_table();
			}
			else
			{
				inst.refresh_user_accounts_table(inst.$first_paging_button);
			}
		});

		$('#clear_filter_button').live('click', function()
		{
			$('#search_term').val('');
			inst.search_term = '';

			$('#status').val('');
			$.uniform.update("#status");
			inst.selected_status = '';

			$('#user_status').val('');
			$.uniform.update("#user_status");
			inst.selected_user_status = '';

			$('#from_date').val('');
			inst.selected_from_date = '';

			$('#to_date').val('');
			inst.selected_to_date = '';

			$('#search_regular_users_only').removeAttr('checked');
			$.uniform.update('#search_regular_users_only');

			$clear_filter_field.hide();

			//inst.refresh_users_table(inst.$first_paging_button);
			inst.refresh_user_accounts_table(inst.$first_paging_button);
		});

		// Sorting
		$('.sortable-th').live('click', function()
		{
			var new_sort_field = $(this).attr('data-sort');

			if (new_sort_field === inst.current_sort_field) // If clicked on same
			{
				inst.current_sort_order = (inst.current_sort_order === 'asc') ? 'desc' : 'asc';
			}
			else // If a different, hide previous icon and show new
			{
				inst.current_sort_order = 'asc';

				$('#' + inst.current_sort_field + '_sort_icon').addClass('hidden');
				$('#' + new_sort_field + '_sort_icon').removeClass('hidden');
			}

			// Change icon
			$('#' + inst.current_sort_field + '_th').removeClass('active');
			$('.icon').not('#' + new_sort_field + '_sort_icon').removeClass('active');

			inst.current_sort_field = new_sort_field;

			var $icon = $('#' + new_sort_field + '_sort_icon');
			$('#' + new_sort_field + '_th').addClass('active');
			$icon.addClass('active');

			if (inst.current_sort_order === 'asc')
			{
				$icon.removeClass('desc');
				$icon.addClass('asc');
			}
			else
			{
				$icon.removeClass('asc');
				$icon.addClass('desc');
			}

			inst.refresh_user_accounts_table(inst.$first_paging_button);
		});

		inst.$user_accounts_table = $('#premium_user_accounts_table');
		inst.$tbody = $('#premium_user_accounts_tbody');

		inst.$users_table = $('#users_table');
		inst.$tbody_users = $('#users_tbody');

		inst.$pagination = $('#pagination_container');

		// Paging
		$('.page_button').live('click', function(e)
		{
			inst.$current_paging_button = $(this);

			e.preventDefault();

			if (inst.search_regular_users_only)
			{
				inst.refresh_users_table($(this));
			}
			else
			{
				inst.refresh_user_accounts_table($(this));
			}
		});

		// Approve
		$('.approve').live('click', function()
		{
			var id = $(this).attr('data-id');

			inst.approve(id, false);
		});

		// Deny
		$('.deny').live('click', function()
		{
			var id = $(this).attr('data-id');

			inst.deny(id, false);
		});

		// View
		inst.$view_dialog = $('#view_dialog');
		inst.$view_dialog.dialog(
		{
			autoOpen: false,
			width: 860,
			height: 620,
			modal: true,
			buttons:
			{
				'Save': function() {
					inst.save_user_account_dialog();

					$(this).dialog('close');
				},
				'Close': function() {
					if (inst.changes_made)
					{
						inst.close_dialog();
					}
					else
					{
						$(this).dialog('close');
					}
				}
			},
			open: function(event, ui)
			{
				inst.$view_dialog.dialog('option', 'title', 'View Premium User Account #' + inst.view_user_account_id);
				inst.$view_dialog.html('<span id="dialog_loader"></span>');

				$('#user_account_' + inst.view_user_account_id).addClass('opened');

				// Load user account
				$.getJSON('/ajax_get_user_account', { id: inst.view_user_account_id }, function(result)
				{
					inst.$view_dialog.html(result.html);

					$('#user_account_dialog_tabs').tabs(
					{
						create: function(event, ui) { $('#call_script_tabs').tabs(); },
						selected: inst.dialog_tab_index_to_select
					})
					.bind('tabsshow', function(event, ui)
					{
						switch (ui.index) {
							case 5:
								// Get stripe info
								var $tab_stripe = $('#tab_stripe');

								inst.selected_stripe_id = $tab_stripe.attr('data-stripe_id');

								inst.user_stripe_lookup(inst.view_user_account_id, inst.selected_stripe_id);

								break;
							case 6:
								//$('#tracking_code').focus();

								break;
						}
					});
				});
			},
			close: function()
			{
				$('#user_account_' + inst.view_user_account_id).removeClass('opened');

				inst.dialog_tab_index_to_select = 0;

				inst.changes_made = false;
			}
		});

		inst.$view_user_dialog = $('#view_user_dialog');
		inst.$view_user_dialog.dialog(
		{
			autoOpen: false,
			width: 860,
			height: 700,
			modal: true,
			buttons:
			{
				//'Offer 30-day Premium User Account Trial': function() { alert('Offer Premium User Account Trial!'); },
				'Close': function() { $(this).dialog('close'); }
			},
			open: function(event, ui)
			{
				inst.$view_user_dialog.dialog('option', 'title', 'View User #' + inst.view_user_id);
				inst.$view_user_dialog.html('<span id="dialog_loader"></span>');

				$('#user_' + inst.view_user_id).addClass('opened');

				// Load user account
				$.getJSON('/ajax_get_user', { id: inst.view_user_id }, function(result)
				{
					inst.$view_user_dialog.html(result.html);

					$('#user_dialog_tabs').tabs(
					{
						create: function(event, ui) { $('#user_call_script_tabs').tabs(); },
						selected: inst.dialog_tab_index_to_select
					});
				});
			},
			close: function()
			{
				$('#user_' + inst.view_user_id).removeClass('opened');

				inst.dialog_tab_index_to_select = 0;
			}
		});

		// Delete
		$('.delete').live('click', function()
		{
			var id = $(this).attr('data-id');

			inst.delete(id, false);
		});

		// Cancel
		$('.cancel').live('click', function()
		{
			var id = $(this).attr('data-id'),
				refund = $(this).attr('data-refund') == 1 ? true : false;

			inst.cancel(id, refund, false);
		});

		$('.ui-widget-overlay').live('click', function() {
			inst.$view_dialog.dialog('close');
			inst.$view_user_dialog.dialog('close');
		});

		// View user account dialog button
		$('.view').live('click', function()
		{
			var id = $(this).attr('data-id');

			inst.view_user_account(id);
		});

		// View user dialog
		$('.view-user').live('click', function()
		{
			var id = $(this).attr('data-id');

			inst.view_user(id);
		});

		// Show more complaints button
		$('.show-more-complaints').live('click', function()
		{
			var id = $(this).attr('data-id');

			inst.view_user_account(id, 2);
		});

		// Show user info
		$('.user-account-user-info').live('click', function()
		{
			var id = $(this).attr('data-id');

			inst.view_user_account(id, 1);
		});

		// Show user info
		$('.user-info').live('click', function()
		{
			var id = $(this).attr('data-id');

			inst.view_user(id, 1);
		});

		// Stripe user lookup
		/*$('#stripe_user_lookup').live('click', function()
		{
			var user_account_id = $(this).attr('data-id');
			var stripe_id = $(this).attr('data-stripe_id');

			inst.user_stripe_lookup(user_account_id, stripe_id);
		});*/

		// Take over
		$('.take-over').live('click', function()
		{
			var user_id = $(this).attr('data-user_id'),
				href = $(this).attr('href');

			inst.take_over(user_id, href, false);

			return false;
		});

		// Refund
		$('.refund').live('click', function()
		{
			if (inst.is_refunding === true)
			{
				return;
			}

			var charge_id = $(this).attr('data-charge_id'),
				amount = $(this).attr('data-amount');

			inst.refund($(this), charge_id, amount, false);
		});

		// Offer
		$('.offer').live('click', function()
		{
			var user_id = $(this).attr('data-id');

			inst.offer(user_id, false);
		});

		// Statistics
		inst.$stats_content = $('#stats_content');

		// Refresh stats
		$('#refresh_stats').click(function()
		{
			if (inst.search_regular_users_only)
			{
				inst.refresh_users_table(inst.$current_paging_button);
			}
			else
			{
				inst.refresh_user_accounts_table(inst.$current_paging_button, true);
			}

			inst.refresh_stats(true);
		});

		$('.goto-call-script').live('click', function()
		{
			var report_id = $(this).attr('data-report_id');

			$('#user_dialog_tabs').tabs('select', 2);
			$('#user_account_dialog_tabs').tabs('select', 3);

			// Select correct report
			var report_tab_index = $('#call_script_tabs a[href="#tab_call_script_' + report_id + '"]').parent().index();
			$('#call_script_tabs').tabs('select', report_tab_index);
		});

		$('#premium_user_accounts_table th').hover(function()
			{
				$(this).children('a').addClass('over');
			},
			function()
			{
				$(this).children('a').removeClass('over');
			}
		);

		$('#search_regular_users_only').click(function(e)
		{
			if (inst.table_ajax_request != null)
				inst.table_ajax_request.abort();

			inst.search_regular_users_only = e.target.checked;

			if (inst.search_regular_users_only)
			{
				inst.$status_field.hide();
				inst.$user_status_field.show();

				inst.$from_date_field.hide();
				inst.$to_date_field.hide();

				inst.refresh_users_table(inst.$first_paging_button);
			}
			else
			{
				inst.$user_status_field.hide();
				inst.$status_field.show();

				inst.$from_date_field.show();
				inst.$to_date_field.show();

				inst.refresh_user_accounts_table(inst.$first_paging_button, true);
			}

			inst.check_clear_button();
		});

		// Update Last called
		$('#update_last_called').live('click', function()
		{
			if (inst.updating_last_called === true)
			{
				return;
			}

			var $this = $(this),
				user_id = $this.attr('data-user_id');

			inst.updating_last_called = true;

			$this.text('Updating...');

			$sb.ajax.post('/ajax_update_last_called', { id: user_id }, function(result)
			{
				$('#last_called').html(result.data.last_called);

				$this.text('Update');

				inst.updating_last_called = false;
			});
		});

		$('#search_called_only').click(function(e)
		{
			inst.search_called_only = e.target.checked;

			if (inst.search_regular_users_only)
			{
				inst.refresh_users_table(inst.$first_paging_button);
			}
			else
			{
				inst.refresh_user_accounts_table(inst.$first_paging_button, true);
			}
		});

		/*$('#update_tracking_code').live('click', function()
		{
			$('#update_tracking_code').html('Saving...');

			// Gather data from input fields
			var data = {};

			$('input[name="tracking_code[]"]').each(function(index, input)
			{
				var $input = $(input);

				data[$input.attr('data-report_id')] = $input.val();
			});

			// Save tracking code
			$.post('/ajax_update_tracking_code', { data: data }, function(result)
			{
				$('#update_tracking_code').html('Update');
			});
		});*/

		$('#premium_user_accounts_table .print-mailer').live('click', function()
		{
			var report_id = $(this).attr('data-report_id');

			$.alert({
				type: 'confirm',
				title: 'Set As Printed?',
				text: '<p>Do you want to set mailer as printed for complaint #' + report_id + '?</p>',
				callback: function()
				{
					$sb.ajax.post('/ajax_set_mailer_as_printed', { report_id: report_id }, function(result)
					{
						inst.refresh_user_accounts_table(inst.$current_paging_button);
					});
				}
			});

			//document.location = '/premium_mailer/' + report_id;
		});

		$('#general_form').live('submit', function() {
			alert('yo bro');

			return false;
		});

		$('#notes, input[name="tracking_code[]"]').live('keyup', function()
		{
			inst.changes_made = true;
		});

		$('#num_payment_fails').change(function(e)
		{
			inst.num_payment_fails = e.target.value;

			inst.refresh_user_accounts_table(inst.$first_paging_button);
		});

		// Init
		inst.refresh_user_accounts_table(inst.$first_paging_button);
		inst.refresh_stats();
	},

	refresh_user_accounts_table: function(jqInst, search_for_users)
	{
		var inst = this;

		if ($sb.empty(jqInst))
		{
			return false;
		}

		var page_number = jqInst.attr('data-page_number');

		if (!page_number)
		{
			page_number = '1';
		}

		if (!$sb.empty(page_number))
		{
			// Show loader
			inst.show_table_loader();

			// Abort previous AJAX request if one
			if (inst.table_ajax_request != null)
			{
				inst.table_ajax_request.abort();
			}

			inst.table_ajax_request = $.getJSON('/premium_user_accounts/' + page_number,
			{
				search_term: inst.search_term,
				status: inst.selected_status,
				from_date: inst.selected_from_date,
				to_date: inst.selected_to_date,
				sort_field: inst.current_sort_field,
				sort_order: inst.current_sort_order,
				search_for_users: inst.search_for_users,
				search_called_only: inst.search_called_only ? 1 : 0,
				num_payment_fails: inst.num_payment_fails
			},
			function(json)
			{
				inst.table_ajax_request = null;

				if (typeof(json.html.results) != 'undefined')
				{
					inst.$tbody.html(json.html.results);
				}

				if (typeof(json.html.pagination) != 'undefined')
				{
					inst.$pagination.html(json.html.pagination);
				}

				if (json.html.data.num_user_accounts == 0 && search_for_users === true)
				{
					inst.refresh_users_table(inst.$first_paging_button, true);
				}
			});
		}
	},

	refresh_users_table: function(jqInst, after_user_account_search)
	{
		var inst = this;

		if ($sb.empty(jqInst))
		{
			return false;
		}

		if (typeof after_user_account_search === 'undefined')
		{
			after_user_account_search = false;
		}

		var page_number = jqInst.attr('data-page_number');

		if (!page_number)
		{
			page_number = '1';
		}

		if (!$sb.empty(page_number))
		{
			inst.show_users_table_loader(after_user_account_search);

			if (inst.table_ajax_request != null)
			{
				inst.table_ajax_request.abort();
			}

			inst.table_ajax_request = $.getJSON('/ajax_search_users/' + page_number,
				{
					search_term: inst.search_term,
					status: inst.selected_user_status,
					search_called_only: inst.search_called_only ? 1 : 0
				},
			function(json)
			{
				inst.table_ajax_request = null;

				if (json.html.data.num_users > 0)
				{
					if (typeof(json.html.results) != 'undefined')
					{
						inst.$tbody_users.html(json.html.results);
					}

					if (typeof(json.html.pagination) != 'undefined')
					{
						inst.$pagination.html(json.html.pagination);
					}

					/*var users_data_table = $("#users_table").dataTable();
					var users_data_table_settings = users_data_table.fnSettings();
					users_data_table_settings.sAjaxSource = '';*/

					/*inst.$user_accounts_table.hide();
					inst.$users_table.show();*/
				}
				else
				{
					// No users found
					inst.$tbody_users.html('<tr><td colspan="6"><span style="float:left;width:100%;margin-top:190px;text-align:center">No regular users found.</span></td></tr>');
				}
			});
		}
	},

	show_table_loader: function()
	{
		this.$users_table.hide();
		this.$user_accounts_table.show();

		this.$tbody.html('<tr><td colspan="6"><span style="float:left;width:100%;margin-top:190px;text-align:center">Searching for Premium User Accounts...</span><br><div class="loader"></div></td></tr>');
	},

	show_users_table_loader: function(after_user_account_search)
	{
		if (typeof after_user_account_search === 'undefined')
		{
			after_user_account_search = false;
		}

		this.$user_accounts_table.hide();
		this.$users_table.show();

		this.$tbody_users.html('<tr><td colspan="6"><span style="float:left;width:100%;margin-top:190px;text-align:center">' + (after_user_account_search ? 'No Premium User Accounts found. ' : '') + 'Searching for regular users...</span><br><div class="loader"></div></td></tr>');
	},

	approve: function(id, confirmed)
	{
		var inst = this;

		if (!confirmed)
		{
			// Show confirm dialog
			$.alert({
				type: 'confirm',
				title: 'Are you sure?',
				text: '<p>Are you sure you want to approve user account?</p>',
				callback: function()
				{
					inst.approve(id, true);
				}
			});

			return;
		}
		else
		{
			$('#manage_buttons_' + id).html('Approving...');

			// Save to database
			$sb.ajax.post('/ajax_update_user_account', { id: id, action: 'approve' }, function()
			{
				inst.refresh_user_accounts_table(inst.$current_paging_button);
			});
		}
	},

	deny: function(id, confirmed)
	{
		var inst = this;

		if (!confirmed)
		{
			// Show confirm dialog
			$.alert({
				type: 'confirm',
				title: 'Are you sure?',
				text: '<p>Are you sure you want to deny user account?</p>',
				callback: function()
				{
					inst.deny(id, true);
				}
			});

			return;
		}
		else
		{
			$('#manage_buttons_' + id).html('Denying...');

			// Save to database
			$sb.ajax.post('/ajax_update_user_account', { id: id, action: 'deny' }, function()
			{
				inst.refresh_user_accounts_table(inst.$current_paging_button);
			});
		}
	},

	view_user_account: function(id, dialog_tab_index_to_select)
	{
		if (typeof dialog_tab_index_to_select !== 'undefined')
			this.dialog_tab_index_to_select = dialog_tab_index_to_select;

		this.view_user_account_id = id;

		this.$view_dialog.dialog('open');
	},

	view_user: function(id, dialog_tab_index_to_select)
	{
		if (typeof dialog_tab_index_to_select !== 'undefined')
			this.dialog_tab_index_to_select = dialog_tab_index_to_select;

		this.view_user_id = id;

		this.$view_user_dialog.dialog('open');
	},

	delete: function(id, confirmed)
	{
		var inst = this;

		if (!confirmed)
		{
			// Show confirm dialog
			$.alert({
				type: 'confirm',
				title: 'Are you sure?',
				text: '<p>Are you sure you want to delete user account "' + id + '"?</p>',
				callback: function()
				{
					inst.delete(id, true);
				}
			});

			return;
		}
		else
		{
			$('#manage_buttons_' + id).html('Deleting...');

			// Save to database
			$sb.ajax.post('/ajax_update_user_account', { id: id, action: 'delete' }, function()
			{
				inst.refresh_user_accounts_table(inst.$current_paging_button);
			});
		}
	},

	cancel: function(id, refund, confirmed)
	{
		var inst = this;

		if (!confirmed)
		{
			// Show confirm dialog
			$.alert({
				type: 'confirm',
				title: 'Are you sure?',
				text: '<p>Are you sure you want to cancel user account "' + id + '"?</p>',
				callback: function()
				{
					inst.cancel(id, refund, true);
				}
			});

			return;
		}
		else
		{
			$('#manage_buttons_' + id).html('Cancelling...');

			// Save to database
			$sb.ajax.post('/ajax_update_user_account', { id: id, action: 'cancel', refund: refund }, function()
			{
				inst.refresh_user_accounts_table(inst.$current_paging_button);
			});
		}
	},

	user_stripe_lookup: function(user_account_id, stripe_id)
	{
		var inst = this;

		if (inst.doing_user_stripe_lookup === true)
		{
			return;
		}

		$('#tab_stripe .loader').show();

		inst.doing_user_stripe_lookup = true;
		$('#stripe_user_lookup_content').html('');
		$('#stripe_user_lookup').text('Getting info from Stripe...');

		$sb.ajax.get('/ajax_user_stripe_lookup', { user_account_id: user_account_id, stripe_id: stripe_id }, function(result)
		{
			$('#tab_stripe .loader').hide();

			if (typeof result.errors === 'undefined')
			{
				$('#stripe_user_lookup_content').html(result.data.html);

				// Hide button if lookup was successful
				if (result.data.customer != null) {
					$('#stripe_user_lookup').hide();
				} else {
					$('#stripe_user_lookup_content').html('<span class="no-customer">Customer not found in Stripe.</span>');
				}
			}
			else
			{
				$('#stripe_user_lookup_content').html('<span class="error">' + result.errors.error + '</span>');
			}

			$('#stripe_user_lookup').text('Stripe Lookup');

			inst.doing_user_stripe_lookup = false;
		});
	},

	take_over: function(user_id, href, confirmed)
	{
		var inst = this;

		if (!confirmed)
		{
			// Show confirm dialog
			$.alert({
				type: 'confirm',
				title: 'Are you sure?',
				text: '<p>Are you sure you want to take over user?</p>',
				callback: function()
				{
					inst.take_over(user_id, href, true);
				}
			});

			return;
		}
		else
		{
			document.location = href;
		}
	},

	offer: function(user_id, confirmed)
	{
		var inst = this;

		if (!confirmed)
		{
			// Show confirm dialog
			$.alert({
				type: 'confirm',
				title: 'Are you sure?',
				text: '<p>Are you sure you want to offer user #' + user_id + ' a 30-Day Premium User Account Trial?</p>',
				callback: function()
				{
					inst.offer(user_id, true);
				}
			});

			return;
		}
		else
		{
			$('#manage_buttons_' + user_id).html('Offering...');

			// Save to database
			$sb.ajax.post('/ajax_offer_trial', { id: user_id }, function()
			{
				inst.refresh_users_table(inst.$current_paging_button);
			});
		}
	},

	refresh_stats: function(force_cache_recompile)
	{
		var inst = this;

		inst.$stats_content.html('').addClass('loading');

		if (typeof force_cache_recompile === 'undefined')
		{
			force_cache_recompile = false;
		}

		$.getJSON('/ajax_get_premium_user_account_stats', { force_cache_recompile: force_cache_recompile }, function(result)
		{
			inst.$stats_content.removeClass('loading').html(result.html);
		});
	},

	check_clear_button: function()
	{
		if ($('#search_term').val() !== '' || $('#status').val() !== '' || $('#user_status').val() !== '' || $('#from_date').val() !== '' || $('#to_date').val() !== '' || $('#search_regular_users_only').is(':checked'))
		{
			$clear_filter_field.show();
		}
		else
		{
			$clear_filter_field.hide();
		}
	},

	print_mailer: function(report_id)
	{
		alert('Print Mailer for Report ID #' + report_id);
	},

	save_user_account_dialog: function()
	{
		var inst = this,
			tracking_codes = {};

		$('input[name="tracking_code[]"]').each(function(index, input)
		{
			var $input = $(input);

			tracking_codes[$input.attr('data-report_id')] = $input.val();
		});

		// Notes
		var notes = $('#notes').val(),
			result = false;

		$.ajax(
		{
			url: '/ajax_save_user_account_dialog',
			type: 'POST',
			data: { user_account_id: inst.view_user_account_id, notes: notes, tracking_codes: tracking_codes },
			async: false,
			success: function(result)
			{
				result = true;
			}
		});

		return result;
	},

	close_dialog: function(confirmed)
	{
		var inst = this;

		if (!confirmed)
		{
			// Show confirm dialog
			$.alert({
				type: 'confirm',
				title: 'Are you sure?',
				text: '<p>Changes has been made!<br>Are you sure you want to close the dialog? All changes will be lost.</p>',
				callback: function()
				{
					inst.close_dialog(true);
				}
			});

			return;
		}
		else
		{
			inst.$view_dialog.dialog('close');
		}
	},

	refund: function(obj, charge_id, amount, confirmed)
	{
		var inst = this;

		if (!confirmed)
		{
			// Show confirm dialog
			$.alert({
				type: 'confirm',
				title: 'Are you sure?',
				text: '<p>Are you sure you want to refund user?</p>',
				callback: function()
				{
					inst.refund(obj, charge_id, amount, true);
				}
			});

			return;
		}
		else
		{
			inst.is_refunding = true;

			obj.text('Refunding...');

			$.post('/ajax_stripe_refund', { user_account_id: inst.view_user_account_id, charge_id: charge_id, amount: amount }, function(result)
			{
				inst.is_refunding = false;

				inst.user_stripe_lookup(inst.view_user_account_id, inst.selected_stripe_id);
			});
		}
	}
};

$sb.crm.Premium_User_Accounts = new Premium_User_Accounts();

$(document).ready(function()
{
	$sb.crm.Premium_User_Accounts._init();
});