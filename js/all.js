//AOS
AOS.init({
    once: true,
});

// hamburger
$(function(){
    $("div.hamburger").on("click", function(){
    $(this).toggleClass("is-active");
    $(".nav_slide").slideToggle({display: "flex"});
    $(".header").toggleClass("zd");
    });
});
// hamburger resize
$(function(){
    $(window).on("resize", function(){
        if($(window).width()>991){
            $(".nav_slide").css({display: "none"});
            $("div.hamburger").removeClass("is-active");
        }
    });
});

//gotop
$(window).scroll(function(){
    var gotop = $(this).scrollTop();
    if(gotop>600){
        $(".gotop").css({display:"block"});
    }else{
        $(".gotop").css({display:"none"});
    }
});

//click to the top

$(function(){
    $(".gotop").click(function(){
      $("html,body").animate({
        scrollTop:0
      },700);
    });
  });


//product amount + - bt

$('.count_bt').mousedown($(this),function(){
    $(this).css({backgroundColor: "rgb(206, 231, 235)"});
});

$('.count_bt').mouseup($(this),function(){
    $(this).css({backgroundColor: "#fff"});
});

