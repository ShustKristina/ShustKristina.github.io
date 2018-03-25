function palindrome(str) {
    var strNew = str.toLowerCase().replace(".", "").replace(",", "").replace(":", "").replace(";", "").replace("!", "").replace("?", "").replace("ё", "е").replace("ъ", "ь").replace("-", "").replace(/\s/g, "");

    function palindrome2(abc) {

        if (abc.length <= 1) {
            return true;
        }
        if (abc.slice(0, 1) != abc.slice(-1)) {
            return false;
        }
        return palindrome2(abc.slice(1, -1));
    }
    return palindrome2(strNew);
}
var test = "А роза упала на лапу Азора.";
console.log(palindrome(test));