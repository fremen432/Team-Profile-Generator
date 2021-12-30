const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, github) {
        super(name)
        this.github = github;
    }

    getRole() {
        // Overridden to return 'Engineer'
    }

    getGithub() {
        
    }

  }
  
  module.exports = Engineer;
  