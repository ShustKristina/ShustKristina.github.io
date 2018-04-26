function compareWords(word1, word2) {
    var counterDifferentLetters = 0;
    for (var i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) {
            counterDifferentLetters++;
        }
    }
    return counterDifferentLetters;
}

function nextStep(startWord, dictionary, endWord) {
    var wordArray = []
    if ((dictionary.indexOf(endWord) != -1 && compareWords(startWord, endWord) == 1) || compareWords(startWord, endWord) == 1) {
        wordArray.push(startWord);
        wordArray.push(endWord);
        return wordArray;
    }
    else {
        var arr = [];
        for (var i = 0; i < dictionary.length; i++) {
            if (compareWords(dictionary[i], startWord) == 1) {
                arr.push(dictionary[i]);
            }
        }
        if (arr.length == 0) {
            return null;
        }
        else {
            for (var j = 0; j < arr.length; j++) {
                var index = dictionary.indexOf(arr[j]);
                dictionary.splice(index, 1)
                var result = nextStep(arr[j], dictionary, endWord);
                if (result == null) {
                    return null;
                }
                else {
                    result.unshift(startWord)
                    return result;
                }
            }
        }
    }
}

console.log("Цепочка слов от ЛИСЫ до ЛОСЯ: "+nextStep("ЛИСА", ["ТАРА", "ЛИПА", "ТУРА", "ЛУЖА", "ПАРК", "ЛОЖЬ", "ЛУПА", "ПЛОТ", "МУРА", "ПАУК", "ПАУТ", "ПЛУТ", "ЛОЖА", "СЛОТ", "ПАРА"], "ЛОСЬ"));
console.log("Цепочка слов от МУХИ до СЛОНА: "+nextStep("МУХА", ["КАФР", "КАИР", "КЛОН", "КЛИН","КАРЕ", "МУРА", "МАЛО", "КАИН","САЛО", "ЖАЛО", "КАФЕ", "КАРА", "МАРА", "КУЛА", "КИОТ","ЛОЖЬ", "ЛУПА", "КИЛА", "КИЛТ", "КЛОТ", "КЛОН", "ТАРА", "ЛИПА", "ТУРА", "ЛУЖА", "ПАРК", "ПЛОТ", "МУРА", "ПАУК", "ПАУТ", "ПЛУТ", "ЛОЖА", "СЛОТ", "ПАРА"], "СЛОН"))


