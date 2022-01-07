const inquirer = require('inquirer');
const Employee = require("./Employee");
// const Intern = require('./Intern');
// const TeamProfile = require('./TeamProfileGenerator');


const managerQuestionsArr = [

    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's Id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?"
    }

]

var managersArr = [];
var managersCounter = 0

const dummyAnswers = [
    {
        name: 'Clayton',
        id: '4873625',
        email: "cmill.fake@gmail.com",
        officeNumber: "987-678-3567"
    }
]

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    works(){
        console.log('this works')
    }

	getRole() {
		return 'Manager';
	}
	getOfficeNumber() {
		return this.officeNumber;
	}

}

module.exports = { Manager, managerQuestionsArr, managersArr, managersCounter } ;
