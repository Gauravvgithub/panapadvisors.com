(function ($) {
  var tfBarChart = (function () {
      var chartBar = function () {
          var options = {
              series: [{
                  name: '',
                  data: [40, 80, 100, 90]
              }],
              chart: {
                  type: 'bar',
                  height: 120,
                  toolbar: { show: false },
                  background: 'transparent'
              },
              plotOptions: {
                  bar: {
                      columnWidth: '70%',
                      borderRadius: 4,
                      distributed: true,
                  },
              },
              grid: { show: false },
              xaxis: {
                  labels: { show: false },
                  axisBorder: { show: false },
                  axisTicks: { show: false }
              },
              yaxis: { show: false },
              stroke: { show: false },
              legend: { show: false },
              dataLabels: { enabled: false },
              colors: ['#317C6F', '#317C6F80', '#317C6F80', '#317C6F']
          };

          var chart = new ApexCharts(document.querySelector("#line-chart-2"), options);
          if ($("#line-chart-2").length > 0) {
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
