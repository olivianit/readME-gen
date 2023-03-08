/* // TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown; */

function generateMarkdown(data) {
  return `#${data.title}
  ## License:
[![license](https://img.shields.io/badge/license-${data.license}-blue.svg)]}
## table of Contents
- [description](#description)
- [installation](#installation)
- [usage](#usage)
- [contribution](#contribtuion)
- [testing](#testing)
- [additional info](#additional-info)

## description:
${data.description}

## installation:
${data.installation}

## usage:
${data.usage}

## license:
${data.license}

## contribution:
${data.contribution}

## testing:
${data.test}

## contact information:
- github: [${data.github}](https://github.com${data.github})
- email: [${data.email}](mailto:user@example.com)`; 
}
module.exports = generateMarkdown;