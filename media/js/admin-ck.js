function admin(){}admin.prototype={company_update_dialog_selector:"#company_update_dialog",company_id_selector:"#company_id",reactor_inst:Object,init:function(){$sb.controller=="admin";this.binds();this.ui()},binds:function(){var e=this;switch($sb.controller){case"company":$(".company_update_link").die();$(".company_update_link").bind("click",function(t){var n=$(this).attr("data-company_update_id");t.preventDefault();e.open_company_update(n)});$(".delete_company_update_link").die();$(".delete_company_update_link").bind("click",function(e){var t=$(this).attr("data-company_update_id");e.preventDefault()});break;default:}},ui:function(){switch($sb.method){case"cash_deposits":$(".datepicker").datepicker();break;default:$(".datepicker").datepicker()}},delete_company_update:function(e){var t=$sb.ajax,n=new Object;n["delete"]=!0;t.post("/admin/company_update/"+$sb.id+"/"+e,n,function(e){$sb.empty(e.success)||(window.location=location.pathname)})},open_company_update:function(e){(!$sb.exists($(this.company_update_dialog_selector))||!$sb.is_dialog($(this.company_update_dialog_selector)))&&this._create_company_update_dialog();var t=this._get_company_id();$sb.empty(e)&&(e="");var n=this;this.get_dialog=$sb.ajax;this.get_dialog.get("/admin/company_update/"+t+"/"+e,"",function(e){if(typeof e.view!="undefined"){$(n.company_update_dialog_selector).empty();$(n.company_update_dialog_selector).append(e.view);$(n.company_update_dialog_selector).dialog("open");n.reactor_inst=$("textarea.redactor_editor").redactor({autoresize:!1,buttons:["formatting","|","bold","italic","list","|","unorderedlist","orderedlist","outdent","indent","|","table","link","|","html"]});$sb.empty(e.update)||$("textarea.redactor_editor").setCode(e.update)}})},save_company_update:function(){var e=this._get_company_id(),t=$("textarea.redactor_editor").attr("data-company_update_id"),n=new Object;n.update=this.reactor_inst.getCode();this.save=$sb.ajax;this.save.post("/admin/company_update/"+e+"/"+t,n,function(e){window.location=location.pathname})},_create_company_update_dialog:function(){var e=this;$(this.company_update_dialog_selector).remove();$(this.company_update_dialog_selector).dialog("destroy");var t='<div id="company_update_dialog" style="display:none;"></div>';$("body").append(t);$(this.company_update_dialog_selector).dialog({autoOpen:!1,width:600,height:400,buttons:{Cancel:function(){$(this).dialog("close")},Save:function(){e.save_company_update();$(this).dialog("close")}}})},_get_company_id:function(){if(!$sb.empty($sb.id))var e=$sb.id;else if(!$sb.empty($(this.company_id_selector)))var e=$(this.company_id_selector).val();else{var e=null;$sb.log("we could not find the company_id")}return e}};$(document).ready(function(){$sb.admin=new admin;$sb.admin.init();$(".instacheck").change(function(e){e.preventDefault();$.ajax({type:"GET",url:"/admin/"+type+"_set/"+id+"/"+field+"/"+value})});$("#groupimages").click(function(e){if($(e.target).is("#attachgroupimage")){e.preventDefault();var t=$("[id^='groupimagediv']").length,n=1;t>0&&(n=parseInt($("[id^='groupimagediv']:last").attr("id").match(/^groupimagediv(\d+)$/)[1])+1);$(e.target).text("Add another image");$(this).append('<div id="groupimagediv'+n+'"><input name="groupimage'+n+'" type="file" /><label>Title Image:<input name="make_main" type="radio" value="imagechoice'+n+'" /></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" id="removegroupimage'+n+'">Remove</a></div>')}else if($(e.target).is("[id^='removegroupimage']")){e.preventDefault();var n=$(e.target).attr("id").match(/^removegroupimage(\d+)$/)[1];$("#groupimagediv"+n).remove();var t=$("[id^='groupimagediv']:last").length;t==0&&$("#attachgroupimage").text("Attach an image")}});$("#newgroup").find("input:text").bind("keypress",function(e){if(e.which==13)return!1});$(".autocomplete_company").autocomplete({source:base_url+"companies/ajax"+$(this).val()});$(".autocomplete_consolidate_company").autocomplete({source:base_url+"companies/ajax_consolidate/"+$("#company_id").val()+$(this).val()});$(".autocomplete_business_accounts").autocomplete({source:"/admin/ajax_business_accounts/",focus:function(e,t){$(this).val(t.item.label);$("span#account_id").html("Account ID: "+t.item.value);return!1},select:function(e,t){$(this).val(t.item.label);$("input[name='account_id']").val(t.item.value);return!1}});$(".autocomplete_group_company").autocomplete({source:base_url+"companies/ajax_group"+$(this).val()});$(".autocomplete_account_company").autocomplete({source:base_url+"companies/ajax_account"+$(this).val()});$(".autocomplete_user").autocomplete({source:base_url+"account/ajax_users"+$(this).val()});$("ul.subnav").parent().append("<span></span>");$("ul.topnav li span").click(function(){$(this).parent().find("ul.subnav").slideDown("fast").show();$(this).parent().hover(function(){},function(){$(this).parent().find("ul.subnav").slideUp("slow")})}).hover(function(){$(this).addClass("subhover")},function(){$(this).removeClass("subhover")})});