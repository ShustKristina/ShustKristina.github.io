var interval;
function Timer() {
    var self = this;
    self.startTime = 0;
    var second = 0, minute = 0; hour = 0;
    var sec = document.getElementById("sec");
    var min = document.getElementById("min");
    min.innerHTML = minute + "min";
    sec.innerHTML = second + "sec";

    self.start = function () {
        interval = setInterval(function () {
            min.innerHTML = minute + "min";
            sec.innerHTML = second + "sec";
            second++;
            if (second == 60) {
                minute++;
                second = 0;
            }
            if (minute == 60) {
                hour++;
                minute = 0;
            }
        }, 1000);
    };
    self.stop = function () {
        clearInterval(interval);
    };
}