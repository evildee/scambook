// requires: jquery
function assistances() {};

assistances.prototype =
{	
	//pagination variable
	tbody_id: 'assistances_tbody',
	assistances_tbody_selector: $('#assistances_tbody'),
	assistances_pagination_id: 'pagination_container',
	assistances_pagination_selector: $('#pagination_container'),
	current_page: 1,

	// sorting
	sort_by: 'assistances.id',
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
		
		//manage assistance dialog
		$('.assistance_dialog').unbind('click');
		$('.assistance_dialog').bind('click', function(event)
		{
			event.preventDefault();
			inst.open_assistance_dialog($(this).attr('data-assistance_id'));
		});
		
		$('#manage_assistance_form').live('submit', function() {
			var id = $('#assistance_id').val();
			
			var request = $sb.ajax;
			request.async = false;
			request.post('/assistance_ajax', { 'id': id, 'contact_status': $('#contact_status').val(), 'note': $('#form_note_textarea').val() }, function(json)
			{
				if (json.success) {
					// update note icon
					var note_length = $('#form_note_textarea').val().length;
					$('#note_' + id).html(note_length > 0 ? '<img src="/media/images/crm/silk/note.png" alt="" title="Note">' : '');
					
					// update contact status
					$('#contact_status_' + id).html($('#contact_status').val());
					
					$('#assistance_dialog').dialog('close');
				} else {
					alert('Something went wrong!');
				}
			});
			
			return false;
		});
		
		$('#show_only_with_phone').unbind('click').click(function() {
			inst.show_only_with_phone = $(this).is(':checked');
			
			var view = (!$sb.empty($sb.crm.other_param)) ? '/' + $sb.crm.other_param : '';
			
			inst.refreshAssistances(view);
		});

        $('input.search_term').die();
        $('input.search_term').keyup(function(e)
        {
            e.preventDefault();
            inst.search_term = $(this).val();
        });

	},

	open_assistance_dialog: function(assistance_id)
	{
		var dialog = $('#assistance_dialog');
		if(!$sb.is_dialog(dialog))
		{
			$(dialog).dialog({
				autoOpen: false,
				modal: true
			});
		}
		
		var request = $sb.ajax;
		request.get('/assistance/' + assistance_id, null, function(json)
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
			
		var page_number = jqInst.attr('data-page_number');
		
		this.current_page = page_number;
		
		var view = (!$sb.empty($sb.crm.other_param)) ? '/' + $sb.crm.other_param : '';
		
		if(!$sb.empty(page_number))
		{
			this.refreshAssistances(view);
		}
	},
	
	sort: function(sort_by)
	{
		var inst = this;
		
		// stop if a request is running
		if (inst.loading) {
			return;
		}
		
		this.loading = true;
		
		var view = (!$sb.empty($sb.crm.other_param)) ? '/' + $sb.crm.other_param : '';
		
		// change sorting
		this.sort_by = sort_by;
		this.sort_order = (this.sort_order !== 'DESC') ? 'DESC' : 'ASC';
		
		this.refreshAssistances(view);
	},
	
	_write_pagination: function(html)
	{
		this.assistances_pagination_selector.empty();
		this.assistances_pagination_selector.append(html);
	},
	
	_write_tbody_results: function(html)
	{
		this.assistances_tbody_selector.empty();
		this.assistances_tbody_selector.append(html);		
	},
	
	_init: function()
	{
		this.binds();

		this.search_term = $('input.search_term').val();
	},
	
	refreshAssistances: function(view)
	{
		var inst = this;
		
		inst._write_tbody_results('<tr><td colspan="11"><div class="loader"></div></td></tr>');
		
		if (!view)
			view = '';
		
		var request = $sb.ajax;
		request.async = false;
		
		request.get('/assistances/' + inst.current_page + view + '?sort_by=' + inst.sort_by + '&sort_order=' + inst.sort_order + '&show_only_with_phone=' + inst.show_only_with_phone + '&search_term=' + inst.search_term, null, function(json)
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

$sb.crm.assistances = new assistances(); //instance using global scope
$(document).ready(function() 
{
	$sb.crm.assistances._init();  
});
