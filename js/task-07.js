const range = document.querySelector("#font-size-control"),
    h3 = document.querySelector("#text");

range.addEventListener("change", function(event) {
    h3.style.fontSize = this.value + "px";
});