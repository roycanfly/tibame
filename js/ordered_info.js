//switch member/ordered
$("div.member").click(function(){
    $("form.member_login").fadeIn().css({display: "block"});
    $("form.ordered_search").fadeOut().css({display: "none"});
    $(this).css({backgroundColor: "var(--main-color--)", color: "#fff"});
    $("div.ordered").css({backgroundColor: "var(--defult-color--)", color: "#aaa"});
})
$("div.ordered").click(function(){
    $("form.ordered_search").fadeIn().css({display: "block"});
    $("form.member_login").fadeOut().css({display: "none"});
    $(this).css({backgroundColor: "var(--main-color--)", color: "#fff"});
    $("div.member").css({backgroundColor: "var(--defult-color--)", color: "#aaa"});
})
//login_bt
$(".login_bt").click(function(){
    $("form.ordered_search").fadeIn().css({display: "block"});
    $("form.member_login").fadeOut().css({display: "none"});
    $("div.ordered").css({backgroundColor: "var(--main-color--)", color: "#fff"});
    $("div.member").css({backgroundColor: "var(--defult-color--)", color: "#aaa"});
})
//order_info_block slide
$(".send_bt").click(function(){
    $(".order_info_block").slideDown(1000).css({display: "flex"});
});

$(".clear_bt").click(function(){
    $(".order_info_block").css({display: "none"});
})
//buy_left slide
$(".buy_left")