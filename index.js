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
  // Generic structure for creating employee of all types
  const createRole = (roleType) => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: `What is the ${roleType}'s name?`,
          validate: (response) => {
            if (typeof response === "string" && response !== "") {
              return true;
            }
            return `You must enter a name!`;
          },
        },
      ])
      .then((response) => {
        if (roleType === "Manager") {
          const manager = new Manager(
            response.name,
            "1",
            "test@test.com",
            "555-123-2234"
          );
          allTeamMembers.push(manager);
          allIDs.push(manager[1]);
        }
      });
  };

  // ES6 function to createManager
  const createManager = () => {
    console.log(`Let's build your team!`);
    createRole("Manager");
  };
  // Initiate createManager
  createManager();
};

// Initiate startMenu
startMenu();
