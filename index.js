
let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let teamHome = document.getElementById("team-header-home")
let teamGuest = document.getElementById("team-header-guest")
let gameResult = document.getElementById("game-result")

function lead(){
    console.log("lead")

    scoreHomeNum = Number(scoreHome.textContent)
    scoreGuestNum = Number(scoreGuest.textContent)

    if(scoreHomeNum > scoreGuestNum){
        teamHome.textContent = "HOME 👑"
        teamGuest.textContent = "GUEST"
    }else if(scoreHomeNum < scoreGuestNum){
        teamHome.textContent = "HOME"
        teamGuest.textContent = "GUEST 👑"
    }else{
        teamHome.textContent = "HOME"
        teamGuest.textContent = "GUEST"
    }
}

function add(team, increment){
    gameResult.textContent = ""
    if(team == "H"){
        scoreHome.textContent = Number(scoreHome.textContent) + increment
    }else{
        scoreGuest.textContent = Number(scoreGuest.textContent) + increment
    }
    lead()
}


function resetScore(){
    scoreHome.textContent = 0
    scoreGuest.textContent = 0
    gameResult.textContent = ""
    lead()
}

function endGame(){
    scoreHomeNum = Number(scoreHome.textContent)
    scoreGuestNum = Number(scoreGuest.textContent)

    if(scoreHomeNum > scoreGuestNum){
        gameResult.textContent = "Congratulations to the HOME Team 👑 with a score of " + scoreHomeNum + " - " + scoreGuestNum
    }else if(scoreHomeNum < scoreGuestNum){
        gameResult.textContent = "Congratulations to the GUEST Team 👑 with a score of " + scoreGuestNum + " - " + scoreHomeNum 
    }else{
        gameResult.textContent = "The game has ended in a TIE! 🤝🏼 with a score of " + scoreHomeNum + " - " + scoreGuestNum
    }
}