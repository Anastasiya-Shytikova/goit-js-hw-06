const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    }
}
const valueEl = document.querySelector('#value');
const addButton = document.querySelector('[data-action="increment"]');
const subButton = document.querySelector('[data-action="decrement"]');

addButton.addEventListener('click', function() {
    counter.increment();
    valueEl.textContent = counter.value;
})
subButton.addEventListener('click', function() {
    counter.decrement();
    valueEl.textContent = counter.value;
})