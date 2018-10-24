import {BasicCalculator} from "./ts/BasicCalculator";
import {ExpertCalculator} from "./ts/ExpertCalculator";

let calc=new BasicCalculator();
let calcExp=new ExpertCalculator();
console.log(calc.add(2,3,4))
console.log(calc.substract(6,1,4))
console.log(calc.mul(5,1,5))
console.log(calc.div(100,10,5))
console.log(calcExp.pow(2,4))
console.log(calcExp.factorialize(5))
console.log(calcExp.)