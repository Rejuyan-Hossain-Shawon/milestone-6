const bank = (name) => {
    owner = name;
    balane = 0;
    return {
        deposit: (amount) => {
            balane += amount;
            return balane;

        },
        withdraw: (amount) => {
            balane -= amount;
            return balane;

        },
        Myac: () => console.log(owner, balane)
    }


}
// we cant acces the inside function from outiside otherwise we dont return any function to access that inside of function

const shawon = bank('shawon');

console.log(shawon.deposit(500));
console.log(shawon.deposit(600));
console.log(shawon.deposit(700));
console.log(shawon.deposit(1200));
console.log(shawon.withdraw(1000));
console.log(shawon.withdraw(1500));
shawon.Myac();