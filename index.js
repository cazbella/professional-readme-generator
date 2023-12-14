
//from demo in class - package inquirer allows questions to be asked in 

const inquirer = require('inquirer');

// fs is a Node standard library package for reading and writing files
const fs = require('fs');

const generateMarkdown = require("./generatemarkdown");


// Return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
// fs.readFile('data.csv', 'utf8', (error, data) =>
//   error ? console.error(error) : console.log(data)
// );

// Uncomment this next function to write to the file with anything you pass in as process.argv[2]

// fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );


const promptUser = () =>
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is your project about? Give a detailed description of your project.',
      //- What was your motivation?
      // - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
      // - What problem does it solve?
      // - What did you learn?
    },
    {
      type: 'input',
      name: 'contents',
      message: 'Table of Contents',
      //- [Installation](#installation)
      // - [Usage](#usage)
      // - [Credits](#credits)
      // - [License](#license)
      //do you require a table of contents?
    },

    {
      type: 'input',
      name: 'usage',
      message: '',
      // Provide instructions and examples for use. Include screenshots as needed.

      // To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

      //     ```md
      //     ![alt text](assets/images/screenshot.png)
      //     ```
    },
    {
      type: 'input',
      name: 'dependencies',
      message: 'What does the user need to install and run this app (e.g. dependencies)?',
      //What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
    },

    {
      type: 'input',
      name: 'contributions',
      message: 'Enter your LinkedIn URL.',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.'
    },
    {
      type: 'input',
      name: 'github',
      message: '',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Please add details of your Licence',
    },
  ]);