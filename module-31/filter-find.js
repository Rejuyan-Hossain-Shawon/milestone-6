const numbers = [12, 4, 5, 654, 742, 24, 5, 67, 8, 7, 5, 3, 6, 9];
// i am going to filter this array with even numbers 
const even = numbers.filter(num => num % 2 == 0);

// now i m going to use find method to find an element it will help to find an element only dont return all element
const result = numbers.find(num => num == 5);


console.log(even);
console.log(result);