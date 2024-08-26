// 1. Write a function 'calcTip' that takes any bill value as an input and returns 
calcTip = (billvalues) => {
    var tip = 0;
    if (billvalues >= 50 && billvalues <= 300) {
        tip = billvalues * 0.15
    }
    else tip = billvalues * 0.2
    return tip
}
// the corresponding tip, calculated based on the rules above (you can check out 
// the code from first tip calculator challenge if you need to). Use the function 
// type you like the most. Test the function using a bill value of 100
console.log("The tip of a bill value of 100 : " + calcTip(100))
// 2. And now let's use arrays! So create an array 'bills' containing the test data below
// Test data: 125, 555 and 44
console.log("Arrays : ")
var bills = [125, 555, 44]
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
var tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log("Bills : " + bills.join(", "))
console.log("Tips : " + tips.join(", "))
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
var total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log("Total : " + total.join(", "))