// requires: jquery
function edit_company() {};

edit_company.prototype =
{	
	rs: Object, 
	form: Object,
	country_selector: Object,
	company_id: 0,

	// Attach Phone Call dialog
	attach_phone_call_dialog: null,
	attach_phone_call_tabs: null,
	selected_phone_calls: [],
	selected_attach_to: -1,
	selected_attach_to_str: '',

	num_init_dialog_players: 0,
	dialog_players: [],

	report_players: [],
	company_players: [],

	// Last Call/E-mail
	first_call_email_dialog: null,
	$document_upload_progress_bar: null,
	$document_upload_progress_text: null,
	$document_upload_info: null,
	$document_form_fields: null,
	document_upload_xhr: null,
	file_to_upload: null,
	max_upload_file_size: 0,
	post_max_size: 0,
	$documents_tbody: null,
	$document_file: null,

	// Upload Document
	$num_documents: null,
	upload_document_dialog: null,

	// Edit Document
	edit_document_dialog: null,
	current_edit_document_id: 0,

	binds: function()
	{	
		var inst = this;

	    inst.country_selector.change(function()
	    {
	        inst.rs.start(inst.form, inst.country_selector);
	    });

	    $('button[type="submit"]').unbind('click');
	    $('button[type="submit"]').bind('click', function()
	    {
	    	inst.check();
	    });

		$('#tab_phone_call, #edit_company_tabs').tabs();

		// Step 1: Attach Phone Call
		inst.attach_phone_call_tabs = $('#attach_phone_call_tabs');

		inst.attach_phone_call_dialog = $('#attach_phone_call_dialog').dialog(
		{
			autoOpen: false,
			width: 750,
			height: 470,
			resizable: false,
			buttons: {
				'Close': function() { $(this).dialog('close'); }
			},
			open: function()
			{
				inst.attach_phone_call_tabs = $('#attach_phone_call_tabs').tabs(
					{
						disabled: [1, 2]
					});

				inst.show_attach_phone_loader(1);

				$sb.ajax.get('/download_phone_calls', { }, function(result)
				{
					var error = result.data.error;

					if (error === '')
					{
						$('#attach_phone_call_step1 .inner').html(result.data.html);

						inst.num_init_dialog_players = $('#attach_phone_call_dialog audio').length;

						// Initialize dialog players
						for (var index = 0; index < inst.num_init_dialog_players; index++)
						{
							inst.init_dialog_player(index);

							$('#dialog_phone_call_' + index).click(function(e)
							{
								var $obj = $(e.target);

								if (e.target.checked)
								{
									inst.selected_phone_calls.push(new inst.Phone_Call(e.target.value, $obj.attr('data-type'), $obj.attr('data-number'), $obj.attr('data-time')));
								}
								else
								{
									for (var i = 0, num_selected_phone_calls = inst.selected_phone_calls.length; i < num_selected_phone_calls; i++)
									{
										if (e.target.value === inst.selected_phone_calls[i].filename)
										{
											inst.selected_phone_calls.splice(i, 1);
											break;
										}
									}
								}

								if (inst.selected_phone_calls.length > 0)
								{
									inst.attach_phone_call_tabs.tabs('enable', 1);
									$('#next_step1').addClass('btn-primary');
								}
								else
								{
									inst.attach_phone_call_tabs.tabs('disable', 1);
									inst.attach_phone_call_tabs.tabs('disable', 2);
									$('#next_step1').removeClass('btn-primary');
								}
							});
						}
					}
					else
					{
						if (error === 'MISSING_EXTENSION')
						{
							$('#attach_phone_call_step1 .inner').html('You doesn\'t have an extension set yet. Please set an extension before continuing.');
						}
					}
				});
			},
			close: function()
			{
				inst.pause_dialog_players(-1);

				inst.selected_phone_calls = [];
				inst.selected_attach_to = -1;
				inst.selected_attach_to_str = '';
				inst.num_init_dialog_players = 0;

				inst.attach_phone_call_tabs.tabs('select', 0);

				inst.attach_phone_call_tabs.tabs('option', 'disabled', [1, 2]);
				inst.dialog_players = [];

				$('input[name="attach_to"]').removeAttr('checked');
				//$('input[name="attach_to"]:eq(0)').attr('checked', true);

				$('#selected_phone_call_summary, #selected_attach_to_summary').html('');
			}
		}).bind('tabsshow', function(event, ui)
		{
			switch (ui.index)
			{
				case 1:
					if (typeof $('input[name="attach_to"]:checked').val() !== 'undefined')
					{
						inst.attach_phone_call_tabs.tabs('enable', 2);
					}

					break;
				case 2:
					// Generate summary
					var num_selected_phone_calls = inst.selected_phone_calls.length;
					var audio_html = '';
					var indexes_to_init = [];

					// Remove previous preview players so array doesn't get so big with player objects
					inst.dialog_players.splice(inst.num_init_dialog_players);

					for (var i = 0; i < num_selected_phone_calls; i++)
					{
						var index = inst.dialog_players.length + i;

						indexes_to_init.push(index);

						audio_html += '<audio id="dialog_player_' + index + '" src="/play_recording?filename=' + inst.selected_phone_calls[i].filename + '"></audio>';
						audio_html += '<a id="dialog_player_play_' + index + '" data-index="' + index + '" class="play"><span class="play-icon"></span></a>';
						audio_html += '<div class="progress-container">';
						audio_html += '<progress id="dialog_player_progress_' + index + '" data-index="' + index + '" class="recording-progress" value="0" max="1"></progress>';
						audio_html += '<span id="dialog_player_buffering_' + index + '" class="buffering"></span>';
						audio_html += '</div>';
						audio_html += '<span id="dialog_player_status_' + index + '" class="player-status">Loading...</span><div class="clear"></div>';
					}

					$('#selected_phone_call_summary').html(audio_html);
					$('#selected_attach_to_summary').html(inst.selected_attach_to_str);

					// Init newly added players
					for (var j = 0, num_indexes_to_init = indexes_to_init.length; j < num_indexes_to_init; j++)
					{
						inst.init_dialog_player(indexes_to_init[j]);
					}

					break;
			}
		});

		$('#attach_phone_call').click(function()
		{
			inst.attach_phone_call_dialog.dialog('open');
		});

		// Step 1: Attach Phone Call - Next
		$('#next_step1').click(function()
		{
			if (inst.selected_phone_calls.length === 0)
			{
				$('#warning_step1').show().delay(2000).queue(function(n) { $(this).hide(); n(); });
				return;
			}

			inst.attach_phone_call_tabs.tabs('select', 1);
		});

		// ------------------------------------------------------------------------

		// Step 2: Select To - When selecting a radio button
		$('#attach_phone_call_dialog input[name="attach_to"]').live('click', function(e)
		{
			inst.selected_attach_to = e.target.value;
			inst.selected_attach_to_str = $(e.target).parent().children('span').html();

			inst.attach_phone_call_tabs.tabs('enable', 2);
			$('#next_step2').addClass('btn-primary');
		});

		// Step 2: Attach To - Next
		$('#next_step2').click(function()
		{
			if (inst.selected_attach_to === -1)
			{
				$('#warning_step2').show().delay(2000).queue(function(n) { $(this).hide(); n(); });
				return;
			}

			inst.attach_phone_call_tabs.tabs('select', 2);
		});

		// Step 2: Attach To - Back
		$('#back_step2').click(function()
		{
			inst.attach_phone_call_tabs.tabs('select', 0);
		});

		// ------------------------------------------------------------------------

		// Step 3: Attach - Attach
		$('#attach').click(function()
		{
			var attach_to_what = '';
			var attach_to = -1;

			if (inst.selected_attach_to > 0)
			{
				attach_to_what = 'report';
				attach_to = inst.selected_attach_to;
			}
			else
			{
				attach_to_what = 'company';
				attach_to = inst.company_id;
			}

			// Save connection
			$sb.ajax.post('/attach_phone_call', { company_id: inst.company_id, phone_calls: inst.selected_phone_calls, attach_to_what: attach_to_what, attach_to: attach_to }, function(result)
			{
				var num_phone_calls_to_attach = inst.selected_phone_calls.length;

				inst.attach_phone_call_dialog.dialog('close');

				var $num_phone_calls = $('#num_phone_calls');
				var num_phone_calls = parseInt($num_phone_calls.html(), null);
				$num_phone_calls.html(num_phone_calls + num_phone_calls_to_attach);

				var $num_what_phone_calls = $('#num_' + attach_to_what + '_phone_calls');
				var num_sub_phone_calls = parseInt($num_what_phone_calls.html(), null);
				$num_what_phone_calls.html(num_sub_phone_calls + num_phone_calls_to_attach);

				inst.refresh_phone_calls(attach_to_what, true);
			});
		});

		// Step 3: Attach - Back
		$('#back_step3').click(function()
		{
			inst.attach_phone_call_tabs.tabs('select', 1);
		});

		// De-attach
		$('.de-attach').live('click', function()
		{
			var $this = $(this);
			var id = $this.attr('data-id');
			var index = $this.attr('data-index');
			var what = $this.attr('data-what');
			var what_id = $this.attr('data-what_id');

			$.alert({
				type: 'confirm',
				title: 'De-Attach Phone Call',
				text: '<p>Are you sure you want to de-attach the phone call #' + id + '?</p>',
				callback: function()
				{
					if (what === 'report')
					{
						inst.report_players.splice(index, 1);
					}
					else if (what === 'company')
					{
						inst.company_players.splice(index, 1);
					}

					$this.text('De-Attaching...');

					$sb.ajax.post('/deattach_phone_call', { company_id: inst.company_id, id: id, what: what, what_id: what_id }, function(result)
					{
						var $num_phone_calls = $('#num_phone_calls');
						var num_phone_calls = parseInt($num_phone_calls.html(), null);

						var $num_what_phone_calls = $('#num_' + what + '_phone_calls');
						var num_sub_phone_calls = parseInt($num_what_phone_calls.html(), null);

						$num_phone_calls.html(num_phone_calls - 1);
						$num_what_phone_calls.html(num_sub_phone_calls - 1);

						$this.parents('tr').fadeOut(function() {
							inst.refresh_phone_calls(what, false);
						});
					});
				}
			});
		});

		// Player
		$('#attach_phone_call_tabs .play').live('click', function()
		{
			var index = parseInt($(this).attr('data-index'), null);
			//var selected_tab = inst.attach_phone_call_tabs.tabs('option', 'selected');

			// Pause all current playing players
			inst.pause_dialog_players(index);
			inst.pause_company_players(0, 'dialog');
			inst.pause_report_players(0, 'dialog');

			if (inst.dialog_players[index].paused)
			{
				inst.dialog_players[index].play();
				$('#dialog_player_play_' + index).html('<span class="pause-icon"></span>');
			}
			else
			{
				inst.dialog_players[index].pause();
				$('#dialog_player_play_' + index).html('<span class="play-icon"></span>');
			}

			return false;
		});

		$('#company_phone_calls_container .play, #report_phone_calls_container .play').live('click', function()
		{
			var index = parseInt($(this).attr('data-index'), null);
			var what = $(this).attr('data-what');

			var players = null;

			if (what === 'report')
			{
				players = inst.report_players;
			}
			else if (what === 'company')
			{
				players = inst.company_players;
			}
			else
			{
				alert('Please contact Dennis if you see this message, because it\'s not suppose to show up ;-O');
				return;
			}

			// Pause all company and report players
			inst.pause_company_players(index, what);
			inst.pause_report_players(index, what);

			// Play (or pause if already playing)
			if (players[index].paused)
			{
				players[index].play();
				$('#' + what + '_player_play_' + index).html('<span class="pause-icon"></span>');
			}
			else
			{
				players[index].pause();
				$('#' + what + '_player_play_' + index).html('<span class="play-icon"></span>');
			}
		});

		$('#attach_phone_call_dialog .recording-progress').live('click', function(e)
		{
			var player_index = $(this).attr('data-index');

			// Init player (if already initialized just retreive player object)
			var player = inst.init_dialog_player(player_index);

			// Go to clicked position
			player.currentTime = (((e.clientX - $(this).offset().left) / $(this).width()) * player.duration);
		});

		$('#tab_phone_call .recording-progress').live('click', function(e)
		{
			var player_index = $(this).attr('data-index');
			var what = $(this).attr('data-what');

			// Init player (if already initialized just retreive player object)
			var player = inst.init_player(player_index, what);

			// Go to clicked position
			player.currentTime = (((e.clientX - $(this).offset().left) / $(this).width()) * player.duration);
		});

		// First Call/E-mail
		inst.first_call_email_dialog = $('#first_call_email_dialog').dialog(
			{
				autoOpen: false,
				width: 450,
				height: 200,
				resizable: false,
				buttons: {
					'Save': function()
					{
						var first_call = $('#first_call').val();
						var first_email = $('#first_email').val();

						var $save_button = $('#first_call_email_dialog').next('.ui-dialog-buttonpane').children('.ui-dialog-buttonset').children('button:contains("Save")');
						$save_button.attr('disabled', true).addClass('ui-state-disabled').children('.ui-button-text').html('Saving...');

						$sb.ajax.post('/set_first_call_email', { company: inst.company_id, first_call: first_call, first_email: first_email }, function(result)
						{
							if (result.data.error === '')
							{
								$('#first_call').val(result.data.first_call_response);
								$('#first_email').val(result.data.first_email_response);

								$('#first_call_email_status').html('<span class="ticket ticket-success">Saved...</span>').show().delay(1500).queue(function(n)
								{
									$(this).hide();
									n();
								});
							}
							else
							{
								$('#first_call_email_status').html('<span class="error">' + result.data.error + '</span>');
							}

							$save_button.removeAttr('disabled').removeClass('ui-state-disabled').children('.ui-button-text').html('Save');
						});
					},
					'Close': function() { $(this).dialog('close'); }
				}
			});

		$('#first_call_email').click(function()
		{
			inst.first_call_email_dialog.dialog('open');
		});

		$('#first_call_email_form, #edit_document_form').submit(function()
		{
			return false;
		});

		$('#first_call, #first_email').keyup(function(e)
		{
			var key = e.which;

			if (key === 13)
			{
				$('#first_call_email_dialog').next('.ui-dialog-buttonpane').children('.ui-dialog-buttonset').children('button:contains("Save")').click();
			}
		});

		// Upload Document
		inst.$document_upload_progress_bar = $('#document_upload_progress_bar');
		inst.$document_upload_progress_text = $('#document_upload_progress_text');
		inst.$document_upload_info = $('#document_upload_info');
		inst.$document_form_fields = $('#document_form_fields');
		inst.max_upload_file_size = $('#max_file_size').val();
		inst.post_max_size = $('#post_max_size').val();
		inst.$documents_tbody = $('#documents_tbody');
		inst.$num_documents = $('#num_documents');
		inst.$document_file = $('#document_file');

		inst.upload_document_dialog = $('#upload_document_dialog').dialog(
		{
			autoOpen: false,
			width: 475,
			height: 270,
			resizable: false,
			buttons: {
				'Upload': function()
				{
					var document_title = $('#document_title').val();
					var document_description = $('#document_description').val();

					var fd = new FormData();
					fd.append('document_file', inst.file_to_upload);

					// These extra params aren't necessary but show that you can include other data.
					fd.append('company', inst.company_id);
					fd.append('document_title', document_title);
					fd.append('document_description', document_description);

					inst.document_upload_xhr = new XMLHttpRequest();
					inst.document_upload_xhr.open('POST', '/upload_document', true);

					inst.document_upload_xhr.upload.onprogress = function(e)
					{
						var percentComplete = 0;

						if (e.lengthComputable)
						{
							percentComplete = (e.loaded / e.total) * 100;

							inst.$document_upload_progress_bar.val(percentComplete);
						}

						inst.$document_upload_progress_text.html(percentComplete.toFixed(0) + '%');
					};

					inst.document_upload_xhr.onreadystatechange = function(e)
					{
						if (this.readyState === 4)
						{
							inst.init_document_upload(false);
						}
					};

					inst.document_upload_xhr.onload = function()
					{
						if (this.status === 200)
						{
							try {
								var response = JSON.parse(this.response);

								if (response.error !== '')
								{
									inst.$document_upload_info.html('<span class="ticket ticket-important">' + response.error + '</span>');
								}
								else
								{
									//inst.$document_upload_progress_text.html('<span style="color:green">Document successfully uploaded!</span>');
									$('#upload_document_dialog').dialog('close');

									var num_documents = parseInt(inst.$num_documents.html(), null);
									inst.$num_documents.html(num_documents + 1);

									inst.refresh_documents(false);

									$('#edit_company_tabs').tabs('select', 1);
								}
							}
							catch (err)
							{
								inst.$document_upload_info.html('<span class="ticket ticket-important">Could not parse response.</span>');
							}
						}
					};

					inst.document_upload_xhr.send(fd);

					inst.$document_form_fields.hide();
					inst.$document_upload_progress_bar.show();
					inst.$document_upload_progress_text.show();
					$('#cancel_document_upload').show();
				},
				'Close': function()
				{
					$(this).dialog('close');
				}
			},
			open: function()
			{
				$('#upload_document_dialog').next('.ui-dialog-buttonpane').children('.ui-dialog-buttonset').children('button:contains("Upload")').attr('disabled', true).addClass('ui-state-disabled');
			},
			close: function()
			{
				if (typeof document_upload_xhr !== 'undefined' && inst.document_upload_xhr !== null && inst.document_upload_xhr.readyState !== 4)
				{
					inst.document_upload_xhr.abort();
				}
			}
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
						inst.refresh_documents(false);

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

		$('#upload_document').click(function()
		{
			inst.upload_document_dialog.dialog('open');
		});

		$('#cancel_document_upload').click(function()
		{
			inst.document_upload_xhr.abort();

			inst.init_document_upload(false);
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
						var num_documents = parseInt(inst.$num_documents.html(), null);
						inst.$num_documents.html(num_documents - 1);

						inst.refresh_documents(false);
					});
				}
			});
		});

		$('#edit_document_title').keyup(function(e)
		{
			var key = e.which;

			if (key === 13)
			{
				$('#edit_document_dialog').next('.ui-dialog-buttonpane').children('.ui-dialog-buttonset').children('button:contains("Save")').click();
			}
		});

		inst.init_document_upload(true);

		inst.refresh_documents(true);
	},

	init_document_upload: function(first)
	{
		var inst = this;

		if (!first)
		{
			inst.$document_file.replaceWith(inst.$document_file.clone());

			inst.$document_upload_progress_bar.hide().val(0);
			inst.$document_upload_progress_text.hide().html('');
			inst.$document_upload_info.html('');
			$('#cancel_document_upload').hide();
			inst.file_to_upload = null;
			$('#upload_document_dialog').next('.ui-dialog-buttonpane').children('.ui-dialog-buttonset').children('button:contains("Upload")').attr('disabled', true).addClass('ui-state-disabled');
			$('#document_title, #document_description').val('');
		}

		document.querySelector('#document_file').addEventListener('change', function(e)
		{
			inst.file_to_upload = this.files[0];

			var is_too_big = ((inst.file_to_upload.size > inst.max_upload_file_size) || (inst.file_to_upload.size > inst.post_max_size));

			inst.$document_upload_info.html('<strong>File Size:</strong> ' + inst.format_bytes(inst.file_to_upload.size) + (is_too_big ? '<br><span class="ticket ticket-important">Document is too big. Max document size is ' + inst.format_bytes(inst.max_upload_file_size) + ' or ' + inst.format_bytes(inst.post_max_size) + '.</span>' : ''));

			if (!is_too_big)
			{
				$('#upload_document_dialog').next('.ui-dialog-buttonpane').children('.ui-dialog-buttonset').children('button:contains("Upload")').removeAttr('disabled').removeClass('ui-state-disabled');

				inst.$document_form_fields.show();
			}
		}, false);
	},

	init_dialog_player: function(index)
	{
		var inst = this;

		if (typeof inst.dialog_players[index] === 'undefined')
		{
			var player = inst.dialog_players[index] = document.getElementById('dialog_player_' + index);
			var $dialog_player = $('#dialog_player_' + index);

			$dialog_player.on('loadedmetadata', function()
			{
				$('#dialog_phone_call_' + index).removeAttr('disabled');

				inst.refresh_player_time(index, 'dialog');
			});

			$dialog_player.on('timeupdate', function()
			{
				$('#dialog_player_progress_' + index).attr('value', this.currentTime / this.duration);

				inst.refresh_player_time(index, 'dialog');
			});

			$dialog_player.on('ended', function()
			{
				$('#dialog_player_play_' + index).html('<span class="play-icon"></span>');
			});

			if ((typeof player.buffered === 'object') && (player.buffered.length !== 0)) {
				$('#dialog_player_' + index).bind('progress', function() {
					var loaded = parseInt(((player.buffered.end(0) / player.duration) * 100), 10);

					$('#dialog_player_buffering_' + index).width((loaded < 100) ? (loaded + '%') :  0);
				});
			}
		}

		return inst.dialog_players[index];
	},

	init_player: function(index, what)
	{
		"use strict";

		var inst = this;

		var players = null;

		if (what === 'report')
		{
			players = inst.report_players;
		}
		else if (what === 'company')
		{
			players = inst.company_players;
		}
		else
		{
			alert('Please contact Dennis if you see this message, because it\'s not suppose to show up ;-(');
			return;
		}

		if (typeof players[index] === 'undefined')
		{
			var element_id = what + '_player_' + index;
			var player = players[index] = document.getElementById(element_id);
			var $player_element = $('#' + element_id);

			$player_element.on('loadedmetadata', function()
			{
				inst.refresh_player_time(index, '', what);
			});

			$player_element.on('timeupdate', function()
			{
				$('#' + what + '_player_progress_' + index).attr('value', this.currentTime / this.duration);

				inst.refresh_player_time(index, '', what);
			});

			$player_element.on('ended', function()
			{
				$('#' + what + '_player_play_' + index).html('<span class="play-icon"></span>');
			});

			if ((typeof player.buffered === 'object') && (player.buffered.length !== 0)) {
				$player_element.bind('progress', function() {
					var loaded = parseInt(((player.buffered.end(0) / player.duration) * 100), 10);

					$('#' + what + '_player_buffering_' + index).width((loaded < 100) ? (loaded + '%') :  0);
				});
			}

			player.load();
		}

		return players[index];
	},

	refresh_player_time: function(player_index, what, company_or_report)
	{
		var inst = this;
		var player = null;

		if (what === 'dialog')
		{
			player = inst.dialog_players[player_index];
		}
		else
		{
			if (company_or_report === 'report')
			{
				player = inst.report_players[player_index];
			}
			else if (company_or_report === 'company')
			{
				player = inst.company_players[player_index];
			}
			else
			{
				alert('Please contact Dennis if you see this message, because it\'s not suppose to show up ;-(');
				return;
			}
		}

		if ( player === undefined )
			return;

		var current_time = inst.format_time(Math.floor(player.currentTime).toString());
		var duration = inst.format_time(Math.floor(player.duration).toString());

		if (what === 'dialog')
			$('#dialog_player_status_' + player_index).html(current_time + '/' + duration);
		else
			$('#' + company_or_report + '_player_status_' + player_index).html(current_time + '/' + duration);
	},

	format_time: function(secs, format) {
		var hr  = Math.floor(secs / 3600);
		var min = Math.floor((secs - (hr * 3600))/60);
		var sec = Math.floor(secs - (hr * 3600) -  (min * 60));

		if (min < 10){
			min = "0" + min;
		}
		if (sec < 10){
			sec  = "0" + sec;
		}

		return min + ':' + sec;
	},

	show_attach_phone_loader: function(step)
	{
		$('#attach_phone_call_step' + step + ' .inner').html('<div class="loader"></div>');
	},

	Phone_Call: function(filename, type, phone_number, time)
	{
		this.filename = filename;
		this.type = type;
		this.phone_number = phone_number;
		this.time = time;
	},

	refresh_phone_calls: function(what, focus_tab)
	{
		var inst = this;

		focus_tab = typeof focus_tab === 'undefined' ? false : focus_tab;

		if (what === 'company' || what === 'both') // Company
			$('#company_phone_calls_container').html('<div class="phone-calls-loader"></div>');

		if (what === 'report' || what === 'both')  // Report
			$('#report_phone_calls_container').html('<div class="phone-calls-loader"></div>');

		$sb.ajax.get('/get_phone_calls', { company: inst.company_id, what: what }, function(result)
		{
			if (what === 'company' || what === 'both')
			{
				$('#company_phone_calls_container').html(result.data.html.company);

				var num_init_company_players = $('#company_phone_calls_container audio').length;

				inst.company_players = [];

				for (var i = 0; i < num_init_company_players; i++ )
				{
					inst.init_player(i, 'company');
				}
			}

			if (what === 'report' || what === 'both')
			{
				$('#report_phone_calls_container').html(result.data.html.report);

				var num_init_report_players = $('#report_phone_calls_container audio').length;

				inst.report_players = [];

				for (var j = 0; j < num_init_report_players; j++ )
				{
					inst.init_player(j, 'report');
				}
			}
		});

		if (focus_tab === true)
		{
			if (what === 'company')
				$('#tab_phone_call').tabs('select', 0);
			else if (what === 'report')
				$('#tab_phone_call').tabs('select', 1);

			$('#edit_company_tabs').tabs('select', 2);
		}
	},

	format_bytes: function(bytes)
	{
		var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

		if (bytes === 0)
		{
			return 'N/A';
		}

		var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), null);

		if (i === 0)
		{
			return bytes + ' ' + sizes[i];
		}

		return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
	},

	refresh_documents: function(first_time)
	{
		var inst = this;

		inst.$documents_tbody.html('<tr><td colspan="4"><span id="documents_loader"></span></td></tr>');

		$sb.ajax.get('/get_documents', { company: inst.company_id }, function(result)
		{
			inst.$documents_tbody.html(result.data.html);

			// If first time, also load the phone calls
			if (first_time)
			{
				inst.refresh_phone_calls('both', false);
			}
		});
	},

	pause_dialog_players: function(index)
	{
		var inst = this;
		var num_players = inst.dialog_players.length;

		for (var i = 0; i < num_players; i++)
		{
			if (index > -1 && typeof inst.dialog_players[i] === 'undefined' || i === index)
			{
				continue;
			}

			if (!inst.dialog_players[i].paused) // Pause if playing
			{
				inst.dialog_players[i].pause();

				$('#dialog_player_play_' + i).html('<span class="play-icon"></span>');
			}
		}
	},

	pause_company_players: function(index, what)
	{
		var inst = this;
		var num_company_players = inst.company_players.length;

		for (var i = 0; i < num_company_players; i++)
		{
			if (typeof inst.company_players[i] === 'undefined' || (i === index && what === 'company'))
			{
				continue;
			}

			if (!inst.company_players[i].paused)
			{
				inst.company_players[i].pause();

				$('#company_player_play_' + i).html('<span class="play-icon"></span>');
			}
		}
	},

	pause_report_players: function(index, what)
	{
		var inst = this;
		var num_report_players = inst.report_players.length;

		for (var i = 0; i < num_report_players; i++)
		{
			if (typeof inst.report_players[i] === 'undefined' || (i === index && what === 'report'))
			{
				continue;
			}

			if (!inst.report_players[i].paused)
			{
				inst.report_players[i].pause();

				$('#report_player_play_' + i).html('<span class="play-icon"></span>');
			}
		}
	},
	
	check: function()
	{
		var inst = this;
		var check = $sb.ajax;
		check.async = false;
		check.post('/edit_company/' + inst.company_id, inst.form.serialize(), function(json)
		{
			inst.form.attr('onsubmit', '');
			inst.form.submit();
		});
	},
	
	setup_region_switch: function()
	{
		this.form = $('#edit-company');
	    this.country_selector = this.form.find('select[name="country_code"]');
	    this.rs = new RegionSwitcher();
	    this.rs.region_field_class = 'region-field';
	    this.rs.region_field_name = 'region';
	    this.rs.disabled_region_field_name = 'disabled-region';
	    this.rs.us_states_element = 'us-states';
	    this.rs.ca_provinces_element = 'ca-provinces';
	    this.rs.other_region_element = 'other_region';
	    this.rs.region_label = 'region_label';
	    this.rs.us_states_label_text = "States" + ':';
	    this.rs.ca_provinces_label_text = "Provinces" + ':';
	    this.rs.other_region_label_text = "Region" + ':';
	    this.rs.start(this.form, this.country_selector);		
	},
	
	_init: function()
	{
	    this.setup_region_switch();
	    this.binds();
	}
}

$sb.crm.edit_company = new edit_company(); //instance using global scope
$(document).ready(function()
{
	$sb.crm.edit_company.company_id = $sb.crm.id;
	$sb.crm.edit_company._init();
});