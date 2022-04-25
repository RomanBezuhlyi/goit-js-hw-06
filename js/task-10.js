function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

const boxesEl = document.querySelector('.boxes'); 

let array = [];

createBtn.addEventListener("click", () =>  createBoxes(inputEl.amount));

function createBoxes(amount) {
  let boxsize = 30;
for (let i = 0; i <= amount; i++){
    const createDiv = document.createElement('div');
        createDiv.style.width =`${boxsize}px`;
        createDiv.style.height =`${boxsize}px`;
        createDiv.style.backgroundColor = getRandomHexColor();
    array.push(createDiv);
    boxsize += 10;
  };
}
