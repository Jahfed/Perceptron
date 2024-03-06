class Point {
    constructor(canvas) {
        const width = canvas.width;
        const height = canvas.height;
        this.canvas = canvas;
        this.x = Math.floor(Math.random() * width);
        this.y = Math.floor(Math.random() * height);
        this.label = this.x > this.y ? -1 : 1;
        this.point = [this.x, this.y, this.label];
    }

    show() {
        const { canvas, x, y, label } = this;
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fillStyle = (label == 1) ? "black" : "white";
        ctx.fill();
        ctx.stroke();
    }

    drawCorrect(correct) {
        const { canvas, x, y, label } = this;
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
        ctx.fillStyle = correct ? "green" : "red";
        ctx.fill();
    }
}

export { Point };