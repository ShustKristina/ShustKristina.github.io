window.addEventListener("load", createNode);
function createNode(){
     var btnBeginStydy=document.getElementById("btn_begin_study");
    btnBeginStydy.addEventListener("click", createPlayContainer);
    
     var btnSettings=document.getElementById("btn_settings");
    btnSettings.addEventListener("click", createSettingsContainer);
    
     var btnDescription=document.getElementById("btn_description");
    btnDescription.addEventListener("click", createDescriptionContainer);

//create PLAY CONTAINER
    function createPlayContainer(){
        var wrapperPlay=document.createElement("div");
        wrapperPlay.className="wrapper";
        wrapperPlay.id="themes";
        wrapperPlay.innerHTML='<a href="index.html" class="logo">FUNNY ENGLISH</a><div class="wrapper_balls"><a href="#choice_game"><img id="ballThemeFruit" src="images/sprites.svg#fruit"></a><a href="#choice_game"><img id="ballThemeNumbers"  src="images/sprites.svg#numbers"></a><a href="#choice_game"><img id="ballThemeFamily"  src="images/sprites.svg#family"></a><a href="#choice_game"><img id="ballThemeAnimals" src="images/sprites.svg#animals"></a></div>'; 
        document.body.appendChild(wrapperPlay);
        
        var ballFruit=document.getElementById("ballThemeFruit");
        var ballNumbers=document.getElementById("ballThemeNumbers");
        var ballFamily=document.getElementById("ballThemeFamily");
        var ballAnimals=document.getElementById("ballThemeAnimals");
        ballFruit.addEventListener("click", choiceLearnOrPuzzle);
       ballNumbers.addEventListener("click", choiceLearnOrPuzzle);
        ballFamily.addEventListener("click", choiceLearnOrPuzzle);
        ballAnimals.addEventListener("click", choiceLearnOrPuzzle);
        
}
    
    //create SETTINGS CONTAINER
    function createSettingsContainer(){
        var wrapperSettings=document.createElement("div");
        wrapperSettings.className="wrapper";
        wrapperSettings.id="settings";
        wrapperSettings.innerHTML='<a href="index.html" class="logo">FUNNY ENGLISH</a> <div class="settings"><button>Выключить звук<img style="vertical-align: middle"src="images/sprite_settings.svg#mute"></button><button>Отключить вибрацию<img style="vertical-align: middle" src="images/sprite_settings.svg#vibro"></button></div>'; 
        document.body.appendChild(wrapperSettings);
}
    
    //create DESCRIPTION CONTAINER
    function createDescriptionContainer(){
        var wrapperDescription=document.createElement("div");
        wrapperDescription.className="wrapper";
        wrapperDescription.id="description";
        wrapperDescription.innerHTML='<a href="index.html" class="logo">FUNNY ENGLISH</a><p class="description_game"><img class="butterfly but1" src="images/butterfly.svg"><img class="butterfly but2"src="images/butterfly.svg"><img class="butterfly but3"src="images/butterfly.svg"><img class="butterfly but4"src="images/butterfly.svg">Наше приложение разработано специально для детишек в возрасте от 3-ех лет. Забавные и увлекательные игры, с музыкальным сопровождением, помогут малышам с энтузиазмом начать изучение английского языка.Проходя разные уровни приложения, дети выучат английские слова на разные темы: семья, животные. Познакомятся с цифрами и буквами. Услышат правильное произношение английских слов. Малыши смогут получать баллы за прохождение разных заданий, а их родители следить за прогрессом своих детишек. </p>'; 
        document.body.appendChild(wrapperDescription);
}
    //create container LEARN OR PZZLE
    
    function choiceLearnOrPuzzle(){
            var choiceLearnOrPuzzle=document.createElement("div");
            choiceLearnOrPuzzle.className="wrapper";
            choiceLearnOrPuzzle.id="choice_game";
            choiceLearnOrPuzzle.innerHTML='<a href="index.html" class="logo">FUNNY ENGLISH</a><div class="learn_english"><img id="learn_sova" src="images/sova.png" alt=""><p></p><img id="learn_puzzle" src="images/puzzle.png" alt=""></div>';
            document.body.appendChild(choiceLearnOrPuzzle);
        var learnSova = document.getElementById("learn_sova");
learnSova.addEventListener("click", createLearnWords);

var learnPuzzle = document.getElementById("learn_puzzle");
learnPuzzle.addEventListener("click", createPuzzle);
    }
    function createLearnWords() {
    var wrapperLearnWords = document.createElement("div");
    var logo = document.getElementById("logo");
    wrapperLearnWords.className = "wrapper";
    wrapperLearnWords.setAttribute("id", "wrapper_all_words");
    document.body.appendChild(wrapperLearnWords);
    wrapperLearnWords.appendChild(logo);
    var rulesLearnWords = document.createElement("div");
    rulesLearnWords.className = "description_learn_words";
    rulesLearnWords.innerHTML = "<p class='description_game'> <img class='butterfly but1' src='images/butterfly.svg'><img class='butterfly but2'src='images/butterfly.svg'><img class='butterfly but3'src='images/butterfly.svg'><img class='butterfly but4'src='images/butterfly.svg'> Изучайте новые слова в игровой форме! В воздушном шарике изображено текущее слово, справа &ndash; его написание на английском, кликая на кнопку воспроизведения, можно неоднократно его прослушать. Как только изучили одно слово, смело приступайте к следующему, также вы можете возвращаться к предыдущим словам<button id='beginLesson' style='width:280px; margin-left: calc(50% - 150px); font-size: 20px; padding:0'>Перейти к уроку</button></p>";
    wrapperLearnWords.appendChild(rulesLearnWords);
    var buttonBeginLesson = document.getElementById("beginLesson");

    buttonBeginLesson.addEventListener("click", LearnCurrentWord)

}

}

