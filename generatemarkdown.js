//need a function to take the data and put this into markdown language
//changed back to es6 syntax
//duplicate this to remove deployed application link

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
 else if (license==='Modzilla Public License 2.0') {
  return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
 }
 else {
  return "";
 }
}
const generateMarkdown = (data) => `
  # ${data.title}

${generateBadge(data.license)}

### Contact Information
- **GitHub:** [${data.github}](https://github.com/${data.github})
- **Email:** ${data.email}



## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Credits](#credits)
${removeLicenseLink(data.license)}
- [Walkthrough](#walkthrough)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Credits
${data.credits}

${removeLicense(data.license)}

## Walkthrough
${data.walkthrough}

## Questions
${data.questions}
`;

module.exports = generateMarkdown;
