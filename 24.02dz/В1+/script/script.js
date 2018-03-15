function convertYearInCentury(arg) {
    return +arg.substring(0, 2) + 1;
}
var test = prompt("Введите любой год", "1789");
alert("Это " + convertYearInCentury(test) + " век");