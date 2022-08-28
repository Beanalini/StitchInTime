# README Generator [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
  
  ## Table of Contents  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Technologies Used](#technologies-used)
  * [Credits](#credits)
  * [Questions](#questions)
  * [How to Contribute](#How-to-Contribute)   
  * [License](#license)
  
  ## Description
  The README file is an essential part of any development; however, it tends to be created in haste at the completion of a project.  The motivation behind this project is to address the latter issue allowing the developer to quickly and easily generate a README.md file, allowing more time to focus on the project.  

  The README Generator application developed in this project is a command-line application that dynamically generates a professional README.md file from a user’s input, in response to a set of question prompts. This application uses Node JS and the npm inquirer package to provide the command-line user interface.

  Future developments:
  - Give the user the option to enter a directory path so that the generated README file is saved to a directory that is different to the one the application is run from. 
  - Give the user the option to choose the output filename
  - Allow the user to skip questions not appropraite to their project

  ### Functional Requirements

  The functional requirements that the README Generator has been designed to meet are defined by the user story and acceptance criteria listed below.  

#### User Story

  ```md
    AS A developer
    I WANT a README generator
    SO THAT I can quickly create a professional README for a new project
 ```

#### Acceptance Criteria

  ```md
  GIVEN a command-line application that accepts user input
  WHEN I am prompted for information about my application repository
  THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
  WHEN I enter my project title
  THEN this is displayed as the title of the README
  WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
  THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
  WHEN I choose a license for my application from a list of options
  THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
  WHEN I enter my GitHub username
  THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
  WHEN I enter my email address
  THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
  WHEN I click on the links in the Table of Contents
  THEN I am taken to the corresponding section of the README
  ```

  ## Installation
  
    To install any dependencies run the terminal command, npm i 

  ## Usage
  To run the README Generator App: 
  
  - Enter ```node index.js```  at the command-line prompt.
  
  - You will then be presented with a number of prompts for information such as project: title, description, installation, usage, credits, contact information, technologies used and license selection. 
  - To submit your response to a question prompt, press the enter key.
    - Some prompts present default answers, displayed in brackets, after a question.  If you would like to accept the default answer press enter, otherwise, enter your own response.
    - The 'technologies used' prompt provides you with a tick-box list to make a selection from - use the arrow keys to move up/down the list, space bar to select an option followed by the enter key to submit your answer.
    - The 'License selection' prompt provides you with a list of licenses - select the index of the appropraite license followed by the enter key to submit your choice.  
  - After answering all the prompts a file with the name 'sampleREADME.md' will be generated containing the README for your project. 
  - The README Generator can be used for all your projects - please note that if you run the application again in a directory where a sampleREADME.md already exists it will be overwritten, either rename the existing file or copy it to another directory.

  ### Walk-through Video

  A  walk-through video demonstrating the functionality of the README Generator is provided below:


  ### Screen Shots 
  

  ## Tests
  No tests have been implemented

  ## Technologies Used

  -  JavaScript
  - NodeJs
  - NPM inquirer package
  
  

  ## Credits

  No other collaborators have been involved in the creation of this application.
  
  The following resources have been used in this project:
  - [nodejs interactive command line prompts](https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts) 
  - [Professional README Guide](https://idp.bootcampspot.com/ui/?requestId=e44681db-cf4f-4631-b0dc-2630a2a449f1)
  - [MarkDown License Badges](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)
  - [Choose an Open Source License](https://choosealicense.com/)
  - [npm inquirer.js](https://www.npmjs.com/package//inquirer)


  ## Questions
  If you have any questions regarding this project or contents of this repository, please contact me via:
  
  - email: dat826@gmail.com
  - GitHub: [Beanalini.com](https://github.com/Beanalini.com)  


  
  ## Contributing
  If you would like to contribute to this project you can contact me by email at dat826@gmail.com or through  GitHub  @[Beanalini.com](https://github.com/Beanalini.com).
  

  ## License
  This project is covered under the MIT License.  
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
  