//AOS
AOS.init();

//pickade
$('.datepicker').pickadate();

// 漢堡
$(function(){
    $("div.hamburger").on("click", function(){
    $(this).toggleClass("is-active");
    $(".nav_slide").slideToggle({display: "flex"});
    $(".header").toggleClass("zd");
    });
});
// 漢堡resize
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

// 點擊按鈕頁面滑到最上方

$(function(){
    $('.gotop').click(function(){
      $('html,body').animate({
        scrollTop:0
      },700);
    });
  });

  // $(function () {
//     // hamburger icon 的切換
//     // 漢堡選單出現
//     $("button.hamburger").on("click", function () {
//       $(this).toggleClass("is-active");
//       $('.nav').toggle("slide", { direction: "right" }, 500);
//     });
  
//     // 子選單 
  
//     function slide() {
//       $('.social_block').click(function () {
//         $(this).children().slideToggle();
//       });
//     };
//     if ($(window).width() < 991) {
//       slide();
//     }
//     else {
//       $('.social_link_list').css({
//         display: 'none',
//       });
//     };
//   });
//   $(window).resize(function () {
  
//   });
  

  // function slide() {
    //   $('.social_block').click(function () {
    //     $(this).children().slideToggle();
    //   });
    // }
    // $(window).on('resize', 'slide')

    // function hide() {
    //   $('.social_link_list').hide();
    // }

