
//from demo in class - package inquirer allows questions to be asked in console

const inquirer = require('inquirer');

// fs is a Node standard library package for reading and writing files
const fs = require('fs');

const myMarkdownGenerator = require("./generatemarkdown");


// Return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
// fs.readFile('data.csv', 'utf8', (error, data) =>
//   error ? console.error(error) : console.log(data)
// );

// Uncomment this next function to write to the file with anything you pass in as process.argv[2]

// fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );


const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is your project about? Give a detailed description of your project.',
    //- What was your motivation?
    // - Why did you build this project?
    // - What problem does it solve?
    // - What did you learn?
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What does the user need to install and run this project (i.e. dependencies)?',
    //What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
  },

  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use.'
    //screenshots not required for this readme - asked in lesson
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Interested in contributing to our project? Please share your thoughts on the following - How would you like to contribute (e.g., code, bug reports, documentation)? Do you have any preferences for our coding style or development process? Any ideas or features you would like to work on or see implemented?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'List your collaborators or resources'
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List your collaborators or resources'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please add details of your Licence',
    choices: ['MIT', 'Apache', 'BSD', 'Modzilla Public License 2.0', 'none']
  },
  {
    type: 'input',
    name: 'walkthrough',
    message: 'Please add a link to the walkthrough here. Please include the protocol (e.g. https://).',
    //code from the web for web address input
    validate: function (input) {
      // Basic URL validation
      const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
      return urlRegex.test(input) ? true : 'Please enter a valid URL.';
    },
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Please type any questions you have.',
  },

];

//code from class activity 10 day 2
inquirer.prompt(questions).then((answers) => {
  console.log(answers);
  // Write user responses to a file (example: user.json)
  const readmeContent = myMarkdownGenerator(answers);
  //write readme content to a file
  fs.writeFileSync('README.md', readmeContent);

  console.log(`Updated README`);
});
