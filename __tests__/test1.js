const Pet = require('../src/test1');
describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it ('checks for pet name', () => {
        expect(new Pet('Fido')).toHaveProperty('name', 'Fido')

    })
}
)
