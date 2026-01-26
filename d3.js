// ========== Structural Types ==========
function logPoint(p) {
    console.log("x = ".concat(p.x, " , y = ").concat(p.y));
}
// const point3D = {x:1,y:2,z:3};
// logPoint(point3D); // it works because of structural typing
// console.log("structural typing compleated");
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
// greet("SAyed",Date());
greet("Sayed", new Date());
