//Data
var boxes = ['TL', 'TM', 'TR', 'ML', 'MM', 'MR', 'BL', 'BM', 'BR'];

var alreadyPlayed = {
  TL: false,
  TM: false,
  TR: false,
  ML: false,
  MM: false,
  MR: false,
  BL: false,
  BM: false,
  BR: false
};

var previous = '';

var boxesPlayed = 0

var xPlays = {
  top: 0,
  midRow: 0,
  bottom: 0,
  left: 0,
  midCol: 0,
  right: 0,
  leftDiag: 0,
  rightDiag: 0
};

var oPlays = {top: 0, midRow: 0, bottom: 0, left: 0, midCol: 0, right: 0, leftDiag: 0, rightDiag: 0};






//Model/game logic

var containsWinCombo = (playsObj) => {
  for (var key in playsObj) {
    if (playsObj[key] === 3) {
      return true;
    }
  }
  return false;
}

var trackStreaks = (moveStr, playsObj) => {
  if (moveStr[0] === 'T') {
    playsObj.top++;
  } else if (moveStr[0] === 'M') {
    playsObj.midRow++;
  } else if (moveStr[0] === 'B') {
    playsObj.bottom++;
  }

  if (moveStr[1] === 'L') {
    playsObj.left++;
  } else if (moveStr[1] === 'R') {
    playsObj.right++;
  } else if (moveStr[1] === 'M') {
    playsObj.midCol++;
  }

  if (moveStr === 'TL' || moveStr === 'MM' || moveStr === 'BR') {
    playsObj.leftDiag++;
  }
  if (moveStr === 'TR' || moveStr === 'MM' || moveStr === 'BL') {
    playsObj.rightDiag++;
  }
}

var addExesAndOhs = (letter, space) => {
  document.getElementById(space).innerHTML = letter;
}




//Controller/interact with DOM

boxes.map(box => {
  return document.getElementById(box).addEventListener("click", () => {
    if (!alreadyPlayed[box]) {

      if (previous === '' || previous === 'O') {
        addExesAndOhs('X', box);
        previous = 'X';
        alreadyPlayed[box] = true;
        trackStreaks(box, xPlays);

      } else if (previous === 'X') {
        addExesAndOhs('O', box);
        previous = 'O';
        alreadyPlayed[box] = true;
        trackStreaks(box, oPlays);
      }
      boxesPlayed++;
    }

    if (boxesPlayed > 4) {
      if(containsWinCombo(xPlays)) {
        updateOnWin(1);
      } else if (containsWinCombo(oPlays)) {
        updateOnWin(2);
      }
    }

    if (boxesPlayed === 9) {
      updateOnWin(3);
    }
  })
});

var updateOnWin = (num) => {
  if (num === 1 || num === 2) {
    document.getElementById('winner').innerHTML = `Player ${num} Wins!!!`;
  } else {
    document.getElementById('winner').innerHTML = "The cat wins that round..."
  }
  document.getElementById('winner').style.visibility = 'visible';
  document.querySelector("button").style.visibility = 'visible';
}

document.querySelector("button").addEventListener("click", () => {
  location.reload();
})

