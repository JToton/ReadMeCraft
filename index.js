// *Included packages needed for this application.
const inquirer = require("inquirer");
const fs = require("fs");
const colors = require("colors");
const badgeMaker = require("badge-maker");
const generateMarkdown = require("./utils/generateMarkdown");

// *Array of questions for user input.
// *Colors added to cmd prompts to add a little style.
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
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3-Clause", "None"],
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
    message: "Enter the features of your project (comma-separated):".yellow,
  },
];

// *Function to write README file.
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("README file generated successfully!".yellow);
  });
}

// *Function to initialize app.
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdownContent = generateMarkdown(answers);
    writeToFile("README.md", markdownContent);
  });
}

// *Function call to initialize app.
init();
