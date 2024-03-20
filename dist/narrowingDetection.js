"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 2;
}
function checkNull(val) {
    if (!val) {
        console.log("Enter some val");
        return;
    }
    return val.toLowerCase();
}
function printAll(strs) {
    if (strs) { // checking null
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            return "yeah";
        }
    }
} // edge case being it's an empty string.
function DetermineAdmin(account) {
    if ("isAdmin" in account) {
        return account.email;
    }
}
//instanceof
function getInstance(val) {
    if (val instanceof Date) {
        console.log(val.toUTCString());
    }
    else {
        console.log(val.toLowerCase());
    }
}
function isFish(pet) {
    return pet.swim() !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish Food";
    }
    else {
        pet;
        return "Bird Food";
    }
}
function getShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
}
// Type Exhuastivness - Exhaustiveness is using never for default Case.
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.breadth;
        default:
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
