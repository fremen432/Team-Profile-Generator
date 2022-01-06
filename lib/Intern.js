const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getRole() {
        // Overridden to return 'Intern'
    }

    getSchool() {
        
    }

  }
  
  module.exports = Intern;
  