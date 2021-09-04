function add(num1, num2 = 100) {
    // parameter default value by ES6 if we dont give the second value it will take default value and funciton will work
    // option 2
    // num2 = num2 || 30;
    // option 1 

    /*  if (num2 == undefined) {
         num2 = 15;
     } */

    return num1 + num2;
}

console.log(add(12));