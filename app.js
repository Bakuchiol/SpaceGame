// Space Battle
// mechanics
// hull - hitpoints [0 or less - ship is destroyed]
// firepower - amount of damage done to hull
// accuracy - chance between 0 -1 [math.random]

/**********************random number for alien power */
const alienRandomizer = (min, max) => {
    // let randomNumber = Math.floor(Math.random() * (min - max)) + min
    // return randomNumber
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// factory
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
    }
}


// alien ships
class AlienShip extends SpaceShip {
    constructor(name){
        super(name, alienRandomizer(3, 6), alienRandomizer(2, 4), alienRandomizer(6, 8))
        // hull: 3 - 6
        // firepower: 2 - 4
        // accuracy: .6 - .8
    }
}
//create player and alien ships
const heroShip = new PlayerShip("USS ASSEMBLY", 20, 5, 7)
const alien1 = new AlienShip("Magellan Kai") // gundam
const alien2 = new AlienShip("Ferronis") // xenoblade chronicles 3
const alien3 = new AlienShip("Vic Viper") // gradius, nes
const alien4 = new AlienShip("Bebop") // cowboy bebop
const alien5 = new AlienShip("S.S. Dolphin II") // pikmin
const alien6 = new PlayerShip("The Arwing", 8, 2, 6) // star fox

// alien array - easier iteration
const enemyAliens = [alien1, alien2, alien3, alien4, alien5, alien6]

/************************** VARIABLES */
const background = document.querySelector('.background');
const startScreen = document.querySelector('.startScreen');
const startButton = document.querySelector('#startGame');
const attackButton = document.querySelector('.start')
const startText = document.querySelector('.dialogue')
const secondText = document.querySelector('.dialogue2');
const thirdText = document.querySelector('.dialogue3')
let restartButton = document.querySelector('.reStartButton')
// /************************************************************************ FUNCTIONS */

// animation
const textIn = [
    {width: 0},
    {width: 100}
]
const textInTime = {
    duration: 2000,
    iteration: 1,
}
// animation

// // start, health appears, alien ship appears
const start = () => {
    startScreen.style.display = "none"
    startButton.style.display = "none"
    background.style.display = "block"
    attackButton.style.display = "block"
    startText.animate(textIn, textInTime)
    startText.textContent = "The galaxy is under attack by aliens!"
    secondText.animate(textIn, textInTime)
    secondText.textContent = "Defend your Empire!"
    thirdText.animate(textIn, textInTime)
    thirdText.textContent = "Console Wars Begins!"
    console.log("%c SPACE BATTLE", "font-size: 40px; font-weight: bold; color: rgb(21, 70, 170);")
}

// /************************************************** ATTACK */
// //always attack first then alien
// //click attack --> commence game
// //if own ship survive, attack again
// //if alien survive, alien ship attacks again
// //if alien ship destroyed, can ATTACK NEXT SHIP OR RETREAT


/****DELAY*****/
 /**** TEST -- stackoverflow ****/
const reloadPage = () => {
    location.reload();
}
const  delayReload = (time) => {
    window.setTimeout(reloadPage, time)
}

/** VICTORY SCREEN**/
const victory = () => {
    const victoryGifContainer = document.querySelector('.victoryGifContainer')

    background.style.display = "none"
    victoryGifContainer.style.display = "block"
    startText.animate(textIn, textInTime)
    startText.textContent = "Congratulations 🏆"
    secondText.style.display = "none"
    thirdText.style.display = "none"
    attackButton.style.display = "none"
    restartButton.style.display ="block"
}



/** MAIN GAME LOOP **/
// want the game to run while hero ship not destroyed
const fight = () => {
    console.log('%c WARNING: Enemy approaching at full throttle.','font-size: 13px; font-weight: bold; color: rgb(181, 36, 36)')
    // game mechanic [event flag] : tracks state of game (if started or not etc....)
    let gameEnd = false;
    let round = false;

    while (gameEnd != true) {
    // PLAYER TURN
    let turbulence = Math.random(); // checks accuracy
    let target = enemyAliens[0];

    //check accuracy
    if (turbulence < heroShip.accuracy) {
        heroShip.attackEnemy(target);
        console.log(`You attack ${target.name}, leaving them with ${target.hull}!`);

    } else {
        console.log("You missed.")
    }
    // before everything else, you check if alien is dead
    // if alien dead, check if there is an alien next in queue
    // if there's a replacement, bring them to the front and kick out the corpse
    // if there isn't, automatic WIN
    if (target.hull <= 0) {
        //since it goes to negative, reassigns alien haul to 0
        target.hull = 0;

        console.log(`Enemy is destroyed. Good Job!`)
        // moves on to next enemy
        enemyAliens.shift();

        // round counter
        if (round == false && enemyAliens.length > 0){
            // styling console
            console.log('%c WARNING: Enemy approaching at full throttle.','font-size: 13px; font-weight: bold; color: rgb(181, 36, 36)')
            round = true;
            }


        if (enemyAliens.length != 0) {
            console.log("Another approaches. Choose to give retreat the OK, or cancel and fight onward.");

            //need something to wait and listen
            // stackoverflow - checking how to pause in middle of executing code - made buttons null
            if (confirm("Abort mission?")) { // fancy pop-up checks with its own buttons
                gameEnd = true;
                //write dialogue to appear on screen (text content on div?)
                console.log("Sailing back to Earth...");
            } else {
                round = false;
                target = enemyAliens[0]; // reassign (just in case) to next alien
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
        if (target.accuracy > turbulence) {
            // if the game is not about to end, alien turn; they attack
            target.attackEnemy(heroShip);
            console.log(`${target.name} attacks, leaving your hull at ${heroShip.hull}.`)
            // before everything else, they check if you are dead
            if (heroShip.hull <= 0) {
                heroShip.hull = 0;
                gameEnd = true;
                console.log("It seems you are about to explode.")
            }
        } else {
            console.log(`${target.name} missed. Now's your chance!`)
        }
    }

    }

    if (heroShip.hull > 0) {
        if (enemyAliens.length == 0) {
            console.log("%c You secured victory!", "font-size: 20px; font-weight: bold; color: lime");
            victory();
        } else {
            console.log(`Wait, you missed ${enemyAliens.length} hostiles! Go ba- *BOOM*`);
            // abort mission screen
            let abortContainer = document.querySelector('.abortContainer')

            background.style.display = "none"
            abortContainer.style.display = "block"
            startText.animate(textIn,textInTime)
            startText.textContent = "💀 Earth is DOOOOOOOMED! 💀"
            secondText.style.display = "none"
            thirdText.style.display = "none"
            attackButton.style.display = "none"
            restartButton.style.display ="block"            
        }
    } else {
        /* LOSER SCREEN */
        let loserContainer = document.querySelector('.loserContainer')

        background.style.display = "none"
        loserContainer.style.display = "block"
        startText.animate(textIn, textInTime)
        startText.textContent = "Earth is no more..."
        secondText.style.display = "none"
        thirdText.style.display = "none"
        attackButton.style.display = "none"
        restartButton.style.display ="block"
        console.log("YOU LOSE");
    }
}