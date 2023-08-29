"use strict";
const contactname = document.querySelector("#contact name");
console.log(contactname);
const buttonsubmet = document.querySelector("#button");
buttonsubmet === null || buttonsubmet === void 0 ? void 0 : buttonsubmet.addEventListener("click", () => {
    console.log(contactname === null || contactname === void 0 ? void 0 : contactname.value);
});
