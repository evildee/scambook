<?php include('includes/my_header.php'); ?>
<link type="text/css" href="/media/css/pages.css" rel="stylesheet" media="screen, projection" />  <!-- only for this file. you don't need it when implementing -->
<div class="tab-container">
    
    <script>
    $(function() {
    	// check to fade out task and uncheck to remove fade out
    	$('input[name$="ro"]').click(function () {
    	var radio_value = $(this).val();
    		if (radio_value=='a') {
    			$('.refund').fadeIn();
				$('.apology, .change, .form-other').hide();
    		} else if (radio_value=='b') {
    			$('.apology').fadeIn();
    			$('.refund, .change, .form-other').hide();
    		} else if (radio_value=='c') {
    			$('.change').fadeIn();
    			$('.refund, .apology, .form-other').hide();
    		} else if (radio_value=='d') {
    			$('.form-other').fadeIn();
    			$('.refund, .apology, .change').hide();
    		}
    	});
    });
    </script>

            <div id="form1" class="form-container">
        	   <form>
        	   <div id="content-step2" class="submit-bg-mid-821 content-step2-add rc10" >
                <div class="submit-bg-top"></div>
                <div class="submit-bg-mid">
                    <h3 class="htitle cufon">How would you like the Business or Individual to Resolve this Complaint?</h3>
                    <label for=""><input type="radio" name="ro" value="a" checked="checked" /> Refund</label>
                    <label for=""><input type="radio" name="ro" value="b" /> Apology from the business or individual</label>
                    <label for=""><input type="radio" name="ro" value="c" /> Change of business practice</label>
                    <label for=""><input id="other" type="radio" name="ro" value="d" /> Other</label>
                   <div class="clear20"></div>
                   
                   <div class="refund">
                   		<label for="">Amount:</label>
                   		<input type="text" name="amount" value="" maxlength="20" title="Amount" class="submit-input" placeholder="Amount" />
                       <label for="">Contact Phone Number:</label>
                       <input type="text" name="contact_phone" value="" maxlength="20" title="Contact Phone Number" class="submit-input" placeholder="Contact Phone Number" />
                       <label for="">Name:</label>
                       <input type="text" name="name" value="" maxlength="20" title="Name" class="submit-input" placeholder="Name" />
                       <label for="">Address:</label>
                       <input type="text" name="address" value="" maxlength="20" title="Address" class="submit-input" placeholder="Address" />
                       <label for="">City:</label>
                       <input type="text" name="city" value="" maxlength="20" title="City" class="submit-input" placeholder="City" />
                       <label for="">State:</label>
                       <select class="select-input">
                       	<option>California</option>
                       </select>
                       <label for="">Zip:</label>
                       <input type="text" name="zip" value="" maxlength="20" title="Zip" class="submit-input" placeholder="Zip" />
                   </div>
                   
					<div class="apology" style="display: none;">
	                    <label for="contact_phone">Contact Phone Number:</label>
    	                <input type="text" name="contact_phone" value="" maxlength="20" title="Contact Phone Number" class="submit-input" placeholder="Contact Phone Number" />
    	            </div>
                    
                    <div class="change" style="display: none;">
	                    <label for="">Your comments:</label>
    	                <textarea style="height: 200px;" class="submit-input"></textarea>
    	            </div>
                    
                    <div class="form-other" style="display: none;">
	                    <label for="">Other:</label>
    	                <textarea style="height: 200px;" class="submit-input"></textarea>
    	            </div> <!-- form-other -->
                   <div class="clear"></div>
                <input type="submit" value="" class="submit-submit" />
                <div class="clear"></div>
                </div>
                <div class="submit-bg-bot"></div>
                <div class="clear"></div>
                
            </div>
            </form>		</div>
	</div>
</div>
<?php include('includes/footer.php'); ?>