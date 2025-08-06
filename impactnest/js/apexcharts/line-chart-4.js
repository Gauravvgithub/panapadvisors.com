(function ($) {
  var tfBarChart = (function () {
      var chartBar = function () {
          var options = {
              series: [{
                  name: '',
                  data: [50, 70, 90, 80, 100]
              }],
              chart: {
                  type: 'bar',
                  height: 170,
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
                  axisBorder: { show: false },
                  axisTicks: { show: false },
                  categories: ['J', 'F', 'M', 'A', 'M'], 
                  labels: {
                      style: {
                          colors: '#BABABA',
                          fontSize: '14px',
                          fontWeight: 400
                      }
                  },
              },
              yaxis: { show: false },
              stroke: { show: false },
              legend: { show: false },
              dataLabels: { enabled: false },
              colors: ['#40696266', '#40696266', '#317C6F', '#40696266','#40696266']
          };

          var chart = new ApexCharts(document.querySelector("#line-chart-4"), options);
          if ($("#line-chart-4").length > 0) {
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
