 /*var randomElementsArr = ["hydrogen", "oxygen", "nitrogen", "silver", "lead", "gold", "iron", "lithuim", "helium", "cobalt"];*/
var randomElementsArr = ["hydrogen", "lithium","gold","silver","helium","gallium","boron","neon","xeon","zinc","calcium","sodium"]

var randomElement = randomElementsArr[Math.floor(Math.random() * randomElementsArr.length)];
    console.log(randomElement);

    
 //some global variables (can be used by any functions)
var s;
var count = 0; //counter
//empty array to store the guesses
var answerArray = [];
var userChoice = [];
var lockGame = false;
    
    


//here we fill the answer array with under scores
// Seperate step
function startUp(){
    for (var i = 0; i < randomElement.length; i++) {
        answerArray[i] = "_";
        //console.log(answerArray);
      }
      s = answerArray.join(" ");
      //console.log(s);
      document.getElementById("answer").innerHTML = s;
    }
    
   
    
document.onkeyup = function(event) {
// Determines which key was pressed.The event.key is a built in Javascript function
    if (lockGame !== true);
    var userGuess = event.key;
    
    var userInput = userGuess.toLowerCase();
    console.log(userInput);
    for (var j = 0; j < randomElement.length; j++) {
         if (randomElement[j] === userInput) {
           answerArray[j] = userInput;
           console.log(answerArray);
         }
    }
    
    userChoice.push(userGuess);
    document.getElementById("all").innerHTML ="Letters chosen so far: " + userChoice.join();
    document.getElementById("choice").innerHTML = "Your choice(s): " + userGuess.toUpperCase();
    count++;
    var numGuess = count;
    //console.log(count);
    var totalGuess = randomElement.length;
    //console.log(totalGuess);
    var remainingGuess = totalGuess - numGuess;
    console.log (remainingGuess);
    document.getElementById("counter").innerHTML = "Number of guesses remaining " + remainingGuess;
    document.getElementById("answer").innerHTML = answerArray.join(" "); 
    //end result of game
    if (remainingGuess === 0) {
      document.getElementById("result").innerHTML = "The correct answer is " + randomElement; //+ " ." + "<br>   Refresh page to try again.";
      function myFunction(){
        document.location.reload();
      }
      setTimeout(myFunction, 5000);
      lockGame = true;
    }  
}
    
    
  
  
    
    


