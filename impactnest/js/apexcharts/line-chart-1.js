(function ($) {
  
    var tfLineChart = (function () {
  
      var chartBar = function () {
        var options = {
          chart: {
              type: 'radialBar',
              height: 200,
              sparkline: { enabled: true }
          },
          series: [75],
          plotOptions: {
              radialBar: {
                  startAngle: -110, 
                  endAngle: 110,
                  hollow: {
                      size: "70%"
                  },
                  track: {
                      background: "#e9ecef",
                      strokeWidth: '100%',
                  },
                  dataLabels: {
                      name: { show: false },
                      value: {
                          fontSize: "35px",
                          fontWeight: "500",
                          color: "#292929",
                          offsetY: -1,
                      }
                  }
              }
          },
          colors: ["#317C6F"],
          labels: [""]
      };

        chart = new ApexCharts(
          document.querySelector("#line-chart-1"),
          options
        );
        if ($("#line-chart-1").length > 0) {
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