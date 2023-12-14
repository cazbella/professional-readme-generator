//need a function to take the data and put this into markdown language
//this is an older syntax as I coukdn't get it to work!
function generateMarkdown(data) {
  const readmeContent = `
# ${data.title}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributions
${data.contributions}

## Questions
${data.questions}
`;
  
  return readmeContent;
}

module.exports = generateMarkdown;