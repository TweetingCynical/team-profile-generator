// Add link to employee class
const Employee = require("./Employee");

// Extend employee class for engineer
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // Inherit employee information
    super(name, id, email);
    this.github = github;
  }

  // Method to get github username
  getGithub() {
    return this.github;
  }
}

// Export engineer module
module.exports = Engineer;
