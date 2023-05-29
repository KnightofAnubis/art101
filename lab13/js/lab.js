// lab.js - Loops
// Author: Kelsey Melott <kmelott@ucsc.edu>
// Date: 05/23/2023


maxFactors = 4;
// get the values from the webpage and write them in an object
// this expects to have input fields with ids num0, text0, num1, text1, etc
// returns an object that looks like this:
//      {3: "Fizz", 5: "Buzz", 7: "Boom"}
function getFactorObj() {
  var factorObj = {};
  for (var factor=0; factor<maxFactors; factor++) {
      numId = "num" + factor;
      textId = "text" + factor;
      numValue = $("#" + numId).val();
      textValue = $("#" + textId).val();
      console.log(factor + ") num:", numValue, "text:", textValue)
      // if either value is blank, don't use it
      if (numValue && textValue) {
          factorObj[numValue] = textValue;
      }
  }
  
  return factorObj;
}

//given a set of nubmbers and strings
// like so: {3: Fizz, 4: Buzz, 7: Boom}
//for factors
function fizzBuzz(maxnum, factorObj) {
 //iterating through max number
  
  for(var i= 1; i <= maxnum; i++){ 
    
    var outputStr = '';
    //factoring...
    for(var factor in factorObj){
      if( i % factor == 0){
        outputStr += factorObj[factor];
      }
    }
    //output to index
    if(outputStr){
      outputStr = ": " + outputStr + "!" ;
    }
    $("#output").append(i.toString() + outputStr+ "</br>");
  }
}

$("#button").click(function() {
  var max = $("#maxnum").val();
  if(!max){
    reportError("must give a maximum number!");
  }
  var factorObj = getFactorObj();
  console.log("factorObj:", factorObj);
  if (Object.keys(factorObj).length === 0) {
      reportError("You must provide at least one factor and text");
      return;
  }
  fizzBuzz(max, factorObj);
  debugger;
})