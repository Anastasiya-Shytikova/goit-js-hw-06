const range = document.querySelector("#font-size-control"),
    h3 = document.querySelector("#text");
h3.style.fontSize = range.value + "px"
range.addEventListener("input", function(event) {
    h3.style.fontSize = event.currentTarget.value + "px";
});