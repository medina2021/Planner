    // Added the current date to header using moment.js
const currentDate = moment().format('dddd MMMM Do, YYYY');
$("#currentDay").text(currentDate);


$(document).ready(function() {

$(".saveBtn").on("click",function() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})

    function timeTracker() {
        var timeNow = moment().hour();

        $(".time-block").each(function () {
            var blockTime= parseInt($(this).attr("id").split("hour")[1]);

            if(blockTime < timeNow){
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");              
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");                  
            }
        })
    }

    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#1 .description").val(localStorage.getItem("1"));
    $("#2 .description").val(localStorage.getItem("2"));
    $("#3 .description").val(localStorage.getItem("3"));
    $("#4 .description").val(localStorage.getItem("4"));
    $("#5 .description").val(localStorage.getItem("5"));
    
    timeTracker();
})