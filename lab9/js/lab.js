// lab.js - JavaScript for the Web
// Author: Kelsey Melott <kmelott@ucsc.edu>
// Date: 05/11/2023

// getting element output
var outputEL = document.getElementById("output");

//creating new elements
var new1EL = document.createElement("p");
new1EL.innerHTML = "HELLO WORLD!";
var new2EL = document.createElement("p");
new2EL.innerHTML = "GOODBYE WORLD!";

//adding to output
outputEL.appendChild(new1EL);
outputEL.appendChild(new2EL);

//one css change
new2EL.style.fontSize = "50px";

//two css change
var contentEL = document.getElementById("content");
contentEL.style.color = "purple";

//three css change
contentEL.style.backgroundColor = "white";