
var btnBeginStydy = document.getElementById("btn_begin_play");
btnBeginStydy.addEventListener("click", createPlayContainer);

var btnSettings = document.getElementById("btn_settings");
btnSettings.addEventListener("click", createSettingsContainer);

var btnRecords = document.getElementById("btn_records");
btnRecords.addEventListener("click", createRecordsContainer);

var btnDescription = document.getElementById("btn_description");
btnDescription.addEventListener("click", createDescriptionContainer);

//create PLAY CONTAINER
function createPlayContainer() {
    var wrapper = document.getElementById("wrapper_main");
    var startPage = document.getElementById("start_page");
    var containerInfoGame = document.createElement("div");
    containerInfoGame.id = "containerInfoGame";
    startPage.id = "play";
    startPage.innerHTML = '<div id="playerInfo"><h3>Information about you</h3><label for="name">Your Name</label><input type="text" name="name" id="name" required><label for="surname">Your Surname</label><input type="text" name="surname" id="surname"></div><div id="choise_back"><h3>Cards Back</h3><label for="family"><input type="radio" name="back" id="family" value="family" checked><img src="images/sprite_back.svg#family"></label><label for="animals"><input type="radio"  name="back" id="animals" value="animals"><img src="images/sprite_back.svg#animals"></label><label for="numbers"><input type="radio" name="back" id="numbers" value="numbers"><img src="images/sprite_back.svg#numbers"></label></div><div id="choice_difficult"><h3>Difficulty Of The Game</h3><input type="radio" name="difficulty" value="6" id="easy" ><label for="easy">Easy (6x1)</label><input type="radio" name="difficulty" value="12" id="medium" checked><label for="medium">Medium (6x2)</label><input type="radio" name="difficulty" value="18" id="hard"><label for="hard">Hard (6x3)</label></div>';
    var btnStart = document.createElement("button");
    btnStart.id = "btn_play";
    btnStart.style.width = "150px"
    btnStart.style.marginLeft = 'calc(50% - 75px)';
    btnStart.style.marginTop = "30px";
    btnStart.textContent = "PLAY";
    var boardOfCards = document.createElement("div");
    boardOfCards.id = "board_cards";
    //boardOfCards.style.display = "none";
    wrapper.appendChild(containerInfoGame);
    containerInfoGame.appendChild(startPage);
    containerInfoGame.appendChild(btnStart);
    containerInfoGame.appendChild(boardOfCards);
    btnStart.addEventListener("click", startPlay, false);
}

//create SETTINGS CONTAINER
function createSettingsContainer() {
    var wrapper = document.getElementById("wrapper_main");
    var startPage = document.getElementById("start_page");
    startPage.id = "settings";
    startPage.innerHTML = '<div><button id="btn_mus">Выключить музыку</span><img src="images/sprite_settings.svg#muteMusic"></button><button id="btn_sound">Выключить звук<img src="images/sprite_settings.svg#muteSound"></button><button id="btn_vibro">Отключить вибрацию<img src="images/sprite_settings.svg#offVibro"></button><div>';
    wrapper.appendChild(startPage);
    var btnMus = document.getElementById("btn_mus");
    btnMus.addEventListener("click", changeOnOffMus, false);
    var btnSound = document.getElementById("btn_sound");
    btnSound.addEventListener("click", changeOnOffSound, false);
    var btnVibro = document.getElementById("btn_vibro");
    btnVibro.addEventListener("click", changeOnOffVibro, false);
}
//change On/Off on buttons
var flag = 0;
function changeOnOffMus() {
    if (flag == 0) {
        this.innerHTML = 'Включить музыку</span><img src="images/sprite_settings.svg#Music">';
        flag = 1;
    } else {
        this.innerHTML = 'Выключить музыку</span><img src="images/sprite_settings.svg#muteMusic">';
        flag = 0;
    }
}
function changeOnOffSound() {
    if (flag == 0) {
        this.innerHTML = 'Включить звук</span><img src="images/sprite_settings.svg#Sound">';
        flag = 1;
    } else {
        this.innerHTML = 'Выключить звук</span><img src="images/sprite_settings.svg#muteSound">';
        flag = 0;
    }
}
function changeOnOffVibro() {
    if (flag == 0) {
        this.innerHTML = 'Включить виброотклик</span><img src="images/sprite_settings.svg#Vibro">';
        flag = 1;
    } else {
        this.innerHTML = 'Отключить вибрацию</span><img src="images/sprite_settings.svg#offVibro">';
        flag = 0;
    }
}
//create DESCRIPTION CONTAINER
function createDescriptionContainer() {
    var wrapper = document.getElementById("wrapper_main");
    var startPage = document.getElementById("start_page");
    startPage.id = "description";
    startPage.innerHTML = '<p class="description_game"><img class="butterfly but1" src="images/butterfly.svg"><img class="butterfly but2"src="images/butterfly.svg"><img class="butterfly but3"src="images/butterfly.svg"><img class="butterfly but4"src="images/butterfly.svg">Наше приложение разработано специально для детишек в возрасте от двух лет. Игра позволяет тренировать память, запоминать новые слова. Выбирая рубашку карт, вы определяете и рубрику тем карточек-перевертышей. Постепенно натренировав свою память, можно также и увеличивать уровень сложности. Управление игрой осуществляется либо мышкой, либо стрелками &laquo;вверх&raquo;, &laquo;вниз&raquo;, &laquo;вперед&raquo;, &laquo;назад&raquo; и &laquo;enter&raquo;. </p>';
    wrapper.appendChild(startPage);
}
//create RECORDS CONTAINER

