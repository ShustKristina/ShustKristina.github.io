var test = prompt('Введите текст');

function removeSpace(arg) {
 var l = arg.length;
 var strRemoveSpace = '';
 var c, c0 = ' ';

 for (var i = 0; i < l; i++) {
  c = arg.substring(i, i + 1);
  if (c == ' ') {
   if (c0 == ' ')
    continue;
  }
  c0 = c;
  strRemoveSpace += c;
 }
l = strRemoveSpace.length;
 if (strRemoveSpace.substring(l - 1, l) == ' ') {
  strRemoveSpace = strRemoveSpace.substring(0, l - 1);
 }
 else {
  return strRemoveSpace;
 }
}
console.log("<" + removeSpace(test) + ">");

function trim(s) {
 var l = s.length;
 var t = '',
  c, c0 = ' ';
 for (var i = 0; i < l; i++) {
  c = s.substring(i, i + 1);
  if (c == ' ') {
   if (c0 == ' ')
    continue;
  }
  c0 = c;
  t += c;
 }
 l = t.length;
 if (t.substring(l - 1, l) == ' ') t = t.substring(0, l - 1);
 return t;
}

console.log("<" + trim(test) + ">");
