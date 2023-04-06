const questions = [
    {
        name: 'firstLastName',
        message: 'What is your first and last name?',
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
        message: 'What is your location? (City, State)',
        type: 'input',
    },
    {
        name: 'bio',
        message: 'What is your biography?',
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
