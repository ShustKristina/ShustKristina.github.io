// Функция, которая разбивает строку на массив чисел и операций (с учетом скобок и того, что числа могут быть отрицательные и дробные)

function parseString(str) {
    var calcArr = [],
        currentValue = '';
    for (var i = 0, symbol; symbol = str.charAt(i); i++) {
        if (')*/+-'.indexOf(symbol) > -1) {
            if (currentValue == '' && symbol == '-') {
                currentValue = '-';
            } else if (currentValue == '') {
                calcArr.push(symbol);
            } else {
                calcArr.push(parseFloat(currentValue), symbol);
                currentValue = '';
            }
        } else {
            currentValue += str.charAt(i);
        }
        if (symbol == '(') {
            calcArr.push(symbol);
            currentValue = "";
        }
    }
    if (currentValue != '') {
        calcArr.push(parseFloat(currentValue));
    }
    return calcArr;
}

//Функция, которая умеет считать выражения

function calcFragment(arr) {
    var newCalcArr = [],
        currentOperation;
    var operations = [{
            '*': function (a, b) {
                return a * b;
            },
            '/': function (a, b) {
                return a / b
            }
            },
        {
            '+': function (a, b) {
                return a + b
            },
            '-': function (a, b) {
                return a - b;
            }
            }];

    for (var i = 0; i < operations.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (operations[i][arr[j]]) {
                currentOperation = operations[i][arr[j]];
            } else if (currentOperation) {
                newCalcArr[newCalcArr.length - 1] =
                    currentOperation(newCalcArr[newCalcArr.length - 1], arr[j]);
                currentOperation = null;
            } else {
                newCalcArr.push(arr[j]);
            }
        }
        arr = newCalcArr;
        newCalcArr = [];
    }
    return arr[0];
}

//Функция, которая находит скобки, рассчитывает значение в скобках либо, если их нет, сразу рассчитывает выражение
function brackets(arr) {
    for (var k = 0; k <= arr.length; k++) {
        if (arr.includes("(") && arr.includes(")")) {
            var rightBracket = arr.indexOf(')');
            var fragment = arr.slice(0, rightBracket);
            var leftBracket = fragment.lastIndexOf("(");
            fragment = arr.slice(leftBracket + 1, rightBracket);
            arr.splice(leftBracket, fragment.length + 2, calcFragment(fragment));
        } else {
            return calcFragment(arr);
        }
    }
}

var test = "(5+7)*8";
var test2 = "((3*-2)*(5-2))/1";
var test3 = "3+4*5-2/1";
var test4 = prompt("Введите выражение, которое надо вычислить");

console.log("Pезультат вычисления выражения " + test + ": " + brackets(parseString(test)));
console.log("Pезультат вычисления выражения " + test2 + ": " + brackets(parseString(test2)));
console.log("Pезультат вычисления выражения " + test3 + ": " + brackets(parseString(test3)));
console.log("Pезультат вычисления выражения " + test4 + ": " + brackets(parseString(test4)));