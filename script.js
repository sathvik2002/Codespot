$(function(){



   $("#ham").click(function(){
   	$(".my-nav").toggleClass("is-open")
   })
	
   $(window).scroll(function(event){
     
     var ypos = $(this).scrollTop();
     if ( ypos < 29){
      $("#header-nav").css("margin-top", "5vh")
      $("#nav-list").css("border-bottom","1px solid #737373")
     }
     if ( ypos > 30) {
      $("#nav-list").css("border-bottom","0")
     	$("#header-nav").css("background", "#f8f8f8")
      $("#header-nav").css("margin-top", "0")
     	$("#ham").css("color", "black")  
     	$(".spot").css("color", "black")
     	$("#nav-list a").css("color", "black") 
     	$("#home").mouseover(function(){
   	$("#home").css("color", "#07cb79")
   })

    $("#home").mouseout(function(){
   	$("#home").css("color", "black")
   })  

   $("#skills").mouseover(function(){
   	$("#skills").css("color", "#07cb79")
   })

    $("#skills").mouseout(function(){
   	$("#skills").css("color", "black")
   })

   $("#about").mouseover(function(){
   	$("#about").css("color", "#07cb79")
   })

    $("#about").mouseout(function(){
   	$("#about").css("color", "black")
   })

   $("#Contact").mouseover(function(){
   	$("#Contact").css("color", "#07cb79")
   })

    $("#Contact").mouseout(function(){
   	$("#Contact").css("color", "black")
   })	

    	$("#about").click(function(){
		$("#home").css("color", "black");
		$("#about").css("color", "#07cb79")
	})

	$("#about").click(function(){
		$("#home").css("color", "black");
		$("#about").css("color", "#07cb79")
	})	

     }else{
     	$("#header-nav").css("background", "transparent")
     	$("#ham").css("color", "white")  
     	$(".spot").css("color", "white")
     	$("#nav-list a").css("color", "white")
     	$("#home").mouseover(function(){
   	$("#home").css("color", "#07cb79")
   })

    $("#home").mouseout(function(){
   	$("#home").css("color", "white")
   })


   $("#skills").mouseover(function(){
   	$("#skills").css("color", "#07cb79")
   })

    $("#skills").mouseout(function(){
   	$("#skills").css("color", "white")
   })

   $("#about").mouseover(function(){
   	$("#about").css("color", "#07cb79")
   })

    $("#about").mouseout(function(){
   	$("#about").css("color", "white")
   })

   $("#Contact").mouseover(function(){
   	$("#Contact").css("color", "#07cb79")
   })

    $("#Contact").mouseout(function(){
   	$("#Contact").css("color", "white")
   })
     }
       
  if ( ypos > 574) {
             
      $("#header-nav").css("background", "#2f3742")
      $("#ham").css("color", "white")  
      $(".spot").css("color", "white")
      $("#nav-list a").css("color", "white")
      $("#home").mouseover(function(){
    $("#home").css("color", "#07cb79")
   })

    $("#home").mouseout(function(){
    $("#home").css("color", "white")
   })
   

   $("#skills").mouseover(function(){
    $("#skills").css("color", "#07cb79")
   })

    $("#skills").mouseout(function(){
    $("#skills").css("color", "white")
   })

   $("#about").mouseover(function(){
    $("#about").css("color", "#07cb79")
   })

    $("#about").mouseout(function(){
    $("#about").css("color", "white")
   })

   $("#Contact").mouseover(function(){
    $("#Contact").css("color", "#07cb79")
   })

    $("#Contact").mouseout(function(){
    $("#Contact").css("color", "white")
   })
  
   }

   if (ypos > 565) {
       $("#image-layout").css("margin-left", "0")

   }else{
       $("#image-layout").css("margin-left", "-100vw")

   }
   
   })	

  
   $(".typer").typed({
        strings: [" A WEB DEVELOPER", " A WEB DESIGNER", " AN ANDROID DEVELOPER"," SATHVIK HEGDE"],
        typeSpeed: 60
      })

   setInterval(function(){
      $(".pop").slideDown();
     },9800)
   

$(window).scroll(function(event){
      var ypos = $(window).scrollTop();
    if (ypos > 1350) {
      $(".progress-fill-web-des").css("width", "94%")
      $(".progress-fill-php").css("width", "69%")
      $(".progress-fill-html-css").css("width", "100%")
      $(".progress-fill-javascript-jquery").css("width", "97%")
          }

      if ( ypos > 1540) {
        $(".progress-fill-sass").css("width", "98%")

      }    
    })   
})