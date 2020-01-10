$(document).ready(function(){

  var canv = document.getElementById("canv");
  var ctrl = canv.getContext("2d");

  canv.height = window.innerHeight;
  canv.width = window.innerWidth;

  var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
  matrix = matrix.split("");

  var font_size = 12;
  var columns = canv.width/font_size;

  var drops = [];
  for(var i = 0; i < columns ; i++)
    drops[i] = 1;
    function draw(){
      ctrl.fillStyle = "rgba(0, 0, 0, 0.04)";
      ctrl.fillRect(0, 0, canv.width, canv.height);

      ctrl.fillStyle = "#E8175D";//green text
            ctrl.font = font_size + "Titillium Web";
            for(var i = 0; i < drops.length; i++)
            {

                var text = matrix[Math.floor(Math.random()*matrix.length)];
                ctrl.fillText(text, i*font_size, drops[i]*font_size);

                if(drops[i]*font_size > canv.height && Math.random() > 0.975)
                    drops[i] = 0;

                drops[i]++;
            }
        }

        setInterval(draw, 35);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});