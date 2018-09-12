var sideJs = (function ($) {
    
     return{
            
            init() {
            
                
                $(document).ready(function(){
                    $("ul.colors li").click(function(){

                      var getColor = $(this).attr('value');

                      var getColorName = $(this).attr('class');

                      $(".color-box").css('background', getColor );

                      $(".color-name").text(getColorName);

                      });
                        
                      });
                    
            
        }
        }

    })(jQuery);
    
