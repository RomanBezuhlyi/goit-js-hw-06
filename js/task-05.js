const inpName = document.querySelector('#name-input');
const outName = document.querySelector('#name-output');

inpName.addEventListener("input", (event) => {
    if (inpName.value === "") {
        outName.textContent = "Anonymous";
    } else {
        outName.textContent = event.currentTarget.value;
    };
});