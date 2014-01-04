function ui() {};

ui.prototype = 
{
	datepickers_class: '.sb_datepicker',
	dialogs_div: '#dialogs',
	dialog_class: '.sb_dialog',
	selectmenu_class: '.sb_select',
	expose_class: '.sb_expose',
	expose_show_more_html: '<div class="expose_more">Show Details</div>',
	tooltip_class: '.sb_tooltip',
	confirm_class: '.sb_confirm',

	_init: function()
	{
		this._setup();
		//this._close_open_dropdown();
		this._setup_header_dropown();
	},

	_setup: function()
	{
		var inst = this;
		//check and setup each ui item
		var datepickers = $(this.datepickers_class);
		if($sb.exists(datepickers))
		{
			$.each(datepickers, function(index)
			{
				inst.datepicker(datepickers[index]);
			});
		}

		var dialogs = $(this.dialog_class);
		if($sb.exists(dialogs))
		{
			$.each(dialogs, function(index)
			{
				inst.dialog(dialogs[index]);
			});
		}
		
		var selectmenus = $(this.selectmenu_class);
		if($sb.exists(selectmenus))
		{
			$.each(selectmenus, function(index)
			{
				inst.selectmenu(selectmenus[index]);
			});
			
		}

		var exposes = $(this.expose_class);
		if($sb.exists(exposes))
		{
			$.each(exposes, function(index)
			{
				inst.expose_setup(exposes[index]);
			});
		}

		var tooltips = $(this.tooltip_class);
		if($sb.exists(tooltips))
		{
			$.each(tooltips, function(index)
			{
				inst.tooltip(tooltips[index]);
			});
		}
		
		var confirms = $(this.confirm_class);
		if($sb.exists(confirms))
		{
			$.each(confirms, function(index)
			{
				inst.confirm(confirms[index]);
			});
		}
	},

	confirm: function(confirm_obj)
	{
		if($sb.empty(confirm_obj))
			return;
		//setup the Body
		if(typeof(confirm_obj.dataset.confirm_body) == 'undefined')
			var body = 'Are you sure you would like to proceed?';
		else
			var body = confirm_obj.dataset.confirm_body;
		//setup the title
		if(typeof(confirm_obj.dataset.confirm_title) == 'undefined')
			var title = 'Confirmation';
		else
			var title = confirm_obj.dataset.confirm_title;
		//bind the click
		$(confirm_obj).unbind('click');
		$(confirm_obj).bind('click', function(event)
		{
			event.preventDefault();
			//create the div
			if(typeof($(this).attr('id')) != 'undefined')
				var dialog_id = 'confirm_' + $(this).attr('id');
			else
				var dialog_id = Math.random().toString(36).substr(2);
			var dialog_selector = '#' + dialog_id;
			var confirm_html = '<div class="sb_confirm_dialog" style="display:none;" id="' + dialog_id + '">' + body + '</div>';
			$('#dialogs').append(confirm_html);
			//setup the dialog
			$(dialog_selector).dialog({
				width: 300,
				height: 200,
				modal: true,
				title: title,
				buttons: {
					'Confirm': function()
					{
						window.location = $(confirm_obj).attr('href');
					},
					'Cancel': function()
					{
						$(this).dialog('close');
					}
				},
				resizable: false,
				draggable: false
			});
		});
	},

	datepicker: function(datepicker_obj)
	{
		$(datepicker_obj).datepicker();
	},

	dialog: function(dialog_obj)
	{
		if(typeof(dialog_obj.dataset) != 'undefined')
		{
			var raw_options = dialog_obj.dataset;
		}	
		
		//rebuild the options
		var options = {};
		$.each(raw_options, function(index, value)
		{
			if($sb.empty(index))
				return;
			switch(index)
			{
				case 'autoopen':
					options['autoOpen'] = false;
					break;
				case 'modal':
					options['modal'] = true;
					break;
				default:
					options[index] = value;
					break;
			}
		});
		$(dialog_obj).dialog(options);
	},

	expose_setup: function(expose)
	{
		var self = this;
		if(typeof(expose.dataset.show_more_text) != 'undefined')
			this.expose_show_more_html = '<span class="expose_more">&nbsp' +  expose.dataset.show_more_text + '</span>';
		if(typeof(expose.dataset.show_less_text) != 'undefined')
			this.expose_show_less_html = '<span class="expose_less">&nbsp' + expose.dataset.show_less_text + '</span>';
		//add show more div
		$sb.log(expose);
		$(expose).before(this.expose_show_more_html);
		//bind the slide down effect on the child div
		$(expose).prev().bind('click', function()
		{	
			$(expose).slideDown(50);
			$(expose).removeAttr('style');
			$(this).remove();
			//add the show less
			$(expose).append(self.expose_show_less_html);
			var expose_less = $(expose).find('.expose_less');
			if($sb.empty(expose_less))
				return;
			$(expose_less).bind('click', function()
			{
				$(expose).slideUp(50);
				$(expose).find('.expose_more').remove();
				$(expose).find('.expose_less').remove();
				self.expose_setup(expose);
			});
		});
	},

	lock_element: function(jQ_obj)
	{
		if(!$sb.exists(jQ_obj))
			$sb.log('could not find container to lock');
		var parent_position = $(jQ_obj).position();
		var height = ($(jQ_obj).height()+parseInt($(jQ_obj).css('padding-top'))+parseInt($(jQ_obj).css('padding-bottom'))+parseInt($(jQ_obj).css('border-top-width'))+parseInt($(jQ_obj).css('border-bottom-width'))+parseInt($(jQ_obj).css('margin-top'))+parseInt($(jQ_obj).css('margin-bottom')));
		var width = ($(jQ_obj).width()+parseInt($(jQ_obj).css('padding-left'))+parseInt($(jQ_obj).css('padding-right'))+parseInt($(jQ_obj).css('border-left-width'))+parseInt($(jQ_obj).css('border-right-width')));
		var lock_html = '<div class="lock" style="top:' + parent_position.top + 'px; position:absolute; z-index:900; width:' + width + 'px; height:' + height + 'px;"></div>';
		var lock = $(jQ_obj).find('.lock');
		if(!$sb.exists($(lock)))
			$(jQ_obj).append(lock_html);
		$(lock).fadeIn(100);
	},

	selectmenu: function(selectmenu_obj)
	{
		// $(selectmenu_obj).chosen();
	},

	tooltip: function(tooltip_obj)
	{
		$(tooltip_obj).unbind('hover');
		$(tooltip_obj).one('mouseenter', function()
		{
			if($sb.exists($(this).find('.sb_tooltip_content')))
			{	
				$sb.ui._set_info_tooltip($(this).find('.sb_tooltip_content'), $(this));
			}
		});
	},

	unlock_element: function(jQ_obj)
	{
		if(!$sb.exists(jQ_obj))
			return false;
		var locked_element = $(jQ_obj).find('.lock');
		if($sb.empty(locked_element))
			return false;
		$(locked_element).remove();
	},

	_set_info_tooltip: function(message, element)
	{
		// Set positioning based on the elements position in the form
		var elem = $(element),
			corners = ['top right', 'left bottom'],
			flipIt = elem.parents('span.right').length > 0;
		// Check we have a valid error message
		if(!$sb.empty(message)) 
		{
			// Apply the tooltip only if it isn't valid
			elem.qtip({
				overwrite: false,
				content: message,
				position: {
					my: corners[ flipIt ? 0 : 1 ],
					at: corners[ flipIt ? 1 : 0 ],
					viewport: $(window)
				},
				show: {
					event: 'mouseenter',
					ready: true
				},
				hide: {
					event: 'mouseleave',
					delay: 500,
					target: false,
					distance: true,
					leave: 'window'
				},
				style: {
					classes: 'ui-tooltip-yellow' // Make it red... the classic error colour!
				}
			}).qtip('option', 'content.text', message);// If we have a tooltip on this element already, just update its content
		}
		else // If the error is empty, remove the qTip
		{ 
			elem.qtip('destroy'); 
		}		
	},

	_setup_header_dropown: function()
	{
		if(!$('#header_dropdown_target'))
			return false;
		$('#header_dropdown_target').unbind('click');
		$('#header_dropdown_target').bind('click', function()
		{
			var dropdown = $('.user-settings-holder');
			if($(dropdown).is(':hidden'))
			{
				$(dropdown).show();
				$('#header_dropdown_target').addClass('on');
			}
			else
			{
				$(dropdown).hide();
				$('#header_dropdown_target').removeClass('on');
			}
		});
	},

	_close_open_dropdown: function()
	{
		//jQuery(":not(.ignore)")
		jQuery(":not(.header-tri-drop-holder)").children().unbind('click');
		jQuery(":not(.header-tri-drop-holder)").children().bind('click', function()
		{
			if($('.user-settings-holder').is(':visible') != false)
			{
				$sb.log('should close');
				$('.user-settings-holder').hide();
				$('#header_dropdown_target').removeClass('on');
			}
		});
	},
	
	_set_validation_tooltip: function(error, element)
	{
		// Set positioning based on the elements position in the form
		var elem = $(element),
			corners = ['top right', 'left bottom'],
			flipIt = elem.parents('span.right').length > 0;
		// Check we have a valid error message
		if(!$sb.empty(error)) 
		{
			// Apply the tooltip only if it isn't valid
			elem.qtip({
				overwrite: false,
				content: error,
				position: {
					my: corners[ flipIt ? 0 : 1 ],
					at: corners[ flipIt ? 1 : 0 ],
					viewport: $(window)
				},
				show: {
					event: false,
					ready: true
				},
				hide: false,
				style: {
					classes: 'ui-tooltip-red' // Make it red... the classic error colour!
				}
			}).qtip('option', 'content.text', error);// If we have a tooltip on this element already, just update its content
		}
		else // If the error is empty, remove the qTip
		{ 
			elem.qtip('destroy'); 
		}		
	}
}

$(document).ready(function()
{
	$sb.ui = new ui();
	$sb.ui._init();
});