//создание класса HashStorage

function HashStorage() {

    //метод добавляет ключ+значение
    var storage = {}; // хэш, в котором хранилище будет сохранять всё что нужно

    this.addValue = function (key, value) {
        storage[key] = value; // сохраняем в хэше значение value под именем key
    }

    this.getValue = function (key) {
        console.log(storage[key]); //вывод значения
    }

    this.deleteValue = function (key) {
        console.log(delete storage[key]); //  удаление  ключа
    }

    var arrKeys = [];
    this.getKeys = function () {
        for (key in storage) { //добавление ключа в массив
            arrKeys.push(key);
            console.log(arrKeys);
        }
    }
}

//создание объекта 

var drinkStorage = new HashStorage();
drinkStorage.addValue(inputInformation().nameDrink, inputInformation().receptDrink);
drinkStorage.getValue(receivingInformation());
drinkStorage.getKeys();
drinkStorage.deleteValue(deleteInformation());


//спрашиваем инф-цию о напитке
function inputInformation() {

    var nameDrink = prompt("Введите название напитка", "Махито");

    var alkogolDrink = prompt("Напиток алкогольный?", "нет");

    var receptDrink = prompt("Рецепт приготовления напитка", "спрайт, сироп, лайм");

    var time = prompt("Время приготовления напитка", "20мин");
    return {
        nameDrink: nameDrink,
        alkogolDrink: alkogolDrink,
        receptDrink: receptDrink,
        time: time //!!ничего не придумала, как вывести все значения, чтобы их в дальнейшем занести в объект
    };
}

//вывод инф-ции о напитке
function receivingInformation() {
    var drink = prompt("Введите название напитка", "Махито");
    return drink;
    //как я понимаю, здесь должно быть условие drink=ключу и если true, то выводится ф-ция getValue, если false, то сообщение, что такого напитка нет

}

function deleteInformation() {
    var drink = prompt("Введите название напитка, который хотите удалить", "Махито");
if (drinkStorage.getKeys()==true){
    alert("Рецепт данного напитка удален из хранилища")
}
    else{
         alert("Данного напитка нет в хранилище")
    }
    return drink;
}

function allDrinks() {

    // выводится ф-ция getKeys
}