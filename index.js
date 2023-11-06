import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import path from "path";
// Use fs.promises for async file operations
import fs from "fs/promises";
import inquirer from "inquirer";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

const OUTPUT_DIR = path.resolve(new URL(import.meta.url).pathname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

import render from "./src/page-template.js";

const employeeData = [];

async function gatherInformation() {
    try {
        console.log('Test to confirm that node index.js works!');
        await processEmployeeData();
    } catch (error) {
        console.error("An error occurred: ", error);
    }
}

async function processEmployeeData() {
    
    while (true) {
        const questionOne = await getEmployeeType();

        if (questionOne.employeeType === "None") {
            break; // Exit the loop if "None" is selected
        }

        const answers = await getEmployeeDetails(questionOne);

        if (questionOne.employeeType === "Manager") {
            const manager = new Manager(answers.name, answers.id, answers.emailAddress, answers.officeNumber);
            employeeData.push(manager);
        } else if (questionOne.employeeType === "Engineer") {
            const engineer = new Engineer(answers.name, answers.id, answers.emailAddress, answers.gitHub);
            employeeData.push(engineer);
        } else if (questionOne.employeeType === "Intern") {
            const intern = new Intern(answers.name, answers.id, answers.emailAddress, answers.school);
            employeeData.push(intern);
        }
    }

    const continueAnswer = await renderHTML();

    if (continueAnswer.continue === "Render HTML Page") {
        generateHTML(employeeData);
    } else if (continueAnswer.continue === "Delete and Start Afresh") {
        employeeData.length = 0; // Clearing the array and starting fresh
        gatherInformation();
    } else if (continueAnswer.continue === "Exit the program") {
        return;
    } else {
        // Go back and add more staff.
        gatherInformation();
    }
}

async function getEmployeeType() {
    return inquirer.prompt({
        type: "rawlist",
        name: "employeeType",
        message: "Which employee's details are you adding?",
        choices: ["Manager", "Engineer", "Intern", "None"]
    });
}

async function getEmployeeDetails(questionOne) {
    return inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Please provide the employee's name",
            validate: (answer) => answer.trim().length > 0,
        },
        {
            name: "id",
            type: "input",
            message: "Please provide their employee id",
            validate: (answer) => answer.trim().length > 0,
        },
        {
            name: "emailAddress",
            type: "input",
            message: "Please provide their email address",
            validate: (answer) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(answer),
        },
        {
            name: "officeNumber",
            type: "input",
            message: "Please provide the team manager's office number",
            validate: (answer) => answer.trim().length > 0,
            when: () => questionOne.employeeType === "Manager",
        },
        {
            name: "school",
            type: "input",
            message: "Please provide the Intern's school details",
            validate: (answer) => answer.trim().length > 0,
            when: () => questionOne.employeeType === "Intern",
        },
        {
            name: "gitHub",
            type: "input",
            message: "Please provide the Engineer's GitHub account",
            validate: (answer) => answer.trim().length > 0,
            when: () => questionOne.employeeType === "Engineer",
        },
    ]);
}

async function renderHTML() {
    return inquirer.prompt({
        type: "rawlist",
        name: "continue",
        message: "Would you like to generate the HTML page?",
        choices: ["Add more staff", "Delete and Start Afresh", "Render HTML Page", "Exit the program"],
    });
}

async function generateHTML(data) {
    const htmlContent = render(data);
    try {
        await fs.writeFile('team.html', htmlContent, 'utf8');
        console.log('team.html has been generated.');
    } catch (err) {
        console.error("Error generating HTML page:", err);
    }
}

gatherInformation();
