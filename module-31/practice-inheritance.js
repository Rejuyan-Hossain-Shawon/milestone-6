class TeamMember {
    name;
    address;

    constructor(name, address) {
        this.name = name;
        this.address = address;

    }

}

class Support extends TeamMember {


    desigantion = "Instructor";

    startSeasion() {
        console.log(this.name, "start a seasion for web developers help");
    }

}
class StudentCare extends TeamMember {
    designation = "Student Care"
    buildRoutine(studentName) {
        console.log(this.name, "Bulid a routine for", studentName);

    }

}

class NeptuneAppDeveloper extends TeamMember {
    designation;
    constructor(name, address, desigantion) {
        super(name, address);
        this.designation = desigantion;

    }
    appRelease(verision) {
        console.log(this.name, "Realese app version", verision);

    }

}
const rafiq = new Support("Rafiq", "Dhaka");
const ruifta = new StudentCare('rejuyan', "sylhet");
const shawon = new NeptuneAppDeveloper("Rejuyan Hossain Shawon", "shaistaganj", "Junior Web Developer");


console.log(shawon);
shawon.appRelease("2.o.1")