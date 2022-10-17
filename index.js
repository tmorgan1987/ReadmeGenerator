// These are the packages needed for the application.
const inquirer = require('inquirer');
const fs = require('fs');
const MarkDown = require('./utils/generateMarkdown');

// An array of questions for the application to generate a readme file.
const questions = [
	{
		type: 'input',
		name: 'title',
		message: 'What is the title of the project you would like to create a Readme file for?',
	},
	{
		type: 'input',
		name: 'description',
		message: 'Please describe your project.',
	},
	{
		type: 'input',
		name: 'installation',
		message: 'How do you install/use your project?',
	},
	{
		type: 'input',
		name: 'contributions',
		message: 'Whom/what contributed to the completion of your project besides yourself, if any?'
	},
	{
		type: 'input',
		name: 'email',
		message: 'What is a good email address to contact you should users have questions about your project?',
	},
	{
		type: 'input',
		name: 'github',
		message: 'Where can users contact you on github?',
	},
	{
		type: 'list',
		name: 'license',
		message: 'What licenses did you use?',
		choices: ['MIT', 'ISC', 'GNUPLv3'],
		filter(val) {
			return val.toLowerCase();
		}
	}
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function runQuestions() {
	return inquirer.prompt(questions)
	.then((answers) => {
		const md = MarkDown.generateReadme(answers);
		fs.writeFile('README.md', md, function(err){
			if (err) {
				console.log('Your file was not saved.', err);
			}
			else {
				console.log('Your README file was saved!');
			}
		})
	})
	.catch((error) => {
	console.log(error);
	})
}

// function init() {}

// Function call to initialize app
runQuestions();
