$(document).ready(function() {

    // Added the current date to header using moment.js
    const currentDate = moment().format('dddd MMMM Do, YYYY'); 
     $("#currentDay").text(currentDate);

    // Current Time in 12 hour format
    const currentHour = moment().format('h:[00]')
    console.log(currentHour)


var timeBlockEl = document.createElement("div")
$(timeBlockEl).addClass("time-block")
var timeEl= document.createElement("div")
 $(timeEl).addClass("input-group-text").text("9 a.m")
 var inputEl = document.createElement("div")
$(inputEl).addClass("form-control").text("Input")
var btnEl = document.createElement("button")
$(btnEl).addClass("saveBtn").text("save")
$(timeEl).text("9 a.m")
$(inputEl).text("Input")
$(btnEl).text("Save")

$( ".container" ).append(timeBlockEl);
$( timeBlockEl ).append(timeEl);
$( timeBlockEl ).append(inputEl);
$( timeBlockEl ).append(btnEl);
console.log(timeBlockEl)
$( ".container" ).append(timeBlockEl);

})