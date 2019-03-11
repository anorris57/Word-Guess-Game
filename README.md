# Word-Guess-Game
##  Create Hangman game featuring dynamically updated HTML and CSS using javascript.

##  Build Process in reference to javascript

1.  Create [array](https://www.w3schools.com/js/js_arrays.asp) that contains word choices
2.  Create logic to get [random word](https://medium.freecodecamp.org/creating-a-bare-bones-quote-generator-with-javascript-and-html-for-absolute-beginners-5264e1725f08)
3.  Create [global variables](https://www.w3schools.com/js/js_scope.asp)
4.  Set up [startUp](https://www.w3schools.com/tags/ev_onload.asp) function to fill array with blanks of random word.
5.  Set up [document.onkeyup](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeyup) function to run game
6.  Grab key that was pushed
7.  Change letter to [lower case](https://www.w3schools.com/jsref/jsref_tolowercase.asp)
8.  Run [comparsion](https://www.w3schools.com/js/js_loop_for.asp) of chosen letter to letter in [word array](https://www.w3schools.com/js/js_if_else.asp)
9.  Update [html](https://www.w3schools.com/jsref/met_document_getelementbyid.asp).
10. Create logic to add letter to letterchoice array and to answer array if in word. Also increase count to decrease remaining guesses if wrong letter picked.
11. Create logic to decide if game is won or lose.
12. Set [time out](https://www.w3schools.com/js/js_timing.asp) included to restart game. 

## Future 
1.  Create logic so that words with duplicate letters can be used
2.  Make containers responsive to word size.
