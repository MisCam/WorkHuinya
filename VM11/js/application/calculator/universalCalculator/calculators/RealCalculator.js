class RealCalculator {
    add(a, b) {
        return a + b;
    }
    
    sub(a, b){
        return a - b;
    }

    mult(a, b){
        return a * b;
    }


    div(a, b){
        if(b != 0){
            return a / b;
        }
    }

    pow(a, n){
        return Math.pow(a,n);
    }

    prod(a, p){
        return a * p;
    }

    zero() {
        return 0;
    }

    one() {
        return 1;
    }

    get(a) {
        return (a instanceof Matrix) ? new MatrixCalculator: 
        (a instanceof Vector) ? new VectorCalculator: 
        (a instanceof Complex) ? new ComplexCalculator: 
        new RealCalculator;
    }

    type(calc, elem, method) {
        if(elem instanceof Matrix) {
            return calc[method](elem.values.length, elem.values[0][0])
        } else {
            if(elem instanceof Vector) {
                return calct[method](elem.values.length, elem.values[0]);
            } else {
                return calc[method]();
            }
        }
    }
}