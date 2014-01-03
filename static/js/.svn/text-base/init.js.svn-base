$(function() {
	$( ".dialog" ).dialog({
		autoOpen: false,
		show: "fade",
		hide: "fade",
		minWidth: 635,
		maxWidth: 635,
		zIndex: 89,
		resizable: false,
		modal: true,
		stack: true,
		draggable: false,
		buttons: [
			{
			text: 'Close',
			click: function() {$(this).dialog('close');}
			}
		]
	});
	
	$('.note-button').click(function() {
		$('.note.dialog').dialog('open');
		return false;
	});
});