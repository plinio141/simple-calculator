describe('Calculator.js', function() {
    let calculator;
    let calculator2;

    beforeEach(function() {
        calculator = new Calculator();
        calculator2 = new Calculator();
    });

    afterEach(function() {
        
    });
    
    it('should add numbers total', function(){
        //TODO: Expectations
        calculator.add(5);
        expect(calculator.total).toBe(5);
    });

    it('should subtract numbers total', function(){
        calculator.total = 30;
        calculator.subtract(5);
        expect(calculator.total).toBe(25);
    });

    it('should multiply by total', function(){
        calculator.total = 100;
        calculator.multiply(2);
        expect(calculator.total).toBe(200);
    });

    it('should divide by total', function(){
        calculator.total = 200;
        calculator.divide(2);
        expect(calculator.total).toBe(100);
    });

    it('has constructor', function(){
        expect(calculator).toEqual(calculator2);
    });

    it('can be instantiaded', function(){
        jasmine.addMatchers(customMatchers);
        expect(calculator).toBeCalculator();
        expect(calculator).toBeTruthy();
        expect(calculator2).toBeTruthy();
        expect(calculator).toEqual(calculator2);
        expect(calculator.constructor.name).toContain("Cal");
    });

    it('instantiates unique object', function(){
        expect(calculator).not.toBe(calculator2);
    });

    it('has common operations', function(){
        expect(calculator.add).not.toBeUndefined();
        expect(calculator.subtract).not.toBeUndefined();
        expect(calculator.multiply).not.toBeUndefined();
        expect(calculator.divide).not.toBeUndefined();
    });

    it('can overwrite total', function(){
        calculator.total = null;

        expect(calculator.total).toBeNull();
    });

    it('does not handle NaN', function(){
        calculator.total = 20;
        calculator.multiply('a');
        expect(calculator.total).toBeNaN()
    });

    it('handles divide by zero', function(){
        expect(function () {calculator.divide(0)}).toThrow();
        expect(function () {calculator.divide(0)}).toThrowError(Error);
        expect(function () {calculator.divide(0)}).toThrowError(Error, 'Cannont divide by zero');
    });

    it('returns total', function(){
        calculator.total = 50;
        expect(calculator.add(20)).toBe(70);
        expect(calculator.total).toMatch(/-?\d+/);
        expect(typeof calculator.total).toMatch('number');
        expect(calculator.total).toBeNumber();
        expect(calculator.total).toEqual(jasmine.anything());
    });

});