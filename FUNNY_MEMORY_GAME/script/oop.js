 //функция рандомной сортировки
function compareRandom() {
    return Math.random() - 0.5;
}
//конструктор для создания div с одним словом+звук+картинка

var arrFamilyWords = ["mother", "father", "son", "daughter", "sister", "brother", "grandmather", "grandfather"]
var current=1;
    var quantityWords=arrFamilyWords.length;
function LearnCurrentWord() {
    var arrFamilyWords = ["mother", "father", "son", "daughter", "sister", "brother", "grandmather", "grandfather"]
    var current=1;
    var quantityWords=arrFamilyWords.length;
    var self = this;
    
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
    
    

    //document.body.addEventListener("keyup", next)
    //document.body.addEventListener("keyup", back)
    
}
function next(){
    
    if(current<quantityWords){
        current++;
        document.getElementById("current_word").innerHTML = '<img src="images/family/' + arrFamilyWords[current-1] + '.png"><p class="word_eng">'+arrFamilyWords[current-1]+'</p>';
    }
}
function back(){
    var btnBack=document.getElementById("btn_back");
    if(current==1){
        
    }
    if(current>1){
        
        current--;
        document.getElementById("current_word").innerHTML = '<img src="images/family/' + arrFamilyWords[current-1] + '.png"><p class="word_eng">'+arrFamilyWords[current-1]+'</p>';
    }
}

 


