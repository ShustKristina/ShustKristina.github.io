//1ый вариант
var test = prompt("Введите строку").split("А").join("а").split("Я").join("я").split("Е").join("е").split("Э").join("э").split("О").join("о").split("Ё").join("ё").split("У").join("у").split("Ю").join("ю").split("Ы").join("ы").split("И").join("и").split("");

//1ый способ: метод forEach

function countVowels(arg) {
    var vowels = ["а", "я", "е", "э", "о", "ё", "у", "ю", "ы", "и"];
    var counter = 0;
    arg.forEach(function(v) {
        if (vowels.includes(v)) {
            counter++;
        }
    });
    return counter;
}
console.log("Количество русских гласных в строке: " + countVowels(test));

//2oй способ: метод filter

function countVowels2(arg) {
    var vowels = ["а", "я", "е", "э", "о", "ё", "у", "ю", "ы", "и"];
    var filterArr = arg.filter(function(v) {
        return vowels.includes(v);
    });
    return filterArr.length;
}
console.log("Количество русских гласных в строке: " + countVowels2(test));

//3ий способ: метод reduce

function countVowels3(arg) {
    var vowels = ["а", "я", "е", "э", "о", "ё", "у", "ю", "ы", "и"];
    var counter;
    var result = test.reduce(function(prevValue, curValue) {
        if (vowels.includes(curValue)) {
            counter = prevValue.concat(curValue);
        }
        else {
            counter = prevValue;
        }
        return counter;
    });

    return result.length;
}
console.log("Количество русских гласных в строке: " + countVowels3(test));