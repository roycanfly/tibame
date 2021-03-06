$('.datepicker').pickadate();

//owl
var owl = $('.owl-carousel');
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1440:{
            items:3
        }
    }
});

$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
});

$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
});