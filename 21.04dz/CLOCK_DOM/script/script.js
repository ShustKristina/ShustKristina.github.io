//create clockFace
var clockFace = document.createElement("div");
clockFace.className = "clockFace";
clockFace.style.margin = "0 auto";
clockFace.style.width = "480px";
clockFace.style.height = "480px";
clockFace.style.borderRadius = "50%";
clockFace.style.backgroundColor = "yellow";
clockFace.style.position = "relative";
document.body.appendChild(clockFace);

//determine the coordinates and radius of the clockFace
var clockFaceCenterX = clockFace.offsetLeft + clockFace.offsetWidth / 2;
var clockFaceCenterY = clockFace.offsetTop + clockFace.offsetHeight / 2;
var clockFaceRadius = clockFace.offsetWidth / 2;

//create green circles with numbers
for (var i = 1, number = 12; i <= number; i++) {
    var circle = document.createElement("div");
    circle.className = "circle";
    circle.style.width = clockFace.clientWidth / 10 + "px";
    circle.style.height = clockFace.clientWidth / 10 + "px";
    circle.style.borderRadius = "50%";
    circle.style.backgroundColor = "green";
    circle.innerHTML = i;
    circle.style.textAlign = "center";
    circle.style.fontSize = clockFace.clientWidth / 20 + "px"
    circle.style.lineHeight = clockFace.clientWidth / 10 + "px";
    circle.style.position = "absolute";
    document.body.appendChild(circle);

    //positioning green circles
    var angle = 2 / number * i * Math.PI;
    var distance = 0.83 * clockFaceRadius;
    var circleCenterX = clockFaceCenterX + distance * Math.sin(angle);
    var circleCenterY = clockFaceCenterY - distance * Math.cos(angle);
    circle.style.left = Math.round(circleCenterX - circle.offsetWidth / 2) + 'px';
    circle.style.top = Math.round(circleCenterY - circle.offsetHeight / 2) + 'px';
}

//create clock hands
var hoursHand = document.createElement("div");
hoursHand.className = "hoursHand";
hoursHand.style.width = "12px";
hoursHand.style.height = clockFaceRadius / 2 + "px";
hoursHand.style.borderRadius = "15px";
hoursHand.style.backgroundColor = "black";
hoursHand.style.transformOrigin = "bottom";
hoursHand.style.position = "absolute";
hoursHand.style.left = (clockFaceRadius - 12 / 2) + "px";
hoursHand.style.top = clockFaceRadius - clockFaceRadius / 2 + "px";
clockFace.appendChild(hoursHand);

var minutesHand = document.createElement("div");
minutesHand.className = "minutesHand";
minutesHand.style.width = 0.7 * hoursHand.offsetWidth + "px";
minutesHand.style.height = 0.8 * clockFaceRadius + "px";
minutesHand.style.borderRadius = "15px";
minutesHand.style.backgroundColor = "black";
minutesHand.style.zIndex = "2";
minutesHand.style.transformOrigin = "bottom";
minutesHand.style.position = "absolute";
minutesHand.style.left = clockFaceRadius - 0.7 * hoursHand.offsetWidth / 2 + "px";
minutesHand.style.top = clockFaceRadius - 0.8 * clockFaceRadius + "px";
clockFace.appendChild(minutesHand);

var secondsHand = document.createElement("div");
secondsHand.className = "secondsHand";
secondsHand.style.width = 0.2 * hoursHand.offsetWidth + "px";
secondsHand.style.height = 0.9 * clockFaceRadius + "px";
secondsHand.style.backgroundColor = "black";
secondsHand.style.zIndex = "2";
secondsHand.style.transformOrigin = "bottom";
secondsHand.style.position = "absolute";
secondsHand.style.left = clockFaceRadius - 0.2 * hoursHand.offsetWidth / 2 + "px";
secondsHand.style.top = clockFaceRadius - 0.9 * clockFaceRadius + "px";
clockFace.appendChild(secondsHand);

//formation current time and moving hands
setInterval(Clock, 1000);
function Clock() {
    var currTime = new Date();
    var time = document.createElement("div");
    time.style.width = clockFaceRadius / 2 + "px";  //!!задавала ширину,чтобы отцентрировать время
    time.style.position = "absolute";
    time.style.left = clockFaceRadius - clockFaceRadius / 4 + 'px'; //почему-то все равно не определялась ширина блока (пробовала time.clientWidth, time.offsetWidth),
    // поэтому так записала половину ширину блока time
    time.style.top = 0.4 * clockFaceRadius + 'px';
    time.innerHTML = currTime.toLocaleTimeString();
    time.style.fontSize = clockFace.clientWidth / 15 + "px";
    clockFace.appendChild(time);

    secondsHand.style.transform = 'rotate(' + 6 * currTime.getSeconds() + 'deg)';
    minutesHand.style.transform = 'rotate(' + 6 * currTime.getMinutes() + 'deg)';
    hoursHand.style.transform = 'rotate(' + 30 * currTime.getHours() + 'deg)';
    currTime = new Date();
}
