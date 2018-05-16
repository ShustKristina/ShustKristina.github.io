
document.addEventListener("keydown", keyboardKontrol);

var startPlay = function startPlay() {
    var nameplayers = document.getElementById("namePlayer");
    function validate() {
        if (nameplayers.value == "" || nameplayers.value == " ") {
            nameplayers.style.border = "1.5px solid red";
            nameplayers.focus();
            return false;
        }
        else{ 
        window.localStorage.setItem('UserName', nameplayers.value);
            return true;
        }
    }
    if (!validate()) {
        return false
    }

    var game = new Game();
    var timer = new Timer();
    game.getPlayerInfo();
    game.getNumberOfCards();
    game.getBackCards();
    game.defineCardsFace();
    game.getRandomArr();
    game.createBoardCards();
    game.addCards();
    game.addListeners();
    timer.start();
}


function Game() {
    var self = this;
    var cardsFamilyArray = ["brother", "daughter", "father", "grandfather", "grandmother", "sister", "son", "uncle", "aunt", "mother"];
    var cardsNumbersArray = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
    var cardsAnimalsArray = ["bear", "cat", "dog", "fox", "hare", "wolf", "squirrel", "camel", "deer"];

    self.playerInfo = {};
    self.stopTime = 0;
    self.numberOfCards = 0;
    self.backCard = "";
    self.wrapperCards = [];
    self.randomCardsArray = [];
    self.cardsFaceArray = [];
    self.selectedCards = [];
    self.counterFlippedCards = 0;
    self.flippedCardsArray = [];
    self.memoryArray;

    var soundName = "";
    var step = new Steps();
    var timer1 = new Timer();
    var audio = new Audio;

    self.defineCardsFace = function (backCard) {
        switch (self.backCard) {
            case 'family':
                self.cardsFaceArray = cardsFamilyArray;
                return self.cardsFaceArray;
                break;
            case 'numbers':
                self.cardsFaceArray = cardsNumbersArray;
                return self.cardsFaceArray;
                break;
            case 'animals':
                self.cardsFaceArray = cardsAnimalsArray;
                return self.cardsFaceArray;
                break;
        }
    }

    self.getPlayerInfo = function () {
        var nameplayers = document.getElementById("name");
       
        // self.playerInfo.name = nameplayers.value;


    };

    self.getNumberOfCards = function () {
        var inputDifficulty = document.getElementsByName("difficulty");
        for (var i = 0; i < inputDifficulty.length; i++) {
            if (inputDifficulty[i].checked) {
                self.numberOfCards = Number(inputDifficulty[i].value);
                return self.numberOfCards;
            }
        };
    }
    self.getBackCards = function () {
        var inputBack = document.getElementsByName("back");
        for (var i = 0; i < inputBack.length; i++) {
            if (inputBack[i].checked) {
                self.backCard = inputBack[i].value;
                return self.backCard;
            }
        };
    }
    self.getRandomArr = function () {

        for (var i = 0; i < self.numberOfCards; i++) {
            if (self.randomCardsArray.length === self.numberOfCards / 2) {
                self.cardsFaceArray = self.randomCardsArray.slice();
            }

            self.randomCardsArray.push(self.cardsFaceArray.splice(Math.floor(Math.random() * self.cardsFaceArray.length), 1)[0]);
        }
        return self.randomCardsArray;
    };

    self.createBoardCards = function () {
        for (let i = 0; i < self.randomCardsArray.length; i++) {
            self.face = self.randomCardsArray[i]
            var card = new Card(self.randomCardsArray[i], self.backCard, self.randomCardsArray[i]);
            self.wrapperCards.push(card.getWrapperCard());

        }
    }
    self.addCards = function () {
        var boardOfCards = document.getElementById("board_cards");
        var timerStepsReset = document.getElementById("timerStepsReset");
        var btnPlay = document.getElementById("btn_play");
        var wrapPlay = document.getElementById("play");
        btnPlay.style.display = "none";
        wrapPlay.style.display = "none";
        timerStepsReset.style.display = "flex";
        boardOfCards.style.display = "flex";

        self.wrapperCards.forEach(function (card) {
            boardOfCards.appendChild(card);
        });
    };

    self.addListeners = function () {
        document.getElementById("board_cards").addEventListener("mouseup", self.turnCard);
        window.addEventListener("hashchange", self.backReset);
        window.addEventListener("beforeunload", self.backReset);
    };


    self.turnCard = function (event) {

        var flippedCards = document.getElementsByClassName("flipped");
        if (!event.target.classList.contains('back_card')) return;
        var target = event.target;
        if (self.counterFlippedCards < 2) {
            event.target.parentNode.classList.add('flipped');
        }

        self.counterFlippedCards = self.counterFlippedCards + 1;
        self.startSound();
        if (self.counterFlippedCards === 2) {

            step.start();
            var flippedCards = document.querySelectorAll('.flipped');

            if (getComputedStyle(flippedCards[0].children[1]).backgroundImage === getComputedStyle(flippedCards[1].children[1]).backgroundImage) {
                soundName = flippedCards[0].children[1].getAttribute("class").split(" ")[1];
                self.startSound(soundName);
                vibro();
                flippedCards.forEach(function (elem) {
                    var timeout1 = setTimeout(function () {
                        elem.classList.add('hidden');
                        
                    }, 1000);
                    var timeout2 = setTimeout(function () {

                        self.wrapperCards.splice(self.wrapperCards.indexOf(elem.parentNode), 1);
                        elem.classList.remove('flipped');

                        if (document.querySelectorAll(".hidden").length === self.numberOfCards) {

                            timer1.stop();
                            self.flowingCongratulations();
                        }

                        self.counterFlippedCards = 0;
                    }, 1000);

                });
            } else {

                flippedCards.forEach((elem) => {
                    var timeout1 = setTimeout(() => {
                        elem.classList.remove('flipped');
                    }, 1000);
                    var timeout2 = setTimeout(() => {
                        self.counterFlippedCards = 0;
                    }, 1500);

                });
            }
        }
    }

    self.startSound = function (soundName) {

        if (soundName) {
            if (audio.canPlayType("audio/mpeg") == "probably") {
                audio.src = 'audio/' + self.backCard + '/' + soundName + '.mp3';
            }
            else {
                audio.src = 'audio/' + self.backCard + '/' + soundName + '.ogg';
            }
            audio.play();
        }
        else {
            if (audio.canPlayType("audio/mpeg") == "probably") {
                audio.src = 'audio/card.mp3';
                audio.className = "audio";
            }
            else {
                audio.src = 'audio/card.ogg';
            }
            audio.play();
        }

    }

    self.stop = function () {

        step.stop();
        document.getElementById("board_cards").innerHTML = "";

    };

    self.flowingCongratulations = function () {
        var timeMin = document.getElementById("min").innerHTML;
        var timeSec = document.getElementById("sec").innerHTML;
        var numberSteps = document.getElementById("numbersOfSteps").innerHTML;
        var congratulations = document.getElementById("congratulations");
        document.getElementById("timerStepsReset").style.opacity = "0.6";
        document.getElementById("board_cards").style.opacity = "0.7";

       
        congratulations.innerHTML = '<p>Your Time: '+timeMin+' '+timeSec+'</p><p>Your Steps: '+numberSteps+'</p><p>Best Score: </p><h3>, Good Job!</h3><button id="btn_new_game" onclick="reset()">New Game</button>';
       
       
        congratulations.style.transform = "translateY(480px)";

    }

    //
    self.backReset = function () {
        var event = event || window.event;
        var oldHash = window.location.hash;
        switch (event.type) {
            case 'beforeunload':
                event.returnValue = 'Возможно, внесенные изменения не сохраняться.';
                break;
            case 'hashchange':
                var returnValue = confirm('Переход осуществится на главную страницу! Продолжить?');
                if (returnValue) {
                    window.removeEventListener("beforeunload", self.backReset);
                    window.removeEventListener("hashchange", self.backReset);
                    switchToStateFromURLHash()
                }
                break;
        }
    }

}
function Card(className, backCard, faceCard) {
    var self = this;
    self.className = className;
    self.backCard = backCard;
    self.faceCard = faceCard;

    self.getWrapperCard = function () {

        var wrapperCard = document.createElement("div");

        wrapperCard.className = "wrapper_card";

        var back = document.createElement("span");
        back.className = "back_card";
        back.tabIndex = "4";
        back.style.background = "url(images/sprite_back2.svg#" + self.backCard + ") no-repeat";
        back.style.backgroundSize = "cover";

        var face = document.createElement("span");
        face.className = "face_card " + self.className + "";
        face.style.background = "url(images/" + self.backCard + "/" + self.faceCard + ".png) no-repeat";
        face.style.backgroundSize = "contain";

        wrapperCard.appendChild(back);
        wrapperCard.appendChild(face);

        return wrapperCard;
    };

}
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

