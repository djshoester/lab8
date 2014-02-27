'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	$(".btn.btn-default.likeBtn").click(like_click);
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".likeBtn").click(function(){
		ga("send","event", "Category", "Action");
	});
}
