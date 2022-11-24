"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const me = {
    name: "Donia",
    age: 20,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    },
};
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
console.log(me);
const Invoice_js_1 = require("./classes/Invoice.js");
// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
// const form = document.querySelector('form')!;
// console.log(form);
//Classes
const invOne = new Invoice_js_1.Invoice("Donia", "learning ts", 383);
const invTwo = new Invoice_js_1.Invoice("sirine", "learning ts", 383);
console.log(invOne, invTwo);
let invoices = [];
const form = document.querySelector(".new-item-form");
console.log(form.children);
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
// invOne.client = "Dorra";
invTwo.amount = 788;
console.log(invOne, invTwo);
console.log(invoices);
//inputs 
const type = document.querySelector('#type');
const toform = document.querySelector('#toform');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toform.value, details.value);
});
