var today = new Date()
var curHr = today.getHours()
var time = null;

if (curHr < 12) {
  var time = "Morning";
} 
else if (curHr < 16) {
  var time = "Afternoon";
}
else if (curHr < 19) {
  var time = "Evening";
} 
else {
  var time = "Night";
}

console.log("Good "+time);