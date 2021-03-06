$(function(){
    $(".aside_slide").on("click", function(){
        $(".aside").toggleClass("add");
    })
});

$(function(){
    $(window).on("resize", function(){
        if($(window).width()>1200){
            $(".aside").removeClass("add");
        }
    });
});

$(function(){
    $(window).on("resize", function(){
        if($(window).width()>991){
            $(".header").removeClass("zd");
        }
    });
});