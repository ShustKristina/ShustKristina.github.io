
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
    var containerInfoGame=document.createElement("div");
    containerInfoGame.id="containerInfoGame";
    startPage.id = "play";
    startPage.innerHTML = '<div id="playerInfo"><h3>Information about you</h3><label for="name">Your Name</label><input type="text" name="name" id="name" required><label for="surname">Your Surname</label><input type="text" name="surname" id="surname"></div><div id="choise_back"><h3>Cards Back</h3><label for="family"><input type="radio" name="back" id="family" value="family" checked><img src="images/sprite_back.svg#family"></label><label for="animals"><input type="radio"  name="back" id="animals" value="animals"><img src="images/sprite_back.svg#animals"></label><label for="numbers"><input type="radio" name="back" id="numbers" value="numbers"><img src="images/sprite_back.svg#numbers"></label></div><div id="choice_difficult"><h3>Difficulty Of The Game</h3><input type="radio" name="difficulty" value="8" id="easy" ><label for="easy">Easy (4x2)</label><input type="radio" name="difficulty" value="12" id="medium" checked><label for="medium">Medium (4x3)</label><input type="radio" name="difficulty" value="16" id="hard"><label for="hard">Hard (4x4)</label></div>';
    var btnStart = document.createElement("button");
    btnStart.style.width = "150px"
    btnStart.style.marginLeft = 'calc(50% - 75px)';
    btnStart.style.marginTop = "30px";
    btnStart.textContent = "PLAY";
    wrapper.appendChild(containerInfoGame);
    containerInfoGame.appendChild(startPage);
    containerInfoGame.appendChild(btnStart);
    btnStart.addEventListener("click", createBoard, false);

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
    startPage.innerHTML = '<p class="description_game"><img class="butterfly but1" src="images/butterfly.svg"><img class="butterfly but2"src="images/butterfly.svg"><img class="butterfly but3"src="images/butterfly.svg"><img class="butterfly but4"src="images/butterfly.svg">Наше приложение разработано специально для детишек в возрасте от двух лет. Игра позволяет тренировать память, запоминать новые слова. Можно выбрать не только рубашку карт, но и рубрику тем карточек-перевертышей. Постепенно натренировав свою память, можно также и увеличивать уровень сложности. Управление игрой осуществляется либо мышкой, либо стрелками &laquo;вверх&raquo;, &laquo;вниз&raquo;, &laquo;вперед&raquo;, &laquo;назад&raquo; и &laquo;enter&raquo;. </p>';
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




//Start Play

function createBoard(){

    //back
    var inputBack=document.getElementsByName("back");

    for(var i=0; i<inputBack.length; i++){
        if(inputBack[i].checked){
            var back=inputBack[i].value;
            console.log(back)         
        }
    }
    var inputDifficulty=document.getElementsByName("difficulty");
    for(var i=0; i<inputDifficulty.length; i++){
        if(inputDifficulty[i].checked){
            var count=inputDifficulty[i].value;
            console.log(typeof(count))    
        }
    }
    var wrapper = document.getElementById("wrapper_main");
    var startPage = document.getElementById("containerInfoGame");
    startPage.id = "cardsBoard";
    startPage.innerHTML="";
    wrapper.appendChild(startPage);

   var game = new Game(back, count);
   game.buildBoard();
}

//class game

function Game(back, count, player) {
    var self=this;
        self.back = back;
        self.count = count;
        self.player = player;
        self.selectedCards = [];
        self.board = document.querySelector('#cardsBoard');
   
        this.buildBoard=function(back, count){
            
            
            for(let i=0; i<parseFloat(this.count); i++){
                var card=document.createElement("span");
                card.className="card-back";
                card.innerHTML="<img src='images/sprite_back.svg#"+this.back+"'>";
                self.board.appendChild(card);
            }
            
        }
    


}
