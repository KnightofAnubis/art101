// lab.js - Conditionals
// Author: Kelsey Melott <kmelott@ucsc.edu>
// Date: 05/21/2023

//sorting fuction for Hogwarts house
//depending on length mod 4 
function sortHat(str) {
  len = str.length;
  mod = len % 4;
  if(mod == 0){
    return "Gryffindor";
  }
  else if(mod == 1){
    return "Slytherin";
  }
  else if(mod == 2){
    return "Ravenclaw";
  }
  else if(mod == 3){
    return "Hufflepuff";
  }
} 

//button to be sorted
$("#button").click(function() {
  var name = $("#input").val();
  var house = sortHat(name);
  newText = "<p>Welcome " + name + ", the Sorting Hat has sorted you into " + house + ".</p>";
  $("#output").html(newText);
});