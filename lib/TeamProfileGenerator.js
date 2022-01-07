const inquirer = require('inquirer');
// const { Manager, managerQuestionsArr } = require('./Manager');

var { Manager, managerQuestionsArr, managersArr, managersCounter } = require('./Manager');
var { Engineer, engineerQuestionsArr, engineersArr, engineersCounter } = require('./Engineer');
var { Intern, internQuestionsArr, internsArr, internsCounter } = require('./Intern');

class TeamProfile {

    initialize(){this.addTeamMemberQuestion()}

    managerQuestions(){
        inquirer.prompt(managerQuestionsArr)
        .then(( answers ) => {
            answers.index = managersCounter;
            managersArr.push(answers);
            return this.addTeamMemberQuestion();
        })
    }

    engineerQuestions(){
        inquirer.prompt(engineerQuestionsArr)
        .then(( answers ) => {
            answers.index = engineersCounter;
            engineersArr.push(answers);
            return this.addTeamMemberQuestion();
        })
    }

    internQuestions(){
        inquirer.prompt(internQuestionsArr)
        .then(( answers ) => {
            answers.index = internsCounter;
            internsArr.push(answers);
            return this.addTeamMemberQuestion();
        })
    }

    addTeamMemberQuestion(){
        inquirer.prompt([{
            type: 'list',
            name: 'ask',
            message: "Would you like to add another team member?",
            choices: [
                {name: 'Add Manager', value: "addManager"},
                {name: 'Add Engineer', value: "addEngineer"},
                {name: 'Add Intern', value: "addIntern"},
                {name: 'finish', value: "finish"}
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

            if (answer.ask === 'finish') {
                cl('End of questions');
                this.classify();

                cl(this);
            }
        })
    }

    classify() {
        this.Managers = [];
        this.Engineers = [];
        this.Interns = [];

        var manArr = managersArr;
        var enArr = engineersArr;
        var inArr = internsArr;

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


class TeamProfile2 {

    managerQuestions(){
        inquirer.prompt([

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

        ])
        .then(( answers ) => {
            // console.log(answers.name);
            this.Manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            return this.addTeamMemberQuestion();
        })
    }

    engineerQuestions(){
        inquirer.prompt([

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

        ])
        .then(( answers ) => {
            answers.index = engineerCounter;
            engineersArr.push(answers);
            // console.log(engineersArr);

            // this.Engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            return this.addTeamMemberQuestion();
        })
    }

    internQuestions(){
        inquirer.prompt([

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

        ])
        .then(( answers ) => {
            answers.index = internCounter;
            internsArr.push(answers);
            // console.log(internsArr);

            // this.Intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            return this.addTeamMemberQuestion();
        })
    }

    addTeamMemberQuestion(){
        inquirer.prompt([{
            type: 'list',
            name: 'ask',
            message: "Would you like to add another team member?",
            choices: [
                {name: 'Add Engineer', value: "addEngineer"},
                {name: 'Add Intern', value: "addIntern"},
                {name: 'finish', value: "finish"}
            ]
        }])
        .then((answer) => {
            // console.log(answer.ask)
            if (answer.ask === 'addEngineer') {
                engineerCounter++
                this.engineerQuestions();
            } 
            // else 
            if (answer.ask === 'addIntern') {
                internCounter++
                this.internQuestions();
            } 
            // else 
            if (answer.ask === 'finish') {
                console.log('End of questions');

                this.classifyEngineers();
                this.classifyInterns();

                this.displayTeamProfile();
            }
        })
    }

    classifyEngineers() {
        this.Engineer = [];
        var arr = engineersArr;

        for(var i = 0; i < arr.length; i++) {
        this.Engineer[i] = new Engineer(arr[i].name, arr[i].id, arr[i].email, arr[i].github)
        }
        
        // console.log(this.Engineer);
    }

    classifyInterns() {
        this.Intern = [];
        var arr = internsArr;

        for(var i = 0; i < arr.length; i++) {
        this.Intern[i] = new Intern(arr[i].name, arr[i].id, arr[i].email, arr[i].school)
        }

        // console.log(this.Intern);
    }

    displayTeamProfile() {
        // console.log(this);
        console.log(this.Intern[1]);
        // console.log(engineerCounter);
    }

}


function cl(input) {
    console.log(input);
}

module.exports = TeamProfile;
