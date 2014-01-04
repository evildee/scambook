// requires: jquery
function resolutions() {};

resolutions.prototype =
{	
	//pagination variable
	tbody_id: 'resolutions_tbody',
	resolutions_tbody_selector: $('#resolutions_tbody'),
	resolutions_pagination_id: 'pagination_container',
	resolutions_pagination_selector: $('#pagination_container'),
	current_page: 1,
	
	// sorting
	sort_by: 'resolutions.id',
	sort_order: 'DESC',
	
	// filter
	show_only_with_phone: false,
	search_term: '',
	
	loading: false,

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

		//manage resolution dialog
		$('.resolution_dialog').unbind('click');
		$('.resolution_dialog').bind('click', function(event)
		{
			event.preventDefault();
			inst.open_resolution_dialog($(this).attr('data-resolution_id'));
		});
		
		$('#manage_resolution_form').live('submit', function() {
			var id = $('#resolution_id').val();
			
			var request = $sb.ajax;
			request.async = false;
			request.post('/resolution_ajax', { 'id': id, 'contact_status': $('#contact_status').val(), 'note': $('#form_note_textarea').val() }, function(json)
			{
				if (json.success) {
					// update note icon
					var note_length = $('#form_note_textarea').val().length;
					$('#note_' + id).html(note_length > 0 ? '<img src="/media/images/crm/silk/note.png" alt="" title="Note">' : '');
					
					// update contact status
					$('#contact_status_' + id).html($('#contact_status').val());
					
					$('#resolution_dialog').dialog('close');
				} else {
					alert('Something went wrong!');
				}
			});
			
			return false;
		});
		
		$('#show_only_with_phone').unbind('click').click(function() {
			inst.show_only_with_phone = $(this).is(':checked');
			
			var view = (!$sb.empty($sb.crm.other_param)) ? '/' + $sb.crm.other_param : '';
			
			inst.refreshResolutions(view);
		});

        $('input.search_term').die();
        $('input.search_term').keyup(function(e)
        {
            e.preventDefault();
            inst.search_term = $(this).val();
        });
	},

	open_resolution_dialog: function(resolution_id)
	{
		var dialog = $('#resolution_dialog');
		if(!$sb.is_dialog(dialog))
		{
			$(dialog).dialog({
				autoOpen: false,
				modal: true
			});
		}
		
		var request = $sb.ajax;
		request.get('/resolution/' + resolution_id, null, function(json)
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
		
		// stop if a request is running
		if (inst.loading) {
			return;
		}
		
		this.loading = true;

		if ($sb.empty(jqInst))
			return;
		
		// change page number
		var page_number = jqInst.attr('data-page_number');
		this.current_page = page_number;
		
		var view = (!$sb.empty($sb.crm.other_param)) ? '/' + $sb.crm.other_param : '';
		
		if (!$sb.empty(page_number))
		{
			this.refreshResolutions(view);
		}
	},
	
	sort: function(sort_by)
	{
		var inst = this;
		
		if (inst.loading) {
			return;
		}
		
		this.loading = true;
		
		var view = (!$sb.empty($sb.crm.other_param)) ? '/' + $sb.crm.other_param : '';
		
		// change sorting
		this.sort_by = sort_by;
		this.sort_order = (this.sort_order !== 'DESC') ? 'DESC' : 'ASC';
		
		this.refreshResolutions(view);
	},
	
	_write_pagination: function(html)
	{
		this.resolutions_pagination_selector.empty();
		this.resolutions_pagination_selector.append(html);
	},
	
	_write_tbody_results: function(html)
	{
		this.resolutions_tbody_selector.empty();
		this.resolutions_tbody_selector.append(html);		
	},
	
	_init: function()
	{
		this.binds();

        this.search_term = $('input.search_term').val();
	},
	
	refreshResolutions: function(view)
	{
		var inst = this;
		
		inst._write_tbody_results('<tr><td colspan="11"><div class="loader"></div></td></tr>');

		var request = $sb.ajax;
		request.async = false;
		
		if (!view)
			view = '';
		
		request.get('/resolutions/' + inst.current_page + view + '?sort_by=' + inst.sort_by + '&sort_order=' + inst.sort_order + '&show_only_with_phone=' + inst.show_only_with_phone + '&search_term=' + inst.search_term, null, function(json)
		{
			if (typeof(json.html.results) !== 'undefined')
				inst._write_tbody_results(json.html.results);
			
			if (typeof(json.html.pagination) !== 'undefined')
				inst._write_pagination(json.html.pagination);
			
			inst.binds();
			
			inst.loading = false;
		});
	}
}

$sb.crm.resolutions = new resolutions(); //instance using global scope
$(document).ready(function() 
{
	$sb.crm.resolutions._init();  
});
