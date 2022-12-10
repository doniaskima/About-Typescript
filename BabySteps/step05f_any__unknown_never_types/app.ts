
//Any

let myval:any;

myval= true;//ok 
myval= 42;//ok
myval= "hey!";//ok
myval = [];//ok
myval = {};//ok 
myval = Math.random;//ok
myval = null;//ok 
myval = undefined;//ok 
myval = () => { console.log("Hello again") };//ok

//Unknown

let value: unknown;
value = true; // OK
value = 42; // OK
value = "hey!"; // OK
value = []; // OK
value = {}; // OK
value = Math.random; // OK
value = null; // OK
value = undefined; // OK
value = () => { console.log('Hey again!'); }; // OK



// Assigning a value of type unknown to variables of other types
let val: unknown;

const val1: unknown = val; // OK
const val2: any = val; // OK
const val3: boolean = val; // Will throw error
const val4: number = val; // Will throw error
const val5: string = val; // Will throw error
const val6: Record<string, any> = val; // Will throw error
const val7: any[] = val; // Will throw error
const val8: (...args: any[]) => void = val; // Will throw error



//Never

//Function returning never must not have a reachable andpoint 
function error(message: string): never {
  throw new Error(message);
}


// Inferred return type is never
function fail() {
  return error("Something failed");
}
 
// Function returning never must not have a reachable end point
function infiniteLoop(): never {
  while (true) {}
}
