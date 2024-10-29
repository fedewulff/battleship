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

let smallShipSelected = false;
mySmallShip.addEventListener(`click`, function () {
  shipLetter = `m`;
  smallShipPlacement();
});
let destroyerPosSelected = false;
myDestroyer.addEventListener(`click`, function () {
  shipLetter = `d`;
  destroyerPlacement();
});
let submarinePosSelected = false;
mySubmarine.addEventListener(`click`, function () {
  shipLetter = `s`;
  submarinePlacement();
});
let battleshipPosSelected = false;
myBattleship.addEventListener(`click`, function () {
  shipLetter = `b`;
  battleshipPlacement();
});
let aircraftCarrierPosSelected = false;
myAircraftCarrier.addEventListener(`click`, function () {
  shipLetter = `a`;
  aircraftCarrierPlacement();
});

function smallShipPlacement() {
  myBoxes.forEach(function (element, index) {
    let index2 = index + 1;
    element.addEventListener(`mouseover`, function () {
      if (smallShipSelected) return;
      if (index % 10 < 9) {
        notSelectedBox(index, index2);
      }
      if (myGameboard[index] && !myGameboard[index2]) {
        notAllowedBox(index2);
      }
      if (index % 10 == 9 || (!myGameboard[index] && myGameboard[index2])) {
        notAllowedBox(index);
      }
    });

    element.addEventListener(`mouseout`, function () {
      abandonedBox(index, index2);
    });

    element.addEventListener(`click`, function () {
      if (smallShipSelected) return;
      if (index % 10 < 9 && !myGameboard[index] && !myGameboard[index2]) {
        selectedBox(index, index2);
        myGameboard[index] = myGameboard[index + 1] = 1;
        smallShipSelected = true;
      }
    });
  });
}

function destroyerPlacement() {
  myBoxes.forEach(function (element, index) {
    let index2 = index + 1;
    let index3 = index + 2;
    element.addEventListener(`mouseover`, function () {
      if (destroyerPosSelected) return;
      if (index % 10 < 8 && !myGameboard[index] && !myGameboard[index2] && !myGameboard[index3]) {
        notSelectedBox(index, index2, index3);
      }
      if (myGameboard[index] && myGameboard[index2] && !myGameboard[index3]) {
        notAllowedBox(index3);
      }
      if (myGameboard[index] && !myGameboard[index2] && !myGameboard[index3]) {
        notAllowedBox(index2, index3);
      }
      if (index % 10 == 8 || myGameboard[index3]) {
        notAllowedBox(index, index2);
      }
      if (index % 10 == 9 || (myGameboard[index2] && myGameboard[index3])) {
        notAllowedBox(index);
      }
    });
    element.addEventListener(`mouseout`, function () {
      abandonedBox(index, index2, index3);
    });
    element.addEventListener(`click`, function () {
      if (destroyerPosSelected) return;
      if (index % 10 < 8 && !myGameboard[index] && !myGameboard[index2] && !myGameboard[index3]) {
        selectedBox(index, index2, index3);
        myGameboard[index] = myGameboard[index2] = myGameboard[index3] = 1;
        destroyerPosSelected = true;
      }
    });
  });
}
function submarinePlacement() {
  myBoxes.forEach(function (element, index) {
    let index2 = index + 1;
    let index3 = index + 2;
    element.addEventListener(`mouseover`, function () {
      if (submarinePosSelected) return;
      if (index % 10 == 8 || myGameboard[index3]) {
        notAllowedBox(index, index2);
      }
      if (index % 10 == 9 || (myGameboard[index2] && myGameboard[index3])) {
        notAllowedBox(index);
      }
      if (index % 10 < 8 && !myGameboard[index2] && !myGameboard[index3]) {
        notSelectedBox(index, index2, index3);
      }
    });
    element.addEventListener(`mouseout`, function () {
      abandonedBox(index, index2, index3);
    });
    element.addEventListener(`click`, function () {
      if (submarinePosSelected) return;
      if (index % 10 < 8 && !myGameboard[index] && !myGameboard[index2] && !myGameboard[index3]) {
        selectedBox(index, index2, index3);
        myGameboard[index] = myGameboard[index2] = myGameboard[index3] = 1;
        submarinePosSelected = true;
      }
    });
  });
}

