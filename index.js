
//from demo in class - question format

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


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
    },
    {
      type: 'input',
      name: 'contents',
      message: 'Table of Contents',
    },
    {
      type: 'input',
      name: 'dependencies',
      message: 'What does the user need to install and run this app (e.g. dependencies)?',
    },
    {
      type: 'input',
      name: 'license',
      message: 'License',
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'Enter your LinkedIn URL.',
    },
    {
        type: 'input',
        name: 'commands',
        message: '',
      },
      {
        type: 'input',
        name: 'github',
        message: '',
      },
  ]);