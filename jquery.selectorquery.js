/*! 
* jquery.selectorquery.js 1.0
*
* Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
* Released under the GPL v2 License
*
* Date: Aug 31, 2013
*/
(function( $ ){
  "use strict";
  $.fn.selectorQuery = function( options ) {
    var settings = $.extend({
        'widthStops': [320, 480, 640, 960, 1024, 1280],
        'classPrefix': 'max-'
    }, options);
    
    // create list of all stop classes for clearing
    settings.allClasses = settings.classPrefix + settings.widthStops.join(' ' + settings.classPrefix);

    return this.each(function(){
        
        // Store the object
        var $this = $(this);
        var $settings = settings;
     
        // queryChecker() adds max-* classes depending on container width
        var queryChecker = function () {
            // debouncer
            clearTimeout($this.t);
            $this.t = setTimeout(function() {
                $this.removeClass($settings.allClasses);
                for (var i in $settings.widthStops) {
                    $this.addClass($this.width() + parseFloat($this.css('paddingLeft')) + parseFloat($this.css('paddingRight')) <= $settings.widthStops[i] 
                                   && $settings.classPrefix + $settings.widthStops[i]);
                }
            },100);
        };
      
        // Call once to set.
        queryChecker();
                
        // Call on resize.
		$(window).resize(function() {
		    queryChecker();
		});
		
    });

  };

})( jQuery );