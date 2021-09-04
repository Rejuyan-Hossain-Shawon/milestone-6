class School {
    name;
    class = 8;
    roll;
    gpa;
    constructor(name, level, roll, gpa) {
        this.name = name;
        this.roll = roll;
        this.gpa = gpa;
        this.class = level;



    }
    intro() {
        console.log(this.name, "gpa is", this.gpa)
    }
}
const rejuyan = new School("rejyan", "UNniversity 3rd year", "182-15-11688", 3.5);

console.log(rejuyan);
rejuyan.intro();