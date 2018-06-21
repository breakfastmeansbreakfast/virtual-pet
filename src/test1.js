// const Pet = require('../src/test1');
function Pet(name) {
    this.age = 0,
    this.hunger = 0,
    this.fitness = 10,
    this.name = name
/*    this.growUp = function () {
        this.age += 1
    }*/
    } 
Pet.prototype.growUp = function() {
    this.age +=1
    this.hunger +=5
    this.fitness -=3
}

/*Pet.prototype.walk = function() {
    if(this.fitness > 6) {
        this.fitness 
    } else {
    this.fitness +=4
    }
}*/

module.exports = Pet;
