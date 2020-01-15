function matrix() {
  var canv = document.getElementById("canv");
  var ctx = canv.getContext("2d");

  canv.height = window.innerHeight * 0.8;
  canv.width = window.innerWidth;

  var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
  matrix = matrix.split("");

  var font_size = 14;
  var columns = canv.width / font_size;

  var drops = [];
  for (var i = 0; i < columns; i++)
    drops[i] = 1;

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = "#E8175D"; //pink text from SCSS
    ctx.font = font_size + "Titillium Web";
    for (var i = 0; i < drops.length; i++) {

      var text = matrix[Math.floor(Math.random() * matrix.length)];
      ctx.fillText(text, i * font_size, drops[i] * font_size);

      if (drops[i] * font_size > canv.height && Math.random() > 0.975)
        drops[i] = 0;

      drops[i]++;
    }

  }
  setInterval(draw, 75);
}
// Call the matrix function
$(document).ready(matrix());
window.addEventListener("resize", matrix());



document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.pushpin');
  var instances = M.Pushpin.init(elems);
});

window.onscroll = function () {
  scroller()
  scroller2()
};

function scroller() {
  if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100) {
    document.getElementById("cards").className = "slideLeft";
  }
}

function scroller2() {
  if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
    document.getElementById("charts").className = "slideUp";
  }
}


$(function () {
  $('.chart').easyPieChart({
    scaleColor: "#A8A7A7",
    lineWidth: 15,
    lineCap: 'butt',
    barColor: '#E8175D',
    trackColor: "#474747",
    size: 180,
    animate: ({
      duration: 5500,
      enabled: true
    })
  });
  $('.chart').data('easyPieChart').disableAnimation();

  if (document.body.scrollTop > 1200|| document.documentElement.scrollTop > 1200) {
    $('.chart').data('easyPieChart').enableAnimation();
  };
});

$(function () {
  $('.chart2').easyPieChart({
    scaleColor: "#A8A7A7",
    lineWidth: 15,
    lineCap: 'butt',
    barColor: '#E8175D',
    trackColor: "#474747",
    size: 90,
    animate: ({
      duration: 5500,
      enabled: true
    })
  });
  $('.chart2').data('easyPieChart').disableAnimation();

  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    $('.chart2').data('easyPieChart').enableAnimation();
  };
});