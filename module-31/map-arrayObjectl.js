const products = [
    { name: "watch", price: 20 },
    { name: "pen", price: 20 },
    { name: "laptop", price: 20 },
    { name: "desktop", price: 20 }
]
let price = 0;
// map alwayes return 

const price2 = products.map(product => price += product.price);
console.log(price, price2);
// foreach funcition dont return any value
const price3 = products.forEach(product => price += product.price);
// here price 3 == undefined because it doesnot reutrn any value
console.log(price3);
