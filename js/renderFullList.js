import { LocalData } from "./LocalData.mjs";
import { createStringLiteralForRingCards, renderRingWithTemplate, sortByMostPopular, sortByPriceHighToLow, sortByPriceLowToHigh, renderHeaderAndFooter, findRingById, addRingToCart} from "./utils.js";

//createStringLiteralForRingCards()
const ringDataObject = new LocalData("rings.json");
const selectElement = document.querySelector("#sort-options")
const ringData = await ringDataObject.getData();
const ringList = ringData.rings;
const topRingsElement = document.querySelector(".rings");
const sortedMostPopular = sortByMostPopular(ringList);
console.log(sortedMostPopular);
console.log(ringData.rings[0].quantitySold);

renderHeaderAndFooter();

selectElement.addEventListener('change', function() {
    const selectedValue = this.value;
    if (selectedValue === "mostPopular"){
        renderRingWithTemplate("",createStringLiteralForRingCards, topRingsElement, sortByMostPopular(ringList));
    } else if (selectedValue === "lowHigh"){
        renderRingWithTemplate("",createStringLiteralForRingCards, topRingsElement, sortByPriceLowToHigh(ringList));
    } else if (selectedValue === "highLow"){
        renderRingWithTemplate("",createStringLiteralForRingCards, topRingsElement, sortByPriceHighToLow(ringList));
    }

})

renderRingWithTemplate("",createStringLiteralForRingCards, topRingsElement, sortedMostPopular);

let buttons = document.querySelectorAll(".add-to-cart")

for(let button of buttons){
    button.addEventListener("click", addRingToLocalStorageHandler)
}

async function addRingToLocalStorageHandler(e) {
    console.log(e);
    const ring = await findRingById(e.target.dataset.id, ringList);
    addRingToCart(ring);
}



