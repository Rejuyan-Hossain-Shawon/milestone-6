const fish = {
    name: "tenua ilisha",
    age: 200,
    mobile: 9987256,
    address: {
        city: "dhaka",
        country: "bangladesh",
        river: {
            one: "padma",
            two: "meghna",
            third: "jumuna"
        }

    }


}
const { name, address } = fish;
console.log(name, address);
// object distructuring
const { one, two, third } = fish.address.river;

console.log(one, two, third);