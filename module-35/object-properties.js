const bottle = { name: "bottle", hold: "water", price: 56, isTrue: true }

// only keys of this object we can get 
const keys = Object.keys(bottle);
// console.log(keys);
// only avlues of this object we can get 
const values = Object.values(bottle);
// console.log(values);
// seal that object for any propert cant add or delete
// Object.seal(bottle);
// freeze an opbject no action can be taken on that object
Object.freeze(bottle);
// deleyte an Object properties
delete bottle.isTrue;
console.log(bottle);