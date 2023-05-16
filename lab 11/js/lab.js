// lab.js - Libraries and jQuery
// Author: Kelsey Melott <kmelott@ucsc.edu>
// Date: 05/18/2023

// Function to generate a random color

  // Function to generate a random color
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Apply random color to elements with the 'random-color' class
  


//getting button element
$("#challenge-button").click(function() {
  $("#challenge-button").css("color", "black");
  $("#challenge").toggleClass("special").css("color", getRandomColor());
  $("#problems-button").toggleClass("special").css("color", getRandomColor());
  $("#results-button").toggleClass("special").css("color", getRandomColor());
});
$("#problems-button").click(function() {
  $("#problems-button").css("color", "black");
  $("#problems").toggleClass("special").css("color", getRandomColor());
  $("#challenge-button").toggleClass("special").css("color", getRandomColor());
  $("#results-button").toggleClass("special").css("color", getRandomColor());
});
$("#results-button").click(function() {
  $("#results-button").css("color", "black");
  $("#results").toggleClass("special").css("color", getRandomColor());
  $("#challenge-button").toggleClass("special").css("color", getRandomColor());
  $("#problems-button").toggleClass("special").css("color", getRandomColor());
});

