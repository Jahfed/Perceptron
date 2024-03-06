
class Square {
    constructor(os_x = 0, os_y = 0, size, color, canvas) {
        const ctx = canvas.getContext("2d")
        this.x = os_x;
        this.y = os_y;
        this.size = size;
        this.color = color;
        //draw the Square of the grid
        this.draw = function () {
            ctx.fillStyle = this.color;
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 1;
            ctx.lineCap = 'round';
            ctx.strokeRect(this.x, this.y, this.size, this.size);
        };
    }
};

class Grid {
    //Creates a grid object with multiple squares in it. 
    constructor(size, marge, canvasName) {
        const canvas = document.getElementById(canvasName);
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.grids = [];
        this.colors = ["#FF0000", "#00F0FF", "#00FF00", "#0000FF", "#4FF4FF", "#F0440F"];

        this.createGrid = function () {
            this.canvasWidth = canvas.width;
            this.canvasHeight = canvas.height;
            for (let j = 0; j < ((this.canvasHeight / (size + marge))); j++) {
                let y = j * (size + marge) + marge;
                for (let i = 0; i < ((this.canvasWidth / (size + marge))); i++) {

                    const color = this.colors[((j + i)) % this.colors.length];
                    const x = i * (size + marge) + marge;
                    const newSquare = new Square(x, y, size, color, canvas);
                    this.grids.push([x, y]);
                    newSquare.draw();
                }
            }
        };
    }

    drawLine() {
        const { canvas, ctx } = this;
        console.log(canvas);
        ctx.moveTo(0, 0);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "black";
        ctx.lineTo(canvas.width, canvas.height);
        ctx.stroke();
    }
}

export { Grid, Square };


