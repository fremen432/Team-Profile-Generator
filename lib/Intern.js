const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, school) {
        super(name)
        this.school = school;
    }

    getRole() {
        // Overridden to return 'Intern'
    }

    getSchool() {
        
    }

  }
  
  module.exports = Intern;
  