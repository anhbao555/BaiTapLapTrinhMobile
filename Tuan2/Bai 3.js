// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
var Mark = {
    full_name : "Mark Miller",
    mass : 78,
    height : 1.69
}

var John = {
    full_name : "John Smith",
    mass : 92,
    height : 1.95
}
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). 
// Store the BMI value to a property, and also return it from the method
calcBMI = (mass, height) => {
    return mass / (height * height)
}
var MarkBMI = calcBMI(Mark.mass, Mark.height)
var JohnBMI = calcBMI(John.mass, John.height)
console.log(MarkBMI, JohnBMI)
// 3. Log to the console who has the higher BMI, together with the full name and the 
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
checkHigherBMI = (JohnBMI, MarkBMI) => {
    if (JohnBMI > MarkBMI) {
        console.log("John's BMI (" + JohnBMI + ") is higher than Mark's (" + MarkBMI + ")")
    }
    else if (JohnBMI < MarkBMI) {
        console.log("Mark's BMI (" + MarkBMI + ") is higher than John's (" + JohnBMI + ")")
    }
    else console.log('They have same BMI')
}
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall
checkHigherBMI(JohnBMI, MarkBMI)

