function showGrid(whichButton) {
  var text = "";
  var maxRandom = 2;
  if (whichButton === 'team'){
    maxRandom = 4;
  }
  else if (whichButton === 'solo'){
    maxRandom = 2;
  }

  for (let i = 0; i < 3; i++){
    for (let j = 0; j < 8; j++){
      text += Math.floor(Math.random()*maxRandom) + ", ";
    }
    text += "\n";
  }
  text = text.slice(0, -4);

  if (document.getElementById("textGrid") === null){
    var textGrid = document.createElement("p");
    textGrid.id = "textGrid";
    textGrid.textContent = text;
    textGrid.classList.add("roundedContainer");
    document.getElementById("mainContent").appendChild(textGrid);
  }
  else {
    document.getElementById("textGrid").textContent = text;
  }
}
