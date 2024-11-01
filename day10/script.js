let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score")
const computerScorePara = document.querySelector("#computer-score")

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3)
    return options[randIdx];
};



const score = () => {
    computerScore++;
    computerScorePara.innerHTML = computerScore;
}
const score1 = () => {
    userScore++;
    userScorePara.innerHTML = userScore;
}

const showWinner = (userwin, userChoice, compChoice) => {
    if (userwin) {
        score1();
        msg.innerHTML = `you win this game! "${userChoice}" beate "${compChoice}"`;
        msg.style.color = "green";
    } else {
        msg.innerHTML = `you lose this game! "${userChoice}" beate "${compChoice}"`;
        msg.style.color = "red";
        score();

    }
}


const playGame = (userChoice) => {
    const drawGame = () => {
        msg.innerHTML = `game was draw Play again! "${userChoice}" beate "${compChoice}"`;
        msg.style.color = "#FDEFC7";
    };
    console.log(`user choice = ${userChoice}`);
    const compChoice = gencompchoice();
    console.log(`comp choice = ${compChoice}`);

    if (userChoice === compChoice) {
        // game draw
        drawGame();
    } else {
        let userwin = true;
        if (userChoice === "rock") {
            // scissors , paper
            userwin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock , scissors
            userwin = compChoice === "scissors" ? false : true;
        } else {
            // rock , paper
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });

});
