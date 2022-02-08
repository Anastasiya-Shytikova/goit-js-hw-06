function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonRef = document.querySelector('button')
const spanText = document.querySelector('.color')
const bodyRef = document.querySelector('body')
buttonRef.addEventListener('click', () => {
    bodyRef.style.backgroundColor = getRandomHexColor()
    spanText.textContent = getRandomHexColor()
})