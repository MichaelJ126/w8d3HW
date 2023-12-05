"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const shapes_1 = require("./shapes");
function testMe(name) {
    console.log(name);
}
testMe('Joey Wheeler');
// noImplicitAny
// set to true
// function implicitAny(id):number {
//     return id
// }
// noImplicitReturns
// set to true
// make sure functions with return types actually return something
// function noImplicitReturns(name:string):string{
//     console.log(name)    
// }
// noUnusedLocals
//set to true
// function unusedLocals(): void {
//     let unused = 5
//     console.log("yolo")
// }
//noUnusedParameters
//set to true
// function unusedParameters(id: number):void {
//     console.log("you're a goofy goober")
// }
//strictNullChecks
// set to true
// function strictNullChecks(id: number): void {
//     console.log(id)
// }
// strictNullChecks(null)
//allowUnreachableCode
// set to false
// function unreachable(id: number):number{
//     while(typeof id === "number"){
//         // break
//     }
//     return id
// }
// noImplicitOverrides
//set to true
// class Father {
//     constructor(public age: number){}
//     playSmash():string{
//         return "get rekt my son"
//     }
// }
// class Son extends Father {
//     override playSmash():string {
//         return "one day i shall defeat you, father. and regain my honor"
//     }
// }
let myUuid = (0, uuid_1.v4)();
console.log(myUuid);
let myStar = new shapes_1.Star(50);
console.log(myStar);
let mySquare = new shapes_1.Square(123);
console.log(mySquare);
let myCircle = new shapes_1.Circle(125);
console.log(myCircle);
