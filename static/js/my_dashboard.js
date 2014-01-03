$(document).ready(function () {
		$('#dialog-steps').dialog({
			width: 690,
			autoOpen: false,
			modal: true,
			draggable: false,
			closeOnEscape: true,
			resizable: false,
			hide: 'fade',
			show: 'fade'
		});
		
		$('#dialog-why-important').dialog({
			width: 500,
			height: 300,
			autoOpen: false,
			modal: true,
			draggable: false,
			closeOnEscape: true,
			resizable: false,
			hide: 'fade',
			show: 'fade'
		});
		
		$('#dialog-account-balance-info').dialog({
			width: 500,
			height: 300,
			autoOpen: false,
			modal: true,
			draggable: false,
			closeOnEscape: true,
			resizable: false,
			hide: 'fade',
			show: 'fade'
		});
		
		$('#dialog-contact-us').dialog({
			width: 690,
			autoOpen: false,
			modal: true,
			draggable: false,
			closeOnEscape: true,
			resizable: false,
			hide: 'fade',
			show: 'fade',
			buttons: [
			    {
			        text: "Ok",
			        	click: function() { $(this).dialog("close"); }
			    	},
			    	{
			    	    text: "Ok",
			    	    	click: function() { $(this).dialog("close"); }
			    		}
			   ]
		});
		
		$('#complaint-button').click(function() {
			$('#dialog-steps').dialog('open');
			$('.slider').scrollTo( 0 );
			return false;
		});
		$('#proof-button').click(function() {
			$('#dialog-steps').dialog('open');
			$('.slider').scrollTo( {top:'0px', left:'650px'}, 200);
			return false;
		});
		$('#company-button').click(function() {
			$('#dialog-steps').dialog('open');
			$('.slider').scrollTo( {top:'0px', left:'1300px'}, 200);
			return false;
		});
		$('#press-button').click(function() {
			$('#dialog-steps').dialog('open');
			$('.slider').scrollTo( {top:'0px', left:'1950px'}, 200);
			return false;
		});
		$('#share-button').click(function() {
			$('#dialog-steps').dialog('open');
			$('.slider').scrollTo( {top:'0px', left:'2600px'}, 200);
			return false;
		});
		
		$('.why-important-button').click(function() {
			$('#dialog-why-important').dialog('open');
			return false;
		});
		
		$('#account-balance-info-button').click(function() {
			$('#dialog-account-balance-info').dialog('open');
			return false;
		});
		
		$('.contact-us-button').click(function() {
			$('#dialog-contact-us').dialog('open');
			return false;
		});
		
var url = window.location.pathname; // grab URL
var directory = url.split('/').pop().split('/')[0] // grab directory
var filename = url.substring(url.lastIndexOf('/')+1); // get the filename
var page = filename.split('.')[0]; // take out the file extension

		// This one is important, many browsers don't reset scroll on refreshes
	// Reset all scrollable panes to (0,0)
	$('.slider').scrollTo( 0 );
	// Reset the screen to (0,0)
	$.scrollTo( 0 );

	$('#scroll-1-button, .proof-button').click(function () {
		$('.slider').scrollTo( {top:'0px', left:'650px'}, 200);
		return false;
	});
	$('#scroll-2-button, .company-button').click(function () {
		$('.slider').scrollTo({top:0, left:'1300px'}, 200);
		return false;
	});

	$('#scroll-3-button, .press-button').click(function () {
		$('.slider').scrollTo({top:0, left:1950}, 200);
		return false;
	});
	$('#scroll-4-button, .share-button').click(function () {
		$('.slider').scrollTo({top:0, left:2600}, 200);
		return false;
	});
	$('.complaint-button').click(function () {
		$('.slider').scrollTo({top:0, left:0}, 200);
		return false;
	});
})