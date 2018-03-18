function convertYearInCentury(arg) {
    return Math.ceil(arg / 100);  
}
var test = +prompt("Введите год", "1875");
alert("Это " + convertYearInCentury(test) + " век");