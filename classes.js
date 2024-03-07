
// Created class for Icon
class Icon {
    constructor (color, shape, text, textColor) {
        this.color = color;
        this.shape = shape;
        this.text = text;
        this.textColor = textColor;
    }
} 
//created class for Color to extend Icon
class Color extends Icon {
    constructor (color) {
        super(color, null, null, null)
    }
}
// class for Shape that extends Icon
class Shape extends Icon {
    constructor (color) {
        super(color, null, null, null)
    }
}
// class for Square that extends Shape
class Square extends Shape {
    constructor(color) {
        super("square");
        this.color = color;
    }
}
// class for Cirle extends Shape
class Circle extends Shape {
    constructor(color) {
        super("circle");
        this.color = color;
    }
}
// class for Triange extends Shape
class Triange extends Shape {
    constructor(color) {
        super("triange");
        this.color = color;
    }
}

module.exports = classes