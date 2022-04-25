const inpSize = document.querySelector('#font-size-control');
const spnText = document.querySelector('#text');

inpSize.addEventListener("input", () => {
    spnText.style.fontSize = inpSize.value+'px';  
});