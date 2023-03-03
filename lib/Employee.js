// Add Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // Method to get the employee's name
  getName() {
    return this.name;
  }

  // Method to get the employee's ID
  getID() {
    return this.id;
  }

  // Method to get the employee's email
  getEmail() {
    return this.email;
  }

  // Method to get the employee's role
  getRole() {
    // Returns the name of the class or its extension
    return Object.getPrototypeOf(this).constructor.name;
  }
}

// Export module
module.exports = Employee;
