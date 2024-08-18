#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
(async () => {
    await showBanner("W o r d    C o u n t e r", "", "blue");
    const answer = await inquirer.prompt([
        {
            name: "sentence",
            type: "input",
            message: "Write/paste your sentence: "
        }
    ]);
    const words = answer.sentence.trim().split(" ");
    console.log("\n", chalk.greenBright(words), "\n");
    console.log(chalk.yellow.italic.bold(` number of words in your sentence is : \n \n \t \t "${chalk.magenta(words.length)}"`));
})();
