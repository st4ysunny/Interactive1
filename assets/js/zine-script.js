console.log('circle');

$(document).ready(function(){

 //     $("#darkmode").click(function(){
	// 	$('body').toggleClass('darkmode');

	// });

     $('.arecibo .circle').click(function(){
     	$('.arecibo .circle').toggleClass('hide');
     	$('.arecibo h3').toggleClass('show');
     });

     $('.arecibo h3').click(function(){
     	$('.arecibo .circle').toggleClass('hide');
     	$('.arecibo h3').toggleClass('show');
     });

     $('.parrot .circle').click(function(){
     	$('.parrot .circle').toggleClass('hide');
     	$('.parrot h3').toggleClass('show');
     });

     $('.parrot h3').click(function(){
     	$('.parrot .circle').toggleClass('hide');
     	$('.parrot h3').toggleClass('show');
     });

     $('.voice .circle').click(function(){
     	$('.voice .circle').toggleClass('hide');
     	$('.voice h3').toggleClass('show');
     });

     $('.voice h3').click(function(){
     	$('.voice .circle').toggleClass('hide');
     	$('.voice h3').toggleClass('show');
     });     

     $('.human .circle').click(function(){
     	$('.human .circle').toggleClass('hide');
     	$('.human h3').toggleClass('show');
     });

     $('.human h3').click(function(){
     	$('.human .circle').toggleClass('hide');
     	$('.human h3').toggleClass('show');
     });

     $('.fermi .circle').click(function(){
     	$('.fermi .circle').toggleClass('hide');
     	$('.fermi h3').toggleClass('show');
     });

     $('.fermi h3').click(function(){
     	$('.fermi .circle').toggleClass('hide');
     	$('.fermi h3').toggleClass('show');
     });

     $('.silence .circle').click(function(){
     	$('.silence .circle').toggleClass('hide');
     	$('.silence h3').toggleClass('show');
     });

     $('.silence h3').click(function(){
     	$('.silence .circle').toggleClass('hide');
     	$('.silence h3').toggleClass('show');
     });

     $('.be-good .circle').click(function(){
     	$('.be-good .circle').toggleClass('hide');
     	$('.be-good h3').toggleClass('show');
     });

     $('.be-good h3').click(function(){
     	$('.be-good .circle').toggleClass('hide');
     	$('.be-good h3').toggleClass('show');
     });

      $('.learn .circle').click(function(){
     	$('.learn .circle').toggleClass('hide');
     	$('.learn h3').toggleClass('show');
     });

     $('.learn h3').click(function(){
     	$('.learn .circle').toggleClass('hide');
     	$('.learn h3').toggleClass('show');
     });

     $('.closed-envelope').click(function(){
          $('.closed-envelope').toggleClass('hide');
          $('#ily').toggleClass('show');
     });

     $('#ily').click(function(){
          $('.closed-envelope').toggleClass('hide');
          $('#ily').toggleClass('show');
     });

    $("#darkmode").click(function(){
          $(':root').toggleClass('darkmode');
          $('p').toggleClass('darkmode');
          $('.about p').toggleClass('darkmode');
          $('span').toggleClass('darkmode');
          $('h1').toggleClass('darkmode');
          $('h4').toggleClass('darkmode');
          $('button').toggleClass('darkmode');
          $('a').toggleClass('darkmode');
          $('button').text('humanparrot');
	});

    $( function() {
     $( ".draggable" ).draggable();
     });

});