require(['jquery','static', 'juicer', 'base','json'
], function( $,static, juicer, base,json ) {
    $("#J_home").on("click" , function (){
        $(".top").fadeIn(500);
        $(".bot").fadeOut(500);
        $(".solider").animate({
            top: 0
        },300)
        $("#J_home img").attr("src","./build/mods/menu/i/home_red.png");
        $("#J_data img").attr("src","./build/mods/menu/i/data.png");
        $("#J_changePass img").attr("src","./build/mods/menu/i/pass.png");
    });

    $("#J_changePass").on("click",function(){
        $(".top").fadeOut(500);
        $(".bot").fadeIn(500);
        $(".solider").animate({
            top: 331
        },300);
        $("#J_home img").attr("src","./build/mods/menu/i/home.png");
        $("#J_data img").attr("src","./build/mods/menu/i/data.png");
        $("#J_changePass img").attr("src","./build/mods/menu/i/pass_red.png");
    });

    $(".con").each(function(){
        var index = $(this).index;
        $(this).on("mouseenter",function(){
            $(this).addClass("haha");
        })
        $(this).on("mouseleave",function(){
            $(this).removeClass("haha");
        })
    });
    $(".inp").each(function(){
        var index = $(this).index;
        $(this).on("mouseenter",function(){
            $(this).addClass("hehe");
        })
        $(this).on("mouseleave",function(){
            $(this).removeClass("hehe");
        })
    });

    $(".confirm").on("click" , function (){
        var $inputs = $(".bot input");
        var oldpwd = $inputs.eq(0).val();
        var newpwd = $inputs.eq(1).val();
        var newpwd2 = $inputs.eq(2).val();

        $.log ($inputs)
        if (!oldpwd || !newpwd || !newpwd2) {
            alert("请填写完整密码");
            return;
        } else if (newpwd!=newpwd2){
            alert("新密码两次填写不一致");
            return;
        }
        $.ajax({
            url:'/api/accounts/password',
            contentType: "application/json",
            dataType:"json",
            beforeSend: function(request) {
                request.setRequestHeader("s", "www");
                request.setRequestHeader("clientId","001");
                request.setRequestHeader("clientTime",new Date().getTime());
            },
            data:$.toJSON({
                data:{
                    "oldPassword":oldpwd,
                    "newPassword":newpwd
                }
            } ),
            type:"PATCH",
            success:function (res){
                if (res.code==200000){
                        $inputs.each(function (){
                            $(this).val("");
                        });
                    alert("修改密码成功！")
                } else {
                    alert(res.message);
                }
            },
            error:function (data){

            }
        });
    });
},function(err){
    var con = null;
    if ((con=window.console)) con.log(err);
    else alert(err);
});