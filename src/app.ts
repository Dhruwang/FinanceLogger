import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payments.js";
import { HasFormatter } from "./Interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("Dhruwang","Bonus",50000000000000000000)
docTwo = new Payment("Vw","CarPayment",1700000)

let docs:HasFormatter[]=[]
docs.push(docOne)
docs.push(docTwo)

const anchor = document.querySelector("a")!;
// adding an ! mark at the end will tell ts that I know anchor is not null and hence we will not get that error 

// ts doesnot know whether anchor has a href property or not 
//here we check whether anchor tag is null or not

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs 
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul") !;
const list = new ListTemplate(ul)

form.addEventListener("submit",(e)=>{
    console.log("runn9ing")
    e.preventDefault();
    let doc:HasFormatter;
    if (type.value ==="invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    }
    else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }
    list.render(doc, type.value, "end")
})
