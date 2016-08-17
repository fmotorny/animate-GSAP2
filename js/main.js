$(function(){
	$('.modal').append('<b></b><a>x <span>Закрыть</span></a><span></span>');
	$('.modal form > div ').addClass('clearfix');


	var $over = $('#over'), 
	$box0 = $("#box0"),
    $divs = $("form div"),
    $formp = $('.form > p'),
    $bts = $('.form button'),
    tl;


    var $box1 = $("#box1");
	var $textp = $('.text p'),
	$textimg = $('.text img'),
		$textbt = $('.text button');

		

	var tl = new TimelineMax({
    	//delay:0.5
    });

    tl.to($over, 1, {opacity:1, ease:Expo.easeInOut},5) 
       .to($box0, 1.5, {top:"50px", ease:Expo.easeInOut}, "-=0.9")
	   .to($formp, 0.7, {top:"0px", ease:Expo.easeInOut}, "-=0.6")
	   .staggerTo($divs, 0.3, {autoAlpha:1, left:0}, 0.1, "-=0.2")
	   .to($bts, 0.5, {scale:1, bottom:0, autoAlpha:1, ease:Expo.easeInOut}, "-=0.2");

	$('button').click(function(){

		if ($('input[type="radio"]').is(':checked'))
	    {
	       //alert('Верно');
	        tl.to(box0, 1.5, {top:"50px", left:'-2000px', display:'none', ease:Expo.easeInOut})
	   	 	tl.to(box1, 1.5, {right:"0px", ease:Expo.easeInOut}, "-=0.4")
	   	 	tl.to($textp, 1.5, {top:"0px", ease:Expo.easeInOut}, "-=1.2")
	   	 	tl.fromTo($textimg,0.8,{visible:true,scale:0},{scale:1,ease:Expo.easeInOut}, "-=0.6")
	   	 	tl.to($textbt, 1.5, {bottom:"0px", ease:Expo.easeInOut}, "-=0.4");

	    } else {
	    	alert('Выберите хотя бы один ответ!')
	    }
	      	
    });
	


	$('.modal > a').on('click', function(){

		TweenMax.to("#box0", 1, {  
			top:"-1050px", ease:Expo.easeIn
		});

		TweenMax.to("#box1", 1, {  
			top:"-1050px", ease:Expo.easeIn
		});

		TweenMax.to($over, 1, {  
			opacity:0, ease:Expo.easeIn
		});

	});
	
});


