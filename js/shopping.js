// ギャラリーの画像切替
$(window).load(function() {
    $("#navi img").click(function() {
        var img_src = $(this).attr("src");
        $("#display_photo>img").attr("src", img_src);
        return false;
    });
});

// ハンバーガーメニュー
$(document).ready(function() {
    $("#sp_menu_btn").click(function() {
        $(".toggle").slideToggle();
    });
});

// カルーセル（ヘッダー）
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        autoplay: true
    })
});
