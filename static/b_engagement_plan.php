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
        <li class="c-progress-steps__item is-step1-done c-progress-steps--active">&nbsp;</li>
        <li class="c-progress-steps__item is-step2">&nbsp;</li>
        <li class="c-progress-steps__item is-step3">&nbsp;</li>
    </ul>
</div>

<?php /*
        <ol class="progtrckr" data-progtrckr-steps="3">
            <li class="progtrckr-done">Billing InformationACE</li>
            <li class="progtrckr-done">Select Plan</li>
            <li class="progtrckr-todo">Success</li>
        </ol>
        */?>

<div  id="biz-signup" class="b-pricing margin-bottom-20">
    <h1 class="h1">Thank You first, Signup Process is Almost Complete </h1>
    <h2 class="h2">NEXT STEP: REVIEW & ENTER YOUR PAYMENT INFORMATION</h2>

</div>

        <div id="plans-section-pricing">
            <ul class="section-pricing-root">
                 <li class="pc-main"> 
                    <ul class="section-pricing-top">
                        <li>
                        <h2> Starter </h2>
                        </li>
                          <li class="section-pricing__long-stripe section-pricing__long-stripe--free">
                          Free
                          </li>
                    </ul>                                   
                    <ul class="section-pricing-body">            
                        <li class="pc"> Registered Scambook Business Profile </li>
                        <li class="pc"> Live Online Chat and Phone Support</li>
                        <li class="pc"> Dedicated Account Manager</li>
                        <li class="pc">  Comment Response Accessibility</li>
                        <li class="pc">  Viewable Dashboard </li>
                        <li class="pc">  Geographic Complaint Map </li> 
                        <li class="pc">  24/7 Updates </li> 
                    </ul>
                     <div class="clear10"> </div>                                       
                     <ul class="section-pricing-footer">
                        <li>
                            <a href="/business/signup" class="small-stripe small-stripe--free">
                                Sign Up                               
                            </a>
                            <br>Free Starter Account
                        </li> 
                    </ul>
                </li>
                
                <li class="pc-main prime"> 
                    <ul class="section-pricing-top">
                        <li>
                        <h2> Standard </h2>
                        </li>
                          <li class="section-pricing__long-stripe section-pricing__long-stripe--stand">
                          $99/month
                          </li>
                    </ul>                                   
                    <ul class="section-pricing-body">                                       
                        <li class="pc"> <b>10</b> Proprietary Crawl Mention Feed Results </li>
                        <li class="pc">  <b>5</b> Monthly Complaint Resolution Allowance Renewal</li>
                        <li class="pc">  <b>1</b> Reputation Monitoring Keyword/Key Phrase</li>
                        <li class="pc">  <b>1</b> Business Profile </li>
                        <li class="pc"> IP Fraud Pattern Protection</li>
                        <li class="pc"> Duplicate Post Monitoring </li>
                        <li class="pc"> Interactive Dashboard Management</li>   
                        <li class="pc"> Inclusive Free Account Features  </li>  
                        <li class="pc"> Company Rating </li>    
                    </ul> 
                     <div class="clear10"> </div>                                       
                     <ul class="section-pricing-footer">
                        <li>
                            <a href="/business/signup" class="small-stripe small-stripe--stand">
                                Sign Up
                            </a>
                            <br> Free 2 Week Trial
                        </li> 
                    </ul>
                </li>


                 <li class="pc-main"> 
                    <ul class="section-pricing-top">
                        <li>
                        <h2> Enterprise </h2>
                        </li>
                          <li class="section-pricing__long-stripe section-pricing__long-stripe--ent">
                           $499/month
                          </li>
                    </ul>                                   
                    <ul class="section-pricing-body">                                
                        <li class="pc"> <b>Unlimited </b>Complaint Resolution Allowance </li>
                        <li class="pc"> <b>Comprehensive </b> Complaint Prevention </li>
                        <li class="pc"> <b>20 </b> Proprietary Crawl Mention Feed Results </li>
                        <li class="pc"> <b>5 </b>Reputation Monitoring Keyword/ Key Phrases </li>
                        <li class="pc"><b>5 </b>Tangent Business Profiles </li>
                        <li class="pc"> IP Fraud Pattern Protection</li>    
                        <li class="pc"> Duplicate Post Monitoring</li>
                        <li class="pc"> Interactive Dashboard Management</li>
                        <li class="pc"> Inclusive Free, Standard and Professional Account features</li>
                        <li class="pc"> Company Rating</li>
                    </ul> 
                    <div class="clear10"> </div>                                    
                     <ul class="section-pricing-footer">
                        <li>
                        <a href="/business/signup" class="small-stripe small-stripe--ent">
                            Sign Up                            
                        </a>
                        <br> Free 2 Week Trial
                        </li> 
                    </ul>
                </li>
            </ul>
        </div><!--plans-section-pricing-->
        <div class="m-shadow-bottom"></div>



