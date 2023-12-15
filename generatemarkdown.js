//need a function to take the data and put this into markdown language
//changed back to es6 syntax
const removeLicense = (license) => {
  if (license==='none') {
    return "";
    
  }
  else {
   return `## License 
${license}`
  }
}

//function written with tutor
const removeLicenseLink = (license) => {
  if (license==='none') {
    return "";
  }
  else {
    return "- [License](#license)"
  }
}

//function written with tutor
const generateBadge = (license) => {
 if (license==='Apache') {
  return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
 }
 else if (license==='MIT') {
  return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
 }
 else {
  return "";
 }
}
const generateMarkdown = (data) => `
  # ${data.title}

${generateBadge(data.license)}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${removeLicenseLink(data.license)}
- [Contributions](#contributions)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${removeLicense(data.license)}

## Contributions
${data.contributions}

## Questions
${data.questions}
`;

module.exports = generateMarkdown;
