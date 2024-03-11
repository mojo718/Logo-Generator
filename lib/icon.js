//create Icon class 

class Icon {
    constructor(text, textColor) {
      this.text = text;
      this.textColor = textColor;
    }
  
    generateSVG() {
      // method with be overriden in subclasses to generate SVG
    }
  }
  
  module.exports = Icon;