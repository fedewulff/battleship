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
  myBoxes.forEach(function (element, index) {
    smallShipPlacement(element, index);
  });
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

let smallShipPosSelected = false;
function smallShipPlacement(element, index) {
  element.addEventListener(`mouseover`, function () {
    if (!smallShipPosSelected) {
      if (index % 10 == 9) {
        element.style.background = `red`;
      }
      if (index % 10 < 9) {
        element.style.background = myBoxes[index + 1].style.background = `green`;
      }
    }
  });
  element.addEventListener(`mouseout`, function () {
    if (!smallShipPosSelected) {
      element.style.background = myBoxes[index + 1].style.background = `none`;
    }
  });
  element.addEventListener(`click`, function () {
    if (index % 10 < 9 && !smallShipPosSelected) {
      element.style.background = `blue`;
      myBoxes[index + 1].style.background = `blue`;
      myGameboard[index] = myGameboard[index + 1] = 1;
      smallShipPosSelected = true;
    }
  });
}

let destroyerPosSelected = false;
function destroyerPlacement(element, index) {
  element.addEventListener(`mouseover`, function () {
    if (!destroyerPosSelected) {
      if (index % 10 == 8) {
        element.style.background = `red`;
        myBoxes[index + 1].style.background = `red`;
      }
      if (index % 10 == 9) {
        element.style.background = `red`;
      }
      if (index % 10 < 8) {
        element.style.background = `green`;
        myBoxes[index + 1].style.background = `green`;
        myBoxes[index + 2].style.background = `green`;
      }
    }
  });
  element.addEventListener(`mouseout`, function () {
    if (!destroyerPosSelected) {
      element.style.background = myBoxes[index + 1].style.background = myBoxes[index + 2].style.background = `none`;
    }
  });
  element.addEventListener(`click`, function () {
    if (index % 10 < 8 && !destroyerPosSelected) {
      element.style.background = `blue`;
      myBoxes[index + 1].style.background = `blue`;
      myBoxes[index + 2].style.background = `blue`;
      myGameboard[index] = myGameboard[index + 1] = myGameboard[index + 2] = 1;
      destroyerPosSelected = true;
      console.log(myGameboard);
    }
  });
}
