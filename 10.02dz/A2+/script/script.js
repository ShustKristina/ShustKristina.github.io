var test = prompt('Введите текст');

function removeSpace(arg) {

 var strRemoveSpace = ''; 
 var c, c0 = ' ';

 for (var i = 0; i < arg.length; i++) { 
  c = arg.substring(i, i + 1); 
  if (c == ' ') {
   if (c0 == ' ') continue;
  }
  c0 = c;
  strRemoveSpace += c;
 }

 if (strRemoveSpace.substring(strRemoveSpace.length - 1, strRemoveSpace.length) == ' ') {
  strRemoveSpace.substring(0, strRemoveSpace.length - 1);
 } 
 else{
  return strRemoveSpace;
 }
}
console.log(removeSpace(test));
