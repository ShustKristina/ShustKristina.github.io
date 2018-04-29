//all constants
var radiusYellowCircle = 240; //радиус циферблата
var radiusGreenCircle = radiusYellowCircle / 10;  //радиус круга с цифрой=24
var fontSizeNumbers = radiusGreenCircle; //размер шрифта цифр
var distance = 0.8 * radiusYellowCircle; //расстояние до зеленых кружков=192
var fontSizeTime = radiusYellowCircle / 7.5; //размер шрифта текущего времени
var widthHoursHand = 0.67 * radiusGreenCircle; // ширина часовой стрелки
var heightHoursHand = radiusYellowCircle / 2; //высота часовой стрелки=120
var positionLeftHourHand = radiusYellowCircle - widthHoursHand / 2; //позиционируем часовую стрелку в центр циферблата
var positionTopHourHand = radiusYellowCircle - heightHoursHand;
var widthMinutesHand = 0.6 * widthHoursHand; // ширина минутной стрелки=9
var heightMinutesHand = 0.8 * radiusYellowCircle; //высота минутной стрелки=192
var positionLeftMinutesHand = radiusYellowCircle - widthMinutesHand / 2; //позиционируем минутную стрелку в центр циферблата
var positionTopMinutesHand = radiusYellowCircle - heightMinutesHand;
var widthSecondsHand = 0.2 * widthHoursHand; // ширина секундной стрелки=3
var heightSecondsHand = 0.9 * radiusYellowCircle; //высота секундной стрелки=216
var positionLeftSecondsHand = radiusYellowCircle - widthSecondsHand / 2; //позиционируем секундную стрелку в центр циферблата
var positionTopSecondsHand = radiusYellowCircle - heightSecondsHand;

function displayClock(){
//create clockFace

var canvasElem = document.getElementById("clock");
var context = canvasElem.getContext('2d');
context.fillStyle = 'yellow';
context.beginPath();
//determine the coordinates of the clockFace
var clockFaceCenterX = radiusYellowCircle;
var clockFaceCenterY = clockFaceCenterX;
context.arc(clockFaceCenterX, clockFaceCenterY, radiusYellowCircle, 0, Math.PI * 2, false);
context.fill();


//create green circles with numbers


for (var i = 1, number = 12; i <= number; i++) {
    context.beginPath();
    var angle = 2 / number * i * Math.PI;

    var greenCircleCenterX = clockFaceCenterX + distance * Math.sin(angle);
    var greenCircleCenterY = clockFaceCenterY - distance * Math.cos(angle);
    context.fillStyle = 'green';

    context.arc(greenCircleCenterX, greenCircleCenterY, radiusGreenCircle, 0, Math.PI * 2, false);
    context.fill();

    context.fillStyle = 'black';
    context.font = fontSizeNumbers + "px Arial";
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(i, greenCircleCenterX, greenCircleCenterY);
}
//create hands
var currTime = new Date();
var sec = 6*currTime.getSeconds();                           
var min = 6*currTime.getMinutes(); 
var hour = 30*currTime.getHours(); 
context.beginPath();

context.moveTo(clockFaceCenterX, clockFaceCenterY);
context.lineTo(clockFaceCenterX+heightHoursHand*Math.cos(Math.PI/2 - hour*(Math.PI/180)),
clockFaceCenterY - heightHoursHand*Math.sin(Math.PI/2 - hour*(Math.PI/180)));
context.lineWidth = widthHoursHand;
context.lineCap = 'round';
context.strokeStyle = "black"; 
context.stroke();

context.beginPath();
context.moveTo(clockFaceCenterX, clockFaceCenterY);
context.lineTo(clockFaceCenterX+heightMinutesHand*Math.cos(Math.PI/2 - min*(Math.PI/180)),
clockFaceCenterY - heightMinutesHand*Math.sin(Math.PI/2 - min*(Math.PI/180)));
context.lineWidth = widthMinutesHand;
context.lineCap = 'round';
context.strokeStyle = "black"; 
context.stroke();

context.beginPath();

context.moveTo(clockFaceCenterX, clockFaceCenterY);
context.lineTo(clockFaceCenterX+heightSecondsHand*Math.cos(Math.PI/2 - sec*(Math.PI/180)),
clockFaceCenterY - heightSecondsHand*Math.sin(Math.PI/2 - sec*(Math.PI/180)));
context.lineWidth = widthSecondsHand;
context.lineCap = 'round';
context.strokeStyle = "black"; 
context.stroke(); 

//current time

var time = document.createElementNS("http://www.w3.org/2000/svg", 'text');

var positionTopTime = 0.5 * radiusYellowCircle;
context.fillStyle = 'black';
context.font = fontSizeTime + "px Arial";
context.textAlign = 'center';
context.fillText(currTime.toLocaleTimeString(), radiusYellowCircle, positionTopTime);


}
function Clock() {
    var currTime = new Date();
displayClock()
  
}
setInterval(Clock, 1000);
Clock()