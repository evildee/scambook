<?php include('includes/my_header.php'); ?>
	<div id="biz-wrap">
		<?php include('includes/bdashboard_side_menu.php'); ?>
		<div class="column-1-main width718">
		<h2><span class="icon head"></span>Business Keywords</h2>
		<div class="search">
			<form action="/search" method="post" id="searchform" accept-charset="utf-8">
	        	<fieldset>
	        		<div class="input">
	            		<span class="icon"></span>
	        			<input type="text" id="search-input" name="search" value="Search for a Complaint" title="Search for a Complaint" class="clearMeFocus" />
	        			<input type="submit" id="search-submit" name="submit" value="search" title="Submit Search" />
	        		</div>
	        	</fieldset>
	        </form>
	     </div> <!-- search -->
		<div class="clear"></div>

			<div class="box-container-round">
				<ul class="single-input-button">
					<li>
						<input type="text" name="" value="" />
					</li>
					<li>
						<button class="button1">Add</button>
					</li>
				</ul>
				<div class="clear"></div>
				<hr class="margin-bottom20" />
				<ul class="tags">
					<li><a href="#">tag1</a><a class="close" title="remove" href="">x</a></li>
					<li><a href="#">tag name</a><a class="close" title="remove" href="">x</a></li>
					<li><a href="#">tag</a><a class="close" title="remove" href="">x</a></li>
					<li><a href="#">tag name</a><a class="close" title="remove" href="">x</a></li>
					<li><a href="#">tag</a><a class="close" title="remove" href="">x</a></li>
					<li><a href="#">tag name</a><a class="close" title="remove" href="">x</a></li>
					<li><a href="#">tag</a><a class="close" title="remove" href="">x</a></li>
					<li><a href="#">tag name</a><a class="close" title="remove" href="">x</a></li>
					<li><a href="#">tag</a><a class="close" title="remove" href="">x</a></li>
					<li><a href="#">tag name</a><a class="close" title="remove" href="">x</a></li>
					<li><a href="#">tag</a><a class="close" title="remove" href="">x</a></li>
					<li><a href="#">tag name</a><a class="close" title="remove" href="">x</a></li>
				</ul>
				<div class="clear"></div>
			</div> <!-- box-container-round -->
		</div> <!-- column-1-main -->
	</div>
</html>