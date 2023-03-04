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
  const createManager = () => {
    console.log(`Let's build your team!`);
  };
  createManager();
};

// Initiate startMenu
startMenu();
