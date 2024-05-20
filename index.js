#! /usr/bin/env node
import inquier from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.cyanBright("\n \t \t Wellcome to Rashid's - Word Counter\n"));
const answer = await inquier.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the words."
    }
]);
// Triming the sentence and spiliting it into the words.
const words = answer.sentence.trim().split(" ");
console.log(chalk.bold.yellowBright("-> Sentence words:"));
console.log(words);
console.log(chalk.bold.magentaBright(`\nYou have (${chalk.bold.red(words.length)}) words in your sentence.`));
console.log('>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<');
