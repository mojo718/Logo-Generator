// import from Classes.js
const classes = require('./lib/classes');
// required modules
const fs = require('fs');
const inquirer = require('inquirer');

// async function to generate logo with waiting on inquirer answers
// used switch statement - referenced https://www.w3schools.com/js/js_switch.asp

async function generatelogo() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'color',
            message: 'Select color of Logo:',
            choices: ['red', 'green', 'blue']
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select shape of Logo:',
            choices: ['square', 'circle', 'triangle']
        },
        {
            type: 'input',
            name: 'text',
            message: 'Enter text for logo (3 Char Max.):'
        },
        {
            type: 'list',
            name: 'textColor',
            message: 'Select a color for the text',
            choices: ['red', 'green', 'blue']
        }]);

let icon;
switch (answers.shapes) {
    case 'square':
        icon = new Square(answers.color);
        break;
    case 'circle':
        icon = new Circle(answers.color);
        break;
    case 'triange':
        icon = new Triangle(answers.color);
    default:
        console.log('Invalid Shape');
        return
}

icon.text = answers.text
icon.textColor = answers.textColor

const svgContent = icon.generateSVG()






    }