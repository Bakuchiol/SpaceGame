// Space Battle


// mechanics
// hull - hitpoints [0 or less - ship is destroyed]
// firepower - amount of damage done to hull
// accuracy - chance between 0 -1 [math.random]

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
console.log(spaceShip)

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
// ONE OBJECT? OR DIFFERENT OBJECTS??
const alienSpaceships = [
    alien1 = {
        name: "The Hocotate Ship",
        hull: alienRandomizer(6, 3),
        firepower: alienRandomizer(4, 2),
        accuracy: alienRandomizer(.8, .6)
    },
    alien2 = {
        name: "S.S. Dolphin",
        hull: alienRandomizer(6, 3),
        firepower: alienRandomizer(4, 2),
        accuracy: alienRandomizer(.8, .6)
    },
    alien3 = {
        name: "S.S. Drake",
        hull: alienRandomizer(6, 3),
        firepower: alienRandomizer(4, 2),
        accuracy: alienRandomizer(.8, .6)
    },
    alien4 ={
        name: "Research Pod",
        hull: alienRandomizer(6, 3),
        firepower: alienRandomizer(4, 2),
        accuracy: alienRandomizer(.8 ,.6)
    },
    alien5 ={
        name: "S.S. Dolphin II",
        hull: alienRandomizer(6, 3),
        firepower: alienRandomizer(4, 2),
        accuracy: alienRandomizer(.8, .6)
    },
    alien6 ={
        name: "The Arwing",
        hull: alienRandomizer(6, 3),
        firepower: alienRandomizer(4, 2),
        accuracy: alienRandomizer(.8, .6)
    }
]
console.log(alienSpaceships)

/**********************random number for alien powweerrr */
const alienRandomizer = (min, max) => {
    let randomNumber = Math.floor(Math.random() * (min - max) + min)
    return randomNumber
}

/************************************************************************ FUNCTIONS */

// ATTACK
//  WHILE LOOP
/* while we attack,  */