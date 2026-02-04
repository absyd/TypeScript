var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var str = "hello";
var num = 23;
var bool = true;
// console.log(str);
// console.log(num);
// console.log(bool);
var str2 = "hello";
var num2 = 23;
var bool2 = true;
// console.log(str2);
// console.log(num2);
// console.log(bool2);
// array 
var arr1 = [1, 2, 3, 4, 5];
var arr2 = ["a", "b", "c", "d"];
var arr3 = ["a", "b", "c", "d"];
// any type
var obj1 = { x: 0 };
obj1.foo = "hello";
// console.log(obj1.foo);
// function returning promise
function getUser() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, 42];
        });
    });
}
(function () { return __awaiter(_this, void 0, void 0, function () {
    var userId;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getUser()];
            case 1:
                userId = _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
var names = [
    { name: "alex", age: 23 },
    { name: "bob", age: 34 },
    { name: "john", age: 45 }
];
// names.forEach(name => console.log(name.name));
function greet(person) {
    if (person.lName) {
        return "Hello, ".concat(person.fName, " ").concat(person.lName);
    }
    return "Hello, ".concat(person.fName, "  ");
}
var user1 = { fName: "Alex" };
// console.log(greet(user1));
// union types
function printId(id) {
    console.log("Your ID is: " + id);
}
function printCoordinates(pt) {
    console.log("x = ".concat(pt.x, " , y = ").concat(pt.y));
}
printCoordinates({ x: 100, y: 200 });
function printCoordinates2(pt) {
    console.log("x = ".concat(pt.x, " , y = ").concat(pt.y));
}
// printCoordinates2({x:100, y:200});
// type assertions 
// const myCanvas = document.getElementById("myCanvas") as HTMLCanvasElement;
// literal types 
var x = "Hello";
// x = "hi"; // error
var y = 1;
// y = 4; // error
function printText(s, alignment) {
    // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre"); // error
