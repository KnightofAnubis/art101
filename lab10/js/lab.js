// lab.js - JavaScript Events and forms
// Author: Kelsey Melott <kmelott@ucsc.edu>
// Date: 05/15/2023

function case_evaluate(x, y) {
    return x.toLowerCase().localeCompare(y.toLowerCase());
}

//sorting name althabetically 
function sortUserName(name) {
   
    var userName = name;
    console.log("userName =", userName);
    //split string to array
    var nameArray = userName.split('');
    console.log("nameArray = ", nameArray);
    // sort the array
    var nameArraySort = nameArray.sort(case_evaluate);
    //join it back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted = ", nameSorted);

    return nameSorted;
}

//getting button element
var buttonEl = document.getElementById("my-button");

//adding event listener to button
buttonEl.addEventListener("click", function(){
    //getting user input
  var inputEl = document.getElementById("user-name");
  var value = inputEl.value;
  //console.log(value);
    //sorting user name
  var sortName = sortUserName(value);
  var outputEl = document.getElementById("output");
  // listing user name below input field
  outputEl.innerHTML = sortName;
  
});