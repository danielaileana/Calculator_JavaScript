"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExpertCalculator {
    pow(a, b) {
        return Math.pow(a, b);
    }
     factorialize(a) {
        if (a === 0 || a === 1)
            return 1;
        for (var i = a - 1; i >= 1; i--) {
            a *= i;
        }
        return a;
    }

    square(a) {
        return Math.sqrt(a);
    }

}
exports.ExpertCalculator = ExpertCalculator;
