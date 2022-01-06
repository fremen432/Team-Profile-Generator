const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

class TeamProfile {

    initialize() {

        inquirer
            .prompt([{
                type: 'text',
                name: 'managerName',
                message: "What is the manager's name?"
            },
            {
                type: 'text',
                name: 'managerOfficeNumber',
                message: "What is the manager's office number?"
            }])
            .then(
                (managerName, managerOfficeNumber) =>  {
                    // console.log(managerName);
                    // console.log(managerOfficeNumber);
                this.Manager = new Manager(managerName, managerOfficeNumber);
                cl();
            })
    }

    // managerName() {
    //     console.log(Manager)
    // }

}

function cl(input) {
    console.log(input);
}

module.exports = TeamProfile;
