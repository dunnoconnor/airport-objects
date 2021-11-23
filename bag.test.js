const Bag = require('./bag')

describe('Bag', () => {
    test('bags have weight', () =>{
        const testBag = new Bag(25)
        expect(testBag.weight).toBe(25)
    })

    test('throw error if bag has no weight', () => {
        expect(() => new Bag()).toThrowError('bag must have a weight')
    })

})