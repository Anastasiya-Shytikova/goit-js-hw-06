const items = document.getElementById('categories').getElementsByClassName('item')
console.log(`Number of categories: ${items.length}`);

for (var i = 0; i < items.length; i++) {
    const itemName = items[i].querySelector(".item h2");
    console.log(`Category: ${itemName.innerText}`);
    const elementsItems = items[i].querySelectorAll(".item li");
    console.log(`Elements: ${elementsItems.length}`);
}