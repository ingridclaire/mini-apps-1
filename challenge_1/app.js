console.log('I am building a tic tac toe game!');






//Controller

var boxes = ['topL', 'topM', 'topR', 'midL', 'midM', 'midR', 'bottomL', 'bottomM', 'bottomR'];

boxes.map(box => {
  return document.getElementById(box).addEventListener("click", () => {
    document.getElementById(box).innerHTML = "X";
  })
});

