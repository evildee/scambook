function Reports() {}

Reports.prototype =
{
	table_ajax_request: null,

	filter_query: '',
	filter_resolution_status: '',
	filter_from_date: '',
	filter_to_date: '',
	filter_deleted: 0,
	filter_hold: 0,
	filter_flagged: 0,
	filter_premium_user: 0,
	filter_with_media: 0,
	filter_vetted: '',

	$filter_widget_content: null,
	$filter_form: null,
	$filter_query: null,
	$filter_from_date: null,
	$filter_to_date: null,
	$filter_resolution_status: null,
	$filter_scam_type: null,
	$filter_who_type: null,
	$filter_deleted: null,
	$filter_hold: null,
	$filter_flagged: null,
	$filter_premium_user: null,
	$filter_with_media: null,
	$custom_filter_box: null,
	$custom_filter_text: null,
	current_custom_filter: '',
	current_custom_filter_id: 0,

	$tbody: null,

	$pagination: null,
	$current_paging_button: null,
	$first_paging_button: null,

	$report_dialog: null,
	$previous_report_dialog_button: null,
	$next_report_dialog_button: null,
	$close_report_dialog_button: null,
	$save_report_dialog_button: null,
	$statistics_dialog_recalculate_button: null,
	dialog_report_id: 0,
	previous_dialog_report_id: 0,
	next_dialog_report_id: 0,
	dialog_report_ajax_request: null,
	current_report_dialog_tab_index: 0,
	first_time_tab: '',
	report_dialog_changes_made: false,
	is_saving_report_dialog: false,

	TAB_INFO: -1,
	TAB_DETAILS: -1,
	TAB_COMMENTS: -1,
	TAB_COMPLIANCE: -1,
	TAB_MEDIA: -1,
	TAB_FOLLOW_UPS: -1,
	TAB_VOTES: -1,
	TAB_FLAGS: -1,
	TAB_PAYOUT: -1,
	TAB_COMPANY: -1,
	TAB_DOCUMENTS: -1,
	TAB_PHONE_CALLS: -1,
	TAB_HISTORY: -1,

	_init: function()
	{
		$.uniform.restore('select');

		this.binds();
	},

	binds: function()
	{
		var inst = this;

		inst.$filter_widget_content = $('#filter_widget_content');
		inst.$filter_form = $('#filter_form');
		inst.$filter_query = $('#filter_query');
		inst.$filter_from_date = $('#filter_from_date');
		inst.$filter_to_date = $('#filter_to_date');
		inst.$filter_scam_type = $('#filter_scam_type');
		inst.$filter_who_type = $('#filter_who_type');
		inst.$filter_resolution_status = $('#filter_resolution_status');
		inst.$filter_deleted = $('#filter_deleted');
		inst.$filter_hold = $('#filter_hold');
		inst.$filter_flagged = $('#filter_flagged');
		inst.$filter_premium_user = $('#filter_premium_user');
		inst.$filter_with_media = $('#filter_with_media');
		inst.$custom_filter_box = $('#custom_filter_box');
		inst.$custom_filter_text = $('#custom_filter_text');

		inst.$tbody = $('#reports_tbody');

		inst.$pagination = $('#pagination_container');
		inst.$current_paging_button = $('.dataTables_paginate a:eq(0)');
		inst.$first_paging_button = inst.$current_paging_button;

		inst.$filter_query.keyup(function(e)
		{
			inst.filter_query = e.target.value;

			inst.refresh_reports(inst.$first_paging_button);
		});

		inst.$filter_resolution_status.change(function(e)
		{
			inst.filter_resolution_status = e.target.value;

			inst.refresh_reports(inst.$first_paging_button);
		});

		$('.page_button').live('click', function(e)
		{
			inst.$current_paging_button = $(this);

			e.preventDefault();

			inst.refresh_reports(inst.$current_paging_button);
		});

		inst.$report_dialog = $('#report_dialog');
		inst.$report_dialog.dialog(
		{
			autoOpen: false,
			width: 1080,
			height: 600,
			modal: true,
			buttons:
			{
				'Previous': function()
				{
					inst.load_report(inst.previous_dialog_report_id);
				},
				'Next': function()
				{
					inst.load_report(inst.next_dialog_report_id);
				},
				'Save': function()
				{
					inst.save_report_dialog();
				},
				'Close': function()
				{
					$(this).dialog('close');
				}
			},
			open: function(event, ui)
			{
				inst.$previous_report_dialog_button = $('.ui-dialog-buttonpane').children('.ui-dialog-buttonset').children('button:contains("Previous")');
				inst.$previous_report_dialog_button.attr('disabled', true).addClass('ui-state-disabled');

				inst.$next_report_dialog_button = $('.ui-dialog-buttonpane').children('.ui-dialog-buttonset').children('button:contains("Next")');
				inst.$next_report_dialog_button.attr('disabled', true).addClass('ui-state-disabled');

				inst.$close_report_dialog_button = $('.ui-dialog-buttonpane').children('.ui-dialog-buttonset').children('button:contains("Close")');

				inst.$save_report_dialog_button = $('.ui-dialog-buttonpane').children('.ui-dialog-buttonset').children('button:contains("Save")');
				inst.$save_report_dialog_button.attr('disabled', true).addClass('ui-state-disabled');

				inst.load_report(inst.dialog_report_id, inst.current_report_dialog_tab_index);
			},
			beforeClose: function()
			{
				if (inst.report_dialog_changes_made)
				{
					if (confirm('You have unsaved changes! Do you want to save before closing?'))
					{
						inst.save_report_dialog();
					}
				}
			},
			close: function()
			{
				inst.dialog_report_id = 0;
				inst.report_dialog_changes_made = false;
				inst.current_report_dialog_tab_index = 0;
				inst.first_time_tab = '';
			}
		});

		$('#statistics_dialog').dialog(
		{
			width: 700,
			height: 475,
			autoOpen: false,
			resizable: false,
			open: function()
			{
				inst.$statistics_dialog_recalculate_button = $('.ui-dialog-buttonpane').children('.ui-dialog-buttonset').children('button:contains("Recalculate")');

				inst.refresh_statistics_dialog(false);
			},
			buttons:
			{
				'Recalculate': function()
				{
					inst.$statistics_dialog_recalculate_button.children('.ui-button-text').html('Recalculating...');

					inst.refresh_statistics_dialog(true);
				}
			}
		});

		$('#statistics').click(function()
		{
			$('#statistics_dialog').dialog('open');
		});

		$('#filter_from_date, #filter_to_date, #filter_scam_type, #filter_who_type').live('change', function(e)
		{
			if (e.target.id === 'filter_from_date')
			{
				inst.filter_from_date = e.target.value;
			}
			else if (e.target.id === 'filter_to_date')
			{
				inst.filter_to_date = e.target.value;
			}
			else if (e.target.id === 'filter_scam_type')
			{
				inst.filter_scam_type = e.target.value;
			}
			else if (e.target.id === 'filter_who_type')
			{
				inst.filter_who_type = e.target.value;
			}

			inst.refresh_reports(inst.$first_paging_button);
		});

		$('#filter_deleted, #filter_hold, #filter_premium_user, #filter_flagged, #filter_with_media').change(function(e)
		{
			var id = e.target.getAttribute('id');

			if (id === 'filter_deleted')
			{
				inst.filter_deleted = e.target.checked ? 1 : 0;
			}
			else if (id === 'filter_hold')
			{
				inst.filter_hold = e.target.checked ? 1 : 0;
			}
			else if (id === 'filter_premium_user')
			{
				inst.filter_premium_user = e.target.checked ? 1 : 0;
			}
			else if (id === 'filter_flagged')
			{
				inst.filter_flagged = e.target.checked ? 1 : 0;
			}
			else if (id === 'filter_with_media')
			{
				inst.filter_with_media = e.target.checked ? 1 : 0;
			}

			inst.refresh_reports(inst.$first_paging_button);
		});

		$('input[type=radio][name="vetted"]').change(function(e)
		{
			inst.filter_vetted = e.target.value;

			inst.refresh_reports(inst.$first_paging_button);
		});

		if ( typeof open_report_id !== 'undefined' )
		{
			inst.dialog_report_id = open_report_id;

			inst.$report_dialog.dialog('open');
		}

		inst.refresh_reports(inst.$first_paging_button, true);
	},

	refresh_statistics_dialog: function(recalculate)
	{
		var inst = this,
			recalculate = recalculate || false;

		$('#stats_dialog_loader').show();

		$.ajax(
		{
			url: '/ajax_reports_statistics_dialog',
			type: 'GET',
			data: { recalculate: recalculate ? 1 : 0 },
			dataType: 'json',
			success: function(result)
			{
				$('#stats_dialog_loader').hide();
				$('#statistics_dialog_content').html(result.data.html);
				$('#statistics_tabs').tabs({ selected: 0 }).bind('tabsshow', function(event, ui)
				{
					if (ui.index === 2)
					{
						// Map
						var heatmap_data = [];

						for (var i = 0, num_heatmap_data = result.data.heatmap_data.length; i < num_heatmap_data; i++)
						{
							heatmap_data.push(new google.maps.LatLng(result.data.heatmap_data[i].lat, result.data.heatmap_data[i].lng));
						}

						var map = new google.maps.Map(document.getElementById('stats_map'),
						{
							center: new google.maps.LatLng(0, 0),
							zoom: 1,
							minZoom: 1,
							mapTypeId: google.maps.MapTypeId.SATELLITE,
							streetViewControl: false,
							zoomControl: true,
							zoomControlOptions:
							{
								style: google.maps.ZoomControlStyle.LARGE
							},
							scaleControl: true,
							panControl: false,
							mapTypeControl: false
						});

						var heatmap = new google.maps.visualization.HeatmapLayer(
						{
							data: heatmap_data
						});

						heatmap.setMap(map);
					}
				});

				inst.$statistics_dialog_recalculate_button.children('.ui-button-text').html('Recalculate');

				$('#reports_stats_chart').highcharts({
					chart:
					{
						width: 620,
						height: 150
					},
					title:
					{
						text: ''
					},
					xAxis:
					{
							categories: months
					},
					yAxis:
					{
						title:
						{
							text: 'Reports'
						},
						min: 0
					},
					legend:
					{
						enabled: false
					},
					credits:
					{
						enabled: false
					},
					series: [
					{
						data: num_reports
					}]
				});
			}
		});
	},

	refresh_reports: function(jqInst, first_time)
	{
		var inst = this,
			page_number = (!$sb.empty(jqInst) && jqInst.attr('data-page_number') ? jqInst.attr('data-page_number') : '1');

		first_time = first_time || false;

		if (inst.table_ajax_request !== null)
		{
			inst.table_ajax_request.abort();
		}

		inst.$tbody.html('<tr><td id="reports_table_loader" colspan="6"></td></tr>');

		inst.table_ajax_request = $.getJSON('/ajax_get_reports/' + page_number, { custom_filter: inst.current_custom_filter, custom_filter_id: inst.current_custom_filter_id, filter_query: inst.filter_query, filter_resolution_status: inst.filter_resolution_status, filter_from_date: inst.filter_from_date, filter_to_date: inst.filter_to_date, filter_scam_type: inst.filter_scam_type, filter_who_type: inst.filter_who_type, filter_deleted: inst.filter_deleted, filter_hold: inst.filter_hold, filter_flagged: inst.filter_flagged, filter_premium_user: inst.filter_premium_user, filter_with_media: inst.filter_with_media, filter_vetted: inst.filter_vetted }, function(result)
		{
			inst.$tbody.html(result.data.html);
			inst.$pagination.html(result.data.pagination);

			$('.view').click(function(e)
			{
				inst.dialog_report_id = $(this).attr('data-report_id');

				inst.$report_dialog.dialog('open');
			});

			$('.details').click(function()
			{
				inst.dialog_report_id = $(this).attr('data-report_id');
				inst.current_report_dialog_tab_index = (inst.TAB_DETAILS !== -1 ? inst.TAB_DETAILS : 0);
				inst.first_time_tab = 'details';
				inst.$report_dialog.dialog('open');
			});

			$('.media-icon').click(function()
			{
				inst.dialog_report_id = $(this).attr('data-report_id');
				inst.current_report_dialog_tab_index = (inst.TAB_MEDIA !== -1 ? inst.TAB_MEDIA : 0);
				inst.first_time_tab = 'media';
				inst.$report_dialog.dialog('open');
			});

			$('.comments').click(function()
			{
				inst.dialog_report_id = $(this).attr('data-report_id');
				inst.current_report_dialog_tab_index = (inst.TAB_COMMENTS !== -1 ? inst.TAB_COMMENTS : 0);
				inst.first_time_tab = 'comments';
				inst.$report_dialog.dialog('open');
			});

			$('.flags').click(function()
			{
				inst.dialog_report_id = $(this).attr('data-report_id');
				inst.current_report_dialog_tab_index = (inst.TAB_FLAGS !== -1 ? inst.TAB_FLAGS : 0)
				inst.first_time_tab = 'flags';
				inst.$report_dialog.dialog('open');
			});

			$('#clear_custom_filter').click(function()
			{
				inst.$custom_filter_box.hide();
				inst.$filter_widget_content.removeClass('custom-filter');
				inst.$filter_form.show();
				inst.current_custom_filter = '';
				inst.current_custom_filter_id = 0;

				inst.refresh_reports(inst.$first_paging_button);
			});

			$('.filter-company-complaints').click(function()
			{
				var company_id = $(this).attr('data-company_id'),
					company_name = $(this).attr('data-company_name');

				inst.$filter_form.hide();
				inst.$filter_widget_content.addClass('custom-filter');
				inst.$custom_filter_box.show();
				inst.$custom_filter_text.html('Showing all complaints against ' + company_name);
				inst.current_custom_filter = 'company';
				inst.current_custom_filter_id = company_id;

				inst.refresh_reports(inst.$first_paging_button);
			});

			$('.filter-user-complaints').click(function()
			{
				var user_id = $(this).attr('data-user_id'),
					user_name = $(this).attr('data-user_name');

				inst.$filter_form.hide();
				inst.$filter_widget_content.addClass('custom-filter');
				inst.$custom_filter_box.show();
				inst.$custom_filter_text.html('Showing all complaints from ' + user_name);
				inst.current_custom_filter = 'user';
				inst.current_custom_filter_id = user_id;

				inst.refresh_reports(inst.$first_paging_button);
			});

			$('.delete').click(function()
			{
				var $button = $(this);
				var id = $button.attr('data-id');

				$button.html('Deleting...').attr('disabled', true);

				$.alert(
				{
					type: 'confirm',
					title: 'Are you sure you want to delete?',
					text: '<p>Are you sure you want to delete the report #' + id + '?</p>',
					callback: function()
					{
						$.ajax(
						{
							url: '/ajax_save_report',
							type: 'POST',
							data:
							{
								id: id,
								active: 0,
								deleted: 1
							},
							dataType: 'json',
							success: function(result)
							{
								inst.refresh_reports(inst.$current_paging_button);
							}
						});
					}
				});
			});
		}).fail(function()
		{
			inst.$tbody.html('<tr><td id="failed_to_load" colspan="6">Could not load reports.</td></tr>');
		});
	},

	load_report: function(id, initial_tab_index)
	{
		var inst = this;

		inst.$report_dialog.dialog('option', 'title', 'View Report #' + id);

		if (inst.dialog_report_ajax_request !== null)
		{
			inst.dialog_report_ajax_request.abort();
		}

		inst.$report_dialog.html('<span id="report_dialog_loader"></span>');

		inst.dialog_report_ajax_request = $.getJSON('/ajax_get_report', { id: id }, function(result)
		{
			if (result.data.error === '')
			{
				inst.previous_dialog_report_id = result.data.previous_report_id;
				inst.next_dialog_report_id = result.data.next_report_id;

				inst.$report_dialog.html(result.data.html);

				if (inst.first_time_tab !== '')
				{
					initial_tab_index = $('#report_dialog_tabs a[href="#tab_' + inst.first_time_tab + '"]').parent().index();
				}

				if (initial_tab_index !== undefined)
				{
					$('#report_dialog_tabs').tabs(
					{
						selected: initial_tab_index
					});
				}
				else
				{
					$('#report_dialog_tabs').tabs();
				}

				inst.TAB_INFO = $('#report_dialog_tabs a[href="#tab_info"]').parent().index();
				inst.TAB_DETAILS = $('#report_dialog_tabs a[href="#tab_details"]').parent().index();
				inst.TAB_COMMENTS = $('#report_dialog_tabs a[href="#tab_comments"]').parent().index();
				inst.TAB_COMPLIANCE = $('#report_dialog_tabs a[href="#tab_compliance_"]').parent().index();
				inst.TAB_MEDIA = $('#report_dialog_tabs a[href="#tab_media"]').parent().index();
				inst.TAB_FOLLOW_UPS = $('#report_dialog_tabs a[href="#tab_follow_ups"]').parent().index();
				inst.TAB_VOTES = $('#report_dialog_tabs a[href="#tab_votes"]').parent().index();
				inst.TAB_FLAGS = $('#report_dialog_tabs a[href="#tab_flags"]').parent().index();
				inst.TAB_PAYOUT = $('#report_dialog_tabs a[href="#tab_payouts"]').parent().index();
				inst.TAB_COMPANY = $('#report_dialog_tabs a[href="#tab_company"]').parent().index();
				inst.TAB_DOCUMENTS = $('#report_dialog_tabs a[href="#tab_documents"]').parent().index();
				//inst.TAB_PHONE_CALLS = $('#report_dialog_tabs a[href="#tab_phone_calls"]').parent().index();
				inst.TAB_HISTORY = $('#report_dialog_tabs a[href="#tab_history"]').parent().index();

				$('#report_dialog_tabs').bind('tabsshow', function(event, ui)
				{
					inst.current_report_dialog_tab_index = ui.index;
				});

				// Set tab texts
				// Comments tab
				$('#report_dialog_tabs ul li a').eq(inst.TAB_COMMENTS).text('Comments' + (result.data.num_comments > 0 ? ' (' + result.data.num_comments + ')' : ''));

				if (result.data.num_comments === 0)
				{
					$('#report_dialog_tabs').tabs('disable', inst.TAB_COMMENTS);
				}

				// Media tab
				$('#report_dialog_tabs ul li a').eq(inst.TAB_MEDIA).text('Media' + (result.data.num_media > 0 ? ' (' + result.data.num_media + ')' : ''));

				if (result.data.num_media === 0)
				{
					$('#report_dialog_tabs').tabs('disable', inst.TAB_MEDIA);
				}

				// Follow Ups tab
				$('#report_dialog_tabs ul li a').eq(inst.TAB_FOLLOW_UPS).text('Follow Ups' + (result.data.num_follow_ups > 0 ? ' (' + result.data.num_follow_ups + ')' : ''));

				if (result.data.num_follow_ups === 0)
				{
					$('#report_dialog_tabs').tabs('disable', inst.TAB_FOLLOW_UPS);
				}

				// Votes tab
				$('#report_dialog_tabs ul li a').eq(inst.TAB_VOTES).text('Votes' + (result.data.num_votes > 0 ? ' (' + result.data.num_votes + ')' : ''));

				if (result.data.num_votes === 0)
				{
					$('#report_dialog_tabs').tabs('disable', inst.TAB_VOTES);
				}

				// Flags tab
				$('#report_dialog_tabs ul li a').eq(inst.TAB_FLAGS).text('Flags' + (result.data.num_flags > 0 ? ' (' + result.data.num_flags + ')' : ''));

				if (result.data.num_flags === 0)
				{
					$('#report_dialog_tabs').tabs('disable', inst.TAB_FLAGS);
				}

				// Payout tab
				$('#report_dialog_tabs ul li a').eq(inst.TAB_PAYOUT).text('Payout');

				if (!result.data.have_payout)
				{
					$('#report_dialog_tabs').tabs('disable', inst.TAB_PAYOUT);
				}

				// Documents tab
				$('#report_dialog_tabs ul li a').eq(inst.TAB_DOCUMENTS).text('Documents' + (result.data.num_documents > 0 ? ' (' + result.data.num_documents + ')' : ''));

				if (result.data.num_documents === 0)
				{
					$('#report_dialog_tabs').tabs('disable', inst.TAB_DOCUMENTS);
				}

				// Phone Calls tab
				/*$('#report_dialog_tabs ul li a').eq(inst.TAB_PHONE_CALLS).text('Phone Calls' + (result.data.num_phone_calls > 0 ? ' (' + result.data.num_phone_calls + ')' : ''));

				if (result.data.num_phone_calls === 0)
				{
					$('#report_dialog_tabs').tabs('disable', inst.TAB_PHONE_CALLS);
				}*/

				// History
				$('#report_dialog_tabs ul li a').eq(inst.TAB_HISTORY).text('History' + (result.data.num_history_items > 0 ? ' (' + result.data.num_history_items + ')' : ''));

				if (inst.previous_dialog_report_id > 0)
				{
					inst.$previous_report_dialog_button.removeAttr('disabled', true).removeClass('ui-state-disabled');
				}
				else
				{
					inst.$previous_report_dialog_button.attr('disabled', true).addClass('ui-state-disabled');
				}

				if (inst.next_dialog_report_id > 0)
				{
					inst.$next_report_dialog_button.removeAttr('disabled', true).removeClass('ui-state-disabled');
				}
				else
				{
					inst.$next_report_dialog_button.attr('disabled', true).addClass('ui-state-disabled');
				}

				// Change who type
				$('#who_type').change(function(e)
				{
					inst.report_dialog_changes_made = true;
					inst.$save_report_dialog_button.removeAttr('disabled', true).removeClass('ui-state-disabled');
				});

				// Active/Deleted/Hold
				$('#report_dialog_active, #report_dialog_deleted, #report_dialog_hold').change(function()
				{
					inst.report_dialog_changes_made = true;
					inst.$save_report_dialog_button.removeAttr('disabled', true).removeClass('ui-state-disabled');
				});

				// Change details text
				$('#change_details').click(function()
				{
					$('#report_dialog_tabs').tabs('select', inst.TAB_DETAILS);

					// Focus and move cursor to end
					$('#report_dialog_details').focus();
				});

				$('#report_dialog_details').keyup(function(e)
				{
					if (inst.report_dialog_changes_made)
					{
						return;
					}

					var input = String.fromCharCode(e.keyCode);

					if (/[a-zA-Z0-9-_ ]/.test(input) || e.keyCode === 8 || e.keyCode === 46)
					{
						inst.report_dialog_changes_made = true;
						inst.$save_report_dialog_button.removeAttr('disabled', true).removeClass('ui-state-disabled');
					}
				});

				$('#report_dialog_details').change(function(event)
				{
					if (inst.report_dialog_changes_made)
					{
						return;
					}

					inst.report_dialog_changes_made = true;
					inst.$save_report_dialog_button.removeAttr('disabled', true).removeClass('ui-state-disabled');
				});

				// Undo compliance
				$('#undo_compliance').click(function()
				{
					$(this).html('Undoing...').attr('disabled', true);

					var report_compliance_id = $(this).attr('data-report_compliance_id');

					$.ajax(
					{
						url: '/ajax_undo_compliance',
						type: 'POST',
						data: { id: report_compliance_id },
						dataType: 'json',
						success: function(result)
						{
							inst.load_report(inst.dialog_report_id, inst.TAB_COMPLIANCE);
							inst.refresh_reports(inst.$current_paging_button);
						}
					});
				});

				// Compliance
				$('input[name="decision"]').change(function(e)
				{
					var decision = e.target.value;

					if (decision === 'approve')
					{
						$('#deny_decision_box, #need_review_decision_box').hide();
						$('#approve_decision_box').show();
					}
					else if (decision === 'deny')
					{
						$('#approve_decision_box, #need_review_decision_box').hide();
						$('#deny_decision_box').show();
					}
					else if (decision === 'need_review')
					{
						$('#approve_decision_box, #deny_decision_box').hide();
						$('#need_review_decision_box').show();
					}
				});

				$('#compliance_form').submit(function()
				{
					var decision = $('input[name="decision"]:checked').val(),
						reason = '';

					if (decision === 'approve')
					{
						reason = $('#approve_decision').val();

						$('#approve_compliance_submit').val('Approving...').attr('disabled', true);
					}
					else if (decision === 'deny')
					{
						reason = $('#deny_decision').val();

						$('#deny_compliance_submit').val('Denying...').attr('disabled', true);
					}
					else if (decision === 'need_review')
					{
						$('#need_review_compliance_submit').val('Submitting...').attr('disabled', true);
					}

					$.ajax(
					{
						url: '/ajax_report_compliance',
						data:
						{
							id: inst.dialog_report_id,
							decision: decision,
							reason: reason
						},
						type: 'POST',
						dataType: 'json',
						success: function(result)
						{
							inst.load_report(inst.dialog_report_id, inst.TAB_COMPLIANCE);
							inst.refresh_reports(inst.$current_paging_button);
						}
					});

					return false;
				});

				// Make media private/public
				$('.make-media-private, .make-media-public').click(function()
				{
					var id = $(this).attr('data-id'),
						what = $(this).attr('data-what');

					if (what === 'public')
					{
						$.alert({
							type: 'confirm',
							title: 'Make media public?',
							text: '<p>Are you sure you want to make media public?</p>',
							callback: function()
							{
								$.post('/ajax_media_update_visibility', { id: id, set_to: 'public' }, function(result)
								{
									inst.load_report(inst.dialog_report_id, inst.TAB_MEDIA);
								});
							}
						});
					}
					else if (what === 'private')
					{
						$.alert({
							type: 'confirm',
							title: 'Make media private?',
							text: '<p>Are you sure you want to make media private?</p>',
							callback: function()
							{
								$.post('/ajax_media_update_visibility', { id: id, set_to: 'private'  }, function(result)
								{
									inst.load_report(inst.dialog_report_id, inst.TAB_MEDIA);
								});
							}
						});
					}
				});

				// Company
				$('input[type="radio"][name="consolidate"]').click(function(e)
				{
					$('.consolidate-container').hide();

					switch (e.target.value)
					{
						case 'consolidate_to_another_company':
							$('#consolidate_to_another_company_container').show();
							$('#consolidate_to_another_company_company_name').focus();

							break;
						default:
							$('#' + e.target.value + '_container').show();
					}
				});

				$('#consolidate_to_another_company_company_name, #consolidate_other_companies_to_this_company_name, #move_to_another_company_company_name').autocomplete(
				{
					source: '/ajax_get_companies_autocomplete'
				});

				$('#consolidate_form').submit(function()
				{
					var what = $('input[type="radio"][name="consolidate"]:checked').val();

					if (what === 'consolidate_to_another_company')
					{
						var company_name = $('#consolidate_to_another_company_company_name').val();

						if (!company_name)
						{
							$('#consolidate_to_another_company_error').html('Select company!').show().delay(3000).queue(function(n) { $(this).fadeOut('fast'); n(); });
							$('#consolidate_to_another_company_company_name').focus();

							return false;
						}

						$('#consolidate_to_another_company_submit').attr('disabled', true).val('Consolidating...');

						$.ajax(
						{
							url: '/ajax_consolidate_to_another_company',
							data: { report_id: inst.dialog_report_id, company_name: company_name, change_seo: $('#consolidate_to_another_company_change_seo_company').is(':checked') ? 1 : 0 },
							type: 'POST',
							dataType: 'json',
							success: function(result)
							{
								if (result.data.error === '')
								{
									$.jGrowl(result.data.success, { theme: 'success', sticky: true });

									inst.load_report(inst.dialog_report_id, inst.TAB_COMPANY);
								}
								else
								{
									$('#consolidate_to_another_company_error').html(result.data.error).show().delay(3000).queue(function(n) { $(this).fadeOut('fast'); n(); });
									$('#consolidate_to_another_company_submit').removeAttr('disabled').val('Consolidate');
								}
							}
						});
					}
					else if (what === 'consolidate_other_companies_to_this')
					{
						var company_name = $('#consolidate_other_companies_to_this_company_name').val();

						if (!company_name)
						{
							$('#consolidate_other_companies_to_this_error').html('Select company!').show().delay(3000).queue(function(n) { $(this).fadeOut('fast'); n(); });
							$('#consolidate_other_companies_to_this_company_name').focus();

							return false;
						}

						$('#consolidate_other_companies_to_this_submit').attr('disabled', true).val('Consolidating...');

						$.ajax(
						{
							url: '/ajax_consolidate_other_companies_to_this',
							data: { report_id: inst.dialog_report_id, company_name: company_name, change_seo: $('#consolidate_other_companies_to_this_change_seo_company').is(':checked') ? 1 : 0 },
							type: 'POST',
							dataType: 'json',
							success: function(result)
							{
								if (result.data.error === '')
								{
									$.jGrowl(result.data.success, { theme: 'success', sticky: true });

									inst.load_report(inst.dialog_report_id, inst.TAB_COMPANY);
								}
								else
								{
									$('#consolidate_other_companies_to_this_error').html(result.data.error).show().delay(3000).queue(function(n) { $(this).fadeOut('fast'); n(); });
									$('#consolidate_other_companies_to_this_submit').removeAttr('disabled').val('Consolidate');
								}
							}
						});
					}
					else if (what === 'move_to_another_company')
					{
						var company_name = $('#move_to_another_company_company_name').val();

						if (!company_name)
						{
							$('#move_to_another_company_error').html('Select company!').show().delay(3000).queue(function(n) { $(this).fadeOut('fast'); n(); });
							$('#move_to_another_company_company_name').focus();

							return false;
						}

						$('#move_to_another_company_submit').attr('disabled', true).val('Moving...');

						$.ajax(
						{
							url: '/ajax_report_move_to_another_company',
							data: { report_id: inst.dialog_report_id, company_name: company_name, update_seo: $('#move_to_another_company_update_seo_company').is(':checked') ? 1 : 0 },
							type: 'POST',
							dataType: 'json',
							success: function(result)
							{
								if (result.data.error === '')
								{
									$.jGrowl(result.data.success, { theme: 'success', sticky: true });

									inst.load_report(inst.dialog_report_id, inst.TAB_INFO);
								}
								else
								{
									$('#move_to_another_company_error').html(result.data.error).show().delay(3000).queue(function(n) { $(this).fadeOut('fast'); n(); });
									$('#move_to_another_company_submit').removeAttr('disabled').val('Move');
								}
							}
						});
					}

					return false;
				});

				$('.deconsolidate').click(function()
				{
					var $this = $(this),
						company_id = $this.attr('data-id'),
						company_name = $this.attr('data-name');

					$.alert({
						type: 'confirm',
						title: 'Are you sure?',
						text: '<p>Are you sure you want to deconsolidate company "' + company_name + '"?</p>',
						callback: function()
						{
							$this.html('Deconsolidating...');

							$.ajax(
							{
								url: '/deconsolidate_company',
								type: 'POST',
								data: { id: company_id },
								dataType: 'json',
								success: function(result)
								{
									if (result.data.error === '')
									{
										$('#consolidated_company_' + company_id).fadeOut();

										var num_consolidated_companies = parseInt($('#num_consolidated_companies').html(), null);
										$('#num_consolidated_companies').html(num_consolidated_companies - 1);
									}
									else
									{
										$this.html('Deconsolidate');

										$.jGrowl(result.data.error, { theme: 'error', sticky: true });
									}
								}
							});
						}
					});
				});

				$('.the-image a').fancybox(
				{
					'overlayShow': false
				});
			}
			else
			{
				if (result.data.error === 'REPORT_NOT_FOUND')
				{
					alert('Could not find report.');

					inst.$report_dialog.dialog('close');
				}
				else
				{
					alert(result.data.error);
				}
			}
		}).fail(function()
		{
			inst.$report_dialog.html('<span id="report_dialog_failure">Could not load report.</span>');
		});
	},

	save_report_dialog: function()
	{
		var inst = this;

		inst.$save_report_dialog_button.attr('disabled', true).addClass('ui-state-disabled').children('.ui-button-text').html('Saving...');
		inst.$close_report_dialog_button.attr('disabled', true).addClass('ui-state-disabled');
		inst.is_saving_report_dialog = true;

		$('#who_type, #report_dialog_details, #report_dialog_active, #report_dialog_deleted, #report_dialog_hold').attr('disabled', true);

		$.when(
			// Save who type
			$.ajax(
			{
				url: '/ajax_save_who_type',
				type: 'POST',
				data: { id: inst.dialog_report_id, new_who_type: $('#who_type').val() },
				dataType: 'json'
			}),

			// Save active/deleted/hold
			$.ajax(
			{
				url: '/ajax_save_report',
				type: 'POST',
				data:
				{
					id: inst.dialog_report_id,
					details: $('#report_dialog_details').val(),
					active: $('#report_dialog_active').is(':checked') ? 1 : 0,
					deleted: $('#report_dialog_deleted').is(':checked') ? 1 : 0,
					hold: $('#report_dialog_hold').is(':checked') ? 1 : 0
				},
				dataType: 'json'
			})
		).done(function()
		{
			inst.is_saving_report_dialog = false;
			inst.report_dialog_changes_made = false;
			inst.$save_report_dialog_button.children('.ui-button-text').html('Save');
			inst.$close_report_dialog_button.removeAttr('disabled').removeClass('ui-state-disabled');

			$('#who_type, #report_dialog_details, #report_dialog_active, #report_dialog_deleted, #report_dialog_hold').removeAttr('disabled');

			inst.refresh_reports(inst.$current_paging_button);
		});
	}
};

$sb.crm.Reports = new Reports();

$(document).ready(function()
{
	$sb.crm.Reports._init();
});