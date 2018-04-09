window.addEventListener("load", Mouse, false);

function Mouse() {

//Находим все картинки в контейнере
var container = document.querySelector(".container");
var images = container.querySelectorAll("img");

//Для каждой картинки добавляем событие, возникающее при нажатии на левую клавишу мыши, находим первоначальные координаты изображений

for (var j = images.length - 1; j >= 0; j--) {
    images[j].style.cursor = "pointer";
    images[j].addEventListener("mousedown", MouseEvents);
    images[j].style.position = "absolute";
    images[j].style.left = GetElementPos(images[j]).left + "px";
    images[j].style.top = GetElementPos(images[j]).top + "px";
}

function GetElementPos(EL) {
    var X = 0;
    var Y = 0;
    while (EL) {
        X += EL.offsetLeft;
        Y += EL.offsetTop;
        EL = EL.offsetParent;
    }
    return {
        left: X,
        top: Y
    };
}

function MouseEvents(event) {
    var dragElement = event.target;
    //отключаем перетаскивание, которое возникает в самом браузере
    dragElement.ondragstart = function () {
        return false;
    };
    //Определение расстояния, на которое сдвинут курсор относительно левого верхнего угла изображения
    //Выполнение условия, что последняя перетаскиваемая картинка оказывается выше остальных
    function ElementPosition(pageX, pageY) {
        shiftX = pageX - dragElement.getBoundingClientRect().left;
        shiftY = pageY - dragElement.getBoundingClientRect().top;
        document.body.appendChild(dragElement);
        moveAt(pageX, pageY);
    };
    ElementPosition(event.pageX, event.pageY);
    //Определение координат места, куда перетаскивается изображение
    function moveAt(pageX, pageY) {
        var newX = pageX - shiftX;
        var newY = pageY - shiftY;
        dragElement.style.left = newX + "px";
        dragElement.style.top = newY + "px";
    }
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
}