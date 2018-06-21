const Pet = require('../src/test1');
describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it ('checks for pet name', () => {
        expect(new Pet('Fido')).toHaveProperty('name', 'Fido')

    });
    it ('checks correct age', () => {
        expect(new Pet('Fido')).toHaveProperty('age', 0)
    })
}
)

describe('growUp', () => {
    it('increments the age by 1', () => {
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.age).toEqual(1);
    });
  });
  
describe('hunger and fitness', () => {
    it('checks whether hunger has increased', () => {
        const pet = new Pet('Chris');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    })
    it('checks fitness has decreased', () => {
        const pet2 = new Pet ('Giles');
        pet2.growUp();
        expect(pet2.fitness).toEqual(7)
    })
}

)