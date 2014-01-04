<?php include('includes/header.php'); ?>
  <style>
    body { background: none; }
    .social-header-v2, .navi, .search, #footer ul, .support-us, .box, #footer { display: none; }
    #header-v2 .navi-block { height: 50px !important; }
    #scambook-tt, #scambook-tt-dashboard { margin-top: 15px; width: 148px; }

    #main { padding-bottom: 20px; }
    .shell__container--footer { background: #fff; border-top: 1px dashed #CCCCCC; padding: 5px 0 10px 0; }
    .shell__section--footer { width: 890px; margin: 0 auto; }
    .footer-content { margin: 0 auto; }
    .footer-content li { display: inline-block; float: left; }
    .footer-content__string { margin: 0 20px 0 0; line-height: 45px; }
    .clear20 { height: 0 !important; }

</style>
<div class="c-topnav-bar c-progress-bar">
    <div class="c-topnav-bar__logo">&nbsp;</div>
    <ul class="c-progress-steps">
        <li class="c-progress-steps__item is-step1-done">&nbsp;</li>
        <li class="c-progress-steps__item is-step2-done">&nbsp;</li>
        <li class="c-progress-steps__item is-step3-done c-progress-steps--active">&nbsp;</li>
    </ul>
</div>

<div class="b-pricing b-pricing--success">
    <!--<ol class="progtrckr" data-progtrckr-steps="3">
        <li class="progtrckr-done">Billing Information</li>
        <li class="progtrckr-done">Select Plan</li>
        <li class="progtrckr-done">Success</li>
    </ol>-->
    <h1 class="h1">Thank You first, Account Signup Success  </h1>
    <!-- Thank You first, Signup Process is Almost Complete -->

    
    <div class="c-success-content margin-bottom-20">
        <div class="m-shadow-bottom c-success__shadowsplit"></div>      
        <div class="white-box rc10 pad20">
            <p class="c-success__infotext margin-top-20">You have successfully registered for a ScamBook Business Account. Before giving you access to your account, and for your protection, we need to verify that you're affiliated with and/or own the business in question. Please verify through two out of the three options:
            </p><!-- c-success-infotext -->

            <div class="c-success__infotext">
                <ul class="c-success-infolist"> 
                    <li class="c-success-infolist__items">
                        <div class="c-success__bullet is-success-b1"> &nbsp; </div> An electronic copy of your Internet, Electricity, or Phone Bill that shows your current business address, which can generally be found on the first page. Please feel free to black out any account numbers.
                    </li><!-- c-success-infolist__items -->
                    <li class="c-success-infolist__items">
                        <div class="c-success__bullet is-success-b2"> &nbsp; </div>  Email Address Verification or Phone Call Verification:  We will call you at the number listed on your website or through public records.
                    </li><!-- c-success-infolist__items -->
                    <li class="c-success-infolist__items">
                        <div class="c-success__bullet is-success-b3"> &nbsp; </div> Copy of your Seller's permit/business license or FEIN assignment letter issued by the IRS.
                    </li><!-- c-success-infolist__items -->
                 </ul><!-- c-success-infolist -->
            </div>

            <p class="c-success__infotext center">
                Please send these documents and any questions you may have to: <strong class="highlight-text-dark"><a href="mailto:">asdf@asdf.com</a></strong>.

                <a class="ps_button margin-top-20">Go To Your Dashboard</a>
            </p>      
        
        </div> <!-- white-box rc10 pad20 -->

        
    </div><!-- c-success-content -->

    <div class="m-shadow-bottom"></div>
     <p class="c-success__note">
        Once an Account Manager has reviewed your application we will link up your profile with your company page. At that time you will start your 14 day trial and you may start resolving your complaints.
     </p> <!-- c-success__note -->
    <div class="m-shadow-top"></div>

     <p class="c-success__questions">
        Any questions, please call us at <span class="highlight-text">1-877-966-2278</span>
    </p><!-- c-success__questions -->
    <div class="m-shadow-bottom"></div>
</div>

<!-- hack footer -->
            <div class="clear20"></div>
            </div><!-- End of Content -->
        </div><!-- End of Main -->
        </div><!-- End of Contain-all -->
        <div class="shell__container shell__container--footer">
        <div class="shell__section--footer">
            <ul class="footer-content">
                <li class="footer-content__string">
                    All Rights Reserved, Copyright 2012 © Scambook, LLC | Scambook is a Registered Trademark.
                </li>
                <li>
                    <div class="truste">
                        <a href="http://privacy.truste.com/privacy-seal/Scambook-LLC/validation?rid=40be6fbd-817b-4576-a019-990195ffae72" title="TRUSTe online privacy certification" target="_blank">
                            <img src="/media/css/css-img/landing/truste.gif" alt="TRUSTe online privacy certification"/>
                        </a>
                    </div>
                </li>
                <li>
                    <div class="">
                        <a href="https://trustsealinfo.verisign.com/splash?form_file=fdf/splash.fdf&dn=www.scambook.com&lang=en" target="_blank">
                            <img class="norton" src="/media/css/css-img/landing/norton.gif" />
                        </a>
                    </div><!-- verisign -->
                </li>
            </ul>
            <div class="clear"></div>
        </div><!-- shell__section -->
    </div><!-- shell__container shell__container--footer -->
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
            $(".shell__container--footer").before('<div id="sticky-footer-push"></div>');
          }
          $("#sticky-footer-push").height(diff);
        }
      }
    });
    </script>
    </div>
                    <div class="clear20"></div>
            </div><!-- End of Content -->
        </div><!-- End of Main -->
        </div><!-- End of Contain-all -->

<?php include('includes/footer.php'); ?>