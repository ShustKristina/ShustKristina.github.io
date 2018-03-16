var test = prompt("Введите любую строку", "МАМА мыла раму").toLowerCase();

//1ый вариант
//самый неэффективный
console.time('function 1 (вложенные циклы)');

function vowelsCounter(letter) {

    var vowels = ["а", "я", "е", "э", "о", "ё", "у", "ю", "ы", "и"]; //массив, состоящий из русских гласных
    var counter = 0; //счетчику присваивается значение 0 
    for (var i = 0; i < letter.length; i++) { //цикл, который перебирает все символы строки
        for (var v = 0; v < vowels.length; v++) { //цикл, который перебирает все гласные
            if (letter[i] == vowels[v]) //счетчик будет увеличиваться на 1 при условии, что какой-либо символ строки равен гласной букве
                counter++;
        }
    }
    return counter; //возврат счетчика
}

console.log("Количество русских гласных в строке: " + vowelsCounter(test)); //Вывод в консоль инф-ции о кол-ве гласных в строке, введенной пользователем
console.timeEnd('function 1 (вложенные циклы)');


//ЛУЧШИЙ СПОСОБ!
//2ой вариант
console.time('function 2 (с помощью indexOf)');

function counterVowels2(letter) {

    var vowels = ["а", "я", "е", "э", "о", "ё", "у", "ю", "ы", "и"]; //массив, состоящий из русских гласных
    var counterVowels = ''; // Задаем переменную, в которую будут заносится встречающиеся в тестовой строке гласные

    for (var i = 0; i < letter.length; i++) { //цикл, который перебирает все символы тестовой строки
        if (vowels.indexOf(letter[i]) > -1) { //Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве 
            counterVowels++; // добавляем гласные
        }
    }
    return counterVowels; // возвращаем длину полученной строки
}
console.log("Количество гласных в строке: " + counterVowels2(test));
console.timeEnd('function 2 (с помощью indexOf)');


//3ий вариант
console.time('function 3 (с помощью хэша)');

function counterVowels3(letter) {

    //хэш, состоящий из русских гласных
    var vowels3 = { а: "1", я: "2", е: "3", э: "4", о: "5", ё: "6", у: "7", ю: "8", ы: "9", и: "10"};
    var counterVowels = ''; // Задаем переменную, в которую будут заносится встречающиеся в тестовой строке гласные

    for (var i = 0; i < letter.length; i++) { //цикл, который перебирает все символы тестовой строки
        if (letter[i] in vowels3) { //проверяем, есть ли iый элемент строки в хэше
            counterVowels++; // добавляем гласные
        }
    }
    return counterVowels; // возвращаем длину полученной строки
}
console.log("Количество гласных в строке: " + counterVowels3(test));
console.timeEnd('function 3 (с помощью хэша)');
