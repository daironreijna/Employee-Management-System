//

// These lines make "require" available
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
const staffMembers = []
const idArray = []

const appMenu = () => {
    function createStaff() {
        console.log("Test")

    }
}

appMenu();

// TODO! these lines of code below need to be inserted into the createStaff function on line 25.
// import("inquirer").then((inquirer) => {

//TODO below throws an error 
// inquirer
//     .prompt([
//         {
//             type: "rawlist",
//             name: "employeeType",
//             message: "Which employee's details are you adding?",
//             choices: ["Manager", "Engineer", "Intern"]
// },

// {    name: "name",
//      type: input,
//      message: "Please provide the employee's name"
// validate: answer => {
//     if (answer !== "") {
//         return true
//     } else {
//         return "Please enter at least one character"
//      },

// {    name: "id",
//      type: input,
//      message: "Please provide their employee id"
//         },

// {    name: "emailAddress",
//      type: input,
//      message: "Please provide their email address",
//      validate = (answer) => {
//          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//          if (!emailRegex.test(answer)) {
//              return "You have to provide a valid email address!"
//          }
//          return true
//         },

// {    name: "staff.officeNumber",
//      type: input,
//      message: "Please provide the team manager's officeNumber"
// when: (answers) => answers.employeeType === "Manager",
//         },

// {    name: "school",
//      type: input,
//      message: "Please provide the Intern's school details"
//       validate(answer) {
//          if(!answer) {
//              return "Please, fill in their school name!"
//          }
//          return true
//      }
// when: (answers) => answers.employeeType === "Intern",
//         },

// {    name: "gitHub",
//      type: input,
//      message: "Please provide the Engineer's GitHub account",
//       validate(answer) {
//          if(!answer) {
//              return "Please, fill in the GitHub account name!"
//          }
//          return true
//      }
// when: (answers) => answers.employeeType === "Engineer",
//         },

// {
    //             type: "rawlist",
    //             name: "continue",
    //             message: "Would you like to generate the HTML page?""
    //             choices: ["Add more staff", "Delete and Start Afresh", "Render HTML Page"]
    // },

//TODO the last question should progress to the next stage, or carry out the other actions from the user.

//     ])
//     .then(answers => 
//     {
//        
//          if (answers.employeeType === "Manager") {
//        const manager = new Manager(answers.name, answers.id, answers.emailAddress, answers.officeNumber);
//  staffMember.push(manager);
//  idArray.push(answers.id);

//     } else if (answers.employeeType === "Engineer") {
//        const engineer = new Engineer(answers.name, answers.id, answers.emailAddress, answers.gitHub)
//  staffMember.push(engineer);
//  idArray.push(answers.id);

//     } else {

//    const intern = new Intern(answers.name, answers.id, answers.emailAddress, answers.school);
//  staffMember.push(intern);
//  idArray.push(answers.id);
// }



// );

