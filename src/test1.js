// Settings for Virtual Pet
const PET_INITIAL_AGE = 0;
const PET_INITIAL_HUNGER = 0;
const PET_INITIAL_FITNESS = 10;
const PET_MAXIMUM_FITNESS = 10;
const PET_GROWUP_HUNGER = 5;
const PET_GROWUP_FITNESS = 3;
const PET_WALK_BENEFACTOR = 4;
const PET_FEED = 3;
const PET_HUNGER_MINIMUM = 0;

function Pet(name) {
    this.age = PET_INITIAL_AGE,
    this.hunger = PET_INITIAL_HUNGER,
    this.fitness = PET_INITIAL_FITNESS,
    this.name = name
    } 

Pet.prototype = {
    get isAlive() {
        return this.age < 30 && this.hunger < 10 && this.fitness > 0;
        }
    }
    
Pet.prototype.growUp = function() {
    this.age +=1
    this.hunger += PET_GROWUP_HUNGER
    this.fitness -= PET_GROWUP_FITNESS;
}

Pet.prototype.walk = function() {
    if ((this.fitness + PET_WALK_BENEFACTOR) <= PET_MAXIMUM_FITNESS ) {
      this.fitness += PET_WALK_BENEFACTOR;
    } else {
      this.fitness = PET_MAXIMUM_FITNESS;
    }
  }  

Pet.prototype.feed = function() {
    if((this.hunger - PET_FEED) >= PET_HUNGER_MINIMUM) {
        this.hunger -= PET_FEED;
    } else {
        this.hunger = PET_HUNGER_MINIMUM;
    }
}

Pet.prototype.checkUp = function() {
    if (this.fitness <=3 && this.hunger >=5) {
        return 'I am hungry AND I need a walk'
    } else if (this.fitness <= 3) {
        return 'I need a walk'
    } else if (this.hunger >= 5) {
        return 'I am hungry'
    } else {
        return 'I feel great!'
    }
}



module.exports = Pet;
