$(function(){
    $("#act_btn").hover(function(){
        $(this).find(".version-btn").text("03710000")
    },function(){
        $(this).find(".version-btn").text("详情垂询")

    })
    $(".open").click(function(){
    
        $(this).parent().css("height","auto")
        $(this).hide();
        $(this).prev().show();
    })
    $(".close").click(function(){
        $(this).parent().css("height","320px")
        $(this).hide();
        $(this).next().show();
    })

})