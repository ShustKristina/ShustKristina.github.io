function createForm(){
   document.querySelector(".form_window").style.opacity="1"  
}

function closeForm(){
    document.querySelector(".form_window").style.opacity="0";
}

var textSlides = document.querySelectorAll('.text_slide');
var currentSlide = 0;
var timer=setInterval(nextSlide, 5000);
function nextSlide() {
var textSlides = document.querySelectorAll('.text_slide');
textSlides[currentSlide].className = 'text_slide';
currentSlide = (currentSlide+1)%textSlides.length;
textSlides[currentSlide].className = 'text_slide slide_active';
}

