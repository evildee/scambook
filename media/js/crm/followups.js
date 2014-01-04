function Followups()
{
}

Followups.prototype =
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

	// Filter
	selected_date_start: '',
	selected_date_end: '',

	// Delete
	delete_id: 0,

	_init: function ()
	{
		$.uniform.restore('select');

		this.binds();
	},

	binds: function ()
	{
		var inst = this;

		// Table
		inst.$loader = $('#table_loader');
		inst.$tbody = $('#tbody');

		// Paging
		inst.$pagination = $('#pagination_container');
		inst.$current_paging_button = $('.dataTables_paginate a:eq(0)');
		inst.$first_paging_button = inst.$current_paging_button;

		$('.page_button').live('click', function (e)
		{
			inst.$current_paging_button = $(this);

			e.preventDefault();

			inst.refresh_table($(this));
		});

		$('#clear_filter_button').live('click', function (event)
		{
			$(this).hide();

			$('.sb_datepicker').each(function ()
			{
				$(this).val('');
			});
			inst.selected_date_start = '';
			inst.selected_date_end = '';
			inst.refresh_table(inst.$current_paging_button);
		});


		$('.sb_datepicker').live('change', function (event)
		{
			if($(this).attr('id') == 'date_start')
			{
				inst.selected_date_start = $(this).val();
			}
			else if($(this).attr('id') == 'date_end')
			{
				inst.selected_date_end = $(this).val();
			}

			var $clear_btn = $('#clear_filter_button');

			if($clear_btn.is(":hidden"))
			{
				$clear_btn.show();
			}

			inst.refresh_table(inst.$current_paging_button);
		});

		$(document).on("submit", 'form#edit_followup', function (event)
		{
			var data = $(this).serialize();

			$.post('/ajax_followup_update', data, function (response)
			{
				if(response.errors != undefined)
				{
					if(response.errors.length > 0)
					{
						var msg = response.errors.join("<br />");

						$.jGrowl(msg, { theme: 'error', sticky: false });
					}
				}
				else
				{
					$.jGrowl('Followup successfully updated.', { theme: 'success', sticky: false });
				}

				inst.refresh_table(inst.$current_paging_button);
			}, "json");

			event.preventDefault();

			inst.refresh_table(inst.$current_paging_button);
		});

		$(document).on('click', '.followup-update', function (event)
		{
			var update_type = $(this).data('update-type');
			var id = $(this).data('id');
			var jgrowl_msg = '';
			var data = {};

			if(update_type == 'delete')
			{
				data = {id: id, deleted: 1};
				jgrowl_msg = 'Followup ' + id + ' deleted.';
				$.alert({
					type: 'confirm',
					title: 'Confirm Followup Deletion',
					text: '<p>Are you sure you want to delete followup #' + id + '?</p>',
					callback: function ()
					{
						$.post('/ajax_followup_update', data, function (response)
						{
							if(response.errors != undefined)
							{
								if(response.errors.length > 0)
								{
									$.jGrowl('Oops! Something went wrong.', { theme: 'error', sticky: false });
								}
							}
							else
							{
								$.jGrowl(jgrowl_msg, { theme: 'success', sticky: false });
							}

							inst.refresh_table(inst.$current_paging_button);

						}, "json");
					}
				});
			}
			else if(update_type == 'approve')
			{
				data = {id: id, approved: 1};
				jgrowl_msg = 'Followup ' + id + ' approved.';

				$.post('/ajax_followup_update', data, function (response)
				{
					if(response.errors != undefined)
					{
						if(response.errors.length > 0)
						{
							$.jGrowl('Oops! Something went wrong.', { theme: 'error', sticky: false });
						}
					}
					else
					{
						$.jGrowl(jgrowl_msg, { theme: 'success', sticky: false });
					}

					inst.refresh_table(inst.$current_paging_button);

				}, "json");
			}

			event.preventDefault();
		});

		$(document).on('click', '.followup-notify', function (event)
		{
			var id = $(this).data('id');
			var jgrowl_msg = '';
			var data = {id: id};

			$.post('/ajax_followup_notify_support', data, function (response)
			{
				if(response.errors != undefined)
				{
					if(response.errors.length > 0)
					{
						$.jGrowl('Oops! Something went wrong.', { theme: 'error', sticky: false });
					}
				}
				else
				{
					jgrowl_msg = 'Followup ' + id + ' flagged. Support has been emailed.';
					$.jGrowl(jgrowl_msg, { theme: 'success', sticky: false });
				}

				inst.refresh_table(inst.$current_paging_button);
			}, "json");

			event.preventDefault();
		});

		inst.refresh_table(inst.$current_paging_button);
	},

	refresh_table: function (jqInst)
	{
		var inst = this;

		if($sb.empty(jqInst))
			return false;

		var page_number = jqInst.attr('data-page_number');

		if(!page_number)
			page_number = '1';

		if(!$sb.empty(page_number))
		{
			if(inst.table_ajax_request != null)
				inst.table_ajax_request.abort();

			// Show loader
			inst.show_loader();

			inst.table_ajax_request = $.getJSON('/report_followups/' + page_number,
				{
					date_start: inst.selected_date_start,
					date_end: inst.selected_date_end
				},
				function (json)
				{
					inst.table_ajax_request = null;

					if(typeof(json.html.results) != 'undefined')
						inst.$tbody.html(json.html.results);

					if(typeof(json.html.pagination) != 'undefined')
						inst.$pagination.html(json.html.pagination);

					// Hide loader
					inst.hide_loader();
				});
		}
	},

	show_loader: function ()
	{
		var inst = this;

		inst.$loader.show();
		inst.$tbody.addClass('loading');
	},

	hide_loader: function ()
	{
		var inst = this;

		inst.$tbody.removeClass('loading');
		inst.$loader.hide();
	}
};

$sb.crm.Followups = new Followups();

$(document).ready(function ()
{
	$sb.crm.Followups._init();

	$('.dialog-open-btn').tabbed_dialog({
		target: "#dialog_placeholder",
		title_pattern: "Followup #[id]",
		tabs: [
			{ request: 'ajax_followup_view/[id]', title: 'Details' }
		]
	});
});