function Business_Accounts() {}

Business_Accounts.prototype =
{
	// AJAX
	table_ajax_request: null,

	// Table
	$loader: null,
	$tbody: null,

	// Paging
	$pagination: null,
	$first_paging_button: null,
	$current_paging_button: null,

	// Search
	search_term: '',
	selected_plan: '',
	selected_status: '',
	selected_account_manager_id: '',

	// Delete
	delete_id: 0,

	_init: function()
	{
		$.uniform.restore('select');

		this.binds();
	},

	binds: function()
	{
		var inst = this;

		// Table
		inst.$loader = $('#table_loader');
		inst.$tbody = $('#tbody');

		// Paging
		inst.$pagination = $('#pagination_container');
		inst.$current_paging_button = $('.dataTables_paginate a:eq(0)');
		inst.$first_paging_button = inst.$current_paging_button;

		// Delete dialog
		$('#delete_dialog').dialog(
		{
			autoOpen: false,
			width: 500,
			height: 260,
			modal: true,
			buttons:
			{
				'Delete': function()
				{
					var $delete_button = $('#delete_dialog').next('.ui-dialog-buttonpane').children('.ui-dialog-buttonset').children('button:contains("Delete")');
					$delete_button.attr('disabled', true).addClass('ui-state-disabled').children('.ui-button-text').html('Deleting...');

					$sb.ajax.post('/ajax_delete_business_account', { id: inst.delete_id, why: $('#delete_why').val(), cancel_stripe: $('#cancel_stripe').is(':checked') ? 1 : 0 }, function(result)
					{
						inst.refresh_table(inst.$current_paging_button);

						$('#delete_dialog').dialog('close');
					});
				},
				'Close': function()
				{
					$(this).dialog('close');
				}
			}
		});

		$('.page_button').live('click', function(e)
		{
			inst.$current_paging_button = $(this);

			e.preventDefault();

			inst.refresh_table($(this));
		});

		// Search
		$('#search_term').keyup(function(e)
		{
			inst.search_term = e.target.value;

			inst.refresh_table(inst.$first_paging_button);
		});

		$('#plan').change(function(e)
		{
			inst.selected_plan = e.target.value;

			inst.refresh_table(inst.$first_paging_button);
		});

		$('#status').change(function(e)
		{
			inst.selected_status = e.target.value;

			inst.refresh_table(inst.$first_paging_button);
		});

		$('#account_manager').change(function(e)
		{
			inst.selected_account_manager_id = e.target.value;

			inst.refresh_table(inst.$first_paging_button);
		});

		$('.delete').live('click', function(e)
		{
			inst.delete_id = $(this).attr('data-id');

			$('#delete_dialog').dialog('open');

			/*$sb.ajax.post('/ajax_delete_business_account', { id: id }, function(result)
			 {
			 inst.refresh_table(inst.$current_paging_button);
			 });*/
		});

		$('.disassociate').live('click', function()
		{
			var $this = $(this),
				account_id = $(this).attr('data-account_id'),
				company_id = $(this).attr('data-company_id'),
				company_title = $(this).attr('data-company_title');

			$.alert({
				type: 'confirm',
				title: 'Disassociate company?',
				text: '<p>Are you sure you want to disassociate company "' + company_title + '" from Business Account?</p>',
				callback: function()
				{
					$this.html('Disassociating...');

					$sb.ajax.post('/ajax_disassociate_company_from_business_account', { account_id: account_id, company_id: company_id }, function(result)
					{
						$('#ui-tabs-3').html('Loading...');

						$('#tabs').tabs('load', 2);

						inst.refresh_table(inst.$current_paging_button);
					});
				}
			});
		});

		$('#associate_company_form').live('submit', function()
		{
			var account_id = $('#associate_company_form_account_id').val(),
				company_title = $('#associate_company').val();

			$('#associate').val('Associating...').attr('disabled', true);

			$sb.ajax.post('/ajax_associate_company_to_business_account', { account_id: account_id, company_title: company_title }, function(result)
			{
				$('#ui-tabs-3').html('Loading...');

				$('#tabs').tabs('load', 2);

				inst.refresh_table(inst.$current_paging_button);
			});

			return false;
		});

		inst.refresh_table(inst.$current_paging_button);
	},

	refresh_table: function(jqInst)
	{
		var inst = this;

		if ($sb.empty(jqInst))
			return false;

		var page_number = jqInst.attr('data-page_number');

		if (!page_number)
			page_number = '1';

		if (!$sb.empty(page_number))
		{
			if (inst.table_ajax_request != null)
				inst.table_ajax_request.abort();

			// Show loader
			inst.show_loader();

			inst.table_ajax_request = $.getJSON('/business_accounts/' + page_number, { search_term: inst.search_term, plan: inst.selected_plan, status: inst.selected_status, account_manager_id: inst.selected_account_manager_id }, function(json)
			{
				inst.table_ajax_request = null;

				if (json.html.data.num_business_accounts > 0)
				{
					if (typeof(json.html.results) != 'undefined')
						inst.$tbody.html(json.html.results);

					if (typeof(json.html.pagination) != 'undefined')
						inst.$pagination.html(json.html.pagination);
				}
				else
				{
					inst.$tbody.html('<tr><td colspan="7"><span id="no_results">No Business Accounts found.</span></td></tr>');
				}

				// Hide loader
				inst.hide_loader();
			});
		}
	},

	show_loader: function()
	{
		var inst = this;

		inst.$loader.show();
		inst.$tbody.addClass('loading');
	},

	hide_loader: function()
	{
		var inst = this;

		inst.$tbody.removeClass('loading');
		inst.$loader.hide();
	}
};

$sb.crm.Business_Accounts = new Business_Accounts();

$(document).ready(function()
{
	$sb.crm.Business_Accounts._init();
});