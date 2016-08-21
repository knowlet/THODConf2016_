jQuery(document).ready(function(){

	jQuery('a.animate').click(function(){
		jQuery('html,body').animate({
			scrollTop: jQuery( jQuery(this).attr('href') ).offset().top
		}, 500);

		return false;
	});
});