function clean_input(e){return $("<div />").text(e).html()}$(document).ready(function(){$("#open").live("click",function(e){e.preventDefault();$("div#panel").slideDown("fast")});$("#close").live("click",function(e){e.preventDefault();$("div#panel").slideUp("fast")});$("#toggle a").live("click",function(){$("#toggle a").toggle()});$(".autocomplete_co").autocomplete({source:base_url+"companies/ajax"+$(this).val()});$(".autocomplete_grp").autocomplete({source:base_url+"groups/ajax"+$(this).val()});$(".autocomplete_pr").autocomplete({source:base_url+"products/ajax"+$(this).val()});$("#all-convo").click(function(){$("#loading-bar").html('<img src="'+base_url+'media/images/ajax-loader.gif" /> ');$("#convo-box").load(base_url+"comments/ajax/"+$("#all-convo").attr("report_id")+"?type="+$("#all-convo").attr("type"),function(){$("#loading-bar").html("");$("#all-convo").attr("style","display:none;")})});$("#media-open1").click(function(){$("#media-upload1").show("fast");$("#media-open1").hide("fast")});$("#media-open2").click(function(){$("#media-upload2").show("fast");$("#media-open2").hide("fast")});$("#open-invite-box1").click(function(){$("#invite-box1").slideDown("fast");$("#invite-box2").slideUp("fast")});$("#open-invite-box2").click(function(){$("#invite-box2").slideDown("fast");$("#invite-box1").slideUp("fast")});$(".clearMeFocus").focus(function(){$(this).val()==$(this).attr("title")&&$(this).val("")});$(".clearMeFocus").blur(function(){$(this).val()==""&&$(this).val($(this).attr("title"))});$("[name='deselectfile']").click(function(){$("input:file").val("")});$(".dialog").dialog({autoOpen:!1,show:"fade",hide:"fade",minWidth:635,maxWidth:635,zIndex:89,resizable:!1,modal:!0,stack:!0,draggable:!1,buttons:[{text:"Close",click:function(){$(this).dialog("close")}}]});$(".note-button").click(function(){$(".note.dialog").dialog("open");return!1});$("#video-sam").click(function(){$.fancybox({padding:0,autoScale:!1,transitionIn:"fade",speedIn:"300",transitionOut:"none",title:this.title,width:700,height:420,href:this.href.replace(new RegExp("watch\\?v=","i"),"v/"),type:"swf",swf:{wmode:"transparent",allowfullscreen:"true"}});return!1})});var Scambook=function(){return{init:function(){},Cookie:{create:function(e,t,n){var r,i=null;arguments.length===2&&(n=100);if(n){r=new Date;r.setTime(r.getTime()+n*24*60*60*1e3);i="; expires="+r.toGMTString()}else i="";document.cookie=e+"="+t+i+"; path=/"},read:function(e){var t=e+"=",n=document.cookie.split(";"),r=0,i=null;for(r=0;r<n.length;r++){i=n[r];while(i.charAt(0)===" ")i=i.substring(1,i.length);if(i.indexOf(t)===0)return i.substring(t.length,i.length)}return null},erase:function(e){this.create(e,"",-1)}},Facebook:{login:function(){var e=Scambook.Cookie.read("fbsr_"+facebook_app_id);e!==null&&(window.location=base_url+"account/login_facebook")},fblogin:function(){FB.login(function(e){e.authResponse&&Scambook.Facebook.login()},{scope:"email, publish_stream"})},send:function(e,t){FB.ui({method:"send",to:t,link:"http://www.scambook.com",name:e+" has invited you to check out Scambook.com!",description:e+" has invited you to check out Scambook.com and use the power of your existing social network to fight back against unjust companies!"})},invite:function(e){var t=FB.Data.query("SELECT name, uid FROM user WHERE uid IN (SELECT uid2 FROM friend WHERE uid1={0}) ORDER BY name",parseInt(e));return t},publish:function(e,t,n,r,i,s,o){var u="http://"+document.location.hostname;FB.ui({method:"feed",name:e,link:i,picture:r,caption:t,description:n},function(e){typeof o=="function"&&o(e);e&&e.post_id&&_gaq.push(["_trackEvent",s,"Share via Facebook",i])})},share_scambook:function(){FB.ui({method:"stream.share",u:"http://www.scambook.com"},function(e){typeof e!="undefined"&&_gaq.push(["_trackEvent","header_social_v2_button","Share via Facebook",document.location.href])})}},Google:{login:function(e){if(window.opener&&!window.opener.closed){window.close();window.opener.location=e}}}}}();$(document).ready(function(){$(".btn-facebook").click(function(){Scambook.Facebook.publish($(this).attr("fb_title"),$(this).attr("fb_caption"),$(this).attr("fb_desc"),$(this).attr("fb_src"),$(this).attr("fb_href"),$(this).attr("fb_type"))});$(".btn-socialmedia-facebook").click(function(){Scambook.Facebook.publish($(this).attr("fb_title"),$(this).attr("fb_caption"),$(this).attr("fb_desc"),$(this).attr("fb_src"),$(this).attr("fb_href"),$(this).attr("fb_type"))});$(".btn-share-facebook-group").click(function(){Scambook.Facebook.publish($(this).attr("fb_title"),$(this).attr("fb_caption"),$(this).attr("fb_desc"),$(this).attr("fb_src"),$(this).attr("fb_href"),$(this).attr("fb_type"))});$(".btn-twitter").click(function(e){var t=550,n=370,r=($(window).width()-t)/2,i=($(window).height()-n)/2,s=this.href,o="status=1,width="+t+",height="+n+",top="+i+",left="+r;window.open(s,"twitter",o);var u=$(this).attr("tw_type"),a=$(this).attr("tw_href");_gaq.push(["_trackEvent",u,"Share via Twitter",a]);return!1});$(".btn-socialmedia-twitter").click(function(e){var t=550,n=370,r=($(window).width()-t)/2,i=($(window).height()-n)/2,s=this.href,o="status=1,width="+t+",height="+n+",top="+i+",left="+r;window.open(s,"twitter",o);var u=$(this).attr("tw_type"),a=$(this).attr("tw_href");_gaq.push(["_trackEvent",u,"Share via Twitter",a]);return!1});$(".btn-share-twitter-group").click(function(e){var t=550,n=370,r=($(window).width()-t)/2,i=($(window).height()-n)/2,s=this.href,o="status=1,width="+t+",height="+n+",top="+i+",left="+r;window.open(s,"twitter",o);var u=$(this).attr("tw_type"),a=$(this).attr("tw_href");_gaq.push(["_trackEvent",u,"Share via Twitter",a]);return!1});$(".signin-facebook,.signin-facebook-nohover").click(function(){Scambook.Facebook.fblogin();return!1});$(".signin-google,.signin-google-nohover").click(function(e){var t=450,n=500,r=($(window).width()-t)/2,i=($(window).height()-n)/2,s=$(this).attr("url"),o="status=1,width="+t+",height="+n+",top="+i+",left="+r;window.open(s,"google",o);return!1});$(".facebook_invite").live("click",function(){Scambook.Facebook.send($(this).attr("username"),$(this).attr("to_id"))});$("#fb_paging_link").live("click",function(){$("#fb_paging").html('<img src="'+base_url+'media/css/css-img/modal/ajaxLoader.gif" alt="" />');$.ajax({url:base_url+$(this).attr("url"),cache:!1,success:function(e){$("#fb_paging").remove();$("#fb_friends").append(e)}})});var e;$("#fb_search").live("keyup",function(){e&&e.readystate!=4&&e.abort();$("#fb_paging").remove();$("#fb_friends").html('<div id="fb_paging"><img src="'+base_url+'media/css/css-img/modal/ajaxLoader.gif" alt="" /></div>');e=$.ajax({url:base_url+"account/invite_fb_friends_search?val="+encodeURI($(this).val()),cache:!1,success:function(e){$("#fb_friends").html(e)}})})});$(document).ready(function(){$("ul.poster-rep-controls").find("a").click(function(e){rid=document.location.href.match(/.*\/report\/view\/(\d+).*/)[1];if(!rid)return!1;if($(this).parent().hasClass("thumbs-up2")){e.preventDefault();$.ajax(base_url+"reports/vote?report_id="+rid+"&vote=up",{success:function(e){var t=parseInt(e);if(!isNaN(t)&&t!=0){var n=parseInt($("ul.poster-rep-controls").find("span.subdue").text());isNaN(n)&&(n=0);n+=t;$("ul.poster-rep-controls").find("span.subdue").text(n.toString())}}});$(this).parent().removeClass("thumbs-up2");$(this).parent().addClass("thumbs-up2-x");$(this).parent().parent().find("li.thumbs-down2-x").addClass("thumbs-down2");$(this).parent().parent().find("li.thumbs-down2-x").removeClass("thumbs-down2-x")}else if($(this).parent().hasClass("thumbs-down2")){e.preventDefault();$.ajax(base_url+"reports/vote?report_id="+rid+"&vote=down",{success:function(e){var t=parseInt(e);if(!isNaN(t)&&t!=0){var n=parseInt($("ul.poster-rep-controls").find("span.subdue").text());isNaN(n)&&(n=0);n+=t;$("ul.poster-rep-controls").find("span.subdue").text(n.toString())}}});$(this).parent().removeClass("thumbs-down2");$(this).parent().addClass("thumbs-down2-x");$(this).parent().parent().find("li.thumbs-up2-x").addClass("thumbs-up2");$(this).parent().parent().find("li.thumbs-up2-x").removeClass("thumbs-up2-x")}else if($(this).parent().hasClass("flagabuse")){e.preventDefault();$(this).parent().parent().find(".flagabuse-wrapper-div").slideDown("fast")}});$("li.rep-controls").find("a:not([class$='login'])").click(function(e){if($(this).hasClass("unfollow")||$(this).hasClass("result-adjustment-undo"))return!0;cid=$(this).parent().parent().prop("id").match(/^comment-(\d+)$/)[1];if(!cid)return!1;var t=$(this).parent().parent().parent(),n=t.attr("data-user_voted_before"),r=n!="0"?!0:!1;if($(this).parent().hasClass("thumbs-up2")){e.preventDefault();var i=base_url+"comments/vote?comment_id="+cid+"&vote=up";$(this).prop("title")=="group"&&(i+="&group=1");$.ajax(i);$(this).parent().removeClass("thumbs-up2");$(this).parent().addClass("thumbs-up2-x");$(this).parent().parent().find("li.thumbs-down2-x").addClass("thumbs-down2").removeClass("thumbs-down2-x");var s=parseInt($("#positive_thumb_count_"+cid).attr("data-num_votes"));$("#positive_thumb_count_"+cid).html(s+1).attr("data-num_votes",s+1);if(r){var s=parseInt($("#negative_thumb_count_"+cid).attr("data-num_votes"));$("#negative_thumb_count_"+cid).html(s-1).attr("data-num_votes",s-1)}t.attr("data-user_voted_before","1")}else if($(this).parent().hasClass("thumbs-down2")){e.preventDefault();var i=base_url+"comments/vote?comment_id="+cid+"&vote=down";$(this).prop("title")=="group"&&(i+="&group=1");$.ajax(i);$(this).parent().removeClass("thumbs-down2");$(this).parent().addClass("thumbs-down2-x");$(this).parent().parent().find("li.thumbs-up2-x").addClass("thumbs-up2").removeClass("thumbs-up2-x");var s=parseInt($("#negative_thumb_count_"+cid).attr("data-num_votes"));$("#negative_thumb_count_"+cid).html(s+1).attr("data-num_votes",s+1);if(r){var s=parseInt($("#positive_thumb_count_"+cid).attr("data-num_votes"));$("#positive_thumb_count_"+cid).html(s-1).attr("data-num_votes",s-1)}t.attr("data-user_voted_before","-1")}else if($(this).parent().hasClass("flagabuse")){e.preventDefault();$(this).parent().parent().find(".flagabuse-wrapper-div").slideDown("fast")}});$("[id^='comment-']").find("a[class|='thumbs-up']").click(function(e){!$(this).hasClass("thumbs-up-login")&&!$(this).hasClass("thumbs-down-login")&&e.preventDefault();if($(this).hasClass("thumbs-up")){var t="up";if(cid=$(this).parent().parent().parent().parent().parent().prop("id").match(/^comment-(\d+)$/)[1]){var n=base_url+"comments/vote?comment_id="+cid+"&vote="+t;$(this).prop("type")=="group"&&(n+="&group=1");$.ajax(n);$(this).removeClass("thumbs-up");$(this).addClass("thumbs-up-x");$(this).parent().find("a.thumbs-down-x").addClass("thumbs-down");$(this).parent().find("a.thumbs-down-x").removeClass("thumbs-down-x");$(this).parent().parent().find("div.r-voted").text("You Have Voted")}}});$("[id^='comment-']").find("a[class|='thumbs-down']").click(function(e){$(this).hasClass("thumbs-down-login")||e.preventDefault();if($(this).hasClass("thumbs-down")){var t="down";if(cid=$(this).parent().parent().parent().parent().parent().prop("id").match(/^comment-(\d+)$/)[1]){var n=base_url+"comments/vote?comment_id="+cid+"&vote="+t;$(this).prop("type")=="group"&&(n+="&group=1");$.ajax(n);$(this).removeClass("thumbs-down");$(this).addClass("thumbs-down-x");$(this).parent().find("a.thumbs-up-x").addClass("thumbs-up");$(this).parent().find("a.thumbs-up-x").removeClass("thumbs-up-x");$(this).parent().parent().find("div.r-voted").text("You Have Voted")}}});$("[class^='flagabuse-wrapper-']").find("a").mouseenter(function(){$(this).hasClass("flagged")||$(this).parent().find(".hovertext").show()});$("[class^='flagabuse-wrapper-']").find("a").mouseleave(function(){$(this).parent().find(".hovertext").hide()});$("[class^='flagabuse-wrapper-']").find(".flagabuse-close").click(function(e){e.preventDefault();$(this).parent().slideUp("fast")});$("[name='message-form']").submit(function(){$(".jGrowl-notification").trigger("jGrowl.close");var e="";$(this).find("[name='subject']").val()||(e+="- You must provide a subject line.<br />");$(this).find("[name='body']").val()||(e+="- You must provide a message body.<br />");if(e.length>0){$.jGrowl(e,{theme:"error",sticky:!0});return!1}});$("form.flag-form").submit(function(e){e.preventDefault();error_msg="";var t=$(this),n=t.attr("data-what");$.ajax({async:!1,type:"post",url:base_url+$(this).children("#flag-check-url").val(),data:$(this).serialize(),success:function(e){if(e)error_msg=e+error_msg;else if(n==="report")$("#report_flag_container").attr("class","flag-x");else if(n==="comment"){var r=t.attr("data-comment_id");$("#flag_"+r).addClass("flagged")}}});if(!error_msg){$.ajax({async:!1,type:"post",url:base_url+$(this).children("#flag-action-url").val(),data:$(this).serialize()});$.jGrowl("&middot; You have successfully flagged this item.",{theme:"success",sticky:!0});$(this).parent().slideUp("fast",function(){n==="report"&&$("#report_flag_message").val("")});$(this).parent().parent().children("[class^='flagabuse-wrapper-']").children(".flagabuse").addClass("flagged");$(this).parent().parent().children("[class^='flagabuse-wrapper-']").children(".flagged").removeClass("flagabuse")}else $.jGrowl(error_msg,{theme:"error",sticky:!0});return!1});$("#picture_form").submit(function(){$(this).find(":submit").attr("disabled","disabled").addClass("c-btn-loader")});$("#video_form").submit(function(){$(this).find(":submit").attr("disabled","disabled")});(document.all||window.sidebar||window.opera&&window.print||window.chrome||navigator.userAgent.match(/.*Safari.*/))&&$(".add_bookmark_holder").html('<a class="bookmark_this_page" href="#">Bookmark This</a>');$(".bookmark_this_page").click(function(e){e.preventDefault();if(document.all)window.external.AddFavorite(location.href,document.title);else if(window.sidebar)window.sidebar.addPanel(document.title,location.href,"");else if(window.opera&&window.print){var t=document.createElement("a");t.setAttribute("href",location.href);t.setAttribute("title",document.title);t.setAttribute("rel","sidebar");t.click()}else alert("Press ctrl+D to bookmark (Command+D for Macs) after you click OK")});$("[name^='star_']").live("mouseover",function(){var e=parseInt($(this).attr("name").match(/^star_(\d+)$/)[1]);for(i=1;i<=5;i++)i<=e?$("[name='star_"+i+"']").addClass("star_filled"):$("[name='star_"+i+"']").removeClass("star_filled")});$(".rate_widget").live("mouseleave",function(){var e=$("[name='vote']").val();e==""?e=0:e=parseInt(e);for(i=1;i<=5;i++)i<=e?$("[name='star_"+i+"']").addClass("star_filled"):$("[name='star_"+i+"']").removeClass("star_filled")});$("[name^='star_']").live("click",function(){var e=parseInt($(this).attr("name").match(/^star_(\d+)$/)[1]);$("[name='vote']").val(e);for(i=1;i<=5;i++)i<=e?$("[name='star_"+i+"']").addClass("star_filled"):$("[name='star_"+i+"']").removeClass("star_filled")})});$(function(){$("[id^='btn-cat']").click(function(e){e.preventDefault();$(this).parent().parent().children("li").removeClass("active");$(this).parent().addClass("active")})});