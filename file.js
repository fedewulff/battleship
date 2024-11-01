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

let shipPlacement;

let smallShipSelected = false;
mySmallShip.addEventListener(`click`, function () {
  shipPlacement = `ss`;
  smallShipPlacement();
});
let destroyerPosSelected = false;
myDestroyer.addEventListener(`click`, function () {
  shipPlacement = `dd`;
  destroyerPlacement();
});
let submarinePosSelected = false;
mySubmarine.addEventListener(`click`, function () {
  shipPlacement = `sub`;
  submarinePlacement();
});
let battleshipPosSelected = false;
myBattleship.addEventListener(`click`, function () {
  shipPlacement = `bb`;
  battleshipPlacement();
});
let aircraftCarrierPosSelected = false;
myAircraftCarrier.addEventListener(`click`, function () {
  shipPlacement = `cv`;
  aircraftCarrierPlacement();
});

let buttonPressed = `horizontal`;

horizontal.addEventListener(`click`, function () {
  buttonPressed = `horizontal`;
});
vertical.addEventListener(`click`, function () {
  buttonPressed = `vertical`;
});

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
      if (smallShipSelected) return;
      click(9, 89, `ss`, index, index2);
      myGameboard[index] = myGameboard[index2] = `ss`;
      smallShipSelected = true;
      console.log(myGameboard);
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
      if (destroyerPosSelected) return;
      click(8, 79, `dd`, index, index2, index3);
      myGameboard[index] = myGameboard[index2] = myGameboard[index3] = `dd`;
      destroyerPosSelected = true;
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
      if (submarinePosSelected) return;
      click(8, 79, `sub`, index, index2, index3);
      myGameboard[index] = myGameboard[index2] = myGameboard[index3] = `sub`;
      submarinePosSelected = true;
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
      if (battleshipPosSelected) return;
      click(7, 69, `bb`, index, index2, index3, index4);
      myGameboard[index] = myGameboard[index2] = myGameboard[index3] = myGameboard[index4] = `bb`;
      battleshipPosSelected = true;
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
      if (aircraftCarrierPosSelected) return;
      click(6, 59, `cv`, index, index2, index3, index4, index5);
      myGameboard[index] = myGameboard[index2] = myGameboard[index3] = myGameboard[index4] = myGameboard[index5] = `cv`;
      aircraftCarrierPosSelected = true;
      // if (
      //   index % 10 <= 6 &&
      //   !myGameboard[index] &&
      //   !myGameboard[index2] &&
      //   !myGameboard[index3] &&
      //   !myGameboard[index4] &&
      //   !myGameboard[index5] &&
      //   shipPlacement === `cv` &&
      //   buttonPressed === `horizontal`
      // ) {
      //   selectedBox(index, index2, index3, index4, index5);
      //   myGameboard[index] = myGameboard[index2] = myGameboard[index3] = myGameboard[index4] = myGameboard[index5] = 1;
      //   aircraftCarrierPosSelected = true;
      // }
      // if (
      //   index < 59 &&
      //   !myGameboard[index] &&
      //   !myGameboard[index2] &&
      //   !myGameboard[index3] &&
      //   !myGameboard[index4] &&
      //   !myGameboard[index5] &&
      //   shipPlacement === `cv` &&
      //   buttonPressed === `vertical`
      // ) {
      //   selectedBox(index, index2, index3, index4, index5);
      //   myGameboard[index] = myGameboard[index2] = myGameboard[index3] = myGameboard[index4] = myGameboard[index5] = 1;
      //   aircraftCarrierPosSelected = true;
      // }
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

function pcTurn() {
  function smallShip() {
    let randomNumber = Math.floor(Math.random() * 2);
    let smallShipIndex = Math.floor(Math.random() * 100);
    let index2;
    if (randomNumber === 0 && smallShipIndex % 10 < 9) {
      index2 = smallShipIndex + 1;
      pcGameboardAddValue(`pcss`, smallShipIndex, index2);
    }
    if (randomNumber === 1 && smallShipIndex <= 89) {
      index2 = smallShipIndex + 10;
      pcGameboardAddValue(`pcss`, smallShipIndex, index2);
    }
    function checkValue(element) {
      return element == `pcss`;
    }
    if (!pcGameboard.some(checkValue)) {
      smallShip();
    }
  }
  smallShip();
  console.log(pcGameboard);
}
pcTurn();

function pcSmallShip() {
  let randomNumber = Math.floor(Math.random() * 2);
  let smallShipIndex = Math.floor(Math.random() * 100);
  if (randomNumber === 0 && smallShipIndex % 10 !== 9 && !pcGameboard[smallShipIndex]) {
    let index2 = smallShipIndex + 1;
    if (!pcGameboard[index2]) {
      pcGameboard[smallShipIndex] = `pcss`;
      pcGameboard[index2] = `pcss`;
    } else pcSmallShip();
  }
  if (randomNumber === 1 && smallShipIndex <= 89 && !pcGameboard[smallShipIndex]) {
    let index2 = smallShipIndex + 10;
    if (!pcGameboard[index2]) {
      pcGameboard[smallShipIndex] = `pcss`;
      pcGameboard[index2] = `pcss`;
    } else pcSmallShip();
  }
  console.log(pcGameboard);
  function checkValue(element) {
    return element == `pcss`;
  }
  if (!pcGameboard.some(checkValue)) {
    pcSmallShip();
  }
  return;
}
// pcSmallShip();

function pcShipPlacement(value1, value2, index3) {
  let randomNumber = Math.floor(Math.random() * 2);
  let smallShipIndex = Math.floor(Math.random() * 100);

  if (randomNumber === 0 && smallShipIndex % 10 < value1 && !pcGameboard[smallShipIndex]) {
    let index2 = smallShipIndex + 1;
    if (!pcGameboard[index2] && !pcGameboard[index3]) {
      pcGameboardAddValue(`pcss`, smallShipIndex, index2);
      // pcGameboard[smallShipIndex] = `pcss`;
      // pcGameboard[index2] = `pcss`;
    }
  }
  if (randomNumber === 1 && smallShipIndex <= value2 && !pcGameboard[smallShipIndex]) {
    let index2 = smallShipIndex + 10;
    if (!pcGameboard[index2] && !pcGameboard[index3]) {
      pcGameboardAddValue(`pcss`, smallShipIndex, index2);
      // pcGameboard[smallShipIndex] = `pcss`;
      // pcGameboard[index2] = `pcss`;
    }
  }
  console.log(pcGameboard);
  console.log(randomNumber);
  console.log(smallShipIndex);
  function checkValue(element) {
    return element == `pcss`;
  }
  if (!pcGameboard.some(checkValue)) {
    pcShipPlacement(value1, value2);
  }

  return;
}
// pcShipPlacement(9, 89);

function pcGameboardAddValue(pcShipCode, index, index2, index3, index4, index5) {
  if (!pcGameboard[index && !pcGameboard[index2] && !pcGameboard[index3] && !pcGameboard[index4] && !pcGameboard[index5]]) {
    pcGameboard[index] = pcGameboard[index2] = pcShipCode;
    if (index3) {
      pcGameboard[index3] = pcShipCode;
    }
    if (index4) {
      pcGameboard[index4] = pcShipCode;
    }
    if (index5) {
      pcGameboard[index5] = pcShipCode;
    }
  }
}
