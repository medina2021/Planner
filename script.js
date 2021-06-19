$(document).ready(function() {

    var timeBlockEl = document.createElement("div")
    $(timeBlockEl).addClass("timeBlock")
    var timeEl= document.createElement("div")
 $(timeEl).addClass("time").text("3:00")
 var inputEl = document.createElement("div")
$(inputEl).addClass("input").text("Input")
var btnEl = document.createElement("button")
$(btnEl).addClass("startbtn").text("Start")
$(timeEl).text("3:00")
$(inputEl).text("Input")
$(btnEl).text("Start")

$( ".container" ).append(timeBlockEl);
$( timeBlockEl ).append(timeEl);
$( timeBlockEl ).append(inputEl);
$( timeBlockEl ).append(btnEl);
console.log(timeBlockEl)
$( ".container" ).append(timeBlockEl);

})