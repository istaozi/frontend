require(["jquery", "static", "juicer", "base", "json"],
    function (e, t, n, o) {
        e.ajax({
            url: "/api/accounts/profile",
            contentType: "application/json",
            dataType: "json",
            type: "post",
            beforeSend: function (e) {
                e.setRequestHeader("s", "www"),
                e.setRequestHeader("clientId", "001"),
                e.setRequestHeader("clientTime", (new Date).getTime())
            }, success: function (e) {
                2e5 == e.code && (location.href = "/menu.html")
            }, error: function (e) {
            }
        })
}, function (e) {
    var t = null;
    (t = window.console) ? t.log(e) : alert(e)
}
);