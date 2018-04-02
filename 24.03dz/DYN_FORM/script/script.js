function createForms(arr) {
    var form = document.createElement("form");
    var table = document.createElement("table");

    form.action = "http://fe.it-academy.by/TestForm.php";
    document.body.appendChild(form);
    form.appendChild(table);

    for (var i = 0; i < arr.length; i++) {
        var row = document.createElement("tr");
        var cell1 = document.createElement("td");
        var cell2 = document.createElement("td");
        var label = document.createElement("label");
        var input = document.createElement("input");

        label.innerHTML = arr[i].label;
        table.appendChild(row);
        row.appendChild(cell1);
        row.appendChild(cell2);
        cell1.appendChild(label);

        if (arr[i].kind == "longtext" || arr[i].kind == "shorttext" || arr[i].kind == "number") {
            input.type = 'text';
            input.name = arr[i].name;
            input.className = arr[i].kind;
            cell2.appendChild(input);
        }
        if (arr[i].kind == "submit") {
            label.innerHTML = null;
            input.type = "submit";
            input.value = arr[i].label;
            cell1.appendChild(input);
        }
        if (arr[i].kind == "combo") {
            var select = document.createElement("select");
            select.name = arr[i].name;
            cell2.appendChild(select);
            for (var j = 0; j < arr[i].variants.length; j++) {
                var option = document.createElement("option");
                option.value = arr[i].variants[j].value;
                option.innerHTML = arr[i].variants[j].text;
                select.appendChild(option);
            }
            document.querySelectorAll("option")[2].setAttribute("selected", true);
        }
        if (arr[i].kind == "radio") {
            for (var k = 0; k < arr[i].variants.length; k++) {
                var input = document.createElement("input");
                input.type = "radio";
                input.name = arr[i].name;
                input.value = arr[i].variants[k].value;
                cell2.appendChild(input);
                cell2.appendChild(document.createTextNode(arr[i].variants[k].text));
            }
        }
        if (arr[i].kind == "check") {
            input.type = "checkbox";
            cell2.appendChild(input);
            input.checked = true;
        }
        if (arr[i].kind == "memo") {
            var textarea = document.createElement("textarea");
            textarea.name = arr[i].name;
            cell1.colSpan = "2";
            cell2.remove();
            var newRow = document.createElement("tr");
            var newCell = document.createElement("td");
            newCell.colSpan = "2";
            table.appendChild(newRow);
            newRow.appendChild(newCell);
            newCell.appendChild(textarea);
        }
    }
}

var formDef1 = [
    {
        label: 'Название сайта:',
        kind: 'longtext',
        name: 'sitename'
    },
    {
        label: 'URL сайта:',
        kind: 'longtext',
        name: 'siteurl'
    },
    {
        label: 'Посетителей в сутки:',
        kind: 'number',
        name: 'visitors'
    },
    {
        label: 'E-mail для связи:',
        kind: 'shorttext',
        name: 'email'
    },
    {
        label: 'Рубрика каталога:',
        kind: 'combo',
        name: 'division',
        variants: [{
            text: 'здоровье',
            value: 1
        }, {
            text: 'домашний уют',
            value: 2
        }, {
            text: 'бытовая техника',
            value: 3
        }]
    },
    {
        label: 'Размещение:',
        kind: 'radio',
        name: 'payment',
        variants: [{
            text: 'бесплатное',
            value: 1
        }, {
            text: 'платное',
            value: 2
        }, {
            text: 'VIP',
            value: 3
        }]
    },
    {
        label: 'Разрешить отзывы:',
        kind: 'check',
        name: 'votes'
    },
    {
        label: 'Описание сайта:',
        kind: 'memo',
        name: 'description'
    },
    {
        label: 'Опубликовать',
        kind: 'submit'
    },
];

var formDef2 = [
    {
        label: 'Фамилия:',
        kind: 'longtext',
        name: 'lastname'
    },
    {
        label: 'Имя:',
        kind: 'longtext',
        name: 'firstname'
    },
    {
        label: 'Отчество:',
        kind: 'longtext',
        name: 'secondname'
    },
    {
        label: 'Возраст:',
        kind: 'number',
        name: 'age'
    },
    {
        label: 'Зарегистрироваться',
        kind: 'submit'
    },
];
createForms(formDef1);
createForms(formDef2);