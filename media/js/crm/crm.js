// requires: jquery
function crm() {};

crm.prototype =
{
	investigator_id: 0,
	investigator_role: null,
	investigator_role_id: null,
	
	note_dialog: Object,
	update_dialog: Object,
	update_redactor: Object,
	
	method: null,
	id: null,
	other_param: null,
	
	compeletion_reason: null,

	from_follow_up: false,
	follow_up_company_id: 0,
	
	search_running: false,

	$user_profile_dialog: null,
	$user_profile_dialog_content: null,
	selected_user_profile: 0,

	TAB_USER_DIALOG_PROFILE: 0,
	TAB_USER_DIALOG_COMMENTS: -1,
	TAB_USER_DIALOG_COMPLAINTS: -1,
	TAB_USER_DIALOG_STRIPE: -1,
	//TAB_USER_DIALOG_STATS: -1,
	TAB_USER_DIALOG_HISTORY: -1,
	TAB_USER_DIALOG_TRANSACTIONS: -1,
	//TAB_USER_DIALOG_PHONE_CALLS: -1,

	binds: function()
	{
		var inst = this;
		//global search
		$('input.search_leads').die();
		$('input.search_leads').keyup(function(e)
		{
			e.preventDefault();
			inst.search($(this).val());
		});

		$('#search').find('form').submit(function(e)
		{
			e.preventDefault();
			$sb.crm.manual_search();
		});
		
		//lead actions
		$('[id^="lead_actions"]').unbind('click');
		$('[id^="lead_actions"]').bind('click', function()
		{
			switch($(this).attr('id'))
			{
				case 'lead_actions_mark_as_half_complete_level1':
					inst.lead_actions_mark_as_half_complete_level1($(this).attr('data-company_id'));
					break;
				case 'lead_actions_mark_as_complete_level1':
					inst.lead_actions_mark_as_complete_level1($(this).attr('data-company_id'));
					break;
                case 'lead_actions_mark_as_dead_level_1b':
                    inst.lead_actions_mark_as_dead_level_1b($(this).attr('data-company_id'));
                    break;
				case 'lead_actions_mark_as_complete_level2':
					inst.lead_actions_mark_as_complete_level2($(this).attr('data-company_id'), false);
					break;
				case 'lead_actions_mark_as_complete_level3':
					inst.lead_actions_mark_as_complete_level3($(this).attr('data-company_id'), false);
					break;			
				case 'lead_actions_mark_as_needs_follow_up':
					inst.lead_actions_mark_as_needs_follow_up($(this).attr('data-company_id'), false);
					break;			
				case 'lead_actions_mark_ready_for_mailing':
					inst.lead_actions_mark_ready_for_mailing($(this).attr('data-company_id'));
					break;
				case 'lead_actions_send_back':
					inst.lead_actions_send_back($(this).attr('data-company_id'));
					break;
				case 'lead_actions_dead':
					inst.lead_actions_dead($(this).attr('data-company_id'));
					break;					
				case 'lead_actions_add_note':
					inst.create_note($(this).attr('data-company_id'));
					break;
				case 'lead_actions_add_update':
					inst.create_update($(this).attr('data-company_id'));
					break;				
				case 'lead_actions_add_follow_up':
					inst.create_update($(this).attr('data-company_id'));
					inst.from_follow_up = true;
					inst.follow_up_company_id = $(this).attr('data-company_id');
					break;
				case 'lead_actions_request_more_information':
					inst.lead_actions_request_more_information($(this).attr('data-company_id'));
					break;					
			}
		});
		
		//when a outcome is selected for a completion
		//enable the confirm button
		$('#select_compeletion_reason').unbind('change');
		$('#select_compeletion_reason').bind('change', function()
		{
			inst.compeletion_reason = $(this).val();
			if($(this).val() != '')
			{
				$('#alertActions').find('button.btn-primary').show();				
			}
			else
			{
				$('#alertActions').find('button.btn-primary').hide();				
			}
		});

		$('#user_submitted_info').click(function()
		{
			var company_id = $(this).attr('data-company_id');
			var reassign_lead = $(this).attr('data-reassign_lead') === 'true' ? true : false;

			inst.user_submitted_info(company_id, reassign_lead, false);
		});

		inst.$user_profile_dialog_content = $('#user_profile_dialog_content');

		inst.$user_profile_dialog = $('#user_profile_dialog').dialog(
		{
			autoOpen: false,
			width: 900,
			height: 580,
			open: function()
			{
				inst.load_profile_dialog_user();
			},
			close: function()
			{
				inst.$user_profile_dialog.dialog('option', 'title', '');
			}
		});

		$('.user-profile').live('click', function()
		{
			inst.selected_user_profile = $(this).attr('data-user_id');

			if (inst.$user_profile_dialog.dialog('isOpen'))
			{
				inst.load_profile_dialog_user();
			}
			else
			{
				inst.$user_profile_dialog.dialog('open');
			}
		});

		$('.refund').live('click', function()
		{
			var $button = $(this);

			$button.html('Refunding...');

			$.post('/ajax_stripe_refund', { user_account_id: $(this).attr('data-user_account_id'), charge_id: $(this).attr('data-stripe_id') }, function(result)
			{
				inst.load_user_profile_stripe_tab(inst.selected_user_profile);
			});
		});
	},

	load_profile_dialog_user: function()
	{
		var inst = this;

		inst.$user_profile_dialog_content.html('<span id="dialog_loader" style="float:left;width:100%;height:490px;text-align:center;background:url(\'/media/images/crm/loaders/indicator-big.gif\') no-repeat center 50%"></span>');
		inst.$user_profile_dialog.dialog('option', 'title', 'Loading...');

		$.getJSON('/get_user_profile', { user_id: inst.selected_user_profile }, function(result)
		{
			if (result.data.error === '' && result.data.user)
			{
				inst.$user_profile_dialog.dialog('option', 'title', result.data.user.name);
				inst.$user_profile_dialog_content.html(result.html);

				$('#user_profile_dialog_tabs').tabs({ selected: 0 }).bind('tabsshow', function(event, ui)
				{
					if (ui.index === inst.TAB_USER_DIALOG_TRANSACTIONS)
					{
						$('#transactions_tab').html('<div style="width:100%;height:445px;text-align:center;background:url(\'/media/images/crm/loaders/indicator-big.gif\') no-repeat center 50%"></div>');

						$.getJSON('/get_user_profile_transactions', { user_id: inst.selected_user_profile }, function(result)
						{
							$('#transactions_tab').html(result.data.html);
						});
					}
					else if (ui.index === inst.TAB_USER_DIALOG_STRIPE)
					{
						inst.load_user_profile_stripe_tab(inst.selected_user_profile);
					}
					/*else if (ui.index === inst.TAB_USER_DIALOG_PHONE_CALLS)
					{
						inst.load_user_profile_phone_calls_tab(inst.selected_user_profile);
					}*/
				});

				$('#history_tabs').tabs();

				inst.TAB_USER_DIALOG_COMPLAINTS = $('#user_profile_dialog_tabs a[href="#complaints_tab"]').parent().index();
				inst.TAB_USER_DIALOG_COMMENTS = $('#user_profile_dialog_tabs a[href="#comments_tab"]').parent().index();
				inst.TAB_USER_DIALOG_STRIPE = $('#user_profile_dialog_tabs a[href="#stripe_tab"]').parent().index();
				//inst.TAB_USER_DIALOG_STATS = $('#user_profile_dialog_tabs a[href="#stats_tab"]').parent().index();
				inst.TAB_USER_DIALOG_HISTORY = $('#user_profile_dialog_tabs a[href="#history_tab"]').parent().index();
				inst.TAB_USER_DIALOG_TRANSACTIONS = $('#user_profile_dialog_tabs a[href="#transactions_tab"]').parent().index();
				//inst.TAB_USER_DIALOG_PHONE_CALLS = $('#user_profile_dialog_tabs a[href="#phone_calls_tab"]').parent().index();

				if (inst.TAB_USER_DIALOG_COMPLAINTS !== -1)
				{
					$('#user_profile_dialog_tabs ul li a').eq(inst.TAB_USER_DIALOG_COMPLAINTS).text('Complaints' + (result.data.num_complaints > 0 ? ' (' + result.data.num_complaints + ')' : ''));

					if (result.data.num_complaints === 0)
					{
						$('#user_profile_dialog_tabs').tabs('disable', inst.TAB_USER_DIALOG_COMPLAINTS);
					}
				}

				$('#user_profile_dialog_tabs ul li a').eq(inst.TAB_USER_DIALOG_COMMENTS).text('Comments' + (result.data.num_comments > 0 ? ' (' + result.data.num_comments + ')' : ''));

				if (result.data.num_comments === 0)
				{
					$('#user_profile_dialog_tabs').tabs('disable', inst.TAB_USER_DIALOG_COMMENTS);
				}

				if (inst.TAB_USER_DIALOG_HISTORY !== -1)
				{
					if ( result.data.num_regular_user_history > 0 )
					{
						$('#user_profile_dialog_tabs ul li a').eq(inst.TAB_USER_DIALOG_HISTORY).text('History' + (result.data.num_regular_user_history > 0 ? ' (' + result.data.num_regular_user_history + ')' : ''));
					}

					if (result.data.num_history === 0 && result.data.num_regular_user_history === 0)
					{
						$('#user_profile_dialog_tabs').tabs('disable', inst.TAB_USER_DIALOG_HISTORY);
					}
				}

				$('#goto_user_compalaints_tab').click(function()
				{
					$('#user_profile_dialog_tabs').tabs('select', inst.TAB_USER_DIALOG_COMPLAINTS);
				});
			}
			else
			{
				inst.$user_profile_dialog.dialog('option', 'title', 'User not found');
				inst.$user_profile_dialog_content.html('<p style="text-align:center;width:874px;height:500px;line-height:500px;font-size:.9em">' + result.data.error + '</p>');
			}
		});
	},

	add_follow_up: function(company_id)
	{
		var follow_up = $sb.ajax;
		follow_up.get('/lead_actions_add_follow_up/' + company_id, '', function(json){});
	},
	
	create_note: function(company_id)
	{
		this.note_dialog.dialog('open');
	},
	
	create_update: function(company_id)
	{
		this.update_redactor =  $('textarea#update_textarea').redactor({
					autoresize: false,
					buttons: ['formatting', '|', 'bold', 'italic', 'list', '|', 'unorderedlist', 'orderedlist', 'outdent', 'indent', '|', 'table', 'link'] 
				});
		this.update_dialog.dialog('open');
	},
		
	notifications: function()
	{
		//do a set interval on get notifications
	},
	
	manual_search: function()
	{
		this.search($('input.search_leads').val());
	},

	search: function(term)
	{
		if($sb.empty(term))
			return false;
		if($sb.crm.search_running)
			return false;
		var request = $sb.ajax;
		request.before = function() { $sb.crm.search_running = true; };
		request.post('/search', { query: term }, function(json)
		{
			if(typeof(json.html) != 'undefined')
			{
				$sb.crm._write_search_results(json.html);
			}
			$sb.crm.search_running = false;
		});
	},
	
	lead_actions_dead: function(company_id, confirmed)
	{
			var inst = this;
			if(!confirmed)
			{			
				$.alert ({ 
					type: 'confirm',
					title: 'Mark as Complete',
					text: '<p>Are you sure you want to mark this lead as dead? This action cannot be undone.</p>',
					callback: function ()
					{ 
						inst.lead_actions_dead(company_id, true); 
					}	
				});
				return;
			}
			else
			{		
				var mark = $sb.ajax;
				mark.get('/lead_actions_mark_as_dead/' + company_id);
			}		
	},
	
	lead_actions_mark_as_half_complete_level1: function(company_id, confirmed)
	{
			var inst = this;
			if(!confirmed)
			{			
				$.alert ({ 
					type: 'confirm',
					title: 'Mark as Complete',
					text: '<p>Are you sure you want to send this to Investigator 1B? This action cannot be undone.</p>',
					callback: function ()
					{ 
						inst.lead_actions_mark_as_half_complete_level1(company_id, true); 
					}	
				});
				return;
			}
			else
			{		
				var mark = $sb.ajax;
				mark.get('/lead_actions_mark_as_complete/' + company_id);
			}
	},
	
	lead_actions_mark_as_complete_level1: function(company_id, confirmed)
	{
			var inst = this;
			if(!confirmed)
			{			
				$.alert ({ 
					type: 'confirm',
					title: 'Mark as Complete',
					text: '<p>Are you sure you want to mark this lead as complete?  This action cannot be undone.</p>',
					callback: function ()
					{ 
						inst.lead_actions_mark_as_complete_level1(company_id, true); 
					}	
				});
				return;
			}
			else
			{		
				var mark = $sb.ajax;
				mark.get('/lead_actions_mark_as_complete/' + company_id);
			}
	},

	lead_actions_mark_as_dead_level_1b: function(company_id, confirmed)
	{
		var inst = this;
		if(!confirmed)
		{
			$.alert ({
				type: 'confirm',
				title: 'Mark as Dead',
				text: '<p>Are you sure you want to mark this lead as dead?  This action cannot be undone. Please select closure reason:</p><select id="select_compeletion_reason"><option value="">Select Reason for Closure</option><option value="no_business">Out of or no longer in business</option><option value="western_union">Western union scams</option><option value="craigslist">Craigslist</option><option value="dating_scam">Dating profile scams(not dating sites)</option><option value="ebay">Ebay user scams</option><option value="one_anon_complaint">Only 1 anonymous complaint leads</option><option value="duplicate_lead_consolidate">Duplicate leads that require consolidation</option><option value="duplicate_lead_co_signed_up">Duplicate leads for companies that have already signed up</option><option value="international">International scams(non us/uk/canada/australia)</option></select>',
				callback: function ()
				{
					inst.lead_actions_mark_as_dead_level_1b(company_id, true);
				}
			});

			$('#alertActions').find('button.btn-primary').hide();
			inst.binds();
			return;
		}
		else
		{
			var mark = $sb.ajax;
			var reason =  inst.compeletion_reason;
			mark.get('/lead_actions_mark_as_dead/' + company_id + '/' + reason);
		}
	},

	lead_actions_mark_as_complete_level2: function(company_id, confirmed)
	{
			var inst = this;
			if(!confirmed)
			{			
				$.alert ({ 
					type: 'confirm',
					title: 'Mark as Complete',
					text: '<p>Are you sure you want to mark this lead as complete?  This action cannot be undone.</p><select id="select_compeletion_reason"><option value="">Select Reason for Closure</option><option value="signed_up">Signed Up</option><option value="interested">Interested</option><option value="not_interested">Not Interested</option></select>',
					callback: function ()
					{ 
						inst.lead_actions_mark_as_complete_level2(company_id, true); 
					}	
				});
				
				$('#alertActions').find('button.btn-primary').hide();
				inst.binds();
				return;
			}
			else
			{		
				var mark = $sb.ajax;
				var reason =  inst.compeletion_reason;
				mark.get('/lead_actions_mark_as_complete/' + company_id + '/' + reason);
			}
	},

	lead_actions_mark_as_complete_level3: function(company_id, confirmed)
	{
			var inst = this;
			if(!confirmed)
			{			
				$.alert ({ 
					type: 'confirm',
					title: 'Mark as Complete',
					text: '<p>Are you sure you want to mark this lead as complete?  This action cannot be undone.</p><select id="select_compeletion_reason"><option value="">Select Reason for Closure</option><option value="signed_up">Signed Up</option><option value="not_interested">Not Interested</option></select>',
					callback: function ()
					{ 
						inst.lead_actions_mark_as_complete_level3(company_id, true); 
					}	
				});
				
				$('#alertActions').find('button.btn-primary').hide();
				inst.binds();
				return;
			}
			else
			{		
				var mark = $sb.ajax;
				var reason =  inst.compeletion_reason;
				mark.get('/lead_actions_mark_as_complete/' + company_id + '/' + reason);
			}
	},
	
	lead_actions_mark_as_needs_follow_up: function(company_id, confirmed)
	{
		var inst = this;
		if(!confirmed)
		{
		
			$.alert ({ 
				type: 'confirm',
				title: 'Mark as Needs Follow Up',
				text: '<p>Are you sure you want to mark this lead as "needs follow up"?  This action cannot be undone.',
				callback: function ()
				{ 
					inst.lead_actions_mark_as_needs_follow_up(company_id, true); 
				}	
			});
		}
		else
		{
			var mark = $sb.ajax;
			mark.get('/lead_actions_mark_as_needs_follow_up/' + company_id);
		}
	},

	lead_actions_mark_ready_for_mailing: function(company_id, confirmed)
	{
			var inst = this;
			if(!confirmed)
			{
				$.alert ({ 
					type: 'confirm'
					, title: 'Mark Ready for Mailing'
					, text: '<p>Are you sure you want to mark this lead as ready for mailing?  This action cannot be undone.</p>'
					, callback: function () { inst.lead_actions_mark_ready_for_mailing(company_id, true); }	
				});
				
				return;
			}
			else
			{
		
				var mark = $sb.ajax;
				mark.get('/lead_actions_mark_ready_for_mailing/' + company_id);
			}
	},
	
	lead_actions_request_more_information: function(company_id, confirmed)
	{
			var inst = this;
			if(!confirmed)
			{
				$.alert ({ 
					type: 'confirm'
					, title: 'Request More Information'
					, text: '<p>Are you sure you want to request more information from every user that created a report for this lead?  This action cannot be undone.</p>'
					, callback: function () { inst.lead_actions_request_more_information(company_id, true); }	
				});
				
				return;
			}
			else
			{
		
				var mark = $sb.ajax;
				mark.get('/lead_actions_request_more_information/' + company_id);
			}		
	},
	
	lead_actions_send_back: function(company_id, confirmed)
	{
			var inst = this;
			if(!confirmed)
			{
				$.alert ({ 
					type: 'confirm',
					title: 'Send Back to Level 1 Investigator',
					text: '<p>Are you sure you want to send this back to a Level 1 Investigator?  This action cannot be undone.</p>',
					callback: function () 
					{ 
						inst.lead_actions_send_back(company_id, true); 
					}	
				});
				
				return;
			}
			else
			{
				var mark = $sb.ajax;
				mark.get('/lead_actions_send_back/' + company_id);
			}
	},
	
	_init: function()
	{
		//setup the investigator
		this._set_investigator();
		
		//update the notifications section
		this.notifications();
		
		this.binds();
		
		//create the dialogs
		this._setup_dialogs();
		
		//remap the url variables
		this.method = $sb.controller;
		this.id = $sb.method;
		this.other_param = $sb.id;
	},	
	
	_get_notifications: function()
	{
		
	},
	
	_set_investigator: function()
	{
		if(!$sb.empty($('#crm_investigator_id').val()))
			this.investigator_id = $('#crm_investigator_id').val();
	},
	
	_save_note: function()
	{
		var save = $sb.ajax;
		var company_id = $sb.method;
		var body = $('#note_textarea').val();
		save.post('/save_note/' + company_id, { note_body: body });
	},
	
	_save_update: function()
	{
		var inst = this;
		var save = $sb.ajax;
		var company_id = $sb.method;
		var body = this.update_redactor.getCode();
		if(inst.from_follow_up)
			var url = '/save_update/' + company_id + '/' + inst.from_follow_up;
		else
			var url = '/save_update/' + company_id;
		save.post(url, { note_body: body }, function(json)	
		{
			if(inst.from_follow_up)
				inst.add_follow_up(inst.follow_up_company_id);
		});
	},
	
	_setup_dialogs: function()
	{
		var inst = this;
		this.note_dialog = $('#note_dialog');
		this.update_dialog = $('#update_dialog');
		if(!$sb.is_dialog(this.note_dialog))
		{
			this.note_dialog.dialog({
				autoOpen: false,
				width: 650,
				height: 450,				
				buttons: { 
					"Cancel": function() { $(this).dialog("close"); }, 
					"Save": function() 
						{ 
							inst._save_note();
						}
					}						
			});				
		}
		if(!$sb.is_dialog(this.update_dialog))
		{
			this.update_dialog.dialog({
				autoOpen: false,
				width: 650,
				height: 450,
				buttons: { 
					"Cancel": function() { $(this).dialog("close"); }, 
					"Save": function() 
						{ 
							inst._save_update();
						}
					}			
			});
		}
	},

	_write_search_results: function(html)
	{
		if($sb.empty(html))
			return false;

		if($('.container'))
		{
			$('#search_results').remove();
			if($('.container').find('.container-leads'))
				$('.container').find('.container-leads').remove();
			$('.container').prepend(html);					
		}
	},

	user_submitted_info: function(company_id, reassign_lead, confirmed)
	{
		var inst = this;

		if (!confirmed)
		{
			// Show confirm dialog
			$.alert({
				type: 'confirm',
				title: 'Are you sure?',
				text: '<p>Are you sure? This action will:' + (reassign_lead ? '<br>- Reassign lead to Investigator 2/3' : '') + '<br>- Put lead in top of Priority Call List</p>',
				callback: function()
				{
					inst.user_submitted_info(company_id, reassign_lead, true);
				}
			});

			return;
		}
		else
		{
			$.ajax(
			{
				url: '/ajax_user_submitted_info',
				type: 'POST',
				data: { company_id: company_id },
				dataType: 'json',
				success: function(result)
				{
					document.location = '/manage_company/' + company_id;
				}
			});
		}
	},

	load_user_profile_stripe_tab: function(user_id)
	{
		$('#stripe_tab').html('<div style="width:100%;height:445px;text-align:center;background:url(\'/media/images/crm/loaders/indicator-big.gif\') no-repeat center 50%"></div>');

		$.getJSON('/get_user_profile_stripe', { user_id: user_id }, function(result)
		{
			$('#stripe_tab').html(result.data.html);
		});
	},

	load_user_profile_phone_calls_tab: function(user_id)
	{
		$('#phone_calls_tab').html('<div style="width:100%;height:445px;text-align:center;background:url(\'/media/images/crm/loaders/indicator-big.gif\') no-repeat center 50%"></div>');

		$.getJSON('/get_user_profile_phone_calls', { user_id: user_id }, function(result)
		{
			$('#phone_calls_tab').html(result.data.html);
		});
	}
}

$sb.crm = new crm(); //instance using global scope
$(document).ready(function(){
	$sb.crm._init();
});
