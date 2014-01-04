// requires: jquery
function index() {};

index.prototype =
{	
	queue_time: 0,
	timestamp: 0,

	filter_form: null,
	
	get_complaints: function()
	{
		var inst = this;
		var request = $sb.ajax;
		request.get('/index', { time: inst.timestamp }, function(json)
		{
			if(json.data.timestamp != 'undefined')
				inst.timestamp = json.data.timestamp;
		
			if(typeof(json.html) == 'object')
			{
				//reset the queue
				inst.queue_time = 0;
				var report_ids = json.html;
				for(report_id in report_ids)
				{
					
					var list = $('ul.displays');
					var existing_report = list.find('div#report-id-' + report_id);
					var report_html = json.html[report_id];
					if(existing_report.length > 0)
						$sb.index.update_complaint(report_html, report_id, inst.queue_time);
					else
						$sb.index.new_complaint(report_html, inst.queue_time);
					inst.queue_time = inst.queue_time + 5000;													
				}
			}
		});
	},
	
	new_complaint: function(html, queue_time)
	{
		setTimeout( 
			function()
			{
				$sb.log($('ul.displays').prepend(html));			
			}
		, queue_time);
	},
	
	update_complaint: function(html, report_id, queue_time)
	{	
		setTimeout( 
			function()
			{
				$('ul.displays').find('div#report-id-' + report_id).replaceWith(html);	
				
			}
		, queue_time);

	},

	binds: function()
	{
		var inst = this;

		inst.filter_form = $('#filter_form');

		inst.filter_form.submit(function() {
			var query = '';

			// Who
			var who = '';

			if ($('#who_company').is(':checked'))
				who += '1,';

			if ($('#who_person').is(':checked'))
				who += '2,';

			if ($('#who_phone').is(':checked'))
				who += '3,';

			if (who !== '') {
				who = 'who=' + who.substring(0, who.length - 1);
			}

			// Image Content
			var image = '';

			if ($('#image').is(':checked'))
				image = 'image=1';

			// Country
			var country = '';
			var country_value = $('#country').val();

			if (country_value)
				country = 'country=' + country_value;

			// Submitted
			// From
			var submitted_from = '';
			var submitted_from_value = $('#submitted_from').val();

			if (submitted_from_value)
				submitted_from = 'submitted_from=' + submitted_from_value;

			// To
			var submitted_to = '';
			var submitted_to_value = $('#submitted_to').val();

			if (submitted_to_value)
				submitted_to = 'submitted_to=' + submitted_to_value;

			// Occurrred
			// From
			var occurred_from = '';
			var occurred_from_value = $('#occurred_from').val();

			if (occurred_from_value)
				occurred_from = 'occurred_from=' + occurred_from_value;

			// To
			var occurred_to = '';
			var occurred_to_value = $('#occurred_to').val();

			if (occurred_to_value)
				occurred_to = 'occurred_to=' + occurred_to_value;

			query = (who !== '' ? who + '&' : '') +
				(image !== '' ? image + '&' : '') +
				(country !== '' ? country + '&' : '') +
				(submitted_from !== '' ? submitted_from + '&' : '') +
				(submitted_to !== '' ? submitted_to + '&' : '') +
				(occurred_from !== '' ? occurred_from + '&' : '') +
				(occurred_to !== '' ? occurred_to + '&' : '');

			if (query !== '') {
				query = '?' + query.substring(0, query.length - 1);
			}

			window.location.replace('/browse/index/p/1' + query);

			return false;
		});
	},
	
	_init: function()
	{
		//this.timestamp = Number($('#timestamp').val());
		//get the complaints every sixty seconds, update the complaints object
		//setInterval(this.get_complaints,6000);

		this.binds();
	}
}

$sb.index = new index(); //instance using global scope
$(document).ready(function() 
{
	$sb.index._init();
});