function createRecordsContainer() {
    var wrapper = document.getElementById("wrapper_main");
    var startPage = document.getElementById("start_page");
    startPage.id = "records";
    startPage.innerHTML = '<div id="container_records"><table id="table_records"><tr><td><img class="butterfly but1" src="images/butterfly.svg"><img class="butterfly but2"src="images/butterfly.svg"><img class="butterfly but3"src="images/butterfly.svg"><img class="butterfly but4"src="images/butterfly.svg"></td></tr><tr><td>Date</td><td>Player</td><td>Score</td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td></tr></table>';
    wrapper.appendChild(startPage);
}


//


//
var startPlay = function startPlay() {
    var nameplayers = document.getElementById("name");
    var surnamePlayers = document.getElementById("surname");
    var playerInfo = document.getElementById("playerInfo");
    function validate(event) {
        event.preventDefault();
        var errors = document.getElementsByClassName("error");
        for (var i = 0; i < errors.length; i++) {
            errors[i].remove();
        }

        if (nameplayers.value == "" || surnamePlayers.value == "") {
            nameplayers.style.border = "1px solid red";
            surnamePlayers.style.border = "1px solid red";
            var error = document.createElement("div");
            error.className = "error";
            error.textContent = "Enter your name and surname, please!";
            playerInfo.appendChild(error);
        }
        else {
            nameplayers.style.border = "1px solid green";
            surnamePlayers.style.border = "1px solid green";
        }

    }
    validate(event);


    var game = new Game();
    // var timer=new Timer();

    game.getPlayerInfo(); //name+surname
    game.getNumberOfCards();
    game.getBackCards();
    game.defineCardsFace();
    game.getFaceCards();
  
    game.createBoardCards();
    game.addCards();
   
    // game.addGameListeners();
    // game.showGame();
    // timer.start();
}


