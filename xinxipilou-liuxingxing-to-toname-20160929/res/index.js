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

   /*季度成交额*/
    var dataChartC = echarts.init(document.getElementById('jdcje'));
    var optiona = {
        tooltip: {
            show: true,
            formatter: "{b}xx : {c}"
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                splitLine:false,//隐藏竖着的分割线
                axisLine:false,//隐藏坐标线
                axisLabel : { //x轴文字颜色
                    show : true,
                    textStyle : {
                        fontSize: 16,
                        fontWeight: 'normal',
                        fontFamily: 'Arial',
                        color : '#3f9bff'
                    }
                } ,
                data: ['2015Q1', '2015Q3', '2015Q6', '2015Q9', '2014Q12', '2016Q1', '2016Q3', '2016Q6']
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    show: true,
                    textStyle: {  //y轴文字颜色
                        fontSize: 16,
                        fontWeight: 'normal',
                        fontFamily: 'Arial',
                        color: '#666'
                    }
                },
                axisLine:false//隐藏坐标线
            }
        ],
        series: [
            {
                name: 'yingli',
                type: 'line',
                itemStyle: {
                    normal: {},
                    emphasis: {}
                },
                /*symbol:"res/img/plot.png",
                symbolSize: 8,*/
                symbol: 'arrow',
                symbolSize: 6,
                symbolRotate: -45,
                data: [1, 2, 4, 9, 10, 9, 8, 10, 12, 15]
            }
        ],
        grid: {borderWidth: 0}//隐藏grid边框线
    }
    dataChartC.setOption(optiona);
});