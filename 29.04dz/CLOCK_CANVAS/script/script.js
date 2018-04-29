//all constants
var radiusYellowCircle = 240; //радиус циферблата
var radiusGreenCircle = radiusYellowCircle / 10;  //радиус круга с цифрой=24
var fontSizeNumbers = radiusGreenCircle; //размер шрифта цифр
var distance = 0.8 * radiusYellowCircle; //расстояние до зеленых кружков=192
var fontSizeTime = radiusYellowCircle / 7.5; //размер шрифта текущего времени
var widthHoursHand = 0.67 * radiusGreenCircle; // ширина часовой стрелки
var heightHoursHand = radiusYellowCircle / 2; //высота часовой стрелки=120
var widthMinutesHand = 0.6 * widthHoursHand; // ширина минутной стрелки=9
var heightMinutesHand = 0.8 * radiusYellowCircle; //высота минутной стрелки=192
var widthSecondsHand = 0.2 * widthHoursHand; // ширина секундной стрелки=3
var heightSecondsHand = 0.9 * radiusYellowCircle; //высота секундной стрелки=216
var positionTopTime = 0.5 * radiusYellowCircle;

var canvasElem = document.getElementById("clock");
var context = canvasElem.getContext('2d');

function displayClock() {
    //create clockFace
    context.fillStyle = 'yellow';
    context.beginPath();
    var clockFaceCenterX = radiusYellowCircle;
    var clockFaceCenterY = clockFaceCenterX;
    context.arc(clockFaceCenterX, clockFaceCenterY, radiusYellowCircle, 0, Math.PI * 2, false);
    context.fill();

    //create green circles
    for (var i = 1, number = 12; i <= number; i++) {
        context.beginPath();
        var angle = 2 / number * i * Math.PI;
        var greenCircleCenterX = clockFaceCenterX + distance * Math.sin(angle);
        var greenCircleCenterY = clockFaceCenterY - distance * Math.cos(angle);
        context.fillStyle = 'green';
        context.arc(greenCircleCenterX, greenCircleCenterY, radiusGreenCircle, 0, Math.PI * 2, false);
        context.fill();
        //create numbers
        context.fillStyle = 'black';
        context.font = fontSizeNumbers + "px Arial";
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(i, greenCircleCenterX, greenCircleCenterY);
    }

    //create hands
    var currTime = new Date();
    //angles
    var sec = 6 * currTime.getSeconds();
    var min = 6 * currTime.getMinutes();
    var hour = 30 * currTime.getHours();

    //create hour hand
    context.beginPath();
    context.moveTo(clockFaceCenterX, clockFaceCenterY);
    context.lineTo(clockFaceCenterX + heightHoursHand * Math.cos(Math.PI / 2 - hour * (Math.PI / 180)),
        clockFaceCenterY - heightHoursHand * Math.sin(Math.PI / 2 - hour * (Math.PI / 180)));
    context.lineWidth = widthHoursHand;
    context.lineCap = 'round';
    context.strokeStyle = "black";
    context.stroke();

    //create minute hand
    context.beginPath();
    context.moveTo(clockFaceCenterX, clockFaceCenterY);
    context.lineTo(clockFaceCenterX + heightMinutesHand * Math.cos(Math.PI / 2 - min * (Math.PI / 180)),
        clockFaceCenterY - heightMinutesHand * Math.sin(Math.PI / 2 - min * (Math.PI / 180)));
    context.lineWidth = widthMinutesHand;
    context.lineCap = 'round';
    context.strokeStyle = "black";
    context.stroke();

    //create second hand
    context.beginPath();
    context.moveTo(clockFaceCenterX, clockFaceCenterY);
    context.lineTo(clockFaceCenterX + heightSecondsHand * Math.cos(Math.PI / 2 - sec * (Math.PI / 180)),
        clockFaceCenterY - heightSecondsHand * Math.sin(Math.PI / 2 - sec * (Math.PI / 180)));
    context.lineWidth = widthSecondsHand;
    context.lineCap = 'round';
    context.strokeStyle = "black";
    context.stroke();

    //current time
    context.fillStyle = 'black';
    context.font = fontSizeTime + "px Arial";
    context.textAlign = 'center';
    context.fillText(currTime.toLocaleTimeString(), radiusYellowCircle, positionTopTime);
}

function Clock() {
    displayClock();
}
setInterval(Clock, 1000);
Clock();