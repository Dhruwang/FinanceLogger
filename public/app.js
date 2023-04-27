"use strict";
const anchor = document.querySelector("a");
// adding an ! mark at the end will tell ts that I know anchor is not null and hence we will not get that error 
// ts doesnot know whether anchor has a href property or not 
//here we check whether anchor tag is null or not
console.log(anchor.href);
const form = document.querySelector(".new-item-form");
console.log(form.children);
// inputs 
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value);
    console.log(tofrom.value);
    console.log(details.value);
    console.log(amount.value);
});
