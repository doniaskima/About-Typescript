// let greet: Function;


//exemple 1
let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}


//exemple 2
let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string):number=> {
    if (action === 'add') {
        return numOne = numTwo;
    } else {
        return numOne = numTwo;
    }
}

//exemple 3

let logDetails: (obj: { name: string, age: number }) => void;
logDetails = (person: { name: string, age: number }) => {
    console.log(`${person.name} is ${person.age} years old`);
}