function saveTimeSteps() {
    var memory = [];
    const keys = Object.keys(localStorage);

    game.playerInfo.time = timerDOMElem.innerHTML;

    for (let i = 0; i < keys.length && i < 10; i++) {
        archive.push(localStorage.getItem(keys[i]))
    }

    if (archive.length === 0) {
        localStorage.setItem(1, JSON.stringify(game.playerInfo));
    } else {
        archive.push(JSON.stringify(game.playerInfo));
        archive.sort((a, b) => {
            if (Number(JSON.parse(a).time) < Number(JSON.parse(b).time)) {
                return -1;
            }
            if (Number(JSON.parse(a).time) > Number(JSON.parse(b).time)) {
                return 1;
            }

            return Number(JSON.parse(a).stopTime) - Number(JSON.parse(b).stopTime);
        });

        for (let i = 1; i <= archive.length && i <= 10; i++) {
            localStorage.setItem(i, archive[i - 1]);
        }
    }
};

function reset() {
    var game = new Game();
        game.stop();
        var timer = new Timer();
        timer.stop();
        var game1 = new Game();
        var timer1 = new Timer();
        startPlay();
        document.getElementById("congratulations").style.transform = "translateY(-480px)";
    function newGame(){
        
        document.getElementById("timerStepsReset").style.opacity = "1";
        document.getElementById("board_cards").style.opacity = "1";
    }
    setTimeout(newGame(), 5000);
}


function keyboardKontrol(event) {
    event = event || window.event;
    if (event.altKey) {

        switch (event.keyCode) {
            case 49:

                window.location.href = "#Main";
                createPlayContainer();
                break;
            case 50:
                event.preventDefault();
                window.location.href = "#Play";
                createSettingsContainer();
                break;
            case 51:
                event.preventDefault();
                window.location.href = "#Records";
                createRecordsContainer();
                break;
            case 52:
                event.preventDefault();
                window.location.href = "#Description";
                createDescriptionContainer();
                break;
        }
    }

    return false;
}




//add vibro
function vibro() {
    if (navigator.vibrate) { // есть поддержка Vibration API?
        window.navigator.vibrate(200);
    }
}
