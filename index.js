let playerButtons = document.querySelectorAll(".player").length;
let CPUR = document.querySelector('.CPU-Response').textContent;
let CPUGuess = ["Rock", "Paper", "Scissors"];
let Player1Score = 0;
let CPUScore = 0;
let playing = true;

for (var i = 0; i < playerButtons; i++) {

    document.querySelectorAll(".player")[i].addEventListener("click", function () {

        if (playing) {

            let buttonInnerHTML = this.innerHTML;
            playerClick(buttonInnerHTML);

            if (buttonInnerHTML == "Rock" && CPUR == CPUGuess[2] || buttonInnerHTML == "Paper" && CPUR == CPUGuess[0] || buttonInnerHTML == "Scissors" && CPUR == CPUGuess[1]) {
                Player1Score += 1;

                document.querySelector(".Player-score").textContent = "Player Score: " + Player1Score;

            } else if (buttonInnerHTML == "Rock" && CPUR == CPUGuess[1] || buttonInnerHTML == "Paper" && CPUR == CPUGuess[2] || buttonInnerHTML == "Scissors" && CPUR == CPUGuess[0]) {

                CPUScore += 1;
                document.querySelector(".CPU-score").textContent = "CPU Score: " + CPUScore;


            } else {
                console.log("Its a draw");
            }

            let finalscore = document.querySelector('.final-score').value;

            if (finalscore) {

                finalscore;
            } else {

                finalscore = 10;
            }

            if (Player1Score >= finalscore) {
                document.querySelector(".Player-score").textContent = "You Win!!";
                playing = false;
            } else if (CPUScore >= finalscore) {
                document.querySelector(".CPU-score").textContent = "CPU Wins!!";
                playing = false;
            }


        }
    });
};


function playerClick(click) {

    let randomCPUGuess = Math.floor(Math.random() * 3);
    switch (click) {

        case "Rock":
            document.querySelector('.player-img').setAttribute("src", "images/" + click + ".png");
            break;

        case "Paper":
            document.querySelector('.player-img').setAttribute("src", "images/" + click + ".png");
            break;

        case "Scissors":
            document.querySelector('.player-img').setAttribute("src", "images/" + click + ".png");
            break;
    }
    document.querySelector('.cpu-img').setAttribute("src", "images/" + CPUGuess[randomCPUGuess] + ".png");
    CPUR = CPUGuess[randomCPUGuess];

}

document.querySelector(".newGamebtn").addEventListener("click", function () {

    Player1Score = 0;
    CPUScore = 0;
    playing = true;
    document.querySelector(".final-score").value = "";
    document.querySelector(".Player-score").textContent = "Player Score: " + Player1Score;
    document.querySelector(".CPU-score").textContent = "CPU Score: " + CPUScore;
    document.querySelector('.player-img').setAttribute("src", "images/Default.jpg");
    document.querySelector('.cpu-img').setAttribute("src", "images/Default.jpg");

});
