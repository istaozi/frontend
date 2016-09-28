require(['jquery','static', 'juicer', 'base','json'
], function( $,static, juicer, base ) {
    $.ajax({
        url:'/api/accounts/profile',
        contentType: "application/json",
        dataType:"json",
        type:"post",
        beforeSend: function(request) {
            request.setRequestHeader("s", "www");
            request.setRequestHeader("clientId","001");
            request.setRequestHeader("clientTime",new Date().getTime());
        },
        success:function (res){
            if (res.code==200000){
                //location
                location.href="/menu.html";
            }
        },
        error:function (data){

        }
    });
},function(err){
    var con = null;
    if ((con=window.console)) con.log(err);
    else alert(err);
});