<?php include('includes/header2.php'); ?>
<style>
    body { background: none; }
    .site-header,
    #footer { display: none; }
    #content { width: 100%; padding: 0; margin: 0; }
        .shell__container--footer { background: #fff; border-top: 1px dashed #CCCCCC; padding: 5px 0 10px 0; }
    .shell__section--footer { width: 890px; margin: 0 auto; }
    .footer-content { margin: 0 auto; }
    .footer-content li { display: inline-block; float: left; }
    .footer-content__string { margin: 0 20px 0 0; line-height: 45px; }
    .clear20 { height: 0 !important; }
</style>
<div class="sim-header">
    <div class="sim-header__bar">
        <img class="sim-header__logo" src="/media/css/css-img/engagement/Scambook_logo.png" />
        <div id="c-purse-counter" class="margin-top">
                <div class="c-purse-counter__usd white-text">$</div>
                <img class="c-purse-counter__img" alt="10,375,763.05" src="/file/number">
                <div class="c-purse-counter__string white-text">
                    Resolved in Reported Damages
                </div><!-- c-purse-counter__string -->
            </div> <!-- purse-counter -->
            <div class="sim-header__steps">
             
        </div><!-- sim-header__steps -->
    </div><!-- sim-header__bar -->
</div><!-- sim-header -->

<script type="text/javascript">
    $(document).ready(function(){
    $("a.tool-tip").tooltip({ style: { width: 135} });
    });
</script>
<style type="text/css">
.tooltip { width:170px !important; margin: 0 0 0 35px;}
</style>


<div class="m-top-area">
    <div class="m-section__wrapper">
        <div class="c-getpremium__product c-getpremium__product--fork-message margin-left-20">
            <h2 class="c-getpremium__header c-getpremium__header--questionbox ">
                <!-- ** Message 1 **
                Thank you Adam, Get more with Premium Support -->

                <!-- ** Message 2 **
                Adam, Resolve Your Complaint with Premium Support-->                

                 <!-- ** Message 3 ** -->
                Adam, Resolve Your Complaint with Premium Support</h2>
            <div class="c-getpremium__showcase">
                <div class="c-getpremium__message">
                    <p class="margin-bottom-20">

                <!-- ** Message 1 **
                    Increase your chances for resolution with our dedicated support team. Would you like a Complaint Resolution Professional to call or email you right now?
                -->


                <!-- ** Message 2 **                    
                    We see that you have submitted a complaint for [Company Name], currently there are 22 others like you. Increase your chances for resolution with our dedicated support team. Would you like a Complaint Resolution Professional to call or email you right now?
                    
                -->
                   
                <!-- ** Message 3 ** -->
                    We see that you have submitted a complaint for [Company Name]. Increase your chances for resolution with our dedicated support team. Would you like a Complaint Resolution Professional to call or email you right now?                 </p>
                 <a href="" class="button1">Yes, Please</a>
                 <a href="" class="button1 gray">No, Thank You</a>
                </div><!-- c-getpremium__message -->
            </div><!-- c-getpremium__showcase -->
        </div><!-- c-getpremium__product -->
        <div class="clearfix"></div>
        <div class="c-showcase__qa-note c-showcase__qa-note--box margin-bottom-20">
            <span class="c-showcase__qa-note--smtext "> Get access to Investigators by: <span class="m-icon__pec margin-left-20 right">&nbsp; </span></span>
            <br />
            Complaint Resolution Professional: Right On Your Dashboard
        </div>
    </div> <!-- m-section__wrapper -->
</div>
<div class="m-shadow-top"></div>
<div class="m-section__wrapper">
    <div class="m-section__header2">
        Scambook has Resolved Over $10 Million in Complaints <span class="m-icon__money margin-right-20">&nbsp; </span>
    </div>
</div><!-- m-section__wrapper -->
<div class="m-shadow-bottom"></div>

<div class="m-logo-showcase m-section--as-seen">
        <div class="m-section__wrapper">
            <h2 class="m-section__header margin-left-20">As Seen On </h2>
            <div class="c-as-seen__logos margin-bottom-20"> </div>
        </div><!-- m-section__wrapper -->
</div><!-- logo-showcase -->
<div class="m-shadow-bottom"></div>




<!-- hack footer -->

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
    </div><!-- shell__container shell__container-footer -->
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

<?php include('includes/my_footer.php'); ?>