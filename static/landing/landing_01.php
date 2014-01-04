<!doctype html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="en"> <!--<![endif]-->
	<head>
		<meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">		       
		<title></title>
        <meta name="viewport" content="width=970px">

        <link type="text/css" href="/media/js/fancybox/jquery.fancybox-1.3.4.css" rel="stylesheet" media="screen, projection" />
		<link type="text/css" href="/media/css/landing_01.css" rel="stylesheet" media="screen, projection" />

		<script type="text/javascript" src="/media/js/jquery-1.6.4.min.js"></script>
		<script type="text/javascript" src="/media/js/fancybox/jquery.fancybox-1.3.4.pack.js"></script>
		<!--[if gte IE 9] Support for full multi-stop gradients with IE9 (using SVG). Add a "gradient" class to all your elements that have a gradient.>
		<style type="text/css">
			.gradient { filter: none; }
		</style>
		<![endif]-->

		<script>
		// fancybox for video sam on homepage
		$(function () {
		    $("#video-sam").click(function() {
		    	$.fancybox({
					'padding'		: 0,
					'autoScale'		: false,
					'transitionIn'	: 'fade',
					'speedIn'		: '300',
					'transitionOut'	: 'none',
					'title'			: this.title,
					'width'			: 700,
					'height'		: 420,
					'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
					'type'			: 'swf',
					'swf'			: {
					   	 'wmode'		: 'transparent',
						'allowfullscreen'	: 'true'
					}
				});
		    
		    	return false;
		    });
		});
	    </script>
                
	</head>
	<body>
		<div class="menu-container">
			<div class="menu">
				<div class="logo">
				</div>
				<div class="menu__right">
					<span class="resolved-amount">$10,074,545</span> Resolved In Reported Damages
				</div><!-- menu__right -->
			</div><!-- menu -->
		</div><!-- menu-container -->

		<div class="main-screen-container">
			<div class="main-screen">
				<ul class="main-screen__heading">
					<li class="heading-1">
						Do you have any complaints?
					</li>
					<li>
						we can get it resolved!
					</li>
				</ul>
				<a id="video-sam" href="http://www.youtube.com/watch?v=N3tGIYojYx4&amp;rel=0;autoplay=1">
					<span class="video-thumb"></span>
				</a>
				<div class="clear"></div>
				<div class="step1" style="display:ndone;">
					<div class="pup-up-box">
						<div class="header">
							<h2><i>Who are you complaining against?</i></h2>
							<div class="step">Step1 out of 3</div>
							<p class="quote">Scambook is here to help your complaints resolved.</p>
						</div> <!-- header -->
						<div class="pink-line"></div> 

						<div class="contents-wrapper" style="width:340px; margin:0 auto;">
							<form>
								<div class="column-348">
									<label>I am filing a complaint against: <span class="necessary">*</span></label>
									<input class="super-large xlarge" max-length="68" type="text" value="">
									
									<div class="select-type-radio">
										<p class="title">Select Type <span class="necessary">*</span></p>
										<label>
											<input type="radio" name="type" value="Company">
											Company
										</label>
										<label>
											<input type="radio" name="type" value="Person">
											Person
										</label>
										<label>
											<input type="radio" name="type" value="Phone">
											Phone
										</label>
										<div class="clear-both"></div>
									</div>

									<span class="float-left">
										<label>Their username</label>
										<input class="small" type="text" value="" name="their_username">
									</span>
									<span class="float-left margin-left14">
										<label>Their email address</label>
										<input class="small" type="text" value="" name="their_email_address">
									</span>

									<label>Address</label>
									<input class="xlarge" type="text" value="" name="address">

									<span class="float-left">
										<label>Monetary Damages <span class="necessary">*</span></label>
										<input class="small" type="text" value="" name="monetary_damages">
									</span>
									<span class="float-left margin-left14">
										<label>Date <span class="necessary">*</span></label>
										<input class="small" type="text" value="" name="date">
									</span>
								

									<!-- get rid of input value -->
									<script type="text/javascript">
									  function clearContents(element) {
										  element.value = '';
										}
									</script>

									
									<label>Details</label>
									<textarea onfocus="clearContents(this);" class="xlarge margin-bottom20" name="message"></textarea>
									<input class="form-button float-right" type="submit" disabled="disabled" value="Send" name="submit">
									</div> <!-- column-348 -->
								<div class="clear-both"></div>
							</form>
						</div> <!-- contents-wrapper -->
					</div> <!-- pup-up-box -->
				</div><!-- step1 -->

				<div class="step2" style="display:ndone;">
					<div class="pup-up-box">
						<div class="header">
							<h2><i>Confirm Submission</i></h2>
							<p class="quote">Sacmbook is here to help your complaints resolved.</p>
						</div> <!-- header -->
						<div class="pink-line"></div> 
						<div class="pup-up-box__content--alert">
							<div class="pup-up-box__info">
								<div class="avatar">
									<img width="36" src="http://www.scambook.com/file/avatar/default.png" />
								</div>
								<ul class="col col-1">
									<li>
										Date occurred: 03/4/13
									</li>
									<li>
										Reported damages: $223.44 sdflkdj slkdjf laksj df;lajs df;lkjas d;lfkj sdjf
									</li>
								</ul>
								<ul class="col col-2">
									<li>
										Date occurred: 03/4/13
									</li>
									<li>
										Reported damages: $223.44
									</li>
								</ul>
							</div><!-- pup-up-box__info -->
							<div class="clear"></div>

							<div class="pup-up-box__description">
								<p>
									I live at 6306 Tulsa Rd. Apt. H in Houston, Tx. 77092. My name is not Donald J. Hays, nor do I know, or have known anyone by that name. I have returned every letter that has his name on it, and now you are sending them back, with my hand written note "RETURN TO SENDER". I never ever had anything to do with your company, never had a claim filed , or any policy with Aflac. Please, stop sending this mail to my address. You need to look elsewhere to find said party. Please find the correct address for this person and leave me alone. I'm sure he would like his claim handled correctly. I live at 6306 Tulsa Rd. Apt. H in Houston, Tx. 77092. My name is not Donald J. Hays, nor do I know, or have known anyone by that name. I have returned every letter that has his name on it, and now you are sending them back, with my hand written note "RETURN TO SENDER". I never ever had anything to do with your company, never had a claim filed , or any policy with Aflac. Please, stop sending this mail to my address. You need to look elsewhere to find said party. Please find the correct address for this person and leave me alone. I'm sure he would like his claim handled correctly.
								</p>
							</div><!-- pup-up-box__description -->
							<a class="flote-left">Go back</a>
							<a class="form-button float-right">Submit</a>
							<div class="clear"></div>
							<div class="center">
								By clicking Submit you agree to our Terms and Conditions
							</div>
						</div><!-- pup-up-box__content -->
					</div> <!-- pup-up-box -->
				</div><!-- step2 -->
				

				<div class="step3" style="display:ndone;"> 
					<div class="pup-up-box pup-up-box_step2">
						<div class="header">
							<h2><i>Account information</i></h2>
							<div class="step">Step2 out of 3</div>
							<p class="quote">Scambook is here to help your complaints resolved.</p>
						</div> <!-- header -->
						<div class="pink-line"></div> 

						<div class="contents-wrapper">
							<div class="column-655">
								<form>
									<span class="float-left">
										<label>First name <span class="necessary">*</span></label>
										<input class="medium" type="text" value="" name="first-name">
									</span>
									<span class="float-left margin-left14">
										<label>Last Name <span class="necessary">*</span></label>
										<input class="medium" type="text" value="" name="last-name">
									</span>

									<label>Email address  <span class="necessary">*</span></label>
									<input class="medium" type="text" value="" name="email-address">

									<span class="float-left">
										<label>Password <span class="necessary">*</span></label>
										<input class="medium" type="password" value="" name="password">
									</span>
									<span class="float-left margin-left14">
										<label> Confirm Password <span class="necessary"> *</span></label>
										<input class="medium" type="password" value="" name="confirm-password">
									</span>
									<div class="agree-terms">
										<input id="agree-terms" type="checkbox" value="true" name="agree-terms">
										<label for="agree-terms"><span>By using scambook you agree to our Terms and Conditions</span></label>
									</div>
									<div class="clear-both"></div>
									<a href="https://trustsealinfo.verisign.com/splash?form_file=fdf/splash.fdf&dn=www.scambook.com&lang=en" target="_blank"><img class="norton" src="/media/css/css-img/landing/landing_01/secure_norton.jpg"></a>
									<a href="http://privacy.truste.com/privacy-seal/Scambook-LLC/validation?rid=40be6fbd-817b-4576-a019-990195ffae72" target="_blank"><img class="truste" src="/media/css/css-img/landing/landing_01/secure_truste.jpg"></a>
									
									
									
									<input class="form-button float-right" type="submit" value="Send" name="submit">
								</form>
							</div> <!-- column-655 -->

							<div class="clear-both"></div>
						</div> <!-- contents-wrapper -->
					</div> <!-- pup-up-box -->

					<div class="m-more-detail">
						<h3>What you will get</h3>
						<ul class="features-signup">
							<li><img src="/media/css/css-img/landing/landing_01/what-you-will-get_1.jpg"><p>Scambook Investigators that will research your complaint</p></li>
							<li><img src="/media/css/css-img/landing/landing_01/what-you-will-get_2.jpg"><p>A community that gives feedback and share similar experiences</p></li>
							<li><img src="/media/css/css-img/landing/landing_01/what-you-will-get_3.jpg"><p>Resources to your local athorities that may also help with your complaint</p></li>
						</ul>
					</div> <!-- m-more-detail -->
				</div> <!-- step3 -->


				<div class="step4" style="display:ndone;"> 
					<div class="pup-up-box pup-up-box_step3">
						<div class="header">
							<h2><i>Premium</i></h2>
							<div class="step">Last Step</div>
							<p class="quote">Scambook is here to help your complaints resolved.</p>
						</div> <!-- header -->
						<div class="pink-line"></div> 

						<div class="contents-wrapper">
							<div class="column-655">
								
								<img class="credit-card" src="/media/css/css-img/landing/landing_01/credit-card.jpg">	
								<form>
									<span class="float-left">
										<label>Cardholder Name <span class="necessary">*</span></label>
										<input class="medium" type="text" value="" name="cardholder">
									</span>
									<span class="float-left margin-left14">
										<label>Credit Card Number <span class="necessary">*</span></label>
										<input class="medium" type="text" value="" name="creadit-card-number">
									</span>

									<div style="margin-bottom:10px;">
									<span class="float-left">
										<label>CVC <span class="necessary">*</span></label>
										<a class="cvc-tip" href="#">
	                                        <img src="/media/css/css-img/business-compare-tip.png">
	                                        <span class="info">
	                                               <div class="cvcimg"></div>
	                                        </span>
	                                    </a>
										<input class="xxsmall" type="text" value="" name="cvc">
									</span>
									<span class="float-left margin-left14">
										<label>Card Expiration Date <span class="necessary">*</span></label><br />
										
											<select tabindex="3">
												<option value="01">01</option>
												<option value="02">02</option>
												<option value="03">03</option>
												<option value="04">04</option>
												<option value="05">05</option>
												<option value="06">06</option>
												<option value="07">07</option>
												<option value="08">08</option>
												<option value="09">09</option>
												<option value="10">10</option>
												<option value="11">11</option>
												<option value="12">12</option>
											</select>
											/
											<select class="card-expiry-year" tabindex="4" style="margin-left:10px;">
												<option value="2013">2013</option>
												<option value="2014">2014</option>
												<option value="2015">2015</option>
												<option value="2016">2016</option>
												<option value="2017">2017</option>
												<option value="2018">2018</option>
												<option value="2019">2019</option>
												<option value="2020">2020</option>
											</select>
										</span>
									<div class="float-left" style="margin-left:15px">
											<label>Phone Number</label>
											<br>
											<input class="small" type="text" name="phone_number" id="phone_number" tabindex="5">
										</div>
										<div class="clear-both"></div>
									</div>
									
									<div class="agree-terms">
										<input id="agree-terms" type="checkbox" value="true" name="agree-terms">
										<label for="agree-terms"><span>By using scambook you agree to our Terms and Conditions for Scambook Premium Support. I understand I will be billed $9.99 per month until I cancel. </span></label>
									</div>
									<a href="https://trustsealinfo.verisign.com/splash?form_file=fdf/splash.fdf&dn=www.scambook.com&lang=en" target="_blank"><img class="norton" src="/media/css/css-img/landing/landing_01/secure_norton.jpg"></a>
									<a href="http://privacy.truste.com/privacy-seal/Scambook-LLC/validation?rid=40be6fbd-817b-4576-a019-990195ffae72" target="_blank"><img class="truste" src="/media/css/css-img/landing/landing_01/secure_truste.jpg"></a>
									<div class="clear-both"></div>
									<input class="form-button float-right" type="submit" value="Send" name="submit">
									<div class="clear-both"></div>
									<a href="#" class="dashboard"> No thanks, take me to my Dashboard.</a>
								</form>
							</div> <!-- column-655 -->

							<div class="clear-both"></div>
						</div> <!-- contents-wrapper -->
					</div> <!-- pup-up-box -->

					<div class="m-more-detail m-more-detail_premium">
						<h3>Premium Features</h3>
						<p>
							Enlist our Premium Support team to help you get your money back. Our Premium Support team will guide you through the process of your submitted complaint and update you on our progress in getting your money back

							</br></br>You can try our Premium Support service for <span>$9.99/mo for 30 days</span>, if you are not satisfied with our service we will refund you the service fee no question asked!
						</p>
						<p class="margin-bottom10" style="margin-left:20px;"><strong>What you will get</strong></p>
					
						<ul class="features-premium">
							<li>Dedicated investigator that handles your case</li>
							<li>Certified mail sent to the business for resolution</li>
							<li>Dedicated phone support</li>
						</ul>
						<div class="clear-both"></div>
					</div> <!-- m-more-detail -->
				</div><!-- step4 -->









			</div><!-- main-screen -->
		</div><!-- main-screen-container -->

		<div class="featurette-container">
			<div class="featurette">
				<div class="featurette__heading">
					Process is really simple and easy.
				</div>
				<div class="featurette__triple">
					<ul class="triple__col">
						<li class="featurette__icon">
							<div class="icon--email"></div>
						</li>
						<li class="triple__heading">
							Submit complaint to scambook
						</li>
						<li>
							Fill out the form and submit to us. It is that easy.
						</li>
					</ul>
					<ul class="triple__col">
						<li class="featurette__icon">
							<div class="icon--globe"></div>
						</li>
						<li class="triple__heading">
							We will investigate that company/ person
						</li>
						<li>
							The point of using Lorem Ipsum is that it has a more-or-less
						</li>
					</ul>
					<ul class="triple__col">
						<li class="featurette__icon">
							<div class="icon--clipboard"></div>
						</li>
						<li class="triple__heading">
							Get your complaint resolved!
						</li>
						<li>
							many web sites still in their infancy. Various versions have evolved 
						</li>
					</ul>
				</div><!-- featurette__triple -->
				<div class="clearfix"></div>

				<div class="featurette__heading">
					Testimonials
				</div>
				<ul class="deck deck--landing01">
					<li class="deck-1">
						<div class="deck-content">
							<ul class="side-display micro cf">
								<li class="side-image">
									<img src="http://www.scambook.com/file/avatar/default.png" />
								</li>
								<li class="title">
									user7332643 - Los Angeles
								</li>
							</ul>
							<p>
								I am so happy I found Scambook. I placed a complaint recently; I can’t believe how much you guys are doing to help me!!! I had placed a complaint already with the BBB online, and they didn’t do nearly as much! What a terrific service. Thanks for sticking up for the “little people”!
							</p>
						</div><!-- deck-content -->
					</li>
					<li class="deck-2">
						<div class="deck-content">
							<ul class="side-display micro cf">
								<li class="side-image">
									<img src="http://www.scambook.com/file/avatar/default.png" />
								</li>
								<li class="title">
									user3224 - Kentucky
								</li>
							</ul>
							<p>
								Thanks to this website, I was able to cancel my PayPal payment before it went through....Whew, I ALMOST got ripped off! I found it odd I didn't get a conformation e-mail so I goggled the company and found all these complaints. I think pay pal better wise up and check out their vendors before serving them and taking our money!Thank you scambook for calling out these rip offs!
							</p>
						</div><!-- deck-content -->
					</li>
					<li class="deck-3">
						<div class="deck-content">
							<ul class="side-display micro cf">
								<li class="side-image">
									<img src="http://www.scambook.com/file/avatar/default.png" />
								</li>
								<li class="title">
									user987322 - Houston
								</li>
							</ul>
							<p>
								While reviewing our online account info, discovered an unauthorized amount pending. A quick Google search led me here to ScamBook.com to find we weren't the only one to be in this position. Thank you, ScamBook and thank you to our financial institution who remedied the incident immediately.
							</p>
						</div><!-- deck-content -->
					</li>
				</ul>
			</div><!-- featurette -->
			<div class="clearfix"></div>
		</div><!-- featurette-container -->

		<div class="footer-container">
			<div class="footer">
				<ul class="copyright">
					<li class="logo">
					</li>
					<li>
						All Rights Reserved, Copyright 2012 © Scambook, LLC
					</li>
					<li>
						Scambook is a Registered Trademark. 
					</li>
				</ul>
			</div><!-- footer -->
		</div><!-- footer-container -->
	</body>
</html>