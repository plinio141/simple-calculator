describe('main.js', function() {
    describe('calculate()', function() {
        it('validates expression');
        it('calls add');
        it('calls subtract');
        it('calls multiply');
        it('calls divide');
        it('validates operation');
        it('calls updateResult');
    });

    describe('updateResult()', function() {
        let element;

        beforeAll(function() {
            element = document.createElement('div');
            element.setAttribute('id', 'result');
            document.body.appendChild(element);
        });

        afterAll(function(){
            element = document.getElementById('result');
            document.body.removeChild(element);
        });

        it('adds result to DOM element', function() {
            updateResult('5');
            expect(element.innerText).toBe('5');
        });
    });
});