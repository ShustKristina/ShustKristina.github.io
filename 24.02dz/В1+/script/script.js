function convertYearInCentury(arg) {
    return (arg % 100 == 0)?arg / 100:Math.floor(arg / 100 + 1);  
}
var test = +prompt("Введите год", "1875");
alert("Это " + convertYearInCentury(test) + " век");