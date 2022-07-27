const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const emailValidator = require('email-validator'); //might need to install email validator

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");
const { generateKey } = require("crypto");

let team = [];
let canAddManager = true;

const questions = {

    // MANAGER QUESTIONS
    Manager: [
        {
            type: "input",
            name: "name",
            message: "Name of manager?",
            Validate: (value) => {
                if (value) {
                    return true
                } else { return "Enter manager's name." }
            },
        },
        {
            type: "input",
            name: "id",
            message: "Managers id?",
            Validate: (value) => {
                if (value) {
                    return true
                } else { return "Enter manager's id." }
            },
        },
        {
            type: "input",
            name: "email",
            message: "Managers email?",
            Validate: (value) => {
                if (value) {
                    return true
                } else { return "Enter manager's email." }
            },
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Managers office number?",
            Validate: (value) => {
                if (value) {
                    return true
                } else { return "Enter manager's office number." }
            },
        },
        {
            type: "list",
            name: "addNew", //might change to addNew
            message: "Add more employees?",
            choices: ["yes", "no", "maybe"]
        }
    ],

    //ENGINEER QUESTIONS
    Engineer: [
        {
            type : "input",
            name: "name",
            message: "Engineer name?",
            Validate: (value) => {
                if (value) {
                    return true
                } else { return "Enter engineer's name."}
            },
        },
        {
            type : "input",
            name: "id",
            message: "Engineer id?",
            Validate: (value) => {
                if (value) {
                    return true
                } else { return "Enter engineer's id."}
            },
        },
        {
            type : "input",
            name: "email",
            message: "Engineer email?",
            Validate: (value) => {
                if (value) {
                    return true
                } else { return "Enter engineer's email."}
            },
        },
        {
            type : "input",
            name: "github",
            message: "Engineer github?",
            Validate: (value) => {
                if (value) {
                    return true
                } else { return "Enter engineer's github."}
            },
        },
        {
            type : "list",
            name: "addNew", //might change to addNew
            message: "Add more employees?",
            choices: ["yes", "no"]
        }
    ],

    //INTERN QUESTIONS
    Intern: [
        {
            type: "input",
            name: "name",
            message: "Intern name?",
            Validate: (value) => {
                if (value) {
                    return true
                } else { return "Enter intern's name."}
            },
        },
        {
            type: "input",
            name: "id",
            message: "Intern id?",
            Validate: (value) => {
                if (value) {
                    return true
                } else { return "Enter intern's id."}
            },
        },
        {
            type: "input",
            name: "email",
            message: "Intern email?",
            Validate: (value) => {
                if (value) {
                    return true
                } else { return "Enter intern's email."}
            },
        },
        {
            type: "input",
            name: "college",
            message: "Intern's current school?",
            Validate: (value) => {
                if (value) {
                    return true
                } else { return "Enter intern's school."}
            },
        },
        {
            type: "list",
            name: "addNew", //might change to addNew
            message: "Add more employees?",
            choices: ["yes", "no"]
        }
    ]
};

const selectEmployee = [
    {
        type: "list",
        name: "employeeLevel",
        message: "Choose employee level",
        choices: ["Manager", "Engineer", "Intern"],
    }
];

function addNewEmployee() {
    inquirer.prompt(selectEmployee)
        .then(answer =>{
            console.log(answer.employeeLevel);

            if (answer.employeeLevel === "Manager") {
                if (canAddManager) {
                    inquirer.prompt(questions.Manager)
                        .then(answer => {
                            const manager = new Manager
                                (
                                    answer.name,
                                    answer.id,
                                    answer.email,
                                    answer.officeNumber
                                );
                    
                            team.push(manager);
                            canAddManager = false;
                            if (answer.addNew === "yes") {
                                addNewEmployee();
                            } else {
                                generate();
                            }
                        });
                } else {

                    console.log("too many manager")
                    addNewEmployee();
                }

            } else if (answer.employeeLevel === "Engineer") {
                inquirer.prompt(questions.Engineer)
                    .then(answer => {

                        const engineer = new Engineer
                            (
                                answer.name,
                                answer.id,
                                answer.email,
                                answer.github
                            );

                            team.push(engineer);
                            if (answer.addNew === "yes") {
                                addNewEmployee();
                            } else {
                                generate();
                            };
                    });
            } else if (answer.employeeLevel === "Intern") {
                inquirer.prompt(questions.Intern)
                    .then(answer => {

                        const intern = new Intern
                            (
                                answer.name,
                                answer.id,
                                answer.email,
                                answer.college
                            );

                        team.push(intern);
                        if (answer.addNew === "yes") {
                            addNewEmployee();
                        } else {
                            generate();
                        };
                    });
            };

        });

};

addNewEmployee();

function generate() {
    fs.writeFileSync(outputPath, render(team), "utf-8");
    process.exit(0);
}