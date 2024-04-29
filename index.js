// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const colors = require("colors");
const badgeMaker = require("badge-maker");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the project title:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter the installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter the usage information:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3-Clause", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter the contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter the test instructions:",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
  {
    type: "input",
    name: "screenshot",
    message: "Enter the relative path to the screenshot image:",
  },
  {
    type: "checkbox",
    name: "technologies",
    message: "Select the technologies used in the project:",
    choices: [
      "Node.js",
      "Inquirer",
      "Colors",
      "JavaScript",
      "Python",
      "Java",
      "C++",
    ],
  },
  {
    type: "input",
    name: "features",
    message: "Enter the features of your project (comma-separated):",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("README file generated successfully!".green);
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdownContent = generateMarkdown(answers);
    writeToFile("README.md", markdownContent);
  });
}

// Function call to initialize app
init();
