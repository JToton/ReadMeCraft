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
    message: "Enter the project title:".underline.green,
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project:".yellow,
  },
  {
    type: "input",
    name: "installation",
    message: "Enter the installation instructions:".yellow,
  },
  {
    type: "input",
    name: "usage",
    message: "Enter the usage information:".yellow,
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:".yellow,
    choices: [
      "MIT".blue,
      "Apache 2.0".blue,
      "GPL 3.0".blue,
      "BSD 3-Clause".blue,
      "None".blue,
    ],
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter the contribution guidelines:".yellow,
  },
  {
    type: "input",
    name: "tests",
    message: "Enter the test instructions:".yellow,
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:".yellow,
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:".yellow,
  },
  {
    type: "input",
    name: "screenshot",
    message: "Enter the relative path to the screenshot image:".yellow,
  },
  {
    type: "checkbox",
    name: "technologies",
    message: "Select the technologies used in the project:".yellow,
    choices: [
      "Node.js".blue,
      "Inquirer".blue,
      "Colors".blue,
      "JavaScript".blue,
      "Python".blue,
      "Java".blue,
      "C++".blue,
    ],
  },
  {
    type: "input",
    name: "features",
    message: "Enter the features of your project (comma-separated):".yellow,
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("README file generated successfully!".yellow);
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
