// Add link to employee class
const Employee = require("./Employee");

// Extend employee class for engineer
class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    // Inherit employee information
    super(name, id, email);
    this.gitHub = gitHub;
  }

  // Method to get GitHub username
  getGithub() {
    return this.gitHub;
  }
}

// Export engineer module
module.exports = Engineer;
