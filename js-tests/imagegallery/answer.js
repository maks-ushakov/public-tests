function registerClickHandler() {
  // Implement the click handler here for button of class 'remove'
	$('.remove').click(function(){
		$(this).parent().remove();
	});
 }

