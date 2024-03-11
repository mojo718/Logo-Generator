//import from icon
const Icon = require('../lib/icon');

// Color Class that extends Icon
class Color extends Icon {
  constructor(text, textColor, color) {
    super(text, textColor);
    this.color = color;
  }

  generateSVG() {
    // Generate SVG for the color
    const svg = `<svg width="100" height="100">
                  <rect width="100" height="100" fill="${this.color}" />
                  <text x="50%" y="50%" fill="${this.textColor}" text-anchor="middle">${this.text}</text>
                </svg>`;
    return svg;
  }
}
