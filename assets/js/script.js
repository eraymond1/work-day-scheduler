//put current date on page
var todaysDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(todaysDate);


$(document).ready(function () {
  //create evenlistner for save button
  $(".sBtn").on("click", function () {
    //getting values desciptions
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //save reminders to local storage
    localStorage.setItem(time, text);

  })

  function time() {
    //getting current time
    var timeNow = moment().hour();

    //loop to go over blocks of time
    $("time-block").each(function () {
      var timeBlocks = parseInt($(this).attr("id").split("hour"));

      // checks to see time and changes background according to time past, present, or future
      if (timeBlocks < timeNow) {

        $(this).removeClass("future");

        $(this).removeClass("present");

        $(this).addClass("past");

      } else if (timeBlocks === timeNow) {

        $(this).removeClass("past");

        $(this).removeClass("future");

        $(this).addClass("present");

      } else {

        $(this).removeClass("present");

        $(this).removeClass("past");

        $(this).addClass("future");

      }
    })
  }

  //retrieve saved reminders from local stroage for display on page
  $("#hour5 .description").val(localStorage.getItem("hour5"));

  $("#hour6 .description").val(localStorage.getItem("hour6"));

  $("#hour7 .description").val(localStorage.getItem("hour7"));

  $("#hour8 .description").val(localStorage.getItem("hour8"));

  $("#hour9 .description").val(localStorage.getItem("hour9"));

  $("#hour10 .description").val(localStorage.getItem("hour10"));

  $("#hour11 .description").val(localStorage.getItem("hour11"));

  $("#hour12 .description").val(localStorage.getItem("hour12"));

  $("#hour13 .description").val(localStorage.getItem("hour13"));

  $("#hour14 .description").val(localStorage.getItem("hour14"));

  $("#hour15 .description").val(localStorage.getItem("hour15"));

  $("#hour16 .description").val(localStorage.getItem("hour16"));

  $("#hour17 .description").val(localStorage.getItem("hour17"));

  time();


})