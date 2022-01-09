const inquirer = require('inquirer');
const template = require('../src/page-template(old)');
const writeFile = require('../src/generated-template');
const db = require('../db/data.json')
const db2 = require('../db/practiceData.json')

const genPage = require('../src/page-template')

var { Manager, managerQuestionsArr, managersArr, managersCounter } = require('./Manager');
var { Engineer, engineerQuestionsArr, engineersArr, engineersCounter } = require('./Engineer');
var { Intern, internQuestionsArr, internsArr, internsCounter } = require('./Intern');

var john =     {
    "name": "John",
    "role": "Manager",
    "id":   "9887",
    "email":    "john@gmail.com",
    "officeNumber": "123-456-7898"
}


class TeamProfile {

    initialize(){
        this.addTeamMemberQuestion()
    }

    managerQuestions(){
        inquirer.prompt(managerQuestionsArr)
        .then(( answers ) => {
            answers.index = managersCounter;
            answers.role = "Manager";
            db.push(answers);
            return this.addTeamMemberQuestion();
        })
    }

    engineerQuestions(){
        inquirer.prompt(engineerQuestionsArr)
        .then(( answers ) => {
            answers.index = engineersCounter;
            answers.role = "Engineer";
            db.push(answers);
            return this.addTeamMemberQuestion();
        })
    }

    internQuestions(){
        inquirer.prompt(internQuestionsArr)
        .then(( answers ) => {
            answers.index = internsCounter;
            answers.role = "Intern";
            db.push(answers);
            return this.addTeamMemberQuestion();
        })
    }

    addTeamMemberQuestion(){
        inquirer.prompt([{
            type: 'list',
            name: 'ask',
            message: "What kind of team member would you like to add?",
            choices: [
                {name: 'Manager', value: "addManager"},
                {name: 'Engineer', value: "addEngineer"},
                {name: 'Intern', value: "addIntern"},
                {name: 'DONE', value: "done"}
            ]
        }])
        .then((answer) => {

            if (answer.ask === 'addManager') {
                managersCounter++
                this.managerQuestions();
            }

            if (answer.ask === 'addEngineer') {
                engineersCounter++
                this.engineerQuestions();
            }

            if (answer.ask === 'addIntern') {
                internsCounter++
                this.internQuestions();
            }

            if (answer.ask === 'done') {
                cl('End of questions');

                // this.classify();
                // db.classify()
                // cl(db);
                genPage(db2);
                // cl(this);
				// const html = template(this);
				// writeFile(html);
            }
        })
    }

    classify() {
        this.Managers = [];
        this.Engineers = [];
        this.Interns = [];

        // var manArr = managersArr;
        // var enArr = engineersArr;
        // var inArr = internsArr;



        for(var i = 0; i < manArr.length; i++) {
        this.Managers[i] = new Manager(manArr[i].name, manArr[i].id, manArr[i].email, manArr[i].officeNumber)
        }
        
        for(var i = 0; i < enArr.length; i++) {
        this.Engineers[i] = new Engineer(enArr[i].name, enArr[i].id, enArr[i].email, enArr[i].github)
        }
        
        for(var i = 0; i < inArr.length; i++) {
        this.Interns[i] = new Intern(inArr[i].name, inArr[i].id, inArr[i].email, inArr[i].school)
        }

    }
}

function cl(input) {
    console.log(input);
}

module.exports = TeamProfile;
