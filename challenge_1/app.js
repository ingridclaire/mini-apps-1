console.log('I am building a tic tac toe game!');

//Model
var boxes = ['topL', 'topM', 'topR', 'midL', 'midM', 'midR', 'bottomL', 'bottomM', 'bottomR'];
var alreadyPlayed = {topL: false, topM: false, topR: false, midL: false, midM: false, midR: false, bottomL: false, bottomM: false, bottomR: false};
var previous = '';



//Controller

boxes.map(box => {
  return document.getElementById(box).addEventListener("click", () => {
    document.getElementById(box).innerHTML = "X";
  })
});

