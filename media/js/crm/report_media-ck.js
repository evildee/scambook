function Media(){}Media.prototype={table_ajax_request:null,$loader:null,$tbody:null,$pagination:null,$first_paging_button:null,$current_paging_button:null,selected_date_start:"",selected_date_end:"",delete_id:0,_init:function(){$.uniform.restore("select");this.binds()},binds:function(){var e=this;e.$loader=$("#table_loader");e.$tbody=$("#tbody");e.$pagination=$("#pagination_container");e.$current_paging_button=$(".dataTables_paginate a:eq(0)");e.$first_paging_button=e.$current_paging_button;$(".page_button").live("click",function(t){e.$current_paging_button=$(this);t.preventDefault();e.refresh_table($(this))});$("#clear_filter_button").live("click",function(t){$(this).hide();$(".sb_datepicker").each(function(){$(this).val("")});e.selected_date_start="";e.selected_date_end="";e.refresh_table(e.$current_paging_button)});$(".sb_datepicker").live("change",function(t){$(this).attr("id")=="date_start"?e.selected_date_start=$(this).val():$(this).attr("id")=="date_end"&&(e.selected_date_end=$(this).val());var n=$("#clear_filter_button");n.is(":hidden")&&n.show();e.refresh_table(e.$current_paging_button)});$(".media-update").live("click",function(t){var n=$(this).data("update-type"),r=$(this).data("id"),i="";n=="delete"?$.alert({type:"confirm",title:"Confirm Report Media Deletion",text:"<p>Are you sure you want to delete report media #"+r+"?</p>",callback:function(){$.post("/ajax_media_update/"+n+"/"+r,function(t){if(t.errors!=undefined)t.errors.length>0&&$.jGrowl("Oops! Something went wrong.",{theme:"error",sticky:!1});else{i="Media "+r+" deleted.";$.jGrowl(i,{theme:"success",sticky:!1})}e.refresh_table(e.$current_paging_button)},"json")}}):n=="approve"&&$.post("/ajax_media_update/"+n+"/"+r,function(t){if(t.errors!=undefined)t.errors.length>0&&$.jGrowl("Oops! Something went wrong.",{theme:"error",sticky:!1});else{i="Media "+r+" approved.";$.jGrowl(i,{theme:"success",sticky:!1})}e.refresh_table(e.$current_paging_button)},"json");t.preventDefault()});e.refresh_table(e.$current_paging_button)},refresh_table:function(e){var t=this;if($sb.empty(e))return!1;var n=e.attr("data-page_number");n||(n="1");if(!$sb.empty(n)){t.table_ajax_request!=null&&t.table_ajax_request.abort();t.show_loader();t.table_ajax_request=$.getJSON("/report_media/"+n,{date_start:t.selected_date_start,date_end:t.selected_date_end},function(e){t.table_ajax_request=null;typeof e.html.results!="undefined"&&t.$tbody.html(e.html.results);typeof e.html.pagination!="undefined"&&t.$pagination.html(e.html.pagination);t.hide_loader()})}},show_loader:function(){var e=this;e.$loader.show();e.$tbody.addClass("loading")},hide_loader:function(){var e=this;e.$tbody.removeClass("loading");e.$loader.hide()}};$sb.crm.Media=new Media;$(document).ready(function(){$sb.crm.Media._init()});