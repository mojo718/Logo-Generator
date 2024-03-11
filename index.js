// added imports and require modules
const inquirer = require('inquirer');
const Shape = require('./lib/shapes');
const Color = require('./lib/colors');
const SVGGenerator = require('./lib/svgGenerator');

// Const for choices in questions 
const shapes = ['Circle', 'Triangle', 'Square'];
const colors = ['Red', 'Blue', 'Green'];
const textColors = ['white', 'tan', 'orange'];

//used inquirer to prompt for user input
async function promptUser() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'shape',
      message: 'Select a shape:',
      choices: shapes,
    },
    {
      type: 'list',
      name: 'shapeColor',
      message: 'Select a color for the shape:',
      choices: colors,
    },
    {
      type: 'input',
      name: 'text',
      message: 'Enter text for icon (3 char max):',
      validate: input => input.length <= 3,
    },
    {
      type: 'list',
      name: 'textColor',
      message: 'Select a color for text:',
      choices: textColors,
    },
  ]);

  return answers;
}

(async () => {
  try {
    const { shape, shapeColor, text, textColor } = await promptUser();
    let icon;
    if (shape === 'Square' || shape === 'Circle' || shape === 'Triangle') {
      icon = new Shape(text, textColor, shape, shapeColor);
    } else {
      icon = new Color(text, textColor, shape);
    }
    const svgContent = icon.generateSVG();
    SVGGenerator.generateSVG(svgContent, 'icon');
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();