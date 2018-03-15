function palindrome(str) {
    str = str.toLowerCase().trim().replace(".", "").replace(",", "").replace(":", "").replace(";", "").replace("!", "").replace("?", "").replace("ё", "е").replace("ъ", "ь").replace("-", ""); 
    var l = str.length < 2; 
    var letterEqual = (str.slice(0, 1) === str.slice(-1)); 
    return !l && letterEqual ? palindrome(str.slice(1, -1)) : l;
}


var test = "мама мыла раму";
var test2 = "!еА роза упала, на лапу. азораЁ";
console.log(palindrome(test));
console.log(palindrome(test2));