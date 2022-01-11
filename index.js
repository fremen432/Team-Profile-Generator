const inquirer = require('inquirer')
const template = require('./src/page-template')
const writeFile = require('./src/write-file')

// Models
const { Manager, managerQuestionsArr } = require('./lib/Manager');
const { Engineer, engineerQuestionsArr } = require('./lib/Engineer');
const { Intern, internQuestionsArr } = require('./lib/Intern');

const employeesArr = []

const practiceData = [
     {
      name: 'Clayton',
      id: '2542345',
      email: 'clayton@clayton.com',
      officeNumber: '123-234-2345',
      role: 'Manager'
    },
     {
      name: 'Dave',
      id: '15123423432',
      email: 'dave@dave.com',
      officeNumber: '1',
      role: 'Manager'
    },
     {
      name: 'Chris',
      id: '1512432342',
      email: 'chris@chris.com',
      github: 'chris',
      role: 'Engineer'
    },
     {
      name: 'Eric',
      id: '9846278632',
      email: 'eric@eric.com',
      github: 'eric',
      role: 'Engineer'
    },
     {
      name: 'Brad',
      id: '52345234',
      email: 'brad@brad.com',
      school: 'UNT',
      role: 'Intern'
    },
     {
        name: 'Sue',
        id: '73456456',
        email: 'sue@sue.com',
        school: 'TAMU',
      role: 'Intern'
    },
     {
      name: 'Brock',
      id: '98765432',
      email: 'brock@brock.com',
      officeNumber: '756-857-2345',
      role: 'Manager'
    }
]

const cl = input => console.log(input);

const init = () => { employeePrompt() }

const managerQuestions = () => {
    inquirer.prompt(managerQuestionsArr)
    .then(( answers ) => {
        answers = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employeesArr.push(answers);
        return employeePrompt();
    })
}

const engineerQuestions = () => {
    inquirer.prompt(engineerQuestionsArr)
    .then(( answers ) => {
        // answers.index = engineersCounter;
        answers = new Engineer(answers.name, answers.id, answers.email, answers.github)
        // answers.role = "Engineer";
        employeesArr.push(answers);
        return employeePrompt();
    })
}

const internQuestions = () => {
    inquirer.prompt(internQuestionsArr)
    .then(( answers ) => {
        // answers.index = internsCounter;
        answers = new Intern(answers.name, answers.id, answers.email, answers.school)
        // answers.role = "Intern";
        employeesArr.push(answers);
        return employeePrompt();
    })
}

const employeePrompt = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'employeeType',
        message: "What kind of team member would you like to add?",
        choices: [
            {name: 'Manager', value: "addManager"},
            {name: 'Engineer', value: "addEngineer"},
            {name: 'Intern', value: "addIntern"},
            {name: 'DONE', value: "done"}
        ]
    }])
    .then( answer => {
        // sends correct prompts based on the employee type
        if (answer.employeeType === 'addManager') { managerQuestions(); };
        if (answer.employeeType === 'addEngineer') { engineerQuestions(); };
        if (answer.employeeType === 'addIntern') { internQuestions(); };

        if (answer.employeeType === 'done') {
            let html = template(employeesArr)
            cl('...');
            writeFile(html);
            // cl('Your team profile HTML page has been generated!')
        }
    })
}

init();
