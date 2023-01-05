const inquirer = require("inquirer");
const fs = require("fs");

const generateReadme = ({ title, name, description, installation, usage, license, email, tests, github, linkedin }) =>
  `# ${title}

  ## Description

  Hello my name is ${name}, and this is my project.
  
  ${description}
  
  ## Installation
  
  To install this application you will need to ${installation}
  
  ## Usage
  
  This is how you use this application:
  ${usage}
  
  ## License
  
  I used ${license} for this project.

  ## How to Contribute

  If you have any suggestions on how this runs, please contact me at ${email}.

  
  ## Tests
  
  To test this yourself, ${tests}
  
  ## Questions and Contact

  For any further questions and contact information, please email me at ${email} or view the following
  
  My linkedIn: https://www.linkedin.com/in/${linkedin}
  My Github: https://github.com/${github}`;

  inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "description",
      message: "Please write a detailed description of what your project does."
    },
    {
      type: "input",
      name: "installation",
      message: "Please write a detailed explination of how to install this application."
    },
    {
      type: "input",
      name: "usage",
      message: "Please write a detailed description of how to use this application."
    },
    {
      type: "input",
      name: "tests",
      message: "Please write a detailed description on how to test this application."
    },
    {
      type: "list",
      message: "Please select the type of license you used for this application.",
      name: "license",
      choices: ['Apache 2.0', 'GNU 3.0', 'MIT', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost 1.0', 'Creative Commons Zero 1.0', 'Eclipse 2.0'],
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address.",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username.",
    },
    {
      type: "input",
      name: "linkedin",
      message: "Enter your LinkedIn URL.",
    },
  ])
