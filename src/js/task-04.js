const add = document.querySelector('button[data-action="increment"]');
const remove = document.querySelector('button[data-action="decrement"]');

const number = document.querySelector('#value');
let counterValue = 0;

add.addEventListener('click', function () {
    counterValue += 1;
    number.innerHTML = counterValue;

});

remove.addEventListener('click', function () {
    counterValue -= 1;
    number.innerHTML = counterValue;

});