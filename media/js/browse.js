function browse() {};

browse.prototype =
{
	pre_url: '',

	filter_form: null,

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

			if (country_value !== '')
				country = 'country=' + country_value;

			// Submitted
			// From
			var submitted_from = '';
			var submitted_from_value = $('#submitted_from').val();

			if (submitted_from_value !== '')
				submitted_from = 'submitted_from=' + submitted_from_value;

			// To
			var submitted_to = '';
			var submitted_to_value = $('#submitted_to').val();

			if (submitted_to_value !== '')
				submitted_to = 'submitted_to=' + submitted_to_value;

			// Occurrred
			// From
			var occurred_from = '';
			var occurred_from_value = $('#occurred_from').val();

			if (occurred_from_value !== '')
				occurred_from = 'occurred_from=' + occurred_from_value;

			// To
			var occurred_to = '';
			var occurred_to_value = $('#occurred_to').val();

			if (occurred_to_value !== '')
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

			inst.pre_url = inst.pre_url.replace('active', 'index');
			inst.pre_url = inst.pre_url.replace('trending', 'index');

			//console.log('/browse/index/p/1' + query);
			//return false;

			//window.location.replace(inst.pre_url + (inst.pre_url.slice(-6) !== '/index' ? '/index' : '') + '/p/1' + query);
			window.location.replace('/browse/index/p/1' + query);

			return false;
		});
	},

	_init: function(pre_url, read_query_string)
	{
		var inst = this;

		inst.pre_url = pre_url;

		inst.binds();

		if (read_query_string)
		{
			var query_string = this.getQueryString();

			var who = query_string['who'];

			if (who)
			{
				var who_splitted = who.split(',');

				for (var i = 0, num_who = who_splitted.length; i < num_who; i++)
				{
					if (who_splitted[i] === '1')
					{
						$('#who_company').attr('checked', true);
					}
					else if (who_splitted[i] === '2')
					{
						$('#who_person').attr('checked', true);
					}
					else if (who_splitted[i] === '3')
					{
						$('#who_phone').attr('checked', true);
					}
				}
			}

			if (query_string['image'] === '1')
				$('#image').attr('checked', true);

			var country = query_string['country'];

			if (country)
				$('#country').val(country);

			var submitted_from = query_string['submitted_from'];

			if (submitted_from)
				$('#submitted_from').val(submitted_from);

			var submitted_to = query_string['submitted_to'];

			if (submitted_to)
				$('#submitted_to').val(submitted_to);

			var occurred_from = query_string['occurred_from'];

			if (occurred_from)
				$('#occurred_from').val(occurred_from);

			var occurred_to = query_string['occurred_to'];

			if (query_string['occurred_to'])
				$('#occurred_to').val(occurred_to);
		}
	},

	getQueryString: function(key)
	{
		var params = {}, tmp_params = {}, queries, split;
		var decode = function(s) { return decodeURIComponent(s.replace(/\+/g, ' ')); };

		queries = location.search.substring(1).split('&');

		for (var i = 0, num = queries.length; i < num; i++)
		{
			split = queries[i].split('=');

			if (split.length === 2)
				params[decode(split[0])] = decode(split[1]);
		}

		return params;
	}
}