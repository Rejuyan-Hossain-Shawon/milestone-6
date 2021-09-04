class TeamMember {
    name;
    address = "BD";
    constructor(name, address) {
        this.name = name;
        this.address = address;

    }
}

class Support extends TeamMember {
    groupSupportTime;
    designation = "support web Dev";
    constructor(name, address, time) {
        super(name, address);
        this.groupSupportTime = time;

    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

class StudentCare extends TeamMember {
    designation = "care web developer";
    builRoutine(student) {
        console.log(this.name, "build a routine for ", student);
    }
}

class NeptuneDev extends TeamMember {
    codeEditor;
    designation = "Neptune App dev";
    constructor(name, address, editor) {
        super(name, address)
        this.codeEditor = editor;
    }
    relseApp(version) {
        console.log(this.name, "release app version", version);
    }
}

const aamir = new Support('Aamir Khan', 'BD');
const salman = new Support('Solaiman Khan', 'Dubai');
const sharuk = new Support('SRK Khan', 'Dubai');
const akshay = new Support('Akshay Kumar', 'Dubai', 11);
const lila = new StudentCare("sulayman", "pakistan");

// console.log(lila);
// lila.builRoutine("lila");
const rafiq = new NeptuneDev("Rafiq", "Dhaka", "VS Code");
console.log(akshay);
akshay.startSession();
// rafiq.relseApp("1.245.446");
// aamir.startSession();
// salman.startSession();
// console.log(aamir, salman, sharuk, akshay);
// console.log(salman);