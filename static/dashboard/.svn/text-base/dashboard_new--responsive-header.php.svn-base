<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<!--[if lt IE 7]><html class="lt-ie9 lt-ie8 lt-ie7" xmlns="http://www.w3.org/1999/xhtml" xml:lang="en"><![endif]-->
<!--[if IE 7]><html class="lt-ie9 lt-ie8" xmlns="http://www.w3.org/1999/xhtml" xml:lang="en"><![endif]-->
<!--[if IE 8]><html class="lt-ie9" xmlns="http://www.w3.org/1999/xhtml" xml:lang="en"><![endif]-->
<!--[if gt IE 8]><!--><html xmlns="http://www.w3.org/1999/xhtml"><!--<![endif]-->
<head>
    <head profile="http://gmpg.org/xfn/11">
		<title>About Us | Scambook</title>
		<meta name="ROBOTS" content="INDEX">
		<link rel="shortcut icon" type="image/png" href="/media/css/css-img/favicon.png" />
		<link rel="shortcut icon" type="image/x-icon" href="/media/css/css-img/favicon.ico" />
		<link rel="apple-touch-icon" href="/media/css/css-img/scambook-apple-icon-iphone4.png" type="image/png" />
		<link rel="image_src" type="image/jpeg" href="http://www.scambook.loc/media/css/css-img/scambook_logo_beta_sml.png" />
		<link rel="author" href="https://plus.google.com/b/111658592432137230556/111658592432137230556/posts"/>

		<link type="text/css" href="/media/css/new/base.css" rel="stylesheet" media="screen, projection" />
		<link type="text/css" href="/media/css/new/dashboard.css" rel="stylesheet" media="screen, projection" />

		<!--[if IE 8]><link rel="stylesheet" href="/media/css/new/ie8-grid-foundation-4.css" /><![endif]-->


		<meta property="og:image" content="http://www.scambook.loc/media/css/css-img/scambook_logo_beta_sml.png" />
		<meta name="viewport" content="width=device-width" />

		<!--[if gte IE 9] Support for full multi-stop gradients with IE9 (using SVG). Add a "gradient" class to all your elements that have a gradient.>
  			<style type="text/css">
   				 .gradient { filter: none; }
			</style>
		<![endif]-->

		<script type="text/javascript" src="/media/js/new/vendor/custom.modernizr.js"></script>

		<script type='text/javascript' src='http://code.jquery.com/jquery-1.8.3.js'></script>
		<script type="text/javascript">
			$(function() {
				$(".toggleContainer").each(function() {
					//store the .sectiondrop__info height to an unchanging attribute
					$(this).find(".sectiondrop__info").attr("specHeight", $(this).find(".sectiondrop__info").height());
						//when the cat is clicked, expand or collapse the spec
					$(this).find(".sectiondrop__content").click(function(e) { e.preventDefault();

					//find spec for current toggleContainer that contains this category toggle button
					
					var spec = $(this).parent().parent().find(".sectiondrop__info");
					//check to see if the sectiondrop__info is displayed.
						
					if ($(spec).css("display") == "none") {

							//if it isn't then animate to specHeight attr and display inline-table
							$(spec).height(0);
								$(spec).css("display","block");
								var newHeight=$(spec).attr("specHeight");
								if(newHeight<100)
								newHeight=100;
							$(spec).animate({height:newHeight},150);
					}

					else {
						//if it is, then animate to 0 height, and display:none
						$(spec).animate({height:0},150,function(){$(spec).css("display","none");});
						}
					});
				});
			});
		</script>

	</head>
	<body>
		<header class="site-header">
	
			<div class="site-header__row-1-wrapper">
				<!--search for small device -->
				<div class="m-search-big" style="display:none;">
					<div class="row" >
						<div class="large-8 small-7 columns">
							<input type="text" placeholder="Search for a Complaint" title="Search for a Complaint"" value="" name="username"> 

						</div>
						<div class="large-4 small-5 columns">
							<a class="small button left m-search-big__button radius site-header__button-signup" href="#">Search</a>
							<div class="m-search-big__x left"></div>
						</div>
					</div> 
				</div><!-- m-search-big  -->

				<div class="site-header__row-1">
					<div class="row">
						<div class="large-12 columns">
					
							<div class="site-header__logo-slide-container" style="display: none;">
								<a href="#">
									<div class="site-header__logo-slide "></div>
								</a>
							</div><!-- site-header__logo-slide-container -->
							<menu class="c-menu-top" style="display: none;">
								<li><a href="#" class="active">Resolutions</a></li>
								<li><a href="#">Submitted</a></li>
								<li><a href="#">Commented</a></li>
								<li><a href="#">Messages</a></li>
							</menu> <!-- c-menu-top -->

							<div id="c-purse-counter">
								<div class="c-purse-counter__usd">$</div>
									<img class="c-purse-counter__img" alt="10,375,763.05" src="/file/number">
								<div class="c-purse-counter__string">
									Resolved in Reported Damages 
								</div><!-- c-purse-counter__string -->
							</div> <!-- purse-counter -->
							
							<!-- not login -->
							 
							<a href="#" class="small button radius right site-header__button-signup">Sign Up</a>
							<div class="m-login">
								<a href="#" class="has-dropdown">Login</a>
								<div class="m-dropdown-box m-dropdown-box__login" style="display:none;">
									<form method="post" action="https://www.scambook.com/login">
										<label>Email Address</label>
										<input type="text" placeholder="Email Address" title="Email Address" value="" name="username">
									 
										<label>Password</label>
										<input class="login-input" type="password" placeholder="Password" title="Password" value="" name="password">
										
										<div class="left">
											<label>
												<input id="rememberme" type="checkbox" value="forever" checked="checked" name="rememberme">
												<span class="less-visible"> Remember me</span>
											</label>
										</div>
										<a href="#" class="small button margin-top-5 radius right">Login</a>
										<div class="clearfix "></div>
										<a href="/account/forgot_password">Forgot your password? </a>
										<div class="clearfix "></div>
										<span class="less-visible">Or login by</span>
										<input class="m-social-login m-social-login__fb margin-left10" type="submit" value="">
										<input class="m-social-login m-social-login__gmail" type="submit" value="">
									</form> <!-- form -->
								</div> <!-- m-dropdown-box -->
							</div> <!-- m-login --> 
							

							 
							<!-- not login ends -->

						
							<!-- once login -->
							<?php /* 
							<div class="right">
								<div class="m-avatar-s left">
									<img class="m-avatar-s__img"src="/media/css/css-img/new/icon/login_fb.png"> 
								</div>
								<a href="#" class="left">asdf1234@gmail.com</a> 
								<div class="m-setting-icon-wrapper right"> 
									<div class="m-setting-icon has-dropdown right" ></div>

									<div class="m-dropdown-box m-dropdown-box__setting" style="display:none;">
										<ul class="m-dropdown-setting">
											<li class="m-dropdown-setting__menu"><a href="#" class="m-dropdown-setting__a">Account Settings</a></li>
											<li class="m-dropdown-setting__menu"><a href="#" class="m-dropdown-setting__a">Change Password</a></li>
											<li class="m-dropdown-setting__menu"><a href="#" class="m-dropdown-setting__a">Privacy Settings</a></li>
											<li class="m-dropdown-setting__split"> </li>
											<li class="m-dropdown-setting__menu"><a href="#" class="m-dropdown-setting__a less-visible">Logout</a></li>
										</ul>		
									</div> <!-- m-dropdown-box -->
								</div> <!-- right-->
							</div> <!-- right-->
							*/?>
							<!-- once login ends -->

							<div class="m-dropdown-language right">
								<div id="country-select">
								  <form action="#">
									<select id="country-options" name="country-options">
									  <option   title="javascript:void(0)" value="en">English</option>
									   <option   title="javascript:void(0)" value="es">Espanol</option>
								
									</select>
									<input value="Select" type="submit" />
								  </form>
								</div><!-- country select -->
							</div><!-- m-dropdown-language -->

							<div class="m-search">
								<form id="searchform" accept-charsevt="utf-8" method="post" action="/search">
									<input id="search-input" class="m-search__input" type="text" title="Search for a Complaint" placeholder="Search for a Complaint" name="search">
									<input id="search-submit" class="m-search__icon" type="submit" >
								</form>
							</div> <!-- m-search -->

							<div class="c-search-small-device right">
								<div class="c-search-small-device__icon"></div>
							</div> <!-- m-search -->

							
						</div> <!-- column -->
					</div> <!-- row -->

				</div> <!-- site-header__row-1 -->
			</div> <!-- site-header__row-1-wrapper -->

			<div class="site-header__row-2">

					<div class="row">
						<div class="large-12 columns">
			 
							<nav class="top-bar site-header__row-2-topbar">
							   <ul class="title-area">
								<!-- Title Area -->
								 <li class="name">
									<a href="#"><div class="site-header__logo" ></div></a>
									
									<div class="m-social-logos">
										<a href="https://www.facebook.com/ComplaintResolution" target="_blank"><div class="m-social-logos__fb"></div></a>
										<a href="https://twitter.com/Scambook" target="_blank"><div class="m-social-logos__twitter"></div></a>
										<a href="http://www.youtube.com/user/Scambook" target="_blank"><div class="m-social-logos__google"></div></a>
										<a href="#" target="_blank"><div class="m-social-logos__youtube"></div></a>
										<a href="https://itunes.apple.com/us/podcast/scambook-tv/id542558322" target="_blank"><div class="m-social-logos__itunes"></div></a>
									</div> <!-- m-social-logos -->


								 </li>
								 <!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->
								 <li class="toggle-topbar menu-icon"><a href="#"><span></span></a></li>
							   </ul>

							   <section class="top-bar-section">
								<!-- Right Nav Section -->
								 <ul class="right">
									  <li><a href="/submit" class="active">Report a Complaint</a></li>
									  <li><a href="/browse">Browse Complaints</a></li>
								      <li><a href="/insights">Scambook Insights</a></li>
									  <li><a href="/blog">Blog</a></li>
								 </ul>
							   </section> <!-- top-bar-section -->
							</nav> <!-- top-bar -->
						</div> <!-- columns -->
					</div>  <!-- row -->
				 
			</div> <!-- row-2 -->
		</header> <!-- site-header -->




		<div class="row">
			<div class="large-2 columns">
				<menu class="c-dashboard-nav">
					<li class="c-dashboard-nav__item">
						<a class="c-dashboard-nav__link" href="">
							<span class="c-dashboard-nav__icon c-dashboard-nav__icon--resolutions">
								<span class="c-dashboard-nav__badge">45</span>
							</span>
							RESOLUTIONS
						</a>
					</li>
					<li class="c-dashboard-nav__item">
						<a class="c-dashboard-nav__link" href="">
							<span class="c-dashboard-nav__icon c-dashboard-nav__icon--submitted">
								<span class="c-dashboard-nav__badge is-active">45</span>
							</span>
							SUBMITTED
						</a>
					</li>
					<li class="c-dashboard-nav__item">
						<a class="c-dashboard-nav__link" href="">
							<span class="c-dashboard-nav__icon c-dashboard-nav__icon--commented">
								<span class="c-dashboard-nav__badge">45</span>
							</span>
							COMMENTED
						</a>
					</li>
					<li class="c-dashboard-nav__item">
						<a class="c-dashboard-nav__link" href="">
							<span class="c-dashboard-nav__icon c-dashboard-nav__icon--messages">
								<span class="c-dashboard-nav__badge">45</span>
							</span>
							MESSAGES
						</a>
					</li>
				</menu>
			</div><!-- large-2 -->
			<!-- Start middle -->
			<div class="large-7 columns">
				<div data-alert class="alert-box radius">
					<span class="alert-box--text" >This was successful </span> 
					<a href="" class="close">&times;</a>
				</div> <!-- End alert -->


				<div class="m-section-heading">
					<h2 class="m-section-heading__text">
						Complaints
					</h2>
					<hr class="m-section-heading__hr no-margin" />
				</div><!-- m-section-heading -->
				<div class="panel c-d-complaint">
					<div class="m-ribbon--container">
						<div class="m-ribbon is-resolved">
							<div class="m-ribbon-text">
								Resolved
							</div><!-- m-ribbon-text -->
						</div><!-- m-ribbon -->
					</div><!-- m-ribbon-container -->
					<div class="panel__heading">
						<h5 class="panel__heading-text">
							Complaints 
						</h5>
						<div class="row">
							<div class="large-6 columns">
								<div class="subdue-text-color">
									Complaint #1234567890
								</div>
								<a href="#" data-dropdown="drop1" class="c-d-complaint__cl-btn">
									Check List<span class="c-d-complaint__cl-btn-icon"></span>
								</a>

								<div id="drop1" class="c-d-complaint__cl f-dropdown content" data-dropdown-content>
									<div class="c-d-complaint__cl-item">
										Complaint Submitted
										<span class="c-d-complaint__cl-icon is-complete"></span>
									</div>
									<div class="c-d-complaint__cl-item">
										Submit Proof
										<span class="c-d-complaint__cl-icon"></span>
									</div>
									<div class="c-d-complaint__cl-item">
										Initial Follow Up
										<span class="c-d-complaint__cl-icon"></span>
									</div>
									<div class="c-d-complaint__cl-item">
										Shared Complaint
										<span class="c-d-complaint__cl-icon is-complete"></span>
									</div>
								</div><!-- c-d-complaint__checklist -->
							</div> <!-- large-6 -->

							<div class="large-6 columns">
								<div class="m-share-mini inline-list">
									<ul class="m-share-mini__list">
										<li class="m-share-mini__item">
											<a href="#" class="m-share-mini__email"></a>
										</li>
										<li class="m-share-mini__item">
											<a href="#" class="m-share-mini__fb"></a>
										</li>
										<li class="m-share-mini__item">
											<a href="#" class="m-share-mini__twit" ></a>
										</li>
									</ul>
								</div><!-- m-share-mini -->
							</div><!-- large-6 -->
						</div><!-- row -->
					</div><!-- panel__heading -->
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
					<div class="row">
						<div class="large-6 columns">
							<a href="">						 
								<img src="http://www.scambook.com/file/company/lt.d888003e78a886804fb001608e6c796a5375857560edf8c5fb40bbc924215fbb.jpg" width="30" />
							</a>
							<a href="">						 
								<img src="http://www.scambook.com/file/company/lt.d888003e78a886804fb001608e6c796a5375857560edf8c5fb40bbc924215fbb.jpg" width="30" />
							</a>
							<a href="">						 
								<img src="http://www.scambook.com/file/company/lt.d888003e78a886804fb001608e6c796a5375857560edf8c5fb40bbc924215fbb.jpg" width="30" />
							</a>
							<a href="">						 
								<img src="http://www.scambook.com/file/company/lt.d888003e78a886804fb001608e6c796a5375857560edf8c5fb40bbc924215fbb.jpg" width="30" />
							</a>
							<a href="">						 
								<img src="http://www.scambook.com/file/company/lt.d888003e78a886804fb001608e6c796a5375857560edf8c5fb40bbc924215fbb.jpg" width="30" />
							</a>
						</div><!-- End 6 columns -->
						<div class="large-6 columns">
							<button class="small button radius right margin-left-20">Follow Up</button>
							<button class="small button radius right margin-left-20">Upload</button>
						</div><!-- End 6 columns -->
					</div>	 <!-- row --> 

					<hr />

					<div class="row margin-bottom-20">
						<div class="large-6 columns">
							<div class="m-side-display">
								<div class="m-side-display__img">
									<img class="left" src="http://www.scambook.com/file/company/lt.d888003e78a886804fb001608e6c796a5375857560edf8c5fb40bbc924215fbb.jpg" width="30" />
								</div>
								<div class="panel__subheading-text">Personal Investigator</div>
								John Smith
							</div><!-- m-side-display -->
						</div><!-- end large 6 -->
						<div class="large-6 columns">
							<div class="m-side-display">
								<div class="m-side-display__img">
									<span class="c-d-complaint__status-icon is-resolved"></span> 
								</div>
								<!-- Image icon above has 5 states
								pending, review, active, hold, resolved -->
								<span class="panel__subheading-text">Complaint Status</span>
								<br />
								Resolved
								<br />
								<strong>Refund:</strong> $5555.55
							</div><!-- m-side-display -->
						</div><!-- large 6 -->
					</div><!-- row -->

					<!-- Interior Content --> 
					<div class="row margin-bottom-20">
						<div class="large-12 columns">
							<h6 class="panel__subheading-text"> Progress</h6>
							<ul class="c-d-progress__container">
								<li class="c-d-progress__item is-pink">Complaint Submitted</li>
								<li class="c-d-progress__item is-green">Complaint Approved</li>
								<li class="c-d-progress__item is-red">Researched</li>
								<li class="c-d-progress__item is-blue">Mailed</li>
								<li class="c-d-progress__item is-yellow">First Call</li>
								<li class="c-d-progress__item is-yellow">First Email</li>
								<li class="c-d-progress__item is-red">Follow up Call</li>

								<li class="c-d-progress__item is-red">Follow up Email</li>
								<li class="c-d-progress__item is-orange">Signed up</li>
								<li class="c-d-progress__item is-grey">Complaint initiated</li>
								<li class="c-d-progress__item is-purple">SA Requested</li>
								<li class="c-d-progress__item is-blue2">SA Offer</li>
								<li class="c-d-progress__item is-green2">SA Resolved</li>
								<li class="c-d-progress__item is-green2">Resolution Accepted</li>
							</ul>
						</div><!-- large-12 -->
					</div><!-- row -->

					<div class="row">
						<div class="large-12 columns">
							<h6 class="panel__subheading-text">Activity Counter</h6>
						</div><!-- large-12 -->
					</div><!-- row -->
					<div class="row margin-bottom-20">
						<div class="large-6 columns">
							<div class="c-activity-counter__count">
								33
							</div>
							<div class="c-activity-counter__graph">
								<div class="c-activity-counter__bar is-25"></div>
							</div>
							Telephone calls
						</div><!-- End large 6 -->
						<div class="large-6 columns">
							<div class="c-activity-counter__count">
								55
							</div>
							<div class="c-activity-counter__graph">
								<div class="c-activity-counter__bar is-50"></div>
							</div>
							Updates
						</div> <!-- large 6 -->
					</div><!-- row -->
					<div class="row">
						<div class="large-6 columns">
							<div class="c-activity-counter__count">
								85
							</div>
							<div class="c-activity-counter__graph">
								<div class="c-activity-counter__bar is-75"></div>
							</div>
							Comments By Others
						</div><!-- End large 6 -->
						<div class="large-6 columns">
							<div class="c-activity-counter__count">
								12
							</div>
							<div class="c-activity-counter__graph">
								<div class="c-activity-counter__bar is-100"></div>
							</div>
							Sent Notices
						</div> <!-- large 6 -->
					</div><!-- row -->

					<hr />

					<div class="row">		
						<div class="large-12 columns">
							<h6 class="panel__subheading-text">
								<a href="#">Archive &#x25BE;</a>
							</h6>
						</div><!-- large-12 -->
					</div>

					<div class="row">
						<div class="large-12 columns">
							<h6 class="panel__subheading-text">Telephone Calls </h6>
						</div>
						<div class="large-6 columns">
							<div class="c-call__player"></div>
								Lorem ipsum dolor sit amet <br />
							<span class="subdue-text-color">
								April 01, 2013 - 05:30PM
							</span>
						</div><!-- large-6 -->
						<div class="large-6 columns">
							<div class="c-call__player"></div>
								Lorem ipsum dolor sit amet <br />
							<span class="subdue-text-color">
								April 01, 2013 - 05:30PM
							</span>
						</div><!-- large-6 -->
					</div><!-- row -->
					<hr />


					<div class="row">
						<div class="large-12 columns">
							<h6 class="panel__subheading-text">Sent Notices</h6>
						</div>
						<div class="large-12 columns">
							<table class="c-sent-notices__table">
								<thead>
									<tr>
										<th width="150">Title</th>
										<th>date</th>
										<th width="230">Description</th>
									</tr>
									</thead>
									<tbody>
									<tr>
										<td><a href="#" class="documenttitle" >Document Title</a></td>
										<td>04-30-2013</td>
										<td>Long Description here Lorem Ipsum dolor sit amet</td>
									</tr>
									<tr>
										<td><a href="#" class="documenttitle" >Document Title</a></td>
										<td>04-30-2013</td>
										<td>Long Description here Lorem Ipsum dolor sit amet</td>
									</tr>
									<tr>
										<td><a href="#" class="documenttitle" >Document Title</a></td>
										<td>04-30-2013</td>
										<td>Long Description here Lorem Ipsum dolor sit amet</td>
									</tr>
								</tbody>
							</table>
						</div><!-- large-12 -->
					</div><!-- row -->

					<div class="column-1 columns panel__footing">
						<a class="panel__panel-button" href="#">
							More Details &#x25BE;
						</a>
					</div>
					<div class="clearfix"></div>
				</div><!-- panel c-d-complaint -->

				<div class="panel complaintbox"> <!--Complaint panel -->
					<div class="panel__heading">
						<h5 class="panel__heading-text">
							Complaints Absolute ZERO
						</h5>
						<div class="row">
							<div class="large-6 columns">
								<div class="subdue-text-color">
									Complaint #1234567890
								</div>
								<a href="#" data-dropdown="drop2" class="c-d-complaint__cl-btn">
									Check List<span class="c-d-complaint__cl-btn-icon"></span>
								</a>

								<div id="drop2" class="c-d-complaint__cl f-dropdown content" data-dropdown-content>
									<div class="c-d-complaint__cl-item">
										Complaint Submitted
										<span class="c-d-complaint__cl-icon is-complete"></span>
									</div>
									<div class="c-d-complaint__cl-item">
										Submit Proof
										<span class="c-d-complaint__cl-icon"></span>
									</div>
									<div class="c-d-complaint__cl-item">
										Initial Follow Up
										<span class="c-d-complaint__cl-icon"></span>
									</div>
									<div class="c-d-complaint__cl-item">
										Shared Complaint
										<span class="c-d-complaint__cl-icon is-complete"></span>
									</div>
								</div><!-- c-d-complaint__checklist -->
							</div> <!-- large-6 -->

							<div class="large-6 columns">
								<div class="m-share-mini inline-list">
									<ul class="m-share-mini__list">
										<li class="m-share-mini__item">
											<a href="#" class="m-share-mini__email"></a>
										</li>
										<li class="m-share-mini__item">
											<a href="#" class="m-share-mini__fb"></a>
										</li>
										<li class="m-share-mini__item">
											<a href="#" class="m-share-mini__twit" ></a>
										</li>
									</ul>
								</div><!-- m-share-mini -->
							</div><!-- large-6 -->
						</div><!-- row -->
					</div><!-- panel__heading -->
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
					<div class="row">
						<div class="large-6 columns">
							<a href="">						 
								<img src="http://www.scambook.com/file/company/lt.d888003e78a886804fb001608e6c796a5375857560edf8c5fb40bbc924215fbb.jpg" width="30" />
							</a>
							<a href="">						 
								<img src="http://www.scambook.com/file/company/lt.d888003e78a886804fb001608e6c796a5375857560edf8c5fb40bbc924215fbb.jpg" width="30" />
							</a>
							<a href="">						 
								<img src="http://www.scambook.com/file/company/lt.d888003e78a886804fb001608e6c796a5375857560edf8c5fb40bbc924215fbb.jpg" width="30" />
							</a>
							<a href="">						 
								<img src="http://www.scambook.com/file/company/lt.d888003e78a886804fb001608e6c796a5375857560edf8c5fb40bbc924215fbb.jpg" width="30" />
							</a>
							<a href="">						 
								<img src="http://www.scambook.com/file/company/lt.d888003e78a886804fb001608e6c796a5375857560edf8c5fb40bbc924215fbb.jpg" width="30" />
							</a>
						</div><!-- End 6 columns -->
						<div class="large-6 columns">
							<button class="small button radius right margin-left-20">Follow Up</button>
							<button class="small button radius right margin-left-20">Upload</button>
						</div><!-- End 6 columns -->
					</div>	 <!-- row --> 

					<hr />

					<div class="row margin-bottom-20">
						<div class="large-6 columns">
							<div class="m-side-display">
								<div class="m-side-display__img">
									<img class="left" src="http://www.scambook.com/file/company/lt.d888003e78a886804fb001608e6c796a5375857560edf8c5fb40bbc924215fbb.jpg" width="30" />
								</div>
								<div class="panel__subheading-text">Personal Investigator</div>
								John Smith
							</div><!-- m-side-display -->
						</div><!-- end large 6 -->
						<div class="large-6 columns">
							<div class="m-side-display">
								<div class="m-side-display__img">
									<span class="c-d-complaint__status-icon is-resolved"></span> 
								</div>
								<!-- Image icon above has 5 states
								pending, review, active, hold, resolved -->
								<span class="panel__subheading-text">Complaint Status</span>
								<br />
								Active
								
							</div><!-- m-side-display -->
						</div><!-- large 6 -->
					</div><!-- row -->

					<!-- Interior Content --> 
					<div class="row margin-bottom-20">
						<div class="large-12 columns">
							<h6 class="panel__subheading-text"> Progress</h6>
							<ul class="c-d-progress__container">
								<li class="c-d-progress__item is-green">Complaint Submitted</li>
								<li class="c-d-progress__item is-blank"></li>
								<li class="c-d-progress__item is-blank"></li>
								<li class="c-d-progress__item is-blank"></li>
								<li class="c-d-progress__item is-blank"></li>
								<li class="c-d-progress__item is-blank"></li>
								<li class="c-d-progress__item is-blank"></li>
							</ul>
						</div><!-- large-12 -->
					</div><!-- row -->

					<div class="row">
						<div class="large-12 columns">
							<h6 class="panel__subheading-text">Activity Counter</h6>
						</div><!-- large-12 -->
					</div><!-- row -->
					<div class="row margin-bottom-20">
						<div class="large-6 columns">
							<div class="c-activity-counter__count">
								0
							</div>
							<div class="c-activity-counter__graph">
								<div class="c-activity-counter__bar is-25"></div>
							</div>
							Telephone calls
						</div><!-- End large 6 -->
						<div class="large-6 columns">
							<div class="c-activity-counter__count">
								0
							</div>
							<div class="c-activity-counter__graph">
								<div class="c-activity-counter__bar is-50"></div>
							</div>
							Updates
						</div> <!-- large 6 -->
					</div><!-- row -->
					<div class="row">
						<div class="large-6 columns">
							<div class="c-activity-counter__count">
								0
							</div>
							<div class="c-activity-counter__graph">
								<div class="c-activity-counter__bar is-75"></div>
							</div>
							Comments By Others
						</div><!-- End large 6 -->
						<div class="large-6 columns">
							<div class="c-activity-counter__count">
								0
							</div>
							<div class="c-activity-counter__graph">
								<div class="c-activity-counter__bar is-100"></div>
							</div>
							Sent Notices
						</div> <!-- large 6 -->
					</div><!-- row -->

					<hr />

					<div class="row">		
						<div class="large-12 columns">
							<h6 class="panel__subheading-text">
								<a href="#">Archive &#x25BE;</a>
							</h6>
						</div><!-- large-12 -->
					</div>

					<div class="row">
						<div class="large-12 columns">
							<h6 class="panel__subheading-text">Telephone Calls </h6>
						</div>
						<div class="telephone--is-nodata">
							This information is currently not available
						</div>
					</div><!-- row -->
					<hr />


					<div class="row">
						<div class="large-12 columns">
							<h6 class="panel__subheading-text">Sent Notices</h6>
						</div>
						<div class="large-12 columns">
							<table class="sentnoices--table">
								<thead>
									<tr>
										<th width="150">Title</th>
										<th>date</th>
										<th width="230">Description</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td colspan="3">
											<div class="sentnotices--is-nodata">This information is currently not available</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div><!-- large-12 -->
					</div><!-- row -->

					<div class="column-1 columns panel__footing">
						<a class="panel__panel-button" href="#">
							More Details &#x25BE;
						</a>
					</div>
					<div class="clearfix"></div>
				</div><!-- Complaint panel -->

				<div class="panel complaintbox">
					<div class="panel__heading">
						<h5 class="panel__heading-text">
							Non PS Complaints
						</h5>
						<div class="row">
							<div class="large-6 columns">
								<div class="subdue-text-color">
									Complaint #1234567890
								</div>
								<a href="#" data-dropdown="drop3" class="c-d-complaint__cl-btn">
									Check List<span class="c-d-complaint__cl-btn-icon"></span>
								</a>

								<div id="drop3" class="c-d-complaint__cl f-dropdown content" data-dropdown-content>
									<div class="c-d-complaint__cl-item">
										Complaint Submitted
										<span class="c-d-complaint__cl-icon is-complete"></span>
									</div>
									<div class="c-d-complaint__cl-item">
										Submit Proof
										<span class="c-d-complaint__cl-icon"></span>
									</div>
									<div class="c-d-complaint__cl-item">
										Initial Follow Up
										<span class="c-d-complaint__cl-icon"></span>
									</div>
									<div class="c-d-complaint__cl-item">
										Shared Complaint
										<span class="c-d-complaint__cl-icon is-complete"></span>
									</div>
								</div><!-- c-d-complaint__checklist -->
							</div> <!-- large-6 -->

							<div class="large-6 columns">
								<div class="m-share-mini inline-list">
									<ul class="m-share-mini__list">
										<li class="m-share-mini__item">
											<a href="#" class="m-share-mini__email"></a>
										</li>
										<li class="m-share-mini__item">
											<a href="#" class="m-share-mini__fb"></a>
										</li>
										<li class="m-share-mini__item">
											<a href="#" class="m-share-mini__twit" ></a>
										</li>
									</ul>
								</div><!-- m-share-mini -->
							</div><!-- large-6 -->
						</div><!-- row -->
					</div><!-- End panel__heading -->
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
					<div class="row">
						<div class="large-6 columns">
							<a href="">						 
								<img src="http://www.scambook.com/file/company/lt.d888003e78a886804fb001608e6c796a5375857560edf8c5fb40bbc924215fbb.jpg" width="30" />
							</a>
							<a href="">						 
								<img src="http://www.scambook.com/file/company/lt.d888003e78a886804fb001608e6c796a5375857560edf8c5fb40bbc924215fbb.jpg" width="30" />
							</a>
							<a href="">						 
								<img src="http://www.scambook.com/file/company/lt.d888003e78a886804fb001608e6c796a5375857560edf8c5fb40bbc924215fbb.jpg" width="30" />
							</a>
							<a href="">						 
								<img src="http://www.scambook.com/file/company/lt.d888003e78a886804fb001608e6c796a5375857560edf8c5fb40bbc924215fbb.jpg" width="30" />
							</a>
							<a href="">						 
								<img src="http://www.scambook.com/file/company/lt.d888003e78a886804fb001608e6c796a5375857560edf8c5fb40bbc924215fbb.jpg" width="30" />
							</a>
						</div><!-- End 6 columns -->
						<div class="large-6 columns">
							<button class="small button radius right margin-left-20">Follow Up</button>
							<button class="small button radius right margin-left-20">Upload</button>
						</div><!-- End 6 columns -->
					</div>	 <!-- row --> 

					<hr />

					<div class="row margin-bottom-20">
						<div class="large-6 columns">
							<div class="m-side-display">
								<div class="m-side-display__img">
									<img class="left" src="http://www.scambook.com/file/company/lt.d888003e78a886804fb001608e6c796a5375857560edf8c5fb40bbc924215fbb.jpg" width="30" />
								</div>
								<div class="panel__subheading-text">Personal Investigator</div>
								Available on Premium Support
							</div><!-- m-side-display -->
						</div><!-- end large 6 -->
						<div class="large-6 columns">
							<div class="m-side-display">
								<div class="m-side-display__img">
									<span class="c-d-complaint__status-icon is-resolved"></span> 
								</div>
								<!-- Image icon above has 5 states
								pending, review, active, hold, resolved -->
								<span class="panel__subheading-text">Complaint Status</span>								
								<br />
								Active
							</div><!-- m-side-display -->
						</div><!-- large 6 -->
					</div><!-- row -->

					<!-- Interior Content --> 

					<hr>
					<div class="npsbox">
						<div class="nps__head">
							<img class="nps__head--img" src="/media/css/css-img/new/dashboard/dashboard_icons/archive_npshead.png">
							<div class="nps__text">
								<span class="nps__textbig">
									You have not sign up for premium support yet.
								</span>
								<span class="nps__textsm">
									Get Premium Support and get the help<br/ >you need when you need it.
								</span>
								<div class="nps__btn">
									<button data-reveal-id="npsModal" href="#" class="small button radius"> Get Premium Support </button>
								</div>
							</div><!-- nps__text-->	
						</div> <!-- nps__head end -->
						<div class="nps__foot">
							<img class="nps__head--img" src="/media/css/css-	img/new/dashboard/dashboard_icons/archive_nps.png">
						</div>
					</div><!-- npsbox end -->
					
					<br />
					<div class="column-1 columns panel__footing">
						<a class="panel__panel-button" href="#"> More Details &#x25BE; </a>
					</div>
					<div class="clearfix"></div>
					
				</div><!-- Non Premium Complaint panel -->
				<div class="m-section-heading">
					<h2 class="m-section-heading__text">
						My Account
					</h2>
					<hr class="m-section-heading__hr no-margin" />
				</div><!-- m-section-heading -->

				<div class="panel panel--dashboard-large">
					<div class="panel__heading">
						<h5 class="panel__heading-text">
							Account Balance: $1,500
						</h5>
					</div><!-- panel__heading -->
					<table>
						<thead>
							<tr>
								<th width="80">Date</th>
								<th width="100">Amount</th>
								<th width="140">From</th>
								<th width="60">Status</th>
								<th>Notes</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td valign="top">12/21/2012</td>
								<td valign="top">$50.00</td>
								<td valign="top">DirecTV</td>
								<td valign="top">Resolved</td>
								<td valign="top">Resolved and ready to cash out</td>
							</tr>
							<tr>
								<td valign="top">12/21/2012</td>
								<td valign="top">$0</td>
								<td valign="top">Cyberdyne Systems</td>
								<td valign="top">Pending</td>
								<td></td>
							</tr>
							<tr class="last">
								<td colspan="5">
								</td>
							</tr>
						</tbody>
					</table>
					<div class="panel__heading">
						<h5 class="panel__heading-text">
							Cash Out via PayPal
						</h5>
					</div><!-- panel__heading -->

					<form class="custom">
						<label for="pp">
							My PalPal account email
						</label>
						<input id="pp" type="text" />
						<div class="panel__heading">
							<h5 class="panel__heading-text">
								Cash Out via Check
							</h5>
						</div><!-- panel__heading -->

						<div class="row">
							<div class="large-6 columns">
								<label for="c-fullname">
									Full Name
								</label>
								<input id="c-fullname" type="text" />
							</div><!-- large-6 -->
						</div><!-- row -->
						<div class="row">
							<div class="large-6 columns">
								<label for="c-address">
									Address
								</label>
								<input id="c-address" type="text" />
							</div><!-- large-6 -->
							<div class="large-6 columns">
								<label for="c-address2">
									Address 2
								</label>
								<input id="c-address2" type="text" />
							</div><!-- large-6 -->
						</div><!-- row -->
						<div class="row">
							<div class="large-6 columns">
								<label for="c-city">
									City
								</label>
								<input id="c-city" type="text" />
							</div><!-- large-6 -->
							<div class="large-6 columns">
								<label for="c-state">State</label>
								<select id="c-state">
									<option>
										California
									</option>
									<option>
										Alaska
									</option>
								</select>
							</div><!-- large-6 -->
						</div><!-- row -->
						<div class="row">
							<div class="large-6 columns">
								<label for="c-zip">
									Zip Code
								</label>
								<input id="c-zip" type="text" />
							</div><!-- -large-6 -->
							<div class="large-6 columns">
								<label for="c-phone">
									Phone
								</label>
								<input id="c-phone" type="text" />
							</div><!-- large-6 -->
						</div>
						<label for="c-agree">
							<input id="c-agree" type="checkbox" style="display: none;" /><span class="custom checkbox"></span> I agree with the <a href="">Terms &amp; Conditions</a>.
						</label>
						<button class="button small radius right">Submit</button>
						<div class="clearfix"></div>
					</form>
				</div><!-- panel -->

				<div class="m-section-heading">
					<h2 class="m-section-heading__text">
						Resolutions
					</h2>
					<hr class="m-section-heading__hr no-margin" />
				</div><!-- m-section-heading -->

				<div class="panel panel--dashboard-large">
					<div class="m-ribbon--container">
						<div class="m-ribbon is-resolved">
							<div class="m-ribbon-text">
								Resolved
							</div><!-- m-ribbon-text -->
						</div><!-- m-ribbon -->
					</div><!-- m-ribbon-container -->
					<div class="panel__heading">
						<h5 class="panel__heading-text">
							Cyberdyne Systems Cyberdyne Systems Cyberdyne Systems Cyberdyne Systems Cyberdyne Systems 
						</h5>
					</div><!-- panel__heading -->

					<ul class="large-block-grid-2">
						<li class="panel__heading-desc-left">
							<span class="subdue-text-color">
								Complaint #50459495
							</span>
						</li>
						<li class="panel__heading-desc-right">
							<strong>
								Refund: <span class="primary-text-color">$23,4999</span>
							</strong>
						</li>
					</ul>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
					<button class="small button radius right margin-left-20">
						Deny Resolution
					</button>
					<button class="small button radius right success margin-left-20">
						Accept Resolution
					</button>
					<div class="clearfix"></div>
					<div class="column-1 columns panel__footing">
						<a class="panel__panel-button" href="#">
							&#x25BE; More Details
						</a>
					</div>
					<div class="clearfix"></div>
				</div><!-- panel -->

				<div class="panel panel--dashboard-large">
					<div class="m-ribbon--container">
						<div class="m-ribbon is-in-dispute">
							<div class="m-ribbon-text">
								In Dispute
							</div><!-- m-ribbon-text -->
						</div><!-- m-ribbon -->
					</div><!-- m-ribbon--container -->
					<div class="panel__heading">
						<h5 class="panel__heading-text">
							Cyberdyne Systems
						</h5>
					</div><!-- panel__heading -->
				</div><!-- panel -->

				<div class="panel panel--dashboard-large">
					<div class="m-ribbon--container">
						<div class="m-ribbon is-pending">
							<div class="m-ribbon-text">
								Pending
							</div><!-- m-ribbon-text -->
						</div><!-- m-ribbon -->
					</div><!-- m-ribbon-container -->
					<div class="panel__heading">
						<h5 class="panel__heading-text">
							Cyberdyne Systems
						</h5>
					</div><!-- panel__heading -->
				</div><!-- panel -->

				<div class="panel panel--dashboard-large">
					<div class="m-ribbon--container">
						<div class="m-ribbon is-on-hold">
							<div class="m-ribbon-text">
								On Hold
							</div><!-- m-ribbon-text -->
						</div><!-- m-ribbon -->
					</div><!-- m-ribbon--container -->
					<div class="panel__heading">
						<h5 class="panel__heading-text">
							Cyberdyne Systems
						</h5>
					</div><!-- panel__heading -->

					<ul class="large-block-grid-2">
						<li class="panel__heading-desc-left">
							<span class="subdue-text-color">
								Complaint #50459495
							</span>
						</li>
						<li class="panel__heading-desc-right">
							<strong>
								Refund: <span class="primary-text-color">$23,4999</span>
							</strong>
						</li>
					</ul>

					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>

					<button class="small button radius right success">
						Accept Resolution
					</button>
					<div class="clearfix"></div>

					<div class="m-message-thread">
						<div class="m-message-thread__post m-message-thread__post--not-me">
							<ul class="no-bullet">
								<li class="m-message-thread__from">
									From: Cyberdyne Systems
								</li>
								<li class="m-message-thread__date">
									Date: 12/21/2013
								</li>
							</ul>
							<p class="m-message-thread__message">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							</p><!-- m-message-thread__message -->
						</div><!-- m-message-thread__post not-me -->
						<hr />
						<div class="m-message-thread__post m-message-thread__post--me">
							<ul class="no-bullet">
								<li class="m-message-thread__from">
									From: Me
								</li>
								<li class="m-message-thread__date">
									Date: 12/21/2013
								</li>
							</ul>
							<p class="m-message-thread__message">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							</p><!-- m-message-thread__message -->
						</div><!-- m-message-thread__post me -->
					</div><!-- m-messages-thread -->
				</div><!-- panel -->

				<div class="m-section-heading">
					<h2 class="m-section-heading__text">
						Messages
					</h2>
					<hr class="m-section-heading__hr no-margin" />
				</div><!-- m-section-heading -->
				<div class="panel">
					<div class="panel__heading">
						<h5 class="panel__heading-text">
							CareerSourceStaffing(Scoresense) Complaint 76948 for $29.95
						</h5>
					</div><!-- panel__heading -->
					<div class="m-message-thread">
						<div class="m-message-thread__post">
							<a class="m-message-thread__img" href="">
								<img width="16" src="http://www.scambook.loc/file/avatar/default.png" />
							</a>
							<div class="m-message-thread__message-container">
								<div class="m-message-thread__from-img">Username SBID #89490 - 12/24/2012</div>
								<p class="m-message-thread__message">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
								</p><!-- m-message-thread__message -->
							</div><!-- m-message-thread__message-container -->
						</div><!-- m-message-thread__post -->
						<hr />
						<div class="m-message-thread__post">
							<a class="m-message-thread__img" href="">
								<img width="16" src="http://www.scambook.loc/file/avatar/default.png" />
							</a>
							<div class="m-message-thread__message-container">
								<div class="m-message-thread__from-img">Username SBID #89490 - 12/24/2012</div>
								<p class="m-message-thread__message">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
								</p>
								<hr />
								<div class="m-message-thread__post">
									<a class="m-message-thread__img" href="">
										<img width="16" src="http://www.scambook.loc/file/avatar/default.png" />
									</a>
									<div class="m-message-thread__message-container">
										<div class="m-message-thread__from-img">Username SBID #89490 - 12/24/2012</div>
										<p class="m-message-thread__message">
											Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										</p>
										<hr />
										<div class="m-message-thread__post">
											<a class="m-message-thread__img" href="">
												<img width="16" src="http://www.scambook.loc/file/avatar/default.png" />
											</a>
											<div class="m-message-thread__message-container">
												<div class="m-message-thread__from-img">Username SBID #89490 - 12/24/2012</div>
												<p class="m-message-thread__message">
													Lorem Ipsum is simply dummy text of the printing and typesetting industry.
												</p>
											</div><!-- m-message-thread__message-container -->
										</div><!-- m-message-thread__post -->
									</div><!-- m-message-thread__message-container -->
								</div><!-- m-message-thread__post -->
							</div><!-- m-message-thread__message-container -->
						</div><!-- m-message-thread__post -->
						<hr />
						<textarea></textarea>
						<button class="small button radius right">
							Post Message
						</button>
						<div class="clearfix"></div>
					</div><!-- m-message-thread -->
				</div><!-- panel -->
				

				<div class="m-section-heading">
					<h2 class="m-section-heading__text">
						Account Settings
					</h2>
					<hr class="m-section-heading__hr no-margin" />
				</div><!-- m-section-heading -->
				<div class="panel">
					<div class="panel__heading">
						<h5 class="panel__heading-text">
							Avatar
						</h5>
						<hr />
					</div><!-- panel__heading -->
					<ul class="inline-list">
						<li>
							<label>
								<input name="sb_avatar" value="avatar-01.png" type="radio">
								<img width="70%" src="/file/avatar/st.avatar-01.png">
							</label>
						</li>
						<li>
							<label>
				        		<input name="sb_avatar" value="avatar-02.png" type="radio">
				        		<img width="70%" src="/file/avatar/st.avatar-02.png">
				        	</label>
						</li>
						<li>
				        	<label>
				        		<input name="sb_avatar" value="avatar-03.png" type="radio">
				        		<img width="70%" src="/file/avatar/st.avatar-03.png">
				        	</label>
				        </li>
				        <li>
				        	<label>
				        		<input name="sb_avatar" value="avatar-04.png" type="radio">
				        		<img width="70%" src="/file/avatar/st.avatar-04.png">
				        	</label>
						</li>
						<li>
				        	<label>
				        		<input name="sb_avatar" value="avatar-05.png" type="radio">
				        		<img width="70%" src="/file/avatar/st.avatar-05.png">
				        	</label>
				        </li>
						<li>
				        	<label>
				        		<input name="sb_avatar" value="avatar-06.png" type="radio">
				        		<img width="70%" src="/file/avatar/st.avatar-06.png">
				        	</label>
				        </li>
						<li>
				        	<label>
				        		<input name="sb_avatar" value="avatar-07.png" type="radio">
				        		<img width="70%" src="/file/avatar/st.avatar-07.png">
				        	</label>
				        </li>
						<li>
				        	<label>
				        		<input name="sb_avatar" value="avatar-08.png" type="radio">
				        		<img width="70%" src="/file/avatar/st.avatar-08.png">
				        	</label>
				        </li>
						<li>
				        	<label>
				        		<input name="sb_avatar" value="avatar-09.png" type="radio">
				        		<img width="70%" src="/file/avatar/st.avatar-09.png">
				        	</label>
				        </li>
				    </ul>

					<div class="panel__heading">
						<h5 class="panel__heading-text">
							Contact Information
						</h5>
						<hr />
					</div><!-- panel__heading -->
					<form class="custom">
						<div class="row">
							<div class="large-6 columns">
								<label for="fname">First Name</label>
								<input id="fname" type="text">
							</div>
							<div class="large-6 columns">
								<label for="lname">Last Name</label>
								<input id="lname"  type="text">
							</div>
						</div><!-- row -->
						<div class="row">
							<div class="large-6 columns">
								<label for="email">Email</label>
								<input id="email" type="text">
							</div>
							<div class="large-6 columns">
								<label for="sname">Screen Name</label>
								<input id="sname" type="text">
							</div>
						</div><!-- row -->
						<hr />
						<div class="row">
							<div class="large-6 columns">
								<label for="address">Address</label>
								<input id="address" type="text">
							</div>
							<div class="large-6 columns">
								<label for="city">City</label>
								<input id="city" type="text">
							</div>
						</div><!-- row -->
						<div class="row">
							<div class="large-6 columns">
								<label for="state">State</label>
								<select id="state">
									<option>
										California
									</option>
									<option>
										Alaska
									</option>
								</select>
							</div>
							<div class="large-6 columns">
								<label for="zip">Zip Code</label>
								<input id="zip" type="text">
							</div>
						</div><!-- row -->
						<div class="row">
							<div class="large-6 columns">
								<label for="country">Country</label>
								<select id="country" class="">
									<option>
										USA
									</option>
									<option>
										Russia
									</option>
								</select>
							</div>
							<div class="large-6 columns">
								<label for="phone">Phone</label>
								<input id="phone" type="text">
							</div>
						</div><!-- row -->
						<div class="row">
							<div class="large-6 columns">
								<label for="gender">Gender</label>
								<select id="gender" class="">
									<option>
										Male
									</option>
									<option>
										Female
									</option>
								</select>
							</div>
						</div><!-- row -->
						<hr />
						<button class="small button radius right">
							Save Settings
						</button>
						<div class="clearfix"></div>
					</form>
				</div><!-- panel -->

				<div class="m-section-heading">
					<h2 class="m-section-heading__text">
						Privacy
					</h2>
					<hr class="m-section-heading__hr no-margin" />
				</div><!-- m-section-heading -->
				<div class="panel">
					<div class="panel__heading">
						<h5 class="panel__heading-text">
							Privacy Settings
						</h5>
						<hr />
					</div><!-- panel__heading -->
					<form class="radio-list">
						<div class="row">
							<div class="large-11 columns">
								<label for="check1">
									Use Screen Name instead of first name on all postings
								</label>
							</div>
							<div class="large-1 columns">
								<input name="check1" type="checkbox" id="check1" CHECKED/ >
							</div>
						</div><!-- row -->
						<div class="row">
							<div class="large-11 columns">
								<label for="check2">
									Allow Lawyers or a third party to contact you
								</label>
							</div>
							<div class="large-1 columns">
								<input name="check2" type="checkbox" id="check2" />
							</div>
						</div><!-- row -->
						<hr />
						<button class="small button radius right">
							Save Settings
						</button>
						<div class="clearfix"></div>
					</form>
				</div><!-- panel -->

				<div class="panel">
					<div class="panel__heading">
						<h5 class="panel__heading-text">
							Notification Settings
						</h5>
						<hr />
					</div><!-- panel__heading -->
					<form class="radio-list">
						<div class="row">
							<div class="large-11 columns">
								<label for="check3">
									 When someone sends you a message
								</label>
							</div>
							<div class="large-1 columns">
								<input name="check3" type="checkbox" id="check3"/ >
							</div>
						</div><!-- row -->
						<div class="row">
							<div class="large-11 columns">
								<label for="check4">
									When someone comments on your reports
								</label>
							</div>
							<div class="large-1 columns">
								<input name="check4" type="checkbox" id="check4"/ >
							</div>
						</div><!-- row -->
						<div class="row">
							<div class="large-11 columns">
								<label for="check5">
									When someone comments after you in a report
								</label>
							</div>
							<div class="large-1 columns">
								<input name="check5" type="checkbox" id="check5"/ >
							</div>
						</div><!-- row -->
						<div class="row">
							<div class="large-11 columns">
								<label for="check6">
									Send me Newsletter about scam trends and prevention tips
								</label>
							</div>
							<div class="large-1 columns">
								<input name="check6" type="checkbox" id="check6"/ >
							</div>
						</div><!-- row -->
						<div class="row">
							<div class="large-11 columns">
								<label for="check7">
									Notify me when there are updates regarding my complaint
								</label>
							</div>
							<div class="large-1 columns">
								<input name="check7" type="checkbox" id="check7"/ >
							</div>
						</div><!-- row -->
						<hr />
						<button class="small button radius right">
							Save Settings
						</button>
						<div class="clearfix"></div>
					</form>
				</div><!-- panel -->
			</div><!-- large-7 -->
			<!-- Complaints Start -->


			<!--- Complaints END -->
			<div class="large-3 columns">
				<div class="panel c-balance margin-top-20">
					<div class="c-balance__heading">
						My Account Balance
					</div>
					<div class="c-balance__amount">
						$1500
					</div>
					<div class="c-balance__string">
						Payout will be sent to your PayPal account<br />
					<a href="">Change Account</a>
					</div>
					<a href="" class="button radius small">Payout Now</a>
					<div class="c-balance__footing">
						<a class="subdue-text-color" href="#" data-reveal-id="what-is-payout">
							<em>What is this?</em>
						</a>
					</div>
				</div><!-- c-balance -->
				<img class="m-section-banner" src="/media/css/css-img/new/dashboard/dashboard_icons/premium_banner.png">
				<div class="m-section-heading">
					<h2 class="m-section-heading__text">
						Activity Feed
					</h2>
					<hr class="m-section-heading__hr no-margin" />
				</div><!-- m-section-heading -->
				<div class="c-activity">
					<div class="c-activity__date">
						12/21/2013
					</div>
					<p class="c-activity__desc">
						Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus. Quisque lacus quam, egestas.
					</p>
					<hr />
				</div><!-- c-activity -->
				<div class="c-activity">
					<div class="c-activity__date">
						12/21/2013
					</div>
					<p class="c-activity__desc">
						Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus. Quisque lacus quam, egestas. <button class="small button radius right activity__btn" >View Details </button>
					</p>
					<hr />
				</div><!-- c-activity -->
				<div class="c-activity">
					<div class="c-activity__date">
						12/21/2013
					</div>
					<p class="c-activity__desc">
						Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus. Quisque lacus quam, egestas.
						<a href="">View Details</a>
					</p>
					<hr />
				</div><!-- c-activity -->
			</div><!-- large-3 -->
		</div>
	<!-- Check for Zepto support, load jQuery if necessary -->
		<script>
			document.write('<script src=/media/js/new/vendor/'
				+ ('__proto__' in {} ? 'zepto' : 'jquery')
				+ '.js><\/script>');
		</script>
		<script type="text/javascript" src="/media/js/new/foundation/foundation.js"></script>
		<script type="text/javascript" src="/media/js/new/foundation/foundation.alerts.js"></script>
		<script type="text/javascript" src="/media/js/new/foundation/foundation.reveal.js"></script>
		<script type="text/javascript" src="/media/js/new/foundation/foundation.forms.js"></script>
		<script type="text/javascript" src="/media/js/new/foundation/foundation.dropdown.js"></script>
		<script type="text/javascript" src="/media/js/new/foundation/foundation.topbar.js"></script>
		<script>
			$(document).foundation();
		</script>
		<script type="text/javascript" src="/media/js/new/base.js"></script>

		<!-- language dropdown -->
		
        <script>
			$(document).ready(function() {
				// foundation modal
				$('a.reveal-link').trigger('click');
				$('a.close-reveal-modal').trigger('click');



			// turn select into dl
			createDropDown();

			var $dropTrigger = $(".dropdown dt a");
			var $languageList = $(".dropdown dd ul");

			// open and close list when button is clicked
			$dropTrigger.toggle(function() {
				$languageList.slideDown(200);
				$dropTrigger.addClass("active");
			}, function() {
				$languageList.slideUp(200);
				$(this).removeAttr("class");
			});

			// close list when anywhere else on the screen is clicked
			$(document).bind('click', function(e) {
				var $clicked = $(e.target);
				if (! $clicked.parents().hasClass("dropdown"))
					$languageList.slideUp(200);
					$dropTrigger.removeAttr("class");
			});

			// when a language is clicked, make the selection and then hide the list
			$(".dropdown dd ul li a").click(function() {
				/*
				var clickedValue = $(this).parent().attr("class");
				var clickedTitle = $(this).find("em").html();
				$("#target dt").removeClass().addClass(clickedValue);
				$("#target dt em").html(clickedTitle);
				$languageList.hide();
				$dropTrigger.removeAttr("class");
				*/
				var lang = $(this).parent().attr('class');
				$.ajax({
					url: base_url + 'language/set/' + lang,
					success: function(data) {
						var lang_sub = lang;
						if (lang_sub == 'en')
							lang_sub = 'www';
						var url_match = document.URL.match(/^(https?:\/\/)?(.*?)\/(.*)$/);
						var domain = url_match[2];
						if (!(domain == 'localhost' ||
							  domain == 'demo.scambook.com' ||
							  domain == '50.19.252.101'))
						{
							var domain_parts = domain.split('.');
							domain_parts[0] = lang_sub;
							domain = domain_parts.join('.');
						}
						var go_to = url_match[1] + domain + '/' + url_match[3];

						window.location = go_to;
					}
				});
			});
		});

		// actual function to transform select to definition list
		function createDropDown(){
			var $form = $("div#country-select form");
			$form.hide();
			var source = $("#country-options");
			source.removeAttr("autocomplete");
			var selected = source.find("option:selected");
			var options = $("option", source);
			$("#country-select").append('<dl id="target" class="dropdown"></dl>')
			$("#target").append('<dt class="' + selected.val() + '"><a href="#"><span class="flag"></span><em>' + selected.text() + '</em></a></dt>')
			$("#target").append('<dd><ul></ul></dd>')
			options.each(function(){
				if($(this).val() != selected.val())
					$("#target dd ul").append('<li class="' + $(this).val() + '"><a href="' + $(this).attr("title") + '"><span class="flag"></span><em>' + $(this).text() + '</em></a></li>');
			});
		}

		</script>
