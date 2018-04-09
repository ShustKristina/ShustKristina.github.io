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
    var error = document.querySelector('.errorDev');
    if (developValue == "" || !reg1.test(developValue)) { //регулярные выражения знаю плохо, поэтому записала условие так, как смогла
        error.style.color = 'red';
        error.innerHTML = 'Поле не может быть пустым, содержать цифры и латинские буквы!';
        if (autoFocus) {
            develop.focus();
        }
        return true;
    } else {
        error.style.color = 'green';
        error.innerHTML = "&#10004;";
        develop.style.border = "1px solid green";
        return false;
    }
}

develop.addEventListener("blur", function () {
    validDevelopers(false);
});

function validNameSite(autoFocus) {
    var nameSiteValue = nameSite.value;
    var reg1 = /[а-яА-Я]/;
    var error = document.querySelector('.errorName');
    if (nameSiteValue == "" || !reg1.test(nameSiteValue)) {
        error.style.color = 'red';
        error.innerHTML = 'Поле не может быть пустым, содержать цифры и латинские буквы!';
        if (autoFocus) {
            nameSite.focus();
        }
        return true;
    } else {
        error.style.color = 'green';
        error.innerHTML = "&#10004;";
        nameSite.style.border = "1px solid green";
        return false;
    }
}
nameSite.addEventListener("blur", function () {
    validNameSite(false);
});

function validAddressSite(autoFocus) {
    var addressSiteValue = addressSite.value;
    var reg3 = /^https:/;
    var error = document.querySelector('.errorURL');
    if (addressSiteValue == "" || !reg3.test(addressSiteValue)) {
        error.style.color = 'red';
        error.innerHTML = 'Поле не может быть пустым и URL начинается с https:!';
        if (autoFocus) {
            addressSite.focus();
        }
        return true;
    } else {
        error.style.color = 'green';
        error.innerHTML = "&#10004;";
        addressSite.style.border = "1px solid green";
        return false;
    }
}

addressSite.addEventListener("blur", function () {
    validAddressSite(false);
});

function validDate(autoFocus) {
    var dateValue = date.value;
    var reg4 = /[0-9]/;
    var error = document.querySelector('.errorDate');

    if (dateValue == "" || !reg4.test(dateValue)) {
        error.style.color = 'red';
        error.innerHTML = 'Поле не может быть пустым, введите число!';
        if (autoFocus) {
            date.focus();
        }
        return true;
    } else {
        error.style.color = 'green';
        error.innerHTML = "&#10004;";
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
    var error = document.querySelector('.errorVisitors');

    if (visitorsValue == "" || !reg4.test(visitorsValue)) {
        error.style.color = 'red';
        error.innerHTML = 'Поле не может быть пустым, введите цифры!';
        if (autoFocus) {
            visitors.focus();
        }
        return true;
    } else {
        error.style.color = 'green';
        error.innerHTML = "&#10004;";
        visitors.style.border = "1px solid green";
        return false;
    }
}
visitors.addEventListener("blur", function () {
    validVisitors(false);
});

function validEmail(autoFocus) {
    var emailValue = email.value;
    var reg5 = /@gmail.com/;
    var error = document.querySelector('.errorEmail');

    if (emailValue == "" || !reg5.test(emailValue)) {
        error.style.color = 'red';
        error.innerHTML = 'Поле не может быть пустым, название почты должно оканчиваться на @gmail.com!';
        if (autoFocus) {
            email.focus();
        }
        return true;
    } else {
        error.style.color = 'green';
        error.innerHTML = "&#10004;";
        email.style.border = "1px solid green";
        return false;
    }
}
email.addEventListener("blur", function () {
    validEmail(false);
});

function validCatalog(autoFocus) {
    var catalogValue = catalog.value;
    var error = document.querySelector('.errorCatalog');

    if (catalogValue == 1) {
        error.style.color = 'red';
        error.innerHTML = 'Выберите другой вариант!';
        if (autoFocus) {
            catalog.focus();
        }
        return true;
    } else {
        error.style.color = 'green';
        error.innerHTML = "&#10004;";
        catalog.style.border = "1px solid green";
        return false;
    }
}
catalog.addEventListener("change", function () {
    validCatalog(false);
});

function validCost(autoFocus) {
    var error = document.querySelector('.errorCost');

    if (!cost[0].checked && !cost[1].checked && !cost[2].checked) { //или cost.value==""
        error.style.color = 'red';
        error.innerHTML = 'Выберите тип размещения!';
        if (autoFocus) {
            document.getElementsByClassName("cost1").scrollIntoView();
        }
        return true;
    } else {
        error.style.color = 'green';
        error.innerHTML = "&#10004;";
        return false;
    }
}

for (var i = 0; i < cost.length; i++) {
    cost[i].addEventListener("change", function () {
        validCost(false);
    });
}

function validReview(autoFocus) {
    var error = document.querySelector('.errorReview');

    if (!review.checked) {
        error.style.color = 'red';
        error.innerHTML = 'Разрешите оставлять отзывы!';
        if (autoFocus) {
            review.focus();
        }
        return true;
    } else {
        error.style.color = 'green';
        error.innerHTML = "&#10004;";
        review.style.border = "1px solid green";
        return false;
    }
}
review.addEventListener("change", function () {
    validReview(false);
});

function validDescription(autoFocus) {
    var descriptionValue = description.value;
    var error = document.querySelector('.errorDescription');

    if (!descriptionValue || descriptionValue.length > 1200) {
        error.style.color = 'red';
        error.innerHTML = 'Опишите сайт (допустимо не более 1200 символов)!';
        if (autoFocus) {
            description.focus();
        }
        return true;
    } else {
        error.style.color = 'green';
        error.innerHTML = "&#10004;";
        description.style.border = "1px solid green";
        return false;
    }
}
description.addEventListener("blur", function () {
    validDescription(false);
});

form.addEventListener("submit", validAllFields, true);

function validAllFields(EO) {
    EO = EO || window.event;
    try {
        var totalErrCount = 0;
        totalErrCount += validDevelopers(!totalErrCount); 
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
            EO.preventDefault(); 
    } catch (err) {
        EO.preventDefault(); 
    }
}
