// import icon
const Icon = require('./icon');

//Shape class that extends icon
class Shape extends Icon {
  constructor(text, textColor, shape, shapeColor) {
    super(text, textColor);
    this.shape = shape;
    this.shapeColor = shapeColor;
  }
//SVG Generator methods for different shapes
  generateSVG() {
    let svg;
    switch (this.shape) {
      case 'Square':
        svg = `<svg width="100" height="100">
                  <rect width="100" height="100" fill="${this.shapeColor}" />
                  <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
                </svg>`;
        break;
      case 'Circle':
        svg = `<svg width="100" height="100">
                  <circle cx="50" cy="50" r="50" fill="${this.shapeColor}" />
                  <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
                </svg>`;
        break;
      case 'Triangle':
        svg = `<svg width="100" height="100">
                  <polygon points="50,5 100,100 0,100" fill="${this.shapeColor}" />
                  <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
                </svg>`;
        break;
      default:
        svg = ''; // Handle other shapes if necessary
    }
    return svg;
  }
}

module.exports = Shape;
