class Shape {
    constructor() {}

    draw(color) {
        return '';
    }
}

class Square extends Shape {
    constructor() {
        super();
    }

    draw(color) {
        return `<rect width="80" height="80" x="10" y="10" fill="${color}" />`;
    }
}

class Circle extends Shape {
    constructor() {
        super();
    }

    draw(color) {
        return `<circle cx="50" cy="50" r="40" fill="${color}" />`;
    }
}

class Triangle extends Shape {
    constructor() {
        super();
    }

    draw(color) {
        return `<polygon points="50,10 90,90 10,90" fill="${color}" />`;
    }
}

module.exports = { Square, Circle, Triangle };