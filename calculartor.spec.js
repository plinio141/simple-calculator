describe('Calculator.js', function() {

    it('should add numbers total', function(){
        //TODO: Expectations
        const calculator = new Calculator();
        calculator.add(5);
        expect(calculator.total).toBe(5);
    });

    it('should subtract numbers total', function(){
        const calculator = new Calculator();
        calculator.total = 30;
        calculator.subtract(5);
        expect(calculator.total).toBe(25);
    });

    it('should multiply by total', function(){
        const calculator = new Calculator();
        calculator.total = 100;
        calculator.multiply(2);
        expect(calculator.total).toBe(200);
    });

    it('should divide by total', function(){
        const calculator = new Calculator();
        calculator.total = 200;
        calculator.divide(2);
        expect(calculator.total).toBe(100);
    });

    it('has constructor', function(){
        const calculator = new Calculator();
        const calculator2 = new Calculator();
        expect(calculator).toEqual(calculator2);
    });

    it('can be instantiaded', function(){
        jasmine.addMatchers(customMatchers);

        const calculator = new Calculator();
        const calculator2 = new Calculator();
        expect(calculator).toBeCalculator();
        expect(calculator).toBeTruthy();
        expect(calculator2).toBeTruthy();
        expect(calculator).toEqual(calculator2);
        expect(calculator.constructor.name).toContain("Cal");
    });

    it('instantiates unique object', function(){
        const calculator = new Calculator();
        const calculator2 = new Calculator();

        expect(calculator).not.toBe(calculator2);
    });

    it('has common operations', function(){
        const calculator = new Calculator();

        expect(calculator.add).not.toBeUndefined();
        expect(calculator.subtract).not.toBeUndefined();
        expect(calculator.multiply).not.toBeUndefined();
        expect(calculator.divide).not.toBeUndefined();
    });

    it('can overwrite total', function(){
        const calculator = new Calculator();
        calculator.total = null;

        expect(calculator.total).toBeNull();
    });

    it('does not handle NaN', function(){
        const calculator = new Calculator();
        calculator.total = 20;
        calculator.multiply('a');
        expect(calculator.total).toBeNaN()
    });

    it('handles divide by zero', function(){
        const calculator = new Calculator();
        expect(function () {calculator.divide(0)}).toThrow();
        expect(function () {calculator.divide(0)}).toThrowError(Error);
        expect(function () {calculator.divide(0)}).toThrowError(Error, 'Cannont divide by zero');
    });

    it('returns total', function(){
        const calculator = new Calculator();
        calculator.total = 50;
        expect(calculator.add(20)).toBe(70);
        expect(calculator.total).toMatch(/-?\d+/);
        expect(typeof calculator.total).toMatch('number');
        expect(calculator.total).toBeNumber();
        expect(calculator.total).toEqual(jasmine.anything());
    });

});