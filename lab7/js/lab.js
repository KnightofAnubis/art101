// lab.js - Function
// Author: Kelsey Melott <kmelott@ucsc.edu>
// Date: 05/04/2023

//function for sorting both lower and capital letters
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


var userName = window.prompt("What is your name?");
document.writeln("So you think this is your name: ", userName, "</br>");
document.writeln("But hey, I've fixed your name: ", sortUserName(userName), "</br>");