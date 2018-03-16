function convertYearInCentury(arg) {
    return Math.floor(arg/100+1);
}
var test = +("Введите год", "1875");
alert("Это " + convertYearInCentury(test) + " век");