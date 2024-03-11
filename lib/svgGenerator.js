// import modules for FS
const fs = require('fs');

class SVGGenerator {
  static generateSVG(svgContent, fileName) {
    const filePath = `results/${fileName}.svg`;
    fs.writeFileSync(filePath, svgContent);
    console.log(`SVG saved to ${filePath}`);
  }
}

module.exports = SVGGenerator;