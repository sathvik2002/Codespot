
$(document).ready(function(){

  // BASIC SELECTORS
  //$('.box').css('border', '4px solid red');

 // BASIC ANIMATIONS
  //$('.box:first').animate({bottom: '200px', left: '200px', }, 1000);
  //$('.box:empty').animate({top: '600px' , right: '500px', }, 1000);

 // INDEX FILTERS  
// $('p:eq(3)').css('border', '4px solid red');
// $('p:eq(1)').css('border', '4px solid blue');

 // RELATIONSHIP FILTERS
  //$('.box:empty').css('border', '4px solid red');

 // ATTRIBUTE FILTERS
 //$('a[href$=".co.uk"]').css('border', '4px solid red');
 //$('a[href$=".com"]').css('border', '4px solid blue');

});

// Lesson 2
$(function(){

  // ATTR METHOD
  //$('p:first').attr('class', 'not-lead');
 // $('p:first').attr('class' , 'blue');

  // IMAGE SWAP
  //$('img').attr('src', 'img2.jpg');
  // $('img').delay(400).fadeOut(500, function(){
  //   $(this).attr('src', 'img2.jpg').fadeIn(500);
  // });

  // CLASS METHODS
  //$('p').toggleClass('blue').removeClass('lead');

  // CONTENT METHODS
  //$('p:first').html('<a href="google.com">link</a>');
  // $('input').val('yo dude!');

});

// Lesson 3
$(function(){

  // DOM TRAVERSAL
   //$('h2').parents('section').siblings('header').children().css('border', '4px solid red');


  // EVENT BINDING
   //$('html').keypress(function(){
  //   $(this).toggleClass('blue');
  // });


});
