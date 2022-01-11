const Employee = require("./Employee");
const inquirer = require('inquirer');

const internQuestionsArr = [

    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's Id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email?"
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the intern's school?"
    }

]
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    internQuestions(){
        inquirer.prompt(internQuestionsArr)
        .then(( answers ) => {
            answers.index = internsCounter;
            internsArr.push(answers);
            // console.log(internsArr);

            // this.Intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            return this.addTeamMemberQuestion();
        })
    }

	getSchool() {
		return this.school;
	}

	getRole() {
		return 'Intern';
	}

  }
  
  module.exports = { Intern, internQuestionsArr };
  