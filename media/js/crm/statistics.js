// requires: jquery
function statistics() {};

statistics.prototype =
{	
	//pagination variable
	tbody_id: 'statistics_tbody',
	statistics_tbody_selector: $('#statistics_tbody'),
	statistics_pagination_id: 'pagination_container',
	statistics_pagination_selector: $('#pagination_container'),

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
	},

	page: function(jqInst)
	{
		var inst = this;

		if($sb.empty(jqInst))
			return false;
			
		var page_number = jqInst.attr('data-page_number');	
		if(!$sb.empty(page_number))
		{
			if(!$sb.empty($sb.query))
				var query = $sb.query + '&page=' + page_number;
			else
				var query = 'page=' + page_number;
			var final_query = query.replace('?', '');
			var request = $sb.ajax;
			request.async = false;
			request.get('/statistics', final_query, function(json)
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
		this.statistics_pagination_selector.empty();
		this.statistics_pagination_selector.append(html);
	},
	
	_write_tbody_results: function(html)
	{
		this.statistics_tbody_selector.empty();
		this.statistics_tbody_selector.append(html);		
	},
	
	_init: function()
	{
		this.binds();
	},
}

$sb.crm.statistics = new statistics(); //instance using global scope
$(document).ready(function() 
{
	$sb.crm.statistics._init();  
});