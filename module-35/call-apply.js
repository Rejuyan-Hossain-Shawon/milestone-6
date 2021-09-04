const kibria = {
    name: "kibria",
    money: 5000,
    age: 22,
    treatde: function (expense, boksis, tax) {
        console.log(this);
        this.money -= expense + boksis + tax;
        console.log(this);



    }
}
// we can use method fron another object with call and apply  method 

const shawon = {
    name: "shawon",
    money: 50000,
    age: 22,

}

const akash = {
    name: "aksh",
    money: 500,
    age: 22,

}

/* 
call for another object method using
*/

kibria.treatde.call(shawon, 10000, 700, 300);
kibria.treatde.call(akash, 200, 50, 50);


/* 
apply method for using another object method 
*/

kibria.treatde.apply(shawon, [3000, 500, 500]);
kibria.treatde.apply(akash, [150, 25, 5]);