function battleshipPlacement() {
  myBoxes.forEach(function (element, index) {
    let index2 = index + 1;
    let index3 = index + 2;
    let index4 = index + 3;
    element.addEventListener(`mouseover`, function () {
      if (battleshipPosSelected) return;
      if (index % 10 == 7 || myGameboard[index4]) {
        notAllowedBox(index, index2, index3);
      }
      if (index % 10 == 8 || (myGameboard[index3] && myGameboard[index4])) {
        notAllowedBox(index, index2);
      }
      if (index % 10 == 9 || (myGameboard[index2] && myGameboard[index3] && myGameboard[index4])) {
        notAllowedBox(index);
      }
      if (index % 10 < 7 && !myGameboard[index2] && !myGameboard[index3] && !myGameboard[index4]) {
        notSelectedBox(index, index2, index3, index4);
      }
    });
    element.addEventListener(`mouseout`, function () {
      abandonedBox(index, index2, index3, index4);
    });
    element.addEventListener(`click`, function () {
      if (battleshipPosSelected) return;
      if (index % 10 < 7 && !myGameboard[index] && !myGameboard[index2] && !myGameboard[index3] && !myGameboard[index4]) {
        selectedBox(index, index2, index3, index4);
        myGameboard[index] = myGameboard[index2] = myGameboard[index3] = myGameboard[index4] = 1;
        battleshipPosSelected = true;
      }
    });
  });
}

function aircraftCarrierPlacement() {
  myBoxes.forEach(function (element, index) {
    let index2 = index + 1;
    let index3 = index + 2;
    let index4 = index + 3;
    let index5 = index + 4;
    element.addEventListener(`mouseover`, function () {
      if (aircraftCarrierPosSelected) return;
      if (index % 10 == 6 || myGameboard[index5]) {
        notAllowedBox(index, index2, index3, index4);
      }
      if (index % 10 == 7 || (myGameboard[index4] && myGameboard[index5])) {
        notAllowedBox(index, index2, index3);
      }
      if (index % 10 == 8 || (myGameboard[index3] && myGameboard[index4] && myGameboard[index5])) {
        notAllowedBox(index, index2);
      }
      if (index % 10 == 9 || (myGameboard[index2] && myGameboard[index3] && myGameboard[index4] && myGameboard[index5])) {
        notAllowedBox(index);
      }
      if (index % 10 < 6 && !myGameboard[index2] && !myGameboard[index3] && !myGameboard[index4] && !myGameboard[index5]) {
        notSelectedBox(index, index2, index3, index4, index5);
      }
    });
    element.addEventListener(`mouseout`, function () {
      abandonedBox(index, index2, index3, index4, index5);
    });
    element.addEventListener(`click`, function () {
      if (aircraftCarrierPosSelected) return;
      if (
        index % 10 < 7 &&
        !myGameboard[index] &&
        !myGameboard[index2] &&
        !myGameboard[index3] &&
        !myGameboard[index4] &&
        !myGameboard[index5]
      ) {
        selectedBox(index, index2, index3, index4, index5);
        myGameboard[index] = myGameboard[index2] = myGameboard[index3] = myGameboard[index4] = myGameboard[index5] = 1;
        aircraftCarrierPosSelected = true;
      }
    });
  });
}

function selectedBox(index, index2, index3, index4, index5) {
  if (!myGameboard[index]) {
    myBoxes[index].style.background = `blue`;
  }
  if (!myGameboard[index2]) {
    myBoxes[index2].style.background = `blue`;
  }
  if (!myGameboard[index3] && index3) {
    myBoxes[index3].style.background = `blue`;
  }
  if (!myGameboard[index4] && index4) {
    myBoxes[index4].style.background = `blue`;
  }
  if (!myGameboard[index5] && index5) {
    myBoxes[index5].style.background = `blue`;
  }
}
function notSelectedBox(index, index2, index3, index4, index5) {
  if (!myGameboard[index]) {
    myBoxes[index].style.background = `green`;
  }
  if (!myGameboard[index2]) {
    myBoxes[index2].style.background = `green`;
  }
  if (!myGameboard[index3] && index3) {
    myBoxes[index3].style.background = `green`;
  }
  if (!myGameboard[index4] && index4) {
    myBoxes[index4].style.background = `green`;
  }
  if (!myGameboard[index5] && index5) {
    myBoxes[index5].style.background = `green`;
  }
}
function notAllowedBox(index, index2, index3, index4, index5) {
  if (!myGameboard[index]) {
    myBoxes[index].style.background = `red`;
  }
  if (!myGameboard[index2] && index2) {
    myBoxes[index2].style.background = `red`;
  }
  if (!myGameboard[index3] && index3) {
    myBoxes[index3].style.background = `red`;
  }
  if (!myGameboard[index4] && index4) {
    myBoxes[index4].style.background = `red`;
  }
  if (!myGameboard[index5] && index5) {
    myBoxes[index5].style.background = `red`;
  }
}
function abandonedBox(index, index2, index3, index4, index5) {
  if (!myGameboard[index]) {
    myBoxes[index].style.background = `none`;
  }
  if (!myGameboard[index2] && index2 < 100) {
    myBoxes[index2].style.background = `none`;
  }
  if (!myGameboard[index3] && index3 < 100) {
    myBoxes[index3].style.background = `none`;
  }
  if (!myGameboard[index4] && index4 < 100) {
    myBoxes[index4].style.background = `none`;
  }
  if (!myGameboard[index5] && index5 < 100) {
    myBoxes[index5].style.background = `none`;
  }
}

let numero = 0;