<div id="what-is-payout" class="reveal-modal">
	<h5 class="subheader">
		Account Balance Information
	</h5>
	<p>
		Scambook's Complaint Resolution Platform allows businesses and individuals to resolve complaints filed against them in mutual resolutions or in a form of a refund.
	</p>
	<p>
		If you have accepted a refund the accepted amount will show in your Account Balance once we have verified the funds offered by the business. Scambook currently can only refund payouts via PayPal. For more information on PayPal please visite www.paypal.com. 
	</p>
	<a class="close-reveal-modal">&#215;</a>
</div><!-- what-is-payoput -->

<div id="npsModal" class="reveal-modal">
	<div class="npsModal__headerbg"></div>
	<div class="row npsModalcontent">
		<h2 class="npsModal__header">Premium Support <span class="nps__white"> Sign Up</span></h2>

		<div class="row npsModal__boxes">
			<div class="large-4 columns">
				<p> <strong>Protect yourself from getting scammed!</strong>
					<br />
					There are numerous sites out there preying on individuals like you with super deals or free offers. That letter or email you received about an inheritance, probably a scam.
				</p>
				<p> <strong>Shop safely.</strong> <br />
					Feel secure with access to your own Scambook Investigator
				</p>
				<p> <strong>Know What&rsquo;s Safe.</strong><br />
					Unsure about a certain website or email/letter received? Your Scambook Investigator will tell you.
				</p>
			</div> <!-- End 3 Columns -->
			<div class="large-8 columns">
				<form class="custom">				
					<div class="row">
						<div class="large-6 columns">
							<label for="c-fullname">
								Cardholder Name
							</label>
							<input id="c-cardholdername" type="text" />
						</div><!-- large-6 -->
						<div class="large-6 columns">
							<label for="c-phone">
								Phone
							</label>
							<input id="c-phone" type="text" />
						</div><!-- large-6 -->
					</div><!-- row -->
						
					<div class="row">
						<div class="large-6 columns">
							<label for="c-ccnumber">
								Credit Card Number
							</label>
							<input id="c-ccnumber" type="text" />
						</div><!-- large-6 -->
						<div class="large-3 columns">
							<label for="c-ccmonth">
								month
							</label>
							<input id="c-ccmonth" type="text" />
						</div><!-- small-3 -->
						<div class="large-3 columns">		
							<label for="c-ccyear">
								Year
							</label>
							<input id="c-ccyear" type="text" />
						</div><!-- small-3 -->
					</div><!-- row -->
						
					<div class="row">
						<div class="large-6 columns">
							<label for="c-ccagree">
								<input id="c-ccagree" type="checkbox" style="display: none;">
								<span class="custom checkbox"></span>
								I agree with the <a href="#">Terms &amp; Conditions</a>.
							</label>
						</div>
						<div class="large-6 columns">
							<button class="button small radius right">Submit</button>
						</div>
					</div>
					
					<div class="row">
						<p class="c-footnote">
							You can try our Premium Support service for $9.99/mo for 30 days, if you are not satisfied with our service we will refund you the service fee. No Question Asked!
						</p>
					</div><!-- row -->
				</form>
			</div><!-- large-8 -->
		</div> <!-- end row box content -->
	</div><!-- npsModalcontent -->
	<a class="close-reveal-modal">&#215;</a>
</div><!-- End Modal Box -->


	</body>
</html>
