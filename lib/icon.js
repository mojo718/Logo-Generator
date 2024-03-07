class Icon {
    constructor(color, shape, text, textColor) {
        this.color = color;
        this.shape = shape;
        this.text = text;
        this.textColor = textColor;
    }

    generateSVG() {
        let svgContent = `<svg width="100" height="100">`;
        
        // Draw the shape
        svgContent += this.shape.draw(this.color);

        // Add text
        svgContent += `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;

        svgContent += `</svg>`;

        return svgContent;
    }
}

module.exports = Icon;