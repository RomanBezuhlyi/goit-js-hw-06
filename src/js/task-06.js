const inputValidText = document.querySelector('#validation-input');

inputValidText.addEventListener("blur", () => {
    if (inputValidText.value.length == inputValidText.dataset.length) {
        inputValidText.classList.add("valid");
        inputValidText.classList.remove("invalid");
    } else {
        inputValidText.classList.add("invalid");
        inputValidText.classList.remove("valid");
    }
});