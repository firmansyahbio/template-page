
$(document).ready(function(){


	/* Toggle Video Modal
  -----------------------------------------*/
	function toggle_menu_modal() {
	    
	    // Click on video thumbnail or link
	    $(".trigger-menu-modal").on("click", function(e){
	      $("body").addClass("show-menu-modal noscroll");
	    
      });

          
	    // Close and Reset the Video Modal
      function close_menu_modal() {

        // re-hide the video modal
        $("body").removeClass("show-menu-modal noscroll");
}
        // reset the source attribute for the iframe template, kills the video
        
        
      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-modal, .menu-modal .overlay', function(event) {
	        
          // call the close and reset function
          close_menu_modal();
	        
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            
            // call the close and reset function
            close_menu_modal();
            
          }
      });
	}
	toggle_menu_modal();
});
