
$(document).ready(function () {
  // variables within the wrapped call function
  let timeCount = dayjs().format("H");
  // function to set & show the current date & time on the HTML
  function currentDateTime() {
      // pulls in the "real" date/time from dayjs for input into HTML
      let realDate = dayjs().format("dddd, MMMM Do, YYYY");
      let realTime = dayjs().format("H:mm A");
      showDate = $("#currentDay").text(realDate);
      showTime = $("#currentTime").text(realTime);
  };

    // sets the color associated with future present and past reviews the id hour 
    function ppfColoration() {
      $(".time-block").each(function () {
          let schedule = parseInt(this.id); 
          if (schedule > timeCount) {
              $(this).addClass("future");
              $(this).removeClass("present");
              $(this).removeClass("past");
          } else if (schedule < timeCount) {
              $(this).addClass("past");
              $(this).removeClass("present");
              $(this).removeClass("future");
          } else {
              $(this).addClass("present");
              $(this).removeClass("past");
              $(this).removeClass("future");
          }
      })
  };

  // saves user input in time blocks
  function addActivity() {
      $(".saveBtn").on("click", function () {
          let svbtn = document.querySelector(".saveBtn");
          svbtn.addEventListener("click", addActivity)
          let activityPeriod = $(this).parent().attr("id"); 
          let activityContent = $(this).siblings(".description").val(); 
          
          localStorage.setItem(activityPeriod, activityContent);
      })
  };

  // local storage to the html
  function writeActivity() {
      $(".rowTime-block").on("click", function () {
          $(this).attr("id") = localStorage.getItem(activityPeriod);
          $(this).children(".description").val(activityContent);
      })
  };

  // This loads the saved local storage
  $(".rowTime-block").each(function () {
      let activityPeriod = $(this).attr("id");
      let activityContent = localStorage.getItem(activityPeriod);
      $(this).children(".description").val(activityContent);
  });

  // call to activate functions
  currentDateTime();
  setInterval(currentDateTime, 1000);
  ppfColoration();
  writeActivity();
  addActivity();
});











// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//need current date need fpp colors to change need writeNotes addNote


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.



//   if (currentTime > scheduledTime) {
//     $(this).removeClass("future");
//     $(this).removeClass("present");
//     $(this).addClass("past");
// } else if (currentTime < scheduledTime) {
//     $(this).removeClass("present");
//     $(this).removeClass("past");
//     $(this).addClass("future");
// } else {
//     $(this).removeClass("future");
//     $(this).removeClass("past");
//     $(this).addClass("present");
  