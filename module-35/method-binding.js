const kibria = {
    name: "kibria",
    money: 5000,
    age: 22,
    treatde: function (expense) {
        console.log(this);
        this.money -= expense;
        console.log(this);



    }
}
// kibria.treatde(500);


// bind use for object method use in both object
const shawon = {
    name: "shawon",
    money: 50000,
    age: 22,

}
const shawonTreatde = kibria.treatde.bind(shawon);
shawonTreatde(4900);


const akash = {
    name: "aksh",
    money: 500,
    age: 22,

}

const aksahsTreatDe = kibria.treatde.bind(akash);
aksahsTreatDe(499);