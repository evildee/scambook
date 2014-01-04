// requires: jquery
function leads() {};

leads.prototype =
{	
	//pagination variable
	tbody_id: 'leads_tbody',
	leads_tbody_selector: $('#leads_tbody'),
	leads_pagination_id: 'pagination_container',
	leads_pagination_selector: $('#pagination_container'),
	current_page: 1,
	loading: false,

  // sorting
  sort_by: 'company_leads.latest_report_submitted',
  sort_order: 'DESC',

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
		//sort	
		$('a.sort').unbind('click');
		$('a.sort').bind('click', function(event)
		{
			event.preventDefault();
			var sort_field = this.dataset.sort_field;
			inst.sort(sort_field);
		});
		$('#pagination_container_v2').unbind('click');
		$('#pagination_container_v2').bind('click', function(event)
		{
			document.location = '/priority';
		});




	},

	page: function(jqInst)
	{
		var inst = this;

		if($sb.empty(jqInst))
			return false;
			
		var page_number = jqInst.attr('data-page_number');

		this.current_page = page_number;

		var status = '';
		if(!$sb.empty($sb.crm.other_param))
			status = '/' + $sb.crm.other_param;
		
		if(!$sb.empty(page_number))
		{
			// force the start of url get parameters
			var query = '?a';
			if(!$sb.empty($sb.query))
				query = $sb.query;
			var request = $sb.ajax;
			
			inst._write_tbody_results('<tr><td colspan="7"><div class="loader"></div></td></tr>');
			request.async = false;

			request.get('/leads/' + page_number + status + query + '&sort_by=' + this.sort_by + '&sort_order=' + this.sort_order, null, function(json)
			{
				if(typeof(json.html.results) != 'undefined')
					inst._write_tbody_results(json.html.results);
			
				if(typeof(json.html.pagination) != 'undefined')
					inst._write_pagination(json.html.pagination);
					
				inst.binds();
			});
		}
	},

	sort: function(sort_by)
	{
		var inst = this;

		if(inst.loading)
			return false;

		this.loading = true;

		var status = '';
		if(!$sb.empty($sb.crm.other_param))
			status = '/' + $sb.crm.other_param;

		// force the start of url get parameters
		var query = '?a';
		if(!$sb.empty($sb.query))
			query = $sb.query;

		var view = (!$sb.empty($sb.crm.other_param)) ? '/' + $sb.crm.other_param : '';
		this.sort_by = sort_by;
		this.sort_order = (this.sort_order !== 'DESC') ? 'DESC' : 'ASC';

		inst._write_tbody_results('<tr><td colspan="7"><div class="loader"></div></td></tr>');

		var request = $sb.ajax;
		request.async = false;

		request.get('/leads/' + this.current_page + status + query + '&sort_by=' + this.sort_by + '&sort_order=' + this.sort_order, null, function(json)
		{
			if (typeof(json.html.results) !== 'undefined')
			{
			  inst._write_tbody_results(json.html.results);
			}

			if (typeof(json.html.pagination) !== 'undefined')
			{
			  inst._write_pagination(json.html.pagination);
			}

			inst.binds();

			inst.loading = false;
		});
	},
	
	_write_pagination: function(html)
	{
		this.leads_pagination_selector.empty();
		this.leads_pagination_selector.append(html);
	},
	
	_write_tbody_results: function(html)
	{
		this.leads_tbody_selector.empty();
		this.leads_tbody_selector.append(html);		
	},
	
	_init: function()
	{
		this.binds();
	},
}

$sb.crm.leads = new leads(); //instance using global scope
$(document).ready(function() 
{
	$sb.crm.leads._init();  
});
