// scroll
var h = document.documentElement,
	b = document.body,
	st = 'scrollTop',
	sh = 'scrollHeight',
	htop = document.querySelector('.progress-bar.horizontal.top'),
	hbot = document.querySelector('.progress-bar.horizontal.bottom'),
	vleft = document.querySelector('.progress-bar.vertical.left'),
	vright = document.querySelector('.progress-bar.vertical.right'),
	scroll;

document.addEventListener('scroll', function() {
	console.log(h, b);  
	scroll = ( h[st] || b[st] ) / ( ( h[sh] || b[sh] ) - h.clientHeight ) * 100;
	
	// set our variable for CSS to use
	htop.style.setProperty('--scroll', scroll + '%');
	hbot.style.setProperty('--scroll', scroll + '%');
	vleft.style.setProperty('--scroll', scroll + '%');
	vright.style.setProperty('--scroll', scroll + '%');
});

// counter
$(document).ready(function(){
    $('.counter-value').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 3500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});


// our team
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        transitionStyle:"backSlide",
        autoPlay:true
    });
});

// dark mode
// $(document).ready(function() {
// 	$('#dark-mode-switch').change(function() {
// 	  $('body' ).toggleClass('dark-mode');
// 	  document.getElementsByTagName("nav").style="black"
// 	});
//   });


var isMoved = false;

function move() {
    var element = document.getElementById('right');
    var heading = document.getElementById('imge');

    if (!isMoved) {
    element.style.position = 'relative';
    element.style.left = '40px';
    heading.style.visibility = 'hidden';
    element.style.visibility = 'hidden';
    isMoved = true;
    }    
    else {
    heading.style.visibility = 'visible';
    element.style.visibility = 'visible';
    element.style.position = 'static';
    element.style.top = 'auto';
    element.style.left = 'auto';
    isMoved = false;
    }
}


