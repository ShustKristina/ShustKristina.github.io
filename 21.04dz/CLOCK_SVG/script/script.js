//all constants
var radiusYellowCircle = 240; //радиус циферблата
var radiusGreenCircle = radiusYellowCircle / 10;  //радиус круга с цифрой=24
var fontSizeNumbers = radiusGreenCircle; //размер шрифта цифр
var distance = 0.8 * radiusYellowCircle; //расстояние до зеленых кружков=192
var fontSizeTime = radiusYellowCircle / 7.5; //размер шрифта текущего времени
var wightHoursHand = 0.67*radiusGreenCircle; // ширина часовой стрелки
var heightHoursHand = radiusYellowCircle / 2; //высота часовой стрелки=120
var positionLeftHourHand = radiusYellowCircle - wightHoursHand / 2; //позиционируем часовую стрелку в центр циферблата
var positionTopHourHand = radiusYellowCircle - heightHoursHand;
var wightMinutesHand = 0.6 * wightHoursHand; // ширина минутной стрелки=9
var heightMinutesHand = 0.8 * radiusYellowCircle; //высота минутной стрелки=192
var positionLeftMinutesHand = radiusYellowCircle - wightMinutesHand / 2; //позиционируем минутную стрелку в центр циферблата
var positionTopMinutesHand = radiusYellowCircle - heightMinutesHand;
var wightSecondsHand = 0.2 * wightHoursHand; // ширина секундной стрелки=3
var heightSecondsHand = 0.9 * radiusYellowCircle; //высота секундной стрелки=216
var positionLeftSecondsHand = radiusYellowCircle - wightSecondsHand / 2; //позиционируем секундную стрелку в центр циферблата
var positionTopSecondsHand = radiusYellowCircle - heightSecondsHand;

//create clockFace
var SVGElem = document.getElementById("clock");
var clockFace = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
clockFace.setAttribute("fill", "yellow");
clockFace.setAttribute("r", radiusYellowCircle);
clockFace.setAttribute("cx", radiusYellowCircle);
clockFace.setAttribute("cy", radiusYellowCircle);
SVGElem.appendChild(clockFace);

//determine the coordinates of the clockFace
var clockFaceCenterX = radiusYellowCircle;
var clockFaceCenterY = clockFaceCenterX;

//create green circles with numbers
for (var i = 1, number = 12; i <= number; i++) {
    var angle = 2 / number * i * Math.PI;
    var greenCircle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    var greenCircleCenterX = clockFaceCenterX + distance * Math.sin(angle);
    var greenCircleCenterY = clockFaceCenterY - distance * Math.cos(angle);
    greenCircle.setAttribute("fill", "green");
    greenCircle.setAttribute("r", radiusGreenCircle);
    SVGElem.appendChild(greenCircle);
    greenCircle.setAttribute("cx", greenCircleCenterX);
    greenCircle.setAttribute("cy", greenCircleCenterY);

    var numbers = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    numbers.textContent = i;
    numbers.setAttribute("fill", "black");
    numbers.setAttribute("font-size", fontSizeNumbers);
    SVGElem.appendChild(numbers);
    numbers.setAttribute("x", greenCircleCenterX);
    numbers.setAttribute("y", greenCircleCenterY);
    numbers.setAttribute("text-anchor", "middle");
    numbers.setAttribute("dominant-baseline", "middle");
}
var hoursHand = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
hoursHand.setAttribute("width", wightHoursHand);
hoursHand.setAttribute("height", heightHoursHand);
hoursHand.setAttribute("fill", "black");
hoursHand.setAttribute("rx", "15");
hoursHand.setAttribute("x", positionLeftHourHand);
hoursHand.setAttribute("y", positionTopHourHand);
hoursHand.setAttribute('transform-origin', clockFaceCenterX+" "+0.93*clockFaceCenterY); 
SVGElem.appendChild(hoursHand);

var minutesHand = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
minutesHand.setAttribute("width", wightMinutesHand);
minutesHand.setAttribute("height", heightMinutesHand);
minutesHand.setAttribute("fill", "black");
minutesHand.setAttribute("rx", "15");
minutesHand.setAttribute("x", positionLeftMinutesHand);
minutesHand.setAttribute("y", positionTopMinutesHand);
minutesHand.setAttribute('transform-origin', clockFaceCenterX+" "+0.93*clockFaceCenterY);
SVGElem.appendChild(minutesHand);
var secondsHand = document.createElementNS("http://www.w3.org/2000/svg", 'rect');
secondsHand.setAttribute("width", wightSecondsHand);
secondsHand.setAttribute("height", heightSecondsHand);
secondsHand.setAttribute("fill", "black");
secondsHand.setAttribute("x", positionLeftSecondsHand);
secondsHand.setAttribute("y", positionTopSecondsHand);
secondsHand.setAttribute('transform-origin', clockFaceCenterX+" "+0.93*clockFaceCenterY); 
SVGElem.appendChild(secondsHand);

//current time
var time = document.createElementNS("http://www.w3.org/2000/svg", 'text');

function Clock() {
    var currTime = new Date();
    var positionLeftTime = radiusYellowCircle - 114 / 2; //позиционируем текущее время, где 114 - ширина блока с текущим временем
    var positionTopTime = 0.5 * radiusYellowCircle;
    time.textContent = currTime.toLocaleTimeString();
    time.setAttribute("fill", "black");
    time.setAttribute("font-size", fontSizeTime);
    time.setAttribute("x", positionLeftTime);
    time.setAttribute("y", positionTopTime);
    SVGElem.appendChild(time);
    secondsHand.style.transform = 'rotate(' + 6 * currTime.getSeconds() + 'deg)';
    minutesHand.style.transform = 'rotate(' + 6 * currTime.getMinutes() + 'deg)';
    hoursHand.style.transform = 'rotate(' + 30 * currTime.getHours() + 'deg)';
}
setInterval(Clock, 1000);
Clock()