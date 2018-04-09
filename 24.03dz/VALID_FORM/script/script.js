var form = document.forms["validform"];
var develop = form.elements["developers"];
var nameSite = form.elements["nameSite"];
var addressSite = form.elements["addressSite"];
var date = form.elements["date"];
var visitors = form.elements["visitors"];
var email = form.elements["email"];
var catalog = form.elements["catalog"];
var cost = form.elements["cost"];
var review = form.elements["review"];
var description = form.elements["description"];

function validDevelopers(autoFocus) {
    var developValue = develop.value;
    var reg1 = /[а-яА-Я]/;
    var error = document.createElement('div');
    develop.parentElement.insertBefore(error, develop);

    if (developValue == "" || !reg1.test(developValue)) { //регулярные выражения знаю плохо, поэтому записала условие так, как смогла
        error.className = 'error'
        error.style.color = 'red'
        error.innerHTML = 'Поле не может быть пустым, содержать цифры и латинские буквы!';
        if (autoFocus) {
            develop.focus();
        }
        return true;
    } else {
        error.innerHTML = "&#10004;"
        develop.style.border = "1px solid green";
        return false;
    }
}

develop.addEventListener("blur", function () {
    validDevelopers(false)
});

function validNameSite(autoFocus) {
    var nameSiteValue = nameSite.value;
    var reg1 = /[а-яА-Я]/;
    var error = document.createElement('div');
    nameSite.parentElement.insertBefore(error, nameSite);

    if (nameSiteValue == "" || !reg1.test(nameSiteValue)) {
        error.className = 'error'
        error.style.color = 'red'
        error.innerHTML = 'Поле не может быть пустым, содержать цифры и латинские буквы!';
        if (autoFocus) {
            nameSite.focus();
        }
        return true;
    } else {
        error.innerHTML = "&#10004;"
        nameSite.style.border = "1px solid green";
        return false;
    }
}
nameSite.addEventListener("blur", function () {
    validNameSite(false)
});

function validAddressSite(autoFocus) {
    var addressSiteValue = addressSite.value;
    var reg3 = /^https:/;
    var error = document.createElement('div');
    addressSite.parentElement.insertBefore(error, addressSite);

    if (addressSiteValue == "" || !reg3.test(addressSiteValue)) {
        error.className = 'error'
        error.style.color = 'red'
        error.innerHTML = 'Поле не может быть пустым и URL начинается с https:!';
        if (autoFocus) {
            addressSite.focus();
        }
        return true;
    } else {
        error.innerHTML = "&#10004;"
        addressSite.style.border = "1px solid green";
        return false;
    }
}

addressSite.addEventListener("blur", function () {
    validAddressSite(false)
});

function validDate(autoFocus) {
    var dateValue = date.value;
    var reg4 = /[0-9]/;
    var error = document.createElement('div');
    date.parentElement.insertBefore(error, date);

    if (dateValue == "" || !reg4.test(dateValue)) {
        error.className = 'error'
        error.style.color = 'red'
        error.innerHTML = 'Поле не может быть пустым, введите число!';
        if (autoFocus) {
            date.focus();
        }
        return true;
    } else {
        error.innerHTML = "&#10004;"
        date.style.border = "1px solid green";
        return false;
    }
}
date.addEventListener("blur", function () {
    validDate(false);
});

function validVisitors(autoFocus) {
    var visitorsValue = visitors.value;
    var reg4 = /[0-9]/;
    var error = document.createElement('div');
    visitors.parentElement.insertBefore(error, visitors);

    if (visitorsValue == "" || !reg4.test(visitorsValue)) {
        error.className = 'error'
        error.style.color = 'red'
        error.innerHTML = 'Поле не может быть пустым, введите цифры!';
        if (autoFocus) {
            visitors.focus();
        }
        return true;
    } else {
        error.innerHTML = "&#10004;"
        visitors.style.border = "1px solid green";
        return false;
    }
}
visitors.addEventListener("blur", function () {
    validVisitors(false)
});

