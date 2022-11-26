// //Interafces
// interface IsPerson {
//     name: string;
//     age:number;
//     speak(a: string): void;
//     spend(a:number): number;
// }

// const me: IsPerson = {
//     name: "Donia",
//     age:20,
//     speak(text: string): void{
//         console.log(text);
//     },
//     spend(amount: number): number{
//         console.log('I spent', amount);
//         return amount;
//     },
    
// };

// const greetPerson = (person: IsPerson) => {
//     console.log('hello', person.name);
// }

// greetPerson(me);

// console.log(me);



import { Invoice } from './classes/Invoice.js';
import { Payement } from "./classes/Payement.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";


// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("Donia", "web work", 282);
// docTwo = new Invoice("Sirine", "web work", 363);


// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
// const form = document.querySelector('form')!;
// console.log(form);

//Classes
 
// const invOne = new Invoice("Donia", "learning ts", 383);
// const invTwo = new Invoice("sirine", "learning ts", 383);

// console.log(invOne, invTwo);
// let invoices: Invoice[] = [];
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payement(tofrom.value, details.value, amount.valueAsNumber);
  }
  console.log(doc);
});