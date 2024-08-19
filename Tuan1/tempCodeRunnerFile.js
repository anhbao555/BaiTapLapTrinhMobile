var Markmass;
var Johnmass;
var Markheight;
var Johnheight;

var bmi = function(mass, height) {
    return mass / (height * height)
}
var markHigherBMI;
// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
Markmass = 78
Markheight = 1.69
Johnmass = 92
Johnheight = 1.95
var Markbmi = bmi(Markmass, Markheight)
var Johnbmi = bmi(Johnmass, Johnheight)
console.log("BMI of Mark in Data 1 : " + Markbmi)
console.log("BMI of John in Data 1 : " + Johnbmi)
markHigherBMI = Markbmi - Johnbmi
if (markHigherBMI > 0) {
    console.log("Mark's BMI is higher than John's! in Data 1 \n")
}
else console.log("John's BMI is higher than Mark's! in Data 1 \n")
// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.
Markmass = 95
Markheight = 1.89
Johnmass = 85
Johnheight = 1.76
var Markbmi = bmi(Markmass, Markheight)
var Johnbmi = bmi(Johnmass, Johnheight)
console.log("BMI of Mark in Data 2 : " + Markbmi)
console.log("BMI of John in Data 2 : " + Johnbmi)
markHigherBMI = Markbmi - Johnbmi
if (markHigherBMI > 0) {
    console.log("Mark's BMI (" + Markbmi + ") is higher than John's (" + Johnbmi + ")! in Data 2 \n")
}
else console.log("John's BMI (" + Johnbmi + ") is higher than Mark's (" + Markbmi + ")! in Data 2 \n")