let Cards = [ "Ace of clubs", "Two of clubs", "Three of clubs", "Four of clubs", "Five of clubs", "Six of clubs", "Seven of clubs", "Eight of clubs", "Nine of clubs", "Ten of clubs", "Jack of clubs", "Queen of clubs", "King of clubs", "Ace of diamonds", "Two of diamonds", "Three of diamonds", "Four of diamonds", "Five of diamonds", "Six of diamonds", "Seven of diamonds", "Eight of diamonds", "Nine of diamonds", "Ten of diamonds", "Jack of diamonds", "Queen of diamonds", "King of diamonds", "Ace of hearts", "Two of hearts", "Three of hearts", "Four of hearts", "Five of hearts", "Six of hearts", "Seven of hearts", "Eight of hearts", "Nine of hearts", "Ten of hearts", "Jack of hearts", "Queen of hearts", "King of hearts", "Ace of spades", "Two of spades", "Three of spades", "Four of spades", "Five of spades", "Six of spades", "Seven of spades", "Eight of spades", "Nine of spades", "Ten of spades", "Jack of spades", "Queen of spades", "King of spades"];

let valueArray = [13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 
                  13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 
                  13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 
                  13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let playerOneCards = [];
let playerTwoCards = [];
let playerOnevalue = 0;
let playerTwoValue = 0;
let playerOnePlay = "";
let playerTwoPlay = "";
let playerOneWar = [];
let playerTwoWar = [];
let randomNumer = 0;
let playerOneIndex = 0;
let playerTwoIndex = 0;
let maximum = 0;
let minimum = 0;
let roundNumber = 0;
let playTime = 0;
let playerOneWarValue = 0;
let playerTwoWarValue = 0;
const playStatus = document.getElementById("winnerText");
const gameTimeSecs = document.getElementById("timeSeconds");
const gameTimeHours = document.getElementById("timeHours");
const roundDisplay = document.getElementById("roundsPlayed");
let playingWar = false;
let gameNumber = 0;

function playWar () {
  if (!playingWar) {
    playingWar = true;
    gameNumber++;
    //PLAYER ONE
    for (i = 0; i < 26; i++) {
      minimum = 0;
      maximum = 52;
      randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
      playerOneCards.push(Cards[randomNumber]);

      if (playerOneCards.length == 26) {
        for (i = 0; i < 26; i++) {
          //Verify that player doesn't posses a larger amount of cards than is possible
          if (playerOneCards[i] === valueArray[i + 13 * 4]) {
            playerOneCards.splice(i, 1);
            console.log("Redistributing cards of player one");
            randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
            playerOneCards.push(Cards[randomNumber]);
          }
        }
      }
    }
    //END OF PLAYER ONE
    //PLAYER TWO
    for (i = 0; i < 26; i++) {
      minimum = 0;
      maximum = 52;
      randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
      playerTwoCards.push(Cards[randomNumber]);

      if (playerTwoCards.length == 26) {
        for (i = 0; i < 26; i++) {
          //Verify that player doesn't posses a larger amount of cards than is possible
          if (playerTwoCards[i] === valueArray[i + 13 * 4]){
            playerTwoCards.splice(i, 1);
            console.log("Redistributing cards of player one");
            randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
            playerTwoCards.push(Cards[randomNumber]);
          }
        }
      }
    }
      console.log("Player one cards: " + playerOneCards.length);
      console.log("Player two cards: " + playerTwoCards.length);
        //END OF PLAYER TWO
        //END OF SETUP

    //Play the game
    console.log(" - ");
    
    while (playerOneCards.length < 52 && playerTwoCards.length < 52 && playerOneCards.length != 0 && playerTwoCards.length !=0) {
      //Player one play
      maximum = playerOneCards.length;
      minumum = 0;
      randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
      playerOnePlay = playerOneCards[randomNumber];
      playerOneValue = valueArray[Cards.indexOf(playerOnePlay)];
      if (randomNumber === 0) {
        playerOnePlay = "Ace of clubs";
      } if (randomNumber === 1) {
        playerOnePlay = "Two of clubs";
      }
      console.log("Player one play: " + playerOnePlay + ".  Player one value: " + playerOneValue);
      playerOneIndex = randomNumber;

      //Player two play
      maximum = playerTwoCards.length;
      minumum = 0;
      randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
      playerTwoPlay = playerTwoCards[randomNumber];
      playerTwoValue = valueArray[Cards.indexOf(playerTwoPlay)];
      if (randomNumber === 0) {
        playerTwoPlay = "Ace of clubs";
      } if (randomNumber === 1) {
        playerTwoPlay = "Two of clubs";
      }
      console.log("Player two play: " + playerTwoPlay + ".  Player two value: " + playerTwoValue);
      playerTwoIndex = randomNumber;
      roundNumber++;
      playTime += 3;

      if (playerOneValue === 1 && playerTwoValue === 13) {
        
        console.log("Player one wins round " + roundNumber);
        playerOneCards.push(playerTwoCards[playerTwoIndex]);
        playerTwoCards.splice(playerTwoIndex, 1);
        console.log("Player one card amount: " + playerOneCards.length);
        console.log("Player two card amount: " + playerTwoCards.length);
        playTime += 3;

      } else if (playerOneValue === 13 && playerTwoValue === 1) {
        
        console.log("Player two wins round " + roundNumber);
        playerTwoCards.push(playerOneCards[playerOneIndex]);
        playerOneCards.splice(playerOneIndex, 1);
        console.log("Player one card amount: " + playerOneCards.length);
        console.log("Player two card amount: " + playerTwoCards.length);
        playTime += 3;

      } else if (playerOneValue > playerTwoValue) {
        
        console.log("Player one wins round " + roundNumber);
        playerOneCards.push(playerTwoCards[playerTwoIndex]);
        playerTwoCards.splice(playerTwoIndex, 1);
        console.log("Player one card amount: " + playerOneCards.length);
        console.log("Player two card amount: " + playerTwoCards.length);
        playTime += 3;

      } else if (playerTwoValue > playerOneValue) {
        
        console.log("Player two wins round " + roundNumber);
        playerTwoCards.push(playerOneCards[playerOneIndex]);
        playerOneCards.splice(playerOneIndex, 1);
        console.log("Player one card amount: " + playerOneCards.length);
        console.log("Player two card amount: " + playerTwoCards.length);
        playTime += 3;

      } else if (playerOneValue === playerTwoValue) {
        //In progress
        console.log("WAR!");
        playTime += 3;
      } else if (playerOnePlay === undefined || playerTwoPlay === undefined) {
        console.log("Error, scratched round");
      }
      console.log(" - ");
      }

      //Game end
      if (playerOneCards.length >= 52) {
          playerTwoCards.length = 0;
          console.log("PLAYER ONE WINS after " + roundNumber + " rounds!");
          console.log("If you'd played this game in real life instead of using a computer, you'd have spent " + playTime + " seconds, " + playTime/60 + " minutes, or " + (playTime/60)/60 + " hours." );
          document.getElementById("roundsPlayed").innerHTML = roundNumber + "<br> Rounds";
          document.getElementById("timeSeconds").innerHTML = playTime/60 + "<br> Mins.";
          document.getElementById("timeHours").innerHTML =   ((playTime/60)/60).toFixed(2) + "<br>Hours";
          document.getElementById("winnerText").innerHTML = "PLAYER ONE WINS"; 
        if (playTime > 4000) {
          console.log("YIKES");
        }
        playerOneCards.length = 0;
        playerTwoCards.length = 0;
        playerOneValue = 0;
        playerTwoValue = 0;
        playTime = 0;
        roundNumber = 0;
        document.getElementById("gameNumber").innerHTML = "Game number " + gameNumber;
        playingWar = false;
      } else if (playerTwoCards.length >= 52) {
        playerOneCards.length = 0;
        console.log("PLAYER TWO WINS after " + roundNumber + " rounds!");
        console.log("If you'd played this game in real life instead of using a computer, you'd have spent " + playTime + " seconds, " + playTime/60 + " minutes, or " + (playTime/60)/60 + " hours "/*spanning over "/* + moves + " moves." */);
        document.getElementById("roundsPlayed").innerHTML = roundNumber + "<br> Rounds";
        document.getElementById("timeSeconds").innerHTML = playTime/60 + "<br> Mins.";
        document.getElementById("timeHours").innerHTML =   ((playTime/60)/60).toFixed(2) + "<br>Hours";
        document.getElementById("winnerText").innerHTML = "PLAYER TWO WINS"; 
        if (playTime > 4000) {
          console.log("YIKES");
        }
        playerOneCards.length = 0;
        playerTwoCards.length = 0;
        playerOneValue = 0;
        playerTwoValue = 0;
        playTime = 0;
        roundNumber = 0;
        document.getElementById("gameNumber").innerHTML = "Game number " + gameNumber;
        playingWar = false;
      }
  } else {
    return;
  }
}

function reload () {
  location.reload();
  document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM loaded");
    playWar();
});
}