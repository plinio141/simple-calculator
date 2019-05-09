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
});