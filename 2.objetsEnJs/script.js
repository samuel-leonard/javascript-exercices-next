// exercice PNJ


let character = {}; // nouvelle manière de déclarer

character = {
    name: "hector",
    age: 37,
    items_to_give: ["gun", "knife", "arrowBow", "crossbow", "apple"]
}
for (const property in character) {
    console.log(`${property}: ${character[property]}`);
}


function giveItems() {
    let item = (character.items_to_give[Math.floor(Math.random() * character.items_to_give.length)]);
    return item;
}
console.log(giveItems());

// exercice shop

let toSale = [];
tosale[
    septre{
title = "mage",
physic = 12,
magic = 15,
minLevel = 3,
available = true
}
,
{
    hache
},
{
    gun
}]