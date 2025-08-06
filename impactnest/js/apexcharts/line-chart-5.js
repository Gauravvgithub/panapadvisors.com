(function ($) {
    var tfBarChart = (function () {
        var chartBar = function () {
            var options = {
                series: [{
                    name: '',
                    data: [30, 40, 58, 50, 45, 55, 47]
                }],
                chart: {
                    type: 'bar',
                    height: 322,
                    toolbar: { show: false },
                    background: 'transparent'
                },
                plotOptions: {
                    bar: {
                        columnWidth: '14',
                        borderRadius: 8,
                        distributed: true,
                    },
                },
                grid: { show: false },
                dataLabels: {
                    enabled: true,
                    style: {
                        colors: ['#101828'],
                        fontWeight: 'bold',
                        fontSize: '14px',
                    },
                    offsetY: 150 
                },
                xaxis: {
                    axisBorder: { show: false },
                    axisTicks: { show: false },
                    categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'], 
                    labels: {
                        style: {
                            colors: '#BABABA',
                            fontSize: '14px',
                            fontWeight: 400
                        }
                    },
                },
                
                yaxis: {show:false},
                stroke: { show: false },
                legend: { show: false },
                colors: ['#317C6F']
            };
  
            var chart = new ApexCharts(document.querySelector("#line-chart-5"), options);
            if ($("#line-chart-5").length > 0) {
                chart.render();
            }
        };
  
  
        return {
            init: function () {},
            load: function () { chartBar(); },
            resize: function () {},
        };
    })();
  
    jQuery(window).on("load", function () {
        tfBarChart.load();
    });
  })(jQuery);
  