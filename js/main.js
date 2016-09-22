(function(){
  "use strict";

  var hexInterval;

  var timer   = document.querySelector('.elapsed-time');

  var hours   = document.querySelector('.elapsed-time .hours');
  var minutes = document.querySelector('.elapsed-time .minutes');
  var seconds = document.querySelector('.elapsed-time .seconds');

  var startTime = new Date();

  console.log("startTime: ", startTime);

  var timerInterval = window.setInterval(logElapsedTime, 1000);



  function toHex(num) {
     var x = parseInt(num,10);
     x = x.toString(16);
     if(x.length == 1)  {x = "0" + x;}
     return x;
  }


  function millisecondsToInterval(ms) {
     var msLeft = ms;

     var msInSecond  = 1000;
     var msInMinute  = 60 * msInSecond;
     var msInHour    = 60 * msInMinute;

     var hourCount = Math.floor(msLeft / msInHour);
     msLeft = msLeft % msInHour;

     var minuteCount =  Math.floor(msLeft / msInMinute);
     msLeft = msLeft % msInMinute;

     var secondCount =  Math.floor(msLeft / msInSecond);

     return [hourCount, minuteCount, secondCount];
  }

  function displayInterval(interval) {
     hours.textContent   = ("0" + interval[0]).slice(-2);
     minutes.textContent = ("0" + interval[1]).slice(-2);
     seconds.textContent = ("0" + interval[2]).slice(-2);
 }

 function updateBackground(interval) {


   // document.body.style.background = colorHex;

}

   function displayHex(interval){
      hours.textContent   = toHex(interval[0]);
      minutes.textContent = toHex(interval[1]);
      seconds.textContent = toHex(interval[2]);
   }


   function logElapsedTimeHex() {


      var currentTime = new Date();
      var elapsedTime = currentTime - startTime;
      var elapsed     = millisecondsToInterval(elapsedTime);

      console.log("currentTime: ", startTime);

      var percentMinute = elapsed[2] / 60 * 100;

      var percentWidth = percentMinute.toString(10) + "%";
      document.querySelector('.timer-bar').style.width = percentWidth;


      console.log("percentMinute: ", percentMinute);
      displayHex(elapsed);

   //   updateBackground(elapsed);

   }



  function logElapsedTime() {
     var currentTime = new Date();
     var elapsedTime = currentTime - startTime;
     var elapsed     = millisecondsToInterval(elapsedTime);

    console.log("currentTime: ", startTime);

    var percentMinute = elapsed[2] / 60 * 100;
    console.log("percentMinute: ", percentMinute);

    var percentWidth = percentMinute.toString(10) + "%";
    document.querySelector('.timer-bar').style.width = percentWidth;


    console.log("percentMinute: ", percentMinute);
    displayInterval(elapsed);
    updateBackground(elapsed);



  }

  function hoverHex() {
     clearInterval(timerInterval);
     hexInterval = window.setInterval(logElapsedTimeHex, 1000);
 }

 function clearHex() {
    clearInterval(hexInterval);
    timerInterval = window.setInterval(logElapsedTime, 1000);
}


  timer.addEventListener('mouseover', hoverHex);
  timer.addEventListener('mouseout', clearHex);

}());
