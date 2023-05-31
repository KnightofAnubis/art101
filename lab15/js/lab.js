// lab.js - AJAX
// Author: Kelsey Melott <kmelott@ucsc.edu>
// Date: 05/30/2023

let num = 1;

function getCharacter(){
  $.ajax({
    url:"https://swapi.dev/api/people/" + num + "/",
    data: {},
    type: "GET",
    dataType: "json"
  })
  .done(function(data){
    $("#character").html("<h2>" + data.name + "</h2>");  
    $("#character").append("<p>Height: " + data.height + "</p>"); 
    $("#character").append("<p>Mass: " +data.mass+ "</p>");        
    $("#character").append("<p>Hair color: " +data.hair_color+ "</p>");        
    $("#character").append("<p>Skin color: " +data.skin_color+ "</p>");      
    $("#character").append("<p>Eye color: "+data.eye_color+"</p>");       
    $("#character").append("<p>Birth year: "+data.birth_year+"</p>");         
    $("#character").append("<p>Gender: "+data.gender+"</p>");         
    getHomeworld(data); 
    getSpecies(data);
    getFilm(data);           
    getVehicle(data);     
    getStarship(data);
  })
}
function getHomeworld(home){
  $.ajax({
    url: home.homeworld,
    data: {},
    type: "GET",
    dataType: "json"
  }).done(function(data){
    console.log(data.name);
    $("#character").append("<p>Homeworld: "+ data.name + "</p>");
  });     
}

function getSpecies(type){
  $.ajax({
    url: type.species,
    data: {},
    type: "GET",
    dataType: "json"
  }).done(function(data){
    console.log(data.name);
    $("#character").append("<p>Species: "+ data.name + "</p>");
  });     
}


function getFilm(film){
  for(var i = 0; i < 6;i++ ){
    $.ajax({
      url: film.films[i],
      data: {},
      type: "GET",
      dataType: "json"
    }).done(function(data){
      console.log(data.title);
      $("#films").append("<p>"+ data.title + "</p>");
    });    
  } 
}

function getVehicle(vehicle){
  for(var i = 0; i < 6;i++ ){
    $.ajax({
      url: vehicle.vehicles[i],
      data: {},
      type: "GET",
      dataType: "json"
    }).done(function(data){
      console.log(data.name);
      $("#vehicles").append("<p>"+ data.name + "</p>");
    });    
  } 
}
function getStarship(ship){
  for(var i = 0; i < 6;i++ ){
    $.ajax({
      url: ship.starships[i],
      data: {},
      type: "GET",
      dataType: "json"
    }).done(function(data){
      console.log(data.name);
      $("#starships").append("<p>"+ data.name + "</p>");
    });    
  } 
}

$("#active").click(getCharacter);
$("#deactive").click(function(){
  $("#character").html("Characters:");
  $("#vehicles").html("Vehicles");
  $("#films").html("Films:");
  $("#starships").html("Starships:");
  num= Math.floor(Math.random() * 82);
})

