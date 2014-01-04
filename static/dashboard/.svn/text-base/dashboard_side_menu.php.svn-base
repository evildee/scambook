		<div class="box-container payout">
			<div class="center margin-bottom10">
				My Account Balance
			</div>
			<h3>&#36;50.00</h3>
			<p>Payout will be sent to you PayPal account: <a href="mailto: david@scambook.com" /> <a href="">Change Account</a></p>
			
			<a href="payout.php" class="button1">Payout Now</a>
		</div> <!-- container -->
		
		<div class="box-container payout">
			<div class="center margin-bottom10">
				My Account Balance
			</div>
			<h3>&#36;0.00</h3>
			<p>
				There are currently no resolution offers in your account.
			</p>
			<p>
				<a href="javascript:void(0)" id="account-balance-info-button">What's This?</a>
			</p>
		</div> <!-- container -->

			<div class="in-ad">
				<div class="in-ad__content">
					<h3 class="in-ad__h3">
						Premium Support
					</h3>
					<p class="in-ad__p">
						Would you like to enable Livechat<br />
					&amp; track details of your complaint?
					</p>
					<p class="in-ad__p">
						Join our Premium Support<br />
						Program for only $9.99/mo
					</p>
					<p class="in-ad__p">
						Click here to <a href="/premium">learn more</a>
					</p>
				</div><!-- in-ad__content -->
			</div><!-- in-ad -->

			<div class="in-ad">
				<div class="in-ad__content">
					<h3 class="in-ad__h3">
						Premium Support Hotline
					</h3>
					<p class="in-ad__p">
						For questions about your<br />
						account or report,
					</p>
					<p class="in-ad__p">
						please call us M-F<br />
						9am to 6pm PST at: <b>(855) 388-7226</b>
					</p>
				</div><!-- in-ad__content -->
			</div><!-- in-ad -->

		<div class="box-container side">
			<h5>My Stuff</h5>
			<ul id="side-menu" class="side-menu">
				<li>
					<a href="dashboard.php">
						<span class="icon-medium dashboard"></span>DASHBOARD<span class="counter">43</span>
					</a>
				</li>
				<li class="multi-line">
					<a href="submitted.php">
						<span class="icon-medium submitted"></span>RESOLUTION<br />CENTER<span class="counter">43</span>
					</a>
				</li>
				<li class="multi-line">
					<a href="submitted.php">
						<span class="icon-medium submitted"></span>SUBMITTED<br />COMPLAINTS<span class="counter">43</span>
					</a>
				</li>
				<li>
					<a href="messages.php">
						<span class="icon-medium messages"></span>MESSAGES<span class="counter">122</span>
					</a>
				</li>
				<li class="multi-line">
					<a href="comments.php">
						<span class="icon-medium comments"></span>COMMENTS ON<br />COMPLAINTS<span class="counter">453</span>
					</a>
				</li>
				<li>
					<a href="activity.php">
						<span class="icon-medium activity"></span>ACTIVITY<span class="counter">7</span>
					</a>
				</li>
				<li>
					<a href="following.php">
						<span class="icon-medium following"></span>FOLLOWING<span class="counter">7</span>
					</a>
				</li>
			</ul> <!-- side-menu -->
			
			<h5>Settings</h5>
			<ul id="side-menu2" class="side-menu two">
				<li>
					<a href="account.php">
						<span class="icon-medium account"></span>ACCOUNT
					</a>
				</li>
				<li>
					<a href="privacy.php">
						<span class="icon-medium privacy"></span>PRIVACY
					</a>
				</li>
			</ul> <!-- side-menu -->
			<h5>My Profile <a href="">(edit)</a></h5>
			<ul class="profile-snippet">
				<li><img width="25" src="/media/css/css-img/avatar-sml-05.png" /></li>
				<li><strong>Real Name:</strong> lkdfjlsdkf lksdjf akjsd;aslds;dlfskd</li>
				<li><strong>Display Name:</strong> zamboni</li>
				<li><strong>Email:</strong> david@scambook.com</li>
				<li><strong>Contact Info:</strong> Incomplete</li>
				<li><strong>Total Submitted Reports:</strong> 5</li>
			</ul>
			<div class="note">
				<span class="tipper bottom"></span>
				Do you have a question that needs answering?
			</div> <!-- bubble -->
			
			<a href="javascript:void(0)" class="button1 button-small contact-us-button">Send Us An Email</a>
			<div class="clear"></div>
		</div> <!-- box-container -->

