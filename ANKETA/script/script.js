var surname = prompt("Введите свою фамилию");
while (surname === null || surname == '') {
    surname = prompt("ВВЕДИТЕ фамилию!");
}

var name = prompt("Введите свое имя");
while (name === null || name == '') {
    name = prompt("ВВЕДИТЕ имя!");
}

var patronymic = prompt("Введите свое отчество");
while (patronymic === null || patronymic == '') {
     patronymic = prompt("ВВЕДИТЕ отчество!");
}

var age = prompt("Введите свой возраст", "20");

while (age === null || age.replace(/\d/g, '').length || age > 100 || age < 5) {
    age = prompt("Введите возраст (5-100лет)!");
}

var ageConvert = +age + 5;

if (confirm("Если Ваш пол мужской - нажмите ОК, если женский - ОТМЕНА")) {
    var gender = "мужской";
    if (age < 65) {
        var pensioner = "нет";
    }
    else {
        var pensioner = "да";
    }
}
else {
    var gender = "женский";
    if (age < 60) {
        var pensioner = "нет";
    }
    else {
        var pensioner = "да";
    }
}
alert("Ваше ФИО: " + surname + " " + name + " " + patronymic + " " +
    "\n Ваш возраст в годах: " + age +
    "\n Ваш возраст в днях: " + age * 365 +
    "\n Через 5 лет вам будет: " + ageConvert +
    "\n Ваш пол: " + gender +
    "\n Вы на пенсии: " + pensioner);
