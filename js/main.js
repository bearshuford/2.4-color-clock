(function(){
  "use strict";

  var isHex = false;

  var timer   = document.querySelector('.clock');

  var hours   = document.querySelector('.clock .hours');
  var minutes = document.querySelector('.clock .minutes');
  var seconds = document.querySelector('.clock .seconds');

  var startTime = new Date();

  console.log("startTime: ", startTime);

  var clockInterval = window.setInterval(logTime, 500);

  function showHex()     {isHex = true;}
  function showDecimal() {isHex = false;}

  function logTime() {
     var currentTime = new Date();
     console.log("currentTime: ", currentTime);

     var currentHours   = currentTime.getHours();
     var currentMinutes =  currentTime.getMinutes();
     var currentSeconds = currentTime.getSeconds();

     var hexHours   = parseInt(currentHours,10).toString(16);
     var hexMinutes = parseInt(currentMinutes,10).toString(16);
     var hexSeconds = parseInt(currentSeconds,10).toString(16);

    var percentMinute = currentSeconds / 60;
    console.log("percentMinute: ", percentMinute);
    var percentWidth = (percentMinute * 100).toString(10) + "%";
    document.querySelector('.seconds-bar').style.width = percentWidth;

   //  var hexColor = "#" + ;
   //  console.log("hexColor: ", hexColor.toString(16));

    console.log("isHex: ", isHex);
    if(isHex) {
       currentHours   = hexHours;
       currentMinutes = hexMinutes;
       currentSeconds = hexSeconds;
    }

    hours.textContent   = ("0" + currentHours).slice(-2);
    minutes.textContent = ("0" + currentMinutes).slice(-2);
    seconds.textContent = ("0" + currentSeconds).slice(-2);

    var hexColorHours   = ("0" + hexHours).slice(-2);
    var hexColorMinutes = ("0" + hexMinutes).slice(-2);
    var hexColorSeconds = ("0" + hexSeconds).slice(-2);

    var hexColor = hexColorHours + hexColorMinutes + hexColorSeconds;

    console.log("hexColor: ",hexColor);
     document.body.style.background = ("#" + hexColor);
  }

  timer.addEventListener('mouseover', showHex);
  timer.addEventListener('mouseout', showDecimal);

}());
