import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payments.js";
let docOne;
let docTwo;
docOne = new Invoice("Dhruwang", "Bonus", 50000000000000000000);
docTwo = new Payment("Vw", "CarPayment", 1700000);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
const anchor = document.querySelector("a");
// adding an ! mark at the end will tell ts that I know anchor is not null and hence we will not get that error 
// ts doesnot know whether anchor has a href property or not 
//here we check whether anchor tag is null or not
const form = document.querySelector(".new-item-form");
// inputs 
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    console.log("runn9ing");
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
