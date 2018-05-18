//AJAX
var stringName = 'SHUST_MEMORY_GAME';
var password; //переменная для хранения пароля
var AjaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
var Storage = [];

//функция берет с сервера данные 
function RefreshStorage() {
    $.ajax({
        url: AjaxHandlerScript,
        type: 'POST',
        data: { f: 'READ', n: stringName },
        cache: false,
        success: ReadReady,
        error: ErrorHandler
    }
    );
}
RefreshStorage();
// функция записывает данные в массив
function ReadReady(ResultH) {
    if (ResultH.error != undefined)
        alert("Извините, сохранение рекордов временно не доступно.\n" + ResultH.error);
    else {
        if (ResultH.result != "") 
        {
            Storage = JSON.parse(ResultH.result);
        }
    }
}

function saveResult() {
    var userName = window.localStorage["UserName"];
    var time = (parseFloat(window.localStorage["TimeMin"])) * 60 + parseFloat(window.localStorage["TimeSec"]);
    var steps = +window.localStorage["Steps"];
    Storage.unshift({ name: userName, score: time, steps: steps });
    if (Storage.length > 10) {
        Storage.pop();
    }
    Storage.sort(CompareScore);

    password = Math.random();
    $.ajax({
        url: AjaxHandlerScript,
        type: 'POST',
        data: { f: 'LOCKGET', n: stringName, p: password },
        cache: false,
        success: LockGetReady,
        error: ErrorHandler
    }
    );
}

function LockGetReady(ResultH) {
    if (ResultH.error != undefined)
        alert("Извините, запись рекордов временно не доступна.\n" + ResultH.error);
    else {
        $.ajax({
            url: AjaxHandlerScript,
            type: 'POST',
            data: {
                f: 'UPDATE', n: stringName,
                v: JSON.stringify(Storage), p: password
            },
            cache: false,
            success: UpdateReady,
            error: ErrorHandler
        }
        );
    }
}

function UpdateReady(ResultH) {
    if (ResultH.error != undefined)
        console.log("Извините, запись рекордов временно не доступна.\n" + ResultH.error);
}

function ErrorHandler(jqXHR, StatusStr, ErrorStr) {
    console.log("Извините, запись рекордов временно не доступна.\n" + StatusStr + ' ' + ErrorStr);
}

function CompareScore(A, B) {
    return A.score - B.score;
}