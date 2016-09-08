//点击改变验证码
function chagenum() {
    document.getElementById("randImage").src = "random.jsp?"
    + Math.random();
};
var uname = document.getElementById("username");
var pwd = document.getElementById("userpwd");
//验证文本非空
function chek() {
    var uname = document.getElementById("username");
    var pwd = document.getElementById("userpwd");
    if ("" == uname.value) {
        document.getElementById("name").style.display = "";
        return false;
    }
    if ("" == pwd.value) {
        document.getElementById("pwd").style.display = "";
        return false;
    }

    return true;

}
//鼠标离开文本
function blur() {

    if ("" == uname.value) {
        document.getElementById("name").style.display = "";
    } else {
        document.getElementById("name").style.display = "none";
    }
    if ("" == pwd.value) {
        document.getElementById("pwd").style.display = "";

    } else {
        document.getElementById("pwd").style.display = "none";
    }
}
//hover鼠标移上事件
$(document).ready(function () {
    $("#moredata").click(function () {
        $(".index-data").slideUp();
        $(".small-data").delay(1000).fadeIn();
    });
    $(".xxd-partener>li").mouseover(function () {
        $(this).children("div").addClass("borderd");
        $(this).children("a").addClass("hover");
    });
    $(".xxd-partener>li").mouseout(function () {
        $(this).children("div").removeClass("borderd");
        $(this).children("a").removeClass("hover");
    });
    $("#show_more").click(function () {
        $("#index_blog_rollul").addClass("showall");
        $("#show_reg").show();
        $("#show_more").hide();
    });
    $("#show_reg").click(function () {
        $("#index_blog_rollul").removeClass("showall");
        $("#show_reg").hide();
        $("#show_more").show();
    });
    $(".footer-weibo").mouseover(function () {
        $(".weibo-box").fadeIn(100);
    });
    $(".footer-weibo").mouseout(function () {
        $(".weibo-box").fadeOut(100);
    });
    $(".footer-weixin").mouseover(function () {
        $(".weixin-box").fadeIn(100);
    });
    $(".footer-weixin").mouseout(function () {
        $(".weixin-box").fadeOut(100);
    });
    $(".footer-apple").mouseover(function () {
        $(".apple-box").fadeIn(100);
    });
    $(".footer-apple").mouseout(function () {
        $(".apple-box").fadeOut(100);
    });
    $(".footer-android").mouseover(function () {
        $(".android-box").fadeIn(100);
    });
    $(".footer-android").mouseout(function () {
        $(".android-box").fadeOut(100);
    });
    $('ul.nav li').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).fadeIn(100);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).fadeOut(100);
    });
    //完善个人资料显示切换
    $(".btn-binding").click(function () {
        $(this).parent().parent().parent().next(".info-binding").slideToggle(300);
    });
    //投标-使用优惠券
    $(".usecoupon").click(function () {
        $(this).siblings(".coupon").toggle();
    });
    //筛选条状态
    $("span.glyphicon-remove").click(function () {
        $(this).hide();
        $(this).parent().removeClass("choosed");
    });
    $(".fliter-ul > li > span.c").click(function () {
        $(this).parent().addClass("choosed");
        $(this).next("span.glyphicon-remove").show();
    });
});

//帮助中心菜单
$(document).ready(function () {
    $('#nav li').hover(
        function () {
            $('ul', this).stop().slideDown(200);
        },
        function () {
            $('ul', this).stop().slideUp(200);
        }
    );
    $("#close-alert").click(function () {
        $(".top-alert").hide();
    });
});


//为在10以内时数字，前面加0，例如 1 → 01
function checkten(tem) {
    if (tem < 10) {
        tem = "0" + tem;
        return tem;
    }
    return tem;
};


