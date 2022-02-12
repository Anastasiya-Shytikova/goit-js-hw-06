const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];
const list = document.getElementById("ingredients");

const mapup = ingredients
    .map((ingredient) => {
        const resultLi = document.createElement("li");
        resultLi.textContent = `${ingredient}`;
        resultLi.classList.add('ingredient');
        return resultLi;
    });
list.append(...mapup);