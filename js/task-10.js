function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

const boxesEl = document.querySelector('#boxes'); 


createBtn.addEventListener("click", () => createBoxes(inputEl.value));

let boxsize = 30;

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
     const randomColor = getRandomHexColor();
    const createDiv = document.createElement('div');
    createDiv.style.width = `${boxsize}px`;
    createDiv.style.height = `${boxsize}px`;
    createDiv.style.backgroundColor = randomColor;
      boxesEl.append(createDiv);  
  };
      boxsize += 10;
}
