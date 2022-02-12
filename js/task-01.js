const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);
items.forEach(item => {
    const itemName = item.querySelector(".item h2");
    console.log(`Category: ${itemName.innerText}`);
    const elementsItems = item.querySelectorAll(".item li");
    console.log(`Elements: ${elementsItems.length}`);
});