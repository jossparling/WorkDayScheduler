// GIVEN I am using a daily planner to create a schedule
// $(document).ready(function(){
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


var hour;
var timeInterval;
    // header section
    // display time and update every second
    timeInterval = setInterval(function(){
        // display day of week
    $('#currentDay').text(moment().format('dddd'));
   
  // save time to variable
  hour = parseInt(moment().format('H'));
  var minutes = parseInt(moment().format('mm'));

// timeblocks
if (hour < 9){
    $('.time-block').removeClass("present past").addClass("future");
}
if (hour > 16){
    $('.time-block').removeClass("present future").addClass("past");
}
$("div.time-block").each(function() {
    var timeblockNum = parseInt($( this ).data("value"));
    if (hour < timeblockNum){
        $( this ).removeClass("past present").addClass("future");
    }
    if (hour == timeblockNum){
        $( this ).removeClass("past future").addClass("present");
    }
    if (hour > timeblockNum){
        $( this ).removeClass("present future").addClass("past");
    }
    
});

    });

    