import {Calculator} from "./calculator";

export class ExpertCalculator implements Calculator{

    pow(a,b){
        return  Math.pow(a,b);
    }

    factorialize(a) {
        if (a < 0)
            return -1;
        else if (a== 0)
            return 1;
        else {
            return (a * factorialize (a- 1));
        }
    }


}



