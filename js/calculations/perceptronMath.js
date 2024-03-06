class Perceptron {
    constructor(weightsLength, learningrate) {
        this.weights = Array(weightsLength);
        this.lr = learningrate;
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] = (Math.floor(Math.random() * 2) - 1);
        }
    }

    guess(inputs) {
        let sum = 0;
        for (let i = 0; i < this.weights.length; i++) {
            sum += inputs[i] * this.weights[i];
        }

        const output = this.activator(sum);
        return output;
    }

    activator(sum) {
        let activation;
        if (sum >= 0) {
            activation = 1
        } else {
            activation = -1
        }
        return activation;
    }

    train(inputs, target) {
        const guess = this.guess(inputs);
        const error = target - guess;


        for (let i = 0; i < this.weights.length; i++) {
            const adjust = error * inputs[i] * this.lr;
            this.weights[i] = this.weights[i] + (error * inputs[i] * this.lr);
        }
    }
}

export { Perceptron };