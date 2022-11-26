
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
    name: "John",
    
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

