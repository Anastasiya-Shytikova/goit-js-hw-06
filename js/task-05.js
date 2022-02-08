const nameImput = document.querySelector(`#name-input`);
const nameOutput = document.querySelector(`#name-output`);

nameImput.addEventListener("nameOutput", (event) => {
    output.textContent = event.currentTarget.value;
});