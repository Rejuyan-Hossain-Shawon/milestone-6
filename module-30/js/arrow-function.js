const add = (num1, num2) => num1 + num2;
// function without parameter
const getName = () => "Rejuyan HOssain SHaown";
// fucntion with single parameter
const tenTimes = num => num * 10;
// function with multiple line
const math = (num1, num2) => {
    const sum = num1 + num2;
    const result = sum * 10;
    return result;
}

console.log(math(3, 5));
console.log(getName());
console.log(tenTimes(12));