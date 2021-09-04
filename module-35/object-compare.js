const bottle = { name: "bottle", hold: "water", price: 56, isTrue: true };
const bottle2 = { name: "bottle", hold: "water", price: 56, isTrue: true };

// we cant compare non primitive data like this normal if else condition it will not work

// if (bottle === bottle2) {
//     console.log("equal");
// }
// else {
//     console.log("not equal");
// }

// there is also a shortcut way it will not work if object postion also not corrrect 
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 2, a: 1 };
// it only work for position same object
if (JSON.stringify(bottle) === JSON.stringify(bottle2)) {
    console.log("equal");
}
else {
    console.log("not equal");
}
// checking fro modified object
if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    console.log("equal");
}
else {
    console.log("not equal");
}
// now a perfect funciton for simple object check it will not work for nested object
function compareObject(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false;
        }
    }
    return true;
}

const result1 = compareObject(bottle, bottle2);
console.log("bottle object result", result1);
const result2 = compareObject(obj1, obj2);
console.log("object result", result2);
// both object trues for comparision so this function work properly in simple object object case
