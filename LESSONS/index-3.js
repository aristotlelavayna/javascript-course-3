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

class Player {
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
player2.exit();
/////////////////////// END OF CLASSES LESSON ///////////////////////////