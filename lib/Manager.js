// Add link to employee class
const Employee = require("./Employee");

// Extend employee class for Manager
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // Inherit employee information
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  // Method to get Manager's officeNumber
  getOfficeNumber() {
    return this.officeNumber;
  }
}

// Export Manager module
module.exports = Manager;
