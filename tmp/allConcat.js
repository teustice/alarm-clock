Alarm = require('./../js/alarm-clock.js').alarmModule;

$(document).ready(function(){
  alarm = new Alarm("");
  $("#alarm-form").submit(function(e){
    e.preventDefault();
    alarm.time = $("#input-time").val();
    $("#input-time").val("");
  });

  alarmReset = false;
  setInterval(function(){
    $('#time').text(moment().format('LTS'));
    console.log(alarm.time);
    if(alarm.time == moment().format('hh:mm') && (alarmReset === false)){
      alarmReset = true;
      var snooze = confirm("Want to snooze?");

      if(snooze === true) {
        snoozeTime = alarm.snooze();
        alarm.time = snoozeTime;
        console.log("Snoozed time: " + alarm.time);
        alarmReset = false;
        snooze = false;
      }
    }
  }, 1000);
});
