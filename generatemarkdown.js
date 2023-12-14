//need a function to take the data and put this into markdown language
//this is an older syntax as I coukdn't get it to work!
function generateMarkdown(data) {
    // need to generate README content here based on the provided 'data'
    //back tick for start and end of template literals
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
  };
  
  module.exports = generateMarkdown;