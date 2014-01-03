<div class="clear20">
	
</div>
            </div><!-- End of Content -->
		</div><!-- End of Main -->
        </div><!-- End of Contain-all -->
		<div id="footer">
		<script>
		$(document).ready(function() {
	  positionFooter();

	  $(window)
	    .scroll(positionFooter)
	    .resize(positionFooter);

	  function positionFooter() {
	    var docHeight = $(document.body).height() - $("#sticky-footer-push").height();
	    if(docHeight < $(window).height()){
	      var diff = $(window).height() - docHeight;
	      if (!$("#sticky-footer-push").length > 0) {
	        $("#footer").before('<div id="sticky-footer-push"></div>');
	      }
	      $("#sticky-footer-push").height(diff);
	    }
	  }
	});
	</script>


        	<div class="contain">
                <div class="box w100">
                    <h3 class="cufon">COMPLAINT REPORTS</h3>
                    <ul>
                    	<li><a href="http://www.scambook.loc/report/submit">Report a Complaint</a></li>
                    	<li><a href="/browse">Browse Complaints</a></li>
                    	<li><a href="/companies">Browse Companies</a></li>
                    	<li><a href="/groups">Browse Groups</a></li>
                    </ul>
                </div>
                <div class="box w100">
                    <h3 class="cufon">SCAMBOOK GUIDES</h3>
                    <ul>
                    	<li><a href="/faq">FAQ</a></li>
                    	<li><a href="/guides/overview">Overview</a></li>
                    	<li><a href="/guides/submission">Submission</a></li>
                    	<li><a href="/guides/additions">Additions</a></li>
                    	<li><a href="/guides/dashboard">Dashboard</a></li>
                    	<li><a href="/guides/groups">Groups</a></li>
                    </ul>
                </div>
                <div class="box w100">
                    <h3 class="cufon">INFORMATIONAL</h3>
                    <ul>
                    	<li class="smlfoot"><!-- <span class="icon-new">NEW</span> --><a href="http://www.scambook.loc/business">For Businesses</a></li>
                    	<li><a href="http://www.scambook.loc/blog">Scambook Blog</a></li>
                        <li><a href="/press">Press</a></li>
                    	<li><a href="/about">About Us</a></li>
                    	<li><a href="/contact">Contact Us</a></li>
                    	<li><a href="/terms">Privacy & Terms</a></li>
                    </ul>
                </div>
                                <div class="box w100">
                    <h3 class="cufon">JOIN US</h3>
                    <ul>
                    	<li><a href="/signup">Signup</a></li>
                    	<li><a href="/login">Log In</a></li>
                    </ul>
                </div>
                            <div class="support-us rc5">
                <div class="support-text-title cufon">SHOW SUPPORT</div>
                <div class="support-text-cta cufon">LIKE AND SHARE US</div>
                <div class="social">
                    <div class="s-row">
                    	<div class="v-row">Google</div>
                    	<div class="plus1"><g:plusone size="medium" count="false" href="http://www.scambook.com"></g:plusone></div>
                    </div>
                    <div class="s-row">
                    	<div class="v-row">Twitter</div>
                    	<a href="http://www.twitter.com/scambook" class="tfollow" target="_blank"></a>
                    </div>
                                        <div class="s-row">
                    	<div class="v-row">Facebook</div>
                        <div class="fblike">
                            <fb:like href="http://www.scambook.loc/" send="false" layout="button_count" width="50" show_faces="false" font=""></fb:like>
                        </div>
                    </div>
                    <div class="s-row">
                    	<div class="v-row">YouTube</div>
                    	<a href="http://www.youtube.com/user/Scambook" class="youtube" target="_blank"></a>
                    </div>
                </div>
            </div>
            <div class="rights">
                <a href="/"><div class="foot-tt"></div></a>
                <div class="foot-text">All Rights Reserved, Copyright 2012 &copy; Scambook, LLC<br />Scambook.com is a 100% Free Community.</div>
            </div>
            </div>
        </div>


	</body>
</html>    