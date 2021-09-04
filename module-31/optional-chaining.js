const fish = {
    name: "tenua ilisha",
    age: 200,
    mobile: 9987256, address: {
        city: "dhaka",
        country: "bangladesh",
        river: {

            one: "padma",
            two: "meghna",
            third: "jumuna"
        }

    }


}
// how to handle undefined property with optional chaining
// console.log(fish.address.river.fourth.final); full error
// now its showing   undefined way
console.log(fish.address.river?.fourt?.final);