//分割两位数的时间
function resetTime(hh, mm, ss) {
    var common = "<span class='countdown-line'></span>";
    $("#hh1").html(common + hh.toString().substring(0, 1));
    $("#hh2").html(common + hh.toString().substring(1));
    $("#mm1").html(common + mm.toString().substring(0, 1));
    $("#mm2").html(common + mm.toString().substring(1));
    $("#ss1").html(common + ss.toString().substring(0, 1));
    $("#ss2").html(common + ss.toString().substring(1));

};
function countdown(startTime, endTime) {

    //当前时间
    var nowtime = new Date();

    //倒计结束时间
    var endtime = new Date(Date.parse(nowtime.getFullYear() + "/" + (nowtime.getMonth() + 1) + "/" + nowtime.getDate() + "," + endTime));

    //如果当前时间>倒计结束时间，提示今日投资已结束。
    if (nowtime.getTime() > endtime.getTime()) {
        $("#showtext").hide();
        $("#countdown").html("今日投资已结束,明日再来看哟~");

        //右侧按钮、输入框 购买按钮禁止操作
        $(".invest-money").removeClass("invest-money-h");
        $(".invest-money").removeClass("invest-money-selected");
        $(".invest-money").addClass("invest-unjiajian");

        $(".invest-input").addClass("invest-unjiajian");
        $(".invest-input").attr("readonly", "true");

        $(".invest-jian").addClass("invest-unjiajian");
        $(".invest-jia").addClass("invest-unjiajian");

        $("#mgquick-buy").removeClass("pink-btn");
        $("#mgquick-buy").addClass("pink-btn-disabled");
        $("#mgquick-buy").attr("disabled", "true");
        $("#mgquick-buy").html("今日投资已结束");


        clearInterval(sh);
        return;
    }

    //倒计开始时间
    var startTime = new Date(Date.parse(nowtime.getFullYear() + "/" + (nowtime.getMonth() + 1) + "/" + nowtime.getDate() + "," + startTime));

    //如果当前时间<倒计开始时间，提示今日活动还未开始。
    if (nowtime.getTime() < startTime.getTime()) {
        $("#showtext").hide();
        $("#countdown").html("今日活动还未开始,请耐心等待~");
        clearInterval(sh);
        return;
    }

    //结束时间到现在共剩余多少毫秒
    var leftsecond = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);
    d = parseInt(leftsecond / 3600 / 24);
    h = checkten(parseInt((leftsecond / 3600) % 24));
    m = checkten(parseInt((leftsecond / 60) % 60));
    s = checkten(parseInt(leftsecond % 60));

    resetTime(h, m, s);
}

//圆环进度条 第一个参数为绑定div的id 第二个参数为剩余百分比 第三个参数为进度百分比 第四个参数为背景文字颜色,第五，六个参数控制圆环大小
function dataChart(tagid, d1, d2, bgcolor,outerradi,innerradi) {
		if(d1 == 0){
	        d1 = 0.01;
	    }else if(d1 ==100){
	        d1 = 99.99;
	    }

	    if(d2 == 0){
	        d2 = 0.01;
	    }else if(d2 ==100){
	        d2 = 99.99;
	    }
    //利用chart实现圆环进度条，两个值 此消彼长 总和保持100即可。
    var dataChartB = echarts.init(document.getElementById(tagid));
    dataChartB.setOption({ 
        series: [
            {
                type: 'pie',
                center: ['50%', '50%'],
                radius: [outerradi, innerradi],
                x: '0%', // for funnel
                itemStyle: { //圆环中心的数值
                    normal: {
                        label: {
                            formatter: function (params) {
								var value = params.value;
                                if(value == 99.99){
                                    value = 100;
                                }else if(value == 0.01){
                                    value = 0;
                                } 
                                return (100 - value).toFixed(2) + '%'
                            },
                            textStyle: {
                                baseline: 'middle'
                            }
                        }
                    }
                },
                data: [
                    {
                        name: '', value: d2, itemStyle: {
                        normal: {
                            color: bgcolor,//圆环颜色
                            label: {
                                show: false,
                                position: 'center',
                                formatter: '{b}',
                                textStyle: {
                                    baseline: 'bottom'
                                }
                            },
                            labelLine: {
                                show: false
                            }
                        }
                    }
                    },
                    {
                        name: 'other', value: d1,
                        itemStyle: {
                            normal: {
                                color: '#e8e8e8',
                                label: {
                                    show: true,
                                    position: 'center',
                                    textStyle: { //圆环中心文字的颜色控制
                                        color: bgcolor
                                    }
                                },
                                labelLine: {
                                    show: false
                                }
                            }
                        }
                    }

                ]
            }


        ]
    });

}


//图片轮换 start

var sum = 0;


function search() {

    sum = sum + 1;

    if (sum > 4) { 
        sum = 0; 
    }

    $("." + sum).addClass("disblock1").siblings().removeClass("disblock1");
    $("." + sum).fadeIn("slow").siblings().fadeOut("slow");
    $(".n_num" + sum).addClass("libackwhite").siblings().removeClass("libackwhite");

}

