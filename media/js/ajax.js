// requires: jquery
function ajax() {};

ajax.prototype =
{
	//private variables
	//NOTE... these are not actually public but should not be altered
	_inst: Object, //this is used to carry the instance
	_debug: false,
	_error: false, //leave this alone

	//public variables
	//settings and options for use with individual requests
	url: null, //optionaly use a class property to set the final url
	data: null, //optionaly set form data for post requests
	form: null, //optionaly set form
	mode: 'GET',
	data_type: 'json',
	success: null,
	error: null,
	async: true,
	cache: false,
	cross_domain: false,
	before: null,
	after: null,
	timeout: 10000, //10 seconds
	debug_mode: 'debug',
	response: null,
	show_error: false,

	// AJAX auto form submission
	auto_submit: function(jQform)
	{
		var form_data = $(jQform).serialize();
		var url = $(jQform).attr('action');
		var mode = 'post';

		if (typeof($(jQform).attr('method')) != 'undefined' && ($(jQform).attr('method') == 'GET' || $(jQform).attr('method') == 'get')) {
			mode = 'get';
		}

		var request = this;

		request.before = function()
		{
			$sb.ui.lock_element(jQform);
			//disable the button
			$(jQform).find('input[type="submit"]').attr("disabled", "disabled");
		}
		request.complete = function()
		{
			$sb.ui.unlock_element(jQform);
			//show disabled buttons
			$(jQform).find('input[type="submit"]').removeAttr("disabled");
		}

		if (mode == 'post') {
			request.post(url, form_data, function(json){});
		} else {
			request.get(url, form_data, function(json){});
		}
	},

	//GET
	get: function(url, data, success)
	{
		this.mode = 'GET';
		this.url = url;
		this.data = data;
		this.success = success;
		this._ajax();
	},

	//POST
	post: function(url, data, success)
	{
		this.mode = 'POST';
		this.url = url;
		this.data = data;
		this.success = success;
		this._ajax();
	},

	//Ajax request wrapper
	_ajax: function()
	{
		//make a local instance of the request
		var request = this;
		var inst = this;

		//remove any validation things
		request._remove_validation();

		//default before
		if(typeof(this.before) != 'function')
			this.before = function(){}

		$.ajax({
			url: this.url,
			type: this.mode,
			data: this.data,
			cache: this.cache,
			dataType: this.data_type,
			beforeSend: this.before(),
			success: function(data)
			{
				if($sb.empty(data))
					return false;

				request.response = data;
				//check for the validation object
				if(typeof(data.validation) != 'undefined' && !$sb.empty(data.validation))
					request._validation(data.validation);

				if(typeof(data.profiler) != 'undefined' && !$sb.empty(data.profiler))
					request._write_profiler(data.profiler);

				//if success is true, run the success callback
				if(typeof(data.success) != 'undefined' && data.success)
				{
					//redirect if required
					if(typeof(data.redirect) != 'undefined')
						request._redirect(data.redirect);

					//run any actions
					if(typeof(data.actions) != 'undefined')
					{
						for (var a = 0; a < data.actions.length; a++)
							request._action(data.actions[a]);
					}

					//run the success callback
					if(typeof(request.success) != 'undefined')
						request.success(data);

					//redirect if required
					if(typeof(data.successes) != 'undefined')
					{
						for(var s = 0; s < data.successes.length; s++)
						{
							$sb.show_success(data.successes[s]);
						}
					}

					//redirect if required
					if(typeof(data.errors) != 'undefined')
					{
						for(var s = 0; s < data.errors.length; s++)
						{
							$sb.show_error(data.errors[s]);
						}
					}

					//callbacks
					if(typeof(data.callback) != 'undefined')
							inst._callback(data.callback);
				}
			},
			complete: function()
			{
				$sb.binds();

				if(typeof(request.complete) == 'function')
					request.complete();
			},
			error: function(jqXHR, textStatus, errorThrown)
			{
				if(inst.show_error)
				{
					$sb.show_error('Sorry. We could not complete your request');
					$sb.log('ajax request failed or could not be parsed');
					if(!$sb.empty(request.error))
						request.error(jqXHR, textStatus, errorThrown);
				}
			}
		});
	},


	//this is incharge of firing callbacks
	_callback: function(call)
	{
		try
		{
			var fnc = window[call];
			if(typeof(fnc) == 'function')
				fnc();
		}
		catch(error)
		{
			$sb.log(error);
		}
	},

	_redirect: function(url)
	{
		if(!$sb.empty(url))
			window.location = url;
	},

	_remove_validation: function()
	{
		try
		{
			if ( typeof $.fn.qtip !== 'undefined' )
				$('.validation_error').qtip('destroy');
		}
		catch(error){}
		$('.validation_error').removeClass('validation_error');
	},

	_set_validation_input_class: function(element)
	{
		//add the css error class to the input, textarea or dropdown
		$(element).addClass('validation_error');
	},

	_action: function(action)
	{
		if(typeof(action.selector) == 'undefined')
			return false;
		var selector = action.selector;

		if(typeof(action.content) != 'undefined')
			var content = action.content;
		else
			var content = '';

		var jq_obj = $(selector);
		if(typeof(action.method) == 'undefined')
			return false;
		switch(action.method)
		{
			case 'append':
				$(jq_obj).append(content);
				break;
			case 'prepend':
				$(jq_obj).prepend(content);
				break;
			case 'replaceWith':
				$(jq_obj).replaceWith(content);
				break;
			case 'remove':
				$(jq_obj).remove();
				break;
			case 'empty':
				$(jq_obj).empty();
				break;
			case 'html':
				$(jq_obj).html(content);
				break;
			case 'fadeIn':
				$(jq_obj).fadeIn(content, 200);
				break;
			case 'fadeOut':
				$(jq_obj).fadeOut(200);
				break;
			case 'slideOutLeft':
				$(jq_obj).hide('slide', {direction: 'left'}, 200);
				break;
			case 'slideInRight':
				$(jq_obj).show('slide', {direction: 'right'}, 200);
				break;
			case 'slideLeftReplace':
					$(jq_obj).hide('slide', {direction: 'left'}, 200, function(){
						$(content).show('slide', {direction: 'right'}, 200);
					});
				break;
			case 'fadeOutFadeIn':
					$(jq_obj).fadeOut( 200, function(){
						$(content).fadeIn(400);
					});
				break;
			case 'hideShow':
					$(jq_obj).hide();
					$(content).show();
				break;

			case 'replaceHref':
					$(jq_obj).attr('href',content);
				break;
			case 'text':
				$(jq_obj).text(content);
				break;
			case 'before':
				$(jq_obj).before(content);
				break;
			case 'slideInFromBottomLeft': // For #nag-box
				setTimeout(function()
				{
					$(jq_obj).html(content);
					$('#nag-box').animate({ left: '50%', bottom: '5%' }, 'slow');
				}, 5000);

				break;
		}
	},

	_set_validation_tooltip: function(error, element)
	{
		if($(element).is(':hidden'))
			return;

		// Set positioning based on the elements position in the form
		var elem = $(element),
			corners = ['top right', 'left bottom'],
			flipIt = elem.parents('span.right').length > 0;
		//check for tooltip options
		if(typeof($(element).data('position')) != 'undefined')
		{
			switch($(element).data('position'))
			{
				case 'top-left':
					corners = ['top left', 'right bottom'];
					break;
				case 'bottom-left':
					corners = ['bottom left', 'right bottom'];
					break;
			}
		}

		var position = {
			my: corners[ flipIt ? 0 : 1 ],
			at: corners[ flipIt ? 1 : 0 ],
			viewport: $(window)
		};

		if (elem.parents('span.left-side').length > 0)
		{
			position = {
				my: 'right top',
				at: 'left top'
			};
		}

		// Check we have a valid error message
		if(!$sb.empty(error))
		{
			// Apply the tooltip only if it isn't valid
			elem.qtip({
				overwrite: false,
				content: error,
				position: position,
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
	},

	_validation: function(validation)
	{
		if(!$sb.empty(validation))
		{
			for(var i = 0; i < validation.length; i++)
			{
				//load the jquery element
				var element_name = validation[i].name;
				var element = $('[name="' + element_name + '"]:visible');
				//reset the element if validation target specified
				if(typeof($(element).data('validation_target')) != 'undefined')
				{
					var tmp_element = $($(element).data('validation_target'));
					if(tmp_element.length)
					{
						element = tmp_element;
					}
				}
				if(!$sb.empty(element))
				{
					//set the css class
					this._set_validation_input_class(element);
					//show the validation qtip
					if(!$sb.empty(validation[i].message))
					{
						var message = '';
						//build up the message
						for(m = 0; m < validation[i].message.length; m++)
						{
							if(!$sb.empty(validation[i].message[m]) && validation[i].message[m])
								message += validation[i].message[m];
						}
						this._set_validation_tooltip(message, element);
					}
				}
			}
		}
	},
	_write_profiler: function(html)
	{
		$('#kohana-profiler').empty();
		$('#kohana-profiler').append(html);
	}
}

$sb.ajax = new ajax(); //instance using global scope
