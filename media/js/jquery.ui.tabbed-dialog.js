// jquery plugin that extends jquery ui dialog widget 
(function ($)
{
	$.fn.tabbed_dialog = function (options)
	{
		$(document).on("click", this.selector, function (event)
		{
			var data = $(this).data();

			var tab_options = null;

			// "target" option
			var $dialog_element = $(options.target);

			if(options.tab_options != undefined && options.tab_options != null)
				tab_options = options.tab_options;

			// "title_pattern" option
			// this will override the title option for dialog if provided
			if(options.title_pattern != undefined && typeof options.title_pattern == "string")
			{
				options.title = replace_placholders(options.title_pattern);
			}

			// "tabs" option
			// will create tabs automagically in the target dialog
			if(options.tabs != null && options.tabs instanceof Array)
			{
				var list = $("<ul>");
				var $tabs_container = $("<div>", {'id': 'tabs'});
				var tabs = options.tabs;

				for (var i = 0; i < tabs.length; i++)
				{
					var tab = tabs[i];

					if((tab.request != undefined && typeof tab.request == "string") && (tab.title != undefined && typeof tab.title == "string"))
					{
						// assemble tabs
						list.append($("<li>").append(
							$("<a>", {
								'href': replace_placholders(tab.request)
							}).html(tab.title)
						));
					}
					// else, do nothing - the 2 variables should be set
				}
			}

			// convenience method replace the data placeholders in the string
			function replace_placholders(subject)
			{
				var return_val = '';

				// find patterns in the string for placeholders - example: [some_field] where some field is a field from the data attribute
				var data_field_placeholder_matches = subject.match(/\[[a-zA-z_]*\]/g);

				if(data_field_placeholder_matches != null)
				{
					for (var i = 0; i < data_field_placeholder_matches.length; i++)
					{
						// strip opening and closing bracket and assign
						var data_field_str = data_field_placeholder_matches[i].substr(1, data_field_placeholder_matches[i].length - 2);

						// check if data field exists
						if(data[data_field_str] != undefined)
						{
							if(return_val == '')
							{
								return_val = subject.replace(data_field_placeholder_matches[i], data[data_field_str]);
							}
							else
							{
								return_val = return_val.replace(data_field_placeholder_matches[i], data[data_field_str])
							}
						}
					}
				}
				// else, do nothing - no matches

				return return_val;
			}

			// delete content in dialog on close
			options.close = function (event, ui)
			{
				$dialog_element.html('');
			};

			if(options.modal == undefined)
			{
				options.modal = true;
			}
			
			$dialog_element.append($tabs_container.append(list));
			$dialog_element.dialog(options);
			$tabs_container.tabs(tab_options);
			$dialog_element.dialog('open');
			event.preventDefault();
		});
	};
})(jQuery);