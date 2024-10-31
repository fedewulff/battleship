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

      // if (buttonPressed === `horizontal`) {
      //   index2 = index + 1;
      //   if (index % 10 < 9 && !myGameboard[index] && !myGameboard[index2] && shipPlacement === `ss`) {
      //     notSelectedBox(index, index2);
      //   }
      //   if (index % 10 > 8 || myGameboard[index] || myGameboard[index2]) {
      //     notAllowedBox();
      //   }
      // }
      // if (buttonPressed === `vertical`) {
      //   index2 = index + 10;
      //   if (index <= 89 && !myGameboard[index] && !myGameboard[index2] && shipPlacement === `ss`) {
      //     notSelectedBox(index, index2);
      //   }
      //   if (index > 89 || myGameboard[index] || myGameboard[index2]) {
      //     notAllowedBox();
      //   }
      // }
    });

    element.addEventListener(`mouseout`, function () {
      abandonedBox(index, index2);
    });

    element.addEventListener(`click`, function () {
      if (smallShipSelected) return;
      // index2 = index + 1;
      // if (buttonPressed === `horizontal`) {
      //   index2 = index + 1;
      if (index % 10 < 9 && !myGameboard[index] && !myGameboard[index2] && shipPlacement === `ss` && buttonPressed === `horizontal`) {
        selectedBox(index, index2);
        myGameboard[index] = myGameboard[index2] = 1;
        smallShipSelected = true;
      }
      // }
      // if (buttonPressed === `vertical`) {
      //   index2 = index + 10;
      if (index <= 89 && !myGameboard[index] && !myGameboard[index2] && shipPlacement === `ss` && buttonPressed === `vertical`) {
        selectedBox(index, index2);
        myGameboard[index] = myGameboard[index2] = 1;
        smallShipSelected = true;
      }
      // }
    });
  });
}

