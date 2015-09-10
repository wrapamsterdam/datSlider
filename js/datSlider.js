function datSlider(slider){

  var screenHeight = jQuery(window).height();
  jQuery('.screen-half').height(screenHeight/2);

/* Settings */
  var baseHeight = 400; 
  var viewWidth = 90; 

/* Vars */
  var screenWidth = jQuery(window).width();
  var viewWidthCal = (viewWidth/100)*screenWidth;
  var viewWidthMar = (screenWidth - viewWidthCal)/2;

  var sliderWidth = 0;
  jQuery(window).on('load', function() {
    /* Calculate contaner width */
    jQuery(slider + ' .slide').each(function(index, el){  
      sliderWidth = sliderWidth + ((jQuery(this).width()*baseHeight)/jQuery(this).height()) + 20;
    });
    setTimeout(function(){
      sliderWidth = sliderWidth + 20;
      if(sliderWidth < screenWidth){
        var screenDiff = screenWidth - sliderWidth;
        jQuery(slider + ' .slides').css('left',screenDiff/2+'px');
      }
    },100);
    console.log(sliderWidth);

  /* Set container width and fade in */
    setTimeout(function(){
      jQuery(slider + ' .slides').css('width', sliderWidth);
      setTimeout(function(){
        jQuery(slider).smoothDivScroll({
          easingAfterHotSpotScrolling: true,
          easingAfterHotSpotScrollingDistance: 100,
          easingAfterHotSpotScrollingDuration: 900,
          easingAfterHotSpotScrollingFunction: "easeOutSine"
        });
      },200);
      setTimeout(function(){
        jQuery(slider + ' .slides').css('opacity','1');
      },500);
    },200);

  /* Iterate slides and add events */
    jQuery(slider + ' .slide').each(function(index, el){
      jQuery(el).css('height',baseHeight);
      jQuery(el).css('width','auto');

      var scroll = false;

      /* Open function */
      jQuery(el).click(function(){
        if (!scroll){
          var rect = el.getBoundingClientRect();
          console.log(rect.top, rect.right, rect.bottom, rect.left);
          var clone = jQuery(el).clone();
          jQuery(clone).appendTo(".slider-overlay");
          var cloneWidth = jQuery(el).width();
          jQuery(clone).css({
            'height' : baseHeight,
            'width' : cloneWidth,
            'position' : 'absolute',
            'top' : rect.top,
            'right' : rect.right,
            'bottom' : rect.bottom,
            'left' : rect.left
          });
          jQuery('.slider-overlay').show();
          setTimeout(function(){
            jQuery('.slider-overlay').css('opacity','1');
            setTimeout(function(){
              jQuery(clone).css({
              'width':viewWidthCal+'px',
              'height':((viewWidthCal*baseHeight)/cloneWidth)+'px',
              'left':viewWidthMar+'px',
              'right':'auto',
              'bottom':'auto',
              'top': ((screenHeight - ((viewWidthCal*baseHeight)/cloneWidth))/2)+'px'
              });
            },50);
          },50);

          /* Close function */
          jQuery('.slider-overlay').click(function(){
            jQuery(clone).css({
              'height' : baseHeight,
              'width' : cloneWidth,
              'position' : 'absolute',
              'top' : rect.top,
              'left' : rect.left
            });
            setTimeout(function(){
              jQuery('.slider-overlay').css('opacity','0');
              setTimeout(function(){
              jQuery('.slider-overlay').hide();
              jQuery(clone).remove();
              },150);
            },50);
          });
        }
      });
    });
  });
};