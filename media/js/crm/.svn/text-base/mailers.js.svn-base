// requires: jquery
function mailers() {};

mailers.prototype =
{	
	//pagination variable
	tbody_id: 'mailers_tbody',
	mailers_tbody_selector: $('#mailers_tbody'),
	mailers_pagination_id: 'pagination_container',
	mailers_pagination_selector: $('#pagination_container'),

	current_page_button: $('.dataTables_paginate a:eq(0)'),

	binds: function()
	{	
		var inst = this;
		
		//pagination paging button
		$('.page_button').unbind('click');
		$('.page_button').bind('click', function(event)
		{
			inst.current_page_button = $(this);

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

		// Hide mailer button
		$('.hide-mailer').unbind('click');
		$('.hide-mailer').bind('click', function()
		{
			var id = $(this).attr('data-mailer_id');
			var company_name = $(this).attr('data-company_name');

			inst.hide_from_mailer(id, company_name, false);
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
		if (!page_number)
			page_number = '1';

		var status = '';
		if(!$sb.empty($sb.crm.other_param))
			status = '/' + $sb.crm.other_param;

		if(!$sb.empty(page_number))
		{
			var request = $sb.ajax;
			request.async = false;
			request.get('/mailers/' + page_number + status, null, function(json)
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
		this.mailers_pagination_selector.empty();
		this.mailers_pagination_selector.append(html);
	},
	
	_write_tbody_results: function(html)
	{
		this.mailers_tbody_selector.empty();
		this.mailers_tbody_selector.append(html);		
	},
	
	_init: function()
	{
		this.binds();
	},

	hide_from_mailer: function(id, company_name, confirmed)
	{
		var inst = this;

		if (!confirmed)
		{
			$.alert({
				type: 'confirm',
				title: 'Are you sure?',
				text: '<p>Are you sure you want to hide "' + company_name + '"?</p>',
				callback: function()
				{
					inst.hide_from_mailer(id, company_name, true);
				}
			});

			return;
		}
		else
		{
			$sb.ajax.post('/hide_from_mailer', { id: id }, function()
			{
				$('#mailer_' + id).fadeOut(function()
				{
					inst.page(inst.current_page_button);
				});
			});
		}
	}
}

$sb.crm.mailers = new mailers(); //instance using global scope
$(document).ready(function() 
{
	$sb.crm.mailers._init();  
});