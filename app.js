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
    attackEnemy (enemy){
        if (Math.random() < this.accuracy){
            enemy.hull -= this.firepower
        }
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
const heroShip = new PlayerShip("USS ASSEMBLY", 20, 5, .7)
const alien1 = new AlienShip("The Hocotate Ship")
const alien2 = new AlienShip("S.S. Dolphin")
const alien3 = new AlienShip("S.S. Drake")
const alien4 = new AlienShip("Research Pod")
const alien5 = new AlienShip("S.S. Dolphin II")
const alien6 = new AlienShip("The Arwing")

// alien array - easier iteration
const enemyAliens = [alien1, alien2, alien3, alien4, alien5, alien6]

/************************** VARIABLES */
// top screen
// const playerHealth = document.querySelector('.playerHealth');
// const roundCount = document.querySelector('.roundCount');
// const alienHealth = document.querySelector('.alienHealth');

// main screen
const startTitle = document.querySelector('.startTitle');
const playerShip = document.querySelector('.playerShip');
const alienShip = document.querySelector('.alienShip');

// footer
const start = document.querySelector('.start');
const attack = document.querySelector('.attack');
const retreat = document.querySelector('.retreat');

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

//main game loop
// want the game to run while hero ship not destroyed
const fight = () => {
    let gameEnd = false;
    // ! means NOT

    while (gameEnd != true) {
    // PLAYER TURN
    heroShip.attackEnemy(enemyAliens[0]);
    //write dialogue to appear on screen (text content on div?)
    console.log(`You attack ${enemyAliens[0].name}, leaving them with ${enemyAliens[0].hull}.`);
    // before everything else, you check if alien is dead
    // if alien dead, check if there is an alien next in queue
    // if there's a replacement, bring them to the front and kick out the corpse
    // if there isn't, automatic WIN
    if (enemyAliens[0].hull <= 0) {
        
        enemyAliens[0].hull = 0;
        //write dialogue to appear on screen (text content on div?)
        console.log(`Enemy is destroyed. Good Job!`)
        enemyAliens.shift();
        /** APPEND NEXT ALIEN SHIP IMG HERE **/
        
        if (enemyAliens.length != 0) {
            //write dialogue to appear on screen (text content on div?)
            console.log("Another approaches. Choose to give retreat the OK, or cancel and fight onward.");

            // stackoverflow - checking how to pause in middle of executing code - made buttons null
            if (window.confirm("Permission to retreat?")) { // fancy pop-up checks with its own buttons
                gameEnd = true;
                //write dialogue to appear on screen (text content on div?)
                console.log("Sailing back to Earth...");
            } else {
                //write dialogue to appear on screen (text content on div?)
                console.log("Brace for impact; a new enemy arrives!")
            }

        } else {
            //write dialogue to appear on screen (text content on div?)
            console.log("The silence... is deafening.");
            gameEnd = true;
        }
        
    }

    // ALIEN TURN
    if (gameEnd != true) {
        // if the game is not about to end, alien turn; they attack
        enemyAliens[0].attackEnemy(heroShip);
        //write dialogue to appear on screen (text content on div?)
        console.log(`The enemy ship attacks, leaving your hull at ${heroShip.hull}.`)
        // before everything else, they check if you are dead
        if (heroShip.hull <= 0) {
            heroShip.hull = 0;
            gameEnd = true;
            //write dialogue to appear on screen (text content on div?)
            console.log("It seems you are about to explode.")
        }
    }

    }

    if (heroShip.hull > 0) {
        console.log("WIIIIIIIIN");
    } else {
        console.log("LOSE");
    }
    alert("Reload the page to play again.")
}


// appear in document:
/* health at load will show enemy hull, if destroyed enemy hull : 0 (even if console shows negative) */
/* DELETE EXTRA BUTTONS -  */