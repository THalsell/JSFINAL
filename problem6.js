function getPlace(highScores, newScore) {
    if (newScore > highScores[0]) {
        return "First Place"
    } if (newScore < highScores[highScores.length -1]) {
        return "Sorry you didn't make the score list."
    }
    for (let i = 0; i < highScores.length; i++) {
        if (newScore >= highScores[i]) {
            return "Congratulations"
        }
    }
}

console.log(getPlace([60, 30, 10], 90))