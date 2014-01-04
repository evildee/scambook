        <div id="header-v2">
            <div class="contain"> 
				<div class="social-header-v2" id="social-header-v2">
                    <div class="socialwidget plus1">
                    	<g:plusone size="medium" count="false" href="http://www.scambook.com"></g:plusone>
                    </div>	

                    <div class="socialwidget">
						<a class="youtube_v2" href="http://www.youtube.com/user/Scambook" target="_blank" data-network="youtube">Subscribe to our Youtube</a>
	                    <img src="/media/css/css-img/social-stats-leftborder.png"> 
	                    <div class="social-stat">45K</div>
                    </div>
                    <div class="socialwidget">
                    	<a class="tfollow_v2" href="http://twitter.com/Scambook" target="_blank">Follow us on Twitter</a>                    	
                    	<img src="/media/css/css-img/social-stats-leftborder.png"> 
                    	<div class="social-stat">1K</div>
                    </div>
	                <div class="socialwidget fblike">
                        <fb:like href="http://www.scambook.loc/" send="false" layout="button_count" width="50" show_faces="false" font=""></fb:like>
                    </div><!-- fblike -->

                    <div id="country-select">
                      <form action="#">
                        <select id="country-options" name="country-options">
                          <option selected="selected" title="javascript:void(0)" value="en">English</option>
                          <option title="javascript:void(0)" value="es">Espa&ntilde;ol</option>
                        </select>
                        <input value="Select" type="submit" />
                      </form>
                    </div><!-- country select -->  
        			<div class="toggle rc5"><a href="/dashboard">Dashboard</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="/logout">Logout</a></div>
        			                    <div class="clear"></div>
                    <div id="top-panel">
    					<div class="login" id="panel">
    						<form action="http://www.scambook.loc/login" method="post">
                            <label>Email Address</label>
                                <input type="text" name="username" value="" title="Email Address" class="login-input" placeholder="Email Address" />                                <div class="clear5"></div>
                            <label>Password</label>
                                <input type="password" name="password" value="" title="Password" class="login-input" placeholder="Password" />                                <div class="clear"></div>
                                <label class="remember"><input name="rememberme" id="rememberme" type="checkbox" checked="checked" value="forever"/> &nbsp;Remember me</label>
                                <div class="clear"></div>
                                <input type="submit" value="" class="signin-submit" />                                <div class="clear5"></div>
                                <label><a href="/account/forgot_password" class="forgot-pass">Forgot your password?</a></label>
                                <div class="clear10"></div>
                            </form>                            <div class="panel-h1" style="padding-bottom:0px;">Or use your social login:</div>
                            <span class="id">
        					<p><input type="submit" value="" class="signin-facebook" /></p><p><input type="submit" value="" class="signin-google" url="https://www.google.com/accounts/o8/ud?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&amp;openid.mode=checkid_setup&amp;openid.return_to=http%3A%2F%2Fwww.scambook.loc%2Faccount%2Flogin_google&amp;openid.realm=http%3A%2F%2Fwww.scambook.loc%2F&amp;openid.ns.ax=http%3A%2F%2Fopenid.net%2Fsrv%2Fax%2F1.0&amp;openid.ax.mode=fetch_request&amp;openid.ax.type.contact_email=http%3A%2F%2Faxschema.org%2Fcontact%2Femail&amp;openid.ax.type.namePerson_first=http%3A%2F%2Faxschema.org%2FnamePerson%2Ffirst&amp;openid.ax.type.namePerson_last=http%3A%2F%2Faxschema.org%2FnamePerson%2Flast&amp;openid.ax.required=contact_email%2CnamePerson_first%2CnamePerson_last&amp;openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select" /></p>                            </span>
                        </div>
                    </div>
                </div><!-- social-header-v2 -->

                <div class="navi-block">
					<a href="/"><div id="scambook-tt">scambook beta</div></a>                                                            <div class="navi">
                        <ul>
							                            <li><a href="http://www.scambook.loc/report/submit">Report a Complaint</a></li>
                            <li class="sep">|</li>
                            <li><a href="/browse">Browse Complaints</a></li>
                            <li class="sep">|</li>
                            <li><a href="http://www.scambook.loc/blog">Scambook Blog</a></li>
                            <li class="sep">|</li>
                            <li class="signup-a"><a href="http://www.scambook.loc/signup">Signup</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="sub-box">
            	<div class="contain">
            		<div class="ticker cufon">$302,000.00 in damages have been reported so far</div>                    
            		<div class="search">
                        <form action="/search" method="post" id="searchform" accept-charset="utf-8">
                        	<fieldset>
                        		<div class="input">
	                        		<span class="icon"></span>
                        			<input type="text" id="search-input" name="search" value="Search for a Complaint" title="Search for a Complaint" class="clearMeFocus" />
                        			<input type="submit" id="search-submit" name="submit" value="search" title="Submit Search" />
                        		</div>
                        	</fieldset>
                        </form>
                     </div> <!-- search -->
            	</div> <!-- contain -->
            </div> <!-- sub-box -->

<script>
$(function() {
	// search input expand animation
    var input = $('input#search-input');
    var divInput = $('div.input');
    var width = divInput.width();
    var outerWidth = divInput.parent().width() - (divInput.outerWidth() - width) - 28;
    var submit = $('#search-submit');
    var txt = input.val();
    
    input.bind('focus', function() {
        if(input.val() === txt) {
            input.val('');
        }
        $(this).animate({color: '#000'}, 300); // text color
        $(this).parent().animate({
            width: outerWidth + 'px',
            backgroundColor: '#fff', // background color
            paddingRight: '0px'
        }, 300, function() {
            if(!(input.val() === '' || input.val() === txt)) {
                if(!($.browser.msie && $.browser.version < 9)) {
                    submit.fadeIn(300);
                } else {
                    submit.css({display: 'block'});
                }
            }
        }).addClass('focus');
    }).bind('blur', function() {
        $(this).animate({color: '#b4bdc4'}, 300); // text color
        $(this).parent().animate({
            width: width + 'px',
            backgroundColor: '#fff', // background color
            paddingRight: '0px'
        }, 300, function() {
            if(input.val() === '') {
                input.val(txt)
            }
        }).removeClass('focus');
        if(!($.browser.msie && $.browser.version < 9)) {
            submit.fadeOut(100);
        } else {
            submit.css({display: 'none'});
        }
    }).keyup(function() {
        if(input.val() === '') {
            if(!($.browser.msie && $.browser.version < 9)) {
                submit.fadeOut(300);
            } else {
                submit.css({display: 'none'});
            }
        } else {
            if(!($.browser.msie && $.browser.version < 9)) {
                submit.fadeIn(300);
            } else {
                submit.css({display: 'block'});
            }
        }
    });

})
</script>

<?php //test code
	switch ($basename) {
		case 'browse':
			include('browse_menu.php');
			break;
	}

?>
        </div>

<div class="clear"></div>