function validEmail(autoFocus) {
    var emailValue = email.value;
    var reg5 = /@gmail.com/;
    var error = document.createElement('div');
    email.parentElement.insertBefore(error, email);

    if (emailValue == "" || !reg5.test(emailValue)) {
        error.className = 'error'
        error.style.color = 'red'
        error.innerHTML = 'Поле не может быть пустым, название почты должно оканчиваться на @gmail.com!';
        if (autoFocus) {
            email.focus();
        }
        return true;
    } else {
        error.innerHTML = "&#10004;"
        email.style.border = "1px solid green";
        return false;
    }
}
email.addEventListener("blur", function () {
    validEmail(false)
});

function validCatalog(autoFocus) {
    var catalogValue = catalog.value;
    var reg4 = /[0-9]/;
    var error = document.createElement('div');
    catalog.parentElement.insertBefore(error, catalog);

    if (catalogValue == 1) {
        error.className = 'error'
        error.style.color = 'red'
        error.innerHTML = 'Выберите другой вариант!';
        if (autoFocus) {
            catalog.focus();
        }
        return true;
    } else {
        error.innerHTML = "&#10004;"
        catalog.style.border = "1px solid green";
        return false;
    }
}
catalog.addEventListener("change", function () {
    validCatalog(false)
});

function validCost(autoFocus) {
    var error = document.createElement('div');
    cost[0].parentElement.insertBefore(error, cost[0]);

    if (cost.value == "") {
        error.className = 'error'
        error.style.color = 'red'
        error.innerHTML = 'Выберите тип размещения!';
        if (autoFocus) {
            document.getElementsByClassName("cost1").scrollIntoView();
        }
        return true;
    } else {
        error.innerHTML = "&#10004;"
        date.style.border = "1px solid green";
        return false;
    }
}

cost[0].addEventListener("change", function () {
    validCost(false)
});

function validReview(autoFocus) {
    var error = document.createElement('div');
    review.parentElement.insertBefore(error, review);

    if (!review.checked) {
        error.className = 'error'
        error.style.color = 'red'
        error.innerHTML = 'Разрешите оставлять отзывы!';
        if (autoFocus) {
            review.focus();
        }
        return true;
    } else {
        error.innerHTML = "&#10004;"
        review.style.border = "1px solid green";
        return false;
    }
}
review.addEventListener("change", function () {
    validReview(false)
});

function validDescription(autoFocus) {
    var descriptionValue = description.value;
    var error = document.createElement('div');
    description.parentElement.insertBefore(error, description);

    if (!descriptionValue || descriptionValue.length > 1200) {
        error.className = 'error'
        error.style.color = 'red'
        error.innerHTML = 'Опишите сайт (допустимо не более 1200 символов)!';
        if (autoFocus) {
            description.focus();
        }
        return true;
    } else {
        error.innerHTML = "&#10004;"
        description.style.border = "1px solid green";
        return false;
    }
}
description.addEventListener("blur", function () {
    validDescription(false)
});

form.addEventListener("submit", validAllFields, true);

function validAllFields(EO) {
    EO = EO || window.event;
    EO.preventDefault();

    try {
        var totalErrCount = 0;
        totalErrCount += validDevelopers(!totalErrCount); // автофокус разрешаем только если ошибок пока нет ни одной, т.е. только для самого первого ошибочного поля
        totalErrCount += validNameSite(!totalErrCount);
        totalErrCount += validAddressSite(!totalErrCount);
        totalErrCount += validDate(!totalErrCount);
        totalErrCount += validVisitors(!totalErrCount);
        totalErrCount += validEmail(!totalErrCount);
        totalErrCount += validCatalog(!totalErrCount);
        totalErrCount += validCost(!totalErrCount);
        totalErrCount += validReview(!totalErrCount);
        totalErrCount += validDescription(!totalErrCount);
        if (totalErrCount)
            EO.preventDefault(); // если ошибки были - отменяем отправку формы на сервер
    } catch (err) {
        EO.preventDefault(); // что-то пошло не так - отменяем отправку формы на сервер
    }
}

/* Пыталась таким образом удалить дублирующиеся ошибки, не получилось!

form.addEventListener("submit", removeErrors);
function removeErrors() {
    var errors = form.querySelectorAll('.error')
    for (var i = 1; i < errors.length; i++) {
        errors[i].remove()
    }
}

addressSite.addEventListener('blur', removeErrors); //и так для каждого поля
function removeErrors() {
    var errors = form.querySelectorAll('.error')
    for (var i = 1; i < errors.length; i++) {
        errors[i].remove()
    }
}
*/