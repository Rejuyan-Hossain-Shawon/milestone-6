const numbers = [234, 54, 36, 7647, 7, 6, 78, 8, 5];

// array reference 
const referenceArray = numbers;

// if we push new elemnt to array that also shown in reference array
numbers.push(45);
// new push element both variable
console.log(referenceArray);

// copy an array with help spread 

const numbers2 = [11, ...numbers, 55];
// here this will effect only numbers arraay not in numbers2 array
numbers.push(100);
console.log(numbers2);
console.log("I ma th" + "\n" + "afgohg");
const division = num1,
    num2 => console.log(num1 / num2);
division(3, 4)
console.log(division)