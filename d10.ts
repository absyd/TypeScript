const str:string = "hello";
const num:number = 23;
const bool:boolean = true;

// console.log(str);
// console.log(num);
// console.log(bool);

const str2:string = "hello";
const num2:number = 23;
const bool2:boolean = true;

// console.log(str2);
// console.log(num2);
// console.log(bool2);

// array 
const arr1:number[] = [1,2,3,4,5];
const arr2:Array<string> = ["a","b","c","d"];
const arr3:string[] = ["a","b","c","d"];

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);


// object

interface User{
    name:string,
    id:number
}

// any type

let obj1:any = {x:0};
obj1.foo = "hello";
// console.log(obj1.foo);

// function returning promise

async function getUser():Promise<number>{
    return 42;
}


(async () => {
    const userId = await getUser();
    // console.log(userId);
})();




const names =[
    {name:"alex", age:23},
    {name:"bob", age:34},
    {name:"john", age:45}]

    // names.forEach(name => console.log(name.name));



function greet(person:{fName:string, lName?:string}):string{
    if(person.lName){
        return `Hello, ${person.fName} ${person.lName}`;
    }
    return `Hello, ${person.fName}  `;
}

const user1 = {fName:"Alex"};
// console.log(greet(user1));


// union types
function printId(id:number | string){
    console.log("Your ID is: " + id);
}

// printId(101);
// printId("1s01");
// printId({name:"alex"} );  // error 
// printId({name:"alex"} as any); // works ->converts to any type that is  required

type Point = {
    x:number,
    y:number
}


function printCoordinates(pt:Point){
    console.log(`x = ${pt.x} , y = ${pt.y}`);
}

printCoordinates({x:100, y:200});

interface Pointt{
    x:number,
    y:number
}

function printCoordinates2(pt:Pointt){
    console.log(`x = ${pt.x} , y = ${pt.y}`);
}

// printCoordinates2({x:100, y:200});

// type assertions 
// const myCanvas = document.getElementById("myCanvas") as HTMLCanvasElement;

// literal types 
let x:"Hello" = "Hello";
// x = "hi"; // error

let y:1 | 2 | 3 = 1;
// y = 4; // error

function printText(s:string, alignment:"left" | "right" | "center"){
    // ...
}

// printText("Hello, world", "left");
// printText("G'day, mate", "centre"); // error

