// Space Battle
// mechanics
// hull - hitpoints [0 or less - ship is destroyed]
// firepower - amount of damage done to hull
// accuracy - chance between 0 -1 [math.random]

/**********************random number for alien powweerrr */
const alienRandomizer = (min, max) => {
    let randomNumber = Math.floor(Math.random() * (min - max) + min)
    return randomNumber
}
/**********************random number for alien accuracy */
const alienAccuracy = (min, max) => {
    return (Math.random() * ((min - max) + min)).toFixed(2)
}

// try factory
class SpaceShip {
    constructor(name, hull, firepower, accuracy){
        this.name = name,
        this.hull = hull,
        this.firepower = firepower,
        this.accuracy = accuracy
    }
}

// player ship
class PlayerShip extends SpaceShip {
    constructor(name, hull, firepower, accuracy){
        super(name, hull, firepower, accuracy)
        this.name = name,
        this.hull = hull,
        this.firepower = firepower,
        this.accuracy = accuracy
    }
    // methods
    // attack alien     hull = health
    attackAlienShip(enemy){
        if(Math.random() < this.accuracy){
            enemy.hull -= this.firepower
        }
    }
}


// alien ships
class AlienShip extends SpaceShip {
    constructor(name, hull, firepower, accuracy){
        super(name, hull, firepower, accuracy)
        this.name = name,
        // hull: 3 - 6
        this.hull = alienRandomizer(3, 6),
        // firepower: 2 - 4
        this.firepower = alienRandomizer(2, 4),
        // accuracy: .6 - .8
        this.accuracy = alienAccuracy(.8, .6)
    }
}
// console.log(alienAccuracy(.8, .6))

//create player and alien ships
const playerShip = new PlayerShip("USS ASSEMBLY", 20, 5, .7)
const alien1 = new AlienShip("The Hocotate Ship")
const alien2 = new AlienShip("S.S. Dolphin")
const alien3 = new AlienShip("S.S. Drake")
const alien4 = new AlienShip("Research Pod")
const alien5 = new AlienShip("S.S. Dolphin II")
const alien6 = new AlienShip("The Arwing")

// alien array - easier iteration
const enemyAliens = [alien1, alien2, alien3, alien4, alien5, alien6]

/************************** FUNCTION */




/************************** VARIABLES */
// top screen
// const playerHealth = document.querySelector('.playerHealth');
// const roundCount = document.querySelector('.roundCount');
// const alienHealth = document.querySelector('.alienHealth');

// main screen
// const startTitle = document.querySelector('.startTitle')
// const playerShip = document.querySelector('.playerShip');
// const alienShip = document.querySelector('.alienShip');

// footer
// const start = document.querySelector('.start');
// const attack = document.querySelector('.attack');
// const retreat = document.querySelector('.retreat');

// /************************************************************************ FUNCTIONS */
// // start, health appears, alien ship appears

const shipsAppear = () => {
    playerShip.classList.toggle('ussAssembly')
    alienShip.classList.toggle('ussAlien')
    startTitle.classList.toggle('pressStartGone')
    // start.textContent = "RE/START"
    // make if statement if === "RE/START => restarts game?"
}

// /************************************************** ATTACK */
// //always attack first then alien
// //click attack --> commence game
// //if own ship survive, attack again
// //if alien survive, alien ship attacks again
// //if alien ship destroyed, can ATTACK NEXT SHIP OR RETREAT












// /******* RETREAT */
// // retreat: only visible after defeating ship
// // otherwise not visible at beginning ONLY START AND ATTACK
// // RETREAT === GAME OVER

// // WIN = ALIEN SHIPS DESTROYED
// // LOSE = OWN SHIP DESTROYED

// const startGame = () => {
//     if(player1.isMyTurn === true){
//         attackPlayer(player2)
//     }else{
//         attackPlayer(player1)
//     }
// }

// // restart?
// // const restart = () => {
// //     //health = 0
// //     //function to go back to screen/start
// // }