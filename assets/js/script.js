      
      // navbar color change onscroll
      $(document).ready(function(){

     var checkScrollBar = function(){
       $('nav').css({
         backgroundColor: $(this).scrollTop() > 1 ?
           'rgb(0, 0, 0)' : 'rgba(0, 0, 0, 0.164)'

       })
     }
     $(window).on('load resize scroll', checkScrollBar)
     });


    //  carousal pancakes
    $( document ).ready(function() {
  
      let slider = $('.slider .items');
      let items = $('.slider .items .item .child')
      const leftButton = $('#left')
      const rightButton = $('#right')
      
      let scrollPos = 0
      if (scrollPos >= 0) leftButton.hide()
      
      leftButton.click(function() {
        scrollPos += slider.width();
        if (scrollPos >= 0) {
          leftButton.hide()
          scrollPos = 0
        }
        rightButton.show()
        slider.css('transform', "translate3d(" + scrollPos + "px, 0px, 0px)")
      });
    
      rightButton.click((e) => {
        scrollPos -= slider.width();
        if (scrollPos <= -(items.innerHeight() - 2) * 15) rightButton.hide()
        leftButton.show()
        slider.css('transform', "translate3d(" + scrollPos + "px, 0px, 0px)")
      });
    
    });