//Interafces
interface IsPerson {
    name: string;
    age:number;
    speak(a: string): void;
    spend(a:number): number;
}

const me: IsPerson = {
    name: "Donia",
    age:20,
    speak(text: string): void{
        console.log(text);
    },
    spend(amount: number): number{
        console.log('I spent', amount);
        return amount;
    },
    
};

const greetPerson = (person: IsPerson) => {
    console.log('hello', person.name);
}

greetPerson(me);

console.log(me);






import { Invoice } from './classes/Invoice.js'
// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
// const form = document.querySelector('form')!;
// console.log(form);

//Classes
 
const invOne = new Invoice("Donia", "learning ts", 383);
const invTwo = new Invoice("sirine", "learning ts", 383);

console.log(invOne, invTwo);
let invoices: Invoice[] = [];

const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach(inv => {
    console.log(inv.client,  inv.amount, inv.format());
});

// invOne.client = "Dorra";
invTwo.amount = 788;
console.log(invOne, invTwo);

console.log(invoices);



//inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const toform = document.querySelector('#toform') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        toform.value,
        details.value,

    )
})