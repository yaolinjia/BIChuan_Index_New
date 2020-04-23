//右侧悬浮时改变颜色
$(function () {
    $(".floating-item").hover(function () {
            $(this).find("g").attr("fill", "#4285f4")
        },
        function () {
            $(this).find("g").attr("fill", "#333");
        })
})