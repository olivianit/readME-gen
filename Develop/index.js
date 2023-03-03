// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); //file system
const generationMarkdown = require('./utils/generateMarkdown.js');

console.log('ReadME Generator')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project Title',
        validate: your_Input => {
            if (your_Onput) {
                return true; }
                else {
                    console.log('nothing has been entered, try again.');
                    return false;
                }
            }
        }
];
{
    type: 'input',
    name: 'description',
    message:'Enter a projeect description',
    validate: your_description => {
        if (your_description) {
            return true; }
            else { 
                console.log('nothing has been entered, try again.');
                return false;
            }
        }
    }

    type: 'input',
    name: 'installation',
    message: 'What did you use to install your project?',
    validate: your_installation => {
        if (your_installation) {
            return true; }
            else {
                console.log('nothing has been entered, try again.');
                return false;
            }
        }
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
