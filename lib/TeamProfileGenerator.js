const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

class TeamProfile {
    initialize(){
        // Manager.
    }
}


// class TeamProfile {

//     managerQuestions(){
//         inquirer.prompt([

//             {
//                 type: 'input',
//                 name: 'name',
//                 message: "What is the manager's name?"
//             },
//             {
//                 type: 'input',
//                 name: 'id',
//                 message: "What is the manager's Id?"
//             },
//             {
//                 type: 'input',
//                 name: 'email',
//                 message: "What is the manager's email?"
//             },
//             {
//                 type: 'input',
//                 name: 'officeNumber',
//                 message: "What is the manager's office number?"
//             }

//         ])
//         .then(( answers ) => {
//             // console.log(answers.name);
//             this.Manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
//             return this.addTeamMemberQuestion();
//         })
//     }

//     engineerQuestions(){
//         inquirer.prompt([

//             {
//                 type: 'input',
//                 name: 'name',
//                 message: "What is the engineer's name?"
//             },
//             {
//                 type: 'input',
//                 name: 'id',
//                 message: "What is the engineer's Id?"
//             },
//             {
//                 type: 'input',
//                 name: 'email',
//                 message: "What is the engineer's email?"
//             },
//             {
//                 type: 'input',
//                 name: 'github',
//                 message: "What is the engineer's github user name?"
//             }

//         ])
//         .then(( answers ) => {
//             answers.index = engineerCounter;
//             engineersArr.push(answers);
//             // console.log(engineersArr);

//             // this.Engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
//             return this.addTeamMemberQuestion();
//         })
//     }

//     internQuestions(){
//         inquirer.prompt([

//             {
//                 type: 'input',
//                 name: 'name',
//                 message: "What is the intern's name?"
//             },
//             {
//                 type: 'input',
//                 name: 'id',
//                 message: "What is the intern's Id?"
//             },
//             {
//                 type: 'input',
//                 name: 'email',
//                 message: "What is the intern's email?"
//             },
//             {
//                 type: 'input',
//                 name: 'school',
//                 message: "What is the intern's school?"
//             }

//         ])
//         .then(( answers ) => {
//             answers.index = internCounter;
//             internsArr.push(answers);
//             // console.log(internsArr);

//             // this.Intern = new Intern(answers.name, answers.id, answers.email, answers.school);
//             return this.addTeamMemberQuestion();
//         })
//     }

//     addTeamMemberQuestion(){
//         inquirer.prompt([{
//             type: 'list',
//             name: 'ask',
//             message: "Would you like to add another team member?",
//             choices: [
//                 {name: 'Add Engineer', value: "addEngineer"},
//                 {name: 'Add Intern', value: "addIntern"},
//                 {name: 'finish', value: "finish"}
//             ]
//         }])
//         .then((answer) => {
//             // console.log(answer.ask)
//             if (answer.ask === 'addEngineer') {
//                 engineerCounter++
//                 this.engineerQuestions();
//             } 
//             // else 
//             if (answer.ask === 'addIntern') {
//                 internCounter++
//                 this.internQuestions();
//             } 
//             // else 
//             if (answer.ask === 'finish') {
//                 console.log('End of questions');

//                 this.classifyEngineers();
//                 this.classifyInterns();

//                 this.displayTeamProfile();
//             }
//         })
//     }

//     classifyEngineers() {
//         this.Engineer = [];
//         var arr = engineersArr;

//         for(var i = 0; i < arr.length; i++) {
//         this.Engineer[i] = new Engineer(arr[i].name, arr[i].id, arr[i].email, arr[i].github)
//         }
        
//         // console.log(this.Engineer);
//     }

//     classifyInterns() {
//         this.Intern = [];
//         var arr = internsArr;

//         for(var i = 0; i < arr.length; i++) {
//         this.Intern[i] = new Intern(arr[i].name, arr[i].id, arr[i].email, arr[i].school)
//         }

//         // console.log(this.Intern);
//     }


//     displayTeamProfile() {
//         // console.log(this);
//         console.log(this.Intern[1]);
//         // console.log(engineerCounter);
//     }

// }


function cl(input) {
    console.log(input);
}

module.exports = TeamProfile;
