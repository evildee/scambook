function business(){}business.prototype={id:0,page:null,page_id:null,ui_loaded:!1,region_switcher:Object,activity_feed_open:!1,loaded_activities:0,available_activities:0,is_more_activities:!1,_stripe_publishable_key:null,_stripe_token:null,init:function(){this.page=this._get_page();this.page_id=this._get_page_id();if(this._is_business_controller()){this.ui();this.binds()}this.available_activities=parseInt($("#available_activities").val());this.loaded_activities=parseInt($("#loaded_activities").val())},ui:function(){$(".selectmenu").selectmenu();switch(this.page){case"profile_edit":this.setup_region_switcher("form#profile_edit_form","#profile_edit_country");break;case"settings":this.setup_region_switcher("form#account_settings_form","#company_billing_country_code");break;default:}this.ui_loaded=!0},binds:function(){var e=this;switch($sb.method){case"profile_edit":var t=$("#profile_edit_country");t.die();t.bind("change",function(){e.change_country("form#profile_edit_form","#profile_edit_country")});break;case"history":$("#months").unbind();$("#months").bind("change",function(){e.change_month($(this).val())});break;case"overview":case"resolutions":$("#complaint-statuses").unbind();$("#complaint-statuses").bind("change",function(){e.change_complaint_statuses($(this).attr("company_id"),$(this).val())});$("#complaint-sort").unbind();$("#complaint-sort").bind("change",function(){e.change_complaint_sort($(this).attr("company_id"),$(this).attr("status"),$(this).val())});$(".box-container-round .history").unbind("click");$(".box-container-round .history").bind("click",function(){e.view_activity_history($(this))});break;case"settings":var t=$("#company_billing_country_code");t.die();t.bind("change",function(){e.change_country("form#account_settings_form","#company_billing_country_code")});$("#submit_billing_changes").unbind("click");$("#submit_billing_changes").bind("click",function(){e.process_billing_changes()});break;case"activity_feed":$("#morebutton2").unbind("click");$("#morebutton2").bind("click",function(t){e.load_more_activities();t.preventDefault()});default:}$("#company-options").unbind();$("#company-options").bind("change",function(){e.change_company($(this).val())});$("#activity_title").unbind("click");$("#activity_title").bind("click",function(t){!e.activity_feed_open&&e.loaded_activities<=10&&e.mark_loaded_as_read();this.activity_feed_open=e.toggle_activity_feed();t.preventDefault()});$("#morebutton").unbind("click");$("#morebutton").bind("click",function(t){e.load_more_activities();t.preventDefault()});$("#get_deposit_link").unbind("click");$("#get_deposit_link").bind("click",function(){e.get_deposit_dialog()});$(".get_purchase_credits_link").unbind("click");$(".get_purchase_credits_link").bind("click",function(){e.get_purchase_credits_dialog()});$(".get_initiate_resolution_link").unbind("click");$(".get_initiate_resolution_link").bind("click",function(){e.get_initiate_resolution_dialog($(this).attr("data-report_id"))});$(".get_subscribe_link").unbind("click");$(".get_subscribe_link").bind("click",function(){e.get_subscribe_dialog($(this).attr("data-report_id"))});$(".get_send_message_link").unbind("click");$(".get_send_message_link").bind("click",function(){e.get_send_message_dialog($(this).attr("data-report_id"))});$(".get_offer_settlement_link").unbind("click");$(".get_offer_settlement_link").bind("click",function(){e.get_offer_settlement_dialog($(this).attr("data-report_id"))});$(".get_resolved_offline_link").unbind("click");$(".get_resolved_offline_link").bind("click",function(){e.get_resolved_offline_dialog($(this).attr("data-report_id"))});$(".get_scambook_assistance_link").unbind("click");$(".get_scambook_assistance_link").bind("click",function(){e.get_scambook_assistance_dialog($(this).attr("data-report_id"))});$(".get_dispute_link").unbind("click");$(".get_dispute_link").bind("click",function(){e.get_dispute_dialog($(this).attr("data-report_id"))});$(".get_trial_opt_out_link").unbind("click");$(".get_trial_opt_out_link").bind("click",function(){e.get_trial_opt_out_dialog()})},change_company:function(e){window.location="/business/overview/"+e},change_complaint_statuses:function(e,t){var n="/business/resolutions/"+e;t&&(n+="/status/"+t);window.location=n},change_complaint_sort:function(e,t,n){var r="/business/resolutions/"+e;t&&(r+="/status/"+t);n&&(r+="/sort/"+n);window.location=r},change_country:function(e,t){var n=$(e),r=n.find(t);this.region_switcher.start(n,r)},change_month:function(e){window.location="/business/history?month="+e},get_dispute_dialog:function(e){var t=this,n=$("#dispute_dialog");$sb.is_dialog(n)||$(n).dialog({modal:!0,autoOpen:!1,width:560});var r="/business/action/"+e,i=new Object;i.type="dispute";t.get_dialog=$sb.ajax;t.get_dialog.get(r,i,function(e){if(typeof e.html!="undefined"){$(n).empty();$(n).append(e.html);$(n).dialog("open")}})},get_deposit_dialog:function(){var e=this,t=$("#deposit_dialog");$sb.is_dialog(t)||$(t).dialog({modal:!0,autoOpen:!1,width:480});e.get_dialog=$sb.ajax;e.get_dialog.get("/business/deposit_funds","",function(e){if(typeof e.html!="undefined"){$(t).empty();$(t).append(e.html);$(t).dialog("open")}})},get_purchase_credits_dialog:function(){var e=this,t=$("#purchase_credits");$sb.is_dialog(t)||$(t).dialog({modal:!0,autoOpen:!1,width:480});e.get_dialog=$sb.ajax;e.get_dialog.get("/business/purchase_credits","",function(e){if(typeof e.html!="undefined"){$(t).empty();$(t).append(e.html);$(t).dialog("open")}})},get_initiate_resolution_dialog:function(e){var t=this,n=$("#initiate_resolution_dialog");$sb.is_dialog(n)||$(n).dialog({modal:!0,autoOpen:!1,width:560});var r="/business/action/"+e,i=new Object;i.type="initiate";t.get_dialog=$sb.ajax;t.get_dialog.get(r,i,function(e){if(typeof e.html!="undefined"){$(n).empty();$(n).append(e.html);$(n).dialog("open")}})},get_offer_settlement_dialog:function(e){var t=this,n=$("#offer_settlement_dialog");$sb.is_dialog(n)||$(n).dialog({modal:!0,autoOpen:!1,width:560});var r="/business/action/"+e,i=new Object;i.type="offer";t.get_dialog=$sb.ajax;t.get_dialog.get(r,i,function(e){if(typeof e.html!="undefined"){$(n).empty();$(n).append(e.html);$(n).dialog("open")}})},get_resolved_offline_dialog:function(e){var t=this,n=$("#resolved_offline_dialog");$sb.is_dialog(n)||$(n).dialog({modal:!0,autoOpen:!1,width:560});var r="/business/action/"+e,i=new Object;i.type="notification";t.get_dialog=$sb.ajax;t.get_dialog.get(r,i,function(e){if(typeof e.html!="undefined"){$(n).empty();$(n).append(e.html);$(n).dialog("open")}})},get_scambook_assistance_dialog:function(e){var t=this,n=$("#scambook_assistance_dialog");$sb.is_dialog(n)||$(n).dialog({modal:!0,autoOpen:!1,width:560});var r="/business/action/"+e,i=new Object;i.type="assistance";t.get_dialog=$sb.ajax;t.get_dialog.get(r,i,function(e){if(typeof e.html!="undefined"){$(n).empty();$(n).append(e.html);$(n).dialog("open")}})},get_send_message_dialog:function(e){var t=this,n=$("#send_message_dialog");$sb.is_dialog(n)||$(n).dialog({modal:!0,autoOpen:!1,width:560});var r="/business/action/"+e,i=new Object;i.type="message";t.get_dialog=$sb.ajax;t.get_dialog.get(r,i,function(e){if(typeof e.html!="undefined"){$(n).empty();$(n).append(e.html);$(n).dialog("open")}})},get_subscribe_dialog:function(){var e=this,t=$("#initiate_resolution_dialog");$sb.is_dialog(t)||$(t).dialog({modal:!0,autoOpen:!1,width:480});e.get_dialog=$sb.ajax;e.get_dialog.get("/business/subscribe","",function(e){if(typeof e.html!="undefined"){$(t).empty();$(t).append(e.html);$(t).dialog("open")}})},get_trial_opt_out_dialog:function(){var e=this,t=$("#trial_opt_out");$sb.is_dialog(t)||$(t).dialog({modal:!0,autoOpen:!1,width:480});e.get_dialog=$sb.ajax;e.get_dialog.get("/business/trial_opt_out","",function(e){if(typeof e.html!="undefined"){$(t).empty();$(t).append(e.html);$(t).dialog("open")}})},load_more_activities:function(){if(this.loaded_activities<this.available_activities){var e=this.loaded_activities,t=this;$.ajax({url:"/business/activity_feed/"+t.page_id+"/"+e,dataType:"json",mode:"get",global:!1,beforeSend:function(){$("#morebutton").hide()},success:function(e){typeof e.feed!="undefined"&&$("#load_more_target").before(e.feed);typeof e.offset!="undefined"&&(t.loaded_activities=10+parseInt(e.offset));typeof e.count!="undefined"&&(t.available_activities=parseInt(e.count));typeof e.unread_count!="undefined"&&$("#unread_count").text(e.unread_count);t.page=="activity_feed"&&$("#morebutton2").before(e.feed)},complete:function(){$("#morebutton").show();if(t.loaded_activities>=t.available_activities){$("#morebutton").hide();$("#morebutton2").hide()}}})}},mark_loaded_as_read:function(){$.ajax({url:"/business/mark_loaded_as_read/"+this.page_id,dataType:"json",mode:"get"})},process_billing_changes:function(){inst=this;inst._stripe_publishable_key=$("#stripe_publishable_key").val();Stripe.setPublishableKey(inst._stripe_publishable_key);Stripe.createToken({number:$('[name="card_number"]').val(),cvc:$('[name="card_cvc"]').val(),exp_month:$('[name="card_month"]').val(),exp_year:$('[name="card_year"]').val(),name:$('[name="card_name"]').val(),address_line1:$('[name="company_billing_address_1"]').val(),address_line2:$('[name="company_billing_address_2"]').val(),address_zip:$('[name="company_billing_zipcode"]').val(),address_state:$('[name="company_billing_region"]').val(),address_country:$('[name="company_billing_country_code"]').val()},function(e,t){if(t.error){inst.show_error(t.error.message);return"error"}this._stripe_token=t.id;$("#stripe_token").val(this._stripe_token);$("form#account_settings_form").removeAttr("onsubmit");$("form#account_settings_form").submit()})},show_error:function(e){$.jGrowl("&middot; "+e,{theme:"error",sticky:!0})},setup_region_switcher:function(e,t){var n=$(e),r=n.find(t);this.region_switcher=new RegionSwitcher;this.region_switcher.jquery_selectmenu_class="jqselectmenu";this.region_switcher.use_jquery_selectmenu=!0;this.region_switcher.region_field_class="region-field";this.region_switcher.us_states_element="us_states";this.region_switcher.ca_provinces_element="ca_provinces";this.region_switcher.other_region_element="other_region";this.region_switcher.region_label="state_region_label";this.page=="profile_edit"?this.region_switcher.region_field_name="region":this.page=="settings"&&(this.region_switcher.region_field_name="company_billing_region");this.region_switcher.disabled_region_field_name="disabled_region";this.region_switcher.us_states_label_text="Billing State";this.region_switcher.ca_provinces_label_text="Billing Province";this.region_switcher.other_region_label_text="Billing Region";this.region_switcher.start(n,r)},toggle_activity_feed:function(e){if(!this.activity_feed_open){$("div#act-content").slideDown("fast");$(".activity_link").attr("id","open");$(".activity_link").first("span").html("&#9660; Activity Feed");this.activity_feed_open=!0}else{$("div#act-content").slideUp("fast");$(".activity_link").attr("id","closed");$(".activity_link").first("span").html("&#9650; Activity Feed");this.activity_feed_open=!1}},view_activity_history:function(e){var t=$(e).attr("report_id"),n="#activity-history-"+t;$(n).is(":hidden")?$(n).html()==""?$.ajax({url:"/business/ajax_report_history/"+t,success:function(e){$(n).html(e);$(n).slideDown(100)}}):$(n).slideDown(100):$(n).hide();return!1},_get_page:function(){var e=this._parse_url();return typeof (e[1]!="undefined")?e[1]:null},_get_page_id:function(){var e=this._parse_url();return typeof (e[2]!="undefined")?e[2]:null},_parse_url:function(){var e=location.pathname,t=e.substr(1).split("/");return t},_is_business_controller:function(){var e=this._parse_url();return typeof e[0]!="undefined"&&e[0]=="business"?!0:!1}};$(document).ready(function(){$sb.business=new business;$sb.business.init()});