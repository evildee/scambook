<?php include('includes/header.php'); ?>

<div id="signup">
	<div class="column55 side">
		<h1>Signup for a Scambook Account</h1>
		<div class="feature-container">
			<div class="heading">
				Resolve Your Complaint
			</div>
			<h2 class="margin-bottom20 center">
			    Filing a complaint is totally free, by signing up you get: 
			</h2>
			<ul class="bullet bullet-check">
				<li>
					<div class="icon"></div>
					Scambook Investigators that will research your complaint
				</li>
				<li>
					<div class="icon"></div>
						Support Help Desk that answers your questions
				</li>
				<li>
					<div class="icon"></div>
					A community that gives feedback and share similar experiences
				</li>
				<li>
					<div class="icon"></div>
					Resources on how to protect yourself from further damage
				</li>
				<li>
					<div class="icon"></div>
					Resources to your local athorities that may also help with your complaint
				</li>
			</ul>
		</div><!-- feature-container -->
	</div><!-- column55 side -->
	<div class="column45">
		<div class="freetrial-wrapper">
			<div class="freetrial">
					<form action="/business/ajax_signup" method="post" accept-charset="utf-8" class="sb_auto_submit">
						 <div class="tright">
	                    	 <label>First Name</label>
	                    	  <input type="text" name="first_name" value="" title="First name" placeholder="First name" /><br />
	                    	  <label>Last Name</label>
	                    	   <input type="text" name="last_name" value="" title="Last name" placeholder="Last name" /><br />
	                    	   <label>Phone Number</label>
	                    	   <input type="text" name="phone_number" value="" title="Phone number" placeholder="Phone number" /><br />
	                    	   <label>Desired Screen Name</label>
	                    	   <input type="text" name="screen_name" value="" title="Screen name" placeholder="Screen name" /><br />
	                    	   <label>Email Address</label>
	                    	   <input type="text" name="email" value="" title="Email" placeholder="Email" /><br />
	                    	   <label>Password</label>
	                    	   <input type="password" name="password" value="" title="Password" placeholder="Password" /><br />
	                    	   <label>Confirm Password</label>
	                    	   <input type="password" name="password_confirm" value="" title="Confirm password" placeholder="Confirm password" /><br />
	                    	   <label>
	                    	   	<input type="checkbox"/> I agree with the <a href="/premium-terms" target="_blank">Terms & Conditions</a>
	                    	   </label><br />
	                   	</div>
	                   	<input class="btn-s3 post-btn nyroModal" type="submit" value="START NOW" />
	                </form>
					<div class="clear"></div>
					<div class="package-call">
						<h5 class="calltoaction">Questions? Call us at 1-877-966-2278</h5>
						<h6 class="calltoaction margin-bottom20">Monday-Friday: 9am-6pm PST</h6>
					</div>
					<h5 class="calltoaction">Or Use your Facebook / Google account</h5>
					<input value="" class="signin-facebook" type="submit">
					<div class="clear10"></div>
					<input value="" class="signin-google" url="https://www.google.com/accounts/o8/ud?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&amp;openid.mode=checkid_setup&amp;openid.return_to=http%3A%2F%2Fwww.scambook.loc%2Faccount%2Flogin_google&amp;openid.realm=http%3A%2F%2Fwww.scambook.loc%2F&amp;openid.ns.ax=http%3A%2F%2Fopenid.net%2Fsrv%2Fax%2F1.0&amp;openid.ax.mode=fetch_request&amp;openid.ax.type.contact_email=http%3A%2F%2Faxschema.org%2Fcontact%2Femail&amp;openid.ax.type.namePerson_first=http%3A%2F%2Faxschema.org%2FnamePerson%2Ffirst&amp;openid.ax.type.namePerson_last=http%3A%2F%2Faxschema.org%2FnamePerson%2Flast&amp;openid.ax.required=contact_email%2CnamePerson_first%2CnamePerson_last&amp;openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select" type="submit">
					</span>
				</div> <!-- freetrial -->
			</div><!-- freetrial-wrapper -->
			<div class="clear"></div>
			<div class="verisign">
				<table width="135" border="0" cellpadding="2" cellspacing="0" title="<?php echo __('Click to Verify - This site chose VeriSign Trust Seal to promote trust online with consumers.'); ?>">
		    		<tbody>
		    			<tr>
		    				<td width="135" align="center" valign="top" style="background:#fff; border:1px #fff solid;">
		    					<script type="text/javascript" src="https://seal.verisign.com/getseal?host_name=<?php echo SERVER_NAME; ?>&amp;size=S&amp;use_flash=NO&amp;use_transparent=YES&amp;lang=en">
		    					</script><br />
		    					<a href="http://www.verisign.com/verisign-trust-seal" target="_blank" style="color:#000000; text-decoration:none; font:bold 7px verdana,sans-serif; letter-spacing:.5px; text-align:center; margin:0px; padding:0px;"><?php echo __('ABOUT TRUST ONLINE'); ?>
		    					</a>
		    				</td>
		    			</tr>
		    		</tbody>
	    		</table>
			</div><!-- verisign -->
			<div class="clear"></div>
	</div> <!-- column45 -->
	<div class="clear"></div>
</div> <!-- #signup -->

<?php include('includes/my_footer.php'); ?>