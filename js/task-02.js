const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];
const list = document.getElementById("ingredients");

ingredients.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
})