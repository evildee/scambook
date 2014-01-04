// requires: jquery
function note() {};

note.prototype =
{
	company_id: 0,
	callback: function(){},
	company_note_id: 'company_note_dialog',
		
	_init: function()
	{
		//load the external assets
		this._load_assets();			
		//bind stuff
		this.binds();
	},
	
	binds: function()
	{
		var inst = this;
		if($sb.controller == 'dashboard')
		{
			$('.add-company-note').unbind('click');
			$('.add-company-note').bind('click', function()
			{
				var company_id = $(this).attr('data-company_id');
				inst.open(company_id);
			});			
		}
	},
	
	open: function(company_id)
	{	
		//create the div
		this._create_div();
		inst = this;
		this.company_id = company_id;
		var open = $sb.ajax;
		open.get('/company/note/' + company_id, '', function(json)
		{
			if(!$sb.empty(json.html))
			{				
				//append the html
				$('#' + inst.company_note_id).html(json.html);			
				//instantiate the dialog
				inst._setup_dialog(company_id);
			}
		});
	},
	
	save: function(company_id)
	{
		var inst = this;
		
		var save_data = Object;
		save_data.company_id = company_id;
		save_data.note_body = $('textarea.redactor_editor').val();
		
		var save = $sb.ajax;	
		save.post('/company/note/' + company_id, save_data, function(json)
		{
			if(!$sb.empty(json.errors))
				$sb.show_error(json.errors);
				
			if(!$sb.empty(json.successes))
			{
				$sb.show_success(json.successes);				
				$('#' + inst.company_note_id).dialog('close');
			}
		});
	},
	
	_create_div: function()
	{
		var dialog_div = '<div id="' + this.company_note_id + '" style="display: none;" title="Give Scambook Investigators More Info by Submitting a Note"></div>';
		$('body').append(dialog_div);
	},
	
	_load_assets: function()
	{
		var css=document.createElement("link")
		css.setAttribute("rel", "stylesheet")
		css.setAttribute("type", "text/css")
		css.setAttribute("href", '/media/assets/redactor/redactor.css');
		
		document.getElementsByTagName("head")[0].appendChild(css)		

		var js=document.createElement('script')
		js.setAttribute("type","text/javascript")
		js.setAttribute("src", '/media/assets/redactor/redactor.min.js');
		document.getElementsByTagName("head")[0].appendChild(js)
	},
	
	_setup_dialog: function(company_id)
	{
		var isnt = this;
		$('#' + this.company_note_id).dialog({
				modal: true,
				autoOpen: true,
				width: 560,
				buttons: { 
					"Cancel": function() { $(this).dialog("close"); }, 
					"Save": function() 
						{ 
							inst.save(company_id); 
						}
					}					
		});		
	}
}

$sb.note = new note(); //instance using global scope
$(document).ready(function() {
	$sb.note._init();
});