const Employee = require("./Employee");

module.exports = class Intern extends Employee {
    constructor(name, id, email, college) {
        super(name, id, email);
        this.college = college;
    }

    getGithub() {
        return this.college;
    }

    getRole() {
        return "Intern";
    }
}