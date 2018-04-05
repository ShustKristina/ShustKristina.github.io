//Находим все картинки в контейнере
var container = document.querySelector(".container");
var images = container.querySelectorAll("img");

//Для каждой картинки добавляем событие, возникающее при нажатии на левую клавишу мыши
for (var i = 0; i < images.length; i++) {
    images[i].style.cursor = "pointer";
    images[i].addEventListener("mousedown", MouseEvents);
}

function MouseEvents(event) {
    var dragElement = event.target;
    //отключаем перетаскивание, которое возникает в самом браузере
    dragElement.ondragstart = function () {
        return false;
    };
    //Получаем координаты, позиционируем элемент
    function ElementPosition(pageX, pageY) {
        X = pageX - dragElement.getBoundingClientRect().left;
        Y = pageY - dragElement.getBoundingClientRect().top;
        dragElement.style.position = "absolute";
        document.body.appendChild(dragElement);
        moveAt(pageX, pageY);
    };

    function moveAt(pageX, pageY) {
        var newX = pageX - X;
        var newY = pageY - Y;
        dragElement.style.left = newX + "px";
        dragElement.style.top = newY + "px";
    }
    ElementPosition(event.pageX, event.pageY);
    //останавливаем перенос элемента при отпускании левой кнопки мыши
    document.onmouseup = function finishMouseMove() {
        document.onmousemove = null;
        dragElement.onmouseup = null;
    };
    //перемещаем элемент по экрану 
    document.onmousemove = function (event) {
        moveAt(event.pageX, event.pageY);
    };
}