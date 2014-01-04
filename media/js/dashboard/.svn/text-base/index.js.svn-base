$(function()  { 
	$('#npsModal .close-reveal-modal').click(function() {
		var id = $(this).data('id');		
		$.ajax({
		  url: '/dashboard/track_premium_user_close_click',
		  type: 'POST',
		  data: {id: id},
		  dataType: 'html'
		});
	});
});
	