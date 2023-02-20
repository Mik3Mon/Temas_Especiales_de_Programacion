const Math = require('./Math');

describe('Math class', () => {
    //test('first test', () => {
    //expect(1 + 1).toBe(2);
    //});

    it('should add two numbers', () => {
        const math = new Math();

        expect(math.add).toBeDefine();
        expect(math.add(1, 1)).toBe(2);
        expect(math.add(5, 6)).toBe(11);
        expect(math.add(1, -1)).toBe(0);
        expect(math.add(-1, -1)).toBe(-2);
    });
})