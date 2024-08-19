var calculateTip = function(billvalues) {
    var tip = 0;
    if (billvalues >= 50 && billvalues <= 300) {
        tip = billvalues * 0.15
    }
    else tip = billvalues * 0.2
    return tip
}
// Data 1: Test for bill values 275, 40 and 430
var printMoney = function(bill, tip, total) {
    console.log("The bill was " + bill + ", the tip was " + tip + ", and the total value " + total)
}

printMoney(275, calculateTip(275), 275 + calculateTip(275))
printMoney(40, calculateTip(40), 40 + calculateTip(40))
printMoney(430, calculateTip(430), 430 + calculateTip(430))