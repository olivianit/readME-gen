// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); //file system
const generateMarkdown = require('./utils/generateMarkdown.js');

console.log('ReadME Generator') 
// TODO: Create an array of questions for user input */

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project Title',
        // // validate: your_Input => {
        //     if (your_Onput) {
        //         return true; }
        //         else {
        //             console.log('nothing has been entered, try again.');
        //             return false;
        //         }
        //     }
        },

{
    type: 'input',
    name: 'description',
    message:'Enter a projeect description',
    // /*validate:*/ your_description => {
    //     if (your_description) {
    //         return true; }
    //         else { 
    //             console.log('nothing has been entered, try again.');
    //             return false;
    //         }
    //     }
    },

   { type: 'input',
    name: 'installation',
    message: 'What did you use to install your project?',
    // validate: your_installation => {
    //     if (your_installation) {
    //         return true; }
    //         else {
    //             console.log('nothing has been entered, try again.');
    //             return false;
    //         }
    //     }
    },

       { type: 'input',
        name: 'usage',
        message: 'How is this project used?',
        // validate: your_usage => {
        //     if (your_usage) {
        //         return true; }
        //         else {
        //             console.log('Enter information on how to use the project.');
        //             return false;
        //         }
        //     }
        },

           { type: 'checkbox',
            name: 'license',
            messages: 'Select a license',
            choices: ['MIT', 'Apachr License 2.0', 'GNU', 'other'],
            // validate: your_license => {
            //     if (your_license) {
            //         return true; }
            //         else {
            //             console.log('Select one of the following licenses.')
            //             return false;
            //         }
            //     }
            },
            
        {
            type: 'input',
            name: 'contribution',
            message: 'How are others contributing to your project?',
            // validate: your_contribution => {
            //     if (your_contribution) {
            //         return true; }
            //         else {
            //             console.log('Enter information on how others can contribute to this project.');
            //             return false;
                    
            //         }
            //     }
            },
{
            type: 'input',
            name: 'github',
            message: 'Enter your github username',
            // validate: github_input => {
            //     if (github_input) {
            //         return true; }
            //         else {
            //             console.log('Enter you github username to continue.');
            //             return false;
            //         }
            //     }
            },
        
    {
        type: 'input',
        name: 'email',
        message:'Enter your email',
        // validate: email_input => {
        // if (email_input) {
        //     return true; }
        //     else {
        //         console.log('Enter your email to continue.');
        //         return false;
        //     }
        // }
    }
        ];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
        return console.log(err); }

    console.log('You have successfully made your readME file');
    });
};



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile('readME.md', generateMarkdown(userInput));
    });
};

// Function call to initialize app 
init();

