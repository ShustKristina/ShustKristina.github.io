function buildWrapper(arg) {
    return function buildWrapper(arg2, arg3) {
        var tag = arg; //create tag
        var text = arg2.split('&').join("&amp;").split("'").join("&apos;").split('"').join("&quot;").split('<').join("&lt;").split('>').join("&gt;"); //paste the text
        if (arg3) {
            var attributesArr = [];
            for (var key in arg3) {
                var attr = key + '=' + '"' + arg3[key] + '"';
                attributesArr.push(attr);
            }
            var result = "<" + tag + " " + attributesArr.join(" ") + ">" + text + "<" + "/" + tag + ">"; //text+tag+attributes
        }
        else {
            var result = "<" + tag + ">" + text + "<" + "/" + tag + ">"; //text+tag 
        }
        return result;
    };
}

//test
var wrapH1 = buildWrapper("H1");
var wrapP = buildWrapper("P");
console.log(wrapH1("СТИХИ", { align: "center", class: "logo", id: "logo"}));
console.log(wrapP("Однажды в <студёную> зимнюю пору"));
console.log(wrapP("Вкусные M&M's"));





