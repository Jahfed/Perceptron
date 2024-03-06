import { Grid, Square } from "./drawing/grids.js";
import { Perceptron } from "./calculations/perceptronMath.js";
import { Point } from "./drawing/points.js";

//Draw Grids
const canvas = document.getElementById("training");
const output = document.getElementById("output");
canvas.width = 800;
canvas.height = 800;

const grid = new Grid(20, 0, "training");
grid.colors = ["lightgrey"];
grid.createGrid();
grid.drawLine();

const parsedGrids = grid.grids.map((x) => { return `${x}<br>` });
// console.log(parsedGrids);
// output.innerHTML = parsedGrids;


//Test Perceptron
const inputs = [2, 0.3];
const learningrate = 0.0000004
const perceptron = new Perceptron(inputs.length, learningrate);
const guess = perceptron.guess(inputs);
output.innerHTML = `Click on the plain to train! :D :D --> The more you click the more it should turn green... <br> Learningrate ${learningrate}`;


//Draw Points
const points = Array(400);
for (let i = 0; i < points.length; i++) {
    points[i] = new Point(canvas);
}

for (let pt of points) {
    pt.show();
}

for (let pt of points) {
    const inputs = [pt.x, pt.y];
    const target = pt.label;
    const guess = perceptron.guess(inputs);

    if (guess == target) {
        pt.drawCorrect(true);
    } else {
        pt.drawCorrect(false);
    }
}

canvas.addEventListener('mousedown', () => {
    for (let pt of points) {
        const inputs = [pt.x, pt.y];
        const target = pt.label;
        perceptron.train(inputs, target);
        const guess = perceptron.guess(inputs);

        if (guess == target) {
            pt.drawCorrect(true);
        } else {
            pt.drawCorrect(false);
        }
    }
});


