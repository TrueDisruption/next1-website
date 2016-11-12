console.log('k');

$('.roundBtn.blue').hover(function(){
	$(".reportHolder.iot").addClass('iothover');
}, function(){
	$(".reportHolder.iot").removeClass('iothover');
})

$('.reportHolder.iot').hover(function(){
	$(".roundBtn.blue").addClass('hover');
}, function(){
	$(".roundBtn.blue").removeClass('hover');
})

$('.roundBtn.green').hover(function(){
	$(".reportHolder.ai").addClass('aihover');
}, function(){
	$(".reportHolder.ai").removeClass('aihover');
})

$('.reportHolder.ai').hover(function(){
	$(".roundBtn.green").addClass('hover');
}, function(){
	$(".roundBtn.green").removeClass('hover');
})

$('.close').click(function(e){
	e.preventDefault()
	$('.blueDescriptionBlock').hide()
})