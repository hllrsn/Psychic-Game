    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesSoFar = []; //array to push user guesses
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters computer can choose from

    document.onkeyup = function(event) {

        var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //takes in user guess
        var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; //computer selects random letter

        //if user guess is equal to computer choice, user wins
        guessesSoFar.push(userGuess); //pushes user guess to Guesses So Far
        if (userGuess === computerGuess) {
            wins++;
            alert("You Won!");
            guessesLeft = 9; //resets number of guesses back to 9, so user can play again
            guessesSoFar.length = 0; //removes data from the Guesses So Far array, so guesses from the last play don't show
        }
        //if user has 0 guesses left, user loses
        else if (guessesLeft === 0){
            losses++;
            alert("Sorry, you lost.  Try again!");
            guessesLeft = 9;
            guessesSoFar.length = 0;
        }
        //if user guess is not equal to computer guess, reduce the number of guesses left
        else if (userGuess !== computerGuess){
            guessesLeft--;
        }

        //displays the data in HTML    
        var html = "<h1>The Psychic Game</h1>" + 
        "<p>Guess what letter I'm thinking of...</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Your Guesses so far: " + guessesSoFar + "</p>"
        ;

        //inputs HTML with game ID
        document.querySelector("#game").innerHTML = html;
        // document.getElementById("game").innerHTML = html;
    }
