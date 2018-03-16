function convertYearInCentury(arg) {
    return Math.floor(arg/100+1);
}
var test = 1875;
alert("Это " + convertYearInCentury(test) + " век");