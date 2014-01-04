function Comments() {}

Comments.prototype =
{
	table_ajax_request: null,

	filter_query: '',
	filter_flagged: 0,
	filter_deleted: 0,
	filter_with_votes: 0,
	filter_with_conversation: 0,
	filter_from_date: '',
	filter_to_date: '',

	$filter_query: null,
	$filter_flagged: null,
	$filter_deleted: null,
	$filter_with_votes: null,
	$filter_with_conversation: null,
	$filter_from_date: null,
	$filter_to_date: null,

	$tbody: null,

	$pagination: null,
	$current_paging_button: null,
	$first_paging_button: null,

	$view_dialog: null,
	dialog_comment_id: 0,
	dialog_comment_link: '',
	dialog_comment_init_conversation_tab_scroll_pos: 0,
	dialog_comment_init_tab: 'info_tab',

	comment_dialog_changes_made: false,
	is_saving_comment_dialog: false,
	$close_comment_dialog_button: null,
	$save_comment_dialog_button: null,

	_init: function()
	{
		this.binds();
	},

	binds: function()
	{
		var inst = this;

		inst.$filter_query = $('#filter_query');
		inst.$filter_flagged = $('#filter_flagged');
		inst.$filter_deleted = $('#filter_deleted');
		inst.$filter_with_votes = $('#filter_with_votes');
		inst.$filter_with_conversation = $('#filter_with_conversation');
		inst.$filter_from_date = $('#filter_from_date');
		inst.$filter_to_date = $('#filter_to_date');

		inst.$tbody = $('#comments_tbody');

		inst.$pagination = $('#pagination_container');
		inst.$current_paging_button = $('.dataTables_paginate a:eq(0)');
		inst.$first_paging_button = inst.$current_paging_button;

		inst.$filter_query.keyup(function(e)
		{
			inst.filter_query = e.target.value;

			inst.load_comments(true);
		});

		inst.$view_dialog = $('#view_dialog');
		inst.$view_dialog.dialog(
		{
			autoOpen: false,
			width: 960,
			height: 600,
			modal: true,
			buttons:
			{
				'Go To': function()
				{
					window.open(inst.dialog_comment_link);
				},
				'Save': function()
				{
					inst.save_comment_dialog();
				},
				'Close': function()
				{
					$(this).dialog('close');
				}
			},
			open: function(event, ui)
			{
				inst.$close_comment_dialog_button = $('.ui-dialog-buttonpane').children('.ui-dialog-buttonset').children('button:contains("Close")');

				inst.$save_comment_dialog_button = $('.ui-dialog-buttonpane').children('.ui-dialog-buttonset').children('button:contains("Save")');
				inst.$save_comment_dialog_button.attr('disabled', true).addClass('ui-state-disabled');

				inst.load_view_dialog();
			},
			beforeClose: function()
			{
				if (inst.comment_dialog_changes_made)
				{
					if (confirm('You have unsaved changes! Do you want to save before closing?'))
					{
						inst.save_comment_dialog();
					}
				}
			},
			close: function()
			{
				inst.dialog_comment_id = 0;
				inst.dialog_comment_init_conversation_tab_scroll_pos = 0;
				inst.dialog_comment_init_tab = 'info_tab';
				inst.comment_dialog_changes_made = false;
			}
		});

		$('#filter_flagged, #filter_deleted, #filter_with_votes, #filter_with_conversation').change(function(e)
		{
			var value = e.target.checked ? 1 : 0;

			if (e.target.id === 'filter_flagged')
			{
				inst.filter_flagged = value;
			}
			else if (e.target.id === 'filter_deleted')
			{
				inst.filter_deleted = value;
			}
			else if (e.target.id === 'filter_with_votes')
			{
				inst.filter_with_votes = value;
			}
			else if (e.target.id === 'filter_with_conversation')
			{
				inst.filter_with_conversation = value;
			}

			inst.load_comments(true);
		});

		$('#filter_from_date, #filter_to_date').change(function(e)
		{
			var value = e.target.value;

			if (e.target.id === 'filter_from_date')
			{
				inst.filter_from_date = value;
			}
			else if (e.target.id === 'filter_to_date')
			{
				inst.filter_to_date = value;
			}

			inst.load_comments(true);
		});

		inst.load_comments(true);
	},

	load_comments: function(first_page)
	{
		var inst = this,
			jqInst = first_page === true ? inst.$first_paging_button : inst.$current_paging_button,
			page_number = !$sb.empty(jqInst) && jqInst.attr('data-page_number') ? jqInst.attr('data-page_number') : '1';

		if (inst.table_ajax_request !== null)
		{
			inst.table_ajax_request.abort();
		}

		inst.$tbody.html('<tr><td id="comments_table_loader" colspan="6"></td></tr>');

		inst.table_ajax_request = $.getJSON('/ajax_get_comments/' + page_number, { filter_query: inst.filter_query, filter_flagged: inst.filter_flagged, filter_deleted: inst.filter_deleted, filter_with_votes: inst.filter_with_votes, filter_with_conversation: inst.filter_with_conversation, filter_from_date: inst.filter_from_date, filter_to_date: inst.filter_to_date }, function(result)
		{
			inst.$tbody.html(result.data.html);
			inst.$pagination.html(result.data.pagination);

			$('.view, .view-flags, .view-conversation').click(function(e)
			{
				inst.dialog_comment_id = $(this).attr('data-comment_id');
				inst.dialog_comment_init_tab = $(this).attr('data-init_tab');

				inst.$view_dialog.dialog('open');
			});

			$('.delete').click(function()
			{
				var id = $(this).attr('data-comment_id');

				$.alert(
				{
					type: 'confirm',
					title: 'Are you sure you want to delete?',
					text: '<p>Are you sure you want to delete comment #' + id + '?</p>',
					callback: function()
					{
						$.post('/ajax_delete_comment', { id: id }, function()
						{
							inst.load_comments(false);
						});
					}
				});
			});

			$('.page_button').click('click', function(e)
			{
				inst.$current_paging_button = $(this);

				e.preventDefault();

				inst.load_comments(false);
			});
		}).fail(function()
		{
			inst.$tbody.html('<tr><td id="comments_table_failure" colspan="6">Could not load comments.</td></tr>');
		});
	},

	load_view_dialog: function()
	{
		var inst = this;

		inst.$view_dialog.html('<span id="view_dialog_loader"></span>');

		// Get conversation
		$.getJSON('/ajax_get_comment', { comment_id: inst.dialog_comment_id }, function(result)
		{
			if (result.data.error === '')
			{
				inst.$view_dialog.dialog('option', 'title', 'View Comment #' + inst.dialog_comment_id);
				inst.$view_dialog.html(result.data.html);

				// Set View-button link
				inst.dialog_comment_link = result.data.comment_link;

				$('#view_dialog_tabs').tabs({ selected: $('#view_dialog_tabs a[href="#' + inst.dialog_comment_init_tab + '"]').parent().index() });

				if (inst.dialog_comment_init_tab === 'conversation_tab')
				{
					inst.$view_dialog.scrollTop(inst.dialog_comment_init_conversation_tab_scroll_pos);
				}

				var flags_tab_index = $('#view_dialog_tabs a[href="#flags_tab"]').parent().index(),
					votes_tab_index = $('#view_dialog_tabs a[href="#votes_tab"]').parent().index(),
					conversation_tab_index = $('#view_dialog_tabs a[href="#conversation_tab"]').parent().index();

				if (result.data.num_flags === 0)
				{
					$('#view_dialog_tabs').tabs('disable', flags_tab_index);
				}
				else
				{
					$('#view_dialog_tabs ul li a').eq(flags_tab_index).text('Flags' + (result.data.num_flags > 0 ? ' (' + result.data.num_flags + ')' : ''));
				}

				if (result.data.num_votes > 0)
				{
					$('#view_dialog_tabs ul li a').eq(votes_tab_index).text('Votes' + (result.data.num_votes > 0 ? ' (' + result.data.num_votes + ')' : ''));
				}
				else
				{
					$('#view_dialog_tabs').tabs('disable', votes_tab_index);
				}

				if (result.data.num_conversation_comments <= 1)
				{
					$('#view_dialog_tabs').tabs('disable', conversation_tab_index);
				}
				else
				{
					$('#view_dialog_tabs ul li a').eq(conversation_tab_index).text('Conversation' + (result.data.num_conversation_comments > 0 ? ' (' + result.data.num_conversation_comments + ')' : ''));
				}

				$('.delete-flag').click(function()
				{
					var id = $(this).attr('data-id');

					$.alert(
					{
						type: 'confirm',
						title: 'Are you sure you want to delete?',
						text: '<p>Are you sure you want to delete comment flag?</p>',
						callback: function()
						{
							$.post('/ajax_delete_comment_flag', { id: id }, function()
							{
								inst.dialog_comment_init_tab = 'flags_tab';

								inst.load_view_dialog();
							});
						}
					});
				});

				$('.comment').click(function()
				{
					var id = $(this).attr('data-id');

					inst.dialog_comment_id = id;
					inst.dialog_comment_init_conversation_tab_scroll_pos = inst.$view_dialog.scrollTop();
					inst.dialog_comment_init_tab = 'conversation_tab';

					inst.load_view_dialog();
				});

				$('#body').keyup(function(e)
				{
					if (inst.comment_dialog_changes_made)
					{
						return;
					}

					var input = String.fromCharCode(e.keyCode);

					if (/[a-zA-Z0-9-_ ]/.test(input) || e.keyCode === 8 || e.keyCode === 46)
					{
						inst.comment_dialog_changes_made = true;
						inst.$save_comment_dialog_button.removeAttr('disabled', true).removeClass('ui-state-disabled');
					}
				});

				$('#canned_response_form input[type="radio"]').change(function(e)
				{
					inst.comment_dialog_changes_made = true;
					inst.$save_comment_dialog_button.removeAttr('disabled', true).removeClass('ui-state-disabled');
				});
			}
			else
			{
				inst.$view_dialog.dialog('option', 'title', 'Error');
				inst.$view_dialog.html('<p style="width:900px;height:440px;text-align:center;line-height:440px">' + result.data.error + '</p>');
			}
		});
	},

	save_comment_dialog: function()
	{
		var inst = this;

		inst.$save_comment_dialog_button.attr('disabled', true).addClass('ui-state-disabled').children('.ui-button-text').html('Saving...');
		inst.$close_comment_dialog_button.attr('disabled', true).addClass('ui-state-disabled');
		inst.is_saving_comment_dialog = true;

		$('#body, #canned_response_form').attr('disabled', true);

		$.when(
			// Save details
			$.ajax(
			{
				url: '/save_comment',
				type: 'POST',
				data: { comment_id: inst.dialog_comment_id, details: $('#body').val() },
				dataType: 'json',
				success: function(result)
				{
				}
			}),

			// Save canned response
			$.ajax(
			{
				url: '/save_canned_response',
				type: 'POST',
				data: $('#canned_response_form').serialize(),
				dataType: 'json',
				success: function(result)
				{
					var tab_id = $('#view_dialog_tabs a').eq($('#view_dialog_tabs').tabs('option', 'selected')).attr('href');
					inst.dialog_comment_init_tab = tab_id.substring(1, tab_id.length);

					inst.load_view_dialog();
				}
			})
		).done(function()
		{
			inst.is_saving_comment_dialog = false;
			inst.comment_dialog_changes_made = false;
			inst.$save_comment_dialog_button.children('.ui-button-text').html('Save');
			inst.$close_comment_dialog_button.removeAttr('disabled').removeClass('ui-state-disabled');

			$('#body, #canned_response_form').removeAttr('disabled');

			inst.load_view_dialog();

			inst.load_comments(true);

			$sb.show_success('Comment saved.');
		});
	}
};

$sb.crm.Comments = new Comments();

$(document).ready(function()
{
	$sb.crm.Comments._init();
});