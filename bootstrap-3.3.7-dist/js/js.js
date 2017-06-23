setTimeout( function() {
	setInterval(function(){
  	$(".know-more").css("font-size",'1.2em')
  	$(".know-more").css("color", "#fff")
  },500)

  setInterval(function(){
  	$(".know-more").css("font-size",'1em')
  	$(".know-more").css("color", "#ff4d4d")
  },1000)

}, 2000)

//the second page

$(window).scroll(function(event){
	var ypos = $(this).scrollTop();

	if ( ypos > 300) {
		$(".myimg").removeClass("myimg-out");
		$(".name").fadeIn(1000);
		$(".info-p").fadeIn(1500);
	}else{
		$(".myimg").addClass("myimg-out");
		$(".name").fadeOut(1000);
		$(".info-p").fadeOut(1000);
	}

	if ( ypos >550) {
         $(".insta").fadeIn(1000);
         $(".code").fadeIn(1500);
         $(".git").fadeIn(2000);
    }else{
    	 $(".insta").fadeOut(500);
         $(".code").fadeOut(500);
         $(".git").fadeOut(500);
    }

    if ( ypos > 665) {
    	$()
    }


})

	
	function progress(){
		var prg = document.getElementById('progress');
		var percent = document.getElementById('precentCount');
		var counter = 1;
		var progress = 1;
		var id = setInterval(frame,20);


		function frame(){
			if (progress == 200 && counter == 100) {
				clearInterval(id);
			}else{

				counter += 1;
				progress = counter * 2;
				prg.style.width = progress + 'px';
				percent.innerHTML = counter + '%';
				console.log(counter,progress)
			}
		}
	}

	progress();