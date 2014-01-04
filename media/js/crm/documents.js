function Transactions() {}

Transactions.prototype =
{
	table_ajax_request: null,

	// Filter
	filter_query: '',
	filter_file_type: '',
	filter_from_date: '',
	filter_to_date: '',

	$filter_query: null,
	$filter_file_type: null,
	$filter_from_date: null,
	$filter_to_date: null,

	// Sort
	current_sort_field: 'company_documents.uploaded',
	current_sort_order: 'desc',

	// Table
	$loader: null,
	$tbody: null,

	// Pagination
	$pagination: null,
	$current_paging_button: null,
	$first_paging_button: null,

	// Edit Document
	edit_document_dialog: null,
	current_edit_document_id: 0,

	_init: function()
	{
		this.binds();
	},

	binds: function()
	{
		var inst = this;

		// Filter
		inst.$filter_query = $('#filter_query');
		inst.$filter_file_type = $('#filter_file_type');
		inst.$filter_from_date = $('#filter_from_date');
		inst.$filter_to_date = $('#filter_to_date');

		// Table
		inst.$loader = $('#table_loader');
		inst.$tbody = $('#documents_tbody');

		// Pagination
		inst.$pagination = $('#pagination_container');
		inst.$current_paging_button = $('.dataTables_paginate a:eq(0)');
		inst.$first_paging_button = inst.$current_paging_button;

		inst.$filter_query.keyup(function(e)
		{
			inst.filter_query = e.target.value;

			inst.refresh_documents(inst.$first_paging_button);
		});

		$('#filter_from_date, #filter_to_date, #filter_file_type').live('change', function(e)
		{
			if (e.target.id === 'filter_file_type')
			{
				inst.filter_file_type = e.target.value;
			}
			else if (e.target.id === 'filter_from_date')
			{
				inst.filter_from_date = e.target.value;
			}
			else if (e.target.id === 'filter_to_date')
			{
				inst.filter_to_date = e.target.value;
			}

			inst.refresh_documents(inst.$first_paging_button);
		});

		$('.page_button').live('click', function(e)
		{
			inst.$current_paging_button = $(this);

			e.preventDefault();

			inst.refresh_documents(inst.$current_paging_button);
		});

		inst.edit_document_dialog = $('#edit_document_dialog').dialog(
		{
			autoOpen: false,
			width: 475,
			height: 280,
			resizable: false,
			buttons: {
				'Save': function()
				{
					var document_title = $('#edit_document_title').val();
					var document_description = $('#edit_document_description').val();

					if (!document_title)
					{
						return;
					}

					$sb.ajax.post('/edit_document', { id: inst.current_edit_document_id, title: document_title, description: document_description }, function(result)
					{
						inst.refresh_documents(inst.$current_paging_button);

						$('#edit_document_status').html('<span class="ticket ticket-success">Saved...</span>').show().delay(1500).queue(function(n)
						{
							$(this).hide();
							n();
						});
					});
				},
				'Close': function()
				{
					$(this).dialog('close');
				}
			},
			open: function()
			{
				$('#edit_document_dialog').next('.ui-dialog-buttonpane').children('.ui-dialog-buttonset').children('button:contains("Save")').attr('disabled', true).addClass('ui-state-disabled');
				$('#edit_document_dialog').dialog('option', 'title', 'Loading...');
				$('#edit_document_title, #edit_document_description').attr('disabled', true);

				// Load document
				$sb.ajax.get('/get_document', { document: inst.current_edit_document_id }, function(result)
				{
					if (result.data.error === '')
					{
						$('#edit_document_title').val(result.data.document.title);
						$('#edit_document_description').val(result.data.document.description);

						$('#edit_document_title, #edit_document_description').removeAttr('disabled');

						$('#edit_document_dialog').dialog('option', 'title', 'Edit Document "' + result.data.document.title_short + '"');
						$('#edit_document_dialog').next('.ui-dialog-buttonpane').children('.ui-dialog-buttonset').children('button:contains("Save")').removeAttr('disabled').removeClass('ui-state-disabled');
					}
				});
			},
			close: function()
			{
				inst.current_edit_document_id = 0;

				$('#edit_document_title, #edit_document_description').val('');
			}
		});

		$('#documents_table .edit').live('click', function()
		{
			inst.current_edit_document_id = $(this).attr('data-document_id');

			inst.edit_document_dialog.dialog('open');
		});

		$('#documents_table .delete').live('click', function()
		{
			var $this = $(this);
			var document_filename = $this.attr('data-document_filename');
			var document_id = $this.attr('data-document_id');

			$.alert({
				type: 'confirm',
				title: 'Set As Printed?',
				text: '<p>Are you sure you want to delete the document "' + document_filename + '"?</p>',
				callback: function()
				{
					$this.replaceWith('Deleting...');

					$sb.ajax.post('/delete_document', { document: document_id }, function(result)
					{
						inst.refresh_documents(inst.$current_paging_button);
					});
				}
			});
		});

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

			inst.refresh_documents(inst.$first_paging_button);
		});

		inst.refresh_documents(inst.$first_paging_button);
	},

	refresh_documents: function(jqInst)
	{
		var inst = this;

		if ($sb.empty(jqInst))
		{
			return;
		}

		var page_number = jqInst.attr('data-page_number') ? jqInst.attr('data-page_number') : '1';

		if (!$sb.empty(page_number))
		{
			if (inst.table_ajax_request !== null)
			{
				inst.table_ajax_request.abort();
			}

			// Show loader
			inst.$loader.show();

			inst.$tbody.html('<tr><td id="documents_table_loader" colspan="6"></td></tr>');

			inst.table_ajax_request = $.getJSON('/documents/' + page_number, { query: inst.filter_query, file_type: inst.filter_file_type, from_date: inst.filter_from_date, to_date: inst.filter_to_date, sort_field: inst.current_sort_field, sort_order: inst.current_sort_order }, function(json)
			{
				inst.table_ajax_request = null;

				if (json.html.data.num_documents > 0)
				{
					if (typeof(json.html.results) != 'undefined')
						inst.$tbody.html(json.html.results);

					if (typeof(json.html.pagination) != 'undefined')
						inst.$pagination.html(json.html.pagination);
				}
				else
				{
					inst.$tbody.html('<tr><td colspan="6" id="no_documents"><span id="no_results">No documents found.</span></td></tr>');
				}

				// Hide loader
				inst.$loader.hide();
			});
		}
	}
};

$sb.crm.Transactions = new Transactions();

$(document).ready(function()
{
	$sb.crm.Transactions._init();
});