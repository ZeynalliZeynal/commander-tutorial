#!/usr/bin/env node

import chalk from "chalk";
import { Command } from "commander";

// declare the program
const program = new Command();

// add action to the program
// program
//   .description("Welcome!")
// .argument("<name>", "Your name")
//   .action((name: string) => {
//     console.log(chalk.bgYellow.bold.black(`Hello ${name}`));
//   });

program
  .command("init")
  .description("Initialize the library and packages.")
  .option("-y, --yes", "Skip the prompts and use the default values.")
  .action((opts) => {
    console.log(chalk.gray(opts.yes));
    console.log(chalk.greenBright("Initializing the library and packages."));
  });

program
  .command("add <numbers...>")
  .action((numbers: number[]) => {
    console.log(numbers.reduce((acc, curr) => acc + curr, 0));
  })
  .description("Add numbers");

// execute the program with the given arguments
program.parse(process.argv);
