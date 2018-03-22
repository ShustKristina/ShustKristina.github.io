function palindrome(str) {
    str = str.toLowerCase().replace(".", "").replace(",", "").replace(":", "").replace(";", "").replace("!", "").replace("?", "").replace("ё", "е").replace("ъ", "ь").replace("-", "").trim();
    var strNew = str;

    if (strNew.length <= 1) {
        return true;
    }
    if (strNew.slice(0, 1) != strNew.slice(-1)) {
        return false;
    }

    return palindrome(strNew.slice(1, -1));
}

var test = "иа";
var test2 = "!еА роза упала, на лапу. азораЁ";
console.log(palindrome(test));
console.log(palindrome(test2));