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

let uid: string | number;
uid = '123';
uid = 123;

//objects
let person1: object;

person1 = { name: 'Donia', age: 30 };

let person2: {
    name: string,
    age: number,
    beltColour:string
}

person2 = { name: 'Donia', age: 20, beltColour: 'black' };
