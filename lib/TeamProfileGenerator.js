const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

class TeamProfile {
    constructor() {
        this.Manager;
        this.Engineer;
        this.Intern;
    }

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

// function cl() {
//     console.log('Hey');
// }

function cl() {
    // console.log(JSON.stringify(Manager));
    // console.log(Manager);
    console.log(Manager.name);
}

module.exports = TeamProfile;
