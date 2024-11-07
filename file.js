const targetboxes = document.querySelectorAll(`.targetbox`);

const myBoxes = document.querySelectorAll(`.playerbox`);
const mySmallShip = document.querySelector(`.mysmallship`);
const myDestroyer = document.querySelector(`.mydestroyer`);
const mySubmarine = document.querySelector(`.mysubmarine`);
const myBattleship = document.querySelector(`.mybattleship`);
const myAircraftCarrier = document.querySelector(`.myaircraftcarrier`);
const noroom = document.querySelector(`.noroom`);
const vertical = document.querySelector(`.vertical`);
const horizontal = document.querySelector(`.horizontal`);
const pcBoxes = document.querySelectorAll(`.computerbox`);
const computerSmallShip = document.querySelector(`.pcsmallship`);
const computerDestroyer = document.querySelector(`.pcdestroyer`);
const computerSubmarine = document.querySelector(`.pcsubmarine`);
const computerBattleship = document.querySelector(`.pcbattleship`);
const computerAircraftCarrier = document.querySelector(`.pcaircraftcarrier`);

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

const playerSmallShip = {
  length: 2,
  hits: 0,
};
const playerDestroyer = {
  length: 3,
  hits: 0,
};
const playerSubmarine = {
  length: 3,
  hits: 0,
};
const playerBattleship = {
  length: 4,
  hits: 0,
};
const playerAircraftCarrier = {
  length: 5,
  hits: 0,
};

let shipPlacement;

let smallShipSelected = false;
mySmallShip.addEventListener(`click`, function () {
  shipPlacement = `ss`;
  myShipClicked(mySmallShip);
  smallShipPlacement();
});
let destroyerPosSelected = false;
myDestroyer.addEventListener(`click`, function () {
  shipPlacement = `dd`;
  myShipClicked(myDestroyer);
  destroyerPlacement();
});
let submarinePosSelected = false;
mySubmarine.addEventListener(`click`, function () {
  shipPlacement = `sub`;
  myShipClicked(mySubmarine);
  submarinePlacement();
});
let battleshipPosSelected = false;
myBattleship.addEventListener(`click`, function () {
  shipPlacement = `bb`;
  myShipClicked(myBattleship);
  battleshipPlacement();
});
let aircraftCarrierPosSelected = false;
myAircraftCarrier.addEventListener(`click`, function () {
  shipPlacement = `cv`;
  myShipClicked(myAircraftCarrier);
  aircraftCarrierPlacement();
});

function myShipClicked(ship) {
  mySmallShip.style.transform = `scale(1)`;
  myDestroyer.style.transform = `scale(1)`;
  mySubmarine.style.transform = `scale(1)`;
  myBattleship.style.transform = `scale(1)`;
  myAircraftCarrier.style.transform = `scale(1)`;
  if (ship.style.background !== `rgb(80, 200, 120)` && ship.style.background !== `rgb(247, 93, 89)`) {
    ship.style.transform = "scale(1.05)";
  }
}
function allShipsScale1() {
  mySmallShip.style.transform = `scale(1)`;
  myDestroyer.style.transform = `scale(1)`;
  mySubmarine.style.transform = `scale(1)`;
  myBattleship.style.transform = `scale(1)`;
  myAircraftCarrier.style.transform = `scale(1)`;
}

let buttonPressed = `horizontal`;

horizontal.addEventListener(`click`, function () {
  buttonPressed = `horizontal`;
});
vertical.addEventListener(`click`, function () {
  buttonPressed = `vertical`;
});

let shipsPlaced = 0;

