var surname = prompt("Введите свою фамилию");
var name = prompt("Введите свое имя");
var patronymic = prompt("Введите свое отчество");
var age = prompt("Сколько Вам лет?", "20");
var ageConvert = +age + 5;

while ((+age > 100)) {
    var age = prompt("Возраст не может быть более 100 лет! Введите КОРРЕКТНОЕ число!", "20");
}
while ((+age < 6)) {
    var age = prompt("Возраст не может быть менее 6 лет! Введите КОРРЕКТНОЕ число!", "20");
}

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
