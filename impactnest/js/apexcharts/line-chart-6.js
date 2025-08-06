(function ($) {
    
  var tfLineChart = (function () {

    var chartBar = function () {
    
      var options = {
          chart: {
            height: 293,
            type: "area",
            zoom: {
              enabled: false
            },
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false
          },
          colors: ["#317C6F"],
          series: [
            {
              name: "$",
              data: [43, 24, 28, 18, 47, 19, 29 ,30, 49]
            }
          ],
          fill: {
            type: "solid",
            opacity: 0.1,
          },
          yaxis: {
            labels: {
              formatter: function (value) {
                return "$" + value + "k";
              },
              style: {
                colors: "#6D7074",
                fontSize: "12px",
                fontWeight: 500,
              },
            },
            min: 10, 
            max: 52,
            tickAmount: 3,
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false, 
            },
            gridLines: {
              show: true,
              color: "#E4E4E4", 
            },
          },
          xaxis: {
            labels: {
              style: {
                colors: '#6D7074',
              },
            },
            categories: [
              "2/1",
              "2/2",
              "2/3",
              "2/4",
              "2/5",
              "2/6",
              "2/7",
              "2/8",
              "2/9"
            ]
          }
        };

      chart = new ApexCharts(
        document.querySelector("#line-chart-6"),
        options
      );
      if ($("#line-chart-6").length > 0) {
        chart.render();
      }
    };

    /* Function ============ */
    return {
      init: function () {},

      load: function () {
        chartBar();
      },
      resize: function () {},
    };
  })();

  jQuery(document).ready(function () {});

  jQuery(window).on("load", function () {
    tfLineChart.load();
  });

  jQuery(window).on("resize", function () {});
})(jQuery);
