//создание объекта 

var drinkStorage = new HashStorage();


//спрашиваем инф-цию о напитке
function inputInformation() {
    var nameDrink = prompt("Введите название напитка", "Махито");
    var alkogolDrink = prompt("Напиток алкогольный?", "нет");
    var receptDrink = prompt("Рецепт приготовления напитка", "спрайт, сироп, лайм");
    var time = prompt("Время приготовления напитка", "20мин");
    var hashValue = {
        "рецепт напитка": receptDrink,
        "алкогольный": alkogolDrink,
        "время приготовления": time
    }
    drinkStorage.addValue(nameDrink, hashValue);
}

//вывод инф-ции о напитке
function receivingInformation() {
    var drink = prompt("Введите название напитка, о котором хотите получить информацию", "Махито");
    console.log("напиток " + drink, drinkStorage.getValue(drink));
    return drink;
}

function deleteInformation() {
    var drink = prompt("Введите название напитка, который хотите удалить", "Махито");
    if (drinkStorage.deleteValue(drink) == true) {
        console.log("Напиток " + drink + " удален из хранилища");
    } else {
        console.log("Напиток " + drink + " отсутсвует в хранилище")
    }
}

function allDrinks() {
    console.log("Перечень всех напитков: " + drinkStorage.getKeys());
}