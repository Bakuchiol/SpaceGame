// Space Battle
// mechanics
// hull - hitpoints [0 or less - ship is destroyed]
// firepower - amount of damage done to hull
// accuracy - chance between 0 -1 [math.random]

// try factory
class SpaceShip {
    constructor(name, hull, firepower, accuracy){
        this.name = name,
        this.hull = hull,
        this.firepower = firepower,
        this.accuracy = accuracy
    }
}

// Ship: USS Assembly
//can only attack in order
/* object properties:
hull: 20
firepower: 5
accuracy: .7
*/
const spaceShip = [
    {
        name: "USS ASSEMBLY",
        hull: 20,
        firepower: .5,
        accuracy: .7
    }
]

// 6 alien ships
//attacks one at a time
// name, health, accuracy
/* RANGED PROPERTIES DETERMINED RANDOMLY
hull: 3 - 6
firepower: 2 - 4
accuracy: .6 - .8

ex:
if (Math.random() < alien[0].accuracy) {
	console.log('You have been hit!');
}

ex:
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
 */
/**********************random number for alien powweerrr */
const alienRandomizer = (min, max) => {
    let randomNumber = Math.floor(Math.random() * (min - max) + min)
    return randomNumber
}
/**********************random number for alien accuracy */
const alienAccuracy = (min, max) => {
    return (Math.random() * ((min - max) + min)).toFixed(2)
}
// ONE OBJECT? OR DIFFERENT OBJECTS??
const alienSpaceships = [
    alien1 = {
        name: "The Hocotate Ship",
        hull: alienRandomizer(6, 3),
        firepower: alienRandomizer(4, 2),
        accuracy: alienAccuracy(.8, .6)
    },
    alien2 = {
        name: "S.S. Dolphin",
        hull: alienRandomizer(6, 3),
        firepower: alienRandomizer(4, 2),
        accuracy: alienAccuracy(.8, .6)
    },
    alien3 = {
        name: "S.S. Drake",
        hull: alienRandomizer(6, 3),
        firepower: alienRandomizer(4, 2),
        accuracy: alienAccuracy(.8, .6)
    },
    alien4 ={
        name: "Research Pod",
        hull: alienRandomizer(6, 3),
        firepower: alienRandomizer(4, 2),
        accuracy: alienAccuracy(.8, .6)
    },
    alien5 ={
        name: "S.S. Dolphin II",
        hull: alienRandomizer(6, 3),
        firepower: alienRandomizer(4, 2),
        accuracy: alienAccuracy(.8, .6)
    },
    alien6 ={
        name: "The Arwing",
        hull: alienRandomizer(6, 3),
        firepower: alienRandomizer(4, 2),
        accuracy: alienAccuracy(.8, .6)
    }
]
// console.log(alienSpaceships)
const enemies = [alienSpaceships]

/************************** VARIABLES */
// top screen
const playerHealth = document.querySelector('.playerHealth');
const roundCount = document.querySelector('.roundCount');
const alienHealth = document.querySelector('.alienHealth');

// main screen
const startTitle = document.querySelector('.startTitle')
const playerShip = document.querySelector('.playerShip');
const alienShip = document.querySelector('.alienShip');


// footer
const start = document.querySelector('.start');
const attack = document.querySelector('.attack');
const retreat = document.querySelector('.retreat');

/************************************************************************ FUNCTIONS */
// start, health appears, alien ship appears
// start.addEventListener('click', alienAppear);
const shipsAppear = () => {
    playerShip.classList.toggle('ussAssembly')
    alienShip.classList.toggle('ussAlien')
    startTitle.classList.toggle('pressStartGone')
}

/************************************************** ATTACK */
//always attack first then alien
//click attack --> commence game
//if own ship survive, attack again
//if alien survive, alien ship attacks again
//if alien ship destroyed, can ATTACK NEXT SHIP OR RETREAT

const 








/******* RETREAT */
// retreat: only visible after defeating ship
// otherwise not visible at beginning ONLY START AND ATTACK
// RETREAT === GAME OVER

// WIN = ALIEN SHIPS DESTROYED
// LOSE = OWN SHIP DESTROYED

const startGame = () => {
    if(player1.isMyTurn === true){
        attackPlayer(player2)
    }else{
        attackPlayer(player1)
    }
}

// restart?
// const restart = () => {
//     //health = 0
//     //function to go back to screen/start
// }