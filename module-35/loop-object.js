// we can use for in loop for object 
const bottle = { name: "bottle", hold: "water", price: 56, isTrue: true };
// simply we get the keys of an object with this loop then we can use object destructuring for get that values too
for (const prop in bottle) {
    console.log(prop, bottle[prop]);
}