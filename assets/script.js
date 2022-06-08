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

// timeblocks object
var blocks = {
    block9: {
        time: "9AM - 10AM",
        title: "",
        description: ""
    },
    block10: {
        time: "10AM - 11AM",
        title: "",
        description: ""
    },
    block11: {
        time: "11AM - 12PM",
        title: "",
        description: ""
    },
    block12: {
        time: "12PM - 1PM",
        title: "",
        description: ""
    },
    block13: {
        time: "1PM - 2PM",
        title: "",
        description: ""
    },
    block14: {
        time: "2PM - 3PM",
        title: "",
        description: ""
    },
    block15: {
        time: "3PM - 4PM",
        title: "",
        description: ""
    },
    block16: {
        time: "4PM - 5PM",
        title: "",
        description: ""
    }
};

// LOCAL STORAGE
var storageKey = localStorage.getItem("storageKey");
init();

function renderBlocks(){
    $("div.time-block").each(function() {
        var timeblockNum = $( this ).attr("data-value");
        console.log(timeblockNum);
        console.log(this);
        // clear old text (need when saving)
        $( this ).empty();
        // add text to timeblocks
        $( this ).append($("<p class='description'>"+blocks["block"+timeblockNum].description+"</p>"));
        if (blocks["block"+timeblockNum].title!==""||blocks["block"+timeblockNum].description!==""){
            $( this ).removeClass("empty");
        }
    });
};

function init() {
    // check if local storage has been used else get data from local storage
    if(storageKey===null){
        console.log("nothing in storage");
    } else {
        blocks = JSON.parse(localStorage.getItem("storageKey"));
    }
    // Render event text
    renderBlocks();
};

function storeBlocks() {
    // store timeblock objects in local storage
    localStorage.setItem("storageKey", JSON.stringify(blocks));
};

// declare variables for functions
var blockNum;

// display form and info for selected time block
function addText(timeblockdiv){
    // get the selected time block number from the div.time-block data-value
    blockNum = ( $( timeblockdiv ).attr("data-value")).toString();
    // display values for selected timeblock in form
    $('#form-time').text(blocks["block"+blockNum].time);
    $('#title').val(blocks["block"+blockNum].title);
    $('#description').val(blocks["block"+blockNum].description) ;       
};

});