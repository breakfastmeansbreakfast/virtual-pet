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
    it('checks the walk function makes the pet fitter', () => {
        const pet3 = new Pet('Lenny');
        pet3.fitness = 8;
        pet3.walk();
        expect(pet3.fitness).toEqual(10);

    })
    it('checks the feed function', () => {
        const pet4 = new Pet('Ruben');
        pet4.hunger = 2;
        pet4.feed();
        expect(pet4.hunger).toEqual(0);
    })
    }

    
)

describe('verifies checkUp function', () => {
    it('hunger', () => {
        const pet5 = new Pet('Harry');
        pet5.hunger = 8;
        expect(pet5.checkUp()).toEqual('I am hungry');
    })
    it('fitness', () => {
        const pet6 = new Pet('Gemma');
        pet6.fitness = 1
        expect(pet6.checkUp()).toEqual('I need a walk')
    })
    it('hunger and fitness', () => {
        const pet7 = new Pet('Toby');
        pet7.fitness = 0;
        pet7.hunger = 9;
        expect(pet7.checkUp()).toEqual('I am hungry AND I need a walk')
    })
    it('neither', () => {
        const pet8 = new Pet('T Dawg');
        expect(pet8.checkUp()).toEqual('I feel great!');
    })
}
)
