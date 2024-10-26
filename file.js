const targetboxes = document.querySelectorAll(`.targetbox`);

const myBoxes = document.querySelectorAll(`.playerbox`);
const mySmallShip = document.querySelector(`.mysmallship`);
const myDestroyer = document.querySelector(`.mydestroyer`);
const mySubmarine = document.querySelector(`.mysubmarine`);
const myBattleship = document.querySelector(`.mybattleship`);
const myAircraftCarrier = document.querySelector(`.myaircraftcarrier`);

//prettier-ignore
const myGameboard = [
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0]

const smallShipPlayer1 = {
  length: 2,
  hits: 0,
};
const destroyerPlayer1 = {
  length: 3,
  hits: 0,
};
const submarinePlayer1 = {
  length: 3,
  hits: 0,
};
const battleshipPlayer1 = {
  length: 4,
  hits: 0,
};
const aircraftCarrierPlayer1 = {
  length: 5,
  hits: 0,
};

let shipLetter = ``;

mySmallShip.addEventListener(`click`, function () {
  shipLetter = `m`;
  if (!smallShipSelected) {
    myBoxes.forEach(function (element, index) {
      smallShipPlacement(element, index);
    });
  }
});
myDestroyer.addEventListener(`click`, function () {
  shipLetter = `d`;
  myBoxes.forEach(function (element, index) {
    destroyerPlacement(element, index);
  });
});
mySubmarine.addEventListener(`click`, function () {
  shipLetter = `s`;
});
myBattleship.addEventListener(`click`, function () {
  shipLetter = `b`;
});
myAircraftCarrier.addEventListener(`click`, function () {
  shipLetter = `a`;
});

let smallShipSelected = false;
function smallShipPlacement(element, index) {
  let index2 = index + 1;
  if (!smallShipSelected) {
    element.addEventListener(`mouseover`, function () {
      if (!smallShipSelected) {
        if (!myGameboard[index] && myGameboard[index2]) {
          notAllowedBox(element);
        }
        if (index % 10 == 9 && !myGameboard[index]) {
          notAllowedBox(element);
        }
        if (index % 10 < 9 && !myGameboard[index] && !myGameboard[index2]) {
          notSelectedBox(element, myBoxes[index + 1]);
        }
      }
    });
    element.addEventListener(`mouseout`, function () {
      if (!smallShipSelected && !myGameboard[index] && myGameboard[index2]) {
        abandonedBox(element);
      }
      if (!smallShipSelected && !myGameboard[index] && !myGameboard[index2]) {
        abandonedBox(element, myBoxes[index2]);
      }
    });
    element.addEventListener(`click`, function () {
      if (index % 10 < 9 && !smallShipSelected && !myGameboard[index] && !myGameboard[index2]) {
        selectedBox(element, myBoxes[index + 1]);
        myGameboard[index] = myGameboard[index + 1] = 1;
        smallShipSelected = true;
      }
    });
  }
}

let destroyerPosSelected = false;
function destroyerPlacement(element, index) {
  element.addEventListener(`mouseover`, function () {
    if (!destroyerPosSelected) {
      if (index % 10 == 8) {
        notAllowedBox(element, myBoxes[index + 1]);
      }
      if (index % 10 == 9) {
        notAllowedBox(element);
      }
      if (index % 10 < 8) {
        notSelectedBox(element, myBoxes[index + 1], myBoxes[index + 2]);
      }
    }
  });
  element.addEventListener(`mouseout`, function () {
    if (!destroyerPosSelected) {
      abandonedBox(element, myBoxes[index + 1], myBoxes[index + 2]);
    }
  });
  element.addEventListener(`click`, function () {
    if (index % 10 < 8 && !destroyerPosSelected) {
      selectedBox(element, myBoxes[index + 1], myBoxes[index + 2]);
      myGameboard[index] = myGameboard[index + 1] = myGameboard[index + 2] = 1;
      destroyerPosSelected = true;
    }
  });
}

function selectedBox(firstBox, secondBox, thirdBox, fourthBox, fifthBox) {
  if (firstBox) {
    firstBox.style.background = `blue`;
  }
  if (secondBox) {
    secondBox.style.background = `blue`;
  }
  if (thirdBox) {
    thirdBox.style.background = `blue`;
  }
  if (fourthBox) {
    fourthBox.style.background = `blue`;
  }
  if (fifthBox) {
    fifthBox.style.background = `blue`;
  }
}
function notSelectedBox(firstBox, secondBox, thirdBox, fourthBox, fifthBox) {
  if (firstBox) {
    firstBox.style.background = `green`;
  }
  if (secondBox) {
    secondBox.style.background = `green`;
  }
  if (thirdBox) {
    thirdBox.style.background = `green`;
  }
  if (fourthBox) {
    fourthBox.style.background = `green`;
  }
  if (fifthBox) {
    fifthBox.style.background = `green`;
  }
}
function notAllowedBox(firstBox, secondBox, thirdBox, fourthBox, fifthBox) {
  if (firstBox) {
    firstBox.style.background = `red`;
  }
  if (secondBox) {
    secondBox.style.background = `red`;
  }
  if (thirdBox) {
    thirdBox.style.background = `red`;
  }
  if (fourthBox) {
    fourthBox.style.background = `red`;
  }
  if (fifthBox) {
    fifthBox.style.background = `red`;
  }
}
function abandonedBox(firstBox, secondBox, thirdBox, fourthBox, fifthBox) {
  if (firstBox) {
    firstBox.style.background = `none`;
  }
  if (secondBox) {
    secondBox.style.background = `none`;
  }
  if (thirdBox) {
    thirdBox.style.background = `none`;
  }
  if (fourthBox) {
    fourthBox.style.background = `none`;
  }
  if (fifthBox) {
    fifthBox.style.background = `none`;
  }
}

let numero = 0;
