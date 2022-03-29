$(function(){
    $("header nav .for_icon .fa-bars").on("click",function(){
       
        $("header nav .div_for_links").toggle("1000");
    
    });
    
   $(window).resize(function() {
      
         location.reload();
         return;
   });
   
   $(".showPopup").click(function(){
    $(".popup").fadeIn();
    })
    $(".popup .inner").click(function(e){
        
        e.stopPropagation();
        
    })
    $(".close").click(function(e){
        
        $(".popup").fadeOut();
        
    })
    $(".features .container .thing1 button").on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
    });
    $(".features .container .thing1 .Schedule").on("click" , function(){
        $(".features .container .thing1 .p_for_Schedule").fadeIn(500).siblings("div").fadeOut(50);
    })
    $(".features .container .thing1 .Tracking").on("click" , function(){
        $(".features .container .thing1 .p_for_Tracking").fadeIn(500).siblings("div").fadeOut(50);
    })
    $(".features .container .thing1 .Organize").on("click" , function(){
        $(".features .container .thing1 .p_for_Organize").fadeIn(500).siblings("div").fadeOut(50);
    })

    $(window).scroll(function(){

        if($(window).scrollTop() > 600){
            $(".Up").fadeIn();
        }else{
            $(".Up").fadeOut();
        }
    
    })
    $(".Up").on("click", function(){
        $("html , body").animate({
            scrollTop : 0 
        })
       
    })
});
