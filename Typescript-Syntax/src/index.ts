
//Basic Types
let id: number = 5;
let company: string = "Donia skima";
let isPublished: boolean = false;
let x: any = 'Hello';
let age: number;

let ids: number[] = [2, 3, 2, 1, 8, 9];
let arr: any[] = [1, true, "hello"];


//Tuple
let person: [number, string, boolean] = [20, "Donia", true];
//Tuple Array
let employee: [number, string][]
employee = [
    [1, "Donia"],
    [2, "Marwa"],
    [3,"Jiji"],
]


//Union

let pid: string | number = 22;
pid = '22'


//Enum

enum Direction1 {
    Up=1,
    Down,//2
    left,//3
    Right//4
}

enum Direction2 {
    Up='Up',
    Down='Down',//2
    left='Left',//3
    Right='Right',//4
}


console.log(Direction1.Up);//1
console.log(Direction2.left);//Left


//Objects
type User = {
    id: number,
    name: string, 
}

const user: User = {
    id: 1,
    name: "Donia",
    
}

//Type Assertion

let cid: any = 1;
// let customerId=<number>cid
let customerId = cid as number;


//Functions
function addNum(x:number, y:number):number{
    return x + y;
}

console.log(addNum(2, 3));

function log(message: string | number):void {
    console.log(message);
}

//Interfaces

interface UserInterface  {
    readonly id: number,
    name: string, 
    age?:number//optional
}

const user1: UserInterface = {
    id: 1,
    name: "Donia",
    
}

// user1.id = 4; error

interface MathFunc{
    (x: number, y: number):number
}


const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;


//Classes
class Person{
    id: number
    name: string

    constructor(id:number,name:string) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`
    }
}

const Donia = new Person(1,"Donia");
const Jihen = new Person(2, "Jihen");

console.log(Donia.register());
console.log(Donia, Jihen);


//implement Interface in Class
interface PersonInterface  {
    id: number,
    name: string, 
    register(): string;
   
}

class Personn implements PersonInterface{
    id: number
    name: string

    constructor(id:number,name:string) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`
    }
}

//Extending Classes


class Employee extends Person{
    position: string
    
    constructor(id:number, name:string,position:string) {
        super(id, name);
        this.position=position;
    }
}

const emp = new Employee(2, "Marwa", "Student");
console.log(emp.name);
console.log(emp.register());


//Generics 

function getArray<T>(items: T[]): T[]{
    return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(["Donia", "Marwa", "Jiji"]);

strArray.push("Hello");
