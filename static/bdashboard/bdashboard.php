<?php include('includes/my_header.php'); ?>
	<div id="biz-wrap">
		<?php include('includes/bdashboard_side_menu.php'); ?>
		<div class="column-1-main width718">
		<h2><span class="icon head"></span>Complaints</h2>
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
		<div class="clear"></div>

		 <div class="box-container pink">
		 <h5>Did you know?</h5>
		 	<ul class="bullet-it bold">
		 		<li>
		 			Scambook Assistance is available for a small fee to assist you in your tougher complaints. This option is available to you 7 days after your first message, offer or already resolved offline request to the user. 
		 		</li>
		 		<li>
		 			You have currently resolved 36% of your complaints. Keep it up and get them all resolved. 
		 		</li>
		 		<li>
		 			Scambook Assistance is available for a small fee to assist you in your tougher complaints. This option is available to you 7 days after your first message, offer or already resolved offline request to the user. 
		 		</li>
		 	</ul>
		</div>
			<div class="box-container controls ticket">
				<form>
					<ul class="control-panel cf">
						<li>
							<input type="checkbox" name="" value="" /> <label>Select All</label>
						</li>
						<li>
							<button class="button1 button-tiny">Activate</button>
						</li>
						<li>
							<div class="note">
								<span class="tipper left-small"></span>
								Activation required to resolve complaints
							</div>
						</li>
						<li>
							<select>
								<option>Latest</option>
								<option>All</option>
								<option>Pending</option>
								<option>Unresolved</option>
								<option>Resolved</option>
								<option>In Dispute</option>
								<option>On Hold</option>
								<option>Scambook Assistance</option>
							</select>
						</li>
					</ul>
				</form>
			</div> <!-- box-container -->
			<div class="pagination-indicator">Displaying 10 - 20 out of 214</div>
			<div class="clear"></div>
			<ul class="pagination">
				<li class="active"><a href="">1</a></li>
				<li><a href="">2</a></li>
				<li><a href="">3</a></li>
				<li><a href="">4</a></li>
				<li><a href="">5</a></li>
				<li><a href="">6</a></li>
				<li><a href="">7</a></li>
				<li><a href="">...</a></li>
				<li><a href="">Next</a></li>
			</ul>
			<div class="clear"></div>
			
			<div class="box-container empty">
				You have no complaints to resolve. Good Job! Take a look at your <a href="">reputation</a>.
			</div>
			<div class="ticket-container listing">
				<div class="box-container new">
					<ul class="snip1">
						<li>
							Posted: 12/21/2012
						</li>
						<li>
							Reported Damages: $544,438.00
						</li>
						<li>
							Resolution Possibility: 100%
					</ul>
					
					<ul class="snip2">
						<li class="last">
							<a href="complaint.php">view detail</a>
						</li>
					</ul>
					<div class="clear"></div>
					<ul class="side-display ticket cf">
						<li class="rep-controls">
							<div class="indicator-corner unresolved"></div>
							<ul class="listed">
								<li class="status">
									Unresolved
								</li>
							</ul>
						</li>
						<li><a class="title" href="">Best Buy Complaint #32333</a>
						<li class="medium-font">
							latest activity: Your offer of $50.00 was rejected on 12/21/2012
						</li>
						<li class="medium-font">
							latest activity: Your offer of $50.00 was rejected on 12/21/2012
						</li>
						<li class="control-strip-li">
							<ul class="control-strip">
								<li>
									<a class="button1" href="">
										Already Resolved Offline
									</a>
								</li>
								<li>
									<a class="button1" href="">
										Offer Settlement
									</a>
								</li>
							</ul>
						</li>
						<li class="last">
							<ul>
								<li>
									<a href="" class="history">Activity History</a>
								</li>
							</ul>
						</li>
					</ul>
					<div class="activity-history" style="display:;">
						<ul class="side-display ticket sub history">	
							<li class="side-image">
								<div class="ticket-tag color2">Scambook Assistance</div>
								<div class="activity-date">02/05/2012 12:34 PM</div>
							</li>
							<li>
								Activation required to resolve complaint. <a href="">Activate Now</a>
							</li>
						</ul>
						<ul class="side-display ticket sub history">	
							<li class="side-image">
								<div class="ticket-tag color1">Offer Sent</div>
							</li>
							<li>
								Activation required to resolve complaint. <a href="">Activate Now</a>
								<div class="inbox-body"><p>We would like to offer you a refund or otherwise resolve this complaint, but we need more information. Please send us the order number, phone number used or any other relevant information that would help us match this complaint with our records and allows us to resolve this quicker with you.</p></div>
							</li>
						</ul>
						<ul class="side-display ticket sub history">	
							<li class="side-image">
								<div class="ticket-tag color2">Offer Sent</div>
							</li>
							<li>
								Activation required to resolve complaint. <a href="">Activate Now</a>
							</li>
						</ul>
					</div>
					<div class="clear"></div>
				</div> <!-- box-container -->
				
				<div class="box-container">
					<ul class="snip1">
						<li>
							Posted: 12/21/2012
						</li>
						<li>
							Reported Damages: $544,438.00
						</li>
					</ul>
					
					<ul class="snip2">
						<li class="last">
							<a href="complaint.php">view detail</a>
						</li>
					</ul>
					<div class="clear"></div>
					<ul class="side-display ticket cf">
						<li class="rep-controls">
							<div class="indicator-corner pending"></div>
							<ul class="listed">
								<li class="status">
									Pending 
								</li>
							</ul>
						</li>
						<li>
							<a class="title" href="">Best Buy Complaint #34562</a>
						</li>
						<li>
							Activation required to resolve complaint. <a href="">Activate Now</a>
						</li>
						<li class="control-strip-li">
							<ul class="control-strip">
								<li>
									<a class="button1" href="">
										Send Message
									</a>
								</li>
								<li>
									<a class="button1" href="">
										Already Resolved Offline
									</a>
								</li>
								<li>
									<a class="button1" href="">
										Offer Settlement
									</a>
								</li>
								<li>
									<a class="button1" href="">
										Scambook Assistance
									</a>
								</li>
							</ul>
						</li>
						<li class="last">
							<ul>
								<li>
									<a href="" class="history">Activity History</a>
								</li>
							</ul>
						</li>
					</ul>
					<div class="activity-history" style="display:none;">
						<ul class="side-display ticket sub history">
							<li class="side-image">
								<div class="ticket-tag color3">Offer Sent</div>
								<div class="activity-date">12/21/2012</div>
							</li>
							<li>
								Activation required to resolve complaint. <a href="">Activate Now</a>
							</li>
						</ul>
					</div> <!-- activity-history -->
					<div class="clear"></div>
				</div> <!-- box-container -->
				
				<div class="box-container">
					<ul class="snip1">
						<li>
							Posted: 12/21/2012
						</li>
						<li>
							Reported Damages: $544,438.00
						</li>
					</ul>
					
					<ul class="snip2">
						<li class="last">
							<a href="complaint.php">view detail</a>
						</li>
					</ul>
					<div class="clear"></div>
					<ul class="side-display ticket cf">
						<li class="rep-controls">
							<div class="indicator-corner resolved"></div>
							<ul class="listed">
								<li class="status">
									Resolved
								</li>
							</ul>
						</li>
						<li>
							<a class="title" href="">Best Buy Complaint #623463</a>
						</li>
						<li>
							Activation required to resolve complaint. <a href="">Activate Now</a>
						</li>
						<li class="control-strip-li">
							<ul class="control-strip">
								<li>
									<a class="button1" href="">
										Send Message
									</a>
								</li>
								<li>
									<a class="button1" href="">
										Already Resolved Offline
									</a>
								</li>
								<li>
									<a class="button1" href="">
										Offer Settlement
									</a>
								</li>
							</ul>
						</li>
						<li class="last">
							<ul>
								<li>
									<a href="" class="history">Activity History</a>
								</li>
							</ul>
						</li>
					</ul>
					<div class="activity-history" style="display:none;">
						<ul class="side-display ticket sub history">
							<li class="side-image">
								<div class="ticket-tag color2">Offer Sent</div>
								<div class="activity-date">12/21/2012</div>
							</li>
							<li>
								Activation required to resolve complaint. <a href="">Activate Now</a>
							</li>
						</ul>
					</div> <!-- activity-history -->
					<div class="clear"></div>
				</div> <!-- box-container -->
				
				<div class="box-container">
					<ul class="snip1">
						<li>
							RID: #2342
						</li>
						<li>
							Date: 12/21/2012
						</li>
						<li>
							Amount: $544,438.00
						</li>
					</ul>
					
					<ul class="snip2">
						<li class="last">
							<a href="complaint.php">view details</a>
						</li>
					</ul>
					<div class="clear"></div>
					<ul class="side-display ticket cf">
						<li class="rep-controls">
							<div class="indicator-corner expired"></div>
							<ul class="listed">
								<li class="status">
									Expired
								</li>
							</ul>
						</li>
						<li>
							<a class="title" href="">Best Buy Complaint #52352</a>
						</li>
						<li>
							Activation required to resolve complaint. <a href="">Activate Now</a>
						</li>
						<li class="control-strip-li">
							<ul class="control-strip">
								<li>
									<a class="button1" href="">
										Send Message
									</a>
								</li>
								<li>
									<a class="button1" href="">
										Already Resolved Offline
									</a>
								</li>
								<li>
									<a class="button1" href="">
										Offer Settlement
									</a>
								</li>
							</ul>
						</li>
						<li class="last">
							<ul>
								<li>
									<a href="" class="history">Activity History</a>
								</li>
							</ul>
						</li>
					</ul>
					<div class="activity-history" style="display:none;">
						<ul class="side-display ticket sub history">
							<li class="side-image">
								<div class="ticket-tag color3">Offer Sent</div>
								<div class="activity-date">12/21/2012</div>
							</li>
							<li>
								Activation required to resolve complaint. <a href="">Activate Now</a>
							</li>
						</ul>
					</div> <!-- activity-history -->
					<div class="clear"></div>
				</div> <!-- box-container -->
				
				<div class="box-container">
					<ul class="snip1">
						<li>
							Posted: 12/21/2012
						</li>
						<li>
							Reported Damages: $544,438.00
						</li>
					</ul>
					
					<ul class="snip2">
						<li class="last">
							<a href="complaint.php">view details</a>
						</li>
					</ul>
					<div class="clear"></div>
					<ul class="side-display ticket cf">
						<li class="rep-controls">
							<div class="indicator-corner in-dispute"></div>
							<ul class="listed">
								<li class="status">
									In Dispute 
								</li>
							</ul>
						</li>
						<li>
							<a class="title" href="">Best Buy Complaint #5623452</a>
						</li>
						<li>
							Activation required to resolve complaint. <a href="">Activate Now</a>
						</li>
						<li class="control-strip-li">
							<ul class="control-strip">
								<li>
									<a class="button1" href="">
										Send Message
									</a>
								</li>
								<li>
									<a class="button1" href="">
										Already Resolved Offline
									</a>
								</li>
								<li>
									<a class="button1" href="">
										Offer Settlement
									</a>
								</li>
							</ul>
						</li>
						<li class="last">
							<ul>
								<li>
									<a href="" class="history">Activity History</a>
								</li>
							</ul>
						</li>
					</ul>
					<div class="activity-history" style="display:none;">
						<ul class="side-display ticket sub history">
							<li class="side-image">
								<div class="ticket-tag color2">Offer Sent</div>
								<div class="activity-date">12/21/2012</div>
							</li>
							<li>
								Activation required to resolve complaint. <a href="">Activate Now</a>
							</li>
						</ul>
					</div> <!-- activity-history -->
					<div class="clear"></div>
				</div> <!-- box-container -->
				
				<div class="box-container">
					<ul class="snip1">
						<li>
							Posted: 12/21/2012
						</li>
						<li>
							Reported Damages: $544,438.00
						</li>
					</ul>
					
					<ul class="snip2">
						<li class="last">
							<a href="complaint.php">view details</a>
						</li>
					</ul>
					<div class="clear"></div>
					<ul class="side-display ticket cf">
						<li class="rep-controls">
							<div class="indicator-corner on-hold"></div>
							<ul class="listed">
								<li class="status">
									On Hold 
								</li>
							</ul>
						</li>
						<li>
							<a class="title" href="">Best Buy #Complaint 23333</a>
						</li>
						<li>
							Activation required to resolve complaint. <a href="">Activate Now</a>
						</li>
						<li class="control-strip-li">
							<ul class="control-strip">
								<li>
									<a class="button1" href="">
										Send Message
									</a>
								</li>
								<li>
									<a class="button1" href="">
										Already Resolved Offline
									</a>
								</li>
								<li>
									<a class="button1" href="">
										Offer Settlement
									</a>
								</li>
							</ul>
						</li>
						<li class="last">
							<ul>
								<li>
									<a href="" class="history">Activity History</a>
								</li>
							</ul>
						</li>
					</ul>
					<div class="activity-history" style="display:none;">
						<ul class="side-display ticket sub history">
							<li class="side-image">
								<div class="ticket-tag color3">Offer Sent</div>
								<div class="activity-date">12/21/2012</div>
							</li>
							<li>
								Activation required to resolve complaint. <a href="">Activate Now</a>
							</li>
							<li>
								<ul class="control-strip">
									<li>
										<a href="">
											<span class="icon-mini email"></span>
											Send Message
										</a>
									</li>
									<li>
										<a href="">
											<span class="icon-mini archive"></span>
											Already Resolved Offline
										</a>
									</li>
									<li>
										<a href="">
											<span class="icon-mini reply"></span>
											Offer Settlement
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div> <!-- activity-history -->
					<div class="clear"></div>
				</div> <!-- box-container -->
			</div> <!-- ticket-container -->
			<div class="pagination-indicator">Displaying 10 - 20 out of 214</div>
			<div class="clear"></div>
			<ul class="pagination">
					<li class="active"><a href="">1</a></li>
					<li><a href="">2</a></li>
					<li><a href="">3</a></li>
					<li><a href="">4</a></li>
					<li><a href="">5</a></li>
					<li><a href="">6</a></li>
					<li><a href="">7</a></li>
					<li><a href="">...</a></li>
					<li><a href="">Next</a></li>
				</ul>
			<div class="clear"></div>
			
			<h2><span class="icon head"></span>Reputation</h2>
			<div class="clear"></div>
				
				<p>
					In west Philadelphia born and raised. On the playground where I spent most of my days. Chilling out, maxing, relaxing all cool. And all shooting some b-ball outside of the school. When a couple of guys, they were up to no good. Started making trouble in my neighborhood. I got in one little fight and my mom got scared. And said "You're moving with your auntie and uncle in Bel-air"
				</p>
				
				<div class="box-container controls rank">
					<form>
						<ul class="control-panel cf">
							<li>
								Engine:
								<select>
									<option>Google</option>
									<option>All</option>
									<option>Pending</option>
									<option>Unresolved</option>
									<option>Resolved</option>
									<option>In Dispute</option>
									<option>On Hold</option>
									<option>Scambook Assistance</option>
								</select>
							</li>
							<li>
								Sort:
								<select>
									<option>Latest</option>
									<option>All</option>
									<option>Pending</option>
									<option>Unresolved</option>
									<option>Resolved</option>
									<option>In Dispute</option>
									<option>On Hold</option>
									<option>Scambook Assistance</option>
								</select>
							</li>
						</ul>
					</form>
				</div> <!-- box-container -->
				
				<div class="rank-container">
					<div class="box-container negative">
						<ul class="side-display rank cf">
							<li class="rep-controls">
								<ul>
									<li class="close"><a href=""><span class="icon"></span>+</a></li>
									<li class="label">Negative</li>
								</ul>
							</li>
							<li>
								<a href="">Complaint 34522 for $232.42</a>
							</li>
							<li>
								This is a description of the site goes here and this is a description of the site
							</li>
							<li>
								<a href="" target="_blank">http://www.cyberdynesystems.com</a>
							</li>
							<li>
								<a href="">Complaint 34522 for $232.42</a>
							</li>
							<li>
								This is a description of the site goes here and this is a description of the site
							</li>
							<li>
								<a href="" target="_blank">http://www.cyberdynesystems.com</a>
							</li>
						</ul>
					</div> <!-- box-container -->
					
					<div class="box-container positive">
						<ul class="side-display rank cf">
							<li class="rep-controls">
								<ul>
									<li class="close"><a href=""><span class="icon"></span>+</a></li>
									<li class="label">Positive</li>
								</ul>
							</li>
							<li>
								<a href="">Complaint 34522 for $232.42</a>
							</li>
							<li>
								This is a description of the site goes here and this is a description of the site
							</li>
							<li>
								<a href="" target="_blank">http://www.cyberdynesystems.com</a>
							</li>
						</ul>
					</div> <!-- box-container -->
					
					<div class="box-container notme">
						<ul class="side-display rank cf">
							<li class="rep-controls">
								<ul>
									<li class="close"><a href=""><span class="icon"></span>+</a></li>
									<li class="label">Not Me</li>
								</ul>
							</li>
							<li>
								<a href="">Complaint 34522 for $232.42</a>
							</li>
							<li>
								This is a description of the site goes here and this is a description of the site This is a description of the site goes here and this is a description of the site
							</li>
							<li>
								<a href="" target="_blank">http://www.cyberdynesystems.com</a>
							</li>
						</ul>
					</div> <!-- box-container -->
					
					<div class="box-container">
						<ul class="side-display rank cf">
							<li class="rep-controls">
								<ul>
									<li><button class="button1">Positive</button></li>
									<li><button class="button1">Not Me</button></li>
									<li><button class="button1">Negative</button></li>
								</ul>
							</li>
							<li>
								<a href="">Complaint 34522 for $232.42</a>
							</li>
							<li>
								This is a description of the site goes here and this is a description of the site This is a description of the site goes here and this is a description of the site
							</li>
							<li>
								<a href="" target="_blank">http://www.cyberdynesystems.com</a>
							</li>
						</ul>
					</div> <!-- box-container -->
					
					<div class="box-container">
						<ul class="side-display rank cf">
							<li class="rep-controls">
								<ul>
									<li><button class="button1">Positive</button></li>
									<li><button class="button1">Not Me</button></li>
									<li><button class="button1">Negative</button></li>
								</ul>
							</li>
							<li>
								<a href="">Complaint 34522 for $232.42</a>
							</li>
						</ul>
					</div> <!-- box-container -->
					
				</div> <!-- ticket-container -->
			
		</div> <!-- column-1-main -->
	</div>
</html>