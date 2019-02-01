var second = document.getElementById("sec");
var minute = document.getElementById("min");
var hours = document.getElementById("hour");
var dhour = document.querySelector(".dhour");
var dmin = document.querySelector(".dmin");
var dsec = document.querySelector(".dsec");
function interv() {
  var data = new Date();
  var hour = data.getHours() * 30;
  var sec = data.getSeconds() * 6;
  var min = data.getMinutes() * 6;
  console.log(data.getMinutes());
  second.style.transform = `rotate(${sec}deg)`;
  minute.style.transform = `rotate(${min}deg)`;
  hours.style.transform = `rotate(${hour}deg)`;
  dmin.innerHTML = " : " + data.getMinutes();
  dhour.innerHTML = data.getHours() % 12;
  let ampm = "";
  if (data.getHours() >= 12) {
    ampm = "PM";
  } else {
    ampm = "AM";
  }
  dsec.innerHTML = " : " + data.getSeconds() + " : " + ampm;
  setTimeout(interv, 1000);
}
interv();
