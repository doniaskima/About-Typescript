//explicit types

let character: string;
let age: number;
let isLoggedIn: boolean;

// age="jiji";

age = 20;
isLoggedIn = true;

//Arrays

let array: string[];
// array = ['Donia', 'Marwa'];
array.push('Marwa');

//Union types

let mixed: (string | number |boolean)[] = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false);
console.log(mixed);