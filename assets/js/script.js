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
})