console.log('k');

$('.roundBtn.blue').hover(function(){
	$(".reportHolder.iot").addClass('iothover');
}, function(){
	$(".reportHolder.iot").removeClass('iothover');
})

$('.roundBtn.green').hover(function(){
	$(".reportHolder.ai").addClass('aihover');
}, function(){
	$(".reportHolder.ai").removeClass('aihover');
})
