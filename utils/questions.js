const questions = [
    {
        name: 'firstName',
        message: 'What is your name?',
        type: 'input',
        validate: (answer) => {
            if (answer === "") {
                return console.log("\n Try again");
            }
            return true;
        }
    },
    {
        name: 'location',
        message: 'What is your location?',
        type: 'input',
    },
    {
        name: 'bio',
        message: 'What is your bio?',
        type: 'input',
    },
    {
        name: 'linkedin',
        message: 'What is your LinkedIn username?',
        type: 'input',
    },
    {
        name: 'github',
        message: 'What is your Github username?',
        type: 'input',
    },
    {
        name: 'fileName',
        message: 'What would you like to name this file?',
        type: 'input',
        validate: (answer) => {
            if (answer === "") {
                return console.log("\n Try again");
            }
            return true;
        }
    },
];

module.exports = questions;
