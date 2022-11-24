"use strict";
// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
// const form = document.querySelector('form')!;
// console.log(form);
const form = document.querySelector(".new-item-form");
console.log(form.children);
//inputs 
const type = document.querySelector('#type');
const toform = document.querySelector('#toform');
const details = document.querySelector('#details');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toform.value, details.value);
});
