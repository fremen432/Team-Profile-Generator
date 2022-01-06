const Employee = require("./Employee");

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

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    managerQuestions(){
        inquirer.prompt(managerQuestionsArr)
        .then(( answers ) => {
            // console.log(answers.name);
            this.Manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            return this.addTeamMemberQuestion();
        })
    }

    works(){
        console.log('this works')
    }

    getRole() {
        // Overridden to return 'Manager'
    }

}

module.exports = Manager;
