const Employee = require("./Employee");
const Intern = require('./Intern');
const TeamProfile = require('./TeamProfileGenerator');

const inquirer = require('inquirer');

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

const managersArr = [];

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

    // managerQuestions(){
    //     inquirer.prompt(managerQuestionsArr)
    //     .then(( answers ) => {

    //         // cl(answers);
    //         // managersArr.push(answers);
    //         // cl(managersArr);
    //         // cl(managersArr[0].email);

    //         managersArr.Manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    //         cl(managersArr);
    //         return TeamProfile().addTeamMemberQuestion();
    //     })
    // }

    works(){
        console.log('this works')
    }

    getRole() {
        // Overridden to return 'Manager'
    }

}

function cl(input) {
    console.log(input);
}

module.exports = { Manager, managerQuestionsArr, managersArr } ;
