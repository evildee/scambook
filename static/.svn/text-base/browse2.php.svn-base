<?php include('includes/my_header.php'); ?>

<script>
	$(function () {
		//hover function to display user data
		$('.side-display-container').hover(
			function () {
				$('.user-data ul', this).show();
			},
			function () {
				$('.user-data ul', this).hide();
			}
		);
		
		// advance filter toggle
		$('.advance-filter-button').toggle(
			function () {
				$('.filters').slideDown(100);
				return false;
			},
			function () {
				$('.filters').slideUp(100);
				return false;
			}
		);
		
		$( ".datepicker" ).datepicker();
		//jUI selectmenu
		$('select').selectmenu();
		$('.filters').slideUp(0);
	});
</script>
<div class="submission-header">
<div class="hp-width">
<div class="counter-wrapper">
		<div class="counter-display-list">
		<h2><span class="icon head"></span> Complaints by State</h2>
		<div class="map-image"></div>
		<ol>
			<li>California (23.452%)
				<div class="bar-outline">
					<div class="bar b20"></div>
				</div>
			</li>
			<li>Florida (15.322%)
				<div class="bar-outline">
					<div class="bar b10"></div>
				</div>
			</li>
			<li>Texas (13.352%)
				<div class="bar-outline">
					<div class="bar b10"></div>
				</div>
			</li>
			<li>New York (10.321%)
				<div class="bar-outline">
					<div class="bar b10"></div>
				</div>
			</li>
			<li>Pennsylvania (8.323%)
				<div class="bar-outline">
					<div class="bar b10"></div>
				</div>
			</li>
		</ol>
		</div> <!-- counter-display-list -->
		<div class="counter-display">
				<ul class="counter-ul">
					<li>
						<div id="counter1" class="counter-container">
							<input type="hidden" name="counter-value" value="100" />
						</div>
					</li>
					<li class="label">
						Complaints submitted
					</li>
					<li>
						<div id="counter2" class="counter-container">
							<div class="usd">$</div> <input type="hidden" name="counter-value" value="100" />
						</div>
						<div class="clear"></div>
					</li>
					<li class="label">
						Total Damage Amount
					</li>
					<li>
						<div id="counter3" class="counter-container">
							<div class="usd">$</div> <input type="hidden" name="counter-value" value="100" />
						</div>
						<div class="clear"></div>
					</li>
					<li class="label">
						Resolved by Scambook
					</li>
				</ul>
			<script type="text/javascript">
			/* <![CDATA[ */
			//http://bloggingsquared.com/jquery/flipcounter/
			        jQuery(document).ready(function($) {
			                $("#counter1").flipCounter({
			                	formatNumberOptions:{format:"000,000,000",locale:"us"},
			                	number:(957125441-10000), // the initial number the counter should display, overrides the hidden field
			                	numIntegralDigits:4, // number of places left of the decimal point to maintain
			                	numFractionalDigits:0, // number of places right of the decimal point to maintain
			                	imagePath:"/media/css/css-img/flipCounter-medium.png", // the path to the sprite image relative to your html document
			                });
			                $("#counter1").flipCounter(
			                        "startAnimation", // scroll counter from the current number to the specified number
			                        {
		                                end_number: 957125441, // the number we want the counter to scroll to
		                                easing: jQuery.easing.easeOutCubic, // this easing function to apply to the scroll.
		                                duration: 5000000, // number of ms animation should take to complete
			                        }
			                );
			                
			                $("#counter2").flipCounter({
			                	formatNumberOptions:{format:"000,000,000.00",locale:"us"},
			                	number:(1562745478-100000), // the initial number the counter should display, overrides the hidden field
			                	numIntegralDigits:4, // number of places left of the decimal point to maintain
			                	numFractionalDigits:0, // number of places right of the decimal point to maintain
			                	imagePath:"/media/css/css-img/flipCounter-medium.png", // the path to the sprite image relative to your html document
			                });
			                $("#counter2").flipCounter(
			                        "startAnimation", // scroll counter from the current number to the specified number
			                        {
			                            end_number: 1562745478, // the number we want the counter to scroll to
			                            easing: jQuery.easing.easeOutCubic, // this easing function to apply to the scroll.
			                            duration: 5000000, // number of ms animation should take to complete
			                        }
			                );
			                
			                $("#counter3").flipCounter({
			                	formatNumberOptions:{format:"000,000,000.00",locale:"us"},
			                	number:(120343630-100000), // the initial number the counter should display, overrides the hidden field
			                	numIntegralDigits:4, // number of places left of the decimal point to maintain
			                	numFractionalDigits:0, // number of places right of the decimal point to maintain
			                	imagePath:"/media/css/css-img/flipCounter-medium.png", // the path to the sprite image relative to your html document
			                });
			                $("#counter3").flipCounter(
			                        "startAnimation", // scroll counter from the current number to the specified number
			                        {
			                            end_number: 120343630, // the number we want the counter to scroll to
			                            easing: jQuery.easing.easeOutCubic, // this easing function to apply to the scroll.
			                            duration: 5000000, // number of ms animation should take to complete
			                        }
			                );
			        });
			/* ]]> */
			</script>
		</div>  <!-- counter display -->
	</div> <!-- counter-wrapper -->
	</div> <!-- hp-width -->
