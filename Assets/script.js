// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements

// const dateElement = document.querySelector(".date");
// const timeElement = document.querySelector('time');

// function formateDate(date) {
//   const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
//   ];
//   const Months = ["January", "February", "March", "April", "May",  "June",  "July", "August", "September",  "October", "November", "December"
//   ];

//   return `${Days[date.getDay()]}, ${
//     Months[date.getMonth()]
//   } ${date.getDate()} ${date.getFullYear()}`;
// }

// setInterval(() => {
//   const now = new Date();
  
//   dateElement.textContent = formateDate(now);
// }, 200);


var currentDate = dayjs();
$('#Date').text(currentDate.format('dddd, MMMM D, YYYY'));
var hour = dayjs().hour();


$('.time-block').each(function () {
var blockdate = parseInt($(this).attr("id"));
if (hour === blockdate) {
  $(this).addClass('present');
} else if (hour > blockdate){
  $(this).addClass('past');
} else {
  $(this).addClass('future')
}
})



$('.saveBtn').on('click', function () {

  var Date = $(this).parent().attr('id');

  var text = $(this).siblings('.description').val();
  

localStorage.setItem(Date, text)
})


$(function () {



  $("#5 .description").val(localStorage.getItem("5"));
  $("#6 .description").val(localStorage.getItem("6"));
  $("#7 .description").val(localStorage.getItem("7"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#3 .description").val(localStorage.getItem("3"));
  $("#4 .description").val(localStorage.getItem("4"));

})



  










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
