<?php include('includes/my_header.php'); ?>
	<div id="biz-wrap">
		<?php include('includes/bdashboard_side_menu.php'); ?>
		<div class="column-1-main width718">
		<h2><span class="icon head"></span>Account Settings</h2>
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

			<div class="box-container-round">
				<h3>Change Your Credit Card Information</h3>
				<ul class="form-general">
					<li>
						<label class="required">Cardholder Name</label>
						<div class="input-panel">
							<input type="text" name="" value="" />
						</div>
					</li>
					<li>
						<label class="required">Credit Card Number</label>
						<div class="input-panel"><input type="text" name="" value="" /></div>
					</li>
					<li>
						<label></label>
						<div class="input-panel"><img src="/media/css/css-img/icon-credit-cards.png" /></div>
					</li>
					<li>
						<label class="required">CVC</label>
						<div class="input-panel"><input type="text" name="" value="" /></div>
					</li>
					<li>
						<label class="required">Card Expiration Date</label>
						<div class="input-panel">
							<select class="xsmall">
								<option>01</option>
							</select>
							/
							<select class="xsmall">
								<option>2012</option>
							</select>
						</div>
					</li>
					<li>
						<label class="required">Billing Address Line 1</label>
						<div class="input-panel"><input type="text" name="" value="" /></div>
					</li>
					<li>
						<label>Billing Address Line 2</label>
						<div class="input-panel"><input type="text" name="" value="" /></div>
					</li>
					<li>
						<label class="required">Billing City</label>
						<div class="input-panel"><input type="text" name="" value="" /></div>
					</li>
					<li>
						<label class="required">Billing State</label>
						<div class="input-panel">
							<select class="medium">
								<option>California</option>
							</select>
						</div>
					</li>
					<li>
						<label class="required">Billing Zipcode</label>
						<div class="input-panel"><input type="text" name="" value="" /></div>
					</li>
					<li>
						<label class="required">Billing County</label>
						<div class="input-panel">
							<select class="medium">
								<option>United States</option>
							</select>
						</div>
					</li>
				</ul>
				<div class="clear"></div>
				<div class="button-panel">
					<div>
						<button class="button1">Submit</button>
					</div>
				</div>
				<div class="clear"></div>
			</div> <!-- box-container-round -->
			
			<h2><span class="icon head"></span>Automated Settings</h2>
			<div class="clear"></div>
			<div class="box-container-round">
				<h3>Auto Deposit</h3>
				<form>
				<ul class="form-general">
					<li>
						<label>Auto Deposit</label>
						<div class="input-panel">
							<ul>
								<li>
									<p class="note">
										In west Philadelphia born and raised. On the playground where I spent most of my days. Chilling out, maxing, relaxing all cool. And all shooting some b-ball outside of the school. When a couple of guys, they were up to no good. Started making trouble in my neighborhood. I got in one little fight and my mom got scared. And said "You're moving with your auntie and uncle in Bel-air"
									</p>
								</li>
								<li>
									<input type="checkbox" name="" value="" /> Enable
								</li>
								<li>
									Deposit $ <input style="text-align: right;" class="small" type="text" name="" value="" /> when your account goes below $ <input style="text-align: right;" class="small" type="text" name="" value="" />
								</li>
							</ul>
						</div>
					</li>
				</ul>
				</form>
				<div class="clear"></div>
				<h3>Auto Offer</h3>
				<form>
				<ul class="form-general">
					<li>
						<label>Auto Offer</label>
						<div class="input-panel">
							<ul>
								<li>
									<p class="note">
										In west Philadelphia born and raised. On the playground where I spent most of my days. Chilling out, maxing, relaxing all cool. And all shooting some b-ball outside of the school. When a couple of guys, they were up to no good. Started making trouble in my neighborhood. I got in one little fight and my mom got scared. And said "You're moving with your auntie and uncle in Bel-air"
									</p>
								</li>
								<li>
									<input type="checkbox" name="" value="" /> Enable
								</li>
								<li>
									Offer $ <input style="text-align: right;" class="small" type="text" name="" value="" /> when new report with damages under $ <input style="text-align: right;" class="small" type="text" name="" value="" />
								</li>
							</ul>
						</div>
					</li>
				</ul>
				</form>
				<div class="clear"></div>
				<div class="button-panel">
					<div>
						<button class="button1">Save</button>
					</div>
				</div>
				<div class="clear"></div>
				
			</div> <!-- box-container-round -->
		</div> <!-- column-1-main -->
	</div>
</html>