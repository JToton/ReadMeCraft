// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  }

  // Use the correct badge URL for each license
  const badgeUrls = {
    MIT: "https://img.shields.io/badge/License-MIT-yellow.svg",
    "Apache 2.0": "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    "GPL 3.0": "https://img.shields.io/badge/License-GPLv3-blue.svg",
    "BSD 3-Clause":
      "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg",
  };

  const badgeUrl = badgeUrls[license] || "";
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

  // Convert the technologies array to a bullet list
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