<div class="clear"></div>

</div> <!-- submission-header -->

<div class="hp-width">


<div  id="browse">
	<div class="column-2-main">
			<div class="page-header">
			<h2><span class="icon head"></span>User Submitted Complaints</h2>
				<ul class="sort">
					<li>Filter by:</li>
					<li><a href="">Recent Activity</a></li>
					<li><a href="">Trending Last 7 Days</a></li>
					<li><a href="">Most Active Last 7 Days</a></li>
					<li class="active"><a class="advance-filter-button" href="">Advanced Filter</a></li>
				</ul>
			<div class="filters">
				<div class="row1">
					<ul>
						<li>
							<strong>Complaint Type</strong>
						</li>
						<li>
							<label><input type="checkbox" name="" value="" /> Company</label>
						</li>
						<li>
							<label><input type="checkbox" name="" value="" /> Person</label>
						</li>
						<li>
							<label><input type="checkbox" name="" value="" /> Phone</label>
						</li>
					</ul>
				</div> <!-- row1 -->
				
				<div class="row2">
					<ul>
						<li>
							<strong>Image Content</strong>
						</li>
						<li>
							<label><input type="checkbox" name="" value="" /> Has Image</label>
						</li>
					</ul>
					<ul>
						<li>
							<strong>Country</strong>
						</li>
						<li>
							<select>
								<option>California</option>
								<option>New Yrok</option>
							</select>
						</li>
					</ul>
				</div> <!-- row2 -->
				
				<div class="row3">
					<ul>
						<li>
							<strong>Date Submitted</strong>
						</li>
						<li>
							From <input type="text" class="datepicker" name="" value="" /> To <input class="datepicker" type="text" name="" value="" />
						</li>
						<li>
							<strong>Date Occurred</strong>
						</li>
						<li>
							From <input class="datepicker" type="text" name="" value="" /> To <input class="datepicker" type="text" name="" value="" />
						</li>
					</ul>
				</div> <!-- row3 -->
				<div>
					<button class="button1">Filter</button>
				</div>
			</div> <!-- filters -->
			
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
		</div> <!-- page-header -->
		
		<div class="list-container">
			<div class="side-display-container">
				<div class="side-image">
					<ul class="center">
						<li class="counter">16</li>
						<li>Related</li>
						<li>Reports</li>
						<li class="button">
							<a href="">View All</a>
						</li>
					</ul>
				</div>
				<ul class="side-display">
					<li>
						<h2>
							<a href=""><span class="icon website"></span> Kim Lemons Inceptos Parturient Venenatis Condimentum Egestas<span class="indicator pending">PENDING RESOLUTION</span>
							</a>
						</h2>
					</li>
					<li>
						<p>
							<a href="">
							 I invested 1800 hundred dollar with this investment company since july 19 2012. im suppose to get paid close to 6300 by mid august of 2012. still now is in pending with no reply to my request. pleas…	
							 </a>
						</p>
					</li>
					<li>
						<ul class="extra-data cf">
							<li>
								Date Occurred: <strong>12/21/2012</strong>
							</li>
							<li>
								Reported Damages: <strong>$2,122.12</strong>
							</li>
							<li>
								<strong>False Advertising</strong>
							</li>
						</ul>
					</li>
					<li class="user-data">
						<ul style="display: none;">
							<li>
								<a href=""><img class="avatar" align="absmiddle" src="/file/avatar/default.png" /> Mybutthurts</a>
							</li>
							<li>
								Posted: 12/21/2012
							</li>
							<li>
								Followers: 23
							</li>
							<li>
								Comments: 21
							</li>
						</ul>
					</li>
				</ul>
			</div> <!-- side-display-container -->
			
			<div class="side-display-container">
				<div class="side-image">
					<ul class="center">
						<li class="counter">1,432</li>
						<li>Related</li>
						<li>Reports</li>
						<li class="button">
							<a href="">View All</a>
						</li>
					</ul>
				</div>
				<ul class="side-display">
					<li class="side-image">
						<img src="/file/avatar/default.png" />
					</li>
					<li>
						<h2>
							<a href=""><span class="icon person"></span> Kim Lemons <span class="indicator dispute">DISPUTE</span></a>
						</h2>
					</li>
					<li>
						<p>
							<a href="">
							 I invested 1800 hundred dollar with this investment company since july 19 2012. im suppose to get paid close to 6300 by mid august of 2012. still now is in pending with no reply to my request. pleas…	
							 </a>
						</p>
					</li>
					<li>
						<ul class="extra-data cf">
							<li>
								Date Occurred: <strong>12/21/2012</strong>
							</li>
							<li>
								Reported Damages: <strong>$2,122.12</strong>
							</li>
							<li>
								<strong>False Advertising</strong>
							</li>
						</ul>
					</li>
					<li class="user-data">
						<ul style="display:none">
							<li>
								<a href=""><img class="avatar" align="absmiddle" src="/file/avatar/default.png" /> Mybutthurts</a>
							</li>
							<li>
								Posted: 12/21/2012
							</li>
							<li>
								Followers: 23
							</li>
							<li>
								Comments: 21
							</li>
						</ul>
					</li>
				</ul>
			</div> <!-- side-display-container -->
			
			<div class="side-display-container">
				<div class="side-image">
					<ul class="center">
						<li class="counter">16</li>
						<li>Related</li>
						<li>Reports</li>
						<li class="button">
							<a href="">View All</a>
						</li>
					</ul>
				</div>
				<ul class="side-display">
					<li>
						<h2>
							<a href=""><span class="icon phone"></span> Kim Lemons <span class="indicator resolved">RESOLVED</span></a>
						</h2>
					</li>
					<li>
						<p>
							<a href="">
							 I invested 1800 hundred dollar with this investment company since july 19 2012. im suppose to get paid close to 6300 by mid august of 2012. still now is in pending with no reply to my request. pleas…	
							 </a>
						</p>
					</li>
					<li>
						<ul class="extra-data cf">
							<li>
								Date Occurred: <strong>12/21/2012</strong>
							</li>
							<li>
								Reported Damages: <strong>$2,122.12</strong>
							</li>
							<li>
								<strong>False Advertising</strong>
							</li>
						</ul>
					</li>
					<li class="user-data">
						<ul style="display:none;">
							<li>
								<a href=""><img class="avatar" align="absmiddle" src="/file/avatar/default.png" /> Mybutthurts</a>
							</li>
							<li>
								Posted: 12/21/2012
							</li>
							<li>
								Followers: 23
							</li>
							<li>
								Comments: 21
							</li>
						</ul>
					</li>
				</ul>
			</div> <!-- side-display-container -->
			
			<div class="side-display-container">
				<div class="side-image">
					<ul class="center">
						<li class="counter">16</li>
						<li>Related</li>
						<li>Reports</li>
						<li class="button">
							<a href="">View All</a>
						</li>
					</ul>
				</div>
				<ul class="side-display">
					<li>
						<h2>
							<a href=""><span class="icon phone"></span> Kim Lemons <span class="indicator on-hold">ON HOLD</span></a>
						</h2>
					</li>
					<li>
						<p>
							<a href="">
							 I invested 1800 hundred dollar with this investment company since july 19 2012. im suppose to get paid close to 6300 by mid august of 2012. still now is in pending with no reply to my request. pleas…	
							 </a>
						</p>
					</li>
					<li>
						<ul class="extra-data cf">
							<li>
								Date Occurred: <strong>12/21/2012</strong>
							</li>
							<li>
								Reported Damages: <strong>$2,122.12</strong>
							</li>
							<li>
								<strong>False Advertising</strong>
							</li>
						</ul>
					</li>
					<li class="user-data">
						<ul style="display:none;">
							<li>
								<a href=""><img class="avatar" align="absmiddle" src="/file/avatar/default.png" /> Mybutthurts</a>
							</li>
							<li>
								Posted: 12/21/2012
							</li>
							<li>
								Followers: 23
							</li>
							<li>
								Comments: 21
							</li>
						</ul>
					</li>
				</ul>
			</div> <!-- side-display-container -->
		</div> <!-- list-container -->
		
		<div class="page-footer">
			<ul class="pagination">
				<li><a href="">1</a></li>
				<li class="active"><a href="">2</a></li>
				<li><a href="">3</a></li>
				<li><a href="">4</a></li>
				<li><a href="">5</a></li>
				<li><a href="">6</a></li>
				<li><a href="">7</a></li>
				<li><a href="">...</a></li>
				<li><a href="">Next</a></li>
			</ul>
			<div class="clear"></div>
		</div><!-- page-footer -->
	</div> <!-- column-2-main -->
	
	<div class="column-2-side">
		<span class="shadow-mask top"></span>
		<div class="container">
			<h4 class="new">Recent Blog Articles <span class="icon">New</span></h4>
			<ul class="side-display small">
				<li class="side-image"><a href="/profile/view/3/David"><img src="/file/avatar/default.png" alt="David" /></a></li>
				<li><a href="/report/view/12/Pinochio-Company-Complaint-12-for-$342.00" title="Pinochio Company Complaint 12 for $342.00">Pinochio Company Complaint 12 for $342.00</a></li>
				<li>
					Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.
				</li>
			</ul> <!-- side-display -->
            <div class="clear"></div>
			<ul class="side-display small">
				<li class="side-image"><a href="/profile/view/3/David"><img src="/file/avatar/default.png" alt="David" /></a></li>
				<li><a href="/report/view/11/Pinochio-Company-Complaint-11-for-$462.00" title="Pinochio Company Complaint 11 for $462.00">Pinochio Company Complaint 11 for $462.00</a></li>
				<li>
					Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.
				</li>
			</ul> <!-- side-display -->
            <div class="clear"></div>
			<ul class="side-display small">
				<li class="side-image"><a href="/profile/view/3/David"><img src="/file/avatar/default.png" alt="David" /></a></li>
				<li><a href="/report/view/10/Pinochio-Company-Complaint-10-for-$3,442.00" title="Pinochio Company Complaint 10 for $3,442.00">Pinochio Company Complaint 10 for $3,442.00</a></li>
				<li>
					Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper.
				</li>
			</ul> <!-- side-display -->
            <div class="clear"></div>
		</div> <!-- container -->
		
		<div class="container most-commented-widget">
			<h4>Most Commented</h4>
			<ul>
				<li>
					<span class="counter">341 <span class="tri"></span></span>
					<a href="">
						Donec ullamcorper nulla non metus auctor fringilla.
					</a>
				</li>
				<li>
					<span class="counter">341 <span class="tri"></span></span>
					<a href="">
						Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla.
					</a>
				</li>
				<li>
					<span class="counter">341 <span class="tri"></span></span>
					<a href="">
						Donec ullamcorper nulla non metus auctor fringilla.
					</a>
				</li>
				<li>
					<span class="counter">341 <span class="tri"></span></span>
					<a href="">
						Donec ullamcorper nulla non metus auctor fringilla.
					</a>
				</li>
				<li>
					<span class="counter">341 <span class="tri"></span></span>
					<a href="">
						Donec ullamcorper nulla non metus auctor fringilla.
					</a>
				</li>
			</ul>
		</div> <!-- container -->
		
		<div class="container trending-searches-widget">
			<h4>Trending Searches</h4>
			<ul class="inline">
				<li>
					<a href="">www.helpmeloseweight.com</a>
				</li>
				<li>
					<a href="">google</a>
				</li>
				<li>
					<a href="">bestbuy</a>
				</li>
				<li>
					<a href="">gemco</a>
				</li>
				<li>
					<a href="">zody</a>
				</li>
			</ul>
		</div> <!-- container -->
		<span class="shadow-mask bottom"></span>
	</div> <!-- column-2-side -->
</div> <!-- #browse -->
<?php include('includes/my_footer.php'); ?>