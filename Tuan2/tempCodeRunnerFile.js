// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}
// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// 2. Use the function to calculate the average for both teams
// Data 1
console.log("Data 1 : ")
// Team 1
var avgDolphins1 = calcAverage(44, 23, 71)
console.log(avgDolphins1)
// Team 2
var avgKoalas1 = calcAverage(65, 54, 49)
console.log(avgKoalas1)
// Data 2
console.log("Data 2 : ")
// Team 1
var avgDolphins2 = calcAverage(85, 54, 41)
console.log(avgDolphins2)
// Team 2
var avgKoalas2 = calcAverage(23, 34, 27)
console.log(avgKoalas2)
// 3. Create a function 'checkWinner' that takes the average score of each team  as parameters ('avgDolhins' and 'avgKoalas'), 
//and then logs the winner to the console, together with the victory points, according to the rule above. 
// Example: "Koalas win (30 vs. 13)"
checkWinner = (avgDolhins, avgKoalas) => {
    if (avgDolhins > avgKoalas) {
        return "Dolphins win (" + avgDolhins + " vs. " + avgKoalas + ")";
    }
    else if (avgDolhins < avgKoalas) {
        return "Koalas win (" + avgKoalas + " vs. " + avgDolhins + ")";
    }
    else return "Draw ( " + avgKoalas + " vs. " + avgDolhins + ")";
}

// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
console.log("Data 1 : ")
console.log(checkWinner(avgDolphins1, avgKoalas1))
console.log("Data 2 : ")
console.log(checkWinner(avgDolphins2, avgKoalas2))
// 5. Ignore draws this time
// Test data:
