function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const valueColor = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');

changeColor.addEventListener('click', onBackgroundColor);

function onBackgroundColor() {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  valueColor.textContent = randomColor;
}
