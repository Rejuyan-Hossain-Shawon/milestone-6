// function defines inside of a object called method
const student = {
    name: 'shawon',
    id: 1821511688,
    salary: 5000,
    subject: ["bangla", 'english', 'mathematics', 'softwere'],
    takingExam: function () {
        console.log(this.name, "get ready for exam");
    },
    korchapati: function (joleJaibo, boksis) {
        this.salary -= joleJaibo + boksis;
        return this.salary;

    }

}
console.log(student);
student.takingExam();
const result = student.korchapati(550, 50);
console.log(result);
