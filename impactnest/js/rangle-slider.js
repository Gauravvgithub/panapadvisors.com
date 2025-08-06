(function ($) {
  "use strict";

  var rangeslider = function (ID1, ID2, ID3) {
      var slider = document.getElementById(ID1);
      var lowerValue = document.getElementById(ID2);
      var upperValue = document.getElementById(ID3);
      if (slider) {
          noUiSlider.create(slider, {
              start: [19, 500],
              connect: true,
              behaviour: "drag",
              step: 1,
              range: {
                  min: 19,
                  max: 500,
              },
          });
          slider.noUiSlider.on("update", function (values, handle) {
              lowerValue.innerHTML = "$" + Math.round(values[0]);
              upperValue.innerHTML = "$" + Math.round(values[1]);
          });

      
      }
  };


  $(function () {
    rangeslider("range-two-val", "skip-value-lower", "skip-value-upper");
  });
})(jQuery);