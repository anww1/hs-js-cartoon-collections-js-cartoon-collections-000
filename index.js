function dwarfRollCall(dwarves) {
  var string = "";
  var counter = 1;
  var index = 0;
  while (counter <= dwarves.length) {
    string = string.concat(counter + ". " + dwarves[index] + " ");
    counter ++;
    index ++;
}
  return string;
}

function summonCaptainPlanet(planeteerCalls){
  var index = 0;
  var string ="";
  while (index < planeteerCalls.length){
    string = planeteerCalls[index] + "!";
    planeteerCalls[index] = string.toUpperCase();
    index ++;
  }
  return planeteerCalls;
}


function longPlaneteerCalls(words) {
  var truth = false;
  var index = 0;
  var call = "";
  while (index < words.length){
    call = words[index];
    if (4 < call.length){
      return true;
    }
    index ++;
  }
  return false;
}


function findTheCheese (foods) {
  var index = 0;
  while (index < foods.length){
    if (foods[index] === "cheddar") {
      return "cheddar";
    }
    if (foods[index] === "gouda") {
      return "gouda";
    }
   if (foods[index] === "camebert") {
      return "camebert";
    }
    index ++;
  }
  return "no cheese!";
}