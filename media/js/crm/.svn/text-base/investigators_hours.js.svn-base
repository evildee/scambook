// requires: jquery
function investigators_hours() {};

investigators_hours.prototype =
{	
	//pagination variable
	tbody_id: 'investigators_hours_tbody',
	investigators_hours_tbody_selector: $('#investigators_hours_tbody'),
	investigators_hours_pagination_id: 'pagination_container',
	investigators_hours_pagination_selector: $('#pagination_container'),

	binds: function()
	{	
		var inst = this;
		
		//pagination paging button
		$('.page_button').unbind('click');
		$('.page_button').bind('click', function(event)
		{
			event.preventDefault();
			inst.page($(this));
		});
		
		//manage mailer dialog
		$('.mailer_dialog').unbind('click');
		$('.mailer_dialog').bind('click', function(event)
		{
			event.preventDefault();
			inst.open_mailer_dialog($(this).attr('data-mailer_id'));
		});
	},

	open_mailer_dialog: function(mailer_id)
	{
		var dialog = $('#mailer_dialog');
		if(!$sb.is_dialog(dialog))
		{
			$(dialog).dialog({
				autoOpen: false,
				modal: true
			});
		}
		
		var request = $sb.ajax;
		request.get('/mailer/' + mailer_id, null, function(json)
		{
			if(typeof(json.html) != 'undefined')
			{
				$(dialog).empty();
				$(dialog).append(json.html);
				$(dialog).dialog('open');
			}
		});
	},

	page: function(jqInst)
	{
		var inst = this;

		if($sb.empty(jqInst))
			return false;
			
		var page_number = jqInst.attr('data-page_number');
		var status = '';
		if(!$sb.empty($sb.crm.other_param))
			status = '/' + $sb.crm.other_param;
		
		if(!$sb.empty(page_number))
		{
			var request = $sb.ajax;
			request.async = false;
			request.get('/investigators_hours/' + page_number + status, null, function(json)
			{
				if(typeof(json.html.results) != 'undefined')
					inst._write_tbody_results(json.html.results);
			
				if(typeof(json.html.pagination) != 'undefined')
					inst._write_pagination(json.html.pagination);
					
				inst.binds();
			});
		}
	},
	
	sort: function()
	{
		
	},
	
	_write_pagination: function(html)
	{
		this.investigators_hours_pagination_selector.empty();
		this.investigators_hours_pagination_selector.append(html);
	},
	
	_write_tbody_results: function(html)
	{
		this.investigators_hours_tbody_selector.empty();
		this.investigators_hours_tbody_selector.append(html);		
	},
	
	_init: function()
	{
		this.binds();
	}
}

$sb.crm.investigators_hours = new investigators_hours(); //instance using global scope
$(document).ready(function() 
{
	$sb.crm.investigators_hours._init();  
});