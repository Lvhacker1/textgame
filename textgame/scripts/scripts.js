const correctWords =["developer", "framework", "design", "fullstack", "coding"];
let gameRunning = true;
const pattern = /[^a-z]/

alert("Welcome to Wordle!")

gameLoop:while (gameRunning) {
    let wordIndex = Math.floor(Math.random() * correctWords.length);
    const wordCollection = correctWords[wordIndex].split('')
    let mixedWord
    let correctWord = correctWords[wordIndex];
    let letterHint = "_".repeat(correctWord.length);
   
    for(let i = wordCollection.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = wordCollection[i];
        wordCollection[i] = wordCollection[j];
        wordCollection[j] = temp;
    }

    mixedWord = wordCollection.join('');
    let guesses = 5;
    let sessionLoop = true;

    alert("New game starting. You have 5 guesses.")
    alert("The words are programming related. Let's start!")

    sessionLoop:while (sessionLoop) {
        let answer = window.prompt(`Your word is ${mixedWord}. Make a guess: `)
        
        if (answer === null) {
            alert("Quitting game. GG")
            gameRunning = false;
            sessionLoop = false;
            continue;
        }

        answer = answer.toLowerCase()

        if (answer.length < 1) {
            alert("Input field cannot be empty!")
            continue;
        } else if (pattern.test(answer)) {
            alert("Only a-z letters allowed!")
            continue;
        }

        let correctLetter = 0;
        for (let i = 0; i < correctWord.length; i++) {
            if (answer[i] === correctWord[i]) {
                correctLetter++;
            }
        }

        if (correctWord === answer) {
            alert(`You won GG. Correct word: ${correctWord}.`)
            sessionLoop = false;
        } else {
            guesses--;
            if (guesses === 0) {
                alert(`Game over n00b. You lost. Correct word: ${correctWord}`)

                let playAgain = window.confirm("Do you want to play again?");
                if (playAgain) {
                    sessionLoop = false;
                } else {
                    alert("See you. GG");
                    gameRunning = false;
                    sessionLoop = false;
                }

            } else {
                let hintIndex = letterHint.indexOf("_");
                if (hintIndex !== -1) {
                    letterHint = letterHint.substring(0, hintIndex)+ correctWord[hintIndex] + letterHint.substring(hintIndex + 1);

                }
                alert(`You've got ${correctLetter} letters correct. Hint: ${letterHint}.  You have ${guesses} ${guesses === 1 ? "guess" : "guesses"} left.`)
            }
        }
    }
}





