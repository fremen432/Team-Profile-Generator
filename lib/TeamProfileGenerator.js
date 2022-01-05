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
            .prompt({
                type: 'text',
                name: 'employeeName',
                message: "What is the manager's name?"
            })
            .then(({ name }) =>  {
                this.Manager = new Manager(name);
                managerName();
            });

    }

    // managerName() {
    //     console.log(Manager)
    // }

}

function managerName() {
    console.log(JSON.stringify(Manager));
}

module.exports = TeamProfile;
