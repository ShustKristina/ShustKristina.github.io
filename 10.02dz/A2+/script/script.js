var test = prompt('Введите текст');

function trim(str) {
    str = str.split('');
    for (var i = 0; i < str.length; i++) {
        if (str[0] == " ") {
            str.shift();
        }
    }
    for (var j = str.length - 1; j >= 0; j--) {
        if (str[str.length - 1] == " ") {
            str.pop();
        }
    }
    return str.join(" ");
}
console.log("<" + trim(test) + ">");