function smallShipPlacement() {
  myBoxes.forEach(function (element, index) {
    let index2;
    element.addEventListener(`mouseover`, function () {
      if (smallShipSelected) return;
      if (buttonPressed === `horizontal`) {
        index2 = index + 1;
        mouseOver(9, 89, `ss`, index, index2);
      }
      if (buttonPressed === `vertical`) {
        index2 = index + 10;
        mouseOver(9, 89, `ss`, index, index2);
      }
    });
    element.addEventListener(`mouseout`, function () {
      abandonedBox(index, index2);
    });
    element.addEventListener(`click`, function () {
      if (smallShipSelected || noroom.style.opacity === `1`) return;
      shipsPlaced++;
      click(9, 89, `ss`, index, index2);
      myGameboard[index] = myGameboard[index2] = `ss`;
      smallShipSelected = true;
      if (shipPlacement === `ss`) {
        green(mySmallShip);
      }
    });
  });
}
function destroyerPlacement() {
  myBoxes.forEach(function (element, index) {
    let index2;
    let index3;
    element.addEventListener(`mouseover`, function () {
      if (destroyerPosSelected) return;
      if (buttonPressed === `horizontal`) {
        index2 = index + 1;
        index3 = index + 2;
        mouseOver(8, 79, `dd`, index, index2, index3);
      }
      if (buttonPressed === `vertical`) {
        index2 = index + 10;
        index3 = index + 20;
        mouseOver(8, 79, `dd`, index, index2, index3);
      }
    });
    element.addEventListener(`mouseout`, function () {
      abandonedBox(index, index2, index3);
    });
    element.addEventListener(`click`, function () {
      if (destroyerPosSelected || noroom.style.opacity === `1`) return;
      shipsPlaced++;
      click(8, 79, `dd`, index, index2, index3);
      myGameboard[index] = myGameboard[index2] = myGameboard[index3] = `dd`;
      destroyerPosSelected = true;
      if (shipPlacement === `dd`) {
        green(myDestroyer);
      }
    });
  });
}
function submarinePlacement() {
  myBoxes.forEach(function (element, index) {
    let index2;
    let index3;
    element.addEventListener(`mouseover`, function () {
      if (submarinePosSelected) return;
      if (buttonPressed === `horizontal`) {
        index2 = index + 1;
        index3 = index + 2;
        mouseOver(8, 79, `sub`, index, index2, index3);
      }
      if (buttonPressed === `vertical`) {
        index2 = index + 10;
        index3 = index + 20;
        mouseOver(8, 79, `sub`, index, index2, index3);
      }
    });
    element.addEventListener(`mouseout`, function () {
      abandonedBox(index, index2, index3);
    });
    element.addEventListener(`click`, function () {
      if (submarinePosSelected || noroom.style.opacity === `1`) return;
      shipsPlaced++;
      click(8, 79, `sub`, index, index2, index3);
      myGameboard[index] = myGameboard[index2] = myGameboard[index3] = `sub`;
      submarinePosSelected = true;
      if (shipPlacement === `sub`) {
        green(mySubmarine);
      }
    });
  });
}
function battleshipPlacement() {
  myBoxes.forEach(function (element, index) {
    let index2;
    let index3;
    let index4;
    element.addEventListener(`mouseover`, function () {
      if (battleshipPosSelected) return;
      if (buttonPressed === `horizontal`) {
        index2 = index + 1;
        index3 = index + 2;
        index4 = index + 3;
        mouseOver(7, 69, `bb`, index, index2, index3, index4);
      }
      if (buttonPressed === `vertical`) {
        index2 = index + 10;
        index3 = index + 20;
        index4 = index + 30;
        mouseOver(7, 69, `bb`, index, index2, index3, index4);
      }
    });
    element.addEventListener(`mouseout`, function () {
      abandonedBox(index, index2, index3, index4);
    });
    element.addEventListener(`click`, function () {
      if (battleshipPosSelected || noroom.style.opacity === `1`) return;
      shipsPlaced++;
      click(7, 69, `bb`, index, index2, index3, index4);
      myGameboard[index] = myGameboard[index2] = myGameboard[index3] = myGameboard[index4] = `bb`;
      battleshipPosSelected = true;
      if (shipPlacement === `bb`) {
        green(myBattleship);
      }
    });
  });
}
function aircraftCarrierPlacement() {
  myBoxes.forEach(function (element, index) {
    let index2;
    let index3;
    let index4;
    let index5;
    element.addEventListener(`mouseover`, function () {
      if (aircraftCarrierPosSelected) return;
      if (buttonPressed === `horizontal`) {
        index2 = index + 1;
        index3 = index + 2;
        index4 = index + 3;
        index5 = index + 4;
        mouseOver(6, 59, `cv`, index, index2, index3, index4, index5);
      }
      if (buttonPressed === `vertical`) {
        index2 = index + 10;
        index3 = index + 20;
        index4 = index + 30;
        index5 = index + 40;
        mouseOver(6, 59, `cv`, index, index2, index3, index4, index5);
      }
    });
    element.addEventListener(`mouseout`, function () {
      abandonedBox(index, index2, index3, index4, index5);
    });
    element.addEventListener(`click`, function () {
      if (aircraftCarrierPosSelected || noroom.style.opacity === `1`) return;
      shipsPlaced++;
      click(6, 59, `cv`, index, index2, index3, index4, index5);
      myGameboard[index] = myGameboard[index2] = myGameboard[index3] = myGameboard[index4] = myGameboard[index5] = `cv`;
      aircraftCarrierPosSelected = true;
      if (shipPlacement === `cv`) {
        green(myAircraftCarrier);
      }
    });
  });
}

