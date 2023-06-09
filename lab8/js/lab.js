// lab.js - Anon Functions and Callbacks
// Author: Kelsey Melott <kmelott@ucsc.edu>
// Date: 05/05/2023

var numArray = [1, 6, 8, 3, 5, 2];

function addition(x) {
    var results = x + 28;
    return results;
}

console.log(addition(10));
console.log(addition(25));
console.log(addition(5));

console.log(numArray.map(addition));
console.log(numArray.map(function(x) {
    return x/3;
}));

mapAdditionResults = [addition(10),'  ' + addition(25), '  ' + addition(5)]; 

var outputEl = document.getElementById("addition"); 
var outputEw = document.getElementById("output"); 
outputEl.innerHTML = "Addition Function results: " + mapAdditionResults; // put your results here
outputEw.innerHTML = "New Addition Array: " + numArray.map(addition) + "</br>" + "New Anon-function Array: " + numArray.map(function(x) {return x/3;});

var e = "["

/*for (var y=0; y < numArray.length; y++)
{
  e +=  numArray[y] + ", " ;
}
document.getElementById("original").innerHTML = "Original Array: "  +e+ "]";*/

function diplayArray(array, output, intro){
    for (var y=0; y < array.length; y++) {
        e +=  array[y] + ", " ;
    }
    document.getElementById(output).innerHTML = intro  +e+ "]";
    e = "[";
}

addArray = numArray.map(addition);
anonArray = numArray.map(function(x) {return x/3;});
diplayArray(numArray, "original", "Original Array: ");
diplayArray(addArray, "output", "New Addition Array: ");
diplayArray(anonArray, "anon", "New Anon Array: ");