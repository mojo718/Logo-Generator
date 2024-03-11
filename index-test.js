// Import necessary modules and classes
const Triangle = require('./lib/shapes');
const SVGGenerator = require('./lib/svgGenerator');

// Mock the fs module to prevent writing to files during tests
jest.mock('fs', () => ({
  writeFileSync: jest.fn(),
}));

describe('Triangle class', () => {
  it('should render the correct SVG content with given color', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    const svgContent = shape.render();
    const expectedSVG = '<svg width="100" height="100"><polygon points="50,5 100,100 0,100" fill="blue" /><text x="50%" y="50%" fill="white" text-anchor="middle"></text></svg>';
    expect(svgContent).toEqual(expectedSVG);
  });
});

describe('SVGGenerator class', () => {
  it('should save SVG content to file', () => {
    const svgContent = '<svg width="100" height="100"><polygon points="50,5 100,100 0,100" fill="blue" /><text x="50%" y="50%" fill="white" text-anchor="middle"></text></svg>';
    SVGGenerator.generateSVG(svgContent, 'test');
    expect(fs.writeFileSync).toHaveBeenCalledWith('results/test.svg', svgContent);
  });
});
