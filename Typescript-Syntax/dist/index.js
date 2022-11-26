"use strict";
//Basic Types
let id = 5;
let company = "Donia skima";
let isPublished = false;
let x = 'Hello';
let age;
let ids = [2, 3, 2, 1, 8, 9];
let arr = [1, true, "hello"];
//Tuple
let person = [20, "Donia", true];
//Tuple Array
let employee;
employee = [
    [1, "Donia"],
    [2, "Marwa"],
    [3, "Jiji"],
];
//Union
let pid = 22;
pid = '22';
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["left"] = 3] = "left";
    Direction1[Direction1["Right"] = 4] = "Right"; //4
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Up); //1
console.log(Direction2.left); //Left
const user = {
    id: 1,
    name: "Donia",
};
//Type Assertion
let cid = 1;
// let customerId=<number>cid
let customerId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(2, 3));
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "Donia",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const Donia = new Person(1, "Donia");
const Jihen = new Person(2, "Jihen");
console.log(Donia, Jihen);
