function showGrid(whichButton) {
  var text = "";
  var maxRandom = 2;
  if (whichButton === 'team'){
    maxRandom = 4;
  }

  for (let i = 0; i < 3; i++){
    for (let j = 0; j < 8; j++){
      text += Math.floor(Math.random()*maxRandom) + ", ";
    }
    text += "\n";
  }

  if (document.getElementById("textGrid") === null){
    var textGrid = document.createElement("p");
    textGrid.id = "textGrid";
    textGrid.innerHTML = text;
    document.getElementById("mainBody").appendChild(textGrid);
  }
  else {
    document.getElementById("textGrid").innerHTML = text;
  }
}
