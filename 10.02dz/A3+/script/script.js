var test = prompt('Введите строку');


function palindrom(str) {
    str = str.toLowerCase().split('ь').join('').split('ъ').join('').split('ё').join('е').split(' ').join('').split(',').join('')
        .split('.').join('').split('!').join('').split('?').join('').split(';').join('').split('"').join('').split(':').join('').split('-').join('');
    var strReverse = str.split('').reverse().join('');
    if (str == strReverse) {
        return true;
    }
    else {
        return false;
    }
}

if (palindrom(test) == true) {
    alert("Это палиндром");
}
if (palindrom(test) != true) {
    alert("Это не палиндром");
}