function mouseOver(horValue, verValue, sP, index, index2, index3, index4, index5) {
  console.log(horValue);
  console.log(verValue);
  console.log(sP);
  console.log(index);
  console.log(index2);

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
      // if (buttonPressed === `horizontal`) {
      //   index2 = index + 1;
      //   index3 = index + 2;
      //   if (index % 10 < 8 && !myGameboard[index] && !myGameboard[index2] && !myGameboard[index3] && shipPlacement === `dd`) {
      //     notSelectedBox(index, index2, index3);
      //   }
      //   if (index % 10 > 7 || myGameboard[index] || myGameboard[index2] || myGameboard[index3]) {
      //     notAllowedBox();
      //   }
      // }
      // if (buttonPressed === `vertical`) {
      //   index2 = index + 10;
      //   index3 = index + 20;
      //   if (index <= 79 && !myGameboard[index] && !myGameboard[index2] && !myGameboard[index3] && shipPlacement === `dd`) {
      //     notSelectedBox(index, index2, index3);
      //   }
      //   if (index > 79 || myGameboard[index] || myGameboard[index2] || myGameboard[index3]) {
      //     notAllowedBox();
      //   }
      // }
    });
    element.addEventListener(`mouseout`, function () {
      abandonedBox(index, index2, index3);
    });
    element.addEventListener(`click`, function () {
      if (destroyerPosSelected) return;
      if (
        index % 10 < 8 &&
        !myGameboard[index] &&
        !myGameboard[index2] &&
        !myGameboard[index3] &&
        shipPlacement === `dd` &&
        buttonPressed === `horizontal`
      ) {
        selectedBox(index, index2, index3);
        myGameboard[index] = myGameboard[index2] = myGameboard[index3] = 1;
        destroyerPosSelected = true;
      }
      if (
        index <= 79 &&
        !myGameboard[index] &&
        !myGameboard[index2] &&
        !myGameboard[index3] &&
        shipPlacement === `dd` &&
        buttonPressed === `vertical`
      ) {
        selectedBox(index, index2, index3);
        myGameboard[index] = myGameboard[index2] = myGameboard[index3] = 1;
        destroyerPosSelected = true;
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
      // if (buttonPressed === `horizontal`) {
      //   index2 = index + 1;
      //   index3 = index + 2;
      //   if (index % 10 < 8 && !myGameboard[index] && !myGameboard[index2] && !myGameboard[index3] && shipPlacement === `sub`) {
      //     notSelectedBox(index, index2, index3);
      //   }
      //   if (index % 10 > 7 || myGameboard[index] || myGameboard[index2] || myGameboard[index3]) {
      //     notAllowedBox();
      //   }
      // }
      // if (buttonPressed === `vertical`) {
      //   index2 = index + 10;
      //   index3 = index + 20;
      //   if (index <= 79 && !myGameboard[index] && !myGameboard[index2] && !myGameboard[index3] && shipPlacement === `sub`) {
      //     notSelectedBox(index, index2, index3);
      //   }
      //   if (index > 79 || myGameboard[index] || myGameboard[index2] || myGameboard[index3]) {
      //     notAllowedBox();
      //   }
      // }
    });
    element.addEventListener(`mouseout`, function () {
      abandonedBox(index, index2, index3);
    });
    element.addEventListener(`click`, function () {
      if (submarinePosSelected) return;
      if (
        index % 10 < 8 &&
        !myGameboard[index] &&
        !myGameboard[index2] &&
        !myGameboard[index3] &&
        shipPlacement === `sub` &&
        buttonPressed === `horizontal`
      ) {
        selectedBox(index, index2, index3);
        myGameboard[index] = myGameboard[index2] = myGameboard[index3] = 1;
        submarinePosSelected = true;
      }
      if (
        index <= 79 &&
        !myGameboard[index] &&
        !myGameboard[index2] &&
        !myGameboard[index3] &&
        shipPlacement === `sub` &&
        buttonPressed === `vertical`
      ) {
        selectedBox(index, index2, index3);
        myGameboard[index] = myGameboard[index2] = myGameboard[index3] = 1;
        submarinePosSelected = true;
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
        if (
          index % 10 < 7 &&
          !myGameboard[index] &&
          !myGameboard[index2] &&
          !myGameboard[index3] &&
          !myGameboard[index4] &&
          shipPlacement === `bb`
        ) {
          notSelectedBox(index, index2, index3, index4);
        }
        if (index % 10 > 6 || myGameboard[index] || myGameboard[index2] || myGameboard[index3] || myGameboard[index4]) {
          notAllowedBox();
        }
      }
      if (buttonPressed === `vertical`) {
        index2 = index + 10;
        index3 = index + 20;
        index4 = index + 30;
        if (
          index <= 69 &&
          !myGameboard[index] &&
          !myGameboard[index2] &&
          !myGameboard[index3] &&
          !myGameboard[index4] &&
          shipPlacement === `bb`
        ) {
          notSelectedBox(index, index2, index3, index4);
        }
        if (index > 69 || myGameboard[index] || myGameboard[index2] || myGameboard[index3] || myGameboard[index4]) {
          notAllowedBox();
        }
      }
    });
    element.addEventListener(`mouseout`, function () {
      abandonedBox(index, index2, index3, index4);
    });
    element.addEventListener(`click`, function () {
      if (battleshipPosSelected) return;
      if (
        index % 10 < 7 &&
        !myGameboard[index] &&
        !myGameboard[index2] &&
        !myGameboard[index3] &&
        !myGameboard[index4] &&
        shipPlacement === `bb` &&
        buttonPressed === `horizontal`
      ) {
        selectedBox(index, index2, index3, index4);
        myGameboard[index] = myGameboard[index2] = myGameboard[index3] = myGameboard[index4] = 1;
        battleshipPosSelected = true;
      }
      if (
        index <= 69 &&
        !myGameboard[index] &&
        !myGameboard[index2] &&
        !myGameboard[index3] &&
        !myGameboard[index4] &&
        shipPlacement === `bb` &&
        buttonPressed === `vertical`
      ) {
        selectedBox(index, index2, index3, index4);
        myGameboard[index] = myGameboard[index2] = myGameboard[index3] = myGameboard[index4] = 1;
        battleshipPosSelected = true;
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
        if (
          index % 10 < 6 &&
          !myGameboard[index] &&
          !myGameboard[index2] &&
          !myGameboard[index3] &&
          !myGameboard[index4] &&
          !myGameboard[index5] &&
          shipPlacement === `cv`
        ) {
          notSelectedBox(index, index2, index3, index4, index5);
        }
        if (
          index % 10 > 5 ||
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
        index2 = index + 10;
        index3 = index + 20;
        index4 = index + 30;
        index5 = index + 40;
        if (
          index <= 59 &&
          !myGameboard[index] &&
          !myGameboard[index2] &&
          !myGameboard[index3] &&
          !myGameboard[index4] &&
          !myGameboard[index5] &&
          shipPlacement === `cv`
        ) {
          notSelectedBox(index, index2, index3, index4, index5);
        }
        if (index > 59 || myGameboard[index] || myGameboard[index2] || myGameboard[index3] || myGameboard[index4] || myGameboard[index5]) {
          notAllowedBox();
        }
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
        !myGameboard[index5] &&
        shipPlacement === `cv` &&
        buttonPressed === `horizontal`
      ) {
        selectedBox(index, index2, index3, index4, index5);
        myGameboard[index] = myGameboard[index2] = myGameboard[index3] = myGameboard[index4] = myGameboard[index5] = 1;
        aircraftCarrierPosSelected = true;
      }
      if (
        index < 59 &&
        !myGameboard[index] &&
        !myGameboard[index2] &&
        !myGameboard[index3] &&
        !myGameboard[index4] &&
        !myGameboard[index5] &&
        shipPlacement === `cv` &&
        buttonPressed === `vertical`
      ) {
        selectedBox(index, index2, index3, index4, index5);
        myGameboard[index] = myGameboard[index2] = myGameboard[index3] = myGameboard[index4] = myGameboard[index5] = 1;
        aircraftCarrierPosSelected = true;
      }
    });
  });
}

function selectedBox(index, index2, index3, index4, index5) {
  console.log(index);
  console.log(index2);
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
