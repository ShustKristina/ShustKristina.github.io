function convertYearInCentury(arg) {
    if (arg % 100 == 0) {
        return arg / 100;
    } else {
        return Math.floor(arg / 100 + 1);
    }
}
var test = +prompt("Введите год", "2000");
alert("Это " + convertYearInCentury(test) + " век");