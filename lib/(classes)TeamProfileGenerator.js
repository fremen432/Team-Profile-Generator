const inquirer = require('inquirer');
// const writeFile = require('../src/generated-template');
const db = require('../db/data.json')
const db2 = require('../db/practiceData.json')

const genPage = require('../src/page-template')

const employeesArr = [];

var { Manager, managerQuestionsArr, managersCounter } = require('./Manager');
var { Engineer, engineerQuestionsArr, engineersCounter } = require('./Engineer');
var { Intern, internQuestionsArr, internsCounter } = require('./Intern');


class TeamProfile {

    initialize(){
        this.addTeamMemberQuestion();
    }

    managerQuestions(){
        inquirer.prompt(managerQuestionsArr)
        .then(( ans ) => {
            ans = new Manager(ans.name, ans.id, ans.email, ans.officeNumber);
            db.push(ans);
            return this.addTeamMemberQuestion();
        })
    }

    engineerQuestions(){
        inquirer.prompt(engineerQuestionsArr)
        .then(( ans ) => {
            ans = new Engineer(ans.name, ans.id, ans.email, ans.github);
            db.push(ans);
            return this.addTeamMemberQuestion();
        })
    }

    internQuestions(){
        inquirer.prompt(internQuestionsArr)
        .then(( ans ) => {
            ans = new Intern(ans.name, ans.id, ans.email, ans.school);
            db.push(ans);
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
                return this.managerQuestions();
            }

            if (answer.ask === 'addEngineer') {
                engineersCounter++
                return this.engineerQuestions();
            }

            if (answer.ask === 'addIntern') {
                internsCounter++
                return this.internQuestions();
            }

            if (answer.ask === 'done') {
                cl('...');
                // genPage(db);
                cl(db.name);
                cl('Your team profile HTML page has been generated!')
            }
        })
    }
}

const cl = input => console.log(input);

module.exports = TeamProfile;
