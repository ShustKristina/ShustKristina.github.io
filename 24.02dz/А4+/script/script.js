function palindrome(str) {
   str = str.toLowerCase().replace(".", "").replace(",", "").replace(":", "").replace(";", "").replace("!", "").replace("?", "").replace("ё", "е").replace("ъ", "ь").replace("-", "").replace(/\s/g,"");
 return str;
}

function palindrome2(str){
       
    if (str.length <= 1) {
        return "Это палиндром";
    }
    if (str.slice(0, 1) != str.slice(-1)) {
        return "Это не палиндром";
    }

    return palindrome2(str.slice(1, -1));
    }
   
var test = prompt("Введите строку");
alert(palindrome2(palindrome(test)));