$(function () {
    //页面初始化时banner设置
    var se = setInterval("search()", 5000);


    /*banner底部条条事件*/
    $(".n_numbtn ul li").bind("click", function () {
        //停止图片自动切换
        clearInterval(se);

        // var thclass=$(this).attr("class").split(" ")[1];
        // var thcl=thclass.substr(thclass.length-1,1);

        $(this).addClass("libackwhite").siblings().removeClass("libackwhite");
        var thcl = $(this).index();
        var clnum = thcl;
        $("." + clnum).fadeIn("slow").siblings().fadeOut("slow");
        $("." + clnum).addClass("disblock1").siblings().removeClass("disblock1");

        sum = clnum;
        //停止图片自动切换

        //var le="-"+bannsum+"00%";

        //重新启动
        se = setInterval("search()", 5000);
    });

    /*当鼠标移到banner图片上面时，左右两边的箭头显示*/
    $(".n_menuimg").mouseenter(function () {
        $(".n_leftjt_con").show();
        $(".n_rigjt_con").show();
    });
    /*当鼠标移出banner图片上面时，左右两边的箭头隐藏*/
    $(".n_menuimg").mouseleave(function () {
        $(".n_leftjt_con").hide();
        $(".n_rigjt_con").hide();
    });
    /*banner左边箭头鼠标移上去事件*/
    $(".n_leftjt").hover(function () {
        $(this).addClass("n_leftjtblo");
    }, function () {
        $(this).removeClass("n_leftjtblo");
    });
    /*banner右边箭头鼠标移上去事件*/
    $(".n_rigjt").hover(function () {
        $(this).addClass("n_rigjtblo");
    }, function () {
        $(this).removeClass("n_rigjtblo");
    });


    /*<!--banner 右边按钮-->*/
    $(".n_rigjt_con").click(function () {
        //sum=sum+1;


        //停止图片自动切换
        clearInterval(se);
        // if(sum){}
        search(sum);
        //重新启动
        se = setInterval("search()", 5000);
    });
    /*<!--banner 左边按钮-->*/
    $(".n_leftjt_con").click(function () {


        sum = sum - 1;
        //停止图片自动切换

        if (sum < 0) {
            //判断是最后一张图片显示  依次循环
            $(".4").addClass("disblock1").siblings().removeClass("disblock1");
            $(".4").fadeIn("slow").siblings().fadeOut("slow");
            $(".n_num4").addClass("libackwhite").siblings().removeClass("libackwhite");			//	$(".5").fadeOut("slow");
            sum = 4;
            clearInterval(se);

            //sum=sum-1;

            //重新启动
            se = setInterval("search()", 5000);

            return;


        }


        $("." + sum).addClass("disblock1").siblings().removeClass("disblock1");
        $("." + sum).fadeIn("slow").siblings().fadeOut("slow");
        $(".n_num" + sum).addClass("libackwhite").siblings().removeClass("libackwhite");
        clearInterval(se);

        //sum=sum-1;

        //重新启动
        se = setInterval("search()", 5000);


    });


});
//图片轮换 end



//合作伙伴轮播功能 start
//mark_ul 用于定位到ul层；wid_pading循环层如包含padding将padding左右之和，传参；mark_speed切换速度；mark_time变量值为零；click_left click_right定位到点击的层
function onebyone(mark_ul, wid_pading, mark_speed, mark_time, click_left, click_right) {
    /* 初始化*/
    mark_ul.html(mark_ul.html() + mark_ul.html() + mark_ul.html());
    var ulWidth = 0;
    $.each(mark_ul.find('li'), function () {
        var _this = $(this);
        ulWidth += _this.width() + wid_pading;
    });
    mark_ul.css({'width': ulWidth + 'px', 'left': -ulWidth / 3 + 'px'});

    var ulLeft = parseInt(mark_ul.css('left'));
    var counter = 0;
    var timer = 0;
    click_left.click(function () {
        if (timer == 0) {
            timer = 1;
            counter++;
            mark_ul.animate({'left': parseInt(ulLeft - counter * (mark_ul.find('li').eq(0).width() + wid_pading)) + 'px'}, mark_speed);
            if (counter == mark_ul.find('li').length / 3) {
                setTimeout(function () {
                    mark_ul.animate({'left': ulLeft + 'px'}, 0);
                    counter = 0;
                }, mark_time)
            }
            setTimeout(function () {
                timer = 0;
            }, mark_time);
        }
    });
    click_right.click(function () {
        if (timer == 0) {
            timer = 1;
            counter--;
            mark_ul.animate({'left': parseInt(ulLeft - counter * ( mark_ul.find('li').eq(0).width() + wid_pading)) + 'px'}, mark_speed);
            if (counter == -mark_ul.find('li').length / 3) {
                setTimeout(function () {
                    mark_ul.animate({'left': ulLeft + 'px'}, 0);
                    counter = 0;
                }, mark_time)
            }
            setTimeout(function () {
                timer = 0;
            }, mark_time);
        }
    });
}
//合作伙伴轮播功能 end







