function Transactions() {}

Transactions.prototype =
{
	table_ajax_request: null,

	filter_query: '',
	filter_query_what: 'stripe_customer',
	filter_from_date: '',
	filter_to_date: '',
	filter_type: '',
	filter_plan: '',

	$filter_query: null,
	$filter_from_date: null,
	$filter_to_date: null,
	$filter_plan: null,

	$tbody: null,

	$pagination: null,
	$current_paging_button: null,
	$first_paging_button: null,

	_init: function()
	{
		this.binds();
	},

	binds: function()
	{
		var inst = this;

		inst.$filter_query = $('#filter_query');
		inst.$filter_from_date = $('#filter_from_date');
		inst.$filter_to_date = $('#filter_to_date');
		inst.$filter_plan = $('#filter_plan');

		inst.$tbody = $('#transactions_tbody');

		inst.$pagination = $('#pagination_container');
		inst.$current_paging_button = $('.dataTables_paginate a:eq(0)');
		inst.$first_paging_button = inst.$current_paging_button;

		$('#filter_form').submit(function()
		{
			inst.filter_query = inst.$filter_query.val();
			inst.filter_from_date = inst.$filter_from_date.val();
			inst.filter_to_date = inst.$filter_to_date.val();

			inst.refresh_transactions(inst.$current_paging_button);

			return false;
		});

		inst.$filter_query.keyup(function(e)
		{
			inst.filter_query = e.target.value;

			inst.refresh_transactions(inst.$first_paging_button);
		});

		$('#filter_from_date, #filter_to_date').live('change', function(e)
		{
			if (e.target.id === 'filter_from_date')
			{
				inst.filter_from_date = e.target.value;
			}
			else if (e.target.id === 'filter_to_date')
			{
				inst.filter_to_date = e.target.value;
			}

			inst.refresh_transactions(inst.$first_paging_button);
		});

		inst.$filter_plan.change(function(e)
		{
			inst.filter_plan = e.target.value;

			inst.refresh_transactions(inst.$first_paging_button);
		});

		$('input[name="query_what"]').change(function(e)
		{
			inst.filter_query_what = e.target.value;

			var placeholder_text = 'Search for {0}...';

			if (inst.filter_query_what === 'stripe_customer')
			{
				$('#filter_query').attr('placeholder', placeholder_text.replace('{0}', 'Stripe Customer ID'));
			}
			else if (inst.filter_query_what === 'user_account')
			{
				$('#filter_query').attr('placeholder', placeholder_text.replace('{0}', 'User Account ID'));
			}
			else if (inst.filter_query_what === 'business_account')
			{
				$('#filter_query').attr('placeholder', placeholder_text.replace('{0}', 'Business Account ID'));
			}
		});

		$('input[name="filter_type"]').change(function(e)
		{
			inst.filter_type = e.target.value;

			inst.refresh_transactions(inst.$first_paging_button);
		});

		$('input[name="query_what"]').change(function(e)
		{
			inst.filter_query_what = e.target.value;

			inst.refresh_transactions(inst.$first_paging_button);
		});

		$('.page_button').live('click', function(e)
		{
			inst.$current_paging_button = $(this);

			e.preventDefault();

			inst.refresh_transactions(inst.$current_paging_button);
		});

		$(document).on('submit', 'form#refund_transaction', function(e)
		{
			var data = $(this).serialize();
			var $submit = $(this).find("input[type='submit']");
			$submit.val('Working...');
			$(this).find('input').each(function() {
				$(this).attr('disabled', true);
			});
			inst.refund(data);
			e.preventDefault();
		});
		
		inst.refresh_transactions(inst.$first_paging_button);
	},

	refresh_transactions: function(jqInst)
	{
		var inst = this;

		if ($sb.empty(jqInst))
		{
			return;
		}

		var page_number = jqInst.attr('data-page_number') ? jqInst.attr('data-page_number') : '1';

		if (inst.table_ajax_request !== null)
		{
			inst.table_ajax_request.abort();
		}

		inst.$tbody.html('<tr><td id="transactions_table_loader" colspan="4"></td></tr>');

		inst.table_ajax_request = $.getJSON('/get_transactions/' + page_number, { query: inst.filter_query, query_what: inst.filter_query_what, from_date: inst.filter_from_date, to_date: inst.filter_to_date, type: inst.filter_type, plan: inst.filter_plan }, function(result)
		{
			inst.$tbody.html(result.data.html);
			inst.$pagination.html(result.data.pagination);
		});
	},
	
	refund: function(data)
	{
		var inst = this;
		
	 	$.post('/refund_transaction', data, function(response)
		{
			if(response.errors != undefined)
			{
				if(response.errors.length > 0)
				{
					var msg = response.errors.join("<br />");
					$("form#refund_transaction input[type='submit']").val('Submit');
					$("form#refund_transaction").find('input').each(function() {
						$(this).attr('disabled', false);
					});
					$.jGrowl(msg, { theme: 'error', sticky: false });
				}
			}
			else
			{
				$('#dialog_placeholder').dialog('close');
				$.jGrowl('Refunding...', { theme: 'success', sticky: false });
				inst.refresh_transactions(inst.$current_paging_button);
			}

		}, "json");
	}
};

$sb.crm.Transactions = new Transactions();

$(document).ready(function()
{
	$sb.crm.Transactions._init();
	
	$('.dialog-open-btn').tabbed_dialog({
		target: "#dialog_placeholder",
		title_pattern: "Transaction #[id]",
		tabs: [
			{ request: 'refund_transaction/[id]', title: 'Refund' }
		]
	});
});