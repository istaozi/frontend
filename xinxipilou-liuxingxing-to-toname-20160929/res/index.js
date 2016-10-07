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

   /*���ȳɽ���*/
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
                //boundaryGap: false,
                splitLine:false,//�������ŵķָ���
                axisLine:false,//���������
                axisTick: {
                    show: false
                },
                axisLabel : { //x��������ɫ
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
                    textStyle: {  //y��������ɫ
                        fontSize: 16,
                        fontWeight: 'normal',
                        fontFamily: 'Arial',
                        color: '#666'
                    }
                },
                axisLine:false//���������
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
                //symbolList:  [
                //    'circle', 'rectangle', 'triangle', 'diamond',
                //    'emptyCircle', 'emptyRectangle', 'emptyTriangle', 'emptyDiamond'
                //],
                symbol:'emptyCircle',
                symbolSize: 6,
                symbolRotate: -45,
                data: [1, 2, 4, 9, 10, 9, 8, 10, 12, 15]
            }
        ],
        grid: {borderWidth: 0}//����grid�߿���
    }
    dataChartC.setOption(optiona);

    /*���ȳɽ���*/
    var dataChartC = echarts.init(document.getElementById('fxzbjye'));
    var optiona = {
        tooltip: {
            show: true,
            formatter: "{b}xx : {c}"
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                //boundaryGap: false,
                splitLine:false,//�������ŵķָ���
                axisLine:false,//���������
                axisTick: {
                    show: false
                },
                axisLabel : { //x��������ɫ
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
                    textStyle: {  //y��������ɫ
                        fontSize: 16,
                        fontWeight: 'normal',
                        fontFamily: 'Arial',
                        color: '#666'
                    }
                },
                axisLine:false//���������
            }
        ],
        series: [
            {
                name: 'yingli',
                type: 'bar',
                barWidth:30,
                //barGap:'90%',
                //barCategoryGap:'90%',
                itemStyle: {
                    normal: {},
                    emphasis: {}
                },
                data: [1, 2, 4, 9, 10, 9, 8, 10, 12, 15]
            }
        ],
        grid: {borderWidth: 0}//����grid�߿���
    }
    dataChartC.setOption(optiona);
});