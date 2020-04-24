$(function () {
    $(".team-imgwrap>img").css("display", "none")
    $(".team-imgwrap>img").eq(0).css("display", "inline")

    $(document).scroll(function () {
        var scroH = $(document).scrollTop(); //滚动高度
        var viewH = $(window).height(); //可见高度 
        var contentH = $(document).height(); //内容高度

        if (scroH > 0) { //距离顶部大于100px时
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
    var now_list = 0;
    var max_num = ($(".cardList>.card").length - 2) * -460
    $(".witness>.right").click(function () {
        if (now_list >max_num) {
            now_list -= 460;
            var new_x = `translateX(${now_list}px)`;
            $(".cardList").css("transform", new_x);
        }

    })
    $(".witness>.left").click(function () {
        if (now_list < 0) {
            now_list += 460;
            var new_x = `translateX(${now_list}px)`;
            $(".cardList").css("transform", new_x);
        }

    })
})