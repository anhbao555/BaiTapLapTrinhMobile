
// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// 1. Calculate the average score for each team, using the test data below
console.log("Data 1 : \n")
var averagefn = function(score1, score2, score3) {
    return (score1 + score2 + score3) / 3
}

var averageDolphins = averagefn(96, 108, 89)
var averageKoalas = averagefn(88, 91, 110)
console.log("Dolphins : " + averageDolphins)
console.log("Koalas : " + averageKoalas)
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
var rules = function(Dolphins, Koalas) {
    if (Dolphins > Koalas) {
        console.log("Dolphins team is the winner of the competition \n")
    }
    else if (Dolphins == Koalas) {
        console.log("Result is draw \n")
    }
    else console.log("Koalas team is the winner of the competition \n")
}
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
var rules100 = function(Dolphins, Koalas) {
    if (Dolphins == Koalas) {
        console.log("Result is draw \n")
    }
    else if (Dolphins >= 100) {
        if (Dolphins > Koalas) {
            console.log("Dolphins team is the winner of the competition \n")
        }
        else console.log("Koalas team is the winner of the competition \n")
    }
    else if (Koalas >= 100) {
        if (Koalas > Dolphins) {
            console.log("Koalas team is the winner of the competition \n")
        }
        else console.log("Dolphins team is the winner of the competition \n")
    }
    else console.log("No team wins the trophy \n")
}
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
var rules100draw = function(Dolphins, Koalas) {
    if (Dolphins >= 100) {
        if (Dolphins > Koalas) {
            console.log("Dolphins team is the winner of the competition \n")
        }
        else if (Dolphins == Koalas) {
            console.log("Result is draw \n")
        }
        else console.log("Koalas team is the winner of the competition \n")
    }
    else if (Koalas >= 100) {
        if (Koalas > Dolphins) {
            console.log("Koalas team is the winner of the competition \n")
        }
        else if (Koalas == Dolphins) {
            console.log("Result is draw \n")
        }
        else console.log("Dolphins team is the winner of the competition \n")
    }
    else console.log("No team wins the trophy \n")
}
console.log(rules(averageDolphins, averageKoalas))
console.log(rules100(averageDolphins, averageKoalas))
console.log(rules100draw(averageDolphins, averageKoalas))
// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
console.log("Data Bonus 1 : \n")
averageDolphins = averagefn(97, 112, 101)
averageKoalas = averagefn(109, 95, 123)
console.log("Dolphins : " + averageDolphins)
console.log("Koalas : " + averageKoalas)

console.log(rules(averageDolphins, averageKoalas))
console.log(rules100(averageDolphins, averageKoalas))
console.log(rules100draw(averageDolphins, averageKoalas))
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
console.log("Data Bonus 2 : \n")
averageDolphins = averagefn(60, 80, 100)
averageKoalas = averagefn(80, 80 , 80)
console.log("Dolphins : " + averageDolphins)
console.log("Koalas : " + averageKoalas)

console.log(rules(averageDolphins, averageKoalas))
console.log(rules100(averageDolphins, averageKoalas))
console.log(rules100draw(averageDolphins, averageKoalas))