const anchor = document.querySelector("a")!;
// adding an ! mark at the end will tell ts that I know anchor is not null and hence we will not get that error 

// ts doesnot know whether anchor has a href property or not 
//here we check whether anchor tag is null or not
console.log(anchor.href)

const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children)

// inputs 
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit",(e:Event)=>{
    e.preventDefault()
    console.log(type.value)
    console.log(tofrom.value)
    console.log(details.value)
    console.log(amount.value)
})
