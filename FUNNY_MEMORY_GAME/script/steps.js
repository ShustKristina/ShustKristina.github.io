function Steps() {
    var self = this;
    var counterSteps = 0;
    self.stepsSpan = document.getElementById("numbersOfSteps");
    self.stepsSpan.innerHTML = counterSteps;
    self.start = function () {
        ++counterSteps;
        self.stepsSpan.innerHTML = counterSteps;
    }
    self.stop = function () {
        counterSteps = 0;
        self.stepsSpan.innerHTML = counterSteps;
    }
}