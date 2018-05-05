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

function Clock() {
    displayClock();
}
setInterval(Clock, 1000);
Clock();

function displayClock() {
    var currTime = new Date();
    var seconds = currTime.getSeconds();
    var minutes = currTime.getMinutes();
    var hours = currTime.getHours();
    var hour = hours + minutes / 60;
    var minute = minutes + seconds / 60;
    var canvas = document.getElementById('clock');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 500, 500);

    clockFace();
    greenCirclesAndNumbers()
    secondsHand();
    minutesHand();
    hoursHand();
    currentTime();

    function clockFace() {
        var clockFaceCenterX = radiusYellowCircle;
        var clockFaceCenterY = clockFaceCenterX;
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.arc(clockFaceCenterX, clockFaceCenterY, radiusYellowCircle, 0, Math.PI * 2);
        ctx.fill();
    }

    function greenCirclesAndNumbers() {
        for (var i = 1, number = 12; i <= number; i++) {
            ctx.beginPath();
            var angle = 2 / number * i * Math.PI;
            var greenCircleCenterX = radiusYellowCircle + 0.8 * radiusYellowCircle * Math.sin(angle);
            var greenCircleCenterY = radiusYellowCircle - 0.8 * radiusYellowCircle * Math.cos(angle);
            ctx.fillStyle = 'green';
            ctx.arc(greenCircleCenterX, greenCircleCenterY, radiusGreenCircle, 0, Math.PI * 2, false);
            ctx.fill();
            //create numbers
            ctx.fillStyle = 'black';
            ctx.font = fontSizeNumbers + "px Arial";
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(i, greenCircleCenterX, greenCircleCenterY);
        }
    }

    function secondsHand() {
        var angle = (seconds - 15) * 2 * Math.PI / 60;
        ctx.lineWidth = widthSecondsHand;
        ctx.beginPath();
        ctx.moveTo(radiusYellowCircle, radiusYellowCircle);
        ctx.lineTo((radiusYellowCircle + Math.cos(angle) * heightSecondsHand), radiusYellowCircle + Math.sin(angle) * heightSecondsHand);
        ctx.moveTo(radiusYellowCircle, radiusYellowCircle);
        ctx.lineTo((radiusYellowCircle - Math.cos(angle) * 15), radiusYellowCircle - Math.sin(angle) * 15);
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }

    function minutesHand() {
        angle = (minute - 15) * 2 * Math.PI / 60;
        ctx.lineWidth = widthMinutesHand;
        ctx.beginPath();
        ctx.moveTo(radiusYellowCircle, radiusYellowCircle);
        ctx.lineTo((radiusYellowCircle + Math.cos(angle) * heightMinutesHand), radiusYellowCircle + Math.sin(angle) * heightMinutesHand);
        ctx.moveTo(radiusYellowCircle, radiusYellowCircle);
        ctx.lineTo((radiusYellowCircle - Math.cos(angle) * 15), radiusYellowCircle - Math.sin(angle) * 15);
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }

    function hoursHand() {
        angle = (hour - 3) * 2 * Math.PI / 12;
        ctx.lineWidth = widthHoursHand;
        ctx.beginPath();
        ctx.moveTo(radiusYellowCircle, radiusYellowCircle);
        ctx.lineTo((radiusYellowCircle + Math.cos(angle) * heightHoursHand), radiusYellowCircle + Math.sin(angle) * heightHoursHand);
        ctx.moveTo(radiusYellowCircle, radiusYellowCircle);
        ctx.lineTo((radiusYellowCircle - Math.cos(angle) * 15), radiusYellowCircle - Math.sin(angle) * 15);
        ctx.strokeStyle = 'black';
        ctx.lineCap = 'round';
        ctx.stroke();
    }

    function currentTime() {
        ctx.fillStyle = 'black';
        ctx.font = fontSizeTime + "px Arial";
        ctx.textAlign = 'center';
        ctx.fillText(currTime.toLocaleTimeString(), radiusYellowCircle, positionTopTime);
    }
}
