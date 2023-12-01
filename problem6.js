function getPlace(highScores, newScore) {
    if (newScore > highScores[0]) {
        return "Congratulations! You achieved first Place"
    } if (newScore < highScores[highScores.length -1]) {
        return "Sorry you didn't make the high score list."
    }
    for (let i = 0; i < highScores.length; i++) {
        if (newScore >= highScores[i]) {
            return "Congratulations! You achieved 2nd place!"
        }
    }
}

console.log(getPlace([500, 300, 200], 100))