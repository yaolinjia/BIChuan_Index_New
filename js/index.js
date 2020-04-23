$(function () {
    $(".team-imgwrap>img").css("display", "none")
    $(".team-imgwrap>img").eq(0).css("display", "inline")

    $(document).scroll(function () {
        var scroH = $(document).scrollTop(); //滚动高度
        var viewH = $(window).height(); //可见高度 
        var contentH = $(document).height(); //内容高度

        if (scroH > 0) { //距离顶部大于100px时
            console.log('99')
            $(".nav_box").css("backgroundColor", "#fff")
        } else {
            $(".nav_box").css("backgroundColor", "transparent")

        }
        if (contentH - (scroH + viewH) <= 100) { //距离底部高度小于100px

        }
        if (contentH = (scroH + viewH)) { //滚动条滑到底部啦

        }

    })
    $("#team_tab>li").hover(function () {
            $("#team_tab>li").removeClass("active")
            $(".team-imgwrap>img").css("display", "none")
            $(this).addClass("active")
            $(".team-imgwrap>img").eq($(this).index()).css("display", "inline")
        },
        function () {

        })
})