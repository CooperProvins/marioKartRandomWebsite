function showGrid(whichButton) {
  var text = "";
  var maxRandom = 2;
  if (whichButton === 'team'){
    maxRandom = 4;
  }

  for (let i = 0; i < 3; i++){
    for (let j = 0; j < 8; j++){
      text += Math.random()*maxRandom + ", ";
    }
    text += "\n";
  }
  
  var textGrid = document.createElement("p");
  textGrid.innerHTML = text;
  document.getElementById("mainBody").appendChild(textGrid);
}
