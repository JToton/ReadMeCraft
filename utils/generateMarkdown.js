// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  }

  let badgeUrl = "";

  switch (license) {
    case "MIT":
      badgeUrl = "https://img.shields.io/badge/License-MIT-yellow.svg";
      break;
    case "Apache 2.0":
      badgeUrl = "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
      break;
    case "GPL 3.0":
      badgeUrl = "https://img.shields.io/badge/License-GPLv3-blue.svg";
      break;
    case "BSD 3-Clause":
      badgeUrl =
        "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg";
      break;
    default:
      return "";
  }

  return `![License](${badgeUrl})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  }
  return `\n* [License](#license)\n`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  }
  return `## License\nThis project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const tableOfContents = `## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Questions](#questions)
`;

  const features = data.features
    .split(",")
    .map((feature) => `- ${feature.trim()}`)
    .join("\n");

  const technologies = data.technologies
    .map((technology) => `- ${technology}`)
    .join("\n");

  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

${tableOfContents}

## Installation
${data.installation}

## Usage
${data.usage}

## Screenshot
![Screenshot](${data.screenshot})

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Technologies Used
${technologies}

## Features
${features}

## Questions
If you have any questions about the project, you can reach me at ${data.email}.
You can find more of my work at [${data.github}](https://github.com/${
    data.github
  }/).
`;
}

module.exports = generateMarkdown;
