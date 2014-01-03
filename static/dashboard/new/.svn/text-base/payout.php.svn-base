<?php include('../../includes/header_new.php'); ?>
<?php include('left_column.php'); ?>
			<!-- Start middle -->
			<div class="large-7 columns">
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

					<h6>
						Available Payouts
					</h6>
					<table width="100%">
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

					<h6>
						Pending Payouts
					</h6>
					<table width="100%">
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
								<td valign="top" colspan="5">There are currently no pending payouts</td>
							</tr>
						</tbody>
					</table>

					<h6>
						Payment History
					</h6>
					<table width="100%">
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
								<td valign="top" colspan="5">There are currently no pending payouts</td>
							</tr>
						</tbody>
					</table>

					<div class="panel__heading">
						<h5 class="panel__heading-text">
							Cash Out Options
						</h5>
					</div><!-- panel__heading -->
					<p>
						Once you have been offered a resolution settlement we will need to have your accurate PayPal information in order to send you the payment.
					</p>


					<div class="panel__heading">
						<h5 class="panel__heading-text">
							Cash Out via PayPal
						</h5>
					</div><!-- panel__heading -->
					<p>
						My PayPal currenly saved as: webmaster@scambook.com 
					</p>
					<form class="custom" method="post" action="">
						<div class="row">
							<div class="large-6 columns">
								<label for="c-pp-email">
									PayPal Account Email
								</label>
								<input id="c-pp-email" type="text" />
							</div><!-- large-6 -->
						</div><!-- row -->
						<div class="row">
							<div class="large-6 columns">
								<label for="c-pp-fn">
									PayPal Account First Name
								</label>
								<input id="c-pp-fn" type="text" />
							</div><!-- large-6 -->
							<div class="large-6 columns">
								<label for="c-pp-ln">
									PayPal Account Last Name
								</label>
								<input id="c-pp-ln" type="text" />
							</div><!-- large-6 -->
						</div><!-- row -->
						<div class="row">
							<div class="large-6 columns">
								<label for="c-pp-address">
									Address Line 1
								</label>
								<input id="c-pp-address" type="text" />
							</div><!-- large-6 -->
							<div class="large-6 columns">
								<label for="c-pp-address2">
									Address Line 2
								</label>
								<input id="c-pp-address2" type="text" />
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
						<script>
							jQuery(function ($) {
							    /* fetch elements and stop form event */
							    $("form.custom").submit(function (e) {
							        /* stop event */
							        e.preventDefault();
							        /* "on request" */
							        $(this).find('i').addClass('active');
							        /* send ajax request */
							        $.post('', {
							            followID: $(this).find('input').val()
							        }, function () {
							            /* find and hide button, create element */
							            $(e.currentTarget)
							                .find('.savebtn').addClass('disabled').prop('disabled', true)
							                
							        });
							    });
							});
						</script>

						<input type="hidden" value="submit" />						
						<button class="button small radius right margin-left-20 savebtn" ><i></i><span>Change PayPal Info</span></button>

						<button class="button-2 small radius right">Cancel</button>
						<div class="clearfix"></div>
						<hr />
						<h5>
							You must first enter your payment information above before given the option to receive your payout.
						</h5>
					</form>
				</div><!-- panel -->
			</div><!-- large-7 -->
<?php include('right_column.php'); ?>
<?php include('../../includes/footer_new.php'); ?>