import { UserCart } from "./UserCart.mjs";

let cartRingsElement = document.querySelector(".cart-items");

// console.log("hello")
let userCart = new UserCart("ring-cart", cartRingsElement)
userCart.renderCartRings();

console.log(userCart.rings)
