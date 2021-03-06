//SPA
var SPAState = {};
function switchToStateFromURLHash() {
  var URLHash = window.location.hash;
  var stateStr = URLHash.substr(1);
  if (stateStr != "") {
    SPAState = { pagename: stateStr }; 
  }
  else
    SPAState = { pagename: 'Main' }; 

  var pageHTML = "";
  switch (SPAState.pagename) {
    case 'Main':
      pageHTML += '<div class="wrapper_button"><button tabindex="1" id="btn_begin_play" onclick="switchToGamePage()">Start play</button><button tabindex="1" id="btn_records" onclick="switchToRecordsPage()">The best players</button><button  tabindex="1" id="btn_description" onclick="switchToDescriptionPage()">About game</button></div> ';
      break;
    case 'Play':
      pageHTML += '<div id="containerInfoGame"><div id="play" class="start_page"><div id="playerInfo"><h3>Information about you</h3><label for="namePlayer">Your Name <input type="text" value =' + window.localStorage["UserName"] + ' tabindex="-1" autofocus name="namePlayer" id="namePlayer"></label></div><div id="choise_back"><h3>Cards Back</h3><label for="family"><input  type="radio" name="back" id="family" value="family" checked><img src="images/sprite_back2.svg#family"></label><label for="animals"><input type="radio"  name="back" id="animals" value="animals"><img src="images/sprite_back2.svg#animals"></label><label for="numbers"><input type="radio" name="back" id="numbers" value="numbers"><img src="images/sprite_back2.svg#numbers"></label></div><div id="choice_difficult"><h3>Difficulty Of The Game</h3><input type="radio"  name="difficulty" value="6" id="easy" ><label  for="easy">Easy (6)</label><input type="radio"  name="difficulty" value="12" id="medium" checked><label for="medium">Medium (12)</label><input  type="radio" name="difficulty" value="18" id="hard"><label for="hard">Hard (18)</label></div></div><button id="btn_play" onclick="startPlay()">PLAY</button><div id="timerStepsReset"><div id="steps">Steps <p><span id="numbersOfSteps"></span></p></div><div id="timer">Timer <p><span id="min"></span><span id="sec"></span></p></div></div><div id="board_cards"></div><div id="congratulations"></div></div>';
      break;
    case 'Records':
      pageHTML += "<table id='table_records'><tr><td>Player</td><td>Difficulty</td><td>Time</td><td>Steps</td></tr>";
      if (Storage.length > 10) Storage.length = 10;
      for (var i = 0; i < Storage.length; i++) {
        pageHTML += '<tr><td>' + Storage[i].name + '</td><td>Easy</td><td class="Name"> ' + Storage[i].score + ' sec </td><td>' + Storage[i].steps + '</td></tr>';
      }
      pageHTML += "</table>"
      break;
    case 'Description':
      pageHTML += '<div id="description" class="start_page"><p class="description_game"><img class="butterfly but1" src="images/butterfly.png"><img class="butterfly but2"src="images/butterfly.png"><img class="butterfly but3"src="images/butterfly.png"><img class="butterfly but4"src="images/butterfly.png">Наше приложение разработано специально для детишек в возрасте от двух лет. Игра позволяет тренировать память, запоминать новые слова. Выбирая рубашку карт, вы определяете и рубрику тем карточек-перевертышей. Постепенно натренировав свою память, можно также и увеличивать уровень сложности. <br>Управление игрой осуществляется мышкой. Доступны след. комбинации клавиш для переключения между закладками: Alt+1(&laquo;Главная страница&raquo;), Alt+2(&laquo;Выбор игры&raquo;), Alt+3(&laquo;Рекорды&raquo;), Alt+4(&laquo;Описание приложения&raquo;).</p></div>';
      break;
  }
  document.getElementById('start_page').innerHTML = pageHTML;
}
function userName() {
  if (window.localStorage["UserName"] == undefined) {
    window.localStorage["UserName"] = "User";
  }
}
userName();
function switchToState(newState) {
  var stateStr = newState.pagename;
  location.hash = stateStr;
}

function switchToMainPage() {
  switchToState({ pagename: 'Main' });
}

function switchToGamePage() {
  switchToState({ pagename: 'Play' });
}

function switchToRecordsPage() {
  switchToState({ pagename: 'Records' });
}

function switchToDescriptionPage() {
  switchToState({ pagename: 'Description' });
}

window.addEventListener('hashchange', switchToStateFromURLHash, false);
switchToStateFromURLHash();