function Newsletter() {}

Newsletter.prototype =
{
	table_ajax_request: null,

	$tbody: null,

	filter_query: '',
	filter_type: 'blog',

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

		inst.$tbody = $('#newsletter_subscribers_tbody');

		inst.$pagination = $('#pagination_container');
		inst.$current_paging_button = $('.dataTables_paginate a:eq(0)');
		inst.$first_paging_button = inst.$current_paging_button;

		$('#filter_query').keyup(function(e)
		{
			inst.filter_query = e.target.value;

			inst.refresh_newsletter_subscribers(inst.$first_paging_button);
		});

		$('input[name="filter_type"]').change(function(e)
		{
			inst.filter_type = e.target.value;

			inst.refresh_newsletter_subscribers(inst.$first_paging_button);
		});

		$('.page_button').live('click', function(e)
		{
			inst.$current_paging_button = $(this);

			e.preventDefault();

			inst.refresh_newsletter_subscribers(inst.$current_paging_button);
		});

		$('.unsubscribe').live('click', function()
		{
			var $this = $(this),
				id = $this.attr('data-id');
				email = $this.attr('data-email');
				type = $this.attr('data-type');

			inst.unsubscribe(id, email);
		});

		inst.refresh_newsletter_subscribers(inst.$first_paging_button);
	},

	refresh_newsletter_subscribers: function(jqInst)
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

		inst.$tbody.html('<tr><td id="newsletter_subscribers_table_loader" colspan="5"></td></tr>');

		inst.table_ajax_request = $.getJSON('/get_newsletter_subscribers/' + page_number, { query: inst.filter_query, type: inst.filter_type }, function(result)
		{
			inst.$tbody.html(result.data.html);
			inst.$pagination.html(result.data.pagination);
		});
	},

	unsubscribe: function(id, email, confirmed)
	{
		var inst = this;

		if (!confirmed)
		{
			// Show confirm dialog
			$.alert({
				type: 'confirm',
				title: 'Are you sure?',
				text: '<p>Are you sure you want to unsubscribe ' + email + '?</p>',
				callback: function()
				{
					inst.unsubscribe(id, email, true);
				}
			});
		}
		else
		{
			// Unsubscribe
			$sb.ajax.post('/unsubscribe_newsletter', { id: id, type: type }, function(result)
			{
				inst.refresh_newsletter_subscribers(inst.$current_paging_button);
			});
		}
	}
};

$sb.crm.Newsletter = new Newsletter();

$(document).ready(function()
{
	$sb.crm.Newsletter._init();
});