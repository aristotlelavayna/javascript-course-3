/////////////////////////// OBJECTS LESSON //////////////////////////////
// object = a group of properties and methods. 
// properties = what an object has.
// methods = what an object can do use to access properties/ methods.

/* const car = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive : function () {
        console.log("You drive the car.");
    },
    brake : function () {
        console.log("You stepped on the brakes.");
    }
}

console.log(car.model);

car.drive(); */

//////////////////////// END OF OBJECTS LESSON //////////////////////////


/////////////////////////// CLASSES LESSON //////////////////////////////
// class = a blueprint for creating objects define what properties and methods they have use a constructor for unique properties.

/* class Player {
    score = 0;

    pause () {
        console.log("You paused the game.");
    }
    exit () {
        console.log("You exited the game.");
    }
}

const player1 = new Player();
const player2 = new Player();
const player3 = new Player();
const player4 = new Player();

player1.score += 1;

console.log(player1.score);
console.log(player2.score);

player1.pause();
player2.exit(); */
/////////////////////// END OF CLASSES LESSON ///////////////////////////


//////////////////////// CONSTRUCTOR LESSON /////////////////////////////
// constructor = a special method of a class, accepts arguments and assigns properties.

/* class Student {

    constructor (name, age, gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study () {
        console.log(`${this.name} is studying`);
    }
}

const student1 = new Student ("Spongebob", 30, 3.2);
const student2 = new Student ("Patrick", 35, 1.5);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.study(); */

////////////////////// END OF CONSTRUCTORS LESSON ///////////////////////


//////////////////////////// STATIC LESSON //////////////////////////////
// static = belongs to the class, not the objects properties: useful for caches, fixed-configuration methods: useful for utility functions.

/* class Car {
    static numberOfCars = 0;

    constructor (model) {
        this.model = model;
        Car.numberOfCars +=1;
    }
    static startRace () {
        console.log("3...2...1...GO!");
    }
}

const car1 = new Car ("Mustang");
const car2 = new Car ("Corvette");
const car3 = new Car ("BMW");

console.log(Car.numberOfCars);
Car.startRace(); */

////////////////////////// END OF STATIC LESSON /////////////////////////


/////////////////////////// INHERITANCE LESSON //////////////////////////
// inheritance = a child class can inherit all the methods and properties from another class.

/* class Animal { // <= this is the parent class
    alive = true;

    eat () {
        console.log(`This ${this.name} is eating.`);
    }
    sleep () {
        console.log(`This ${this.name} is sleeping`);
    }
}

// these are the children class
class Rabbit extends Animal {
    
    name = "rabbit";

    run () {
        console.log(`This ${this.name} is running.`);
    }
}

class Fish extends Animal {
    
    name = "fish";

    swim () {
        console.log(`This ${this.name} is swimming.`);
    }
}

class Hawk extends Animal {
    
    name = "hawk";

    fly () {
        console.log(`This ${this.name} is flying.`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run(); */

/////////////////////// END OF INHERITANCE LESSON ///////////////////////


///////////////////////// SUPER KEYWORD LESSON ///////////////////////// 
// super = refers to the parent class. commonly used to invoke constructor of a parent class.

/* class Animal {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal {
    constructor (name, age, runSpeed) {
        super (name, age);
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal {
    constructor (name, age, swimSpeed) {
        super (name, age);
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal {
    constructor (name, age, flySpeed) {
        super (name, age);
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit ("rabbit", 1, 40);
const fish = new Fish ("fish", 2, 80);
const hawk = new Hawk ("hawk", 3, 200);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed); */

/////////////////////// END OF SUPER KEYWORD LESSON /////////////////////


////////////////////// GETTERS AND SETTERS LESSON ///////////////////////
// get = binds an object property to a function when that property is accessed.
// set = binds an object property to a function when that property is assigned a value.

/* class Car {
    constructor (power) {
        this._gas = 25;
        this._power = power;
    }
    get power () {
        return `${this._power}hp`;
    }
    get gas () {
        return `${this._gas}L (${this._gas / 50 * 100}%)`;
    }
    set gas (value) {
        if (value > 50) {
            value = 50;
        }
        else if (value < 0) {
            value = 0;
        }
        this.gas = value;
    }
}

let car = new Car (400);

console.log(car.power);
console.log(car.gas); */

/////////////////// END OF GETTERS AND SETTERS LESSON //////////////////


///////////////////// OBJECTS AS ARGUMENTS LESSON ///////////////////////

/* class Car {
    constructor (model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

const car1 = new Car ("Mustang", 2023, "red");
const car2 = new Car ("Corvette", 2024, "blue");
const car3 = new Car ("Lambo", 2022, "yellow");

changeColor(car3, "gold");
displayInfo(car3)

function displayInfo(car) {
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}

function changeColor(car, color) {
    car.color = color;
} */

/////////////////// END OF OBJECTS AS ARGUMENTS LESSON //////////////////


/////////////////////// ARRAY OF OBJECTS LESSON /////////////////////////

/* class Car {
    constructor (model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }
    drive () {
        console.log(`You drive the ${this.model}`);
    }
}

const car1 = new Car ("Mustang", 2023, "red");
const car2 = new Car ("Corvette", 2024, "blue");
const car3 = new Car ("Lambo", 2022, "yellow");
const car4 = new Car ("Ferrari", 2025, "white");

const cars = [car1, car2, car3, car4];

console.log(cars[0].model);
console.log(cars[1].model);
console.log(cars[2].model);

startRace(cars);

function startRace(cars) {
    for (const car of cars) {
        car.drive();
    }
} */

/////////////////// END OF ARRAY OF OBJECTS LESSON //////////////////////