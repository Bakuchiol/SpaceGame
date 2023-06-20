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
    {
        name: "The Hocotate Ship",
        hull: Math.floor(Math.random() * (6-3) + 3),
        firepower: Math.floor(Math.random() * (4-2) + 2),
        accuracy: Math.floor(Math.random() * (.8-.6) + .6)
    },
    {
        name: "S.S. Dolphin",
        hull: Math.floor(Math.random() * (6-3) + 3),
        firepower: Math.floor(Math.random() * (4-2) + 2),
        accuracy: Math.floor(Math.random() * (.8-.6) + .6)
    },
    {
        name: "S.S. Drake",
        hull: Math.floor(Math.random() * (6-3) + 3),
        firepower: Math.floor(Math.random() * (4-2) + 2),
        accuracy: Math.floor(Math.random() * (.8-.6) + .6)
    },
    {
        name: "Research Pod",
        hull: Math.floor(Math.random() * (6-3) + 3),
        firepower: Math.floor(Math.random() * (4-2) + 2),
        accuracy: Math.floor(Math.random() * (.8-.6) + .6)
    },
    {
        name: "S.S. Dolphin II",
        hull: Math.floor(Math.random() * (6-3) + 3),
        firepower: Math.floor(Math.random() * (4-2) + 2),
        accuracy: Math.floor(Math.random() * (.8-.6) + .6)
    },
    {
        name: "The Arwing",
        hull: Math.floor(Math.random() * (6-3) + 3),
        firepower: Math.floor(Math.random() * (4-2) + 2),
        accuracy: Math.floor(Math.random() * (.8-.6) + .6)
    }
]
console.log(alienSpaceships)

//random number for alien hull
const alienHullPower = (min, max) => {
    let randomNumber = Math.floor(Math.random() * (min - max) + min)
    return randomNumber
}

//random number for alien firepower
const alienFirePower = (min, max) => {
    let randomNumber = Math.floor(Math.random() * (min - max) + min)
    return randomNumber
}
//random number for alien accuracy
const alienAccuracy = (min, max) => {
    let randomNumber = Math.floor(Math.random() * (min - max) + min)
    return randomNumber
}

/************************************************************************ FUNCTIONS */

// ATTACK
//  WHILE LOOP
/* while we attack,  */