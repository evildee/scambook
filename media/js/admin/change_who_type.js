function change_who_type() {};

change_who_type.prototype = {
	show_filter: 'all',
	
	page: 1,
	
	show_filter_container: null,
	tbody: null,
	tfoot_td: null,
	
	colspan: 0,
	
	is_saving: false,

	$paging_text: null,
	
	init: function() {
		this.binds();
		
		this.refreshReports();
	},
	
	binds: function() {
		var inst = this;
		
		$('input[name=show_filter]').click(function(e) {
			inst.show_filter = e.target.value;
			
			inst.refreshReports();
		});
		
		inst.show_filter_container = $('#show_filter_container');
		inst.tbody = $('#change_who_type_table tbody');
		inst.tfoot_td = $('#change_who_type_table tfoot td');

		inst.$paging_text = $('#paging_text');
		
		inst.colspan = inst.tfoot_td.attr('colspan');
		
		$('.who-type-radio').live('change', function(e)
		{
			var report_id = $(this).attr('data-report_id');
			var selected_who_type_id = e.target.value;
			
			inst.saveReport(report_id, selected_who_type_id);
		});
		
		$('.paging-item').live('click', function()
		{
			var page = $(this).attr('data-page');
			
			inst.page = page;
			
			inst.refreshReports();
		});

		// batch save
		$("#new_who_type_bulk_save").click(function() {
			var new_who_type_id = $("select[name='new_who_type']").val();
			inst.bulkChangeWhoType(new_who_type_id);
		});
	},
	
	refreshReports: function() {
		var inst = this;

		inst.$paging_text.html('Loading...');
		inst.tbody.html('<tr><td colspan="' + inst.colspan + '"><div class="loader"></div></td></tr>');
		
		inst.tfoot_td.html('');
		
		var request = $sb.ajax;
		request.async = false;
		
		request.get('/admin/change_who_type', { 'show_filter': inst.show_filter, 'page': inst.page }, function(json)
		{
			inst.tbody.html(json.html);
			
			inst.tfoot_td.html(json.data.pagination);

			inst.$paging_text.html(json.data.paging_text);
		});
	},
	
	saveReport: function(report_id, new_who_type_id)
	{
		var inst = this;
		
		inst.is_saving = true;
		
		// Disable while saving
		inst.show_filter_container.find('*').attr('disabled', true);
		
		var radio_container = $('#radio_container_' + report_id);
		radio_container.find('*').attr('disabled', true);
		
		var status_message = $('#status_message_' + report_id);
		status_message.html('Saving...');
		
		var request = $sb.ajax;
		request.async = false;
		
		var batch_who_type_save_button = $("#new_who_type_bulk_save");
		batch_who_type_save_button.attr('disabled', true);
		
		request.post('/admin/save_who_type', { 'report_id': report_id, 'new_who_type_id': new_who_type_id }, function(json)
		{
			// Enable when saving is done
			inst.show_filter_container.find('*').removeAttr('disabled');

			radio_container.find('*').removeAttr('disabled');
			
			status_message.html('');
			
			batch_who_type_save_button.attr('disabled', false);
			
			inst.is_saving = false;
		});
	},
	
	bulkChangeWhoType: function(who_type_id) {
		var inst = this; 
		var reports_to_save = [];
		
		// uncheck all the radio buttons
		$(".who-type-radio:checked").each(function() { 
			$(this).removeAttr('checked');  
		});
		
		$("input.who-type-radio[value='"+who_type_id+"']").each(function(){
			$(this).attr('checked','checked');
			
			var report = {};
			report.id = $(this).data('report_id');
			reports_to_save.push(report);
		});
		
		// save the reports 
		inst.saveReports(reports_to_save, who_type_id);
	},

	// batch save
	saveReports: function(reports, who_type_id) { 
		var inst = this;
		
		inst.is_saving = true;
		
		// Disable while saving
		inst.show_filter_container.find('*').attr('disabled', true);
		
		var batch_who_type_save_button = $("#new_who_type_bulk_save");
		batch_who_type_save_button.attr('disabled', true);
	
		var radio_container = $('[id^=radio_container]');
		radio_container.find('*').attr('disabled', true);
		
		var status_message = $('.status-message');
		status_message.html('Saving...');
		
		var request = $sb.ajax;
		request.async = false;

		request.post('/admin/batch_save_who_type', { 'reports' : reports, 'who_type_id': who_type_id}, function(json)
		{
			// Enable when saving is done
			inst.show_filter_container.find('*').removeAttr('disabled');
			
			radio_container.find('*').removeAttr('disabled');
			status_message.html('');
			
			batch_who_type_save_button.attr('disabled', false);
			
			inst.is_saving = false;
		});
	}
};

$(document).ready(function() {
	$sb.change_who_type = new change_who_type();
	$sb.change_who_type.init();
});