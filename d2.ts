console.log("\n\n\nHello Typescript Day-2\n\n\n");
const user ={
    name:"Nikhil",
    id:23
}

console.log(user);

// defining the interface

interface User{
    name:string,
    id:number,
}

const user2:User = {
    name:"Nikhil2",
    id:23
}

console.log(user2);

// using the interface
function greet(user:User){
    console.log(`Hello ${user.name} your id is ${user.id}`);
}

// const user3:User = {
//     name:"Nikhil2",
//     id:"23"
// }

// creating classes
class UserAccount{
    name:string;
    id:number;

    print():void{
        console.log(`Hello ${this.name} your id is ${this.id}`);
    }
    constructor(name:string,id:number){
        this.name = name;
        this.id = id;
    }

}

const user4:UserAccount = new UserAccount("Absyder",20);
user4.print();




// function interfacing
function greetUser(user:User):void{
    console.log(`Hello ${user.name} your id is ${user.id}`);
}

greetUser(user4);




// composinh types
type MyBool= true | false;

// type uses , window states
type WindowState = "normal" | "minimized" | "maximized" | "full-screen";
type LockedState = "unlocked" | "locked" | "locked-and-hidden";

// const ws:WindowState = "ndsfdformal";
const ls:LockedState = "unlocked";

// console.log(ws);
// console.log(ls);



const nbrs: number[] = [1,2,3,4,5];
const strs: string[] = ["one","two","three"];


function printNbrs(nbrs:number[]):void{
    nbrs.forEach(nbr => console.log(nbr));
}

// printNbrs(nbrs);

function printStrs(strs:string[]):void{
    strs.forEach(str => console.log(str));
}
// printStrs(strs);



console.log(typeof nbrs);
console.log(typeof UserAccount);
console.log(typeof ls);


//  ==== GEnerics ====

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectArray = Array<object>;

const strArr:StringArray = ["one","two","three"];
const numArr:NumberArray = [1,2,3,4,5];
const objArr:ObjectArray = [{name:"Nikhil"},{name:"Absyder"}];

interface BackPack<Type>{
    add: (obj:Type) => void;
    get: () => Type;
}

// declare const backpack: BackPack<string>;

// const obj = backpack.get();
// backpack.add("hello");

// console.log(obj);



// ========== Structural Types ==========

interface point{
    x:number,
    y:number
}

function logPoint(p:point):void{
    console.log(`x = ${p.x} , y = ${p.y}`);
}

const point3D = {x:1,y:2,z:3};

logPoint(point3D); // it works because of structural typing