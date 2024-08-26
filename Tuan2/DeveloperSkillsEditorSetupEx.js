// Create a function 'printForecast' which takes in an array 'arr' and logs a 
// string like the above to the console. Try it with both test datasets.
printForecast = (array) => {
    var str = {};
    for (let i = 0; i < array.length; i++) {
        var onestr = {}
        onestr = "..." + array[i] + ".C in " + (i + 1) + " days "
        str += onestr;
    }
    return str;
}
// Data 1: [17, 21, 23]
var arr = [17, 21, 23]
console.log("Ket qua : ")
console.log(printForecast(arr))
// Data 2: [12, 5, -5, 0, 4]