<script type="text/javascript">
    $(function() {

        $("#btn-compare").bind('click', function() {
            $('.m-compare-panel').toggle();
            return false;
        });



        $("a.compare-tip").tooltip();
        $('.nyroModal').nyroModal();

        $('.package-box').mouseover(function(){
            $(this).addClass('on');
        });

        $('.package-box').mouseout(function(){
            $(this).removeClass('on');
        });

        $("#plans-tab-button-faq, #sml-faq").click(function() {
            $("#plans-tab-button-compare").addClass("off");
            $(".plans-tab-button-howitworks").addClass("off");
            $("#plans-tab-button-faq").removeClass("off");
            $("#plans-section-compare").hide();
            $("#plans-section-howitworks").hide();
            if($("#divs-hidden").val() == 1)
                $("#plans-section-faq").slideDown();
            else
                $("#plans-section-faq").show();
            $("#divs-hidden").val(0);
        });

        $("#plans-tab-button-compare, #sml-compare").click(function() {
            $("#plans-tab-button-faq").addClass("off");
            $(".plans-tab-button-howitworks").addClass("off");
            $("#plans-tab-button-compare").removeClass("off");
            $("#plans-section-faq").hide();
            $("#plans-section-howitworks").hide();
            if($("#divs-hidden").val() == 1)
                $("#plans-section-compare").slideDown();
            else
                $("#plans-section-compare").show();
            $("#divs-hidden").val(0);
        });

        $(".plans-tab-button-howitworks").click(function() {
            $("#plans-tab-button-faq").addClass("off");
            $("#plans-tab-button-compare").addClass("off");
            $(".plans-tab-button-howitworks").removeClass("off");
            $("#plans-section-faq").hide();
            $("#plans-section-compare").hide();
            if($("#divs-hidden").val() == 1)
                $("#plans-section-howitworks").slideDown();
            else
                $("#plans-section-howitworks").show();
            $("#divs-hidden").val(0);
        });

        $("[name='sales_call_request_form']").submit(function() {
            $(".jGrowl-notification").trigger("jGrowl.close");
            var message = '';
            if ($.trim($(this).find("[name='firstname']").val()).length == 0)
                message += "Please provide your first name.<br />";
            if ($.trim($(this).find("[name='lastname']").val()).length == 0)
                message += "Please provide your last name.<br />";
            if ($.trim($(this).find("[name='company']").val()).length == 0)
                message += "Please provide the name of your company.<br />";
            if (!$.trim($("[name='email']").val()).match(/^([A-Za-z0-9_\+\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/))
                message += 'Please provide a valid email address.<br />';

            if (message.length > 0)
            {
                $.jGrowl(message, { theme:  "error", sticky: true });
                return false;
            }

            $(this).find(":submit").attr("disabled", "disabled");
        });
    });
</script>

            <div class="m-compare margin-bottom-20">
                <div class="c-business-resolve-logo"> &nbsp; </div>
                <h3 class="m-section__header3 m-section__header3--center"><a href="" class="m-mylink" id="btn-compare">Compare Packages &#x25BC</a></h2>
                    
                
                <div class="m-compare-panel" style="display:none;">                      
                    <div class="plans-section__comparebox">
                        <div class="m-shadow-left"></div>
                        <div id="plans-section-compare" class="plans-section-compare">
                            <ul class="title-section">
                                <li class="name ftl"><span class="plans-section-compare__header">Package Features</span></li>
                                <li class="plans-compare-pack is-plan1"> <span class="plans-section-compare__header2">Starter</span><br /> Free</li>
                                <li class="plans-compare-pack is-plan2"> <span class="plans-section-compare__header2">Standard </span><br /> $99/month </li>
                                <li class="plans-compare-pack is-plan3"> <span class="plans-section-compare__header2"> Enterprise </span><br />$499/month</li>

                            </ul><!-- title-section --> 

                            <ul class="compare-table">
                                    <li class="ftl">
                                        <span class="">Complaint Resolution Allowance (Monthly)</span> 
                                        <a class="compare-tip" href="#" title="Standard Accounts have the opportunity to initiate resolution for up to 5 complaints per month. Professional Accounts can initiate up to 15 complaint resolutions per month. Enterprise Accounts have UNLIMITED ability to initiate any number of resolutions they please.">
                                            <img src="/media/css/css-img/business-compare-tip.png" />                
                                        </a>
                                    </li>
                                    <li> <span class=""></span> </li>
                                    <li> <span class="">5</span> </li>
                                    <li> <span class="">Unlimited</span> </li>
                            </ul>
                            <ul class="compare-table">
                                    <li class="ftl">
                                        <span>Reputation Monitoring Keywords/Key Phrases</span> 
                                        <a class="compare-tip" href="#" title="Business Resolve Account users can submit keywords or key phrases of their choice for reputation monitoring. Search results with selected keywords are reported directly onto their dashboard feeds.">
                                            <img src="/media/css/css-img/business-compare-tip.png" />
                                        </a>
                                    </li>
                                    <li> <span class=""></span> </li>
                                    <li> <span class="">1</span> </li>
                                    <li> <span class="">5</span> </li>
                            </ul>
                            <ul class="compare-table">
                                    <li class="ftl">  <span class="">Proprietary Crawl Mention Feed</span> 
                                    <a class="compare-tip" href="#" title="Reputation Monitored Keywords are compiled and a live feed is made available with real time updates. <br /> Only available on Scambook Business Resolve Dashboard, paid account holders have the ability to utilize this tool to monitor the world wide web for customized keyword specific content.">
                                    <img src="/media/css/css-img/business-compare-tip.png">
                                    </a>
                                    </li>
                                    <li> <span class=""></span> </li>
                                    <li> <span class="">10</span> </li>
                                    <li> <span class="">20</span> </li>
                            </ul>
                            
                            <ul class="compare-table">
                                
                                    <li class="ftl">  <span class="">Tangent Business Profiles</span> 
                                    <a class="compare-tip" href="#" title="Business owners may own several different businesses. Per Scambook Business Resolve Account, Enterprise Account holders may add up to 5 separate tangent business pages to utilize for Scambook Business Resolve Services. Professional Account holders may have up to 2 tangent profiles, Free and Standard Accounts are allotted one profile each.">
                                    <img src="/media/css/css-img/business-compare-tip.png">                      
                                    </a>
                                    </li>
                                    <li> <span class="">1</span> </li>
                                    <li> <span class="">1</span> </li>
                                    <li> <span class="">5</span> </li>
                            </ul>
                            <ul class="compare-table ">
                                
                                    <li class="ftl">  <span class="">Registered Scambook Business Profile</span> 
                                    <a class="compare-tip" href="#" title="Scambook Business Resolve Account holders are given full access to create and edit their business profile, register offical images/logos and create their own company descriptions.">
                                    <img src="/media/css/css-img/business-compare-tip.png">                  
                                    </a>
                                    </li>
                                    <li> <span class="bold">✓</span> </li>
                                    <li> <span class="bold">✓</span> </li>
                                    <li> <span class="bold">✓</span> </li>
                                
                            </ul>
                            <ul class="compare-table">
                                    <li class="ftl">  <span class="">Dedicated Account Manager</span> 
                                    <a class="compare-tip" href="#" title="A dedicated Business Resolve Account Manager thoroughly familiar with your account is assigned to handle and tasked with personalizing your relationship with Scambook Business Resolve. This is so the entire complaint resolution process is handled effectively with professionalism and care.">
                                    <img src="/media/css/css-img/business-compare-tip.png">                    
                                    </a>
                                    </li>
                                    <li> <span class="bold">✓</span> </li>
                                    <li> <span class="bold">✓</span> </li>
                                    <li> <span class="bold">✓</span> </li>
                            </ul>
                            <ul class="compare-table">
                                    <li class="ftl">  <span class="">Live Online Chat and Phone Support</span> 
                                    <a class="compare-tip" href="#" title="Scambook Support Staff is ready and available for live chat and live phone support between the hours of 9am-6pm PST.">
                                    <img src="/media/css/css-img/business-compare-tip.png">                      
                                    </a>
                                    </li>
                                    <li> <span class="bold">✓</span> </li>
                                    <li> <span class="bold">✓</span> </li>
                                    <li> <span class="bold">✓</span> </li>
                            </ul>
                            <ul class="compare-table">
                                    <li class="ftl"> <span class="">Real-Time Complaint Pattern Reporting</span> 
                                    <a class="compare-tip" href="#" title="As soon as a complaint goes live, data and statistics are compiled and reported onto Dashboard. This data can be used to mark trends in complaint posting in regards to type, location, and frequency.">
                                    <img src="/media/css/css-img/business-compare-tip.png">                     
                                    </a>
                                    </li>
                                    <li> <span class="bold">✓</span> </li>
                                    <li> <span class="bold">✓</span> </li>
                                    <li> <span class="bold">✓</span> </li>
                            </ul>
                            <ul class="compare-table">
                                    <li class="ftl"> <span class="">Proprietary Resolution Pattern Reports</span> 
                                    <a class="compare-tip" href="#" title="New, Unresolved, Pending, and Resolved complaint resolution data are outlined and live statistics are compiled onto Dashboard.">
                                    <img src="/media/css/css-img/business-compare-tip.png">                
                                    </a>
                                    </li>
                                    <li> <span class=""></span> </li>
                                    <li> <span class="bold">✓</span> </li>
                                    <li> <span class="bold">✓</span> </li>
                            </ul>
                            <ul class="compare-table">
                                    <li class="ftl"> <span class="">IP Fraud Pattern Protection</span> 
                                    <a class="compare-tip" href="#" title="Our Scambook Compliance Department monitors complaints and comments for IP fraud, ensuring quality control and protecting businesses from IP fraud and spamming.">
                                    <img src="/media/css/css-img/business-compare-tip.png">                   
                                    </a>
                                    </li>
                                    <li> <span class=""></span> </li>
                                    <li> <span class="bold">✓</span> </li>
                                    <li> <span class="bold">✓</span> </li>
                                
                            </ul>
                            <ul class="compare-table">
                                    <li class="ftl">  <span class="">Duplicate Post Monitoring</span> 
                                    <a class="compare-tip" href="#" title="To ensure quality control and ratings accuracy, accounts are continually monitored for duplicate posts or multiple postings from users.">
                                    <img src="/media/css/css-img/business-compare-tip.png">                        
                                    </a>
                                    </li>
                                    <li> <span class=""></span> </li>
                                    <li> <span class="bold">✓</span> </li>
                                    <li> <span class="bold">✓</span> </li>
                            </ul>
                            <ul class="compare-table">
                                    <li class="ftl"> <span class="">Live Dashboard</span> 
                                    <a class="compare-tip" href="#" title="Scambook account holders are able to view continuously updated information about complaints, business information, keyword feed and complaint resolution statuses on Dashboard.">
                                    <img src="/media/css/css-img/business-compare-tip.png">                         
                                    </a>
                                    </li>
                                    <li> <span class=""></span> </li>
                                    <li> <span class="bold">✓</span> </li>
                                    <li> <span class="bold">✓</span> </li>
                            </ul>
                            <ul class="compare-table">
                                    <li class="ftl">  <span class="">Continuous Updated Activity Feed </span> 
                                    <a class="compare-tip" href="#" title="All paid account holders are able to see all activity made on their account and business profiles. This includes new complaints posted, acceptance/denial of resolution attempts, account balance and activity history.">
                                    <img src="/media/css/css-img/business-compare-tip.png">                     
                                    </a>
                                    </li>
                                    <li> <span class=""></span> </li>
                                    <li> <span class="bold">✓</span> </li>
                                    <li> <span class="bold">✓</span> </li>
                            </ul>
                            <ul class="compare-table">
                                    <li class="ftl"> <span class="">Advanced Geographic Pin Map</span> 
                                    <a class="compare-tip" href="#" title="Each complaint location is logged and consolidated onto a Geographic Pin Map so Business Resolve Account holders can easily see where complaints are being made.">
                                    <img src="/media/css/css-img/business-compare-tip.png">                  
                                    </a>
                                    </li>
                                    <li> <span class=""></span> </li>
                                    <li> <span class="bold">✓</span> </li>
                                    <li> <span class="bold">✓</span> </li>
                            </ul>
                            <ul class="compare-table">
                                    <li class="ftl"> <span class="">Interactive Dashboard Management </span> 
                                    <a class="compare-tip" href="#" title="Paid Business Resolve Account holders have interactive access to managing their dashboard, editing their company profile and have the power to initiate complaint resolution.">
                                    <img src="/media/css/css-img/business-compare-tip.png">                      
                                    </a>
                                    </li>
                                    <li> <span class=""></span> </li>
                                    <li> <span class="bold">✓</span> </li>
                                    <li> <span class="bold">✓</span> </li>
                            </ul>
                            <ul class="compare-table">
                                    <li class="ftl">Company Rating 
                                    <a class="compare-tip" href="#" title="Based upon resolution statistics and activity data, companies are graded and a rating is created so consumers and business owners can gauge the company's reputation standing.">
                                    <img src="/media/css/css-img/business-compare-tip.png">                   
                                    </a>
                                    </li>
                                    <li> <span class=""></span> </li>
                                    <li> <span class="bold">✓</span> </li>
                                    <li> <span class="bold">✓</span> </li>
                            </ul>
                            <ul class="compare-table last">
                                    <li class="ftl">  <span class="">Complaint Prevention</span> 
                                    <a class="compare-tip" href="#" title="Available exclusively to Enterprise Account holders, Complaint Prevention allows Enterprise Accounts 72 hours to confidentially view and resolve complaints before it goes live to the public.">
                                    <img src="/media/css/css-img/business-compare-tip.png">                           
                                    </a>
                                    <li> <span class=""></span> </li>
                                    <li> <span class=""></span> </li>
                                    <li> <span class="bold">✓</span> </li>                  
                            </ul>


                            <ul class="title-section">
                                <li class="name ftl"> &nbsp;</li>
                                <li class="plans-compare-pack is-plan1"> <span class="plans-section-compare__header2"><strong>Sign Up</strong></span><br /> Free Start Account</li>
                                <li class="plans-compare-pack is-plan2"> <span class="plans-section-compare__header2"><strong>Sign Up</strong></span><br /> Free 2 Week Trial </li>
                                <li class="plans-compare-pack is-plan3"> <span class="plans-section-compare__header2"><strong> Sign Up</strong></span><br />Free 2 Week Trial</li>

                            </ul><!-- title-section --> 

                        </div> <!-- #plans-section-compare -->                    
                        <div class="m-shadow-right"></div>
                        <div class="clearfix"></div>
                    </div><!-- plans-section-compare -->
 
                    <div class="clearfix"></div>            
                </div><!-- m-compare-panel -->
            </div><!-- m-compare -->
            <div class="m-shadow-top"></div>

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