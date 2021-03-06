// 1. computer need to pick a random number
let computerNum = Math.floor(Math.random()*100) + 1
let historyNum = []
let time = 20
let myTime
console.log("This is the number that computer chose: ", computerNum)

// 2. when user click the guess, it will fire a function
function guessNumber(){
    console.log("Fireeeee")
    // 3. grab the value that user typed
    let userNum = document.getElementById("guessComputerNumber").value
    let resultMessage = " "
    // 4. compare with the value computer picked with user value
    if(userNum < 0 || userNum > 100){
        disabledButton()
        timeOut()
        alert("You lose!")
    } else if(computerNum > userNum){              
        resultMessage = "Too low"
    } else if(computerNum < userNum){        
        resultMessage = "Too high"
    } else if(computerNum == userNum){     
        resultMessage = "Correct"
    }

    if(historyNum.length < 4){
        historyNum.push(userNum)
    } else {
        historyNum.push(userNum)
        document.getElementById("turnCount").innerHTML = `Out of turns`
        timeOut()
        disabledButton()
    }
    
    // keep the history
    document.getElementById("resultArea").innerHTML = `${resultMessage}` // 8. show the result to user
    document.getElementById("historyArea").innerHTML = `History: ${historyNum}` //show the history
}

function timeCounting(){
    myTime = setInterval(() => {
        time -= 1
        document.getElementById("timeCount").innerHTML = `Time left: ${time} second`
        if(time <= 0){
            document.getElementById("timeOver").innerHTML = "Time Over!"
            timeOut()
            disabledButton()
        }
    }, 1000)// every 1 second, it will add 1 into time variable (computer use millisecond so 1000 is 1 second)
}
timeCounting()


function timeOut() {
    clearInterval(myTime);
}


function resetEverything(){
    // do something
    document.getElementById("turnCount").innerHTML = `*NOTE: You have only 5 turns to guess.`
    document.getElementById("buttonGuess").disabled = false
    document.getElementById("historyArea").innerHTML = `History: `
    timeOut()
    document.getElementById("timeCount").innerHTML = `Time left: `
    time = 20
    timeCounting()
    document.getElementById("timeOver").innerHTML = `HURRY UP `
    
}

function disabledButton(){
    // do something
    document.getElementById("buttonGuess").disabled = true
}




