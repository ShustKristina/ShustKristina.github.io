//создание класса HashStorage
//Что-то подсказывает, что я здесь ерунду написала
class HashStorage {

    constructor(drinks) {
        this.name = drinks;
    }
//метод добавляет ключ+значение
    addValue(key, value) {
        this.key = key;
        this.value = value;
    }
//вывод пары ключ:значение
    getValue(key) {
       console.log(this.key + ": " + this.value);
    }
//  удаление  ключа
    deleteValue(key) {
        delete this.key;
    }
//добавление ключа в массив
    getKeys() {
        var arr=[];
        arr.push(this.key);
        alert(arr);
    }
}


//создание объекта 

var drinkStorage = new HashStorage(inputInformation().nameDrink);
console.log(drinkStorage.name);


//!!не понимаю, как добавить ВСЕ значения 
drinkStorage.addValue(inputInformation().nameDrink, inputInformation().receptDrink); 

drinkStorage.getValue();
drinkStorage.deleteValue();
drinkStorage.getKeys();


//спрашиваем инф-цию о напитке
function inputInformation() {

    var nameDrink = prompt("Введите название напитка", "Махито");

    var alkogolDrink = prompt("Напиток алкогольный?", "нет");

    var receptDrink = prompt("Рецепт приготовления напитка", "спрайт, сироп, лайм");

    var time = prompt("Время приготовления напитка", "20мин");
    return {
        nameDrink,
        alkogolDrink,
        receptDrink,
        time         //!!ничего не придумала, как вывести все значения, чтобы их в дальнейшем занести в объект
    };
}

//вывод инф-ции о напитке
function receivingInformation() {
    var drink = prompt("Введите название напитка", "Махито");
    
    //как я понимаю, здесь должно быть условие drink=ключу и если true, то выводится ф-ция getValue, если false, то сообщение, что такого напитка нет
    
}

function deleteInformation() {
    var drink=prompt("Введите название напитка, который хотите удалить", "Махито");
    //как я понимаю, здесь должно быть условие drink=ключу и если true, то выводится ф-ция deleteValue
}
function allDrinks() {
   
    // выводится ф-ция getKeys
}
