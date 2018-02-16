var test = prompt('Введите строку');


function palindrom(str) {
    str = str.toLowerCase().split('ь').join('').split('ъ').join('').split('ё').join('е').split(' ').join('').split(',').join('')
        .split('.').join('').split('!').join('').split('?').join('').split(';').join('').split('"').join('').split(':').join('').split('-').join('');
    var strReverse = str.split('').reverse().join('');
    if (str == strReverse) {
        return 'Это палиндром';
    }
    else {
        return 'Это не палиндром';
    }
}

alert(palindrom(test));
