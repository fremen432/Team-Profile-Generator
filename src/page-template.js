const data = require('../db/practiceData.json')
const fs = require('fs')

const top = '<!DOCTYPE html><html><head><title>Page</title><link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"><link rel="stylesheet" href="../assets/style.css"><source src="../page-template.js" type="page-template"></head><body><header class = "container"><div class = "flex box justify-center"><h1> My Team </h1></div></header><main class = "container">'
const bottom = '</main></body></html>'

var managerCards = ''
var engineerCards = ''
var internCards = ''

function genPage(data){

    createCards(data);
    let allCards2 = managerCards + engineerCards + internCards;
    let allHTML = top + allCards2 + bottom

    fs.writeFileSync('../print/index.html', allHTML, (err) => { 
        // In case of a error throw err. 
        if (err) throw err; 
    })
}

function createCards(input) {
    for (i = 0; i < input.length; i++) {
        
        if(input[i].role === "Manager"){

            function createManCard(employee) {
                const manCard = `<div id="${employee.role}-card" class="box card">
                <div class="box name-role">
                <h2>${employee.name}</h2>
                <h3>Role: ${employee.role}</h3>
                </div>
                <div class="box employee-info">
                <ul class="list-group">
                <li class="list-group-item">ID: ${employee.id}</li>
                <li class="list-group-item">Email: ${employee.email}</li>
                <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
                </ul>
                </div>
                </div>`
                managerCards = manCard + managerCards
            }
            createManCard(input[i])

        }
        if(input[i].role === "Engineer"){
            // console.log('create Engineer cards')

            function createEngCard(employee) {
                const engCard = `<div id="${employee.role}-card" class="box card">
                <div id="" class="box name-role">
                  <h2>${employee.name}</h2>
                  <h3>Role: ${employee.role}</h3>
                </div>
                <div class="box employee-info">
                  <ul class="list-group">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: ${employee.email}</li>
                    <li class="list-group-item">Github: github.com/${employee.github}</li>
                  </ul>
                </div>
              </div>`
              //   console.log('create Engineer cards')
              engineerCards = engCard + engineerCards
            }
            createEngCard(input[i])
        }
        if(input[i].role === "Intern"){
            // console.log('create Intern cards')

            function createIntCard(employee) {
                const intCard = `<div id="${employee.role}-card" class="box card">
                <div class="box name-role">
                  <h2>${employee.name}</h2>
                  <h3>Role: ${employee.role}</h3>
                </div>
                <div class="box employee-info">
                  <ul class="list-group">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">Email: ${employee.email}</li>
                    <li class="list-group-item">School: ${employee.school}</li>
                  </ul>
                </div>
              </div>`
              internCards = intCard + internCards
            //   console.log('create Intern cards')
            }
            createIntCard(input[i])
        }
    }
    
};

genPage(data);

// module.exports = pageTemplate;
