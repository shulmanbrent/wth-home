$(document).ready(function(){
	$('#one').click(function(){
		$(this).toggleClass('animated fadeInUp animated fadeOutUp hidden');
		$('#two').toggleClass('animated fadeOutUp animated fadeInUp hidden');
	})
		$('#two').click(function(){
		$(this).toggleClass('animated fadeInUp animated fadeOutUp hidden');
		$('#one').toggleClass('animated fadeOutUp animated fadeInUp hidden');
	})

})