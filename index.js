// Include packages needed for this application
//inquirer version 8.2.4 is used in this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');



// This function  prompts the user with questions and stores user answers in the inquirer.prompt object
const userAnswers = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projTitle',
      message: 'Please enter your project title:'

    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter a description of your project - a good project description should include; project motivation, problem solved and any future developments:'

    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
      default: 'To install dependencies run the terminal command, npm i '

    }, 
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter step-by-step instructions to help the user understand how to use this app:'

    },  
    {
      type: 'input',
      name: 'tests',
      message: 'Please enter instructions to help the user test this app:',
      default: 'No tests have been implemented.'

    },         
    {
      type: 'checkbox',      
      message: 'Please select the technologies you used in your project - use arrow keys to move up/down the list, spacebar to select an option and <enter> to submit:',
      name: 'tech',
      choices: [
        ' HTML',
        ' CSS',
        ' JavaScript',
        ' JQuery',
        ' NodeJs',
        ' MySQL',
        ' Not applicable'
      ]
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List any collaborators, thrid party attributions or resources used in the development of this project:',
      default: 'No other collaborators or resources were used in the development of this project.'

    },
    {
      type: 'rawlist',      
      message: 'Please select one license for your project from the list (Enter the index of the license you want to select and <enter> to submit):',
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
      message: 'Please enter your email address for the contribute/questions sections:',
    },     
    {
      type: 'input',
      name: 'github',
      message: 'Please enter your GitHub username for the contribute/guestions sections:',
    },
  ]); 
};


// This functon inititalises the app
const init = () => {
  //call the userAnswers() to display the prompts
  userAnswers()  
    /* using call back funtions pass user answers  array, contained in 'data', as a parameter  to generateMarkdown() write the string returned from  generateMarkdown() to sampleREADME.md*/
    .then((data) =>  {
      console.log(data);
      fs.writeFile('sampleREADME.md', generateMarkdown(data), (error) => {
        const outputMsg = (error)? 'Error has occured':'README file has been generated successfully';
        console.log(outputMsg)
      }) 
        
 });

}
// Function call to initialise app
init();