function mouseOver(horValue, verValue, sP, index, index2, index3, index4, index5) {
  if (buttonPressed === `horizontal`) {
    if (
      index % 10 < horValue &&
      !myGameboard[index] &&
      !myGameboard[index2] &&
      !myGameboard[index3] &&
      !myGameboard[index4] &&
      !myGameboard[index5] &&
      shipPlacement === sP
    ) {
      notSelectedBox(index, index2, index3, index4, index5);
    }
    if (
      index % 10 >= horValue ||
      myGameboard[index] ||
      myGameboard[index2] ||
      myGameboard[index3] ||
      myGameboard[index4] ||
      myGameboard[index5]
    ) {
      notAllowedBox();
    }
  }
  if (buttonPressed === `vertical`) {
    if (
      index <= verValue &&
      !myGameboard[index] &&
      !myGameboard[index2] &&
      !myGameboard[index3] &&
      !myGameboard[index4] &&
      !myGameboard[index5] &&
      shipPlacement === sP
    ) {
      notSelectedBox(index, index2, index3, index4, index5);
    }
    if (
      index > verValue ||
      myGameboard[index] ||
      myGameboard[index2] ||
      myGameboard[index3] ||
      myGameboard[index4] ||
      myGameboard[index5]
    ) {
      notAllowedBox();
    }
  }
}