<script>
$(function() {
	
/* side-menu active state switch */
var url = window.location.pathname; // grab URL
var directory = url.split('/').pop().split('/')[0] // grab directory
var filename = url.substring(url.lastIndexOf('/')+1); // get the filename
var page = filename.split('.')[0]; // take out the file extension
var where = $('#side-menu'); // span location
var where2 = $('#side-menu2'); // span location

switch (page) {
	case "dashboard":
		where.find('span.dashboard').parent().parent().addClass('active');
		break;
	case "messages":
		where.find('span.messages').parent().parent().addClass('active');
		break;
	case "comments":
		where.find('span.comments').parent().parent().addClass('active');
		break;
	case "activity":
		where.find('span.notifications').parent().parent().addClass('active');
		break;
	case "submitted":
		where.find('span.submitted').parent().parent().addClass('active');
		break;
	case "account":
		where2.find('span.account').parent().parent().addClass('active');
		break;
	case "privacy":
		where2.find('span.privacy').parent().parent().addClass('active');
		break;
	case "following":
		where.find('span.following').parent().parent().addClass('active');
		break;
	default:
}
});
</script>


<div id="dialog-contact-us" style="display:none;" title="Scambook">
	<div id="success_target">
		<h2><span class="icon head"></span>Question or Feedback?</h2>
			<form action="/contact" method="post" id="contact_us_form" accept-charset="utf-8" onsubmit="return false;">
				<ul class="form-general">
					<li>
						<label for="contact_name">
							Your Name:<span class="mag">*</span>
						</label>
						<span>
							<input name="contact_name" value="" maxlength="68" title="What's your name?" class="signin-input" type="text">
						</span>
					</li>
					<li>
						<label for="contact_email">
							Email Address:<span class="mag">*</span>
						</label>
						<span>
							<input name="contact_email" value="" title="Enter your email address" class="signin-input" type="text">
						</span>
					</li>
					<li>
						<label for="contact_email_confirm">
							Confirm Email Address: <span class="mag">*</span>
						</label>
						<span>
							<input name="contact_email_confirm" value="" title="Confirm your email address" class="signin-input" type="text">
						</span>
					</li>
					<li>
						<label for="contactreason">
							Regarding:
						</label>
						<span>
			                <select name="contact_reason" class="select-input" id="select_contact_reason">
				                <option value="Select One" selected="selected">-- Select One --</option>
				                <option value="account_information">Account Information</option>
				                <option value="complaint">Regarding a Complaint</option>
				                <option value="feedback_suggestions">Feedback & Suggestions</option>
				                <option value="business_resolve">Business Resolve Inquiry</option>
				                <option value="press">Press</option>
				                <option value="general" >General Inquiry</option>
				            </select>
						</span>
					</li>
				</ul>  <!-- form-general -->
                 
                <div class = "contact-pane1" style="display:none;" id="general">                
                    <ul class="form-general">
                    	<li>
                    		<label for="general_message">
	                    		Your Message:<span class="mag">*</span>
	                    	</label>
	                    	<span>
	                    		<textarea name="general_message" cols="50" rows="10" class="" minlength="10"></textarea>
	                    	</span>
                    	</li>
                    	<li>
                    		<span>
                    			<input type="submit" value="Submit" name="general_submit" class="button1 button-small" />
                    		</span>
                    	</li>
                    </ul> <!-- form-general -->
                </div> <!-- contact-pane1 #general -->
                
                <div class = "contact-pane1" style="display:none;" id="account_information">
                    <ul class="form-general">
                    	<li>
                    		<label for="confirm">
	                    		Is this regarding: <span class="mag">*</span>
	                    	</label>
	                    	<span>
		                        <input type="radio" name="account_information_reason" value="Password"> Password
		                        <input type="radio" name="account_information_reason" value="Changing Username to Anonymous"> Changing Username to Anonymous
		                        <input type="radio" name="account_information_reason" value="Submitting a Complaint"> Submitting a Complaint
		                        <input type="radio" name="account_information_reason" value="Submitting Evidence"> Submitting Evidence
		                        <input type="radio" name="account_information_reason" value="Other">Other
	                    	</span>
                    	</li>
                    	<li>
                    		<label for="account_information_message">
                    			Your Message:<span class="mag">*</span>
                    		</label>
                    		<span>
                    			<textarea name="account_information_message" cols="50" rows="10" class="" minlength="10"></textarea>
                    		</span>
                    	</li>
                    	<li>
                    		<span>
                    		<input type="submit" value="Submit" class="button1 button-small" />
                    		</span>
                    	</li>
                    </ul> <!-- form-general -->
                </div> <!-- contact-pane1 #account_information -->

                 <div class = "contact-pane1" style="display:none;" id="complaint">
                 	<ul class="form-general">
                 		<li>
                 			<label for="complaint_url">
                 				URL OF Complaint: <span class="mag">*</span>
                 			</label>
                 			<span>
                 				<input name="complaint_url" type="text" class="signin-input">
                 			</span>
                 		</li>
                 		<li>
                 			<label for="confirm">
                 				Is this regarding: <span class="mag">*</span>
                 			</label>
                 			<span>
		                        <input type="radio" name="complaint_reason" value="Dispute"> Dispute
		                        <input type="radio" name="complaint_reason" value="Edit"> Edit
		                        <input type="radio" name="complaint_reason" value="Removal"> Removal
		                        <input type="radio" name="complaint_reason" value="Something Else"> Something Else
                 			</span>
                 		</li>
                 		<li>
                 			<label for="complaint_message">
                 				Your Message:<span class="mag">*</span>
                 			</label>
                 			<span>
                 				<textarea name="complaint_message" cols="50" rows="10" class="" minlength="10"></textarea>
                 			</span>
                 		</li>
                 		<li>
                 			<span>
                 				<input type="submit" value="Submit" name="complain_submit "class="button1 button-small" />
                 			</span>
                 		</li>
                 	</ul> <!-- form-general -->
                 </div> <!-- contact-pane1 #complaint -->
                 
                <div id="contact_panes">
                	<div class = "contact-pane1" style="display:none;" id="feedback_suggestions">
                		<ul class="form-general">
                			<li>
                				<label for="feedback_suggestions_message">
                					Your Message:<span class="mag">*</span>
                				</label>
                				<span>
                					<textarea name="feedback_suggestions_message" cols="50" rows="10" class="" minlength="10"></textarea>
                				</span>
                			</li>
                			<li>
                				<span>
                					<input type="submit" value="Submit" name="feedback_suggestions_message" class="button1 button-small" />
                				</span>
                			</li>
                		</ul> <!-- form-general -->
	                </div> <!-- contact-pane1 #feedback_suggestions -->
                
                    <div class = "contact-pane1" style="display:none;" id="business_resolve">
                    	<ul class="form-general">
                    		<li>
                    			<label for="business_resolve_phone">
                    				Phone Number:
                    			</label>
                    			<span>
                    				<input name="business_resolve_phone" type="text" class="signin-input"> <span class="subdue">777-777-7777</span>
                    			</span>
                    		</li>
                    		<li>
                    			<label for="business_resolve_company_name">
                    				Company: <span class="mag">*</span>
                    			</label>
                    			<span>
                    				<input name="business_resolve_company_name" type="text" class="signin-input">
                    			</span>
                    		</li>
                    		<li>
                    			<label for="business_resolve_message">
                    				Your Message:<span class="mag">*</span>
                    			</label>
                    			<span>
                    				<textarea name="business_resolve_message" cols="50" rows="10" class="" minlength="10"></textarea>
                    			</span>
                    		</li>
                    		<li>
                    			<span>
                    				<input type="submit" value="Submit" name="business_resolve_submit" class="button1 button-small" />
                    			</span>
                    		</li>
                    	</ul> <!-- form-general -->
                    </div> <!-- contact-pane1 #business_resolve -->
                
                    <div class = "contact-pane1" style="display:none;" id="press">
                    	<ul class="form-general">
                    		<li>
                    			<label for="press_company_name">
                    				What is your Publication Company:
                    			</label>
                    			<span>
                    				<input name="press_company_name" type="text" class="signin-input">
                    			</span>
                    		</li>
                    		<li>
                    			<label for="press_phone">
                    				Phone Number:
                    			</label>
                    			<span>
                    				<input name="press_phone" type="text" class="signin-input"> <span class="subdue">777-777-7777</span>
                    			</span>
                    		</li>
                    		<li>
                    			<label for="press_reason">
                    				Is this for: <span class="mag">*</span>
                    			</label>
                    			<span>
			                        <input type="radio" name="press_reason" value="TV"> TV
			                        <input type="radio" name="press_reason" value="Online"> Online
			                        <input type="radio" name="press_reason" value="Print"> Print
			                        <input type="radio" name="press_reason" value="Other"> Other
                    			</span>
                    		</li>
                    		<li>
                    			<label for="press_message">
                    				Your Message:<span class="mag">*</span>
                    			</label>
                    			<span>
                    				<textarea name="press_message" cols="50" rows="10" class="" minlength="10"></textarea>
                    			</span>
                    		</li>
                    		<li>
                    			<span>
                    				<input type="submit" value="Submit" name="press_message" class="button1 button-small" />
                    			</span>
                    		</li>
                    	</ul> <!-- form-general -->
                    </div> <!-- contact-pane1 #press -->
                </div><!-- contact-panes -->
           </form>
     </div> <!-- success_target -->
</div> <!-- dialog-contact-us -->

<div id="dialog-account-balance-info" style="display:none;" title="Scambook">
	<div class="pad-20">
	<h2><span class="icon head"></span>Account Balance Information</h2>
		<p>
			Scambook's Complaint Resolution Platform allows businesses and individuals to resolve complaints filed against them in mutual resolutions or in a form of a refund. 
		</p>
		<p>
			If you have accepted a refund the accepted amount will show in your Account Balance once we have verified the funds offered by the business. Scambook currently can only refund payouts via PayPal.  For more information on PayPal please visit www.paypal.com
		</p>
	</div> <!-- pad-20 -->
</div> <!-- dialog-why-important -->