$(function(){$(".follow-up-form").submit(function(){var e=$(this),t=parseInt(e.attr("data-report_id"),null),n=$("#follow_up_text_"+t),r=n.val();if(!r){n.focus();return!1}var i=$("#follow_up_submit_"+t);i.addClass("c-btn-loader").attr("disabled",!0);var s=$("#follow_ups_"+t).children(".follow-up").length;$sb.ajax.post("/dashboard/follow_up",{report_id:t,message:r,num_follow_ups:s},function(e){i.removeClass("c-btn-loader").removeAttr("disabled");if(!e.data.error){var r="";if(s===0){r='<h5 class="panel__heading-text-2">Follow Up</h5>';r+='<div id="follow_ups_'+t+'" class="m-message-thread margin-bottom-20">'+e.data.html+"</div>";$("#follow_up_container_"+t).html(r)}else $("#follow_ups_"+t).append(e.data.html);n.val("")}});return!1});$("#submit_proof").submit(function(){$("#submit_proof_button").addClass("c-btn-loader").attr("disabled",!0);return!0})});