function click(horValue, verValue, sP, index, index2, index3, index4, index5) {
  if (
    index % 10 < horValue &&
    !myGameboard[index] &&
    !myGameboard[index2] &&
    !myGameboard[index3] &&
    !myGameboard[index4] &&
    !myGameboard[index5] &&
    shipPlacement === sP &&
    buttonPressed === `horizontal`
  ) {
    selectedBox(index, index2, index3, index4, index5);
  }
  if (
    index <= verValue &&
    !myGameboard[index] &&
    !myGameboard[index2] &&
    !myGameboard[index3] &&
    !myGameboard[index4] &&
    !myGameboard[index5] &&
    shipPlacement === sP &&
    buttonPressed === `vertical`
  ) {
    selectedBox(index, index2, index3, index4, index5);
  }
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
  console.log(shipsPlaced);
  if (shipsPlaced === 5) {
    allShipsScale1();
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

function notAllowedBox() {
  noroom.style.opacity = "1";
  return;
}

function abandonedBox(index, index2, index3, index4, index5) {
  noroom.style.opacity = "0";

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

//prettier-ignore
const pcGameboard = [
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

const pcSmallShip = {
  length: 2,
  hits: 0,
};
const pcDestroyer = {
  length: 3,
  hits: 0,
};
const pcSubmarine = {
  length: 3,
  hits: 0,
};
const pcBattleship = {
  length: 4,
  hits: 0,
};
const pcAircraftCarrier = {
  length: 5,
  hits: 0,
};

function pcShipPlacement() {
  function pcSmallShip() {
    let randomNumber = Math.floor(Math.random() * 2);
    let pcRandomIndex = Math.floor(Math.random() * 100);
    let index2;
    if (randomNumber === 0 && pcRandomIndex % 10 < 9) {
      index2 = pcRandomIndex + 1;
      pcGameboardAddValue(`pcss`, pcRandomIndex, index2);
    }
    if (randomNumber === 1 && pcRandomIndex <= 89) {
      index2 = pcRandomIndex + 10;
      pcGameboardAddValue(`pcss`, pcRandomIndex, index2);
    }
    function checkValue(element) {
      return element == `pcss`;
    }
    if (!pcGameboard.some(checkValue)) {
      pcSmallShip();
    }
    green(computerSmallShip);
  }
  function pcDestroyer() {
    let randomNumber = Math.floor(Math.random() * 2);
    let pcRandomIndex = Math.floor(Math.random() * 100);
    let index2;
    let index3;
    if (randomNumber === 0 && pcRandomIndex % 10 < 8) {
      index2 = pcRandomIndex + 1;
      index3 = pcRandomIndex + 2;
      pcGameboardAddValue(`pcdd`, pcRandomIndex, index2, index3);
    }
    if (randomNumber === 1 && pcRandomIndex <= 79) {
      index2 = pcRandomIndex + 10;
      index3 = pcRandomIndex + 20;
      pcGameboardAddValue(`pcdd`, pcRandomIndex, index2, index3);
    }
    function checkValue(element) {
      return element == `pcdd`;
    }
    if (!pcGameboard.some(checkValue)) {
      pcDestroyer();
    }
    green(computerDestroyer);
  }
  function pcSubmarine() {
    let randomNumber = Math.floor(Math.random() * 2);
    let pcRandomIndex = Math.floor(Math.random() * 100);
    let index2;
    let index3;
    if (randomNumber === 0 && pcRandomIndex % 10 < 8) {
      index2 = pcRandomIndex + 1;
      index3 = pcRandomIndex + 2;
      pcGameboardAddValue(`pcsub`, pcRandomIndex, index2, index3);
    }
    if (randomNumber === 1 && pcRandomIndex <= 79) {
      index2 = pcRandomIndex + 10;
      index3 = pcRandomIndex + 20;
      pcGameboardAddValue(`pcsub`, pcRandomIndex, index2, index3);
    }
    function checkValue(element) {
      return element == `pcsub`;
    }
    if (!pcGameboard.some(checkValue)) {
      pcSubmarine();
    }
    green(computerSubmarine);
  }
  function pcBattleship() {
    let randomNumber = Math.floor(Math.random() * 2);
    let pcRandomIndex = Math.floor(Math.random() * 100);
    let index2;
    let index3;
    let index4;
    if (randomNumber === 0 && pcRandomIndex % 10 < 7) {
      index2 = pcRandomIndex + 1;
      index3 = pcRandomIndex + 2;
      index4 = pcRandomIndex + 3;
      pcGameboardAddValue(`pcbb`, pcRandomIndex, index2, index3, index4);
    }
    if (randomNumber === 1 && pcRandomIndex <= 69) {
      index2 = pcRandomIndex + 10;
      index3 = pcRandomIndex + 20;
      index4 = pcRandomIndex + 30;
      pcGameboardAddValue(`pcbb`, pcRandomIndex, index2, index3, index4);
    }
    function checkValue(element) {
      return element == `pcbb`;
    }
    if (!pcGameboard.some(checkValue)) {
      pcBattleship();
    }
    green(computerBattleship);
  }
  function pcAircraftCarrier() {
    let randomNumber = Math.floor(Math.random() * 2);
    let pcRandomIndex = Math.floor(Math.random() * 100);
    let index2;
    let index3;
    let index4;
    let index5;
    if (randomNumber === 0 && pcRandomIndex % 10 < 6) {
      index2 = pcRandomIndex + 1;
      index3 = pcRandomIndex + 2;
      index4 = pcRandomIndex + 3;
      index5 = pcRandomIndex + 4;
      pcGameboardAddValue(`pccv`, pcRandomIndex, index2, index3, index4, index5);
    }
    if (randomNumber === 1 && pcRandomIndex <= 59) {
      index2 = pcRandomIndex + 10;
      index3 = pcRandomIndex + 20;
      index4 = pcRandomIndex + 30;
      index5 = pcRandomIndex + 40;
      pcGameboardAddValue(`pccv`, pcRandomIndex, index2, index3, index4, index5);
    }
    function checkValue(element) {
      return element == `pccv`;
    }
    if (!pcGameboard.some(checkValue)) {
      pcAircraftCarrier();
    }
    green(computerAircraftCarrier);
  }
  pcSmallShip();
  pcDestroyer();
  pcSubmarine();
  pcBattleship();
  pcAircraftCarrier();
}
pcShipPlacement();

function green(ship) {
  ship.style.border = `3px solid #006A4E`;
  ship.style.background = `#50C878`;
}
function red(ship) {
  ship.style.border = `3px solid #F62217`;
  ship.style.background = `#F75D59`;
}

function pcGameboardAddValue(pcShipCode, index, index2, index3, index4, index5) {
  if (!pcGameboard[index] && !pcGameboard[index2] && !pcGameboard[index3] && !pcGameboard[index4] && !pcGameboard[index5]) {
    console.log(`empty`);
    console.log(index);
    console.log(index2);
    pcGameboard[index] = pcGameboard[index2] = pcShipCode;
    if (index3) {
      console.log(index3);
      pcGameboard[index3] = pcShipCode;
    }
    if (index4) {
      console.log(index4);
      pcGameboard[index4] = pcShipCode;
    }
    if (index5) {
      console.log(index5);
      pcGameboard[index5] = pcShipCode;
    }
  }
}

pcBoxes.forEach(function (element, index) {
  element.addEventListener(`click`, function () {
    console.log(shipsPlaced);
    if (shipsPlaced != 5) return;
    if (pcGameboard[index] === `pcss`) {
      shipSunkBackground(pcBoxes, pcGameboard, index, pcSmallShip, computerSmallShip);
    }
    if (pcGameboard[index] === `pcdd`) {
      shipSunkBackground(pcBoxes, pcGameboard, index, pcDestroyer, computerDestroyer);
    }
    if (pcGameboard[index] === `pcsub`) {
      shipSunkBackground(pcBoxes, pcGameboard, index, pcSubmarine, computerSubmarine);
    }
    if (pcGameboard[index] === `pcbb`) {
      shipSunkBackground(pcBoxes, pcGameboard, index, pcBattleship, computerBattleship);
    }
    if (pcGameboard[index] === `pccv`) {
      shipSunkBackground(pcBoxes, pcGameboard, index, pcAircraftCarrier, computerAircraftCarrier);
    }
    if (!pcGameboard[index]) {
      pcBoxes[index].textContent = `O`;
      pcTurn();
    }
  });
});

function shipSunkBackground(boxes, gameboard, index, ship, shipClass) {
  boxes[index].textContent = `X`;
  boxes[index].style.background = `#F62217`;
  gameboard[index] = 1;
  ship.length--;
  if (ship.length === 0) {
    red(shipClass);
  }
  console.log(gameboard);
  return;
}

let pcChoices = [];
function pcTurn() {
  let array = [];
  for (let i = 0; i < 100; i++) {
    array.push(i);
  }
  let newArray = array.filter((ele) => !pcChoices.includes(ele));
  let pcShipChoiceIndex = newArray[Math.floor(Math.random() * newArray.length)];

  if (myGameboard[pcShipChoiceIndex] === `ss`) {
    shipSunkBackground(myBoxes, myGameboard, pcShipChoiceIndex, playerSmallShip, mySmallShip);
    pcTurn();
  }
  if (myGameboard[pcShipChoiceIndex] === `dd`) {
    shipSunkBackground(myBoxes, myGameboard, pcShipChoiceIndex, playerDestroyer, myDestroyer);
    pcTurn();
  }
  if (myGameboard[pcShipChoiceIndex] === `sub`) {
    shipSunkBackground(myBoxes, myGameboard, pcShipChoiceIndex, playerSubmarine, mySubmarine);
    pcTurn();
  }
  if (myGameboard[pcShipChoiceIndex] === `bb`) {
    shipSunkBackground(myBoxes, myGameboard, pcShipChoiceIndex, playerBattleship, myBattleship);
    pcTurn();
  }
  if (myGameboard[pcShipChoiceIndex] === `cv`) {
    shipSunkBackground(myBoxes, myGameboard, pcShipChoiceIndex, playerAircraftCarrier, myAircraftCarrier);
    pcTurn();
  }
  if (!myGameboard[pcShipChoiceIndex]) {
    myBoxes[pcShipChoiceIndex].textContent = `O`;
  }

  pcChoices.push(pcShipChoiceIndex);
}
