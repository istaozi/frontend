require(["jquery", "static", "juicer", "base", "json"], function (e, t, n, a, o) {
    e("#J_home").on("click", function () {
        e(".top").fadeIn(500), e(".bot").fadeOut(500), e(".solider").animate({top: 0}, 300), e("#J_home img").attr("src", "./build/mods/menu/i/home_red.png"), e("#J_data img").attr("src", "./build/mods/menu/i/data.png"), e("#J_changePass img").attr("src", "./build/mods/menu/i/pass.png")
    }), e("#J_changePass").on("click", function () {
        e(".top").fadeOut(500), e(".bot").fadeIn(500), e(".solider").animate({top: 331}, 300), e("#J_home img").attr("src", "./build/mods/menu/i/home.png"), e("#J_data img").attr("src", "./build/mods/menu/i/data.png"), e("#J_changePass img").attr("src", "./build/mods/menu/i/pass_red.png")
    }), e(".con").each(function () {
        e(this).index;
        e(this).on("mouseenter", function () {
            e(this).addClass("haha")
        }), e(this).on("mouseleave", function () {
            e(this).removeClass("haha")
        })
    }), e(".inp").each(function () {
        e(this).index;
        e(this).on("mouseenter", function () {
            e(this).addClass("hehe")
        }), e(this).on("mouseleave", function () {
            e(this).removeClass("hehe")
        })
    }), e(".confirm").on("click", function () {
        var t = e(".bot input"), n = t.eq(0).val(), a = t.eq(1).val(), o = t.eq(2).val();
        return e.log(t), n && a && o ? a != o ? void alert("新密码两次填写不一致") : void e.ajax({
            url: "/api/accounts/password", contentType: "application/json", dataType: "json", beforeSend: function (e) {
                e.setRequestHeader("s", "www"), e.setRequestHeader("clientId", "001"), e.setRequestHeader("clientTime", (new Date).getTime())
            }, data: e.toJSON({data: {oldPassword: n, newPassword: a}}), type: "PATCH", success: function (n) {
                2e5 == n.code ? (t.each(function () {
                    e(this).val("")
                }), alert("修改密码成功！")) : alert(n.message)
            }, error: function (e) {
            }
        }) : void alert("请填写完整密码")
    })
}, function (e) {
    var t = null;
    (t = window.console) ? t.log(e) : alert(e)
});