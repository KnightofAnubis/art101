// index.js - Arrays and Objects
// Author: Kelsey Melott <kmelott@ucsc.edu>
// Date: 04/27/2023

//define array
myTransport = ["Toyota Sienna", " bike", " walking", " skateboard"];

//creating and object
myMainRide = {
    make: "Toyota",
    model: "Sienna",
    color: "Mint Green",
    year: 2007,
    age: function() {
      return 2023 - this.year;
    }
}

document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");

