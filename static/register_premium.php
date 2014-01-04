<?php include('includes/header.php'); ?>

<div id="signup" class="prem">
	<div class="column55 side">
		<h1>Scambook Premium Support</h1>
		<div class="feature-container">
			<div class="heading">
				Get Your Money Back!
			</div>
				<div class="prem-feature-list">
					<div class="header">
						With our Premium Support package you get
					</div><!-- header -->
					<div class="body">
						<ul class="bullet bullet-check">
							<li>
								<div class="icon icon-support"></div>
								Dedicated Support Team
							</li>
							<li>
								<div class="icon icon-phone"></div>
								Dedicated Phone Support
							</li>
							<li>
								<div class="icon icon-folder"></div>
								Dedicated Investigator that handles your case
							</li>
							<li>
								<div class="icon icon-chat"></div>
								Livechat Dashboard
							</li>
							<li>
								<div class="icon icon-mail"></div>
								Certified Mail sent to Businesses for Resolution
							</li>
							<li>
								<div class="icon icon-coin"></div>
								Only <strong>$9.99</strong> a month and cancel anytime. 
							</li>
						</ul>
						<p>
							You can try our Premium Support service for <strong>$9.99</strong>/mo for 30 days, if you are not satisfied with our service we will refund you the service fee no question asked!
						</p>
					</div><!-- body -->
			</div><!-- prem-feature-list -->
		</div><!-- feature-container -->
	</div><!-- column55 side -->
	<div class="column45">
		<div class="message">
			<div class="thumbnail"></div>
			<h2>
			    Enlist our Premium Support team to help you get your money back.  Our Premium Support team will guide you through the process of your submitted complaint and update you on our progress in getting your money back
			</h2>
		</div><!-- message -->
		<div class="freetrial-wrapper">
		<div class="freetrial">
				<form action="/business/ajax_signup" method="post" accept-charset="utf-8" class="sb_auto_submit">
					 <div class="tright">
                    	<label>Cardholder Name</label>
                    	<input type="text" name="cardholder_name" value="" title="Cardhold Name" placeholder="Cardholder Name" /><br />
                    	<label>Credit Card Number</label>
                    	<input type="text" name="cc_number" value="" title="Credit Card Number" placeholder="Credit Card Number" /><br />
                    	<img class="cc-image" src="/media/css/css-img/icon-credit-cards.png" /><br />
                    	<label>CVC</label>
                    	<input type="text" name="cvc" value="" title="CVC" placeholder="CVC" /><br />
                    	<label>Card Expiration Date</label>
						<div class="expiration">
                    	   <select class="xsmall" style="width:60px">
								<option>01</option>
							</select>
							/
							<select class="xsmall" style="width:95px">
								<option>2012</option>
							</select><br /><br />
						</div><!-- expiration -->
						<label>
                    	   	<input type="checkbox"/> I agree with the <a href="/premium-terms" target="_blank">Terms & Conditions</a>
                    	   </label><br />
                   	</div><!-- tright -->
                   	<input class="btn-s3 post-btn nyroModal" type="submit" value="START NOW" />
                </form>
				<div class="clear"></div>
				<div class="package-call">
					<h5 class="calltoaction">Questions? Call us at 1-877-966-2278</h5>
					<h6 class="calltoaction margin-bottom20">Monday-Friday: 9am-6pm PST</h6>
				</div>
			</div> <!-- freetrial -->
		</div><!-- freetrial-wrapper -->
		<div class="clear"></div>
		<a class="no-thanks" href="">No thanks, continue to my report</a>
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