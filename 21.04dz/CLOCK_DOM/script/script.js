//all constants
    //yellow circle
var widthYellowCircle=480;  //ширина циферблата
var heightYellowCircle=480; //высота циферблата
var radiusYellowCircle = widthYellowCircle / 2; //радиус желтого круга
   //green circles
var widthGreenCircle=widthYellowCircle/10;  //ширина круга с цифрой
var heightGreenCircle=heightYellowCircle/10; //высота круга с цифрой
var fontSizeNumbers=widthGreenCircle/2; //размер шрифта цифр
var lineHeightNumbers=heightGreenCircle; //межстрочный интервал (для центрирования цифер)
var distance = 0.83 * radiusYellowCircle; //расстояние до зеленых кружков
   //clock hands
var wightHoursHand=15; // ширина часовой стрелки
var heightHoursHand=radiusYellowCircle/2; //высота часовой стрелки
var positionLeftHourHand=radiusYellowCircle-wightHoursHand/2; //позиционируем часовую стрелку в центр циферблата
var positionTopHourHand=radiusYellowCircle-heightHoursHand; 
var wightMinutesHand=0.6*wightHoursHand; // ширина минутной стрелки
var heightMinutesHand=0.8*radiusYellowCircle; //высота минутной стрелки
var positionLeftMinutesHand=radiusYellowCircle-wightMinutesHand/2; //позиционируем минутную стрелку в центр циферблата
var positionTopMinutesHand=radiusYellowCircle-heightMinutesHand; 
var wightSecondsHand=0.2*wightHoursHand; // ширина секундной стрелки
var heightSecondsHand=0.9*radiusYellowCircle; //высота секундной стрелки
var positionLeftSecondsHand=radiusYellowCircle-wightSecondsHand/2; //позиционируем секундную стрелку в центр циферблата
var positionTopSecondsHand=radiusYellowCircle-heightSecondsHand; 
    //current time
var widthTime=radiusYellowCircle/2; //ширина блока с текущим временем
var positionLeftTime=radiusYellowCircle-widthTime/2; //позиционируем текущее время
var positionTopTime=0.4*radiusYellowCircle;

//create clockFace
var clockFace = document.createElement("div");
clockFace.className = "clockFace";
clockFace.style.margin = "0 auto";
clockFace.style.width = widthYellowCircle+"px";
clockFace.style.height = heightYellowCircle+"px";
clockFace.style.borderRadius = "50%";
clockFace.style.backgroundColor = "yellow";
clockFace.style.position = "relative";
document.body.appendChild(clockFace);

//determine the coordinates and radius of the clockFace
var clockFaceCenterX = clockFace.offsetLeft + clockFace.offsetWidth / 2;
var clockFaceCenterY = clockFace.offsetTop + clockFace.offsetHeight / 2;

//create green circles with numbers
for (var i = 1, number = 12; i <= number; i++) {
    var circle = document.createElement("div");
    circle.className = "circle";
    circle.style.width = widthGreenCircle+"px";
    circle.style.height = heightGreenCircle+"px";
    circle.style.borderRadius = "50%";
    circle.style.backgroundColor = "green";
    circle.innerHTML = i;
    circle.style.textAlign = "center";
    circle.style.fontSize = fontSizeNumbers+"px";
    circle.style.lineHeight = lineHeightNumbers+"px";
    circle.style.position = "absolute";
    document.body.appendChild(circle);

    //positioning green circles
    var angle = 2 / number * i * Math.PI;
    var circleCenterX = clockFaceCenterX + distance * Math.sin(angle);
    var circleCenterY = clockFaceCenterY - distance * Math.cos(angle);
    circle.style.left = Math.round(circleCenterX - circle.offsetWidth / 2) + 'px';
    circle.style.top = Math.round(circleCenterY - circle.offsetHeight / 2) + 'px';
}

//create clock hands
var hoursHand = document.createElement("div");
hoursHand.className = "hoursHand";
hoursHand.style.width = wightHoursHand+"px";
hoursHand.style.height = heightHoursHand + "px";
hoursHand.style.borderRadius = "15px";
hoursHand.style.backgroundColor = "black";
hoursHand.style.transformOrigin = "60% 90%";
hoursHand.style.position = "absolute";
hoursHand.style.left = positionLeftHourHand + "px";
hoursHand.style.top = positionTopHourHand + "px";
clockFace.appendChild(hoursHand);

var minutesHand = document.createElement("div");
minutesHand.className = "minutesHand";
minutesHand.style.width = wightMinutesHand + "px";
minutesHand.style.height = heightMinutesHand + "px";
minutesHand.style.borderRadius = "15px";
minutesHand.style.backgroundColor = "black";
minutesHand.style.zIndex = "2";
minutesHand.style.transformOrigin = "60% 93%";
minutesHand.style.position = "absolute";
minutesHand.style.left = positionLeftMinutesHand + "px";
minutesHand.style.top = positionTopMinutesHand + "px";
clockFace.appendChild(minutesHand);

var secondsHand = document.createElement("div");
secondsHand.className = "secondsHand";
secondsHand.style.width = wightSecondsHand + "px";
secondsHand.style.height = heightSecondsHand + "px";
secondsHand.style.backgroundColor = "black";
secondsHand.style.zIndex = "2";
secondsHand.style.transformOrigin = "60% 95%";
secondsHand.style.position = "absolute";
secondsHand.style.left = positionLeftSecondsHand + "px";
secondsHand.style.top = positionTopSecondsHand + "px";
clockFace.appendChild(secondsHand);

//formation current time and moving hands
var time = document.createElement("div");
setInterval(Clock, 1000);
function Clock() {
    var currTime = new Date();
    time.style.width = widthTime + "px";  
    time.style.position = "absolute";
    time.style.left = positionLeftTime + 'px';
    time.style.top = positionTopTime + 'px';
    time.innerHTML = currTime.toLocaleTimeString();
    time.style.fontSize = clockFace.clientWidth / 15 + "px";
    clockFace.appendChild(time);
    
    secondsHand.style.transform = 'rotate(' + 6 * currTime.getSeconds() + 'deg)';
    minutesHand.style.transform = 'rotate(' + 6 * currTime.getMinutes() + 'deg)';
    hoursHand.style.transform = 'rotate(' + 30 * currTime.getHours() + 'deg)';
    currTime = new Date();
}
