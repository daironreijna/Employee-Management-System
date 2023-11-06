# The Employee Management System

## Table of Contents

- [Description](#description)
- [Video Walkthrough](#video-walkthrough)
- [Contributing](#contributing)
- [Accessibility testing](#accessibility-testing)
- [Resources](#resources)
- [Licence](#license)


## Description

The Employee Management System is a command-line application built using Node.js. Its purpose is to help users generate an HTML webpage that contains detailed information about their team members, including managers, engineers, and interns. This application simplifies the process of creating an organized and professional-looking webpage to showcase your team's essential details.

**Key Features:**

1. **Adding Employees:** The program allows the user to add an arbitrary number of employees to their team. They can input information for managers, engineers, and interns. The application guides users through entering the following details for each employee:
   - **Name:** The employee's name.
   - **ID:** A unique employee identification.
   - **Email:** The employee's email address.

2. **Role-Specific Information:** Depending on the type of employee (Manager, Engineer, Intern), the application prompts for role-specific details:
   - **Managers:** Office number.
   - **Engineers:** GitHub username.
   - **Interns:** School name.

3. **Generating HTML Page:** Users can choose to generate an HTML webpage once they've added all the desired employees. The application formats and displays the employee information in a clean and structured way.

4. **Flexible Editing:** The program provides the flexibility to return to add more employees or to exit. Existing employee information is retained, allowing users to build their team incrementally.

**Technologies Used:**

- **Node.js:** The program is built using Node.js, enabling server-side JavaScript execution.

- **Inquirer:** Inquirer.js is used to interact with the user through the command line, collecting employee information.

- **Jest:** Jest is utilized for testing to ensure the accuracy and reliability of the code.

- **Babel:** Babel is used to transpile modern JavaScript code to ensure compatibility across various Node.js environments.

**How to Use:**

To run the program, execute `npm start` in the command line. Follow the prompts to add employees and generate the HTML page.

This Employee Management System simplifies the process of organizing team details and creating an HTML representation, making it an invaluable tool for project managers and teams looking for an efficient way to display their team's information.

## Video Walkthrough

### Attempt 1
<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/fedde7fa3b4e407998209e367a0ff05a?sid=544b031a-3f48-4fae-a847-cc1b844351aa" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

### Attempt 2
<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/fedde7fa3b4e407998209e367a0ff05a?sid=f14be65f-2181-4983-bd5a-d0ff008d057c" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

## Contributing

I welcome contributions from the community to enhance the Bootstrap Portfolio Project. By participating in this project, you contribute to a vibrant and inclusive environment. To ensure a positive experience the code of conduct we will adhere to is based on [The Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md). Please review and follow these guidelines when contributing.

## Accessibility Testing
I aim to ensure websites that I build are built with accessibility in mind. I welcome feedback, and would ask that you test for accessibility by visiting this page: [Accessibility Testing and Inclusive Design](./assets/Accessibility%20Testing%20and%20Inclusive%20Design.md).

## Resources

Resources accessed whilst building this program

- <i>[Dillion Megida (2022) module.exports – How to Export in Node.js and JavaScript. FreeCodeCamp](https://www.freecodecamp.org/news/module-exports-how-to-export-in-node-js-and-javascript/)
- [W3Schools (n.d.) JavaScript Class Inheritance](https://www.w3schools.com/js/js_class_inheritance.asp) 
- [jostronic (2019 updated 2021) How To Create Interactive Command-line Prompts with Inquirer.js](https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts)
- [Class Tutorial (2023) Week 12 challenge](https://zoom.us/rec/play/9hES7F9FyBcRAcLqhqW-EH2SFKDZmrfmfTadumSPxh6MS6HeZJEoS6iE4ioBGc1EdfXpUwBRIr0Y7aAD.5pHucY8Xcu5qmoP_?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fzoom.us%2Frec%2Fshare%2FjiWVNjJCRTS6S4Pi9K6Zt-Sih3Cnfi7T0DFY2fCFHC4U2-jspixR6GAFPfLp324j.2JTLbOAfkCYcrqrg%2520)
</i>

## License
This project is licensed under [MIT License](./LICENSE).

---
© 2023 Dairon Reijna. Confidential and Proprietary. All Rights Reserved.