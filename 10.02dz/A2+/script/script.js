var test = prompt('Введите текст');

function trim(str) {
    var spaceStart = 0,
        spaceEnd = 0,
        i = 0,
        j = str.length - 1;

    while (str[i] == " ") {
        spaceStart++;
        i++;
    }

    while (str[j] == " ") {
        spaceEnd++;
        j--;
    }
    return str.substring(spaceStart, str.length - spaceEnd);
    
    //можно еще так записать return str.substring(i, j+1);
    //тогда переменные spaceStart, spaceEnd вообще не нужны будут
}
console.log("<" + trim(test) + ">");