function Game() {
    var self = this;
    var cardsFamilyArray = ["images/family/brother.png", "images/family/daughter.png", "images/family/father.png", "images/family/grandfather.png", "images/family/grandmather.png", "images/family/sister.png", "images/family/son.png", "images/family/uncle.png", "images/family/aunt.png"];
    var cardsNumbersArray = ["images/numbers/one.png", "images/numbers/two.png", "images/numbers/three.png", "images/numbers/four.png", "images/numbers/five.png", "images/numbers/six.png", "images/numbers/seven.png", "images/numbers/eight.png", "images/numbers/nine.png", "images/numbers/ten.png"];
    var cardsAnimalsArray = ["images/animals/bear.png", "images/animals/cat.png", "images/animals/dog.png", "images/animals/fox.png", "images/animals/hare.png", "images/animals/wolf.png", "images/animals/squirrel.png", "images/animals/camel.png", "images/animals/deer.png"];



    self.playerInfo = {};
    self.stopTime = 0;
    self.numberOfCards = 0;
    self.backCard = "";
    self.wrapCards = [];

    self.randomCardsArray = [];

    self.cardsFaceArray = [];
    self.numbersMatchedCards = 0;
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
        var surnamePlayers = document.getElementById("surname");
        self.playerInfo.name = nameplayers.value;
        self.playerInfo.surname = surnamePlayers.value;

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
    self.getFaceCards = function () {

        for (var i = 0; i < self.numberOfCards; i++) {
            if (self.randomCardsArray.length === self.numberOfCards / 2) {
                self.cardsFaceArray = self.randomCardsArray.slice();
            }

            self.randomCardsArray.push(self.cardsFaceArray.splice(Math.floor(Math.random() * self.cardsFaceArray.length), 1)[0]);
        }
        return self.randomCardsArray;
    };

    self.createBoardCards = function () {
        for (var  i = 0; i < self.randomCardsArray.length; i++) {
            var card = new Card(i, self.backCard, self.randomCardsArray[i]);
            self.wrapCards.push(card.getWrapperCard());
        }
    }
    self.addCards = function () {
    var boardOfCards=document.getElementById("board_cards");
    var btnPlay=document.getElementById("btn_play");
    var wrapPlay=document.getElementById("play");
    btnPlay.style.display="none";
    wrapPlay.style.display="none";
    boardOfCards.style.display="flex";
    
    self.wrapCards.forEach((card) => {
        boardOfCards.appendChild(card);
    });
    boardOfCards.addEventListener('click', Card.turnCard);
    };
    self.getFlippedCards=function() {
        var boardOfCards=document.getElementById("board_cards");
        return [...boardOfCards.querySelectorAll('.flipped')];
    };

}
function Card(id, backCard, faceCard) {
    var self = this;
    self.id = id;
    self.backCard = backCard;
    self.faceCard = faceCard;

    self.getWrapperCard = function () {
        var card = document.createElement("div");
        card.className = "wrapper_card";

        var back = document.createElement("span");
        back.className = "back_card";
        back.style.background="url(images/sprite_back.svg#"+self.backCard+") no-repeat";
        back.style.backgroundSize="contain";
        
        

        var face = document.createElement("span");
        face.className = "face_card";
        face.style.background="url("+self.faceCard+") no-repeat";
        face.style.backgroundSize="contain";
        

        card.appendChild(back);
        card.appendChild(face);

        return card;
    };

self.turnCard=function(EO) {
        if (!EO.target.classList.contains('back')) {
            return;
        }

        if (game.getFlippedCards()[0] === event.target.parentNode) {
            return;
        }

        
        if (game.flippedCardsAmount < 2) {
            event.target.parentNode.className="matched";
        }

        // increase counter of flipped cards
        game.flippedCardsAmount = game.flippedCardsAmount + 1;

        // compare two flipped cards and remove them or flip them back
        if (game.flippedCardsAmount === 2) {
            var flippedCards = game.getFlippedCards();

            if (game.compareCards(flippedCards)) {
                flippedCards.forEach((elem) => {
                    var timeout1 = setTimeout(() => {
                        elem.parentNode.style.opacity = '0';
                    }, 1000);
                    var timeout2 = setTimeout(() => {
                        game.cards.splice(game.cards.indexOf(elem.parentNode), 1);
                        elem.classList.remove('flipped');
                        elem.style.display = 'none';

                        // stop game if all cards disappeared
                        if (game.cards.length === 0) {
                            // stop timer
                            //timer.stop();

                            // clear field, show result
                            //game.showResult();

                            // save result into localStorage
                            //storeResult();
                        }

                        game.flippedCardsAmount = 0;
                    }, 1900);
                    game.timeouts.push(timeout1, timeout2);
                });
            } else {
                flippedCards.forEach((elem) => {
                    var timeout1 = setTimeout(() => {
                        elem.classList.remove('flipped');
                    }, 1000);
                    var timeout2 = setTimeout(() => {
                        game.flippedCardsAmount = 0;
                    }, 1500);
                    game.timeouts.push(timeout1, timeout2);
                });
            }
        }
    }
}
