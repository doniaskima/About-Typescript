// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
// const form = document.querySelector('form')!;
// console.log(form);

const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);



//inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const toform = document.querySelector('#toform') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        toform.value,
        details.value,

    )
})