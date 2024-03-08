const inquirer = require('inquirer');
const fs = require('fs');
const Icon = require('./lib/icon');
const { Square, Circle, Triangle } = require('./lib/shapes');
const Color = require('./lib/colors');

async function generateLogo() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'color',
            message: 'Select a color:',
            choices: ['red', 'green', 'blue']
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape:',
            choices: ['square', 'circle', 'triangle']
        },
        {
            type: 'input',
            name: 'text',
            message: 'Enter text for the logo:'
        },
        {
            type: 'list',
            name: 'textColor',
            message: 'Select a color for the text:',
            choices: ['red', 'green', 'blue']
        }
    ]);

    let icon;
    switch (answers.shape) {
        case 'square':
            icon = new Icon(new Color(answers.color), new Square(), answers.text, answers.textColor);
            break;
        case 'circle':
            icon = new Icon(new Color(answers.color), new Circle(), answers.text, answers.textColor);
            break;
        case 'triangle':
            icon = new Icon(new Color(answers.color), new Triangle(), answers.text, answers.textColor);
            break;
        default:
            console.log('Invalid shape');
            return;
    }

    const svgContent = icon.generateSVG();
    const fileName = 'logo.svg';

    fs.writeFileSync(fileName, svgContent);
    console.log(`Logo saved as ${fileName}`);
}

generateLogo();