var MIN_ZOOM_LEVEL_TO_SHOW_MARKERS = 4,
	report_markers = [], comment_markers = [],
	timer = null,
	map = null,
	info_window = null;

function init()
{
	map = new google.maps.Map(document.getElementById('map'),
	{
		center: new google.maps.LatLng(0, 0),
		zoom: 2,
		minZoom: 2,
		maxZoom: 8,
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
	}),
		heatmap = null;

	google.maps.event.addListener(map, 'click', function()
	{
		if (info_window === null)
		{
			return;
		}

		info_window.setMap(null);
	});

	google.maps.event.addListener(map, 'zoom_changed', function()
	{
		var zoom_level = map.getZoom();

		if (zoom_level >= MIN_ZOOM_LEVEL_TO_SHOW_MARKERS)
		{
			for (var i = 0, num_markers = report_markers.length; i < num_markers; i++)
			{
				report_markers[i].setMap(map);
			}

			for (var i = 0, num_markers = comment_markers.length; i < num_markers; i++)
			{
				comment_markers[i].setMap(map);
			}

			if (heatmap !== null)
			{
				heatmap.setMap(null);
			}
		}
		else
		{
			for (var i = 0, num_markers = report_markers.length; i < num_markers; i++)
			{
				report_markers[i].setMap(null);
			}

			for (var i = 0, num_markers = comment_markers.length; i < num_markers; i++)
			{
				comment_markers[i].setMap(null);
			}

			if (heatmap !== null)
			{
				heatmap.setMap(map);
			}
		}
	});

	get_positions();

	timer = setInterval(function()
	{
		get_positions();
	}, 60000);
}

function get_positions()
{
	show_status_message('Loading...');

	$.getJSON('/ajax/get_heatmap', {}, function(data)
	{
		$('#status_message').fadeOut('fast');

		positions_receieved(data);
	});
}

function show_status_message(message, duration)
{
	duration = duration || 0;

	$status_message = $('#status_message');
	$status_message.html(message).fadeIn('fast');

	if (duration > 0)
	{
		$status_message.delay(1500).queue(function(n)
		{
			$(this).fadeOut('fast');
			n();
		});
	}
}

function marker_exists(position)
{
	for (var i = 0, num_markers = report_markers.length; i < num_markers; i++)
	{
		var marker = report_markers[i];

		if (marker.position.lb === position.lb && marker.position.mb === position.mb)
		{
			return i;
		}
	}

	return -1;
}

function positions_receieved(data)
{
	var zoom_level = map.getZoom();

	// Remove previous heatmap
	if (heatmap !== null)
	{
		heatmap.setMap(null);
	}

	// Remove previous markers
	for (var i = 0, num_markers = report_markers.length; i < num_markers; i++)
	{
		report_markers[i].setMap(null);
	}

	for (var i = 0, num_markers = comment_markers.length; i < num_markers; i++)
	{
		comment_markers[i].setMap(null);
	}

	report_markers = [];
	comment_markers = [];

	var heatmap_data = [];

	info_window = new google.maps.InfoWindow(
	{
		content: 'Loading...'
	});

	// Reports
	for (var i = 0, num_positions = data.reports.length; i < num_positions; i++)
	{
		var report = data.reports[i],
			report_position = new google.maps.LatLng(report.lat, report.lng);

		heatmap_data.push(report_position);

		var html = '<div class="inner"><p style="margin:0"><strong>Company:</strong> ' + report.company_title + ' <strong style="margin-left:5px">Location:</strong> ' + (report.country_iso !== '' ? '<img src="/media/images/crm/flags/' + report.country_iso + '" width="16" height="11" alt=""> ' : '') + report.location + '</p><p style="font-style:italic;font-size:.9em;margin:2px 0 5px">Submitted by ' + report.user_name + ' at ' + report.submitted + '</p>' + '<p style="margin:0 0 5px">' + report.details + '</p>' + '<a href="/report/view/' + report.id + '" target="_blank">Go to complaint</a></div>',
			title = '#' + report.company_id + ' - ' + report.company_title;

		// If marker at exact same position exists, append its html
		var marker_exists_index = marker_exists(report_position);

		if (marker_exists_index !== -1)
		{
			report_markers[marker_exists_index].html += '<hr>' + html;
			report_markers[marker_exists_index].title += "\n" + title,
			report_markers[marker_exists_index].num += 1;
			report_markers[marker_exists_index].setIcon('http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=' + report_markers[marker_exists_index].num + '|F75A45|5C150C');
		}
		else
		{
			var marker = new google.maps.Marker(
			{
				position: report_position,
				map: zoom_level >= MIN_ZOOM_LEVEL_TO_SHOW_MARKERS ? map : null,
				title: title,
				clickable: true,
				html: html,
				num: 1
			});

			google.maps.event.addListener(marker, 'click', function()
			{
				info_window.setContent(this.html);
				info_window.open(map, this);
			});

			report_markers.push(marker);
		}
	}

	// Comments
	for (var i = 0, num_comments = data.comments.length; i < num_comments; i++)
	{
		var comment = data.comments[i],
			comment_position = new google.maps.LatLng(comment.lat, comment.lng);

		var marker = new google.maps.Marker(
		{
			icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=C|505EC4',
			position: comment_position,
			map: zoom_level >= MIN_ZOOM_LEVEL_TO_SHOW_MARKERS ? map : null,
			title: '#' + comment.company_id + ' - ' + comment.company_title,
			clickable: true,
			html: '<div class="inner"><p style="margin:0"><strong>Company:</strong> ' + comment.company_title + ' <strong style="margin-left:5px">Location:</strong> ' + (comment.country_iso !== '' ? '<img src="/media/images/crm/flags/' + comment.country_iso + '" width="16" height="11" alt=""> ' : '') + comment.location + '</p><p style="font-style:italic;font-size:.9em;margin:2px 0 5px">Commented by ' + comment.user_name + ' at ' + report.submitted + '</p>' + '<p style="margin:0 0 5px">' + comment.body + '</p>' + '<a href="/report/view/' + comment.report_id + '" target="_blank">Go to complaint</a></div>'
		});

		google.maps.event.addListener(marker, 'click', function()
		{
			info_window.setContent(this.html);
			info_window.open(map, this);
		});

		comment_markers.push(marker);
	}

	heatmap = new google.maps.visualization.HeatmapLayer(
	{
		data: heatmap_data,
		radius: 15
	});

	if (zoom_level < MIN_ZOOM_LEVEL_TO_SHOW_MARKERS)
	{
		heatmap.setMap(map);
	}

	google.maps.event.trigger(map, 'resize');
}

google.maps.event.addDomListener(window, 'load', init);