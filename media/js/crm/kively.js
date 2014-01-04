// requires: jquery
function kively() {}

kively.prototype =
{
    init: function()
    {
        this.binds();
    },

    binds: function()
    {
        var self = this;

        // bind edit
        $(".open_dialog_button").unbind('click');
        $(".open_dialog_button").bind('click', function()
        {
			var dialog_selector = $(this).attr('href');
			if(dialog_selector.charAt(0) == '#') {
				var id = $(this).data('id');
				self.edit(id);
				return false;
			}
        });
    },

    edit: function(id)
    {
        var self = this;
        var ajax = $sb.ajax;
		var sb_dialog = $("#approve_deny_dialog");
		
		$.ajax({
		  url: '/approve_deny_report_dialog',
		  type: 'GET',
		  data: {id: id},
		  dataType: 'html'
		}).done(function(response){
			sb_dialog.dialog({modal:true});
			sb_dialog.dialog('open');
			sb_dialog.html(response);
			$sb._init();
			self.binds(); // have to rebind because the form w/ auto submit is dynamically generated
		});
		sb_dialog.on('dialogclose', function() {
			sb_dialog.html("");
		});
    }
};

$(document).ready(function()
{
    $sb.kively = new kively();
    $sb.kively.init();
});