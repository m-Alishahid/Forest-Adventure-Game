#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const randomNum1 = Math.floor(100 + Math.random() * 900);
const randomNum2 = Math.floor(1000 + Math.random() * 9000);
console.log(chalk.yellowBright("**********FOREST ADVENTURE GAME**********(By:m.a.s)"));
let name = await inquirer.prompt([
    {
        name: "Name",
        type: "input",
        message: "Set Your Name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please set your name!";
        }
    },
    {
        name: "Start",
        type: "list",
        choices: ["START GAME", "EXIT"],
        message: "Lets start the game",
    },
]);
if (name.Start === "START GAME") {
    console.log("Now you are in the forest...keep safely");
    //Cave one
    let weaponcave1 = await inquirer.prompt([
        {
            name: "p1",
            type: "list",
            choices: ["Shadow Cave", "Echo Chamber"],
            message: "Enter the First Cave to pick the weapons..",
        },
    ]);
    if (weaponcave1.p1 === "Shadow Cave") {
        console.log(`Shooter Gun:AK-47\nBullets:${randomNum1}`);
    }
    else {
        console.log(chalk.red("Please go to the first cave"));
    }
    //Cave two
    let weaponcave2 = await inquirer.prompt([
        {
            name: "p2",
            type: "list",
            choices: ["Shadow Cave", "Echo Chamber"],
            message: "Enter the Second cave to pick the weapons..",
        }
    ]);
    if (weaponcave2.p2 === "Echo Chamber") {
        console.log(`Fighter Gun:Sniper Rifle\nBullets:${randomNum1}`);
    }
    else {
        console.log(chalk.red("Please go to the second cave"));
    }
    let paths = await inquirer.prompt([{
            name: "path",
            type: "list",
            choices: ["Darkwood Trial", "Scorpien way", "Giant path"],
            message: "You have 3 ways to go..(Remember one way contains the monster *KONG*)"
        }]);
    if (paths.path === "Scorpien way") {
        console.log("Oh no", name.Name, chalk.red("KONG"), "is here..");
        let fight = await inquirer.prompt([{
                name: "survive",
                type: "list",
                choices: ["AK-47", "Sniper Rifle"],
                message: "Your weapons to fight KONG..",
            }]);
        //first weapon attack
        if (fight.survive === "AK-47") {
            let kongHealth = {
                name: "KONG health",
                health: "0000000",
            };
            const Timer = setTimeout(() => {
                console.log("You lose!");
                process.exit(0);
            }, 10000);
            const promptUser = () => {
                inquirer.prompt([{
                        type: 'input',
                        name: 'attack',
                        message: 'Press Enter..'
                    }])
                    .then(() => {
                    kongHealth.health = kongHealth.health.slice(0, -1);
                    console.log(kongHealth.name + " " + kongHealth.health);
                    if (kongHealth.health === "") {
                        console.log(chalk.yellowBright("You Win!") + " " + "KONG is dead\n");
                        let username = name.Name;
                        let score = randomNum2;
                        let weapon = "AK-47";
                        console.log(`Player name:${username}\nScore:${score}\nWeapon used:${weapon}\n\n\n*Made with: m.a.s*`);
                    }
                    else {
                        clearTimeout(Timer);
                        promptUser();
                    }
                });
            };
            promptUser();
        }
        //second weapon attack
        else if (fight.survive === "Sniper Rifle") {
            let kongHealth = {
                name: "KONG health",
                health: "0000000",
            };
            const Timer = setTimeout(() => {
                console.log("You lose!");
                process.exit(0);
            }, 10000);
            const promptUser = () => {
                inquirer.prompt([{
                        type: 'input',
                        name: 'attack',
                        message: 'Press Enter..'
                    }])
                    .then(() => {
                    kongHealth.health = kongHealth.health.slice(0, -1);
                    console.log(kongHealth.name + " " + kongHealth.health);
                    if (kongHealth.health === "") {
                        console.log(chalk.yellowBright("You Win!") + " " + "KONG is dead\n");
                        let username = name.Name;
                        let score = randomNum2;
                        let weapon = "Sniper Rifle";
                        console.log(`Player name:${username}\nScore:${score}\nWeapon used:${weapon}\n\n\n`);
                    }
                    else {
                        clearTimeout(Timer);
                        promptUser();
                    }
                });
            };
            promptUser();
        }
    }
    else {
        console.log("No monster found!");
    }
}
//Enjoy the game
