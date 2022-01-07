const Employee = require("./Employee");
const inquirer = require('inquirer');

const engineerQuestionsArr = [

    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's Id?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's github user name?"
    }

]
var engineersArr = [];
var engineersCounter = 0

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    // engineerQuestions(){
    //     inquirer.prompt(engineerQuestionsArr)
    //     .then(( answers ) => {
    //         answers.index = engineersCounter;
    //         engineersArr.push(answers);
    //         // console.log(engineersArr);

    //         // this.Engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    //         return this.addTeamMemberQuestion();
    //     })
    // }

    getRole() {
        // Overridden to return 'Engineer'
    }

    getGithub() {
        
    }

  }
  
  module.exports = { Engineer, engineerQuestionsArr, engineersArr, engineersCounter };
  