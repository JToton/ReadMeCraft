// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const colors = require(`colors`);
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
    type: "input",
    name: "deployedLink",
    message: "Enter the link to the deployed application:",
  },
  {
    type: "input",
    name: "technologies",
    message: "Enter the technologies used in the project (comma-separated):",
  },
  {
    type: "input",
    name: "tableOfContents",
    message: "Enter the table of contents sections (comma-separated):",
    default: "Installation, Usage, License, Contributing, Tests, Questions",
  },
  {
    type: "input",
    name: "featuresTitle",
    message: "Enter the title for the features section:",
    default: "Features",
  },
  {
    type: "input",
    name: "features",
    message: "Enter the features of your project (comma-separated):",
  },
  // ! End of Questions Asked.
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