//конструктор для создания div с одним словом+звук+картинка
var arrFamilyWords = ["mother", "father", "son", "daughter", "sister", "brother", "grandmather", "grandfather"]
function LearnCurrentWord() {
    var self = this;
    
        //функция рандомной сортировки
    function compareRandom() {
        return Math.random() - 0.5;
    }
    arrFamilyWords.sort(compareRandom)
    var wrapperCurrentWord = document.createElement("div");
        wrapperCurrentWord.className = "wrapper";
    wrapperCurrentWord.id="wrapper_current_word";
    wrapperCurrentWord.style.position="relative";
    wrapperCurrentWord.innerHTML='<button id="btn_back" style="width:200px; position: absolute; bottom:0" onClick="back()">Предыдущее слово</button> <button id="btn_next" style="width:200px; position: absolute; bottom:0; right:calc(0% + 20px)" onClick="next()">Следующее слово</button>';
    document.body.appendChild(wrapperCurrentWord);
    var currentWord = document.createElement("div");
    
    currentWord.className = "current_word learn_english";
   currentWord.id="current_word";
    currentWord.style.display="flex";
    currentWord.style.justifyContent="space-around";
    currentWord.style.alignItems="center";
    currentWord.innerHTML = '<img src="images/family/' + arrFamilyWords[0] + '.png"><p class="word_eng">'+arrFamilyWords[0]+'</p>'; 
    wrapperCurrentWord.appendChild(currentWord);
    
    document.body.addEventListener("keyup", next)
    document.body.addEventListener("keyup", back)
    
}
$(document.getElementById("btn_next")).click(function() {
    
        $( "#current_word" ).toggle( "slide" );
    
});
var current=1;
 

var quantityWords=arrFamilyWords.length;
function next(event){

    
        

    
        if(current<quantityWords||(event.keyCode==39&&current<quantityWords)){
            current++;
            document.getElementById("current_word").innerHTML = '<img src="images/family/' + arrFamilyWords[current-1] + '.png"><p class="word_eng">'+arrFamilyWords[current-1]+'</p>';
        }
    
    }
function back(event){
        if(current>1||(event.keyCode==37&&current>1)){
          
            current--;
            document.getElementById("current_word").innerHTML = '<img src="images/family/' + arrFamilyWords[current-1] + '.png"><p class="word_eng">'+arrFamilyWords[current-1]+'</p>';
        }
    
   
    }


var learnWords = document.getElementById("learn_sova");
learnWords.addEventListener("click", createLearnWords);



function createPuzzle() {
    var arrFamily = ["mother", "father", "son", "daughter", "uncle", "aunt", "niece", "cousin"]

    var wrapperPuzzle = document.createElement("div");
    var logo = document.getElementById("logo");

    wrapperPuzzle.setAttribute("class", "wrapper");
    wrapperPuzzle.setAttribute("id", "wrapper_puzzle");
    var board = document.createElement("div");
    board.setAttribute("class", "board");
    board.setAttribute("id", "board");
    board.style.width = "300px";
    board.style.height = "300px";
    document.body.appendChild(wrapperPuzzle);
    wrapperPuzzle.appendChild(logo);
    wrapperPuzzle.appendChild(board);


    var tableBoard = document.createElement("table");
    tableBoard.style.border = "1px solid black";
    tableBoard.style.width = "100%";
    tableBoard.style.height = "100%";

    tableBoard.innerHTML = "<tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td></tr>";

    board.appendChild(tableBoard);
    for (var i = 0; i < arrFamily.length; i++) {
        var newArrFamily = arrFamily[i].split("");
        for (var j = 0; j < newArrFamily.length; j++) {

        }

    }

}
var learnPuzzle = document.getElementById("learn_puzzle");
learnPuzzle.addEventListener("click", createPuzzle);