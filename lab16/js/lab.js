// lab.js - APIs
// Author: Kelsey Melott <kmelott@ucsc.edu>
// Date: 06/06/2023

 
var numbers = 0;
function getAndPutData(number){
  $.ajax({
    url:"https://xkcd.com/"+ number+ "/info.0.json",
    data: {},
    type: "GET",
    dataType: "json",
    success: function(data) {
      // read apiendpoint data
      //console.log(data);
      var comicObj = data; 
      //console.log(comicObj);
      $("#comic").html("<h2>"+comicObj.title+"</h2>");
      $("#comic").append("<img src='"+comicObj.img+ "'>");
      $("#comic").append("<p>" +comicObj.alt+ "</p>");
      
  },
  // What we do if the api call fails
  error: function (jqXHR, textStatus, errorThrown) { 
      // throw error
      console.log("Error:", textStatus, errorThrown);
  }
  })
}


$("#previous").click(function(){
  numbers--;
  getAndPutData(numbers);
});

$("#next").click(function(){
  numbers++;
  getAndPutData(numbers);
});