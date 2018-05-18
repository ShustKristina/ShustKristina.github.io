function Game() {
    var inputBack = document.getElementsByName("back");
    var inputDifficulty = document.getElementsByName("difficulty");
    var timeMin = document.getElementById("min").innerHTML;
    var timeSec = document.getElementById("sec").innerHTML;
    var flippedCards = document.getElementsByClassName("flipped");
    var boardOfCards = document.getElementById("board_cards");
    var timerStepsReset = document.getElementById("timerStepsReset");
    var btnPlay = document.getElementById("btn_play");
    var wrapPlay = document.getElementById("play");
    var numberSteps = document.getElementById("numbersOfSteps").innerHTML;
    var congratulations = document.getElementById("congratulations");
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

    self.getNumberOfCards = function () {
        for (var i = 0; i < inputDifficulty.length; i++) {
            if (inputDifficulty[i].checked) {
                self.numberOfCards = Number(inputDifficulty[i].value);
                window.localStorage.setItem("Difficulty", self.numberOfCards)
                return self.numberOfCards;
            }
        };
    }

    self.getBackCards = function () {
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
                    setTimeout(function () {
                        elem.classList.add('hidden');
                    }, 1000);
                    setTimeout(function () {
                        self.wrapperCards.splice(self.wrapperCards.indexOf(elem.parentNode), 1);
                        elem.classList.remove('flipped');
                        if (document.querySelectorAll(".hidden").length === self.numberOfCards) {
                            
                            timer1.stop();
                            window.localStorage.setItem("TimeMin", timeMin);
                            window.localStorage.setItem("TimeSec", timeSec);
                            window.localStorage.setItem("Steps", numberSteps);
                            saveResult();
                            self.flowingCongratulations();
                        }
                        self.counterFlippedCards = 0;
                    }, 1000);
                });
            } else {
                flippedCards.forEach((elem) => {
                    setTimeout(() => {
                        elem.classList.remove('flipped');
                    }, 1000);
                    setTimeout(() => {
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
        boardOfCards.innerHTML = "";
    };

    self.flowingCongratulations = function () {
        timerStepsReset.style.opacity = "0.6";
        boardOfCards.style.opacity = "0.7";
        congratulations.innerHTML = '<p>Your Time: ' + timeMin + ' ' + timeSec + '</p><p>Your Steps: ' + numberSteps + '</p><p>Best Score: ' + Storage[0].score + ' sec</p><h3>' + window.localStorage["UserName"] + ', Good Job!</h3><button id="btn_new_game" onclick="reset()">New Game</button>';
        congratulations.style.transform = "translateY(480px)";
    }

    //SPA!!!
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