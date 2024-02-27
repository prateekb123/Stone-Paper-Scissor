let items = ["paper", "scissor", "rock"]
let userScore = 0
let compScore = 0
let msg = document.querySelector("#msg")

const showWinner=(userWin, userChoice, compChoice) =>{
    if(userWin){
        msg.innerHTML = `You won by selecting ${userChoice}`;
        userScore++;
        document.querySelector("#user-score").innerHTML = userScore
        msg.style.backgroundColor = 'Green'
    }
    else{
        msg.innerHTML = `You lost by selecting ${userChoice}, Comp choose ${compChoice}`;
        compScore++;
        document.querySelector("#comp-score").innerHTML = compScore
        msg.style.backgroundColor = 'Red'
    }
}

const playFunc = (userChoice) => {
    // const userChoice  = choice.getAttribute("id")
    let compChoice = items[Math.floor(Math.random()*items.length)]
    console.log(compChoice)
    if (userChoice === compChoice) {
        msg.innerHTML = "Game Draw"
        msg.style.backgroundColor = 'Blue'
      } else {
        let userWin = true;
        if (userChoice === "rock") {
          //scissors, paper
          userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
          //rock, scissors
          userWin = compChoice === "scissor" ? false : true;
        } else {
          //rock, paper
          userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
      }
} 




const choices = document.querySelectorAll(".choice")


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playFunc(userChoice);
    });
  });