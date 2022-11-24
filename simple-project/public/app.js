"use strict";
// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
// const form = document.querySelector('form')!;
// console.log(form);
//Classes
class Invoice {
    //    readonly client: string;
    //     private details: string;
    //     public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("Donia", "learning ts", 383);
const invTwo = new Invoice("sirine", "learning ts", 383);
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
