$(function () {
    $(".product-nav>li").hover(function () {
        $(this).addClass("nav-active")
    },
    function () {
        $(this).removeClass("nav-active")
    })
})