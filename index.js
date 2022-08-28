// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const {writeFile} = require('fs').promises;


// This function  prompts the user with questions and creates an arraryfor user input
const userAnswers = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projTitle',
      message: 'Please enter your project title'

    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a description of your project (include project motivation, project requirements, problem solved and any plans for future developments)'

    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
      default: 'To install any dependencies run the terminal command, npm i '

    }, 
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter step-by-step instructions to help the user understand how to use this app:'

    },  
    {
      type: 'input',
      name: 'test',
      message: 'Please enter instructions to help the user test the app:',
      default: 'No tests have been implemented.'

    },         
    {
      type: 'checkbox',      
      message: 'Please select the technologies you used in your project: (use arrow keys, spacebar to select an option and <enter> to submit:',
      name: 'tech',
      choices: [
        ' HTML',
        ' CSS',
        ' JavaScript',
        ' JQuery',
        ' NodeJs',
        ' MySQL',
      ]
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List any collaborators, thrid part attributions or resources used in the development of this project:',
      default: 'No other collaborators or resources were used in the development of this project.'

    },
    {
      type: 'rawlist',      
      message: 'Please select one license for your project from the list (Enter the number of the license tou want to select):',
      name: 'license',
      choices: [
        'Apache License 2.0',
        'GNU General Public License v3.00',
        'MIT License',
        'BSD 2-Clause "simplified" License',
        'BSD 3-Clause "New" or "revised" License',
        'Boost Software License 1.00',
        'Creative Commons Zero v1.0 Universal License',
        'Eclipse Public License 2.00',
        'GNU Affero General Public License v3.00',
        'GNU General Public License v2.00',
        'Mozilla Public License 2.0',
        'The Unlicense',
        'No License'
      ]
    },
    
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email address for the contribute and  questions sections',
    },     
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your GitHub username for the contribute and  questions sections',
    },
  ]); 
};

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
  userAnswers()  
    .then((data) =>  writeFile('README.md', generateMarkdown(data)))
    .then(() => console.log('README.md file has been generated succesfully'))
    .catch((err)=>console.error(err));
        
 };

 
// Function call to initialize app
init();
