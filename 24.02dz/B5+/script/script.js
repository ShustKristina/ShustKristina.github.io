// не работает
function buildWrapper(arg) {
    return (function buildWrapper(arg2) {
        var element = document.createElement(arg); //create tag
        element.innerHTML = arg2; //paste the text
        var result = document.body.appendChild(element); //text+tag
        return result;
    });
}

//test
var wrapH1 = buildWrapper("H1");
var wrapP = buildWrapper("P");
console.log(wrapH1("СТИХИ"));
console.log(wrapP("Однажды в студёную зимнюю пору"));
console.log(wrapP("Вкусные M&M's"));
 


 

