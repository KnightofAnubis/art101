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
  
//add buttons
$("#challenge").append("<button id='challenge-button'>Challenge</button>");
$("#problems").append("<button id='problems-button'>Problems</button>");  
$("#results").append("<button id='results-button'>Results</button>");

//adding click listener in jQuery
$("#challenge-button").click(function() {
  //reseting button color
  $("#challenge-button").css("backgroundColor", "white");
  //changing font color
  $("#challenge").toggleClass("special").css("color", getRandomColor());

  //changing other button background colors
  $("#problems-button").toggleClass("special").css("backgroundColor", getRandomColor());
  $("#results-button").toggleClass("special").css("backgroundColor", getRandomColor());
});

//adding click listener in jQuery
$("#problems-button").click(function() {
  //reseting button color
  $("#problems-button").css("backgroundColor", "white");
  //changing font color
  $("#problems").toggleClass("special").css("color", getRandomColor());

  //changin other button colors
  $("#challenge-button").toggleClass("special").css("backgroundColor", getRandomColor());
  $("#results-button").toggleClass("special").css("backgroundColor", getRandomColor());
});

//adding click listener in jQuery
$("#results-button").click(function() {
  //reseting button color
  $("#results-button").css("backgroundColor", "white");
  //changing font color
  $("#results").toggleClass("special").css("color", getRandomColor());

  //changing other button colors
  $("#challenge-button").toggleClass("special").css("backgroundColor", getRandomColor());
  $("#problems-button").toggleClass("special").css("backgroundColor", getRandomColor());
});

