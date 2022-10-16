// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README


class MarkDown {
	static generateReadme(answers){
  return `
	# ${answers.title}

	## Table of Contents
	- [Project Descrition](#Description)
	- [Install/Usage](#Installation)
	- [Contributions](#Contributions)
	- [Questions](#Questions)
	-License(#License)

	## Description
	${answers.description}

	## Installation/Usage
	${answers.install}

	## Contribution(s)
	${answers.contributions}

	## Contact:
	${answers.email}
	${answers.github}

	## License
	${answers.license}
`;
}
}

module.exports = MarkDown