function Live() {}

Live.prototype =
{
	refresh_timer: null,

	filter_reports: false,
	filter_comments: false,
	filter_flags_votes: false,
	filter_follow_ups: false,
	filter_compliance_investigator: false,
	filter_accounts: false,
	filter_logins: false,
	filter_only_me: false,

	table_ajax_request: null,

	$table: null,

	_init: function()
	{
		this.binds();

		this.refresh();
	},

	binds: function()
	{
		var inst = this;

		inst.$table = $('#live_table');

		// Filter
		/*inst.filter_reports = $('#filter_reports').is(':checked');
		inst.filter_comments = $('#filter_comments').is(':checked');
		inst.filter_flags_votes = $('#filter_flags_votes').is(':checked');
		inst.filter_follow_ups = $('#filter_follow_ups').is(':checked');
		inst.filter_compliance_investigator = $('#filter_compliance_investigator').is(':checked');
		inst.filter_accounts = $('#filter_accounts').is(':checked');
		inst.filter_logins = $('#filter_logins').is(':checked');
		inst.filter_only_me = $('#filter_only_me').is(':checked');*/

		inst.filter_reports = true;
		inst.filter_comments = true;
		inst.filter_flags_votes = true;
		inst.filter_follow_ups = true;
		inst.filter_compliance_investigator = true;
		inst.filter_accounts = true;
		inst.filter_logins = true;
		inst.filter_only_me = false;

		$('#filter_form input[type="checkbox"], #filter_only_me').click(function(e)
		{
			var id = e.target.id;

			if (id === 'filter_reports')
			{
				inst.filter_reports = e.target.checked;
			}
			else if (id === 'filter_comments')
			{
				inst.filter_comments = e.target.checked;
			}
			else if (id === 'filter_flags_votes')
			{
				inst.filter_flags_votes = e.target.checked;
			}
			else if (id === 'filter_follow_ups')
			{
				inst.filter_follow_ups = e.target.checked;
			}
			else if (id === 'filter_compliance_investigator')
			{
				inst.filter_compliance_investigator = e.target.checked;
			}
			else if (id === 'filter_accounts')
			{
				inst.filter_accounts = e.target.checked;
			}
			else if (id === 'filter_logins')
			{
				inst.filter_logins = e.target.checked;
			}
			else if (id === 'filter_only_me')
			{
				inst.filter_only_me = e.target.checked;
			}

			inst.refresh();
		});

		// Auto-refresh
		$('#auto_refresh').click(function(e)
		{
			if (e.target.checked)
			{
				// Start timer
				inst.refresh_timer = setInterval(inst.refresh, 10000);
			}
			else
			{
				// Stop timer
				clearInterval(inst.refresh_timer);
			}
		});
	},

	refresh: function()
	{
		var inst = $sb.crm.Live;

		if (inst.table_ajax_request !== null)
		{
			inst.table_ajax_request.abort();
		}

		inst.$table.html('<tr><td id="live_table_loader"></td></tr>');

		inst.table_ajax_request = $.getJSON('/ajax_get_live',
		{
			filter_reports: inst.filter_reports ? 1 : 0,
			filter_comments: inst.filter_comments ? 1 : 0,
			filter_flags_votes: inst.filter_flags_votes ? 1 : 0,
			filter_follow_ups: inst.filter_follow_ups ? 1 : 0,
			filter_compliance_investigator: inst.filter_compliance_investigator ? 1 : 0,
			filter_accounts: inst.filter_accounts ? 1 : 0,
			filter_logins: inst.filter_logins ? 1 : 0,
			filter_only_me: inst.filter_only_me ? 1 : 0
		},
		function(result)
		{
			inst.$table.html(result.data.html);
		}).fail(function()
		{
			inst.$table.html('<tr><td id="live_table_failure">Could not load data.</td></tr>');
		});
	}
};

$sb.crm.Live = new Live();

$(document).ready(function()
{
	$sb.crm.Live._init();
});