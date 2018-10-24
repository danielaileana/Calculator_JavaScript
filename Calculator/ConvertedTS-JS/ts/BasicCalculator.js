"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BasicCalculator {
    add(a, b, ...args) {
        let sum = a + b;
        args.forEach(elem => {
            sum = sum + elem;
        });
        return sum;
    }
    substract(a, b, ...args) {
        let substract = a - b;
        args.forEach(elem => {
            substract = substract - elem;
        });
        return substract;
    }
    mul(a, b, ...args) {
        let prod = a * b;
        args.forEach(elem => {
            prod = prod * elem;
        });
        return prod;
    }
    div(a, b, ...args) {
        let division = a / b;
        args.forEach(elem => {
            division = division / elem;
        });
        return division;
    }
}
exports.BasicCalculator = BasicCalculator;
