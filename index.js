#!/usr/bin/env node
import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import inquirer from "inquirer";
import { fileURLToPath } from "url";

// Get the current directory of this script (ESM-safe way)
const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createProject() {
  console.log(chalk.green("\n✨ Welcome to MrCaktuz create-sass-boilerplate ✨\n"));

  // Ask for project name
  const { projectName } = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter style folder name:",
      default: "style"
    }
  ]);

  const projectPath = path.join(process.cwd(), projectName);

  // Ensure the directory exists
  fs.ensureDirSync(projectPath);

  // Copy the template folder to the new project
  try {
    fs.copySync(path.join(__dirname, "boilerplate"), projectPath);
    console.log(chalk.blue(`\n✅ Project created successfully at ${projectPath}`));
    console.log(chalk.yellow(`\n👉 Next steps:\n  cd ${projectName} \n  Start making it your own!\n`));
  } catch (err) {
    console.error(chalk.red("❌ Error copying template files"), err);
  }
}

createProject();
