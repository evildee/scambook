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

			<div class="box-container-round controls ticket">
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
			</div> <!-- box-container-round -->
			
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
			
			<div class="ticket-container listing">
			
			<div class="box-container-round empty">
				You have no complaints to resolve. Good Job! Take a look at your <a href="">reputation</a>.
			</div>
				<div class="box-container-round new">
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
							<a href="complaint.php">Complaint Details</a>
						</li>
					</ul>
					
					<ul class="side-display ticket cf">
						<li class="rep-controls">
							<div class="indicator-corner unresolved"></div>
							<ul class="listed">
								<li class="status">
									Unresolved
								</li>
								<li>
									<ul class="side-display">
										<li class="side-image">
											7
										</li>
										<li>Days</li>
										<li>Activated on</li>
										<li>12/21/2012</li>
									</ul>
								</li>
							</ul>
						</li>
						<li class="side-image">
							<div class="ticket-tag color3">Offer Sent</div>
							<div class="activity-date">12/21/2012</div>
						</li>
						<li>
							Activation required to resolve complaint. <a href="">Activate Now</a>
						</li>
						<li class="control-strip-li">
							<ul class="control-strip">
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
						<ul class="side-display ticket sub history">	
							<li class="side-image">
								<div class="ticket-tag color2">Offer Sent</div>
								<div class="activity-date">12/21/2012</div>
							</li>
							<li>
								Activation required to resolve complaint. <a href="">Activate Now</a>
							</li>
						</ul>
						<ul class="side-display ticket sub history">	
							<li class="side-image">
								<div class="ticket-tag color2">Offer Sent</div>
								<div class="activity-date">12/21/2012</div>
							</li>
							<li>
								Activation required to resolve complaint. <a href="">Activate Now</a>
							</li>
						</ul>
					</div>
					<div class="clear"></div>
				</div> <!-- box-container-round -->
				
				<div class="box-container-round">
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
							<a href="complaint.php">Complaint Details</a>
						</li>
					</ul>
					<ul class="side-display ticket cf">
						<li class="rep-controls">
							<div class="indicator-corner pending"></div>
							<ul class="listed">
								<li class="status">
									Pending 
								</li>
								<li>
									<ul class="side-display">
										<li class="side-image">
											7
										</li>
										<li>Days</li>
										<li>Activated on</li>
										<li>12/21/2012</li>
									</ul>
								</li>
							</ul>
						</li>
						<li class="side-image">
							<div class="ticket-tag color2">Offer Sent</div>
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
				</div> <!-- box-container-round -->
				
				<div class="box-container-round">
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
							<a href="complaint.php">Complaint Details</a>
						</li>
					</ul>
					<ul class="side-display ticket cf">
						<li class="rep-controls">
							<div class="indicator-corner resolved"></div>
							<ul class="listed">
								<li class="status">
									Resolved
								</li>
								<li>
									<ul class="side-display">
										<li>12/21/2012</li>
									</ul>
								</li>
							</ul>
						</li>
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
				</div> <!-- box-container-round -->
				
				<div class="box-container-round">
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
							<a href="complaint.php">Complaint Details</a>
						</li>
					</ul>
					<ul class="side-display ticket cf">
						<li class="rep-controls">
							<div class="indicator-corner expired"></div>
							<ul class="listed">
								<li class="status">
									Expired
								</li>
								<li>
									<ul class="side-display">
										<li class="side-image">
											0
										</li>
										<li>Days</li>
										<li>Activated on</li>
										<li>12/21/2012</li>
									</ul>
								</li>
							</ul>
						</li>
						<li class="side-image">
							<div class="ticket-tag color2">Offer Sent</div>
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
				</div> <!-- box-container-round -->
				
				<div class="box-container-round">
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
							<a href="complaint.php">Complaint Details</a>
						</li>
					</ul>
					<ul class="side-display ticket cf">
						<li class="rep-controls">
							<div class="indicator-corner in-dispute"></div>
							<ul class="listed">
								<li class="status">
									In Dispute 
								</li>
								<li>
									<ul class="side-display">
										<li class="side-image">
											7
										</li>
										<li>Days</li>
										<li>Activated on</li>
										<li>12/21/2012</li>
									</ul>
								</li>
							</ul>
						</li>
						<li class="side-image">
							<div class="ticket-tag color1">Offer Sent</div>
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
				</div> <!-- box-container-round -->
				
				<div class="box-container-round">
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
							<a href="complaint.php">Complaint Details</a>
						</li>
					</ul>
					<ul class="side-display ticket cf">
						<li class="rep-controls">
							<div class="indicator-corner on-hold"></div>
							<ul class="listed">
								<li class="status">
									On Hold 
								</li>
								<li>
									<ul class="side-display">
										<li class="side-image">
											7
										</li>
										<li>Days</li>
										<li>Activated on</li>
										<li>12/21/2012</li>
									</ul>
								</li>
							</ul>
						</li>
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
				</div> <!-- box-container-round -->
			</div> <!-- ticket-container -->
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
		</div> <!-- column-1-main -->
	</div>
</html>