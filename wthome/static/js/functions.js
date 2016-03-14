$(document).ready(function(){
	$('#one').click(function(){
		$(this).toggleClass('animated fadeInUp animated fadeOutUp hidden');

	$('#two').click(function(){
		$(this).toggleClass('animated fadeInUp animated fadeOutUp hidden');

	$('#one1').click(function(){
		$('#one').toggleClass('animated fadeInUp animated fadeOutUp hidden');
		$('#two').toggleClass('animated fadeOutUp animated fadeInUp hidden');
	})
	$('#one2').click(function(){
		$('#one').toggleClass('animated fadeInUp animated fadeOutUp hidden');
		$('#three').toggleClass('animated fadeOutUp animated fadeInUp hidden');
	})
	$('#one3').click(function(){
		$('#one').toggleClass('animated fadeInUp animated fadeOutUp hidden');
		$('#four').toggleClass('animated fadeOutUp animated fadeInUp hidden');
	})
	$('#one4').click(function(){
		$('#one').toggleClass('animated fadeInUp animated fadeOutUp hidden');
		$('#five').toggleClass('animated fadeOutUp animated fadeInUp hidden');
	})
	$('#arrow2').click(function(){
		$('#two').toggleClass('animated fadeInUp animated fadeOutUp hidden');
		$('#one').toggleClass('animated fadeOutUp animated fadeInUp hidden');
	})
	$('#arrow3').click(function(){
		$('#three').toggleClass('animated fadeInUp animated fadeOutUp hidden');
		$('#one').toggleClass('animated fadeOutUp animated fadeInUp hidden');
	})
	$('#arrow4').click(function(){
		$('#four').toggleClass('animated fadeInUp animated fadeOutUp hidden');
		$('#one').toggleClass('animated fadeOutUp animated fadeInUp hidden');
	})
	$('#arrow5').click(function(){
		$('#five').toggleClass('animated fadeInUp animated fadeOutUp hidden');
		$('#one').toggleClass('animated fadeOutUp animated fadeInUp hidden');
	})

})