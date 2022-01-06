const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, officeNumber) {
        super(name)
        this.officeNumber = officeNumber;
    }

    getRole() {
        // Overridden to return 'Manager'
    }

  }
  
  module.exports = Manager;
  