

// ========== Structural Types ==========

// interface Point{
//     x:number,
//     y:number
// }

function logPoint(p:Point):void{
    console.log(`x = ${p.x} , y = ${p.y}`);
}

// const point3D = {x:1,y:2,z:3};

// logPoint(point3D); // it works because of structural typing
// console.log("structural typing compleated");

function greet(person:string , date :Date):void{
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

// greet("SAyed",Date());

greet("Sayed", new Date());