$(function () {
    /*tab页面切换*/
    $(".xxpl_tab li").each(function(){
        $(this).click(function(){
            $(this).addClass("active").siblings().removeClass("active");
            var curAbout=$(this).attr("about");
            $("."+curAbout).removeClass("disnone").addClass("disblock").siblings().addClass("disnone");
        });
    });
    /*月报 季刊点击事件*/
    $(".ptsj_condi span").each(function(){
        $(this).click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        });
    });

    /*分页按钮事件*/
    $(".xxpl_spe_pa").each(function(){
        $(this).click(function(){
            $(this).addClass("current_page").siblings().removeClass("current_page");
        });
    });
});