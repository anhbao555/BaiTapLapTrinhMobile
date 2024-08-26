calcTip = (billvalues) => {
    var tip = 0;
    if (billvalues >= 50 && billvalues <= 300) {
        tip = billvalues * 0.15
    }
    else tip = billvalues * 0.2
    return tip
}

// 1. Create an array 'bills' containing all 10 test bill values
var bills = [125, 555, 44, 66, 250, 500, 1000, 50, 300, 25]
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
var tips = []
var totals = []
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
for (let i = 0; i < 10; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + tips[i];
}
console.log("Bills : " + bills.join(", "))
console.log("Tips : " + tips.join(", "))
console.log("Totals : " + totals.join(", "))