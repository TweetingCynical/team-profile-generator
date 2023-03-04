const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// Add empty array for storing all team member objects
const allTeamMembers = [];

// Add empty array for storing all team member IDs
const allIDs = [];

// ES6 function to begin building the team
const startMenu = () => {
  const finaliseTeam = () => {
    console.log(`Your team is about to be created...`);
  };
  // ES6 function to add other team members after Manager
  const createTeam = () => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "roleChoice",
          message: "Which type of team member do you want to create?",
          choices: [
            "Manager",
            "Engineer",
            "Intern",
            "No more employees needed",
          ],
        },
      ])
      .then((userResponse) => {
        if (userResponse.roleChoice !== "No more employees needed") {
          createRole(userResponse.roleChoice);
        } else {
          finaliseTeam();
        }
      });
  };

  // Generic structure for creating employee of all types
  const createRole = (roleType) => {
    inquirer
      .prompt([
        // Get the name of the Employee
        {
          type: "input",
          name: "name",
          message: `What is the ${roleType}'s name?`,
          validate: (name) => {
            // Test response to check it only contains upper or lower case alpha characters or spaces, and also trim leading or trailing white spaces
            if (/^[a-zA-Z ]+$/.test(name.trim())) {
              return true;
            }
            return `You must enter a name!`;
          },
        },
        // Get the ID of the Employee
        {
          type: "input",
          name: "id",
          message: `What is the ${roleType}'s ID?`,
          validate: (id) => {
            // Test response to check it only contains numeric characters, and also trim leading or trailing white spaces
            if (/^\d+$/.test(id.trim())) {
              // Test response to check if has not already been used for a different employee
              if (allIDs.includes(id.trim())) {
                return `This Employee ID has already been taken. Please choose a new ID number.`;
              }
              return true;
            }
            return `You must only enter a number!`;
          },
        },
        // Get the employee's email address
        {
          type: "input",
          name: "email",
          message: `What is the ${roleType}'s email address?`,
          // Add a validation check to email address input
          // Used with permission from Stack Overflow:
          // https://stackoverflow.com/questions/65189877/how-can-i-validate-that-a-user-input-their-email-when-using-inquirer-npm
          validate: (email) => {
            // Regex mail check (return true if valid mail)
            if (
              /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(
                email
              )
            ) {
              return true;
            }
            return `You must enter a valid email address`;
          },
        },
        // Non-generic questions specific to each employee type
        // Manager specific
        {
          type: "input",
          name: "officeNumber",
          message: `What is the ${roleType}'s Office Number?`,
          when: roleType === "Manager",
          validate: (officeNumber) => {
            // Test response to check it only contains numeric characters or hyphens or plus signs, and also trim leading or trailing white spaces
            if (/^\d+$/.test(officeNumber.trim())) {
              return true;
            }
            return `You must enter a valid telephone number!`;
          },
        },
        // Engineer specific
        {
          type: "input",
          name: "github",
          message: `What is the ${roleType}'s GitHub username?`,
          when: roleType === "Engineer",
        },
        // Intern specific
        {
          type: "input",
          name: "school",
          message: `What is the ${roleType}'s School?`,
          when: roleType === "Intern",
        },
      ])
      .then((response) => {
        if (roleType === "Manager") {
          const manager = new Manager(
            response.name,
            response.id,
            response.email,
            response.officeNumber
          );
          allTeamMembers.push(manager);
        } else if (roleType === "Engineer") {
          const engineer = new Engineer(
            response.name,
            response.id,
            response.email,
            response.github
          );
          allTeamMembers.push(engineer);
        } else if (roleType === "Intern") {
          const intern = new Intern(
            response.name,
            response.id,
            response.email,
            response.school
          );
          allTeamMembers.push(intern);
        }
        allIDs.push(response.id);
        console.log(allTeamMembers);
        createTeam();
      });
  };

  // Initiate createRole to create the manager first
  console.log(`Let's build your team!`);
  createRole("Manager");
};

// Initiate startMenu
startMenu();
