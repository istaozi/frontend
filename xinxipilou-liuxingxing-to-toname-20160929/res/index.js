$(function () {
    /*tabҳ���л�*/
    $(".xxpl_tab li").each(function(){
        $(this).click(function(){
            $(this).addClass("active").siblings().removeClass("active");
            var curAbout=$(this).attr("about");
            $("."+curAbout).removeClass("disnone").addClass("disblock").siblings().addClass("disnone");
        });
    });
    /*�±� ��������¼�*/
    $(".ptsj_condi span").each(function(){
        $(this).click(function(){
            $(this).addClass("active").siblings().removeClass("active");
        });
    });

    /*��ҳ��ť�¼�*/
    $(".xxpl_spe_pa").each(function(){
        $(this).click(function(){
            $(this).addClass("current_page").siblings().removeClass("current_page");
        });
    });
});