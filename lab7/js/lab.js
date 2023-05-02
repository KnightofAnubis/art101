// lab.js - Function
// Author: Kelsey Melott <kmelott@ucsc.edu>
// Date: 05/04/2023

function sortUserName() {
    var userName = window.prompt("What is your name?");
   
    console.log("userName =", userName);
    //split string to array
    var nameArray = userName.split('');
    console.log("nameArray = ", nameArray);
    // sort the array
    var nameArraySort = nameArray.sort();
    //join it back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted = ", nameSorted);

    return nameSorted;
}

document.writeln("Oh hey, I've fixed your name: ", sortUserName(), "</br>");