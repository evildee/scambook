<div class="sub-menu">
            	<div class="container">
	            	<ul class="menu">
	            		<li id="complaint-menu" class="active">
	            			<a class="complaint-href" href=""><span>COMPLAINT CATEGORIES</span><span class="arrow-down"></span></a>
	            			<div class="dropdown-menu" style="display: none;">
	            				<ul class="col1">
	            					<li class="active"><a href="">Link 1</a></li>
	            				</ul>
	            				<ul class="col2">
	            					<li class="active"><a href="">Link 1</a></li>
	            				</ul>
	            				<ul class="col3">
	            					<li class="active"><a href="">Link 1</a></li>
	            				</ul>
	            			</div> <!-- dropdown-menu -->
	            		</li>
	            		<li>
	            			<a href="">TRENDING COMPANIES</a>
	            		</li>
	            	</ul>     	
	            	<!--
	            	<div class="search">
		            	<form action="/search" method="post" id="searchform" accept-charset="utf-8">
		            		<fieldset>
		            			<div class="input">
			            			<span class="icon"></span>
			            			<input type="text" title="Search for a Complaint" id="search-input"/>
		            			</div>
		            			<input type="submit" id="search-submit" value="Search" />
		            		</fieldset>
		            	</form>
	            	</div> <!-- search -->
            	</div> <!-- container -->
            </div> <!-- sub-menu -->
            

            <script>
$(function(){
// menu dropdown

	var menu_item = $('#complaint-menu');
	var sub_item = $('.dropdown-menu');
	
	menu_item.hover(
		function() { 
			$(this).find(sub_item, this).fadeIn(70);
			},
		function() {
			$(this).find(sub_item, this).fadeOut(200);
		}
	);

});
</script>