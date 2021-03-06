$('.datepicker').pickadate();

//buy_left > buy_right
$(function(){
    $('.choose_left').click(function(){
        $('.choose_right').css({opacity: "1", zIndex: "2"});
        $('.payment_right').css({opacity: "0", zIndex: "1"});
        $('.ship_right').css({opacity: "0", zIndex: "1"});
        $('.confirm_right').css({opacity: "0", zIndex: "1"});
    });
});

$(function(){
    $('.pay_left').click(function(){
        $('.choose_right').css({opacity: "0", zIndex: "1"});
        $('.payment_right').css({opacity: "1", zIndex: "2"});
        $('.ship_right').css({opacity: "0", zIndex: "1"});
        $('.confirm_right').css({opacity: "0", zIndex: "1"});
    });
});

$(function(){
    $('.ship_left').click(function(){
        $('.choose_right').css({opacity: "0", zIndex: "1"});
        $('.payment_right').css({opacity: "0", zIndex: "1"});
        $('.ship_right').fadeIn(1000).css({opacity: "1", zIndex: "2"});
        $('.confirm_right').css({opacity: "0", zIndex: "1"});
    });
});

$(function(){
    $('.confirm_left').click(function(){
        $('.choose_right').css({opacity: "0", zIndex: "1"});
        $('.payment_right').css({opacity: "0", zIndex: "1"});
        $('.ship_right').css({opacity: "0", zIndex: "1"});
        $('.confirm_right').css({opacity: "1", zIndex: "2"});
    });
});

$(function(){
    $(".buy_left").children().click(function(){
        $(this).addClass("bt_add");
        $(this).siblings().removeClass("bt_add");
    });
})

$(function(){
    $(".choose_right").children().click(function(){
        $(".choose_left").addClass("bt_add");
        $(".choose_right").css({opacity: "1"});
    });
});

$(function(){
    $(".show_now").click(function(){
        $("div.buy_info_block").css({display: "flex"});
    });
});

//payment pick
$(function(){
    $(".payment_form").children().click(function(){
        $(this).css({opacity: "1"});
        $(this).siblings().css({opacity: ".3"});
    });
});

//ship pick
$(function(){
    $(".ship_form").children().click(function(){
        $(this).css({opacity: "1"});
        $(this).siblings().css({opacity: ".3"});
    });
});
