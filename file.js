const targetboxes = document.querySelectorAll(`.targetbox`);
const playerBoxes = document.querySelectorAll(`.playerbox`);

//prettier-ignore
const gameboardPlayer1 = [
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
const aircraftCarrierPlayer1 = {
  length: 5,
  hits: 0,
};
const battleshipPlayer1 = {
  length: 4,
  hits: 0,
};

function boxClickedPlayer1() {}

playerBoxes.forEach(function (element, index) {
  element.addEventListener(`click`, function () {
    element.classList.add("selectedBox");
    gameboardPlayer1[index] = 1;
    console.log(gameboardPlayer1);
  });
});
