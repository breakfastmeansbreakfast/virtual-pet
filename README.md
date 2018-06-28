# Tom's Virtual Pet 

Virtual pet written in Javascript (ES6)


### Installing

1. Clone it down

2. Open node

```
node
```
3. Create instance of a new Pet

```
const Pet = require('./src/test1')
const PET_NAME  = new Pet (' PET_NAME ')

```
4. Functions
* ``` PET_NAME ``` reports vitals
* ``` PET_NAME.growUp ``` ages the pet by 1 year
* ``` PET_NAME.feed ``` feeds your pet
* ``` PET_NAME.walk ``` walks your pet, increasing fitness
* ``` PET_NAME.isAlive ``` checks whether the pet is alive

5. Global variables

By default, your pet will die upon turning age 30, getting too hunry and getting unfit. You can change these variables by modifying src/test1.js

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Install Jest:
```
npm install -D jest
```

To run the tests: 
```
npm test -- test1
```

## Built With

* [VS Code](https://code.visualstudio.com) - IDE
* [JEST](http://jestjs.io) - Testing

## Authors

* **Tom Dunn** - [breakfastmeansbreakfast](https://github.com/breakfastmeansbreakfast)


## Acknowledgments

* Manchester Codes

