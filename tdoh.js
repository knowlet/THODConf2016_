jQuery(document).ready(function(){

	jQuery('a.animate').click(function(){
		jQuery('html,body').animate({
			scrollTop: jQuery( jQuery(this).attr('href') ).offset().top
		}, 500);

		return false;
	});

	jQuery('.tooltip-enable').tooltip({
		track: true
	});

	jQuery('#program table').magnificPopup({
		delegate: 'td.link',
		mainClass: 'mfp-zoom-in',
		callbacks: {
		    beforeOpen: function() {
		       jQuery('#mfp-popup-program .avator').html( jQuery(this.st.el).find('.avatar').html() );
		       jQuery('#mfp-popup-program .data-title').text( jQuery(this.st.el).find('.title').text() );
		       jQuery('#mfp-popup-program .data-description').html( jQuery(this.st.el).find('.description').html() );
		       jQuery('#mfp-popup-program .data-speaker').text( jQuery(this.st.el).find('.speaker').text() );
		    },
		    close: function() {
		       jQuery('#mfp-popup-program .avator').html('');
		       jQuery('#mfp-popup-program .data-title').text('');
		       jQuery('#mfp-popup-program .data-description').html('');
		       jQuery('#mfp-popup-program .data-speaker').text('');
		    }
		},
		midClick: true 
	});
});