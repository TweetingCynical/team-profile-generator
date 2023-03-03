// Add link to employee class
const Employee = require("./Employee");

// Extend employee class for Intern
class Intern extends Employee {
  constructor(name, id, email, school) {
    // Inherit employee information
    super(name, id, email);
    this.school = school;
  }

  // Method to get Intern's School
  getSchool() {
    return this.school;
  }
}

// Export Intern module
module.exports = Intern;
