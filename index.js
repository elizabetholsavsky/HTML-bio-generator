const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./utils/questions.js');
const generateHTML = require('./utils/generateHTML');


function writeFile (fileName, data) {
    fs.appendFile(`${fileName}.html`, generateHTML(data), (err) =>
        err ? console.log(err) : console.log(`${fileName}.html has been generated.`)
        )};

function init() {
    inquirer 
    .prompt(questions)
    .then((response) => {
        writeFile(response.fileName, response);
        })
        .catch(err => {
            console.log(err)
        });
        }
        
init();