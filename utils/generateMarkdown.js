// renderLicenseBadge() returns a license badge based on which license is passed in
// If there is no license, an empty string is returned

const renderLicenseBadge = (userData) => {
  
  const operation = userData.license;
  console.log(operation);
  switch (operation) {
    case "Apache License 2.0":
      userData.badge = ['[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'];          
      break;
    case "GNU General Public License v3.00":
      userData.badge = ['[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'];
          
      break;
    case "MIT License":
      userData.badge = ['[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'];   
        break;
    case "BSD BSD 2-Clause 'simplified' License":
      userData.badge = ['[[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'];  
        break;
    case "BSD 3-Clause 'New' or 'revised' License":
        userData.badge = ['[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'];  
        break;
    case "Boost Software License 1.00":
        userData.badge = ['[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'];  
        break;
    case "Creative Commons Zero v1.0 Universal License":
        userData.badge = ['[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)']; 
    case "Eclipse Public License 2.00":
        userData.badge = ['![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'];    
    case "GNU Affero General Public License v3.00":
        userData.badge = ['[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'];          
        break;
    case "GNU General Public License v2.00":
        userData.badge = ['[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'];        
        break;   
    case "Mozilla Public License 2.0":
      userData.badge = ['[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'];  
      break;
    case "Unlicense":
      userData.badge = ['[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'];  
      break;
    case "No license":
      userData.badge = [" "];  
    default:
      console.log("License match not found!")
    break;
  }
console.log(userData.badge);
return userData
}
 

// generateMarkdown()  generate markdown for README
const generateMarkdown = (data) => {
 const userData = renderLicenseBadge(data);
  console.log(userData);
  
  return `# ${userData.projTitle} ${userData.badge}  
  
  ## Table of Contents  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Technologies Used](#technologies-used)
  * [credits](#credits)
  * [Questions](#questions)
  * [How to Contribute](#How-to-Contribute)   
  * [License](#license)
  
  ## Description
  ${userData.description}

  ## Installation
  
    ${userData.installation}

  ## Usage
  ${userData.usage}

  ## Tests
  ${userData.tests}

  ## Technologies Used
  - ${userData.tech}
  

  ## Credits
  ${userData.credits}
  ## Questions
  If you have any questions regarding this project or contents of this repository, please contact me via:
  
  - email: ${data.email}
  - GitHub: [${data.github}](https://github.com/${data.github})  


  
  ## Contributing
  If you would like to contribute to this project you can contact me by email at ${data.email} or through  GitHub account   @[${data.github}](https://github.com/${data.github}).
  

  ## License
  This project is covered under the ${userData.license}  
  
  ${userData.badge} 
  `;
};

//Make the functions available to index.js
module.exports = generateMarkdown;


